const config = {
  title: 'AI-Driven Humanoid Robotics Development Book',
  tagline: 'Building Autonomous Humanoid Robots from Simulation to AI-Powered Control',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://[YOUR_GITHUB_USERNAME].github.io', // Replace with your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-driven-humanoid-robotics-development-book/', // Replace with your GitHub repository name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '[YOUR_GITHUB_USERNAME]', // Replace with your GitHub organization/user name
  projectName: 'ai-driven-humanoid-robotics-development-book', // Replace with your GitHub repository name
  deploymentBranch: 'gh-pages', // The branch where your Docusaurus site will be deployed

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/[YOUR_GITHUB_USERNAME]/ai-driven-humanoid-robotics-development-book/tree/main/', // Replace with your repo link
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/[YOUR_GITHUB_USERNAME]/ai-driven-humanoid-robotics-development-book/tree/main/', // Replace with your repo link
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI-Driven Humanoid Robotics',
        logo: {
          alt: 'Humanoid Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/[YOUR_GITHUB_USERNAME]/ai-driven-humanoid-robotics-development-book', // Replace with your GitHub repo link
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Book Chapters',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // You can add community links here if needed
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/[YOUR_GITHUB_USERNAME]/ai-driven-humanoid-robotics-development-book', // Replace with your GitHub repo link
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-Driven Humanoid Robotics Development. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['cpp', 'python', 'bash'], // Add additional languages for code highlighting
      },
    }),
};

export default config;