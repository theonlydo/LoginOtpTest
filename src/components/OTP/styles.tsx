import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleContainer: {
    flexDirection: 'row',
    marginTop: appMetrics.gutter.m,
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appColors.black,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: appColors.white,
    borderWidth: 2,
    borderRadius: 100,
    marginRight: appMetrics.gutter.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleFocus: {
    borderColor: appColors.primary,
  },
  circleNormal: {
    borderColor: appColors.gray25,
  },
  input: {
    height: 0,
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResend: {
    fontWeight: 'bold',
  },
  textTimer: {},
});

export default styles;
