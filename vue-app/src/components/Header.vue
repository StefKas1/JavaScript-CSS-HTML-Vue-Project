<template>
  <header class="grid-header" id="vue-header">
    <!-- Note, v-bind: or short : is written before attribute="vueVariableName";
    so :src="src" is correct, and :src={{src}} is incorrect. 
    v-bind: or : is one-way-binding (gets values from Vue data and inserts them in HTML). -->
    <img
      title="Tooltip: pets"
      v-bind:src="src"
      v-bind:alt="alt"
      v-bind:width="width"
      v-bind:height="height"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    title: "Tooltip: pets",
    src: require("../assets/images/pets/pets.jpg"),
    alt: "Two dogs and a cat from the movie Pets.",
    width: "1000",
    height: "300",
  }),
}
</script>

<style scoped>
  /* scope: could define CSS for these component only. */
</style>
