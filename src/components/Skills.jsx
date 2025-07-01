const Skills = ({ skills }) => (
  <div className="skills">
    <h3>Skills</h3>
    <ul>
      {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
    </ul>
  </div>
);
export default Skills;
