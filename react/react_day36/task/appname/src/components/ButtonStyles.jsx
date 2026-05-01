const ButtonStyles = () => {
  return (
    <div className="flex gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Primary
      </button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded">
        Secondary
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Danger
      </button>
    </div>
  );
};

export default ButtonStyles;