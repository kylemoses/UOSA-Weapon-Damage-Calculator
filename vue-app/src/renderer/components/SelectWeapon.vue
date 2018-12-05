<template>
	<div class="left-side">
		<h2>Chose your weapon</h2>
		<p>Select Skill:</p>
		<vSelect label="skill" v-model="skillSelected" :placeholder="'Select A Skill'" :options="skills"></vSelect>
		<br>
		<p>Select Weapon:</p>
		<vSelect
			:placeholder="'Select A Weapon'"
			disabled
			v-if="skillSelected === null || skillSelected === undefined || skillSelected === ''"
		/>
		<div class="select-weapon" v-else>
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
			<img src="https://via.placeholder.com/80">
			<p>
				<strong>Name:</strong>
				{{weaponSelected && weaponSelected.name}}
			</p>
			<p>
				<strong>Dice:</strong>
				{{weaponSelected && weaponSelected.dice}}
			</p>
			<p>
				<strong>Hands:</strong>
				{{weaponSelected && weaponSelected.hands}}
			</p>
		</div>
	</div>
</template>
<script>
import vSelect from "vue-select";

export default {
    name: "weaponinfo",
    components: { vSelect },
    methods: {
    },
    data() {
        return {
            skillSelected: "",
            weaponSelected: "",
            skills: [
                { skill: "Swordsmanship", value: 100 },
                { skill: "Fencing", value: 100 },
                { skill: "Macing", value: 100 },
                { skill: "Archery", value: 100 }
            ],
            weapons: {
                swordsmanship: [
                    {
                        name: "Halberd",
                        dice: "xDx",
                        hands: "2"
                    },
                    {
                        name: "Katana",
                        dice: "xDx",
                        hands: "1"
                    }
                ],
                fencing: [
                    {
                        name: "Warfork",
                        dice: "xDx",
                        hands: "1"
                    },
                    {
                        name: "Kryss",
                        dice: "xDx",
                        hands: "1"
                    }
                ],
                macing: [
                    {
                        name: "War Axe",
                        dice: "xDx",
                        hands: "1"
                    },
                    {
                        name: "Quarter Staff",
                        dice: "xDx",
                        hands: "2"
                    }
                ],
                archery: [
                    {
                        name: "Bow",
                        dice: "xDx",
                        hands: "1"
                    },
                    {
                        name: "Heavy Crossbow",
                        dice: "xDx",
                        hands: "2"
                    }
                ]
            }
        };
    }
};
</script>
<style>
.v-select .dropdown-toggle {
    background-color: #fff;
}
.v-select.disabled .dropdown-toggle {
    background: #aaa;
}
.v-select .dropdown-toggle input,
.v-select .dropdown-toggle .open-indicator {
    background: none !important;
}
</style>
