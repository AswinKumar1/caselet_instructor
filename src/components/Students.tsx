import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Plus, BarChart3, BookOpen, Clock, ArrowUpRight } from 'lucide-react';

const Students = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Students');
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@university.edu',
      major: 'Computer Science',
      year: 'Junior',
      progress: 92,
      caselets: {
        completed: 8,
        assigned: 10
      },
      lastActive: '2 hours ago',
      avatar: 'AJ',
      avatarColor: 'bg-blue-600',
      tags: ['AI/ML', 'High Performer']
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.garcia@university.edu',
      major: 'Data Science',
      year: 'Senior',
      progress: 78,
      caselets: {
        completed: 6,
        assigned: 9
      },
      lastActive: '1 day ago',
      avatar: 'MG',
      avatarColor: 'bg-purple-600',
      tags: ['Database', 'Needs Help']
    },
    {
      id: 3,
      name: 'Raj Patel',
      email: 'raj.patel@university.edu',
      major: 'Computer Engineering',
      year: 'Sophomore',
      progress: 85,
      caselets: {
        completed: 7,
        assigned: 8
      },
      lastActive: '3 hours ago',
      avatar: 'RP',
      avatarColor: 'bg-green-600',
      tags: ['Algorithms', 'Consistent']
    },
    {
      id: 4,
      name: 'Sarah Kim',
      email: 'sarah.kim@university.edu',
      major: 'Cybersecurity',
      year: 'Senior',
      progress: 95,
      caselets: {
        completed: 9,
        assigned: 10
      },
      lastActive: '5 hours ago',
      avatar: 'SK',
      avatarColor: 'bg-amber-600',
      tags: ['Security', 'High Performer']
    },
    {
      id: 5,
      name: 'James Wilson',
      email: 'james.wilson@university.edu',
      major: 'Software Engineering',
      year: 'Junior',
      progress: 65,
      caselets: {
        completed: 5,
        assigned: 10
      },
      lastActive: '2 days ago',
      avatar: 'JW',
      avatarColor: 'bg-red-600',
      tags: ['Web Dev', 'Needs Help']
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      email: 'olivia.martinez@university.edu',
      major: 'Artificial Intelligence',
      year: 'Senior',
      progress: 88,
      caselets: {
        completed: 8,
        assigned: 9
      },
      lastActive: '1 hour ago',
      avatar: 'OM',
      avatarColor: 'bg-indigo-600',
      tags: ['AI/ML', 'Consistent']
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.major.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'All Students') return matchesSearch;
    if (selectedFilter === 'High Performers') return matchesSearch && student.progress >= 90;
    if (selectedFilter === 'Needs Help') return matchesSearch && student.progress < 70;
    if (selectedFilter === 'Recently Active') return matchesSearch && student.lastActive.includes('hour');
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Students</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Student</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
              <Filter className="h-4 w-4 text-gray-500" />
              <span>{selectedFilter}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {/* Dropdown would go here */}
          </div>
          
          <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Caselets
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className={`h-10 w-10 rounded-full ${student.avatarColor} flex items-center justify-center text-white font-medium`}>
                        {student.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                        <p className="text-xs text-gray-500">{student.major}, {student.year}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            student.progress >= 90 ? 'bg-green-500' : 
                            student.progress >= 70 ? 'bg-blue-500' : 
                            'bg-amber-500'
                          }`} 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm text-gray-700">{student.caselets.completed}/{student.caselets.assigned}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{student.lastActive}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {student.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            tag === 'High Performer' ? 'bg-green-100 text-green-800' :
                            tag === 'Needs Help' ? 'bg-red-100 text-red-800' :
                            tag === 'Consistent' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900 p-1">
                        <BarChart3 className="h-4 w-4" />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 p-1">
                        <BookOpen className="h-4 w-4" />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 p-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;