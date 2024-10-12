import Link from 'next/link'
import Image from 'next/image'

import InViewLoad from '../InViewLoad/InViewLoad'

import styles from './InstagramFeed.module.css'

const InstagramFeed = ({ instagramFeed, logo }) => {
  const renderPosts = instagramFeed.map((post, i) => {
    const postMediaType = post.media_url.match(/https?.*?\.mp4/) ? 'VIDEO' : 'IMAGE'
    const postCaption = post.caption
    const postPermaLink = post.permalink
    const postMediaUrl = post.media_url

    if (postMediaType === 'IMAGE') {
      return (
        <InViewLoad key={i}>
          <Link href={postPermaLink} target='_blank' className={styles.post}>
            <img
              src={postMediaUrl}
              className={styles.media}
              alt={`Instagram Post Caption: ${postCaption}`}
              // width={0}
              // height={0}
              // sizes='100vw'
            />
            <span className={styles.viewPost}>View Post</span>
          </Link>
        </InViewLoad>
      )
    }

    return (
      <InViewLoad key={i}>
        <Link href={postPermaLink} target='_blank' className={styles.post}>
          <video autoPlay controls={false} playsInline loop muted disablePictureInPicture disableRemotePlayback className={styles.media}>
            <source src={postMediaUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <span className={styles.viewPost}>View Post</span>
        </Link>
      </InViewLoad>
    )
  })

  return (
    <div className={styles.instagramFeed}>
      <div className={`container ${styles.feedContainer}`}>
        <div className={styles.instaTitle}>
          <h3>Follow Us On</h3>
          <Image className={styles.instaLogo} src={logo} alt='Instagram Logo' />
        </div>
        <Link href='https://www.instagram.com/yinyangk9/' className={'h3 ' + styles.instaAt}>@yinyangk9</Link>
        <div className={styles.feed}>
          {renderPosts}
        </div>
      </div>
    </div>
  )
}

export default InstagramFeed
