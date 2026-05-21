import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Normalization = () => {
  const { user } = useAuth();

  const normalizationTopics = [
    {
      title: 'First Normal Form (1NF)',
      description: 'Ensures that all column values are atomic (indivisible) and there are no repeating groups.',
      syntax: 'Each cell contains only a single value. No duplicate columns. Unique primary key.',
      example: 'Instead of having a column with comma-separated values (1,2,3), separate them into individual rows.'
    },
    {
      title: 'Second Normal Form (2NF)',
      description: 'Table must be in 1NF and all non-key attributes are fully functionally dependent on the primary key.',
      syntax: 'Remove partial dependencies. Non-key attributes should depend on the entire primary key.',
      example: 'StudentCourses table: StudentID + CourseID as composite key. Grade depends on both keys.'
    },
    {
      title: 'Third Normal Form (3NF)',
      description: 'Table must be in 2NF and non-key attributes depend only on the primary key (no transitive dependency).',
      syntax: 'Remove transitive dependencies. Non-key attributes should not depend on other non-key attributes.',
      example: 'Employee table: EmployeeID → DepartmentID → DepartmentName should be separate tables.'
    },
    {
      title: 'Boyce-Codd Normal Form (BCNF)',
      description: 'Stricter version of 3NF where every determinant is a candidate key. Handles complex dependencies.',
      syntax: 'Every determinant must be a candidate key. All functional dependencies must be based on keys.',
      example: 'Professor teaches Subject in Time. Multiple professors may teach same subject at different times.'
    }
  ];

  const benefits = [
    { title: 'Data Integrity', description: 'Prevents data anomalies and inconsistencies' },
    { title: 'Storage Efficiency', description: 'Reduces data redundancy and saves storage space' },
    { title: 'Query Performance', description: 'Smaller, focused tables can improve query efficiency' },
    { title: 'Maintenance', description: 'Updates and modifications are simpler and safer' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">📊 Normalization</h1>
              <p className="text-orange-100">Learn about 1NF, 2NF, 3NF, BCNF</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Normalization?</h2>
          <p className="text-gray-600 mb-4">
            Database normalization is a systematic approach to organizing data in a relational database 
            to minimize redundancy and improve data integrity. It involves breaking down tables into smaller, 
            more manageable tables and establishing relationships between them.
          </p>
          <p className="text-gray-600 mb-4">
            The goal is to reduce data anomalies that can occur during data insertion, update, and deletion operations.
            Normalization follows a series of normal forms, each building upon the previous one.
          </p>
          <p className="text-gray-600">
            The most commonly used normal forms are 1NF, 2NF, 3NF, and BCNF. While there are higher normal forms (4NF, 5NF),
            most practical database designs achieve 3NF or BCNF.
          </p>
        </div>

        {/* Normal Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {normalizationTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
                <h3 className="text-2xl font-bold">{topic.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Points:</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.syntax}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example:</h4>
                  <pre className="bg-orange-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Normalization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-800 mb-2">✓ {benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Denormalization Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">When NOT to Normalize: Denormalization</h2>
          <p className="text-gray-600 mb-4">
            While normalization is generally beneficial, there are cases where denormalization is appropriate:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">⚡</span>
              <span className="text-gray-600"><strong>Performance Requirements:</strong> When queries are too slow due to many joins</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">⚡</span>
              <span className="text-gray-600"><strong>Read-Heavy Systems:</strong> When data is mostly read, not written</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">⚡</span>
              <span className="text-gray-600"><strong>Data Warehouses:</strong> Where some redundancy is acceptable</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">⚡</span>
              <span className="text-gray-600"><strong>Reporting Systems:</strong> Where performance matters more than storage</span>
            </li>
          </ul>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Points to Remember</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>1NF:</strong> Atomic values, no repeating groups</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>2NF:</strong> Must be 1NF + no partial dependencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>3NF:</strong> Must be 2NF + no transitive dependencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>BCNF:</strong> Stricter than 3NF, all determinants are candidate keys</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Trade-off:</strong> Normalization improves integrity but may reduce performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Most Common:</strong> Most databases use 3NF as a good balance</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/dql"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Previous: DQL
          </Link>
          <Link
            to="/subquery"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Next: Subquery →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Normalization;
