import { BANNER_IMAGES } from '../data';

const randomBanner = () => {
  // 0 -> length of Banners - 1
  const RANDOM_INDEX = Math.floor(Math.random() * BANNER_IMAGES.length);

  return BANNER_IMAGES[ RANDOM_INDEX ];
};

export default randomBanner;
