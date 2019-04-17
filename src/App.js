import React, { Component } from 'react';
import './App.css';
import ImageComponent from './ImageComponent/ImageComponent.js';
import ArrowComponent from './ArrowComponent/ArrowComponent.js';
import DotComponent from './DotComponent/DotComponent.js';


class App extends Component {

  state = {
    images: ['slide-1.jpg',
             'slide-2.jpg', 
             'slide-3.jpg', 
             'slide-4.jpg', 
             'slide-5.jpg', 
             'slide-6.jpg'],
    imageIndex: 0
  }

  leftArrowClickHandler = () => {
    const lastIndexOfImages = this.state.images.length - 1;
    const imageIndex = this.state.imageIndex;
    const newImageIndex = (imageIndex === 0) ? lastIndexOfImages : imageIndex - 1;
    this.setState({imageIndex: newImageIndex});
  }

  rightArrowClickHandler = () => {
    const lastIndexOfImages = this.state.images.length - 1;
    const imageIndex = this.state.imageIndex;
    const newImageIndex = (imageIndex === lastIndexOfImages) ? 0 : imageIndex + 1;
    this.setState({imageIndex: newImageIndex});
  }

  dotClickHandler = (dotIndex) => {
    this.setState({imageIndex: dotIndex});
  }

  render() {

    const dotsComponent = (
      <div>
        {this.state.images.map((imageName, index) => {
          let selectedDot = "dots";
          if (index === this.state.imageIndex) {
            selectedDot = "dots selected";
          }
          return <DotComponent click={() => this.dotClickHandler(index)}
                               id={selectedDot}
                               key={index}/>
        })}
      </div>
    );

    const image = process.env.PUBLIC_URL + '/images/' + this.state.images[this.state.imageIndex];
    
    return (
      <div className="App">
          <h1>React-Based Image Carousel</h1>
          <h3>By Issac Holguin</h3>
          <div className="unselectable">

          <ImageComponent image={image} />
          <ArrowComponent click={this.leftArrowClickHandler}
                            arrowCode='&#8592;'
                            arrowDirection='left'
                            ></ArrowComponent>
          <ArrowComponent click={this.rightArrowClickHandler}
                            arrowCode="&#8594;"
                            arrowDirection='right'
                            ></ArrowComponent>
         
          {dotsComponent}
          </div>

         
        
      </div>
      
    );
  }
}

export default App;
 
/*

 pose={this.state.hovering ? "hovered" : "idle"}
                          onMouseEnter={() => this.setState({ hovering: true })}
                          onMouseLeave={() => this.setState({ hovering: false })}
*/