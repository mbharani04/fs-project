// src/data/cardsData.js
import { Newspaper, Landmark, Scale, Briefcase, BookOpen, FileBarChart, PieChart, Trophy, IdCard, Users, GraduationCap, ShieldAlert, HeartPulse, Building } from 'lucide-react';

export const mainCardsData = [
  { id: 'news', title: 'Latest News', description: 'Stay updated with daily government announcements and local news.', icon: Newspaper, path: '/latest-news', color: 'bg-blue-500' },
  { id: 'schemes', title: 'Government Schemes', description: 'Explore welfare schemes for farmers, students, and citizens.', icon: Landmark, path: '/government-schemes', color: 'bg-green-500' },
  { id: 'rights', title: 'Public Rights', description: 'Know your constitutional rights and legal protections.', icon: Scale, path: '/public-rights', color: 'bg-purple-500' },
  { id: 'jobs', title: 'Job Opportunities', description: 'Find government job vacancies and employment programs.', icon: Briefcase, path: '/job-opportunities', color: 'bg-amber-500' },
  { id: 'education', title: 'Free Education', description: 'Access free education initiatives and school support.', icon: BookOpen, path: '/free-education', color: 'bg-indigo-500' },
  { id: 'reports', title: 'Reports & Analytics', description: 'View public issue statistics and resolution rates.', icon: FileBarChart, path: '/reports', color: 'bg-rose-500' },
  { id: 'transparency', title: 'Data Transparency', description: 'Track government spending and project progress.', icon: PieChart, path: '/data-transparency', color: 'bg-cyan-500' },
  { id: 'achievements', title: 'Achievements', description: 'Discover milestones reached in public welfare.', icon: Trophy, path: '/achievements', color: 'bg-yellow-500' },
  { id: 'ids', title: 'Gov ID Services', description: 'Apply or update Aadhaar, PAN, Voter ID, etc.', icon: IdCard, path: '/government-ids', color: 'bg-emerald-500' },
  { id: 'officials', title: 'Higher Officials', description: 'Contact details of department heads and officers.', icon: Users, path: '/higher-officials', color: 'bg-slate-700' },
  { id: 'scholarships', title: 'Scholarships', description: 'Apply for merit and need-based financial aid.', icon: GraduationCap, path: '/scholarships', color: 'bg-violet-500' },
  { id: 'safety', title: 'Safety Purpose', description: 'Emergency contacts and safety guidelines.', icon: ShieldAlert, path: '/safety-purpose', color: 'bg-red-500' },
  { id: 'medical', title: 'Medical Funds', description: 'Request emergency medical financial assistance.', icon: HeartPulse, path: '/medical-funds', color: 'bg-pink-500' },
  { id: 'social', title: 'Social Services', description: 'Connect with NGOs and social support groups.', icon: Building, path: '/social-services', color: 'bg-teal-500' }
];
