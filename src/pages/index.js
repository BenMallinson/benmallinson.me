import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Home - Ben Mallinson</title>
                    <meta name="description" content="Ben Mallinson - Experienced Full Stack Web Developer"/>
                </Helmet>
                <Banner/>
            </Layout>
        )
    }
}

export default HomeIndex
