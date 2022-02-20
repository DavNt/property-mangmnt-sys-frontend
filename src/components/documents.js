import React, { useState } from "react";
import FileUploading from "./fileupload";

export default function Documents(){
  const [newfiles, setNewfiles] = useState(null);

  function handleFile(file) {
  
    // Getting the files from the input
    let newfiles = file;
    setNewfiles(newfiles);
  }
    
  function handleUpload(e) {
    let newfile = newfiles;
    
    let formData = new FormData();
    
    // Adding files to the formdata
    formData.append("image", newfile);
    formData.append("name", "Name");
    
    // open link to axios instance(
    //   // Attaching the form data
    //   data: formData,
    // )
  
    //   // Handle the response from backend here
    //   .then((res) => { })
  
    //   // Catch errors if any
    //   .catch((err) => { });
  }

  return(
    <>
    <div>
      {/* <h1>Select your files</h1>
      <input
        type="file"
        // To select multiple files
        multiple="multiple"
        onChange={(e) => handleFile(e)}
      /> */}
      <FileUploading handleFile={handleFile}/>
      <button className="btn btn-success" onClick={(e) => handleUpload(e)}>
        Upload Files
      </button>
    </div>
    </>
  )
}