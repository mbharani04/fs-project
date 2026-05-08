// src/data/transparencyData.js
export const transparencyData = {
  budget: {
    total: "₹50,000 Cr",
    spent: "₹32,450 Cr",
    remaining: "₹17,550 Cr"
  },
  projects: [
    {
      id: 1,
      name: "City Metro Expansion Phase II",
      department: "Urban Development",
      budget: "₹12,000 Cr",
      status: "In Progress",
      completionPercentage: 65,
      expectedCompletion: "Dec 2026"
    },
    {
      id: 2,
      name: "Rural Water Supply Pipeline",
      department: "Water Resources",
      budget: "₹4,500 Cr",
      status: "In Progress",
      completionPercentage: 80,
      expectedCompletion: "Aug 2026"
    },
    {
      id: 3,
      name: "District Hospital Upgradation",
      department: "Health",
      budget: "₹850 Cr",
      status: "Completed",
      completionPercentage: 100,
      expectedCompletion: "Mar 2026"
    },
    {
      id: 4,
      name: "Smart City Road Network",
      department: "PWD",
      budget: "₹3,200 Cr",
      status: "In Progress",
      completionPercentage: 45,
      expectedCompletion: "Jun 2027"
    }
  ],
  stats: [
    { label: "Complaints Resolved", value: "845,231", trend: "+12%" },
    { label: "Funds Disbursed", value: "₹4,200 Cr", trend: "+5%" },
    { label: "New Beneficiaries", value: "1.2M", trend: "+18%" },
    { label: "Active Projects", value: "452", trend: "Steady" }
  ]
};
