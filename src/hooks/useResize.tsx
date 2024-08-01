import { useState, useEffect } from "react";
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from "@constants/sizes";

const getDevice = () => {
  let device = 'desktop';
  if (window.innerWidth < 1720) device = 'laptop';
  if (window.innerWidth < 1024) device = 'tablet';
  if (window.innerWidth < 768)  device = 'mobile';
  return device;
};

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setDevice(getDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    device,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
