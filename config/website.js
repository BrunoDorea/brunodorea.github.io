const meta = {
  // Metadata
  siteTitle: 'Bruno H - QA & Dev',
  siteDescription:
    'Bruno H - QA & Dev',
  siteTitleAlt: 'Bruno H',
  siteShortName: 'Bruno H',
  siteUrl: 'https://brunodorea.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@brunoooooooo_',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'brunoh',
  googleAnalyticsID: '321577787',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
