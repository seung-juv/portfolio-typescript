import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

type useScrollTypes = {
  enableScroll: () => void;
  disableScroll: () => void;
};

const useScroll = (): useScrollTypes => {
  const enableScroll = () => {
    document.body.style.overflow = '';
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  return { enableScroll, disableScroll };
};

export default useScroll;
