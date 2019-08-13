import React from 'react'
import Helmet from 'react-helmet'
import DemoLayout from '../components/demoLayout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>View-Through Demo Steps</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Live Demo</h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                    <h4>Demo Steps</h4>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Step</th>
                                                <th>Description</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>View-Through 1</td>
                                                <td>User goes to blog site, gets served Demoto (client) ad with tracking pixel.</td>
                                                <td><a href="https://master.d3ijfe2ldttoyc.amplifyapp.com/trektimes/blog.html" className="button special small">Step 1</a></td>
                                            </tr>
                                            <tr>
                                                <td>Verify 1</td>
                                                <td>Watch for tdbtrk.com request, and tdb cookie being set.</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>View-Through 2</td>
                                                <td>User goes to product review site with tracking pixel embedded.</td>
                                                <td><a href="https://master.d3ijfe2ldttoyc.amplifyapp.com/sevenstars/watches.html" className="button special small">Step 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>Verify 2</td>
                                                <td>Watch for tdbtrk.com request, and tdb cookie being updated.</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>View-Through 3</td>
                                                <td>User visits client's site, View-Through data added to DL.</td>
                                                <td><a href="https://master.d3ijfe2ldttoyc.amplifyapp.com/demoto/products.html" className="button special small">Step 3</a></td>
                                            </tr>
                                            <tr>
                                                <td>Verify 3</td>
                                                <td>Once extension runs, utag.data should include the View-Through data.</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>Done!</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic