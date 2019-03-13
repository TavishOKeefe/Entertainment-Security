import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginImagePreview);

function FileSave(){

  const headerInfo = {
    backgroundColor: '#ecf0f1',
    padding: '45px',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'monospace, fantasy',
    fontSize: '20px',
    margin: '80px',
    borderRadius: '50px'
  };

  const display = {
    width: 'calc(50% - .5em)'
  }

  return(
    <div style={headerInfo}>
      <FilePond style={display} allowMultiple={true}/>
    </div>
  );
}

export default FileSave;
