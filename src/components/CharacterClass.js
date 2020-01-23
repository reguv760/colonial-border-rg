import React, { Component } from "react";
import styled from "styled-components";
import CharacterTile from "./CharacterTile";
import ButtonBackground from "./../assets/class-select-bg.jpg";

const CharacterItemStyle = styled.div`
  display: inline-block;
  width: 363px;
  max-width: 363px;
  height: 729px;
  max-height: 729px;
  margin: 1rem;
  padding: 0;
`;

const ButtonContainerStyle = styled.div`
  display: block;
  cursor: pointer;
  width: 363px;
  height: 729px;
  background-size: cover;
  background-image: url(${ButtonBackground});

  font-family: "Baskervville", serif;
  position: relative;
`;

class CharacterClass extends Component {
  render() {
    //destructure variables from CharacterList props
    //then store as const
    const {
      characterType,
      characterWeapon,
      characterPotion,
      characterImage,
      characterDesc,
      selectedCharacter,
      currentTileClick,
      currentTile
    } = this.props;

    return (
      <CharacterItemStyle>
        <ButtonContainerStyle>
          <CharacterTile
            characterType={characterType}
            characterWeapon={characterWeapon}
            characterPotion={characterPotion}
            characterImage={characterImage}
            characterDesc={characterDesc}
            selectedCharacter={selectedCharacter}
            currentTileClick={currentTileClick}
            currentTile={currentTile}
          />
        </ButtonContainerStyle>
      </CharacterItemStyle>
    );
  }
}

export default CharacterClass;
