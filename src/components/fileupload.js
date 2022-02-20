import React, {useRef} from 'react';
import '../resources/css/fileupload.css';

export default function FileUploading(props){
  const hiddenFileinput = useRef(null);

  const handleClick = event =>{
    hiddenFileinput.current.click();
  };

  const handleChange = event =>{
    const fileStaged = event.target.files[0];
    props.handleFile(fileStaged);
  }

  return(
    <>
    <div className='fileupload-wrap' onClick={handleClick}>
      Drag and drop or click to select file to upload
    </div>
    <input type="file" 
      multiple 
      hidden 
      ref={hiddenFileinput}
      onChange={handleChange}
    />
    </>
  )
}