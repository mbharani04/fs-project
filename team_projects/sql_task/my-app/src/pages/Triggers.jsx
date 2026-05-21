import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Triggers = () => {
  const { user } = useAuth();

  const triggerTypes = [
    {
      title: 'BEFORE INSERT Trigger',
      description: 'Executes before a new row is inserted into the table. Used to validate or modify data before insertion.',
      syntax: 'CREATE TRIGGER before_insert_student BEFORE INSERT ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Validate email format or set default values before inserting a new student record.'
    },
    {
      title: 'AFTER INSERT Trigger',
      description: 'Executes after a new row is inserted. Used for audit logs or updating related tables.',
      syntax: 'CREATE TRIGGER after_insert_student AFTER INSERT ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Log the insertion to an audit table or send notification when new student is added.'
    },
    {
      title: 'BEFORE UPDATE Trigger',
      description: 'Executes before row values are updated. Used to validate changes or prevent invalid updates.',
      syntax: 'CREATE TRIGGER before_update_student BEFORE UPDATE ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Ensure age is not set to negative or check if status change is valid.'
    },
    {
      title: 'AFTER UPDATE Trigger',
      description: 'Executes after row values are updated. Used for cascading updates or maintaining audit trails.',
      syntax: 'CREATE TRIGGER after_update_student AFTER UPDATE ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Update parent table with summary data or create audit record of the change.'
    },
    {
      title: 'BEFORE DELETE Trigger',
      description: 'Executes before a row is deleted. Used to prevent deletion of critical data.',
      syntax: 'CREATE TRIGGER before_delete_student BEFORE DELETE ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Prevent deletion of students with active enrollments or check permissions.'
    },
    {
      title: 'AFTER DELETE Trigger',
      description: 'Executes after a row is deleted. Used for cleanup or archiving deleted data.',
      syntax: 'CREATE TRIGGER after_delete_student AFTER DELETE ON Students FOR EACH ROW BEGIN ... END;',
      example: 'Archive deleted records to history table or update related counts.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">🔔 Triggers</h1>
              <p className="text-violet-100">Learn about BEFORE/AFTER INSERT, UPDATE, DELETE Triggers</p>
            </div>
            <Link
              to="/dashboard"
              className="bg-white text-violet-600 hover:bg-violet-50 font-bold py-2 px-6 rounded-lg transition-all duration-300"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a Trigger?</h2>
          <p className="text-gray-600 mb-4">
            A trigger is a special type of stored procedure that automatically executes (or "fires") in response to 
            specific events on a specific table in a database. Triggers are powerful tools for maintaining data integrity, 
            enforcing business rules, and automating database operations.
          </p>
          <p className="text-gray-600 mb-4">
            Triggers can be set to fire BEFORE or AFTER an INSERT, UPDATE, or DELETE operation. Each combination represents 
            a different point in time when the trigger code executes relative to the data modification.
          </p>
          <p className="text-gray-600">
            Triggers are executed implicitly when the triggering event occurs. They cannot be called directly, but are 
            invoked automatically by the database system.
          </p>
        </div>

        {/* Trigger Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {triggerTypes.map((trigger, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white p-6">
                <h3 className="text-2xl font-bold">{trigger.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{trigger.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Syntax:</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{trigger.syntax}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Use Case:</h4>
                  <pre className="bg-violet-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
                    <code>{trigger.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Trigger Operations */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Trigger Operations</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">✓ Data Validation</h4>
              <p className="text-gray-600">Validate data before insertion or update. Prevent invalid data from entering the database.</p>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mt-2">
                <code>IF NEW.Age {'<'} 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Age cannot be negative'; END IF;</code>
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">✓ Audit Logging</h4>
              <p className="text-gray-600">Create audit trails by logging all changes made to tables.</p>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mt-2">
                <code>INSERT INTO AuditLog (TableName, Action, OldValue, NewValue) VALUES ('Students', 'UPDATE', OLD.Name, NEW.Name);</code>
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">✓ Automatic Calculations</h4>
              <p className="text-gray-600">Automatically update related fields or calculate values.</p>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mt-2">
                <code>SET NEW.TotalPrice = NEW.Quantity * NEW.UnitPrice;</code>
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">✓ Enforcing Business Rules</h4>
              <p className="text-gray-600">Ensure application business logic is enforced at database level.</p>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mt-2">
                <code>IF NEW.Salary > OLD.Salary AND (NEW.Salary - OLD.Salary) > 1000 THEN require_approval(); END IF;</code>
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">✓ Maintaining Summary Data</h4>
              <p className="text-gray-600">Update summary tables or counts automatically.</p>
              <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mt-2">
                <code>UPDATE DepartmentSummary SET EmployeeCount = EmployeeCount + 1 WHERE DepartmentID = NEW.DepartmentID;</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Trigger Timing Diagram */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trigger Execution Order (INSERT Example)</h2>
          <div className="bg-gradient-to-r from-violet-100 to-indigo-100 p-6 rounded-lg">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="ml-4"><strong>BEFORE INSERT Trigger</strong> - Executes first, can modify NEW values</div>
              </div>
              <div className="flex items-center">
                <div className="bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="ml-4"><strong>INSERT Operation</strong> - Row is actually inserted into table</div>
              </div>
              <div className="flex items-center">
                <div className="bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="ml-4"><strong>AFTER INSERT Trigger</strong> - Executes last, cannot modify NEW values</div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trigger Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Keep Triggers Simple:</strong> Complex logic should be in stored procedures</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Avoid Circular Triggers:</strong> Prevent triggers that call other triggers indefinitely</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Document Thoroughly:</strong> Triggers can have unexpected side effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Test Carefully:</strong> Triggers affect all data modifications, test extensively</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Use for Data Integrity:</strong> Best used for maintaining referential integrity</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">⚠️</span>
              <span className="text-gray-600"><strong>Monitor Performance:</strong> Triggers can slow down DML operations</span>
            </li>
          </ul>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Points to Remember</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Automatic Execution:</strong> Triggers fire automatically on specified events</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>6 Types:</strong> BEFORE/AFTER × INSERT/UPDATE/DELETE = 6 combinations</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>NEW vs OLD:</strong> NEW contains new values, OLD contains previous values</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>BEFORE Triggers:</strong> Can modify data; used for validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>AFTER Triggers:</strong> Cannot modify data; used for logging/cascading</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-3">✓</span>
              <span className="text-gray-600"><strong>Use Cases:</strong> Validation, audit logging, calculations, business rules</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            to="/subquery"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            ← Previous: Subquery
          </Link>
          <Link
            to="/dashboard"
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Triggers;
