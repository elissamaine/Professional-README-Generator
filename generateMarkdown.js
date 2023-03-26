// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0 License') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'Boost Software License 1.0') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === 'Eclipse Public License 1.0') {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license === 'GNU General Public License v3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  };
};

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0 License') {
    return `[Link to Apache 2.0 License information](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Boost Software License 1.0') {
    return `[Link to Boost Software License 1.0 information](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Eclipse Public License 1.0') {
    return `[Link to Eclipse Public License 1.0 information](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'GNU General Public License v3.0') {
    return `[Link to GNU General Public License v3.0 information](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT License') {
    return `[Link to MIT License information](https://opensource.org/licenses/MIT)`;
  };
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return `None`;
  };

  return `This project has a(n) ${license}. 
  If you have any questions about licenseing refer to ${license} documentation: ${renderLicenseLink(license)} 
`;
}


// Function that generates a markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  steps to install:
  ${data.install}

  ## Usage 

  Usage information:
  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing 

  Guidelines for contribution:
  ${data.contribution}

  ## Tests 

  ${data.tests}

  ## Questions

  If you have any questions please contact the project creator at: ${data.email}
  And check out more that they have done on their GitHub account at: ${data.userName}

  Thank You!

`;
}

module.exports = generateMarkdown;
