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
  return  `#### License Badge:
  ${renderLicenseBadge(license)}
  #### For further details:
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title ${data.title}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Test Instructions](#test instructions)
  - [License Info](#license)
  - [Author Info](#author info)
  - [GitHub](#GitHub)
  - [Email Info](#email address)




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

  ### License
  ${renderLicenseSection(data.license)}

  ### Author Info
  ${data.authorInfo}

  ### Email Address
  If you need to get in contact with the author
  ${data.emailAddress}

  

  ### GitHub
  [Github Profile](https://github.com/${data.gitHubUsername})

`;
}

module.exports = generateMarkdown;
