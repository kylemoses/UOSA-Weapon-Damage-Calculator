<template>
  <div id="wrapper">
    <header>
      <h1>UOSA</h1>
      <hr />
    </header>
    <main>
      <div class="left-side">
        <h2>
          Chose your weapon
        </h2>
        <p>Select Skill:</p>
        <vSelect label="skill" v-model="skillSelected" :placeholder="'Select A Skill'" :options="skills"></vSelect>
        <br />
        <p>Select Weapon:</p>
        <vSelect 
          :placeholder="'Select A Weapon'"
          disabled v-show="skillSelected === null || skillSelected === undefined"
        />
        <div class="select-weapon" v-show="skillSelected !== null && skillSelected !== undefined">
          <vSelect 
            v-if="skillSelected && skillSelected.skill === 'Swordsmanship'"
            v-model="weaponSelected"
            :placeholder="'Select a Swordsmanship weapon'"
            label="name"
            :options="weapons.swordsmanship"
          />
          
          <vSelect 
            v-if="skillSelected && skillSelected.skill === 'Fencing'"
            v-model="weaponSelected"
            :placeholder="'Select a Fencing weapon'"
            label="name"
            :options="weapons.fencing"
          />
          <vSelect 
            v-if="skillSelected && skillSelected.skill === 'Macing'"
            v-model="weaponSelected"
            :placeholder="'Select a Macing weapon'"
            label="name"
            :options="weapons.macing"
          />
          <vSelect 
            v-if="skillSelected && skillSelected.skill === 'Archery'"
            v-model="weaponSelected"
            :placeholder="'Select a Archery weapon'"
            label="name"
            :options="weapons.archery"
          />
        </div>

        <div class="selected-weapon-info">
          <img src="https://via.placeholder.com/80" />
          <p><strong>Name:</strong> {{weaponSelected && weaponSelected.name}}</p>
          <p><strong>Dice:</strong> {{weaponSelected && weaponSelected.dice}}</p>
          <p><strong>Hands:</strong> {{weaponSelected && weaponSelected.hands}}</p>
        </div>
      </div>

      <div class="right-side">
        <div class="doc">
          <h2>Character Skills &amp; Stats</h2>
          <p class="sub-note">*Currently assumes GM weapon skill and 100 STR</p>
          
          <h3>Add aditional modifiers</h3>
          <input type="checkbox">Anatomy (20% bonus damage)</input><br />
          <input type="checkbox">Greater Strength Potion (+20 Str)</input><br />
          <input type="checkbox">Greater Dexterity Potion (+20 Dex)</input><br />
        </div>
      </div>
    </main>
      <footer>  
        <system-information></system-information>
      </footer>
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  import SystemInformation from './LandingPage/SystemInformation';
  
  export default {
    name: 'landing-page',
    components: { SystemInformation, vSelect },
    methods: {
      open(link) {
        require('electron').shell.openExternal(link);
      },
    },
    data() {
      return {
        skillSelected: '',
        weaponSelected: '',
        skills: [
          { skill: 'Swordsmanship', value: 100 },
          { skill: 'Fencing', value: 100 },
          { skill: 'Macing', value: 100 },
          { skill: 'Archery', value: 100 },
        ],
        weapons: {
          swordsmanship: [
            {
              name: 'Halberd',
              dice: 'xDx',
              hands: '2',
            }, {
              name: 'Katana',
              dice: 'xDx',
              hands: '1',
            },
          ],
          fencing: [
            {
              name: 'Warfork',
              dice: 'xDx',
              hands: '1',
            }, {
              name: 'Kryss',
              dice: 'xDx',
              hands: '1',
            },
          ],
          macing: [
            {
              name: 'War Axe',
              dice: 'xDx',
              hands: '1',
            }, {
              name: 'Quarter Staff',
              dice: 'xDx',
              hands: '2',
            },
          ],
          archery: [
            {
              name: 'Bow',
              dice: 'xDx',
              hands: '1',
            }, {
              name: 'Heavy Crossbow',
              dice: 'xDx',
              hands: '2',
            },
          ],
        },
      };
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background: #e5e5e5;
    height: 100vh;
    width: 100vw;
    padding: 80px 0;
  }

  header, main, footer {
    display: block;
    width: 100%;
    padding: 0px 60px;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  main {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }

  main > div { 
    flex-basis: 50%; 
    padding: 0 20px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }

  p.sub-note {
    font-size: smaller;
    color: #bebebe;
  }
  input[type=checkbox] {
    margin:10px 10px 10px 0px;
  }
  .selected-weapon-info {
    margin: 40px 0;
    padding: 20px;
    background: #333; 
    color: #fff;
    border-radius: 5px;
  }

  .selected-weapon-info img {
    float: left;
    margin-right: 5%;
  }
</style>
