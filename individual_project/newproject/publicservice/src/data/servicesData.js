// src/data/servicesData.js
import { 
  FileText, Camera, Video, Info, UserCheck, 
  Tractor, Zap, Droplets, MapPin, GraduationCap, 
  Briefcase, Activity, PhoneCall, ShieldCheck, Key 
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "Online Complaint Registration",
    description: "Submit complaints securely online to respective government departments with tracking.",
    icon: FileText,
    rating: 4.8,
    reviews: 12453,
    availability: "24/7 Active"
  },
  {
    id: 2,
    title: "Upload Photo Evidence",
    description: "Attach clear photographic evidence of public issues like road damage or garbage.",
    icon: Camera,
    rating: 4.7,
    reviews: 8932,
    availability: "24/7 Active"
  },
  {
    id: 3,
    title: "Upload Video Evidence",
    description: "Upload short video clips to provide better context for complex complaints.",
    icon: Video,
    rating: 4.5,
    reviews: 5621,
    availability: "Max 50MB"
  },
  {
    id: 4,
    title: "Government Scheme Info",
    description: "Access detailed information about latest welfare schemes and eligibility.",
    icon: Info,
    rating: 4.9,
    reviews: 21543,
    availability: "Updated Daily"
  },
  {
    id: 5,
    title: "Public Rights Awareness",
    description: "Learn about your fundamental rights and civic duties as a citizen.",
    icon: UserCheck,
    rating: 4.6,
    reviews: 4321,
    availability: "Free Access"
  },
  {
    id: 6,
    title: "Farmer Support Services",
    description: "Dedicated portal for agricultural complaints, subsidies, and expert advice.",
    icon: Tractor,
    rating: 4.9,
    reviews: 34125,
    availability: "Priority Support"
  },
  {
    id: 7,
    title: "Electricity Complaint",
    description: "Report power outages, faulty meters, or dangerous electrical situations.",
    icon: Zap,
    rating: 4.4,
    reviews: 15432,
    availability: "Fast Response"
  },
  {
    id: 8,
    title: "Water Problem Reporting",
    description: "Report pipe leaks, contamination, or irregular water supply in your area.",
    icon: Droplets,
    rating: 4.5,
    reviews: 11234,
    availability: "Local Tracking"
  },
  {
    id: 9,
    title: "Road Damage Reporting",
    description: "Highlight potholes, broken pavements, or unsafe road conditions.",
    icon: MapPin,
    rating: 4.7,
    reviews: 19876,
    availability: "Geo-tagged"
  },
  {
    id: 10,
    title: "Education Scheme Support",
    description: "Find scholarships, free education programs, and school infrastructure issues.",
    icon: GraduationCap,
    rating: 4.8,
    reviews: 8765,
    availability: "Student Focused"
  },
  {
    id: 11,
    title: "Job Opportunity Info",
    description: "Latest government job openings, exam notifications, and results.",
    icon: Briefcase,
    rating: 4.9,
    reviews: 45321,
    availability: "Real-time"
  },
  {
    id: 12,
    title: "Real-time Tracking",
    description: "Track the live status of your submitted complaints and officer remarks.",
    icon: Activity,
    rating: 4.6,
    reviews: 12345,
    availability: "Live Updates"
  },
  {
    id: 13,
    title: "Emergency Public Support",
    description: "Direct contact lines for immediate disaster relief or emergency response.",
    icon: PhoneCall,
    rating: 5.0,
    reviews: 5432,
    availability: "Immediate"
  },
  {
    id: 14,
    title: "Secure Citizen Auth",
    description: "Bank-grade security for your personal data and identity verification.",
    icon: ShieldCheck,
    rating: 4.9,
    reviews: 65432,
    availability: "Encrypted"
  },
  {
    id: 15,
    title: "OTP Verified System",
    description: "Two-factor authentication for safe and verified complaint registration.",
    icon: Key,
    rating: 4.8,
    reviews: 32145,
    availability: "Required"
  }
];
