import React from 'react';
import {Card} from './Card';

class ProfileCards extends React.Component {
  
  render() {
    console.log('made it!');
    return (
      <ul>
        {this.props.profiles.map((card, i) => {
          return <Card card={card} key={i} toggleClass={this.props.toggleClass} styleCondition={card.styleCondition} />;
        })}
      </ul>
    );
  }
}
export default ProfileCards;