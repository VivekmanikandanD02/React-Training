import "./Concepts.css";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {props.list.map((concept) => (
        <li className="concept">
          <img src={concept.image} alt={concept.title} />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Concepts;
