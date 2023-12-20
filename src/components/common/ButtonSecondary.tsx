import React, { FC } from "react";

interface IButtonSecondaryProps {
  title: string;
  className?: string;
}

const ButtonSecondary: FC<IButtonSecondaryProps> = ({ title, className }) => {
  return (
    <div className={`button-secondary ${className}`}>
      {title}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ButtonSecondary;
