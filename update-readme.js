const fs = require("fs");
const path = require("path");

const birthDate = new Date("2001-11-08");
const startYear = 2022;

const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const experience = today.getFullYear() - startYear;

if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
) {
  age--;
}

const readmePath = path.join(__dirname, "README.md");

let readmeContent = fs.readFileSync(readmePath, "utf-8");

readmeContent = readmeContent.replace(/{{age}}/g, age.toString());
readmeContent = readmeContent.replace(/{{experience}}/g, experience.toString());

fs.writeFileSync(readmePath, readmeContent);

console.log("README.md updated successfully.");
