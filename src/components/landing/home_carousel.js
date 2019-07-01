import React, {Component, Fragment} from "react";

class HomeCarousel extends Component {

    state = {
        images : [
            "../../assets/images/landing_img1.jpg",
            "../../assets/images/landing_img2.jpg",
            "../../assets/images/landing_img3.jpg"
        ]
    };

    componentDidMount(){
        const config = {
            fullWidth: true,
            indicators: true,
            noWrap: false,
            duration: 400
        };

        let instances = M.Carousel.init(this.carousel, config);

        setInterval(this.nextSlide, 7000);

        this.setState({
            element: instances
        });
    }

    nextSlide = () => {
        this.state.element.next();
    }

    prevSlide = () => {
        this.state.element.prev();
    }

    render(){
        const sliderImages = this.state.images.map((image, index) => {
            return(
                    <img className="carousel-item" key={index} src={image} />
            );
        });

        return(
            
            <div ref={(element) => this.carousel = element} className ="carousel carousel-slider col s12 m4">
                {sliderImages}
                <i onClick={this.prevSlide} className="large material-icons prev">chevron_left</i>
                <i onClick={this.nextSlide} className="large material-icons next">chevron_right</i>
            </div>
            
        );
    }
}

export default HomeCarousel;