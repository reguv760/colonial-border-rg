import React, { Component } from "react";

import FrameImg from "./../assets/class-select-frame.png";
import AnimatedBorder from "./../assets/border-anim.png";
import ClickedBorder from "./../assets/border-anim_active-static.png";

import GrayBG from "./../assets/class-select-nameplate-active.png";

const initBorderSize = "0.92";

class CharacterTile extends Component {
  state = {
    animatedImageLoaded: false,
    animatedBorder: "",
    buttonClicked: false,
    borderScale: initBorderSize,
    activeFrameOpacity: 0,
    namePlateOpacity: 0.5,
    grayBgOpacity: 0.1,
    characterAnim: ""
  };

  MouseOverHandler = () => {
    this.setState({
      animatedImageLoaded: true
    });
  };

  MouseOutHandler = () => {
    this.setState({ animatedImageLoaded: false });
  };

  CharacterClick = () => {
    //animate properties of multiple objects
    //based on this single click:::
    if (!this.state.buttonClicked) {
      this.setState({
        borderScale: "1",
        activeFrameOpacity: 1,
        namePlateOpacity: 1,
        grayBgOpacity: 0.25,
        characterAnim: "character_img"
      });
    } else {
      this.setState({
        borderScale: initBorderSize,
        activeFrameOpacity: 0,
        namePlateOpacity: 0.5,
        grayBgOpacity: 0.1,
        characterAnim: ""
      });
    }

    this.setState(state => ({
      buttonClicked: !this.state.buttonClicked
    }));
  };

  getImageName = () =>
    this.state.animatedImageLoaded ? "afterImage" : "beforeImage";

  componentDidMount() {
    //preload animated border on mount::
    const animBG = new Image();
    animBG.src = AnimatedBorder;

    //then store cached image into state::
    animBG.onload = () => {
      this.setState({
        animatedBorder: animBG.src
      });
    };
  }

  render() {
    //pull props from CharacterClass::
    //store as const
    const CharacterType = this.props.characterType;
    const CharacterWeapon = this.props.characterWeapon;
    const CharacterPotion = this.props.characterPotion;
    const CharacterImg = this.props.characterImage;
    const CharacterDesc = this.props.characterDesc;

    //object that stores two images:
    //static + animated border
    const currentImage = {
      beforeImage: FrameImg,
      afterImage: this.state.animatedBorder
    };

    //object that runs getImageName function
    //based onMouseOver or onMouseOut event
    const imageName = this.getImageName();

    return (
      <div
        className='buttonContainer'
        onMouseOver={this.MouseOverHandler}
        onMouseOut={this.MouseOutHandler}
        onClick={this.CharacterClick}
        style={{
          transform: `scale3d(${this.state.borderScale}, ${this.state.borderScale}, 1)`
        }}
      >
        {/* change border based on mouseOver / mouseOut states */}
        <img className='border' src={currentImage[imageName]} alt='Frame' />
        <div className='character_text'>
          <p>{CharacterDesc}</p>
        </div>
        <div
          className='namePlate_container'
          style={{ opacity: `${this.state.namePlateOpacity}` }}
        >
          <h4>{CharacterType}</h4>
        </div>
        <ul className='items_container'>
          <li>
            <h4>{CharacterWeapon}</h4>
          </li>
          <li>
            <h4>{CharacterPotion}</h4>
          </li>
        </ul>
        <div className='characterContainer'>
          <img
            className={`${this.state.characterAnim}`}
            src={CharacterImg}
            alt={"Character Class: " + CharacterType}
          />
          <img
            className='gray_bg'
            src={GrayBG}
            style={{
              opacity: `${this.state.grayBgOpacity}`
            }}
            alt='gray bg'
          />
        </div>

        <div
          className='activeFrame_container'
          style={{ opacity: `${this.state.activeFrameOpacity}` }}
        >
          <img src={ClickedBorder} alt='active border'></img>
        </div>
      </div>
    );
  }
}

export default CharacterTile;
