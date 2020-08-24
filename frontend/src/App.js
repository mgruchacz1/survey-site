import React from 'react';
import SurveyList from './SurveyList';
import SurveyResponse from './SurveyResponse';
import './App.css';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [currentSurvey, setCurrentSurvey] = React.useState(null);

  function chooseSurvey(survey) {
    setCurrentSurvey(survey);
    setModalShow(true);
  }

  return (
    <div className="App">
      <h2>Welcome to the survey site!</h2>
      <SurveyList chooseSurvey={chooseSurvey}/>
      <SurveyResponse survey={currentSurvey} show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default App;
