import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    padding: appMetrics.gutter.m,
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: appColors.gray75,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
