import React from 'react';
import LinkCard from './LinkCard';

const LinkList = () => {
  const links = [
    { title: 'Telegram', url: 'https://t.me/caronfire', background: 'linear-gradient(45deg, #009688 30%, #4db6ac 90%)' },
    { title: 'Twitter', url: 'https://twitter.com/caronfiree', background: 'linear-gradient(45deg, #009688 30%, #4db6ac 90%)' },
   { title: 'GitHub', url: 'https://github.com/CaronSch', background: 'linear-gradient(45deg, #009688 30%, #4db6ac 90%)' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/caronschaller/', background: 'linear-gradient(45deg, #009688 30%, #4db6ac 90%)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {links.map((link, index) => (
        <LinkCard key={index} title={link.title} url={link.url} />
      ))}
    </div>
  );
};

export default LinkList;





