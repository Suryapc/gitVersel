
const SignIn =()=>{

   let form_disp={
      marginLeft:"25%",
   }


   let button_design={
      marginLeft:"15%",
      marginTop:"4%",
   }
   return(
    <>
   
        
       
      <div className="mt-5" style={form_disp}>
            <form>
             <div className="form-group mt-3">
            <span className="fw-bold"> USER NAME :</span>
            <input type="text"  id="uname_inp" className="ms-4 rounded p-2 w-20" placeholder="Enter Name"/>
            </div> 
            <div className="form-group mt-3">
            <span className="fw-bold"> PASSWORD :</span>
            <input type="password" id="pwd_inp" className="ms-4 rounded p-2 w-20" placeholder="Password"/>
            </div>
           <button type="submit" className="btn btn-primary mt-3" style={button_design}>Submit</button>
          </form>
    </div>
 
    </>)
}

export default SignIn;

 