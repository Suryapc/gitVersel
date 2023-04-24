import React,{Component} from "react";

function MultiFileUpload(){
         fileObj=[];
         fileArray=[];

         constructor(props){
             super(props)
             this.state={
             file=[null]
                       }
                }
        render(){
              return(
                    <>
                    <form>
                         <div className="form-group multi-preview">
                                {/*Upload file preview */}
                                </div>

                                <div className="form-group ">
                                <input type="file" className="form-control" 
                                onChange={this.uploadMultipleFiles} multiple/>

                                <button type="button" className="">Upload</button>
                          </div>
                    </form>
                     </>
                )
}
}
export default MultiFileUpload;