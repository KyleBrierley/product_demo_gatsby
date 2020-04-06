import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FbLanding from '../components/FbLanding'
import Trace from '../components/traceForm'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Facebook = (props) => (
    <Layout>
        <Helmet>
            <title>Facebook</title>
            <meta name="description" content="ViewThrough" />
        </Helmet>

        <FbLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Test Facebook Server-Side Events</h2>
                    </header>
                    <p>Remove heavy javascript from the client and send data server-side using vendor REST APIs.
                    <br></br>
                    Fill out the form to send a test event.</p> 
                    <Trace />
                    {/* <ul className="actions">
                        <li><Link to="" className="button">Trigger Connector</Link></li>
                    </ul> */}
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/hit1" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Tealiumm Documentation</h3>
                            </header>
                            <p>Learn how to set up the connector in Tealium CDH.</p>
                            <ul className="actions">
                                <li><Link to="" className="button">TLC</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/hit2" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Facebook Documentation</h3>
                            </header>
                            <p>Learn how to configure your Facebook Ads account to use server-side event management.</p>
                            <ul className="actions">
                                <li><Link to="" className="button">FB Docs</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Facebook