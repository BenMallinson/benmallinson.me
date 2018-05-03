import React from "react";
import PostLink from "../components/PostLink";

const Blog = ({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                   }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return <div id="main">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>My Ramblings</h1>
                </header>
                {Posts}
            </div>
        </section>
    </div>;
};

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;