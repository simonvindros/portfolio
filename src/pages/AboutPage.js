import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello and welcome! My name is Simon, I'm 28 years old and I live and study Front-End Programming in Stockholm. I started programming in 2018 when I joined an
                    accelerated learning course in consulting on the SAAS ServiceNow, built on GraphQL and AngularJS. In the consultant role I found I had a proneness for
                    code and was quickly put on more difficult configuration tasks. I later moved on to work for Dahl and its outsourced project to create an app
                    written in VueJS and was for the first time exposed to other technologies such as NodeJS, KoA, testing in Jest, collaborating on GitHub, AWS (and Terraform to configure
                    and maintain it) among other middleware and back-end technologies. It was a big leap from writing psuedo-code in ServiceNow and so I decided to properly educate myself to fill in the
                    blanks when it came to creating an entire architecture for an app and its services.
                    <br />
                    <br />
                    This brings us to today. I am with even more knowledge about today's ways of molding the front-end, with experience of working with real life projects
                    in agile teams. Feel free to check out my GitHub or contact me.
                    <br />
                    <br />
                    I'm looking forward to your message,
                    <br />
                    <br />
                    Regards,
                    <br />
                    <br />
                    Simon
                    </p>
            </Content>
        </div>
    )

}

export default AboutPage