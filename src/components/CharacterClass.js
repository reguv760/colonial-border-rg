import React, { Component } from "react";

import CharacterTile from "./CharacterTile";

class CharacterClass extends Component {
  state = {
    buttonClicked: false
  };

  MouseClickHandler = () => {
    this.setState(state => ({
      buttonClicked: !this.state.buttonClicked
    }));
  };

  render() {
    return (
      <div className='character-item'>
        <div className='button'>
          <CharacterTile
            characterType={this.props.characterType}
            characterWeapon={this.props.characterWeapon}
            characterPotion={this.props.characterPotion}
            characterImage={this.props.characterImage}
          />
        </div>
      </div>
    );
  }
}

export default CharacterClass;
