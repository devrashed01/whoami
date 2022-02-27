import React from "react";

type Props = {
  name: string;
  profession: string;
};

const HeroContent = ({ name, profession }: Props) => {
  return (
    <div className="h-full place-content-center grid">
      <h2 className="font-bold text-8xl">
        I am <span className="text-blue-400">{name}</span>
      </h2>
      <h3 className="font-thin font-secondary text-5xl mt-6">{profession}</h3>
    </div>
  );
};

export default HeroContent;
