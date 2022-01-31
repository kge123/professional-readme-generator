// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //look up shields.io for markdown badges
  if (license !== "None") {
    return "";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project uses the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# **${data.title}**

## **Description**

${data.description}

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## **Installation**

${data.installation}
  
## **Usage**

${data.usage}

## **Contributing**

${data.contributing}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## **Tests**

  

## **Questions**

${data.github}(https://github.com/${data.github})

${data.email}


`;
}

module.exports = generateMarkdown;
