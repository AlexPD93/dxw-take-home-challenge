const abbreviations = ["AGO", "APA", "BIS", "BEIS", "CO"];
const organisations = [
  "Attorney General's Office",
  "Asset Protection Agency",
  "Department for Business, Innovation and Skills",
  "Department for Business, Energy and Industrial Strategy",
  "Cabinet Office",
];
let obj = {};

abbreviations.forEach((element, index) => {
  obj[element] = organisations[index];
});

export default obj;
