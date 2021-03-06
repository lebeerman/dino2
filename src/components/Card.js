import React from 'react';



export const Card = ({ card, toggleClass, styleCondition }) => {
  return <li onClick={() => toggleClass(card)}>
      <div className="profile-card">
        <header className="profile-header">
          <img src={card.image} alt="poop" />
          <h2>{card.name}</h2>
        </header>
        <section className={styleCondition ? 'skills-container hidden' : 'skills-container'}>
          <h4>Skills</h4>
          <ul className="skills-list">{card.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </section>
      </div>
    </li>;
};

