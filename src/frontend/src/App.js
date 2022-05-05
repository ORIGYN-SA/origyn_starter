import React from 'react';
import ThemeConfig from './theme';
import Router from './routes';
import Button from '@mui/material/Button';

function App() {
  // const [name, setName] = React.useState('');
  // const [message, setMessage] = React.useState('');

  // async function doGreet() {
  //   const greeting = await origyn_starter.greet(name);
  //   setMessage(greeting);
  // }

  // return (
  //   <div style={{ fontSize: '30px' }}>
  //     <div>
  //       <p style={{ color: 'green' }}>Greetings, from DFINITY!</p>
  //       <p>
  //         {' '}
  //         Type your message in the Name input field, then click{' '}
  //         <b> Get Greeting</b> to display the result.
  //       </p>
  //     </div>
  //     <div style={{ margin: '30px' }}>
  //       <input
  //         id="name"
  //         value={name}
  //         onChange={(ev) => setName(ev.target.value)}
  //       ></input>
  //       <Button variant="contained" onClick={doGreet}>
  //         Get Greeting!
  //       </Button>
  //     </div>
  //     <div>
  //       Greeting is: "<span style={{ color: 'blue' }}>{message}</span>"
  //     </div>
  //   </div>
  // );
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
