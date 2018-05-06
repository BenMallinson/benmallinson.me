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
                        <h1 className="align-center">Who am I?</h1>
                    </header>
                    <p>Hi! I'm <strong>Ben Mallinson</strong>.</p>

                    <p>I'm a full stack developer for <a href="https://drpgroup.com"><strong>drpgroup</strong></a>, a leading digital agency based in Hartlebury, England. I also do freelance web projects for a variety of clients ranging from local companies to global corporations.</p>

                    <p>I am a massive Baltimore Ravens fan and love the NFL. In my spare time, I am the Vice Chairman for the <a href="http://www.worcestershireblackknights.co.uk"><strong>Worcestershire Black Knights American Football Team</strong></a>, that I helped found in 2013. I don't just enjoy building excellent web applications, I am also love developing small indie games using Unity. Also, <strong>metal</strong>.</p>

                    <p>Please <strong><a href="/contact">contact</a></strong> me if you want to work on a project together, or have any questions!</p>
                </div>
            </section>
        </div>
    </div>
)

export default About