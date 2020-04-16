// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <Person name="zhangsan" count="20">我是子元素</Person>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ id: '1', name: 'zhangsn', count: '15' }, {  id: '2',name: 'lisi', count: '20' }],
    showPersons: false,
  }
  switchHandler = () => {
    this.setState({
      persons: [
        { id: '1', name: 'aa', count: '15' },
        { id: '2', name: 'bb', count: '2220' }
      ]
    })
  }

  toogleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  deleteHandler = (personIndex) => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>

        {/* <Person name={this.state.persons[0].name} count={this.state.persons[0].count}>我是子元素</Person> */}

        {
          this.state.persons.map((per, index) => {
            return <Person
              changed={(event) => this.nameChangeHandler(event, per.id)}
              key={per.id} name={per.name} count={per.count} myclick={() => this.deleteHandler(index)} />
          })
        }
      </div>
      )
    }
    const classes=[]
    if(this.state.persons.length===2){
      classes.push("red")
    }
    if(this.state.persons.length===1){
      classes.push("bold")
    }
    return (
      <div className="App">
        <button onClick={this.switchHandler}> 改变person内容</button>
        {/* <Person name={this.state.persons[0].name} count={this.state.persons[0].count}>我是子元素</Person> */}
        {/* <Person name='aa' count="10"></Person> */}
        <button onClick={this.toogleHandler} className={classes.join(" ")}> 显示内容切换</button>
        {/* {this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} count={this.state.persons[0].count}>我是子元素</Person>
          </div> : null
        } */}
        {persons}


      </div>
    );
  }

}

export default App;
