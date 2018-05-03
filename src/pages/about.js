import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

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