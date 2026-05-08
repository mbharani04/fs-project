import React, { useState, useEffect } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';
import { complaintUtils } from '../utils/complaintUtils';
import { auth } from '../utils/auth';
import { validations } from '../utils/validations';
import ComplaintCard from '../components/ComplaintCard';
import Sidebar from '../components/Sidebar';

const Reports = () => {
  const user = auth.getCurrentUser();
  const [complaints, setComplaints] = useState([]);
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'new'
  const [statusMessage, setStatusMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    alternatePhone: '',
    area: '',
    district: '',
    state: '',
    reportWho: '',
    toWhom: '',
    problemType: '',
    description: '',
    files: null
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      loadComplaints();
    }
  }, [user, activeTab]);

  const loadComplaints = () => {
    const data = complaintUtils.getUserComplaints(user.id);
    setComplaints(data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'files') {
      setFormData(prev => ({ ...prev, files: files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validations.isRequired(formData.name)) newErrors.name = 'Required';
    if (!validations.isPhone(formData.phone)) newErrors.phone = 'Invalid phone';
    if (!validations.isRequired(formData.area)) newErrors.area = 'Required';
    if (!validations.isRequired(formData.district)) newErrors.district = 'Required';
    if (!validations.isRequired(formData.state)) newErrors.state = 'Required';
    if (!validations.isRequired(formData.problemType)) newErrors.problemType = 'Required';
    if (!validations.isRequired(formData.description)) newErrors.description = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatusMessage({ type: 'error', text: 'Please fill all required fields correctly.' });
      return;
    }

    const complaintData = { ...formData, userId: user.id };
    const result = complaintUtils.createComplaint(complaintData);
    
    if (result.success) {
      setStatusMessage({ type: 'success', text: `Complaint registered successfully! ID: ${result.complaint.id}` });
      setFormData(prev => ({
        ...prev,
        alternatePhone: '',
        area: '',
        district: '',
        state: '',
        reportWho: '',
        toWhom: '',
        problemType: '',
        description: '',
        files: null
      }));
      // Reset file input
      document.getElementById('file-upload').value = '';
      
      setTimeout(() => {
        setStatusMessage(null);
        setActiveTab('list');
      }, 3000);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Complaint Management</h1>
              <p className="text-gray-600 mt-1">Register new complaints or track existing ones.</p>
            </div>
            <div className="bg-white p-1 rounded-lg border border-gray-200 inline-flex">
              <button 
                onClick={() => setActiveTab('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'list' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                My Complaints
              </button>
              <button 
                onClick={() => setActiveTab('new')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'new' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Register New
              </button>
            </div>
          </div>

          {statusMessage && (
            <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 border-l-4 ${statusMessage.type === 'success' ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
              {statusMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <p className="font-medium">{statusMessage.text}</p>
            </div>
          )}

          {activeTab === 'list' ? (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[500px]">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Complaint History</h2>
              
              {complaints.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {complaints.map(complaint => (
                    <ComplaintCard key={complaint.id} complaint={complaint} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
                  <p className="text-gray-500 mb-6">You have not registered any complaints yet.</p>
                  <button onClick={() => setActiveTab('new')} className="btn-primary">
                    Register Now
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Register New Complaint</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 border-b pb-2">Personal Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className={`input-field mt-1 ${errors.name ? 'border-red-500 ring-red-500' : ''}`} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone *</label>
                        <input type="text" name="phone" maxLength="10" value={formData.phone} onChange={handleChange} className={`input-field mt-1 ${errors.phone ? 'border-red-500 ring-red-500' : ''}`} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Alternate Phone</label>
                        <input type="text" name="alternatePhone" maxLength="10" value={formData.alternatePhone} onChange={handleChange} className="input-field mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 border-b pb-2">Location Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Area/Locality *</label>
                      <input type="text" name="area" value={formData.area} onChange={handleChange} className={`input-field mt-1 ${errors.area ? 'border-red-500 ring-red-500' : ''}`} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">District *</label>
                        <input type="text" name="district" value={formData.district} onChange={handleChange} className={`input-field mt-1 ${errors.district ? 'border-red-500 ring-red-500' : ''}`} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">State *</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} className={`input-field mt-1 ${errors.state ? 'border-red-500 ring-red-500' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complaint Details */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-gray-800 border-b pb-2">Complaint Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Report Against (Optional)</label>
                      <input type="text" name="reportWho" placeholder="Person/Entity name" value={formData.reportWho} onChange={handleChange} className="input-field mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">To Department (Optional)</label>
                      <input type="text" name="toWhom" placeholder="e.g. PWD, Electricity Board" value={formData.toWhom} onChange={handleChange} className="input-field mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Problem Type *</label>
                      <select name="problemType" value={formData.problemType} onChange={handleChange} className={`input-field mt-1 ${errors.problemType ? 'border-red-500 ring-red-500' : ''}`}>
                        <option value="">Select an option</option>
                        <option value="Water Problem">Water Problem</option>
                        <option value="Electricity Problem">Electricity Problem</option>
                        <option value="Farmer Issue">Farmer Issue</option>
                        <option value="Road Damage">Road Damage</option>
                        <option value="Corruption Complaint">Corruption Complaint</option>
                        <option value="Public Safety Issue">Public Safety Issue</option>
                        <option value="Education Related Issue">Education Related Issue</option>
                        <option value="Government Officer Negligence">Government Officer Negligence</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Detailed Description *</label>
                    <textarea 
                      name="description" 
                      rows="4" 
                      value={formData.description} 
                      onChange={handleChange} 
                      placeholder="Please describe the issue in detail..."
                      className={`input-field mt-1 resize-y ${errors.description ? 'border-red-500 ring-red-500' : ''}`}
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Evidence (Images/Videos)</label>
                    <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-8 hover:bg-gray-50 transition-colors">
                      <div className="text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500">
                            <span>Upload files</span>
                            <input id="file-upload" name="files" type="file" multiple className="sr-only" onChange={handleChange} accept="image/*,video/*" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">PNG, JPG, MP4 up to 50MB</p>
                        {formData.files && formData.files.length > 0 && (
                          <div className="mt-2 text-sm text-green-600 font-medium">
                            {formData.files.length} file(s) selected
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button type="submit" className="btn-primary px-8 py-3 text-base shadow-lg">
                    Submit Complaint
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
