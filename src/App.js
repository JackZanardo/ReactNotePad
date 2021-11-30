import './App.css';
import React from 'react';
import { Router, Header} from './components';
import {Storage} from "./services";

function App() {
    const [notes, setNotes] = Storage.useLocalStorage('notes', []);

    function clearNotes() {
        Storage.clearLocalStorage('notes');
        Storage.clearSessionStorage('note');
    }

  return (
    <div>
      <Header value={{notes, setNotes}} clearNotes={clearNotes}/>
      <Router value={{notes, setNotes}}/>
    </div>
  );
}

export default App;
