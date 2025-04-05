import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
      <TypeAnimation
      sequence={[
      'Welcome to Kindlely', 
       2000, 
      'Start your next conversation',
       1000, 
       'with sick conversation starters!', 
       2000,
       'Such as...',
       1000,
       'Would you kindly?',
       1000,
       'Or...',
       2000,
       'Tralaleo tralala!',

    ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />
    );
  };

export default Hero