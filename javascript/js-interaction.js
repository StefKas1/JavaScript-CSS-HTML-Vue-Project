// Defines a function to get two numbers.
function getTwoNumbers() {
  let userNumbers = [];
  let promptText = "Please enter a valid number:";

  // True as long as user has not entered two numbers.
  let inputNumber;
  while (userNumbers.length < 2) {
    inputNumber = prompt(promptText);
    if (inputNumber == null) {
      // Will be null if user clicks on 'Cancel' button.
      return;
    }
    // Checks whether user has entered a number; if not (input is not a num. (NaN)), asks again.
    // parseInt() is necessary because otherwise an empty string is accepted as the number 0.
    if (isNaN(parseInt(inputNumber))) {
      continue;
    } else {
      userNumbers.push(Number(inputNumber)); // Number() converts input string to a number.
      promptText = "Please enter a second valid number:";
    }
  }

  // Calls sum function.
  let result = sumNumbers(userNumbers);
  alert("The sum of your two numbers is: " + result);
  // Alerts user about size of result.
  if (result > 10) {
    alert("That is a big number.");
  } else {
    alert("That is a small number.");
  }
}

// Defines a function to sum (two) numbers in an array.
function sumNumbers(numbersArray) {
  let result = 0;
  for (let number of numbersArray) {
    result += number;
  }
  return result;
}

// Defines a function to run 'add two numbers'.
function mainAddTwoNumbers() {
  // Shows message and waits for user to press OK.
  alert("Welcome to a simple interaction with JavaScript!");
  // Prompts user for name until user enters a name that consists of at least one character.
  let username = "";
  while (username.length == 0) {
    username = prompt("Please enter your name so I know what to call you!");
    // username will be null if user clicks on 'Cancel' button; terminates function.
    if (username == null) {
      return;
    }
  }
  // Inserts user input (username) into alert text.
  alert(`Welcome ${username}! I am happy to meet you!`);

  let repeatAddTwoNumbers = true;
  // Will be executed until user enters 'no' or clicks the 'Cancel' button.
  while (repeatAddTwoNumbers) {
    getTwoNumbers();
    // Checks whether user wants to add another two numbers.
    let inputRepeat = "";
    // Will be executed as long as user does not enter 'yes' or 'no'.
    while (inputRepeat != "yes" && inputRepeat != "no") {
      inputRepeat = prompt(
        "Do you want to add two more numbers? Please enter: yes / no."
      ).toLowerCase();
      if (inputRepeat == "no") {
        repeatAddTwoNumbers = false; // Ends outer while loop.
      } else if (inputRepeat == null) {
        // Will be null if user clicks on 'Cancel' button.
        return;
      }
    }
  }
}

// Hides or shows explanations.
function mainHideShow() {
  let explanations = document.getElementById("explanations");
  let buttonHideShow = document.getElementById("hide-show-button");
  // True if explanations' inner HTML is not (none) displayed.
  if (explanations.style.display == "none") {
    explanations.style.display = "block";
    buttonHideShow.innerHTML = "Hide explanations";
  } else {
    explanations.style.display = "none";
    buttonHideShow.innerHTML = "Show explanations";
  }
}

// Astronomy picture of the day.
function mainNasaImage() {
  (async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=00nx9e7i6cVqcLVlHEccaFL24ma5zKn5B8eRH0bX"
    );
    if (response.ok) {
      let json = await response.json();
      let nasaDiv = document.getElementById("nasa-information");
      // Inserts image description and image in HTML.
      nasaDiv.innerHTML = "";
      nasaDiv.innerHTML += `<p>${json.explanation}</p>`;
      nasaDiv.innerHTML += `<figure><img title="${json.title}" src="${json.url}" 
        alt="${json.title}"><figcaption>${json.title}</figcaption></figure>`;
    } else {
      console.log("HTTP-Error!");
    }
  })();
}
