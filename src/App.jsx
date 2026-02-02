import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubjectList from './SubjectList'

function App() {
  const Subjects=["ReactJS", "NodeJS", "Java", "Database"];

  return (
    <div className="app-container">
      <h1>Ứng Dụng ReactJS</h1>
      <SubjectList subjects={subjects} />
    </div>
  );
}

export default App;
