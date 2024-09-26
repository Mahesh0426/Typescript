// Define the object type for props
type UserProps = {
  user: {
    name: string;
    age?: number; // Optional prop
    languages: Array<string>; //  or  string[]
    hobbies: string[];
    readonly _id: number; // Readonly property
    isAdmin: boolean;
    address: {
      city: string;
      state: string;
      zip: number;
    };
  };
};

// Create the React component
const UserProfile = (props: UserProps) => {
  const { user } = props;
  return (
    <div>
      <h2>{user.name.toUpperCase()}</h2>
      <p>ID: {user._id}</p>
      <p>Age: {user.age}</p>
      <p>Address:</p>
      <p>
        {user.address.city}, {user.address.state} {user.address.zip}
      </p>
      <p>{user.isAdmin ? "Admin" : "User"}</p>
      <h3>Languages</h3>
      {user.languages.join(" , ")}

      <h3>Hobbies</h3>
      <ul>
        {user.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
