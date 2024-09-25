// primitives Types
type UserInfo = {
  name: string; // String
  age: number; // Number
  isActive: boolean; // Boolean
  address: string | null; // Null (or string if address is provided)
  phoneNumber?: number; // Optional string
  lastLogin?: Date; // Optional Date
};

const PrimitiveTypes = (props: UserInfo) => {
  const { name, age, isActive, address, phoneNumber, lastLogin } = props;
  return (
    <div>
      <h1>primitives Types</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Active:</strong> {isActive ? "Yes" : "No"}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {address !== null ? address : "No address provided"}
      </p>
      <p>
        <strong>Phone Number:</strong>{" "}
        {phoneNumber ? phoneNumber : "No phone number provided"}
      </p>
      <p>
        <strong>Last Login:</strong>{" "}
        {lastLogin ? lastLogin.toDateString() : "No login information"}
      </p>
    </div>
  );
};

export default PrimitiveTypes;
