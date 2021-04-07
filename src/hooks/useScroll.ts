import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

type useScrollType = {
  enableScroll: () => void;
  disableScroll: () => void;
};

const useScroll = (): useScrollType => {
  let top = 0;
  const callback = (event: WheelEvent): void => {
    const { deltaY } = event || {};
    const { body: _body } = document || {};

    const height = Math.max(_body.scrollHeight, _body.offsetHeight);
    if (deltaY > 0 && top < height) {
      top += deltaY;
    } else if (deltaY < 0 && top > 0) {
      top += deltaY;
    }
    gsap.to(window, {
      duration: 0.5,
      scrollTo: top,
    });
  };
  const enableScroll = () => document.addEventListener('wheel', callback);
  const disableScroll = () => document.removeEventListener('wheel', callback);
  return { enableScroll, disableScroll };
};

export default useScroll;
