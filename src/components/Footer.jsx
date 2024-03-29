import React from 'react';

function Footer(){

  const footerInfo = {
    fontSize: '10px',
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    textAlign: 'center',
    left: 0,
    bottom: 0,
    width: '100%'
  };

  return(
    <div style={footerInfo}>
      <hr/>
      <p>Copyright: Tavish McKenzie OKeefe</p>
      <p>For information, lost identification credentials, or access to security images, please contact ESInformation@gmail.com</p>
      <p>Entertainment Security</p>
      <p>Portland, OR</p>
      <hr/>
    </div>
  );
}

export default Footer;
