export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Incorrect request method' })
  }

  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY

  const gReCaptchaToken = req.body.gReCaptchaToken

  let verificationRes
  const formData = new FormData()
  formData.append('secret', secretKey)
  formData.append('response', gReCaptchaToken)

  try {
    verificationRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    })
  } catch (e) {
    console.log('recaptcha error:', e)
  }

  const verificationResJSON = await verificationRes.json()
  const verificationSuccess = verificationResJSON.success
  const verificationScore = verificationResJSON.score

  if (verificationResJSON && verificationSuccess && verificationScore > 0.5) {
    return res.status(200).json({ success: verificationSuccess, score: verificationScore })
  } else {
    return res.status(400).json({ success: verificationSuccess, score: verificationScore })
  }
}
