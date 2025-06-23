const Education = ({ education }) => (
  <div className="educations">
    <h3>Education</h3>
    {education.map((edu, idx) => (
      <div key={idx}>
        <strong>{edu.degree}</strong>, {edu.school} ({edu.year})
      </div>
    ))}
  </div>
);
export default Education;
