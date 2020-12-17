import React, { useState } from 'react';

const App = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h1>hello world</h1>
      <div>
        <button onClick={() => setVal(val + 1)}>add</button>
        {val}
      </div>
    </div>
  );
}

export default App;
