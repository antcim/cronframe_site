// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CronFrame',
  tagline: 'A Rust CronJob Framework and CLI tool.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'http://antcim.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cronframe_site',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'antcim', // Usually your GitHub org/user name.
  projectName: 'cronframe_site', // Usually your repo name.

  trailingSlash: false,

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
        },
        blog: false,
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
      navbar: {
        title: 'CronFrame',
        logo: {
          alt: 'CronFrame Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          // comment out this when localization will be available
          // {
          //   type: 'localeDropdown',
          //   position: 'right'
          // },
          {
            href: 'https://github.com/antcim/cronframe',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'crates.io',
            href: 'https://crates.io/crates/cronframe',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial - Framework',
                to: '/docs/category/tutorial---framework',
              },
              {
                label: 'Tutorial - CLI Tool',
                to: '/docs/category/tutorial---cli-tool',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/antcim/cronframe',
              },
              {
                label: 'crates.io',
                href: 'https://crates.io/crates/cronframe',
              },
              {
                label: 'Icons',
                href: 'https://www.flaticon.com/',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
