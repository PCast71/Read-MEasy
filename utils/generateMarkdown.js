// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT' : 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'APACHE2.0' : 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'Boost1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'MPL2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  };
  return license && badges[license] ? `![License](${badges[license]})` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'MIT' : 'https://opensource.org/licenses/MIT',
    'APACHE2.0' : 'https://opensource.org.licenses/Apache-2.0',
    'Boost1.0' : 'https://www.boost.org/LICENSE_1_0.txt',
    'MPL2.0' : 'https://opensource.org/licenses/MPL-2.0',
  };
  return license && links[license] ? links[license] : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  if (!license) return '';
  return `## License\nThis project is licensed under the ${license} License - see [LICENSE](${link}) for details. \n${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ${data.description}

  ## Table of Contents
  -[License](#license)

  ## License
  ${licenseSection}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  To run tests on this application, use the following command:
\`\`\`bash
${data.test}
\`\`\`

## Questions
If you have any questions about the project, open an issue or contact me directly at ${data.githubUserEmail}. You can find more of my work at [GitHub](https://github.com/${data.githubUsername}).


`;
}

module.exports = generateMarkdown;
