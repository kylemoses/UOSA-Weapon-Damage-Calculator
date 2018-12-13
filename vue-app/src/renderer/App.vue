<template>
		<landing-page></landing-page>
</template>

<script>
import LandingPage from "@/components/LandingPage";

export default {
	name: "vue-app",
	components: {
		LandingPage
	}
};
</script>

<style>
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
	background-image: url("./assets/hildebrantlarge.jpg");
	background-size: cover;
	background-position: 100% 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: fixed;
	z-index: -1;
}
</style>
