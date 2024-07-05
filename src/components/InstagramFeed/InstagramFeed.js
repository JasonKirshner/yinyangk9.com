import Link from "next/link";

import styles from "./InstagramFeed.module.css"

const InstagramFeed = ({ instagramFeed }) => {
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