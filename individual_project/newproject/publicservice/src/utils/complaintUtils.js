// src/utils/complaintUtils.js
import { storage } from './storage';

export const complaintUtils = {
  createComplaint: (complaintData) => {
    const complaints = storage.get('complaints') || [];
    
    const newComplaint = {
      ...complaintData,
      id: `CMP-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'Pending',
      // Store dummy file names if files were "uploaded"
      files: complaintData.files ? Array.from(complaintData.files).map(f => f.name) : []
    };
    
    // Don't store actual File objects in localStorage, just names for demo
    delete newComplaint.files;
    if (complaintData.files) {
        newComplaint.attachedFiles = Array.from(complaintData.files).map(f => f.name);
    }
    
    complaints.push(newComplaint);
    storage.set('complaints', complaints);
    
    return { success: true, complaint: newComplaint };
  },

  getUserComplaints: (userId) => {
    const complaints = storage.get('complaints') || [];
    return complaints.filter(c => c.userId === userId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  getAllComplaints: () => {
    return storage.get('complaints') || [];
  },

  deleteComplaint: (complaintId, userId) => {
    let complaints = storage.get('complaints') || [];
    complaints = complaints.filter(c => !(c.id === complaintId && c.userId === userId));
    storage.set('complaints', complaints);
    return { success: true };
  },

  getStats: (userId) => {
    const complaints = complaintUtils.getUserComplaints(userId);
    return {
      total: complaints.length,
      pending: complaints.filter(c => c.status === 'Pending').length,
      inProgress: complaints.filter(c => c.status === 'In Progress').length,
      resolved: complaints.filter(c => c.status === 'Resolved').length,
    };
  }
};
