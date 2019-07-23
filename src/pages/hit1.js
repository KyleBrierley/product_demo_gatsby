import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Hit1 = (props) => (
    <Layout>
        <Helmet>
            <title>Hit 1 Page</title>
            <meta name="description" content="Hit 1 Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Publisher Site 1</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>User browses to this external publisher site where ads are being served via publisher ad server</p>
                    <p>The advertiser (Tealium client) creative that loads has the Tealium tracking pixel embedded.</p>
                    <p>The tracking pixel makes a request to Tealium's 'databridge' cookie service, and writes the data tracked in the query string params.</p>
                    <p>Example:  https://qa20-databridge.tiqcloud.com/databridge/thx11381/tdb.gif?test=true&total_impressions=_INC_1&last_campaign_seen=batman&adv_campaign_eid=_APP_$ecid</p>
                </div>
            </section>
            <img src="https://qa20-databridge.tiqcloud.com/databridge/thx11381/tdb.gif?test=true&total_impressions=_INC_1&last_campaign_seen=batman&adv_campaign_eid=_APP_$ecid"></img>
        </div>

    </Layout>
)

export default Hit1