// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else if (license === 'Apache 2.0 License') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'Boost Software License 1.0') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (license === 'Eclipse Public License 1.0') {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  } else if (license === 'GNU General Public License v3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else if (license === 'Apache 2.0 License') {
    return `[Link to Apache 2.0 License information](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost Software License 1.0') {
    return `[Link to Boost Software License 1.0 information](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'Eclipse Public License 1.0') {
    return `[Link to Eclipse Public License 1.0 information](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'GNU General Public License v3.0') {
    return `[Link to GNU General Public License v3.0 information](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'MIT') {
    return `[Link to MIT License information](https://opensource.org/licenses/MIT)`
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
