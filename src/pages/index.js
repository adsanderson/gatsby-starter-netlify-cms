import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <header className="header">
          <h1 className="header__title">Devtings</h1>
          <h2 className="header__subtitle">A blog by Adam Sanderson</h2>
        </header>
        {posts.map(({ node: post }) => (
          <div className="post" key={post.id}>
            <p>
              <Link className="post__link" to={post.fields.slug}>
                <span>
                {post.frontmatter.title}
                </span>
              </Link>
              &nbsp;
              <span className="post__strangelove">
                {post.frontmatter.description}
              </span>
            </p>
          </div>
        ))}
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
