import React from 'react';

const OLXIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#45A534" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.7,13.84-2.3,2.3a.58.58,0,0,1-.82,0l-3-3a.58.58,0,0,1,0-.82l2.3-2.3a.58.58,0,0,1,.82,0l3,3A.58.58,0,0,1,13.7,15.84Zm3-3L14.4,10.54a.58.58,0,0,0-.82,0l-3,3a.58.58,0,0,0,0,.82l2.3,2.3a.58.58,0,0,0,.82,0l3-3A.58.58,0,0,0,16.7,12.84Z"></path>
    </svg>
);

export default OLXIcon;