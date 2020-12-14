import { useState } from 'react'
import { Header, Sidebar, Page } from './components'

function App() {

  const [toggle, handleToggle] = useState(false)

  return (
    <div className="App" >
      <Header 
        toggle={ toggle }
        handleToggle={ handleToggle }/>
      <Sidebar 
        toggle={ toggle }/>
      <Page 
        toggle={ toggle }/>
    </div>
  );
}

export default App;
