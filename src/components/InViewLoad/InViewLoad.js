import React from "react"
import { InView } from "react-intersection-observer"

import styles from './InViewLoad.module.css'

const InViewLoad = ({ children }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        React.cloneElement(children, {
          ref: ref,
          style: { opacity: inView ? 1 : 0 },
          className: `${children.props.className} ${styles.transition}`
        })
      )}
    </InView>
  )
}

export default InViewLoad