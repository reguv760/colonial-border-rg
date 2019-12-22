import React, { Component } from "react";

import FrameImg from "./../assets/class-select-frame.png";
import AnimatedBorder from "./../assets/border-anim.png";
import ClickedBorder from "./../assets/border-anim_active-static.png";

class CharacterTile extends Component {
  state = {
    animatedImageLoaded: false,
    animatedBorder: "",
    buttonClicked: false,
    initScale: "0.92",
    activeFrameOpacity: 0,
    namePlateOpacity: 0.5
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
    this.setState(state => ({
      buttonClicked: !this.state.buttonClicked
    }));

    if (!this.state.buttonClicked) {
      this.setState({
        initScale: "0.98",
        activeFrameOpacity: 1,
        namePlateOpacity: 1
      });
    } else {
      this.setState({
        initScale: "0.92",
        activeFrameOpacity: 0,
        namePlateOpacity: 0.5
      });
    }
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
    const CharacterType = this.props.characterType;
    const CharacterWeapon = this.props.characterWeapon;
    const CharacterPotion = this.props.characterPotion;
    const CharacterImg = this.props.characterImage;
    const CharacterDesc = this.props.characterDesc;

    const currentImage = {
      beforeImage: FrameImg,
      afterImage: this.state.animatedBorder
    };

    const imageName = this.getImageName();

    return (
      <div
        className='buttonContainer'
        onMouseOver={this.MouseOverHandler}
        onMouseOut={this.MouseOutHandler}
        onClick={this.CharacterClick}
        style={{
          transform: `scale3d(${this.state.initScale}, ${this.state.initScale}, 1)`
        }}
      >
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
          <img src={CharacterImg} alt={"Character Class: " + CharacterType} />
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
