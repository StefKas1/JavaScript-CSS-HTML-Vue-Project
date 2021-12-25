// Validates contact form.

// Helper function.
function changeElementId(elementIdBefore, elementIdAfter) {
  // Changes id of element so that correct CSS can be applied. However, if id has already
  // been changed, id can no longer be found (null) - so not null is checked.
  let element = document.getElementById(elementIdBefore);
  if (element != null) {
    element.id = elementIdAfter;
  }
}

// This function will not be executed until window has fully loaded. Otherwise
// it could be that getElementById(...) would return null because getElementById(...)
// is executed before the HTML tag containing this id has loaded.
window.onload = function () {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Everything between / ... / is regex.
  // ^ start of string.
  // [a-zA-Z] alphabetic characters only (lower case and upper case).
  // {2,} Two or more times.
  // $ end of string (without $ at end, spaces between alphabetic characters would be accepted):
  // without $, 'Jo hn' would be valid name. But not with $ at end.
  const regexMinLengthTwoOnlyAlphabetic = /^[a-zA-Z]{2,}$/;
  // I did not develop the regex for email validation myself; the source is:
  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  const regexValidEmailAddress =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Event listener is added to firstName HTML element. Event listener receives event type and
  // anonymous function as arguments. Anonymous function is executed when event (input) occurs.
  firstName.addEventListener("input", function (event) {
    // True if match between regex and string (regex.test(string) returns true or false); so
    // true if minimum length >= 2 and only alphabetically.
    if (regexMinLengthTwoOnlyAlphabetic.test(event.target.value)) {
      firstName.setCustomValidity(""); // Input is valid, shows no custom message.
      // Changes id of element so that correct CSS can be applied.
      changeElementId("first-name-invalid", "first-name-valid");
    } else {
      // Input is invalid, shows this custom message.
      firstName.setCustomValidity(
        "First name must consist of at least two alphabetical " +
          "characters (and contain no spaces)!"
      );
      // Changes id back to invalid so that appropriate CSS is applied.
      changeElementId("first-name-valid", "first-name-invalid");
    }
  });

  lastName.addEventListener("input", function (event) {
    // If true: input valid.
    if (regexMinLengthTwoOnlyAlphabetic.test(event.target.value)) {
      lastName.setCustomValidity("");
      changeElementId("last-name-invalid", "last-name-valid");
    } else {
      // Input invalid.
      lastName.setCustomValidity(
        "Last name must consist of at least two alphabetical " +
          "characters (and contain no spaces)!"
      );
      changeElementId("last-name-valid", "last-name-invalid");
    }
  });

  email.addEventListener("input", function (event) {
    // If true: input valid.
    if (regexValidEmailAddress.test(event.target.value)) {
      email.setCustomValidity("");
      changeElementId("email-invalid", "email-valid");
    } else {
      // Input invalid.
      email.setCustomValidity("Please enter a valid email address!");
      changeElementId("email-valid", "email-invalid");
    }
  });

  message.addEventListener("input", function (event) {
    // If true: input valid.
    // Splits input on whitespace; filter removes strings of length zero: ""; and then checks
    // whether at least three (non-zero length) strings have been entered.
    if (event.target.value.split(" ").filter((string) => string).length >= 3) {
      message.setCustomValidity("");
      changeElementId("message-invalid", "message-valid");
    } else {
      // Input invalid.
      message.setCustomValidity(
        "Please enter your message (the message should contain at least three words)!"
      );
      changeElementId("message-valid", "message-invalid");
    }
  });
};
