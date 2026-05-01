const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <h1 className="font-bold">Logo</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;