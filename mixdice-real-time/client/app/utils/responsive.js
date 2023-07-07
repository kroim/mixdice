import screenSizes from 'enums/screenSizes';
export const isXSm = (size = window.innerWidth) => size < screenSizes.SM;
export const isSm = (size = window.innerWidth) =>
  size >= screenSizes.SM && size <= screenSizes.MD;
export const isMd = (size = window.innerWidth) =>
  size >= screenSizes.MD && size <= screenSizes.LG;
export const isLg = (size = window.innerWidth) =>
  size >= screenSizes.LG && size <= screenSizes.XLG;
export const isXLg = (size = window.innerWidth) => size >= screenSizes.XLG;
