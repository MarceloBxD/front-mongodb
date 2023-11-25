import React from 'react';

const PersonIcon: React.FC = (props) => {
  return <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="24px"
      width="24px"
      {...props}
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
    </svg>;
}

export default PersonIcon;