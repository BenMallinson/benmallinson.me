import React from 'react'
import Social from '../components/Social'
import Layout from '../components/Layout'

const Contact = (props) => (
    <Layout>
      <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact</h1>
                    </header>
                    <div className="inner">
                        <p>Please send any questions or enquiries you may have to <strong><a
                            href="mailto:ben@benmallinson.me?subject=Website Enquiry">ben@benmallinson.me</a></strong> and I'll
                            be happy to chat!</p>
                        <Social/>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Contact
