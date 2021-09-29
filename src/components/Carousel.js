import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'

import johnny from '../assets/images/johnny.png'
import quire from '../assets/images/quire.png'
import ccv from '../assets/images/ccv.jpg'
import github from '../assets/images/github.png'
import github2 from '../assets/images/github2.png'
import swapi from '..assets/images/swapi.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Quire',
                    subTitle: 'A note-taking app',
                    imgSrc: quire,
                    link: 'https://github.com/simonlindqvist/fe20tp1_staple',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Simon Lindqvist\'s portfolio',
                    subTitle: 'My first react project',
                    imgSrc: github2,
                    link: 'https://github.com/simonlindqvist/portfolio',
                    selected: false,
                },
                {
                    id: 2,
                    title: 'CardInvestor',
                    subTitle: 'A collector\'s investment app',
                    imgSrc: ccv,
                    link: 'https://github.com/maxjander/fe20tp2_bev_grupp7/tree/main/src',
                    selected: false,
                },
                {
                    id: 3,
                    title: 'SWAPI',
                    subTitle: 'An easy interface to the SWAPI api',
                    imgSrc: swapi,
                    link: 'https://vindros-swapi.surge.sh/',
                    selected: false,
                }
                // {
                //     id: 2,
                //     title: 'newProject',
                //     subTitle: 'newProjectSubTitle',
                //     imgSrc: nerProjectImg,
                //     link: 'https://github.com/simonlindqvist/newProject',
                //     selected: false,
                // }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel