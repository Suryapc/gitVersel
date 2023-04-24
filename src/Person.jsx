const Person =(props)=>{
                return(
                    <div>
                     <p onClick={props.click}>
                    Im a {props.name}, and Im {props.age} years old
                     </p>
                     <p>{props.children}</p>
                    </div>
                );

                    }

export default Person;