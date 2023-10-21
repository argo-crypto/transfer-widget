import React, {useState, useMemo} from 'react';

export type ActionButtonProps = {
  label: string;
  background: string;
  textColor: string;
};

const BASE_BUTTON_CLASSES =
  'cursor-pointer border-radius-6 rounded border-1 border-border-color font-manrope font-medium py-3 px-4 w-full';

const ActionButton: React.FC<ActionButtonProps> = ({ label, background, textColor }) => {
  
  return (
    <button className={`${BASE_BUTTON_CLASSES} ${background} ${textColor}`}>
      {label}
    </button>
  );
};

export default ActionButton;