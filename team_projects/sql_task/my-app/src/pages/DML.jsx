import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DML = () => {
  const { user } = useAuth();

  const dmlTopics = [
    {
      title: 'INSERT',
      description: 'Used to insert new records into a table.',
      syntax: 'INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);',
      example: 'INSERT INTO Students (StudentID, Name, Age) VALUES (1, \'John\', 20);'
    },
    {
      title: 'UPDATE',
      description: 'Used to modify existing records in a table.',
      syntax: 'UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;',
      example: 'UPDATE Students SET Age = 21 WHERE StudentID = 1;'
    },
    {
      title: 'DELETE',
      description: 'Used to delete existing records from a table.',
      syntax: 'DELETE FROM table_name WHERE condition;',
      example: 'DELETE FROM Students WHERE StudentID = 1;'
    },
    {
      title: 'MERGE',
      description: 'Used to combine INSERT, UPDATE, and DELETE operations into a single statement.',
      syntax: 'MERGE INTO target_table USING source_table ON condition...',
      example: 'MERGE INTO Students USING NewStudents ON Students.ID = NewStudents.ID...'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">✏️ DML - Data Manipulation Language</h1>
              <p className="text-green-100">Learn about INSERT, UPDATE, DELETE, MERGE</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-green-600 hover:bg-green-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is DML?</h2>
          <p className="text-gray-600 mb-4">
            DML (Data Manipulation Language) is a subset of SQL used to insert, update, delete, and retrieve data from database tables. 
            It includes commands like INSERT, UPDATE, DELETE, and MERGE. These commands are used to manipulate the actual data stored in the database.
          </p>
          <p className="text-gray-600">
            Unlike DDL commands, DML commands are not auto-committed. You need to explicitly commit them using the COMMIT command.
          </p>
        </div>

        {/* DML Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {dmlTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6">
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
                  <pre className="bg-green-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{topic.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Points to Remember</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>INSERT:</strong> Adds new data to the table</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>UPDATE:</strong> Modifies existing data</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>DELETE:</strong> Removes data from table</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>MERGE:</strong> Combines multiple operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Rollback:</strong> DML changes can be rolled back before commit</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>WHERE clause:</strong> Used to specify conditions for modifications</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/ddl"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Previous: DDL
          </Link>
          <Link
            to="/dql"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Next: DQL →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DML;
