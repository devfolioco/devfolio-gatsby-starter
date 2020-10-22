import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import IntroGatsbyNavBar from '@common/navbar';

function IntroGatsby () {
    return(
        <Layout>
            <IntroGatsbyNavBar ></IntroGatsbyNavBar>
            <header style={{ padding: '3rem 0', marginTop: '10 rem' }}>
                <Container>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ padding: '4rem' }}>
                    <h1>What is Gatsby Js?</h1>
                    <p>
                        <br />
                        Gatsby is a React-based, GraphQL powered, static site generator. <br />
                        Gatsby can be used to build static sites that are Progressive Web Apps, 
                        follow the latest web standards, and are optimized to be highly performant. 
                        It makes use of the latest and popular technologies including ReactJS, Webpack, 
                        GraphQL, modern ES6+ JavaScript and CSS.
                        <br />
                        <br />
                        <h1>Useful links to get started with Gatsby</h1> <br />
                        <li>
                            <a target='blank' href="https://gatsbyjs.com" >Official website of Gatsby Js</a>
                        </li>
                        <li>
                            <a target='blank' href="https://medium.com/better-programming/how-to-build-a-static-site-with-gatsby-js-fefa39810b25" >
                            How To Build a Static Site With Gatsby.js - Medium</a>
                        </li>
                        <li>
                            <a target='blank' href="https://www.youtube.com/watch?v=GuvAMcsoreI" >
                                What is Gatsby and why use it? - Youtube</a>
                        </li>
                        <li>
                            <a target='blank' href="https://www.udemy.com/topic/gatsbyjs/" >Gatsby Js courses on Udemy</a>
                        </li>
                        <li>
                            <a target='blank' href="https://www.youtube.com/watch?v=8t0vNu2fCCM" >
                                Gatsby Js Bootcamp - Youtube</a>
                        </li>
                    </p>
                    </div>
                </div>
                </Container>
            </header>
          
        </Layout>
    );
}

export default IntroGatsby;