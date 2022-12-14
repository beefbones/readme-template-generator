// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  } else {
    return ``;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  } 
  if (license === 'GPLv2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  }
  if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else {
    return ``;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This project is covered under the ${license} license. To learn more about what this means, click the license badge at the top.`
  } else {
    return ``;
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  *[Credits](credits)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?

  Name: ${data.name}

  Github: https://github.com/${data.github}

  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;