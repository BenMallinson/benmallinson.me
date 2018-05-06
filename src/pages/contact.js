import React from 'react'
import Helmet from 'react-helmet'
import Social from '../components/Social'

const Contact = (props) => (
    <div>
        <Helmet>
            <title>Contact - Ben Mallinson</title>
            <meta name="description" content="Get in contact with Ben Mallinson - Experienced Web Developer"/>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact</h1>
                    </header>
                    <div className="inner">
                        <p>Please send any questions or enquiries you may have to <a
                            href="mailto:ben@benmallinson.me?subject=Website Enquiry">ben@benmallinson.me</a> and I'll
                            be happy to chat!</p>
                        <Social/>
                    </div>
                </div>
            </section>
        </div>
    </div>
)

export default Contact