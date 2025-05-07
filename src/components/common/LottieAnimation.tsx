import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = () => {
  return (
    <div className="flex justify-center p-4">
      <DotLottieReact
        src="https://lottie.host/06ec22f4-e3ce-4522-8d25-88b386a3deb5/Be8cGB8L21.lottie"
        autoplay
        loop
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LottieAnimation;
