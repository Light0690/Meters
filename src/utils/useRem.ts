interface Iscales  {
  desktop: number,
  laptop: number,
  tablet: number,
  mobile: number
}

const SCALES: Iscales = {
  desktop: 1920,
  laptop: 1440,
  tablet: 768,
  mobile: 375
}

const BREAKPOINTS = {
  laptop: 1720,
  tablet: 1023,
  mobile: 767,
}

const getScaleCoefficient = () => {
  const windowWidth: number = window.innerWidth;
  const breakpoints = Object.entries(BREAKPOINTS).map(([key, value]) => ({ name: key, value }));
  const currentBreakpoint = breakpoints.sort((a, b) => a.value - b.value).find(item => item.value >= windowWidth);
  const scaleName = currentBreakpoint?.name || 'desktop';
  const size = SCALES[scaleName as keyof Iscales];

  return windowWidth / (size / 100) / 100;
}

const useRem = (px = 1) => {
  try {
    parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    return px * getScaleCoefficient();
  } catch (error) {
    console.error('Error on useRem function:', { px, error });
    return px;
  }
};

export default useRem;