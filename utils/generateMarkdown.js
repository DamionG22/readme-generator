// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[license Info](https://choosealicense.com/licenses/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return  `#### License Bage:
  ${renderLicenseBadge(license)}
  #### For further details:
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title ${data.title}

  ## Table of contents
  - [DEscription](#description)
  - [Installation](#installation)




  ### Description
  ${data.description}

  ### Installation 
  ${data.installationInstructions}

  ### Usage 
  ${data.usageInformation}

  ### Contributions
  ${data.contributionGuidelines}

  ### Test Instructions
  ${data.testInstructions}

  ### Email Address
  ${data.emailAddress}

  ### License
  ${renderLicenseSection(data.license)}

  ### GitHub
  ${data.gitHubUsername}
`;
}

module.exports = generateMarkdown;
