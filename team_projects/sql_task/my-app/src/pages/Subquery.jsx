import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Subquery = () => {
  const { user } = useAuth();

  const subqueryTopics = [
    {
      title: 'Scalar Subquery',
      description: 'Returns a single value (one row, one column). Can be used anywhere a single value is expected.',
      syntax: 'SELECT * FROM Students WHERE Age > (SELECT AVG(Age) FROM Students);',
      example: 'Find all students older than average age. Inner query returns one number.'
    },
    {
      title: 'Row Subquery',
      description: 'Returns a single row with multiple columns. Used to compare multiple values at once.',
      syntax: 'SELECT * FROM Orders WHERE (CustomerID, Amount) = (SELECT CustomerID, MAX(Amount) FROM Orders);',
      example: 'Find the order with highest amount for each customer by comparing pairs.'
    },
    {
      title: 'Table Subquery',
      description: 'Returns multiple rows and columns. Used with IN, EXISTS, or in FROM clause.',
      syntax: 'SELECT * FROM Students WHERE StudentID IN (SELECT StudentID FROM Enrollments);',
      example: 'Find all students who are enrolled in at least one course.'
    },
    {
      title: 'Correlated Subquery',
      description: 'References columns from outer query. Executed once for each row in outer query.',
      syntax: 'SELECT Name FROM Students S WHERE Age > (SELECT AVG(Age) FROM Students WHERE DepartmentID = S.DepartmentID);',
      example: 'Find students older than average age in their own department.'
    },
    {
      title: 'EXISTS Clause',
      description: 'Checks if subquery returns any rows. More efficient than IN for large datasets.',
      syntax: 'SELECT * FROM Customers WHERE EXISTS (SELECT 1 FROM Orders WHERE Orders.CustomerID = Customers.CustomerID);',
      example: 'Find all customers who have placed at least one order.'
    },
    {
      title: 'NOT EXISTS Clause',
      description: 'Opposite of EXISTS. Checks if subquery returns no rows.',
      syntax: 'SELECT * FROM Customers WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE Orders.CustomerID = Customers.CustomerID);',
      example: 'Find customers who have never placed any order.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">🔄 Subquery</h1>
              <p className="text-cyan-100">Learn about Scalar, Row, Table & Correlated Subqueries</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a Subquery?</h2>
          <p className="text-gray-600 mb-4">
            A subquery, also known as an inner query or nested query, is a query within another SQL query. 
            The subquery provides data to the main query. Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses.
          </p>
          <p className="text-gray-600 mb-4">
            Subqueries are enclosed in parentheses and are executed first. The result of the subquery is then used 
            by the outer (main) query to complete its task.
          </p>
          <p className="text-gray-600">
            Subqueries are very powerful tools for writing complex queries and can often replace complex JOINs with more 
            readable and efficient code.
          </p>
        </div>

        {/* Subquery Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {subqueryTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6">
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
                  <h4 className="font-bold text-gray-800 mb-2">Explanation:</h4>
                  <pre className="bg-cyan-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Subquery vs JOIN Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-gray-800 mb-2">✓ When to Use Subquery</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Complex filtering conditions</li>
                <li>• Single value comparisons</li>
                <li>• More readable code</li>
                <li>• ONE-to-ONE relationships</li>
                <li>• Simpler logic</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-800 mb-2">⚡ When to Use JOIN</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Multiple table combinations</li>
                <li>• Large dataset operations</li>
                <li>• Better performance</li>
                <li>• ONE-to-MANY relationships</li>
                <li>• Get data from multiple tables</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subquery in Different Clauses */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Subqueries in Different SQL Clauses</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">IN SELECT Clause</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                <code>SELECT Name, (SELECT COUNT(*) FROM Orders WHERE CustomerID = Customers.ID) as OrderCount FROM Customers;</code>
              </pre>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">IN FROM Clause (Derived Table)</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                <code>{'SELECT * FROM (SELECT Name, Age FROM Students WHERE Age > 20) AS YoungStudents;'}</code>
              </pre>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">IN WHERE Clause</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                <code>{'SELECT * FROM Students WHERE DepartmentID IN (SELECT ID FROM Departments WHERE Budget > 50000);'}</code>
              </pre>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">IN HAVING Clause</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                <code>{'SELECT DepartmentID, COUNT(*) FROM Students GROUP BY DepartmentID HAVING COUNT(*) > (SELECT AVG(StudentCount) FROM ...);'}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Points to Remember</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Subquery is Enclosed:</strong> Always wrapped in parentheses</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Inner Query First:</strong> Subquery executes before outer query</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Scalar Subquery:</strong> Returns single value, can use with any operator (=, {'>'}, {'<'})</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Table Subquery:</strong> Returns multiple rows, use with IN, ALL, ANY, EXISTS</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Correlated Subquery:</strong> Slower but more powerful, references outer query</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>EXISTS vs IN:</strong> EXISTS is faster for large datasets</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/normalization"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Previous: Normalization
          </Link>
          <Link
            to="/triggers"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Next: Triggers →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Subquery;
