import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
    <div className="inner">
        <Link to={post.frontmatter.path}>
        <header className="major">
            <h2>{post.frontmatter.title} / {post.frontmatter.date}</h2>
        </header>
        </Link>
        {console.log(post.frontmatter)}
        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
    </div>
);

export default PostLink;
