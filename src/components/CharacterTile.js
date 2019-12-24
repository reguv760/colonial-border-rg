import React, { Component } from "react";

import FrameImg from "./../assets/class-select-frame.png";
import AnimatedBorder from "./../assets/border-anim.png";
import ClickedBorder from "./../assets/border-anim_active-static.png";
import GrayBG from "./../assets/class-select-nameplate-active.png";

const initBorderSize = "0.95";

class CharacterTile extends Component {
  CharacterTileObj = React.createRef();

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

  MouseOverHandler = e => {
    this.setState({
      animatedImageLoaded: true
    });
  };

  MouseOutHandler = e => {
    this.setState({ animatedImageLoaded: false });
  };

  CharacterClick = e => {
    //animate properties of objects based on this single click:::
    if (!this.state.buttonClicked) {
      this.setState({
        borderScale: "1",
        activeFrameOpacity: 1,
        namePlateOpacity: 1,
        grayBgOpacity: 0.25,
        characterAnim: "character_img"
      });

      //function to load selected character to header:::
      this.props.selectedCharacter(this.props.characterType + " selected");

      //function that selects which current button is selected::
      this.props.currentTileClick(this.CharacterTileObj);

      //logic to turn off current selected button if it's not equal to itself
      if (
        this.props.currentTile !== "" &&
        this.CharacterTileObj !== this.props.currentTile
      ) {
        console.log(this.props.currentTile.current.id + " should turn off");
        //this.props.currentTile.CharacterClick();
      }
    } else {
      this.setState({
        borderScale: initBorderSize,
        activeFrameOpacity: 0,
        namePlateOpacity: 0.5,
        grayBgOpacity: 0.1,
        characterAnim: ""
      });

      this.props.selectedCharacter("");
    }

    this.setState({ buttonClicked: !this.state.buttonClicked });
  };

  getImageName = () =>
    this.state.animatedImageLoaded ? "afterImage" : "beforeImage";

  // unselectTile = (selected_tile, currentTile) => {
  //   if (currentTile !== selected_tile) {
  //     console.log("true");
  //     //this.CharacterClick()
  //     //this.setState({ buttonClicked: false });
  //   }
  // };

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
    //pull props from CharacterClass then store as destructured const
    const {
      characterType,
      characterWeapon,
      characterPotion,
      characterImage,
      characterDesc
    } = this.props;

    //pull variabales from state then store as destructured const
    const {
      borderScale,
      animatedBorder,
      namePlateOpacity,
      characterAnim,
      grayBgOpacity,
      activeFrameOpacity
    } = this.state;

    //const object that stores two images, static + animated border
    const currentImage = {
      beforeImage: FrameImg,
      afterImage: animatedBorder
    };

    //object that runs getImageName function
    //based onMouseOver or onMouseOut event
    const imageName = this.getImageName();

    return (
      <div
        ref={this.CharacterTileObj}
        className='buttonContainer'
        onMouseOver={this.MouseOverHandler}
        onMouseOut={this.MouseOutHandler}
        onClick={this.CharacterClick}
        style={{
          transform: `scale3d(${borderScale}, ${borderScale}, 1)`
        }}
      >
        {/* change border based on mouseOver / mouseOut states */}
        <img className='border' src={currentImage[imageName]} alt='Frame' />

        <div className='character_text'>
          <p>{characterDesc}</p>
        </div>

        <div
          className='namePlate_container'
          style={{ opacity: `${namePlateOpacity}` }}
        >
          <h4>{characterType}</h4>
        </div>

        <ul className='items_container'>
          <li>
            <h4>{characterWeapon}</h4>
          </li>
          <li>
            <h4>{characterPotion}</h4>
          </li>
        </ul>

        <div className='characterContainer'>
          <img
            className={`${characterAnim}`}
            src={characterImage}
            alt={"Character Class: " + characterType}
          />
          <img
            className='gray_bg'
            src={GrayBG}
            style={{
              opacity: `${grayBgOpacity}`
            }}
            alt='gray bg'
          />
        </div>

        <div
          className='activeFrame_container'
          style={{ opacity: `${activeFrameOpacity}` }}
        >
          <img src={ClickedBorder} alt='active border'></img>
        </div>
      </div>
    );
  }
}

export default CharacterTile;
