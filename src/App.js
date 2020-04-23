import React, {Component} from 'react';
import './App.css';
import CardContainer from './CardContainer';

// const strainURL = 'https://strainraygorodskijv1.p.rapidapi.com/getAllStrains'

class App extends Component {
  state = {
    data: [
      {
        title: 'Title1'
        
      },
      {
        title: 'Title2'

      },
      {
        title: 'Title3'

      }
    ]
  }


  render() {
    return(
      <div className="App">
        <CardContainer data={this.state.data}/>
      </div>
    )
  }
}

export default App;
