import React from 'react';
import { useRef, useState } from 'react';
import axios from 'axios';

const Fileupload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [resultText, setResultText] = useState('');

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
      const res = await axios.post('http://localhost:3001/upload', formData);
      //console.log(res);
      setResultText(res.data.message);
      fileInput.current.value = '';
      setTimeout(() => {
        setResultText('');
      }, 5000);
    } catch (error) {
      if (error.response !== undefined) {
        setResultText(error.response.data.message);
      } else {
        setResultText('Server Error!');
      }
      setTimeout(() => {
        setResultText('');
      }, 5000);
    }
  };

  return (
    <div className='mt-5'>
      <input type='file' ref={fileInput} onChange={saveFile} />
      <button className='btn btn-success' onClick={uploadFile}>
        Upload
      </button>
      {resultText ? <p>{resultText}</p> : null}
    </div>
  );
};

export default Fileupload;
