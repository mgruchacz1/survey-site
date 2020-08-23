import React from 'react';
import SurveyList from './SurveyList';
import SurveyResponse from './SurveyResponse';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the survey site!</h2>
      <SurveyList />
      <SurveyResponse />
    </div>
  );
}

export default App;
