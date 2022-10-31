import React from "react";

const Links = ({ links }) => {
  return (
    <div>
      {links.map(link => (
        <div className="link__container">
        <li key={link.uniqueKey}><a href={`${link.link}`} id={`${link.id}`}>{link.name}</a></li>
        </div>
      ))}
    </div>
  );
};

export default Links;
