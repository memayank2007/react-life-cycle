import React from 'react';

let Counter = React.createClass({


  getDefaultProps: function(){
    console.debug('get Default props');

    return{};

  },

  getInitialState: function(){
    console.debug('get Inital State');
    return{};
  },

  componentWillMount: function(){
    console.log('component will mount');
  },

  componentDidMount: function () {
    console.debug('componentDidMount');
  },

  componentWillReceiveProps: function () {
    console.debug('componentWillReceiveProps');
  },

  shouldComponentUpdate: function () {
    console.debug('shouldComponentUpdate');

    return true;
  },

   componentWillUpdate: function () {
    console.debug('componentWillUpdate');
  },

    componentDidUpdate: function () {
    console.debug('componentDidUpdate');
  },

    componentWillUnmount: function () {
    console.debug('componentWillUnmount');
  },



  render : function(){
      console.debug('render');
     return(

        <p> {this.props.counter}</p>
      );
  }


});

export default Counter;