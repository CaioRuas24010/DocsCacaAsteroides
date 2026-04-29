// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Caça Asteroides MCTI',
  tagline: 'Documentação oficial',
  favicon: '/img/caca-favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://CaioRuas24010.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DocsCacaAsteroides/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CaioRuas24010',
  projectName: 'DocsCacaAsteroides',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR'],
  localeConfigs: {
    'pt-BR': {
      htmlLang: 'pt-BR',
    },
  },
},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://github.com/CaioRuas24010/DocsCacaAsteroides',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // Conteúdo principal está em docs
        indexDocs: true,

        // Blog desativado
        indexBlog: false,

        // Páginas avulsas em src/pages, mude para true
        indexPages: false,

        // RouteBasePath: '/'
        docsRouteBasePath: '/',

        // Recomendado
        hashed: true,

        // Conteúdo está em português
        language: ['pt'],
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/caca-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Caça Asteroides MCTI',
        logo: {
          alt: 'Logo Caça Asteroides',
          src: 'img/logo_caca.png',
          // height: 52,
          // width: auto,
        },
        items: [
          {
            label: 'Erros comuns',
            to: '/category/erros-frequentes',
          },
          {
            href: 'https://iasc.cosmosearch.org/',
            label: 'IASC',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Início',
                to: '/',
              },
              {
                label: 'Imagens',
                to: '/category/analisando-imagens'
              },
              {
                label: 'Apoio',
                to: '/category/apoio'
              },
            ],
          },
          {
            title: 'Links úteis',
            items: [
              {
                label: 'IASC',
                href: 'https://iasc.cosmosearch.org/',
              },
              {
                label: 'Youtube Caça Asteroides MCTI',
                href: 'https://www.youtube.com/@cacaasteroidesmcti3770',
              },
              {
                label: 'Instagram Caça Asteroides MCTI',
                href: 'https://www.instagram.com/cacaasteroidemcti/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Caça Asteroides MCTI.. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
