import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DDL = () => {
  const { user } = useAuth();

  const ddlTopics = [
    {
      title: 'CREATE',
      description: 'Used to create database objects such as tables, views, indexes, etc.',
      syntax: 'CREATE TABLE table_name (column1 datatype, column2 datatype, ...);',
      example: 'CREATE TABLE Students (StudentID INT, Name VARCHAR(100), Age INT);'
    },
    {
      title: 'ALTER',
      description: 'Used to modify existing database objects like tables.',
      syntax: 'ALTER TABLE table_name ADD column_name datatype;',
      example: 'ALTER TABLE Students ADD Email VARCHAR(100);'
    },
    {
      title: 'DROP',
      description: 'Used to delete entire database objects like tables, databases, etc.',
      syntax: 'DROP TABLE table_name;',
      example: 'DROP TABLE Students;'
    },
    {
      title: 'TRUNCATE',
      description: 'Used to delete all records from a table without deleting the table structure.',
      syntax: 'TRUNCATE TABLE table_name;',
      example: 'TRUNCATE TABLE Students;'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">📋 DDL - Data Definition Language</h1>
              <p className="text-blue-100">Learn about CREATE, ALTER, DROP, TRUNCATE</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is DDL?</h2>
          <p className="text-gray-600 mb-4">
            DDL (Data Definition Language) is a subset of SQL used to create and modify the structure of database objects. 
            It includes commands like CREATE, ALTER, DROP, and TRUNCATE. These commands are used to define the database schema.
          </p>
          <p className="text-gray-600">
            DDL commands are auto-committed, meaning once you execute them, the changes are saved permanently in the database.
          </p>
        </div>

        {/* DDL Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {ddlTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
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
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>CREATE:</strong> Defines new database objects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>ALTER:</strong> Modifies existing database objects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>DROP:</strong> Removes database objects completely</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>TRUNCATE:</strong> Removes data but keeps structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Auto-commit:</strong> DDL changes are automatically committed</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/dashboard"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Back to Dashboard
          </Link>
          <Link
            to="/dml"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Next: DML →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DDL;
