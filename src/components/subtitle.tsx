import { useSpring, animated } from 'react-spring';
import React, { SetStateAction, useState } from 'react';

const Subtitle = (props: { text: string, isOpenedTitle: boolean, setIsOpenedSub: React.Dispatch<SetStateAction<boolean>> }) => {
  const [isOpened, setIsOpened] = useState(false);
  const opened = () => {
    setIsOpened(true);
    props.setIsOpenedSub(true);
  };
  const configAnimation = {
    duration: 2000,
  };
  const animation = useSpring({
    width: props.isOpenedTitle ? window.innerWidth : 0,
    y: isOpened ? window.innerHeight * -0.42 : 0,
    onRest: () => opened(),
    config: configAnimation,
  });

  return (
    <animated.div
      className={'top-page-subtitle'}
      style={animation}
    >
      <p>{props.text}</p>
    </animated.div>
  );

};

export default Subtitle;