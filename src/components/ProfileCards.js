import React from 'react';
import {Card} from './Card';

class ProfileCards extends React.Component {
  render(){
    console.log('made it!');
    const profCards = this.props.profiles;
    return <ul>{profCards.profiles.map((card,i) => {
      return <Card card={card} key={i} onClick={this.toggleClass} />;
    })}</ul>;
  }
}
export default ProfileCards;