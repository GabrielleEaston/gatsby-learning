import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1>Single product: </h1>
        <section className="single-product">
          <article>
            <Image fixed={fixed} alt={title} />
          </article>
          <article>
            <h1>{title}</h1>
          </article>
          <article>
            <h5>{price}</h5>
          </article>

          <article>
            <p>{info}</p>
          </article>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query getSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
