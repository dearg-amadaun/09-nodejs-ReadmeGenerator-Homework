// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = []
  if (license.includes ("MIT")) {
    badge.push `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license.includes ("GPL-3.0-or-later")) {
    badge.push `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license.includes ("Apache-2.0")) {
    badge.push `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  return badge.join();
};

//Already handled by above
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink= []
  if (license.includes ("MIT")) {
    licenseLink.push `("https://opensource.org/licenses/MIT")`
  }
  if (license.includes ("GPL-3.0-or-later")) {
    licenseLink.push `("https://www.gnu.org/licenses/lgpl-3.0")`
  }
  if (license.includes ("Apache-2.0")) {
    licenseLink.push `("https://www.gnu.org/licenses/lgpl-3.0")`
  } 
  return licenseLink.join();
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
          #${data.title}

          ## Table of Contents
          *[Description](#Description)
          *[Installation](#Installation)
          *[Usage](#Usage)
          *[License](#License)
          *[Contributors](#Contributors)
          *[Tests](#Tests)
          *[Questions](#Questions)
          
          ##License
          ${data.license}
          ${renderLicenseLink(data.license)}
          
          ##Description
          ${data.description}
          

          ##Installation
          ${data.installation}

          ##Usage
          ${data.usage}


          ##Contributors
          ${data.contributors}

          ##Tests
          ${data.tests}

          ##Questions
          Please direct any questions or comments to:
          ${data.username}
          ${data.mail}
`; 
}

module.exports = generateMarkdown;
