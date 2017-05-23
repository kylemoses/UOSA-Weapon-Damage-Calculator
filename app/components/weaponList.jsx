import React from "react";

class weaponList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let selectedCombatSkill = this.props.selectedCombatSkill;
    let weaponSet = [];
    this.props.weaponsArray.reduce(function(prev, current){
      return current.skill == selectedCombatSkill ? weaponSet.push(current) : "" ;
    },0);
    return (
      <label htmlFor="weapon-list">
        Select a Weapon <br />
        {weaponSet.length >= 1
          ? <select
              name="weapon-list"
              id="weapon-list"
              ref="weaponList"
              value=""
              onChange={() =>
                this.props.selectWeaponHandler(this.refs.weaponList.value)}
            >
              <option value="0" >-- select a weapon --</option>
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
