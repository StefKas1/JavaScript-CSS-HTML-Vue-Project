// Enables interaction with MongoDB via Node.js hosted on Heroku.

const requestBody = { likes: null, favorite: null };
const URL = "https://bu-heroku-server.herokuapp.com";

window.onload = function () {
  const like = document.getElementById("like");
  const favorite = document.getElementById("favorite");
  const submitButton = document.getElementById("submit-button");

  like.addEventListener("input", getUserInput);
  favorite.addEventListener("input", getUserInput);
  submitButton.addEventListener("click", insertIntoMongoDb);

  retrieveAllAndUpdateTable();
};

// Adds user input to requestBody.
function getUserInput(event) {
  if (event.target.name == "group-like") {
    requestBody.likes = event.target.value;
  } else if (event.target.name == "group-favorite") {
    requestBody.favorite = event.target.value;
  }
}

async function retrieveAllAndUpdateTable() {
  // response is a promise; await so remaining code is not executed before response is received.
  let response = await fetch(URL);
  console.log("The status code of the response is:", response.status);
  // True if status is between 200 and 299 (inclusive).
  if (response.ok) {
    let json = await response.json(); // Gets response body.
    // Creates a table from JSON.
    jsonToTable(json, "feedback");
  } else {
    console.log("HTTP-Error!");
  }
}

function insertIntoMongoDb(event) {
  // Sends values ​​only if both values ​​have been provided by user.
  if (requestBody.likes !== null && requestBody.favorite !== null) {
    // Creates async anonymous function that is called directly.
    (async () => {
      // Creates and sends POST request.
      const response = await fetch(URL + "/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        let json = await response.json();
        retrieveAllAndUpdateTable();
      } else {
        console.log("HTTP-Error!");
      }
    })();
  }
}

function deleteFromMongoDb(event) {
  (async () => {
    const response = await fetch(URL + `/feedback/${event.target.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      let json = await response.json();
      retrieveAllAndUpdateTable(); // Updates HTML table.
    } else {
      console.log("HTTP-Error!");
    }
  })();
}

function jsonToTable(json, parentProperty) {
  // ^^ property is same as a key.
  let header = "";
  let row = "";
  let rows = [];
  let headerBuilt = false;
  let deleteButtonIds = [];
  // Assembles header row and all other rows with data from JSON.
  // of: for iterables; here json[parentProperty] contains: [{_id: ..., likes: ..., favorite: ...}, {...}].
  for (let object of json[parentProperty]) {
    row = "";
    for (let childProperty in object) {
      // If header row is not yet built, build it.
      if (!headerBuilt) {
        header += `<th>${childProperty.toUpperCase().replace("_", "")}</th>`;
      }
      row += `<td>${object[childProperty]}</td>`;
    }
    rows.push(
      row +
        `<td><button class="button" type="button" style="width:100%" id=${object["_id"]}>DELETE</button></td>`
    );
    deleteButtonIds.push(object["_id"]);
    headerBuilt = true;
  }

  // Assembles table from rows; rows.map will return an array, and join will join array elements.
  let table =
    "<table>" +
    "<caption><strong>" +
    parentProperty.toUpperCase() +
    "</strong></caption>" +
    `<thead><tr>${
      header +
      (rows.length > 0
        ? "<th>DELETE FROM MONGODB</th></tr></thead>"
        : "</tr></thead>")
    }` +
    "<tbody>" +
    rows.map((row) => `<tr>${row}</tr>`).join("") +
    "</tbody>" +
    "</table>";

  // Inserts table into HTML.
  document.getElementById("insert-table").innerHTML = table;
  // Adds an event listener to each delete button.
  deleteButtonIds.forEach((id) =>
    document.getElementById(id).addEventListener("click", deleteFromMongoDb)
  );
}
