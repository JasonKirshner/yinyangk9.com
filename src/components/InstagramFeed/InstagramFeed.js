import Link from "next/link";

import styles from "./InstagramFeed.module.css"

import instagramFeedTestData from "@/lib/data/instagramFeed.json"

const InstagramFeed = async () => {
  let instagramFeed = null;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.IG_TOKEN}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Instagram feed");
    }
    instagramFeed = await response.json();
    instagramFeed.data.push.apply(instagramFeed.data, instagramFeedTestData)
    console.log(instagramFeed)
  } catch (err) {
    console.error("Error fetching Instagram feed:", err.message);
  }

  return (
    <div className={styles.instagramFeed}>
      <div className={`container ${styles.feedContainer}`}>
        <Link href="http://instagram.com" className={`h3 ${styles.title}`}>@yinyangk9</Link>
        <div className={styles.feed}>
          {instagramFeed.data.map((post, i) => (
            <div key={i} className={styles.post}>
              <img src={post.media_url} className={styles.media} alt={`Instagram Post Caption: ${post.caption}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstagramFeed