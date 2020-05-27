/*
 * We may need to change some environment settings for each environment, a good example is our API source. This files
 * is where we store environment specif settings. In this case its for development (localhost). On the deploy script we
 * would then copy the environment specific file from the `./config` folder into the site root as `./config.js`.
 * The reason we do this is that it allows us to build our final artifact once when were ready for QA and store/version
 * that build so that when we deploy QA, UAT, Prod or any other 'higher environment' (not dev) we can be 100% assured
 * that the code is the same as we only build once and deploy multiple times. This also saves us time as we no longer
 * need to build each step in the SDLC
 */

window.config = {
  environment: 'uat',
  baseApi: 'https://www.stackadapt.com/coinmarketcap',
};
