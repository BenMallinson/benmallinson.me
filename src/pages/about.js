import React from 'react'
import Helmet from 'react-helmet'

const About = (props) => (
    <div>
        <Helmet>
            <title>About - Ben Mallinson</title>
            <meta name="description" content="About - Ben Mallinson" />
        </Helmet>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sed amet aliquam</h1>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
        </div>
    </div>
)

export default About