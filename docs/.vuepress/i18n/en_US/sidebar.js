const support = {
  text: 'Support',
  children: [
    '/troubleshooting',
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/5psYsup'
    }
  ],
}

const site = {
  text: 'Site',
  children: [
    '/credits',
    '/donations',
    '/site-navigation',
  ],
}

module.exports = {
  '/': [
    {
      text: 'Cemu Guide',
      children: [
        '/installing-cemu',
        '/controller-configuration',
        '/using-dumpling',
        '/installing-games',
        '/online-play',
        '/optimizing-cemu',
        '/optimizing-botw',
      ],
    },
    support,
    site,
  ],
  
  '/optimizing-cemu-(opengl)/': [
    {
      text: 'Cemu Guide',
      children: [
        '/installing-cemu',
        '/controller-configuration',
        '/using-dumpling',
        '/installing-games',
        '/online-play',
        {
          text: 'Optimizing Cemu (OpenGL)',
          link: '/optimizing-cemu-(opengl)/',
          children: [
            {
              text: 'NVIDIA',
              link: '/optimizing-cemu-(opengl)/nvidia',
            },
            {
              text: 'AMD',
              link: '/optimizing-cemu-(opengl)/amd',
            },
            {
              text: 'Intel',
              link: '/optimizing-cemu-(opengl)/intel',
            },
          ],
        },
        '/optimizing-botw',
      ],
    },
    support,
    site,
  ],
  
  '/ftp': [
    {
      text: 'Cemu Guide',
      children: [
        '/installing-cemu',
        '/controller-configuration',
        {
          text: 'Dumping Games (FTP and disc2app)',
          link: '/ftp/dumping-games/',
          children: [
            {
              text: 'Digital',
              link: '/ftp/dumping-games/digital',
            },
            {
              text: 'Physical',
              link: '/ftp/dumping-games/physical',
            },
          ],
        },
        '/ftp/dumping-updates-and-dlc',
        '/ftp/transferring-save-data',
        {
          text: 'Optimizing Cemu',
          link: '/optimizing-cemu',
        },
        '/optimizing-cemu',
        '/optimizing-botw',
      ],
    },
    support,
    site,
  ],
  
  '/controllers': [
    {
      text: 'Cemu Guide',
      children: [
        '/installing-cemu',
        {
          text: 'Controller Configuration (Old)',
          link: '/controllers/',
          children: [
            {
              text: 'DS4Windows',
              link: '/controllers/ds4windows',
            },
            {
              text: 'XInput',
              link: '/controllers/xinput',
            },
          ],
        },
        '/using-dumpling',
        '/installing-games',
        '/online-play',
        '/optimizing-cemu',
        '/optimizing-botw',
      ],
    },
    support,
    site,
  ],
}