// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    return "[License](https://img.shields.io/badge/license-${license}-blue.svg)";
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "") {
    return "";
  } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## Table of Contents
          *[Description](#description)
          *[installation](#installation)
          *[Usage](#usage)
          *[License](#license)
          *[Contributors](#contributors)
          *[Tests](#tests)
          *[Questions](#questions)

          ### Description
          ${response.description}

          ### Installation
          ${response.installation}

          ### Usage
          ${response.usage}

          ###License
          ${response.license}

          ###Contributors
          ${response.contributors}

          ###Tests
          ${response.tests}

          ###Questions
          Please direct any questions or comments to:
          ${response.username}
          ${response.e-mail}

`;
}

module.exports = generateMarkdown;
