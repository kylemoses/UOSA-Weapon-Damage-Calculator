import React from "react";
class combatSkills extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.selectCombatSkill = this.props.selectCombatSkill.bind(this);
  }
  changeHandler() {
    this.props.selectCombatSkill(this.refs.combatSkills.value);
  }
  render() {
    return (
      <label htmlFor="weapon-list">
        <h4>Choose a combat skill:</h4>
        <select
          name="weapon-list"
          id="weapon-list"
          onChange={this.changeHandler}
          ref="combatSkills"
        >
          <option value="0">Choose a combat skill</option>
          <option value="Swordsmanship">Swordsmanship</option>
          <option value="Macing">Macing</option>
          <option value="Fencing">Fencing</option>
          <option value="Archery">Archery</option>
        </select>
      </label>
    );
  }
}

export default combatSkills;
