import React from 'react'
import Social from './Social'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>I am Ben Mallinson</h1>
            </header>
            <div className="content">
                <p>I make extraordinary websites, normality.</p>
            </div>
            <Social/>
        </div>
    </section>
)

export default Banner
