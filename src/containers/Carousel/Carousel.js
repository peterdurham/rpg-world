import React, { Component } from "react";
import PropTypes from "prop-types";

import BaldursGate from "../../img/fullsize/Baldurs_Gate.jpg";
import BaldursGateScreen1 from "../../img/screenshots/BaldursGate_1.jpg";
import BaldursGateScreen2 from "../../img/screenshots/BaldursGate_2.jpg";
import Bloodborne from "../../img/fullsize/Bloodborne.jpg";
import BloodborneScreen1 from "../../img/screenshots/Bloodborne_1.jpg";
import BloodborneScreen2 from "../../img/screenshots/Bloodborne_2.jpg";
import ChronoTrigger from "../../img/fullsize/Chrono_Trigger.jpg";
import ChronoTriggerScreen1 from "../../img/screenshots/ChronoTrigger_1.jpg";
import ChronoTriggerScreen2 from "../../img/screenshots/ChronoTrigger_2.jpg";
import PillarsofEternity from "../../img/fullsize/Pillars_of_Eternity.jpg";
import PillarsofEternityScreen1 from "../../img/screenshots/PillarsofEternity_1.jpg";
import PillarsofEternityScreen2 from "../../img/screenshots/PillarsofEternity_2.jpg";
import XenobladeChronicles from "../../img/fullsize/Xenoblade_Chronicles.jpg";
import XenobladeChroniclesScreen1 from "../../img/screenshots/XenobladeChronicles_1.jpg";
import XenobladeChroniclesScreen2 from "../../img/screenshots/XenobladeChronicles_2.jpg";

class Carousel extends Component {
  state = {
    carouselSlide: 1
  };

  slideCarouselRight = () => {
    let carouselSlide = this.state.carouselSlide;
    if (carouselSlide < 5) {
      carouselSlide += 1;
    } else if (carouselSlide === 5) {
      carouselSlide = 1;
    }
    this.setState(() => ({ carouselSlide }));
  };
  slideCarouselLeft = () => {
    let carouselSlide = this.state.carouselSlide;
    if (carouselSlide > 1) {
      carouselSlide -= 1;
    } else if (carouselSlide === 1) {
      carouselSlide = 5;
    }
    this.setState(() => ({ carouselSlide }));
  };

  render() {
    const { viewDetails } = this.props;
    let slide1 = this.state.carouselSlide === 1 && (
      <div
        className="Carousel__slide"
        onClick={() => viewDetails("Baldur's Gate")}
      >
        <img src={BaldursGate} alt="bg" className="Carousel__img" />
        <div className="Carousel__contents">
          <div className="Carousel__name">Baldur's Gate</div>
          <div className="Carousel__screenshots">
            <img
              src={BaldursGateScreen1}
              alt="screenshot"
              className="Carousel__screenshot"
            />
            <img
              src={BaldursGateScreen2}
              alt="screenshot"
              className="Carousel__screenshot"
            />
          </div>
          <div className="Carousel__text">Now Available</div>
          <div className="Carousel__genre">PC Style RPG</div>
          <div className="Carousel__bottomline">
            <div className="Carousel__price">$9.99</div>
            <div className="Carousel__platform">PC</div>
          </div>
        </div>
      </div>
    );

    let slide2 = this.state.carouselSlide === 2 && (
      <div
        className="Carousel__slide"
        onClick={() => viewDetails("BloodBorne")}
      >
        <img src={Bloodborne} alt="bg" className="Carousel__img" />
        <div className="Carousel__contents">
          <div className="Carousel__name">Bloodborne</div>
          <div className="Carousel__screenshots">
            <img
              src={BloodborneScreen1}
              alt="screenshot"
              className="Carousel__screenshot"
            />
            <img
              src={BloodborneScreen2}
              alt="screenshot"
              className="Carousel__screenshot"
            />
          </div>
          <div className="Carousel__text">Now Available</div>
          <div className="Carousel__genre">Action RPG</div>
          <div className="Carousel__bottomline">
            <div className="Carousel__price">$59.99</div>
            <div className="Carousel__platform">PS4</div>
          </div>
        </div>
      </div>
    );

    let slide3 = this.state.carouselSlide === 3 && (
      <div
        className="Carousel__slide"
        onClick={() => viewDetails("Chrono Trigger")}
      >
        <img src={ChronoTrigger} alt="bg" className="Carousel__img" />
        <div className="Carousel__contents">
          <div className="Carousel__name">Chrono Trigger</div>
          <div className="Carousel__screenshots">
            <img
              src={ChronoTriggerScreen1}
              alt="screenshot"
              className="Carousel__screenshot"
            />
            <img
              src={ChronoTriggerScreen2}
              alt="screenshot"
              className="Carousel__screenshot"
            />
          </div>
          <div className="Carousel__text">Now Available</div>
          <div className="Carousel__genre">Japanese-style RPG</div>
          <div className="Carousel__bottomline">
            <div className="Carousel__price">$9.99</div>
            <div className="Carousel__platform">SNES / PS</div>
          </div>
        </div>
      </div>
    );

    let slide4 = this.state.carouselSlide === 4 && (
      <div
        className="Carousel__slide"
        onClick={() => viewDetails("Pillars of Eternity")}
      >
        <img src={PillarsofEternity} alt="bg" className="Carousel__img" />
        <div className="Carousel__contents">
          <div className="Carousel__name">Pillars of Eternity</div>
          <div className="Carousel__screenshots">
            <img
              src={PillarsofEternityScreen1}
              alt="screenshot"
              className="Carousel__screenshot"
            />
            <img
              src={PillarsofEternityScreen2}
              alt="screenshot"
              className="Carousel__screenshot"
            />
          </div>
          <div className="Carousel__text">Now Available</div>
          <div className="Carousel__genre">Third-person RPG</div>
          <div className="Carousel__bottomline">
            <div className="Carousel__price">$19.99</div>
            <div className="Carousel__platform">PC</div>
          </div>
        </div>
      </div>
    );

    let slide5 = this.state.carouselSlide === 5 && (
      <div
        className="Carousel__slide"
        onClick={() => viewDetails("Xenoblade Chronicles")}
      >
        <img src={XenobladeChronicles} alt="bg" className="Carousel__img" />
        <div className="Carousel__contents">
          <div className="Carousel__name">Xenoblade Chronicles</div>
          <div className="Carousel__screenshots">
            <img
              src={XenobladeChroniclesScreen1}
              alt="screenshot"
              className="Carousel__screenshot"
            />
            <img
              src={XenobladeChroniclesScreen2}
              alt="screenshot"
              className="Carousel__screenshot"
            />
          </div>
          <div className="Carousel__text">Now Available</div>
          <div className="Carousel__genre">Action RPG</div>
          <div className="Carousel__bottomline">
            <div className="Carousel__price">$29.99</div>
            <div className="Carousel__platform">Wii</div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="Carousel">
        <div className="Carousel__display">
          <div
            className="Carousel__slider--left"
            onClick={this.slideCarouselLeft}
          >
            <i className="fa fa-arrow-left" />
          </div>
          {slide1}
          {slide2}
          {slide3}
          {slide4}
          {slide5}
          <div
            className="Carousel__slider--right"
            onClick={this.slideCarouselRight}
          >
            <i className="fa fa-arrow-right" />
          </div>
        </div>
        <div className="Carousel__nav">
          <div
            className={
              "Carousel__box" +
              (this.state.carouselSlide === 1 && "Carousel__selected")
            }
          />
          <div
            className={
              "Carousel__box" +
              (this.state.carouselSlide === 2 && "Carousel__selected")
            }
          />
          <div
            className={
              "Carousel__box" +
              (this.state.carouselSlide === 3 && "Carousel__selected")
            }
          />
          <div
            className={
              "Carousel__box" +
              (this.state.carouselSlide === 4 && "Carousel__selected")
            }
          />
          <div
            className={
              "Carousel__box" +
              (this.state.carouselSlide === 5 && "Carousel__selected")
            }
          />
        </div>
      </div>
    );
  }
}
Carousel.propTypes = {
  viewDetails: PropTypes.func.isRequired
};
export default Carousel;
