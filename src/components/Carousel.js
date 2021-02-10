import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'

import johnny from '../assets/images/johnny.png'
import quire from '../assets/images/quire.png'

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
                    imgSrc: johnny,
                    link: 'https://github.com/simonlindqvist/portfolio',
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