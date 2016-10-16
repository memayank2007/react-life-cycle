
import React from 'react';
import Counter from './Counter';

let App = React.createClass({

 	getInitialState: function(){
 		return {
 			counter : 0,
 			isCounterHidden: false
 		}
 	},

 	toggleCounter : function(){
 		console.log(this.state.isCounterHidden);
 		this.setState({
 			isCounterHidden: !this.state.isCounterHidden
 		});
 		console.log(this.state.isCounterHidden);

 	},

 	incrementCounter : function(){
 		this.setState({
 			counter: this.state.counter + 1 
 		});
 	},
  

  render: function () {

    let style = {
      marginTop: '40px',
      marginBottom: '10px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">

            <p style={style}>Make sure to open Developer Tools Console before you click anything.</p>

            <div className="btn-group btn-group-lg" role="group" aria-label="..." style={style}>
              <button type="button" className="btn btn-default" onClick = {this.toggleCounter}>{this.state.isCounterHidden ? 'Hide' :'Show'}</button>
              <button type="button" className="btn btn-success" onClick={this.incrementCounter}>Increment</button>
              {this.state.isCounterHidden ? null : <Counter counter= {this.state.counter}/>}
            </div>

 
          </div>
        </div>
      </div>
    );
  }
});

export default App;