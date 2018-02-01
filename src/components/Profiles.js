import React from 'react';
import ProfileCards from './ProfileCards';

const Profiles = (profiles2) => {
  return <main>
      <section id="profiles-container">
        <h2>Profiles</h2>
        {console.dir(profiles2)}
        <ProfileCards profiles={profiles2} />
      </section>
    </main>;
};
export default Profiles;
