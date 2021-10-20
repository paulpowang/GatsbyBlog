import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Paul</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
    {
      //   <StaticImage
      //   src="../images/gatsby-astronaut.png"
      //   width={300}
      //   quality={95}
      //   formats={["auto", "webp", "avif"]}
      //   alt="A Gatsby astronaut"
      //   style={{ marginBottom: `1.45rem` }}
      // />
    }

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
