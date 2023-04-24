// onchange,onclick (bind,arrowfunction),toggle


import React, { Component } from "react";
import Task3Content from "./Task3Content";
import './Task3.css';
class Task3Main extends Component {

  
                state={
                persons:[
                {name:"max",age:24},
                {name:"Jack",age:26},
                {name:"Scott",age:28}
                    ],
                showPersons:true,
                     }
   // onchange event        
    nameChangeHandler=(event)=>{
                this.setState({
                    persons:[
                {name:"max",age:24},
                 {name:"Scott",age:28},
                 {name:event.target.value,age:26},
                  ]          
                })}

    // onclick1
      switchNameHandler=()=>{
       
          alert("Welcome to React Learning")
        }
                      
    // onclick1 binding value
      switchNameHandler1=(n1,a1)=>{
                this.setState({
                     persons:[
                       {name:n1,age:a1},
                       {name:"Jack",age:26},
                       {name:"Scott1",age:28}],
                    })}
   // toggle  
    togglePersonsHandler=()=>{
     const doesShow=this.state.showPersons;
         this.setState({
             showPersons:!doesShow,
          })}

  // delete 
  deletePersonHandler=()=>{
    const persons = this.state.persons;
    persons.splice();
    this.setState({
     persons:persons,
    })
                }
   
   render() {
        let btnStyle={
                 backgroundColor:"blue"
      }
     return (<>

         <h1 className="title">EVENT HANDLING</h1 > 
         {/* row */}
        <div className="row">
           {/* col1 */}
           <div className="col-md-5 content_design1"> 
           
            
             <div className="text-primary"> ---onClick button--</div> <br/>
          <button type="button" className="button_design1" onClick={this.switchNameHandler}>ALERT</button> 
         <br/><br/> <button type="button" className="button_design2" onClick={this.switchNameHandler1.bind(this,"jeffrey",31)}>onclick-BINDING</button> 
          <br/>
          <div className="text-primary"> ---onClick text bind--</div> 
          <br/>
           
             <Task3Content name={this.state.persons[0].name} age={this.state.persons[0].age}
             click={this.switchNameHandler1.bind(this,"david",12)}
             delete={()=>this.deletePersonHandler}/> 

           <div className="text-primary"> ---onClick text arrow function--</div> 
            <Task3Content name={this.state.persons[1].name} age={this.state.persons[1].age}
            click={()=>this.switchNameHandler1("George",21)}
            change={this.nameChangeHandler}
            delete={()=>this.deletePersonHandler}/>

            <div className="text-primary"> ---onChange event--</div> 
            <Task3Content name={this.state.persons[2].name} age={this.state.persons[2].age}
            change={this.nameChangeHandler}
            delete={()=>this.deletePersonHandler}/>
            </div> 

                {/* col2 starts */}
           <div className="col-md-6">
           <div className="text-primary content_design2"> ---Toggle--</div> 

           {this.state.showPersons===true? (
           <h2>Toggle On</h2>):(<h2>Toggle Off</h2>)}

            <button type="button" className="toggle_design" style={btnStyle} onClick={this.togglePersonsHandler}>TOGGLE</button>
            
            {this.state.showPersons===true? (
            <h2>Toggle On</h2>):(<h2>Toggle Off</h2>)}

            <button type="button" className="toggle_design" style={btnStyle} onClick={this.togglePersonsHandler}>TOGGLE</button>
           
           </div>
           </div> 
          {/* //  row ends */}
      
      </>
    )}}

export default Task3Main;

// arrow func is used more often.