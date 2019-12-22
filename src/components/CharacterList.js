import React, { Component } from "react";
import CharacterClass from "./CharacterClass";

//images:::
import AdventurerImg from "./../assets/class-select-portrait-adventurer.png";
import ExpatriateImg from "./../assets/class-select-portrait-expatriate.png";
import ExplorerImg from "./../assets/class-select-portrait-explorer.png";
import SoliderImg from "./../assets/class-select-portrait-soldier.png";
import StowawayImg from "./../assets/class-select-portrait-stowaway.png";

class CharacterList extends Component {
  state = {
    CharacterArray: [
      {
        type: `Soldier`,
        weapon: `Rifle`,
        potion: `Health Tonic`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
        dicta ab laboriosam laudantium quisquam necessitatibus nam.`,
        image: SoliderImg
      },
      {
        type: `Adventurer`,
        weapon: `Pistol`,
        potion: `Homemade Tonic`,
        description: `Libero, dicta ab laboriosam laudantium quisquam necessitatibus nam.`,
        image: AdventurerImg
      },
      {
        type: `Expatriate`,
        weapon: `English Rifle`,
        potion: `Gin`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. `,
        image: ExpatriateImg
      },
      {
        type: `Explorer`,
        weapon: `Shotgun`,
        potion: `Grandma's Brew`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
        dicta ab laboriosam laudantium quisquam necessitatibus nam.`,
        image: ExplorerImg
      },
      {
        type: `Stowaway`,
        weapon: `Knife`,
        potion: `Juice`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
        image: StowawayImg
      }
    ]
  };

  //create click function used by character class to track "current" button clicked

  render() {
    return (
      <div>
        <h2>Select a character</h2>
        <div className='list-container'>
          {this.state.CharacterArray.map((character, i) => (
            <CharacterClass
              key={"CharacterTile" + i}
              characterType={character.type}
              characterWeapon={character.weapon}
              characterPotion={character.potion}
              characterDesc={character.description}
              characterImage={character.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterList;
