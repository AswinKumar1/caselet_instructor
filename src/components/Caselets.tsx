import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Plus, Tag, Clock, Users, BarChart3, BookOpen } from 'lucide-react';

const Caselets = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Caselets');
  const [searchQuery, setSearchQuery] = useState('');

  const caselets = [
    {
      id: 1,
      title: 'Neural Networks: Image Recognition',
      description: 'Apply convolutional neural networks to solve a real-world image classification problem.',
      category: 'Artificial Intelligence',
      difficulty: 'Advanced',
      estimatedTime: '3-4 hours',
      assignedTo: 45,
      completionRate: 78,
      tags: ['AI/ML', 'Neural Networks', 'Computer Vision'],
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Database Optimization Challenge',
      description: 'Optimize database queries and schema design for a high-traffic e-commerce application.',
      category: 'Databases',
      difficulty: 'Intermediate',
      estimatedTime: '2-3 hours',
      assignedTo: 32,
      completionRate: 65,
      tags: ['SQL', 'Performance', 'Indexing'],
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      title: 'Algorithmic Trading Simulation',
      description: 'Develop and backtest a trading algorithm using historical market data.',
      category: 'Algorithms',
      difficulty: 'Advanced',
      estimatedTime: '4-5 hours',
      assignedTo: 28,
      completionRate: 82,
      tags: ['Finance', 'Algorithms', 'Data Analysis'],
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Analysis',
      description: 'Analyze network traffic logs to identify and mitigate potential security threats.',
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      estimatedTime: '2-3 hours',
      assignedTo: 36,
      completionRate: 91,
      tags: ['Security', 'Network', 'Threat Detection'],
      lastUpdated: '5 days ago'
    },
    {
      id: 5,
      title: 'Cloud Architecture Design',
      description: 'Design a scalable, fault-tolerant cloud architecture for a streaming service.',
      category: 'Cloud Computing',
      difficulty: 'Advanced',
      estimatedTime: '3-4 hours',
      assignedTo: 24,
      completionRate: 58,
      tags: ['AWS', 'Microservices', 'Scalability'],
      lastUpdated: '1 day ago'
    },
    {
      id: 6,
      title: 'Mobile App Performance Optimization',
      description: 'Identify and fix performance bottlenecks in a React Native mobile application.',
      category: 'Mobile Development',
      difficulty: 'Intermediate',
      estimatedTime: '2-3 hours',
      assignedTo: 30,
      completionRate: 75,
      tags: ['React Native', 'Performance', 'Mobile'],
      lastUpdated: '4 days ago'
    }
  ];

  const filteredCaselets = caselets.filter(caselet => {
    const matchesSearch = caselet.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          caselet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          caselet.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'All Caselets') return matchesSearch;
    if (selectedFilter === 'Advanced') return matchesSearch && caselet.difficulty === 'Advanced';
    if (selectedFilter === 'Intermediate') return matchesSearch && caselet.difficulty === 'Intermediate';
    if (selectedFilter === 'High Completion') return matchesSearch && caselet.completionRate >= 80;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Caselets</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Caselet</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search caselets..."
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
            Import
          </button>
        </div>
      </div>

      {/* Caselets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCaselets.map((caselet) => (
          <div key={caselet.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{caselet.title}</h3>
                <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  caselet.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {caselet.difficulty}
                </span>
              </div>
              
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">{caselet.description}</p>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Tag className="h-4 w-4 mr-1" />
                <span>{caselet.category}</span>
              </div>
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{caselet.estimatedTime}</span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-1">
                {caselet.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-700">{caselet.assignedTo}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-700">{caselet.completionRate}%</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-1 text-indigo-600 hover:text-indigo-900 rounded-full hover:bg-indigo-50">
                    <BookOpen className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-indigo-600 hover:text-indigo-900 rounded-full hover:bg-indigo-50">
                    <Users className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Add New Caselet Card */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-6 hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <Plus className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Create New Caselet</h3>
            <p className="mt-1 text-xs text-gray-500">Add a new learning challenge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caselets;