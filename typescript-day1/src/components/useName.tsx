type User = {
  name: String;
  languages?: Array<string>;
  isActive?: boolean;
  address?: Record<string, string>;
  //   address:Record<string , string | number>;
  // address :{[key: string]: string}
  onClick: (message: string) => void;
};

// interface person {
//     name: String;`
//   };

const UserName = (props: User) => {
  const { name, onClick } = props;
  return (
    <div>
      Hello , I am {name}
      <button onClick={() => onClick("Hello world")}>Click me</button>
    </div>
  );
};

export default UserName;
