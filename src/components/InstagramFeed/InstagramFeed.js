import Link from "next/link"
import Image from "next/image"
import { InView } from "react-intersection-observer"

import styles from "./InstagramFeed.module.css"

const InstagramFeed = ({ instagramFeed }) => {
  const renderPosts = instagramFeed.data.slice(0, 8).map((post, i) => {
    const postMediaType = post.media_url.match(/https?.*?\.mp4/) ? 'VIDEO' : 'IMAGE'
    const postCaption = post.caption
    const postPermaLink = post.permalink
    let postMediaUrl = post.media_url

    if (postMediaType === 'IMAGE') {
      
      return (
        <InView key={i} triggerOnce>
          {({ inView, ref }) => (
            <Link href={postPermaLink} className={styles.post}>
              <Image
                ref={ref}
                src={postMediaUrl}
                className={styles.media}
                alt={`Instagram Post Caption: ${postCaption}`}
                width={0}
                height={0}
                sizes='100vw'
                style={{
                  opacity: inView ? 1 : 0
                }}
              />
            </Link>
          )}
        </InView>
      )
    }

    return (
      <InView key={i} triggerOnce>
        {({ inView, ref }) => (
          <Link href={postPermaLink} className={styles.post}>
            <video ref={ref} autoPlay loop muted disablePictureInPicture disableRemotePlayback className={styles.media} style={{opacity: inView ? 1 : 0}}>
              <source src={postMediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        )}
      </InView>
    )
  })

  return (
    <div className={styles.instagramFeed}>
      <div className={`container ${styles.feedContainer}`}>
        <Link href="https://www.instagram.com/yinyangk9/" className={`h3 ${styles.title}`}>@yinyangk9</Link>
        <div className={styles.feed}>
          {renderPosts}
        </div>
      </div>
    </div>
  )
}

export default InstagramFeed