<template>
    <div id="wrapper">
        <Header/>
        <main>
            <SelectWeapon />
            <SkillsAndStats />
        </main>
        <footer>
            <system-information></system-information>
        </footer>
    </div>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import Header from "./Header";
import SkillsAndStats from "./SkillsAndStats";
import SelectWeapon from "./SelectWeapon";

export default {
    name: "landing-page",
    components: { SystemInformation, Header, SkillsAndStats, SelectWeapon },
    methods: {
        open(link) {
            require("electron").shell.openExternal(link);
        }
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100%;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
}
body:after {
    content: "";
    opacity: 0.5;
    background-image: url('../assets/hildebrantlarge.jpg');
    background-size: cover;
    background-position: 100% 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
}
#wrapper {
    height: auto;
    width: 90%;
    background: rgba(255,255,255,0.9);
    padding: 60px;
    margin: 80px auto;
}

header,
main,
footer {
    display: block;
    width: 100%;
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
    flex-basis: 45%;
}

.left-side {
    display: flex;
    flex-direction: column;
}

p {
    color: black;
    margin-bottom: 10px;
}

p.sub-note {
    font-size: smaller;
    color: #bebebe;
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
