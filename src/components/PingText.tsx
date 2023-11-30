import React, { type FunctionComponent } from 'react';

interface PingTextProps {
  status: 'loading' | 'error' | 'success';
  text?: string;
}

export const PingText: FunctionComponent<PingTextProps> = ({ status, text }) => {
  let color = 'success-green';
  if (status === 'error') color = 'failure-red';
  if (status === 'success') color = 'success-green';
  if (status === 'loading') color = 'loading-yellow';

  return (
    <div className='flex flex-row justify-center gap-3 items-center'>
      <span className='relative flex h-3 w-3'>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-${color}`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 bg-${color}`}></span>
      </span>
      <p className={'text-accent-color font-manrope text-sm font-medium'}>{text}</p>
    </div>
  );
};