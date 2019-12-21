import React, { Component } from "react";

import FrameImg from "./../assets/class-select-frame.png";
import AnimatedBorder from "./../assets/border-anim.png";
import ClickedBorder from "./../assets/border-anim_active.png";

class CharacterTile extends Component {
  state = {
    animatedImageLoaded: false,
    animatedBorder: "",
    buttonClicked: false
  };

  MouseOverHandler = () => {
    this.setState({
      animatedImageLoaded: true
    });
  };

  MouseOutHandler = () => {
    this.setState({ animatedImageLoaded: false });
    if (this.state.buttonClicked) {
    }
  };

  CharacterClick = () => {
    this.setState(state => ({
      buttonClicked: !this.state.buttonClicked
    }));
    console.log("character clicked!");
  };

  getImageName = () =>
    this.state.animatedImageLoaded ? "afterImage" : "beforeImage";

  componentDidMount() {
    this.setState({ animatedBorder: AnimatedBorder });
  }

  render() {
    const CharacterType = this.props.characterType;
    const CharacterWeapon = this.props.characterWeapon;
    const CharacterPotion = this.props.characterPotion;
    const CharacterImg = this.props.characterImage;

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
      >
        {/* <img className='border' src={currentImage[imageName]} alt='Frame' /> */}

        {this.state.buttonClicked && this.state.animatedImageLoaded ? (
          <img className='border' src={ClickedBorder} alt='Frame' />
        ) : !this.state.buttonClicked && !this.state.animatedImageLoaded ? (
          <img className='border' src={currentImage.beforeImage} alt='Frame' />
        ) : (
          <img className='border' src={currentImage[imageName]} alt='Frame' />
        )}

        <div className='character_text'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            dicta ab laboriosam laudantium quisquam necessitatibus nam.
          </p>
        </div>
        <div className='namePlate_container'>
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
      </div>
    );
  }
}

export default CharacterTile;
