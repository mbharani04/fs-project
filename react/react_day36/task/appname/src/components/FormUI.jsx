const FormUI = () => {
  return (
    <form className="max-w-md mx-auto p-4 border rounded space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default FormUI;