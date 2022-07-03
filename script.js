import obj from "./data.js";

const button = document.getElementById("submit");
button.addEventListener("click", handleSubmit);
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
const companyAbrev = document.getElementById("companyAbr");
const companyName = document.getElementById("companyName");

function handleSubmit(event) {
  event.preventDefault();
  const searched = document.getElementById("search");
  const searchValue = searched.value.toUpperCase();

  searched.value = "";

  companyAbrev.innerText = "";
  companyName.innerText = "";
  Object.keys(obj).forEach((key, index) => {
    if (searchValue === key) {
      companyAbrev.innerText = searchValue;
      companyName.innerText = obj[searchValue];
    } else if (!Object.keys(obj).includes(searchValue)) {
      companyAbrev.innerText = `${searchValue} is not in our database. Please search again`;
    }
  });
}
