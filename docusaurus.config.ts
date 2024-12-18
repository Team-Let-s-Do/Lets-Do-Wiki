import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Let\'s Do Wiki',
  tagline: 'Wiki for all the [Let\'s Do] Team\'s mods',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://team-let-s-do.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Lets-Do-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Team-Let-s-Do', // Usually your GitHub org/user name.
  projectName: 'Lets-Do-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'fr', 'nl'],
    localeConfigs: {
      en: { htmlLang: 'en-US' },
      de: { htmlLang: 'de-DE' },
      fr: { htmlLang: 'fr-FR' },
      nl: { htmlLang: 'nl-NL' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
          appId: 'GQS7PRJCVR',
          apiKey: '42ad30bd9ddb466b333a3b68ea9c150a',
          indexName: 'team-let-s-doio',
          contextualSearch: true
        },
    colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
    navbar: {
      title: 'Wiki',
      logo: {
        alt: '[Let\'s Do] Logo',
        src: 'img/letsdo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Home',
        },
        {
          href: 'https://discord.gg/let-s-do-collection-1078796799185277079',
          position: 'left',
          label: 'Discord',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              }
          ],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Team-Let-s-Do',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear() === 2024 ? 2024 : "2024 - " + new Date().getFullYear()} [Let's Do Team] mods`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
