import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface MenuButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick: React.MouseEventHandler;
  isOpen: boolean;
}

interface menuProps {
  top: HTMLSpanElement | null;
  middle: HTMLSpanElement | null;
  bottom: HTMLSpanElement | null;
}

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.greyColor};
  text-indent: -999999px;
  position: absolute;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 0.9rem;
  }
  &:nth-child(3) {
    top: 1.8rem;
  }
`;

const Container = styled.a`
  display: block;
  width: 5rem;
  height: 2.1rem;
  cursor: pointer;
  top: 5rem;
  right: 5rem;
  position: fixed;
  z-index: 50;

  @media screen and (max-width: 1024px) {
    right: 2rem;
  }
`;

const MenuButton = ({ onClick, isOpen, ...props }: MenuButtonProps): React.ReactElement => {
  const [menuTimeline] = React.useState(gsap.timeline({ paused: true }));
  const menu = React.useRef<menuProps>({
    top: null,
    middle: null,
    bottom: null,
  });
  React.useEffect(() => {
    menuTimeline
      .to(menu.current.top, { duration: 0.2, top: 9, rotation: 45 }, 0)
      .to(menu.current.middle, { duration: 0.2, alpha: 0 }, 0)
      .to(menu.current.bottom, { duration: 0.2, top: 9, rotation: -45 }, 0)
      .reverse();
  }, []);

  React.useEffect(() => {
    menuTimeline.reversed(!isOpen);
  }, [isOpen, menuTimeline]);

  return (
    <Container aria-label='Main navigation menu' onClick={onClick} {...props}>
      <Line
        ref={ref => {
          menu.current.top = ref;
        }}
      >
        1
      </Line>
      <Line
        ref={ref => {
          menu.current.middle = ref;
        }}
      >
        2
      </Line>
      <Line
        ref={ref => {
          menu.current.bottom = ref;
        }}
      >
        3
      </Line>
    </Container>
  );
};

export default MenuButton;
