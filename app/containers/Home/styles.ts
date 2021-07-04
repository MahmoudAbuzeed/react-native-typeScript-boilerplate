import {StyleSheet} from 'react-native';
import colors from '../../shared/colors';
import fontSize from '../../shared/fonts/fontSize';
import IStyle from './interfaces/IStyle';

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: colors.light.shadowColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    color: colors.gray.veryLight,
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: fontSize.h4,
  },

  everestText: {
    color: colors.light.primary,
    fontSize: fontSize.h1,
  },
});

export default styles;
