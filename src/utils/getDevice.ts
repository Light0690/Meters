type device = 'desktop' | 'laptop' | 'tablet' | 'mobile';

const getDevice = (): device  => {
  let device: device = 'desktop';
  if (window.innerWidth >= 1720) device = 'desktop';
  if (window.innerWidth < 1720)  device = 'laptop';
  if (window.innerWidth < 1024)  device = 'tablet';
  if (window.innerWidth < 768)   device = 'mobile';
  return device;
};

export { getDevice };
