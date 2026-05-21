import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DQL = () => {
  const { user } = useAuth();

  const dqlTopics = [
    {
      title: 'SELECT',
      description: 'Used to retrieve data from one or more tables.',
      syntax: 'SELECT column1, column2, ... FROM table_name WHERE condition;',
      example: 'SELECT Name, Age FROM Students WHERE Age > 20;'
    },
    {
      title: 'WHERE',
      description: 'Used to filter records based on specified conditions.',
      syntax: 'SELECT * FROM table_name WHERE condition;',
      example: 'SELECT * FROM Students WHERE Age = 21;'
    },
    {
      title: 'ORDER BY',
      description: 'Used to sort the result set in ascending or descending order.',
      syntax: 'SELECT * FROM table_name ORDER BY column_name ASC|DESC;',
      example: 'SELECT * FROM Students ORDER BY Age DESC;'
    },
    {
      title: 'GROUP BY',
      description: 'Used to group rows that have the same values.',
      syntax: 'SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;',
      example: 'SELECT Age, COUNT(*) FROM Students GROUP BY Age;'
    },
    {
      title: 'JOIN',
      description: 'Used to combine rows from two or more tables based on a related column.',
      syntax: 'SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;',
      example: 'SELECT Students.Name, Courses.CourseName FROM Students INNER JOIN Enrollments ON Students.ID = Enrollments.StudentID;'
    },
    {
      title: 'AGGREGATE Functions',
      description: 'Used to perform calculations on a set of values (COUNT, SUM, AVG, MIN, MAX).',
      syntax: 'SELECT COUNT(*), AVG(column_name), SUM(column_name) FROM table_name;',
      example: 'SELECT COUNT(*), AVG(Age) FROM Students;'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">🔍 DQL - Data Query Language</h1>
              <p className="text-purple-100">Learn about SELECT, WHERE, JOINs, and more</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-gray-600">
          <p>Logged in as: <strong>{user?.email}</strong></p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is DQL?</h2>
          <p className="text-gray-600 mb-4">
            DQL (Data Query Language) is a subset of SQL used to retrieve data from the database. 
            It includes the SELECT command and clauses like WHERE, ORDER BY, GROUP BY, and JOINs. 
            DQL is primarily used for querying and not for modifying data.
          </p>
          <p className="text-gray-600">
            DQL commands are read-only operations that do not make any changes to the database. They only retrieve and display data.
          </p>
        </div>

        {/* DQL Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {dqlTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                <h3 className="text-2xl font-bold">{topic.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Syntax:</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.syntax}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example:</h4>
                  <pre className="bg-purple-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Points to Remember</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>SELECT:</strong> Retrieves specific columns or all columns from table</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>WHERE:</strong> Filters rows based on conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>ORDER BY:</strong> Sorts results in ASC or DESC order</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>GROUP BY:</strong> Groups rows with same values together</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>JOIN:</strong> Combines data from multiple tables</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>HAVING:</strong> Filters groups based on aggregate conditions</span>
            </li>
          </ul>
        </div>

        {/* Example Query */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Complex Example Query</h2>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <pre className="text-sm text-gray-700 overflow-x-auto"><code>{`SELECT 
  Age, 
  COUNT(*) as StudentCount, 
  AVG(GPA) as AverageGPA
FROM Students
WHERE Age > 18
GROUP BY Age
HAVING COUNT(*) > 5
ORDER BY Age DESC;`}</code></pre>
          </div>
          <p className="text-gray-600">
            This query groups students by age (where age &gt; 18), counts them, calculates average GPA, 
            keeps only groups with more than 5 students, and sorts by age in descending order.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/dml"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Previous: DML
          </Link>
          <Link
            to="/normalization"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Next: Normalization →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DQL;
