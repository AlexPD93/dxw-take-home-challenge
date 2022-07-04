import obj from "./data.js";

const button = document.getElementById("submit");
button.addEventListener("click", handleSubmit);
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
const companyAbrev = document.getElementById("companyAbr");
const companyName = document.getElementById("companyName");
const searched = document.getElementById("search");
search.addEventListener("input", updateValue);
const suggestions = document.getElementById("suggested");
const dropdown = document.getElementById("acronyms");

function handleSubmit(event) {
  event.preventDefault();
  const searchValue = searched.value.toUpperCase();
  searched.value = "";
  companyAbrev.innerText = "";
  companyName.innerText = "";
  Object.keys(obj).forEach((key) => {
    if (searchValue === key) {
      companyAbrev.innerText = searchValue;
      companyName.innerText = obj[searchValue];
    } else if (!Object.keys(obj).includes(searchValue)) {
      companyAbrev.innerText = `${searchValue} is not in our database. Please search again`;
    }
  });
}

// Getting user input into an array
let typed = [];

function updateValue(e) {
  const letter = e.data;

  //Made to display multiple suggestions
  let abbrev = [];
  let abbrev2 = [];
  let abbrev3 = [];
  let abbrev4 = [];

  typed.push(letter.toUpperCase());
  let joined = typed.join("");

  Object.keys(obj).map((key) => {
    // Show any abbreviations that begin with first letter that is typed
    if (key[0].includes(typed)) {
      abbrev.push(key);
    } else if (key[0] === joined[0] && key[1] === joined[1]) {
      //Filter
      abbrev.filter((abbreviation) => abbreviation.includes(joined));
    } else if (
      key[0] === joined[0] &&
      key[1] === joined[1] &&
      key[2] === joined[2]
    ) {
      abbrev.filter((abbreviation) => abbreviation.includes(joined));
    } else if (
      key[0] === joined[0] &&
      key[1] === joined[1] &&
      key[2] === joined[2] &&
      key[3] === joined[3]
    ) {
      abbrev.filter((abbreviation) => abbreviation.includes(joined));
    }
  });
  createDropdown(abbrev);
}

function createDropdown(arr) {
  arr.map((acronym) => {
    const option = document.createElement("option");
    option.className = "acronym-options";
    option.textContent = acronym;
    dropdown.appendChild(option);
  });
}

//Backspace needs to be fixed
//Check random characters
