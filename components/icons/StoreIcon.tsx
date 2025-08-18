
import React from 'react';

const StoreIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0114.25 12h.75c.414 0 .75.336.75.75v7.5m0 0v-7.5m0 7.5h-1.5m1.5 0v-7.5m0 7.5V12m0 9h.75M12 21v-7.5a.75.75 0 00-.75-.75H9.75A.75.75 0 009 12.75v7.5m0 0v-7.5m0 7.5h3m-3 0v-7.5m0 7.5h-.75m.75 0v-7.5m-6-12s-1.5 0-1.5 1.5v11.25a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5h-12z" />
  </svg>
);

export default StoreIcon;
