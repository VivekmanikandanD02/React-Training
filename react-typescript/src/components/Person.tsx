import PersonProps from "../types/Person";
// type PersonProps = {
//   firstName: string | number;
//   lastName?: string;
// };

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// We can redefine the interface if required but not in type
// interface Person {
//   dob: string;
// }

const Person = (props: PersonProps) => {
  return (
    <>
      Welcome {props.firstName}, {props?.lastName || ""}
    </>
  );
};

export default Person;
