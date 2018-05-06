import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home - Ben Mallinson</title>
                    <meta name="description" content="Ben Mallinson - Experienced Full Stack Web Developer"/>
                </Helmet>
                <Banner/>
            </div>
        )
    }
}

export default HomeIndex