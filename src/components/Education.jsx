const Education = ({ education }) => (
  <div className="educations">
    <h3>Education</h3>
    {education.map((edu, idx) => (
      <div key={idx}>
        <div className="date">{edu.year}</div>
        <strong>{edu.degree}</strong>, {edu.school} 
      </div>
    ))}
  </div>
);
export default Education;
