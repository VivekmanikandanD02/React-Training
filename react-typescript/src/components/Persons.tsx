import Person from "./Person";
import PersonsProps from "../types/Persons";
import PersonProps from "../types/Person";
// type PersonProps = {
//   personList: {
//     firstName: string | number;
//     lastName?: string;
//   }[];
// };

const Persons = (props: PersonsProps) => {
  return (
    <>
      {props.personList.map((person: PersonProps) => (
        <>
          <Person
            key={person.firstName}
            firstName={person.firstName}
            lastName={person.lastName}
          />
          <br />
        </>
      ))}
    </>
  );
};

export default Persons;
