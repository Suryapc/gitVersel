
import { Link,NavLink } from "react-router-dom";
const Home =()=>{
   return(
          <>
           <div className="navbar background header_design p-5 border border-secondary">
               
                 <div className="title_design"> ABC TRANSPORTS</div>    
                  <div className="link_design">
                      <Link to="/about">ABOUT</Link>
                      </div> 
                      <div className="link_design">
                        <Link to="/signin">SIGN IN</Link> 
                      </div> 
                 </div>
                 <div>
                 
                 </div>
           
          </>
                )
}

export default Home;