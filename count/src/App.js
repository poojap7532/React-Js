import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, newnum] = useState(0);

  return (
    <div>
      <h1>{num + num2}</h1>
      <button onClick={() => setnum(num + 1)}>Click For Addition</button>
      <button onClick={() => newnum(num2 - 1)}>Click For Substraction</button>
    </div>
  );
}
export default App;
