import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import balloonsImg from "../assets/balloons.jpeg";
import foodImg from "../assets/food.jpeg";

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ balloonsImg }
                        alt='Balloons'
                    />
                    <Carousel.Caption>
                        <h3>Balloons Image</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ foodImg }
                        alt='Food'
                    />
                    <Carousel.Caption>
                        <h3>Food Image</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

// export default CarouselBox;