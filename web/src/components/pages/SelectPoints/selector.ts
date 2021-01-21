import { RootStateOrAny } from 'react-redux';

export type StateFromProps = {
  priceMapOfPoints: { [key: string]: string };
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    settings: { priceMapOfPoints },
  } = state;

  let priceMap = {};
  const sortedKeys = Object.keys(priceMapOfPoints).sort(
    (a, b) => parseInt(a.replace('pts', '')) - parseInt(b.replace('pts', '')),
  );
  console.log('SORTED KEYS:', sortedKeys);
  sortedKeys.forEach(key => {
    priceMap = {
      ...priceMap,
      [key]: priceMapOfPoints[key].toString(),
    };
  });

  return {
    priceMapOfPoints: priceMap,
  };
};
