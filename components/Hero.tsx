import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
      <TypeAnimation
      sequence={[
      'Welcome to Kindlely', 
       1000, 
      'Two',
       1000, 
       'Three', 
       1000
    ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />
    );
  };

export default Hero