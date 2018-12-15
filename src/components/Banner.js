import React from 'react'
import Social from './Social'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>I am Ben Mallinson</h1>
            </header>
            <div className="content">
                <p>A Full Stack Developer from England</p>
            </div>
            <Social/>
        </div>
    </section>
)

export default Banner
