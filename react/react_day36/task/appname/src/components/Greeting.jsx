const Greeting = ({ isLoggedIn }) => {
  return (
    <h2 className="text-xl">
      {isLoggedIn ? "Welcome User" : "Please Login"}
    </h2>
  );
};

export default Greeting;