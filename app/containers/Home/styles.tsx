import {StyleSheet} from 'react-native';
import colors from '../../shared/colors';
import fontSize from '../../shared/fonts/fontSize';

const styles = StyleSheet.create({
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
    fontSize: fontSize.medium,
  },

  everestText: {
    color: colors.light.primary,
    fontSize: fontSize.large,
  },
});

export default styles;
