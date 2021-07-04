import {Dimensions, I18nManager} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const RTL = I18nManager.isRTL;

export default {
  isSmallDevice: width < 375,
  isRTL: RTL,
  window: {
    width,
    height,
  },

  styles: {
    flexDirection: RTL ? 'row-reverse' : ('row' as any),
  },
};
