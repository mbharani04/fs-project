const Student = ({ name, age, course }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default Student;