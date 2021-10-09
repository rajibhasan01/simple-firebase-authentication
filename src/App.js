import { useState } from 'react';
import './App.css';
import initialization from './FireBase/firebase.initialization';
import Login from './FireBase/Login';
import Register from './FireBase/Register';

initialization()

function App() {
  const [toggle, setToggle] = useState(false);



  return (
    <div className="App">
      {!toggle ?
        <Login></Login>
        :
        <Register></Register>}

      {
        toggle ?
          <button onClick={() => setToggle(false)} className="text-primary bg-transparent border-0 ">Already have an account ?</button>
          :
          <button onClick={() => setToggle(true)} className="text-primary bg-transparent border-0 ">Are you new register !</button>
      }

    </div>
  );
}

export default App;
