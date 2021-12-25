<template>
  <footer class="grid-footer" id="vue-footer">
    <p>
        Copyright &copy;:
        <a v-bind:href="copyrightLink" v-bind:target="target"
        >{{copyrightPlace}}</a
        >
    </p>
    <p>Contact: <a v-bind:href="hrefMail">{{email}}</a></p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    copyrightLink: "https://en.wikipedia.org/wiki/Stuttgart",
    copyrightPlace: "Stuttgart, Germany 2021",
    target: "_blank",
    email: "kasperza@bu.edu",
    hrefMail: "mailto:kasperza@bu.edu",
  }),
}
</script>
