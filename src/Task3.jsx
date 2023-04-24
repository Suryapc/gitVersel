import React,{Component}from 'react';
import Person from './Person';

 class Task3 extends React.Component
          {
         state={
          persons :[
                {name:"Bradleey",age:25},
                {name:"Matt",age:35},
                {name:"Ryan",age:38},
                 ],
               };


               switchNameHandler=()=>{
                  console.log("clicked")
               }
               render(){

                let imgStyle={
                      width:"130px",
                      padding:"10px 15px"
                };
                return(
                      <div className='container'>
                      <div className='row'>{/*  row starts */}
                      <div className='col-sm-3'> {/*  first col starts*/}
                      <h4>Business</h4>   
                      <img src={family} style={imgStyle}/> 
                       <ul>
                       <li>Air Itan</li>
                       <li>FL group</li>
                       <li>Foot Locker</li>
                       </ul>
                       </div>{/*  first col ends*/}
                       <div className='col-sm-3'> {/*  sec col starts*/}
                        <h4>Content Area</h4>
                        <hr></hr>
                        <button type="button" onClick={this.switchNameHandler}>Switch</button>
                         <br/>
                        <Person name={this.state.persons[0].name} 
                        age= {this.state.persons[0].age}/>

                        <Person name={this.state.persons[1].name}
                        age= {this.state.persons[1].age}
                        click={this.switchNameHandler}>My Hobbies:Racing </Person>

                        <Person name={this.state.persons[2].name} 
                         age={this.state.persons[2].age}/>
                       </div> {/*  Sec col ends*/}

                       </div> {/*  row ends */}
                       </div>
                )
               }
               
            }
    export default Task3;