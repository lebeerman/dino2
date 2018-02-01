import React from 'react';
import ProfileCards from './ProfileCards';

class Profiles extends React.Component {
  render(){
    return <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          {console.dir(this.props.profiles)}
          <ProfileCards 
            profiles={this.props.profiles} 
            toggleClass={this.props.toggleClass} />
        </section>
      </main>;
  }
};
export default Profiles;
