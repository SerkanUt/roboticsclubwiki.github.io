// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to the Robotics Club Wiki',
  tagline: "Here you will find how-tos on projects, manufacturing processes, and interesting findings. This will also be where we showcase some projects. The wiki's purpose is to put all of our knowledge in one place so we don't have trouble looking up anything we have trouble with. This knowledge base is accessible to everyone, anyone can add anything they want that is related to engineering, coding, or robotics.",
  favicon: 'img/RoboticsLogo.jpg',

  // Set the production url of your site here
  url: 'https://njit-robotics-club.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/roboticsclubwiki.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'njit-robotics-club', // Usually your GitHub org/user name.
  projectName: 'roboticsclubwiki.github.io', // Usually your repo name.

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
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/Nicholasbbb/roboticsclubwiki.github.io/',
        },
        /**
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nicholasbbb/roboticsclubwiki.github.io/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/RoboticsLogo.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/RoboticsLogo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/NJIT-Robotics-Club',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website & Highlander Hub',
            items: [
              {
                label: 'NJIT Robotics Club',
                href: 'https://www.roboticsclub.njit.edu/',
              },
              {
                label: 'Highlander Hub',
                href: 'https://njit.campuslabs.com/engage/organization/nrc',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/NJITRobotics/',
              },
              {
                label: 'Discord',
                href: 'https://njit.gg/robotics',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCv5vTAes2gOxcjiAhyaEsPA',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/njitrobotics/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@njit_robotics_club',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/njit-robotics-club/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NJIT Robotics Club. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
