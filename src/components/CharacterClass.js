import React, { Component } from "react";
import FrameImg from "./../assets/class-select-frame.png";

class CharacterClass extends Component {
  render() {
    const CharacterType = this.props.characterType;
    const CharacterWeapon = this.props.characterWeapon;
    const CharacterPotion = this.props.characterPotion;
    const CharacterImg = this.props.characterImage;

    return (
      <div className='character-item'>
        <div className='button'>
          <div className='buttonContainer'>
            <img className='border' src={FrameImg} alt='Frame' />

            <div className='character_text'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Libero, dicta ab laboriosam laudantium quisquam necessitatibus
                nam.
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
              <img
                src={CharacterImg}
                alt={"Character Class: " + CharacterType}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterClass;
