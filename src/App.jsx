import './index.css';
import { resumeData } from './data';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Links from './components/Links';
import Certifications from './components/Certifications';


function App() {
  return (
  <>
    <button onClick={print}>PRINT</button>
    <div className="resume">
      <div className="Right">
        <Header name={resumeData.name} title={resumeData.title} />
        <hr />
        <Contacts />
        <hr />
        <Links />
        <hr />
        <Skills skills={resumeData.skills} />
      </div>
      <div className="left">
        <Summary summary= {resumeData.summary}/>
        <hr />
        <Experience experience={resumeData.experience} />
        <hr />
        <Education education={resumeData.education} />
        <hr />
        <Certifications />
      </div>
    </div>
</>
  );
}

export default App;

function print(){
  window.print();
}