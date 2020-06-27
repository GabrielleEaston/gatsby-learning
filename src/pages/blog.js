import React from 'react'
import Layout from "../components/Layout"
import styles from '../components/blog.module.css'
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
      <h1>This is our blog page</h1>
      <p className={styles.text}>loremjjxjxjjx loremjjxjxjjx loremjjxjxjjx loremjjxjxjjx
      </p></div>
    </Layout>
  )
}

export default blog
