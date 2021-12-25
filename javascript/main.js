// This JavaScript file is used by all HTML files to insert the footer (with the exception
// of the HTML file that uses Vue.js).

window.addEventListener("load", insertFooter);

function insertFooter() {
  document.getElementsByClassName("grid-footer")[0].innerHTML = `
    <!-- target="_blank" opens link in new tab. -->
    <p>
      Copyright &copy;:
      <a href="https://en.wikipedia.org/wiki/Stuttgart" target="_blank"
        >Stuttgart, Germany 2021</a
      >
    </p>
    <p>Contact: <a href="mailto:kasperza@bu.edu">kasperza@bu.edu</a></p>`;
}
