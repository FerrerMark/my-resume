import { resumeData } from "../data";

function Certifications() {
  return (
    <div className="certifications">
      <h3>Certifications</h3>
      <ul>
        {resumeData.certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
