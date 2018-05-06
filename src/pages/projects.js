import React from 'react'
import Helmet from 'react-helmet'

const Projects = (props) => (
    <div>
        <Helmet>
            <title>Projects - Ben Mallinson</title>
            <meta name="description" content="Web Development Projects worked on by Ben Mallinson"/>
        </Helmet>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Projects</h1>
                    </header>
                    <p>I've worked on a lot of projects over the past 5 years working as a web developer. Here are some
                        of my favourites:</p>
                    <hr/>
                    <div className="row">
                        <div className="12u">
                            <h2><a href="https://www.superdry.com">Superdry</a>
                                <small> (Mootools, Joomla!)</small>
                            </h2>
                            <p>Continued development on high traffic, high revenue e-commerce
                                website.</p>
                            <p>Suggested processes and technologies to drive the department forward.</p>
                            <p>Worked with designers to implement UI/UX improvements to the site.</p>
                        </div>
                        <div className="12u">
                            <h2><a href="https://www.textlocal.com">Textlocal</a>
                                <small> (JQuery, Laravel)</small>
                            </h2>
                            <p>Led a team of developers to create a customer management tool.</p>
                            <p>Developed lightweight mobile applications to extend product offering.</p>
                            <p>Troubleshooted customer issues to achieve a meaningful resolution.</p>
                        </div>
                        <div className="12u">
                            <h2><a href="https://www.worcestershireblackknights.com">Worcestershire Black Knights</a>
                                <small> (Wordpress, Photoshop)</small>
                            </h2>
                            <p>Developed a Wordpress site for team promotion when founded.</p>
                            <p>Designed and created digital assets for marketing and branding.</p>
                            <p>Managed social media presence and SEO to optimize reach on a limited budget.</p>
                        </div>
                        <div className="12u">
                            <h2><a href="http://worcestermedialab.com/">Worcester Media Lab</a>
                                <small> (Cordova, JQuery)</small>
                            </h2>
                            <p>Led a team to a create mobile application for global vehicle manufacturer</p>
                            <p>Managed relationships with client to ensure successful project delivery</p>
                            <p>Trained clients on how to use the mobile application for optimal performance</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
)

export default Projects