import React, { Component } from 'react';

// Input: liked: boolean
// Output: onClick
// It's up to the consumer component what kind of state we want to render.
// This component knows nothing about the movie component.

class Like extends Component {
  render() { 
    return (<i class="fa fa-heart-o" aria-hidden="true"></i>);
  }
}
 
export default Like;