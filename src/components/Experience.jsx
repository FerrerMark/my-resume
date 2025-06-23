const Experience = ({ experience }) => (
  <section>
    <h3>Experience</h3>
    {experience.map((job, idx) => (
      <div key={idx}>
        <h4>{job.role} @ {job.company}</h4>
        <small>{job.period}</small>
        <ul>
          {job.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    ))}
  </section>
);
export default Experience;
