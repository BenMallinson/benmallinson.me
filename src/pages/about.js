import React from 'react'
import Layout from '../components/Layout'

const About = (props) => (
    <Layout>
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1 className="align-center">Who am I?</h1>
                    </header>
                    <p>Hi! I'm <strong>Ben Mallinson</strong>.</p>

                    <p>I'm a full stack developer for <strong><a href="https://drpgroup.com">drpgroup</a></strong>, a leading digital agency based in Hartlebury, England. I also do freelance web projects for a variety of clients ranging from local companies to global corporations.</p>

                  <p> I have carried out a range of freelance projects for clients including website creation, server administration, developing cross platform mobile applications with Cordova and React Native and social media management.</p>

                    <p>Please <strong><a href="/contact">contact</a></strong> me if you want to work on a project together, or have any questions!</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default About
