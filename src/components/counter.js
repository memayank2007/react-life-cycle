import React from 'react';

let Counter = React.createClass({

  render : function(){

     return(

        <p> {this.props.counter}</p>
      );
  }


});

export default Counter;