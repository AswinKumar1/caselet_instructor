import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, Plus, Users, BookOpen, Filter, ChevronDown, BarChart3 } from 'lucide-react';

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState('October 2025');
  const [selectedView, setSelectedView] = useState('Month');
  
  // Mock data for calendar events
  const events = [
    {
      id: 1,
      title: 'Data Structures Deadline',
      date: '2025-10-15',
      time: '11:59 PM',
      type: 'deadline',
      students: 32
    },
    {
      id: 2,
      title: 'Machine Learning Office Hours',
      date: '2025-10-18',
      time: '3:00 PM - 5:00 PM',
      type: 'office-hours',
      location: 'Virtual (Zoom)'
    },
    {
      id: 3,
      title: 'New Caselet Release: Cloud Architecture',
      date: '2025-10-20',
      time: '9:00 AM',
      type: 'release',
      students: 45
    },
    {
      id: 4,
      title: 'End of Term Assessment',
      date: '2025-10-28',
      time: '10:00 AM',
      type: 'assessment',
      students: 128
    },
    {
      id: 5,
      title: 'Database Optimization Deadline',
      date: '2025-10-22',
      time: '11:59 PM',
      type: 'deadline',
      students: 36
    },
    {
      id: 6,
      title: 'Algorithms Office Hours',
      date: '2025-10-25',
      time: '2:00 PM - 4:00 PM',
      type: 'office-hours',
      location: 'Virtual (Zoom)'
    }
  ];

  // Generate calendar days (simplified for demo)
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 4; // Offset to start from previous month
    return {
      date: day,
      isCurrentMonth: day > 0 && day <= 31,
      hasEvents: events.some(event => {
        const eventDay = parseInt(event.date.split('-')[2]);
        return eventDay === day;
      }),
      events: events.filter(event => {
        const eventDay = parseInt(event.date.split('-')[2]);
        return eventDay === day;
      })
    };
  });

  // Days of the week
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Schedule</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Event</span>
        </button>
      </div>

      {/* Calendar Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <h2 className="text-lg font-bold text-gray-800">{currentMonth}</h2>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex space-x-2">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden flex divide-x divide-gray-300">
            <button 
              className={`px-4 py-2 text-sm font-medium ${selectedView === 'Month' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'}`}
              onClick={() => setSelectedView('Month')}
            >
              Month
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${selectedView === 'Week' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'}`}
              onClick={() => setSelectedView('Week')}
            >
              Week
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${selectedView === 'Day' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'}`}
              onClick={() => setSelectedView('Day')}
            >
              Day
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
              <Filter className="h-4 w-4 text-gray-500" />
              <span>Filter</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {/* Dropdown would go here */}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Days of the week */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {weekDays.map((day, index) => (
            <div key={index} className="py-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-gray-200">
          {calendarDays.map((day, index) => (
            <div 
              key={index} 
              className={`min-h-[120px] p-2 ${
                day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'
              } ${
                day.date === 15 ? 'ring-2 ring-indigo-500 ring-inset' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm ${day.date === 15 ? 'font-bold text-indigo-600' : 'font-medium'}`}>
                  {day.date > 0 ? day.date : 31 + day.date}
                </span>
                {day.hasEvents && (
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                )}
              </div>
              
              <div className="mt-1 space-y-1 max-h-[80px] overflow-y-auto">
                {day.events.map((event) => (
                  <div 
                    key={event.id} 
                    className={`px-2 py-1 rounded text-xs font-medium truncate ${
                      event.type === 'deadline' ? 'bg-red-100 text-red-800' :
                      event.type === 'office-hours' ? 'bg-indigo-100 text-indigo-800' :
                      event.type === 'release' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-800">Upcoming Events</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
        </div>
        
        <div className="space-y-4">
          {events.slice(0, 4).map((event) => (
            <div key={event.id} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-0">
              <div className={`mt-1 h-10 w-10 rounded-lg flex items-center justify-center ${
                event.type === 'deadline' ? 'bg-red-100 text-red-600' :
                event.type === 'office-hours' ? 'bg-indigo-100 text-indigo-600' :
                event.type === 'release' ? 'bg-green-100 text-green-600' :
                'bg-amber-100 text-amber-600'
              }`}>
                {event.type === 'deadline' && <Clock className="h-5 w-5" />}
                {event.type === 'office-hours' && <Users className="h-5 w-5" />}
                {event.type === 'release' && <BookOpen className="h-5 w-5" />}
                {event.type === 'assessment' && <BarChart3 className="h-5 w-5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {event.date.split('-')[2]} {currentMonth.split(' ')[0]}, {event.time}
                    </p>
                    {event.location && (
                      <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                    )}
                  </div>
                  {event.students && (
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{event.students}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 w-full flex items-center justify-center space-x-2 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:border-indigo-300">
          <Calendar className="h-4 w-4" />
          <span>Add New Event</span>
        </button>
      </div>
    </div>
  );
};

export default Schedule;