import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState , setPersonsState ] = useState({
    persons : [
      { name : 'Khalil' , age: 22},
      { name : 'Mohyi eddine' , age : 21},
      { namem : 'Saad' , age :23}
    ]
  })
const [otherState, setOtherState] = useState('Some other value');

console.log(personsState,otherState);
const switchNameHandler = () =>{
  //console.log("Was clicked!");  
  // don't use this !!! personsState.persons[0].name='Khalil el joulali'
  setPersonsState({
    persons : [
      { name : 'Khalil el joulali' , age: 22},
      { name : 'Mohyi eddine' , age : 21},
      { namem : 'Saad alahyane' , age :20}
    ]
    }
  )
}

  
    return (
         <div > 
           <h1 >Hi! Welcome to my first React App </h1>
           <p>This is rea ly good!!!</p>
           <button onClick={switchNameHandler}>Switch Name</button>
           <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
           <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
           <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> I live in Benslimane, Morocco</Person>
         </div>
    ); 
   // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi ! Welcome to my first React App!!!'))
  }

export default app;