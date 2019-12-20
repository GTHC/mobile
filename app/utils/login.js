import {authorize, prefetchConfiguration} from 'react-native-app-auth';
import Config from 'react-native-config';
import {storeData as session} from './Storage';

const config = {
  serviceConfiguration: {
    authorizationEndpoint: Config.AUTH_ENDPOINT,
    tokenEndpoint: Config.TOKEN_ENDPOINT,
  },
  issuer: Config.ISSUER,
  clientId: Config.CLIENT_ID,
  clientSecret: Config.CLIENT_SECRET,
  redirectUrl: Config.REDIRECT_URL,
  warmAndPrefetchChrome: true,
};
prefetchConfiguration(config);

const auth = () => authorize(config);

export {auth, session};
