
import './Task1.css';

function  Header_section() {         
      return(<>
      <div className="head_design">
      <h1 >REACT JS</h1>
      <a href="google.com" className="login_design">LOGIN</a> 
      </div>
      </>)
         }


function Body_section(){
       return(<>
       <p className="body_design ms-5 mt-5">React is a JavaScript library created by Facebook.React is a User Interface (UI) library
        React is a tool for building UI components.<br></br>Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript.
        <br></br>With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.
        </p>
        </>
        )
          }

function Footer_section(){
       return(<>
       <div className="foot_design" style={{marginLeft:"10px"}}>
       <p className="foot_content"> CONTACT | ABOUT </p>
       </div>
       </>
       )
}


export {Header_section,Body_section,Footer_section}