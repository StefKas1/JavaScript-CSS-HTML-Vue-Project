<template>
    <nav class="grid-nav">
      <ul>
        <!-- Inserts navigation elements via for loop. -->
        <li v-for="element in navigationBar" v-bind:key="element.id">
          <a
            v-bind:class="activePage(element.block.text)"
            v-bind:href="`${element.block.href}`"
            >{{element.block.text}}</a
          >
        </li>
      </ul>
    </nav>
  </template>
  
<script>
export default {
  name: "Navigation",
  data: () => ({
    navigationBar : [
      { block: { text: "About me", href: "../../index.html" }, id: 1 },
      { block: { text: "Reading", href: "../../reading.html" }, id: 2 },
      { block: { text: "First name - multilingual", href: "../../first-name.html" }, id: 3 },
      { block: { text: "JavaScript interaction", href: "../../js-interaction.html" }, id: 4 },
      { block: { text: "Vue pets", href: "index.html" }, id: 5 },
      { block: { text: "Give feedback", href: "../../give-feedback-db.html" }, id: 6},
      { block: { text: "Contact me", href: "../../contact-me.html" }, id: 7},
    ],
  }),
  methods: {
    activePage: function(text) {
      return text == "Vue pets" ? "active-page" : "";
    }
  },
}
</script>