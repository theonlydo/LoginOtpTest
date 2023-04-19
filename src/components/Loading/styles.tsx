import {appColors} from '@app/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: appColors.transparent30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
