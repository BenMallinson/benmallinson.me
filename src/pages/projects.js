import React from 'react'
import Helmet from 'react-helmet'

import superdry from '../assets/images/superdry-logo.png'
import wbk from '../assets/images/wbk-logo.png'
import ambiedrew from '../assets/images/ambiedrew-logo.png'
import textlocal from '../assets/images/textlocal-logo.png'

const Projects = (props) => (
    <div>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Projects</h1>
                    </header>
                    <p>I've worked on a lot of projects over the past 5 years working as a web developer. Here are some of my favourites.</p>
            <hr/>
                    <div className="row">
                        <div className="6u 12u$(small)">
                            <h3>Superdry<span className="image left"><img src={superdry}/></span></h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        <div className="6u 12u$(small)">
                            <h3>Textlocal<span className="image left"><img src={textlocal}/></span></h3>
                            <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                        </div>
                        <div className="6u 12u$(small)">
                            <h3>Worcestershire Black Knights<span className="image left"><img src={wbk}/></span></h3>
                            <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                        </div>
                        <div className="6u 12u$(small)">
                            <h3>AmbieDrew<span className="image left"><img src={ambiedrew}/></span></h3>
                            <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
)

export default Projects