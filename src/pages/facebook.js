import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FbLanding from '../components/FbLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const ViewThrough = (props) => (
    <Layout>
        <Helmet>
            <title>ViewThrough</title>
            <meta name="description" content="ViewThrough" />
        </Helmet>

        <FbLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Why go server-side?</h2>
                    </header>
                    <p>Remove heavy javascript from the client and send data server-side using vendor REST APIs.</p>
                    <ul className="actions">
                        <li><Link to="" className="button">Trigger Connector</Link></li>
                    </ul>
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
                                <h3>Server-Side Events API</h3>
                            </header>
                            <p>More stuff about FB, set up instructions, etc.</p>
                            <ul className="actions">
                                <li><Link to="" className="button">Link to FB Docs</Link></li>
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
                                <h3>How to Set It Up</h3>
                            </header>
                            <p>Set up instructions go here.</p>
                            <ul className="actions">
                                <li><Link to="" className="button">Link to TLC Docs</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ViewThrough