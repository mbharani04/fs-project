const TwoColumn = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4">
      <div>
        <h2 className="text-xl font-bold">Text Section</h2>
        <p>This is left side content.</p>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt="demo"
        className="w-full"
      />
    </div>
  );
};

export default TwoColumn;