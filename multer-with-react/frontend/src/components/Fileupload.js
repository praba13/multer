import React from 'react';
import { useRef, useState } from 'react';
import axios from 'axios';

const Fileupload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  const fileInput = useRef();

  const saveFile = () => {
    setFile(fileInput.current.files[0]);
    setFileName(fileInput.current.files[0].name);
  };

  //console.log(file);
  //console.log(fileName);
  //console.log(fileInput);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);

    try {
      await axios.post('http://localhost:3001/upload', formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-5'>
      <input type='file' ref={fileInput} onChange={saveFile} />
      <button className='btn btn-success' onClick={uploadFile}>
        Upload
      </button>
    </div>
  );
};

export default Fileupload;
