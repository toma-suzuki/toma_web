import { useSpring, animated } from 'react-spring';
import React, { useState } from 'react';
import Subtitle from './subtitle';

const Title = (props: { main: string, sub: string, setTitleState: React.Dispatch<boolean> }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedSub, setIsOpenedSub] = useState(false);
  const opened = () => {
    setIsOpened(true);
  };
  const setSubState = () => {
    setIsOpenedSub(true);
  };
  const isUpped = () => {
    props.setTitleState(true);
  };
  const configAnimation = {
    duration: 2000,
  };
  const animation = useSpring({
    from: { opacity: 0, color: '#282c34', y: 0 },
    to: [{ opacity: 1, color: '#FFFFFF' }, () => opened(), { y: isOpenedSub ? window.innerHeight * -0.4 : 0 }],
    onRest: isOpenedSub ? isUpped : opened,
    config: configAnimation,
  });

  return (
    <>
      <animated.div
        className={'top-page-title'}
        style={animation}
      >
        <h1>{props.main}</h1>
      </animated.div>
      <Subtitle
        text={props.sub}
        isOpenedTitle={isOpened}
        setIsOpenedSub={setSubState}
      />
    </>
  );
};

export default Title;