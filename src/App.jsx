import React from 'react'
import Card from './components/basic/Card'


import './global.css'
import './App.css'


function App() {
  return (
    <div className="App">

      <h1>Hello, it's show time!</h1>
      <div className="Cards">

      <Card title='Test One' color='#FC9D9A'>
        {/* Vai a Mutamba! */}
      </Card>


      </div>
    
    </div>
    
  );
}

export default App;
