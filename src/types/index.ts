export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  joinDate: string;
  attendance: number;
  lastAttendance?: string;
  avatar?: string;
  education?: {
    currentLevel: string;
    progress: number;
    enrolledCourses: string[];
  };
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  leaderId: string;
  memberCount: number;
}

export interface Network {
  id: string;
  name: string;
  description: string;
  leaderId: string;
  memberCount: number;
  meetingTime: string;
}

export interface FinancialTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Course {
  id: string;
  name: string;
  level: number;
  description: string;
  duration: string;
  instructor: string;
  enrolledStudents: number;
  startDate: string;
  schedule: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}