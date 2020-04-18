import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Images extends Component {
  render() {
    return (
    <>
        <div className="books">
            <img src={this.state.image1} alt="books" />
        </div>
        <div className="music">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.image2}
            alt="First Image"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.image3}
            alt="Second Image"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.image4}
            alt="Third Image"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    </>
    );
  }
}

export default Images;
