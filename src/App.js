import './App.css';
import React from 'react'
import GrandParent from './components/GrandParent';

export const UserContext = React.createContext()
export const ChannelConext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Hem"}>
        <ChannelConext.Provider value={"No channel"}>
          <GrandParent />
        </ChannelConext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
