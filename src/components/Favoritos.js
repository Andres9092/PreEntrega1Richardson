import React from 'react';
import  { useState } from 'react';
{/*import React, { useState } from 'react';


function Ejemplo() { 
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Count: {count}</h1>    
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Ejemplo; */}



{/*function Ejemplo() {

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name)
  }
  
  return (
    <input name="firstName" onChange={handleChange} />
  );
}

export default Ejemplo; */}


{/*function Ejemplo() {
  const [firstName, setFirstName] = useState('');
  
  console.log(firstName)
  
  return (
    <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
    
  )
}

export default Ejemplo; */}



{/*function Ejemplo() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
      />

      <h2>Message: {message}</h2>
    </div>
  );
}

export default Ejemplo; */}



function Favoritos() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })

  function handleChange(evt) {
    setState({ firstName: evt.target.value });
  }
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Favoritos