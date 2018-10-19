import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {key:'jsnau1', name: 'Zbass', age: 25},
      {key:'5jjhhs', name: 'Putzi', age: 27},
      {key:'jh67jd', name: 'Pepi', age: 25}
    ],
    showNames: false
  }

  switchNameHandler = (newName)  =>  {
    this.setState(
      {
        persons : [
          {name: newName, age: 25},
          {name: 'Putzi', age: 27},
          {name: 'Pepi', age: 31}
        ]
      }
    )
  }

  inputNameChangeHandler = (event) =>  {
    this.setState(
      {
        persons : [
          {name: event.target.value, age: 25},
          {name: 'Putzi', age: 27},
          {name: 'Pepi', age: 31}
        ]
      }
    )
  }

  togglePersons = ()  =>  {
    var showPersons = this.state.showNames;
    this.setState({showNames: !showPersons})
    // { this.state.showNames ?
    //   <div>
    //     <Person
    //       name = {this.state.persons[0].name}
    //       age = {this.state.persons[0].age}
    //       click = {this.switchNameHandler.bind(this, 'Sebastian')}
    //       change = {this.inputNameChangeHandler}/>
    //     <Person
    //       name = {this.state.persons[1].name}
    //       age = {this.state.persons[1].age}> Piuta </ Person>
    //     <Person
    //       name = {this.state.persons[2].name}
    //       age = {this.state.persons[2].age}/>
    //   </ div> : null
    // }
  }

  deletePersonHandler = (personIndex) =>  {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  handlePersoneInput = (person, id)  =>  {
    const indexPerson = this.state.persons.findIndex( p =>  {
      return p.key === id;
    });

    console.log(indexPerson);
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showNames)  {
      persons = (
        <div>
          {this.state.persons.map( (person, index) =>  {
            return <Person
                    click = {() => this.deletePersonHandler(index)}
                    change = {(event) => this.handlePersoneInput(event.target.value, person.key)}
                    key = {person.key}
                    name = {person.name}
                    age = {person.age}/>
          })}
        </ div>
      )
    }

    return (
      <div>
        <h1> My react app </ h1>
        <button
          style = {style}
          className = 'Butt'
          //onClick = {() => this.switchNameHandler('Sebitas')}
          onClick = {this.togglePersons}>
          Switch Names
        </ button>
        {persons}
      </ div>
    );
  }
}

export default App;
