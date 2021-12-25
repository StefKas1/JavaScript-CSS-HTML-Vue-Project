<!-- Defines HTML. -->
<template>
  <div class="grid-container" id="app">
    <!-- Uses imported components. -->
    <Header />
    <Navigation />
    <Main />
    <Footer />
  </div>
</template>

<script>
// Imports components.
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  // Adds components to Vue App.
  components: {
    Header,
    Navigation,
    Main,
    Footer,
  },
};
</script>

<!-- Defines CSS. -->
<style>
/* ######################## Default settings for entire website ######################## */
:root {
  --color-light-red: #ff5e6b;
  --color-red: #f20f22;
  --color-white: #ffffff;
  --color-light-gray: #e7e6e6;
  --color-dark-gray: #313131;
}
/* First font is used; should browser not be able to use font, second font is used. And so on. */
body {
  font-family: Arial, Helvetica, sans-serif;
}
noscript {
  font-size: 2.5em;
  background-color: var(--color-red);
  color: var(--color-white);
}
main img {
  max-width: 100%;
  max-height: 100%;
  /* Centers image */
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}

figcaption.vue,
h1.vue,
h2.vue,
ul.vue,
section.vue {
  text-align: center;
}
ul.vue {
  list-style-type: none; /* Removes bullet points. */
  text-align: center;
}
div.vue {
  text-align: center;
}

.grid-nav {
  border-right: 1px solid var(--color-light-gray);
}
.grid-main {
  border: 1px solid var(--color-light-gray);
  padding: 10px;
}
footer {
  background-color: var(--color-light-gray);
  padding: 10px;
  width: 100%;
}

/* ######################## Navigation bar ######################## */
nav {
  width: 100%; /* So that there is no gap between nav bar and left and right edge of display. */
}
/* nav ul applies CSS to all ul tags inside nav tag. */
nav ul {
  list-style-type: none; /* Removes bullet points. */
  margin: 0;
  padding: 0;
  overflow: hidden; /* Does not show overflowing text. */
  background-color: var(--color-dark-gray);
}
nav li {
  display: block; /* Displays list items one below the other. */
}
nav a {
  display: block; /* Displays element as block (inline would be too small). */
  color: var(--color-white); /* Text color. */
  padding: 15px 15px; /* Height, width. */
  text-decoration: none; /* Does not underline links. */
}
/* HTML element that belongs to this class (.active-page) is colored red. Since only the link that
  leads to active page belongs to this class, only the link to the active page is colored red in the 
  navigation bar. */
.active-page {
  background-color: var(--color-red);
}
/* Mouse hover changes color to light red, but only if class name is not "active-page".*/
li a:hover:not(.active-page) {
  background-color: var(--color-light-red);
}

/* ############### Grid layout (header, nav, main, footer) - and @media screen. ############### */
/* Page layout is defined using the grid layout. */
/* Defines grid-area to use grid-template-areas (see .grid-container) to arrange elements in grid.*/
.grid-header {
  grid-area: header-handle;
}
.grid-nav {
  grid-area: nav-handle;
}
.grid-main {
  grid-area: main-handle;
}
.grid-footer {
  grid-area: footer-handle;
}

/* Grid layout for small displays, e.g., smartphones. */
.grid-container {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header-handle"
    "nav-handle"
    "main-handle"
    "footer-handle";
}
/* Applies to all screen widths <= 500px. */
@media screen and (max-width: 500px) {
  header img {
    width: 100%;
    height: auto; /* Maintains aspect ratio. */
  }
}

/* Grid layout for medium displays, e.g., tablets.
  Applies to all screen widths >= 500px and <= 800px. */
@media screen and (min-width: 500px) and (max-width: 800px) {
  .grid-container {
    /* Named elements are still displayed one below the other. */
    grid-template-areas:
      "header-handle"
      "nav-handle"
      "main-handle"
      "footer-handle";
  }
  nav li {
    float: left; /* Displays list items side by side. */
  }
  header img {
    width: 100%;
    height: auto; /* Maintains aspect ratio. */
  }
}

/* Grid layout for large displays, e.g., computer screens.
  Applies to all screen widths >= 800px. */
@media screen and (min-width: 800px) {
  .grid-container {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-areas:
      "header-handle header-handle header-handle"
      "nav-handle main-handle ."
      "nav-handle main-handle ."
      "footer-handle footer-handle footer-handle";
  }
  nav ul {
    display: flex;
    flex-direction: column; /* Displays items one below the other. */
  }
  /* Maintains aspect ratio of image while image uses entire width. */
  header img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}

/* Defines print version. */
@media print {
  * {
    font-family: "times new roman", times, serif; /* Serif typeface is easier to read on paper. */
  }
  main img {
    width: 320px;
    height: 320px;
  }
}
</style>
