import React from 'react';
import Name from './components/Name.jsx';
import Price from './components/price.js';
import Description from './components/descriptio.jsx';
import Image from './components/image.jsx';
import Card from 'react-bootstrap/Card';
function App() {

let firstName;
let message;
if (firstName) {
  message =`hello ${firstName}`;
} else {
  message  ="hello there";
}

  return (
    
    <div>
      <Card style={{ width: '18rem' }}>
        <Image />
      <Card.Body>
        <Card.Title>  <Name/>     </Card.Title>
        <Card.Title>  <Description/>     </Card.Title>
        <Card.Title>  <Price/>     </Card.Title>
        {/* <Card.Title>  <img src= "https://otrity.com/wp-content/uploads/2020/10/DeliceLait-1.jpg" alt="" />   </Card.Title> */}
        
      </Card.Body>
    </Card>
    
      
    
    
    <p>{message}</p>
  </div>

  

  );
}


export default App;
