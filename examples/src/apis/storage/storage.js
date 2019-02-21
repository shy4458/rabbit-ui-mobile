import { Constants } from '../../helpers';

module.exports = Constants.IsAndroid
    ? require('./storage.android') : require('./storage.ios');
