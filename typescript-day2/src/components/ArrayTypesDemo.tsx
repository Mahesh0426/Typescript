/// Define the UserDetail type
type UserDetail = {
  name: string;
  age: number;
  email: string;
};

// Define the props type as an array of UserDetail
type UserDetailProp = {
  users: UserDetail[];
};

const ArrayTypesDemo = (props: UserDetailProp) => {
  // Destructure users from props
  const { users } = props;

  return (
    <div>
      <h1>Array Types</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>
              <strong>Name:</strong> {user.name} <br />
              <strong>Age:</strong> {user.age} <br />
              <strong>Email:</strong> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArrayTypesDemo;
