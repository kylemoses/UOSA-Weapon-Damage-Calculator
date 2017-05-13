import React from "react";
import { weapons } from "../data/weapons.jsx";
class weaponList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let selectedCombatSkill = this.props.selectedCombatSkill;
    let weaponSet = [];
    weapons.reduce(function(total, current) {
      return current.skill === selectedCombatSkill
        ? weaponSet.push(current)
        : "";
    });
    return (
      <label htmlFor="weapon-list">
        {"Weapon"}<br />
        {weaponSet.length >= 1
          ? <select
              name="weapon-list"
              id="weapon-list"
              ref="weaponList"
              onChange={() =>
                this.props.selectWeaponHandler(this.refs.weaponList.value)}
            >
              <option value="0">Choose your weapon!</option>
              {weaponSet.map((weapon, key) => (
                <option key={key} value={weapon.name}>{weapon.name}</option>
              ))}
            </select>
          : <span>No {" " + selectedCombatSkill + " "} weapons found </span>}
      </label>
    );
  }
}

export default weaponList;
