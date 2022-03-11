import React from 'react';
import { useSpring, animated } from 'react-spring';

const Title = (props: { title: string, subtitle: string }) => {
  const configTitleAnimation = {
    duration: 1500,
  };
  const configSubtitleAnimation = {
    duration: 2000,
  };
  const animation = useSpring({
    from: { opacity: 0, color: '#282c34', y: 0 },
    to: { opacity: 1, color: '#FFFFFF' },
    config: configTitleAnimation,
  });
  const subAnimation = useSpring({
    delay: 2000,
    from: { width: 0, y: 0 },
    to: { width: window.innerWidth },
    config: configSubtitleAnimation,
  });

  return (
    <>
      <div className={'top-page-title'}>
        <animated.div style={animation}>
          <h1>{props.title}</h1>
        </animated.div>
      </div>
      <div className={'top-page-subtitle'}>
        <animated.div style={subAnimation}>
          <p>{props.subtitle}</p>
        </animated.div>
      </div>
    </>
  )
};

export default Title;