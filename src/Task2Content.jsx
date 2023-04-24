import React,{Component}from 'react';

 class Task2Content extends React.Component
          {
           
        render(){
            const ser={
                color:"red",
                   }
          return(<>
               
                <h2 className='props_styling fs-5'>My Name is {this.props.name}, Im from {this.props.city}, age is_ 
                 { Math.floor(Math.random()*30)} </h2> 
                 <p >{this.props.a}</p> 
                <h3 style={ser}>hello</h3>
                </>
                )
                }
            }
export default Task2Content;