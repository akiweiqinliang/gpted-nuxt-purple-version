export const areas = {
  *[Symbol.iterator]() {
    const keys = Object.keys(this);
    for (const key of keys) {
      yield this[key];
    }
  },
  Asia: {
    label: '亚洲',
    id: '0',
    children: [
      {
        label: '东亚',
        id: '0',
      },
      {
        label: '东南亚',
        id: '1',
      },
      {
        label: '南亚',
        id: '2',
      },
      {
        label: '西亚',
        id: '3',
      },
      {
        label: '中亚',
        id: '4',
      },
    ],
  },
  Europe: {
    label: '欧洲',
    id: '1',
    children: [
      {
        label: '东欧',
        id: '0',
      },
      {
        label: '西欧',
        id: '1',
      },
      {
        label: '南欧',
        id: '2',
      },
      {
        label: '北欧',
        id: '3',
      },
    ],
  },
  America: {
    label: '美洲',
    id: '2',
    children: [
      {
        label: '南美洲',
        id: '0',
      },
      {
        label: '北美洲',
        id: '1',
      },
      {
        label: '中美洲',
        id: '2',
      },
    ],
  },
  Africa: {
    label: '非洲',
    id: '3',
    children: [
      {
        label: '东非',
        id: '0',
      },
      {
        label: '南非',
        id: '1',
      },
      {
        label: '西非',
        id: '2',
      },
      {
        label: '北非',
        id: '3',
      },
      {
        label: '中非',
        id: '4',
      },
    ],
  },
  Oceania: {
    label: '大洋洲',
    id: '4',
    children: [],
  },
};
