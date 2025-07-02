import { resumeData } from "../data";

function Certifications() {
  return (
    <div className="certifications">
      <h3>Certifications</h3>
      <ul>
        {resumeData.certifications.map((item, idx) => (
          <li key={idx}>
            {item.cert} - {" "}
            <span
              dangerouslySetInnerHTML={{ __html: item.link }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
