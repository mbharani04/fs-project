import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const sqlTopics = [
    {
      title: 'DDL',
      description: 'Data Definition Language - CREATE, ALTER, DROP, TRUNCATE statements for defining database structure',
      icon: '📋',
      link: '/ddl'
    },
    {
      title: 'DML',
      description: 'Data Manipulation Language - INSERT, UPDATE, DELETE statements for managing data',
      icon: '✏️',
      link: '/dml'
    },
    {
      title: 'DQL',
      description: 'Data Query Language - SELECT statements for retrieving and querying data',
      icon: '🔍',
      link: '/dql'
    },
    {
      title: 'Normalization',
      description: 'Database Normalization - 1NF, 2NF, 3NF, BCNF for optimal database design and data integrity',
      icon: '📊',
      link: '/normalization'
    },
    {
      title: 'Subquery',
      description: 'Subqueries - Nested queries, scalar subqueries, correlated subqueries for complex data retrieval',
      icon: '🔄',
      link: '/subquery'
    },
    {
      title: 'Triggers',
      description: 'Database Triggers - BEFORE/AFTER INSERT, UPDATE, DELETE for automated database operations',
      icon: '🔔',
      link: '/triggers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name}!</h1>
              <p className="text-blue-100">Email: {user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">SQL Topics</h2>
          <p className="text-xl text-gray-600">Choose a topic to explore and learn SQL fundamentals</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sqlTopics.map((topic, index) => (
            <Card
              key={index}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              link={topic.link}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About SQL</h3>
          <p className="text-gray-600 mb-4">
            SQL (Structured Query Language) is a standard language for managing and manipulating databases.
            It is used to retrieve, insert, update, and delete data from databases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">📚 DDL</h4>
              <p className="text-gray-600 text-sm">Define and manage database structures and schemas</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">📝 DML</h4>
              <p className="text-gray-600 text-sm">Manipulate and modify data within the database</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">🔎 DQL</h4>
              <p className="text-gray-600 text-sm">Query and retrieve data from the database</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">📊 Normalization</h4>
              <p className="text-gray-600 text-sm">Organize data efficiently and maintain integrity</p>
            </div>
            <div className="p-4 bg-cyan-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">🔄 Subquery</h4>
              <p className="text-gray-600 text-sm">Write nested queries for complex data retrieval</p>
            </div>
            <div className="p-4 bg-violet-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">🔔 Triggers</h4>
              <p className="text-gray-600 text-sm">Automate database operations on data changes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
