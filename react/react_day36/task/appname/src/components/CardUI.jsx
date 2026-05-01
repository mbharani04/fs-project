import maxresdefault from "../assets/maxresdefault.jpg";

const CardUI = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={maxresdefault}
        alt="card"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl">Card Title</h2>
        <p className="text-gray-600">
          This is a simple description using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default CardUI;