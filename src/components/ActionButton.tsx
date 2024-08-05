import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor?: string;
  textColor?: string;
  onClick: () => void;
}

const ActionButton = ({ 
  text,
  bgColor = 'bg-point500',
  textColor = 'text-white',
  onClick,
  className = '',
  ...props 
}: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={`w-[128px] h-[48px] ${bgColor} rounded-lg flex justify-center items-center ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className={`text-center ${textColor} font-semibold`}>{text}</span>
    </button>
  );
};

export default ActionButton;