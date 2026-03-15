
import React, { useState, useEffect } from 'react';
import { ROADMAP } from '../constants';

const RoadmapPage: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('iks-roadmap-progress');
    if (saved) setCompletedTasks(JSON.parse(saved));
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const next = prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId];
      localStorage.setItem('iks-roadmap-progress', JSON.stringify(next));
      return next;
    });
  };

  const totalTasks = ROADMAP.reduce((acc, day) => acc + day.tasks.length, 0);
  const progressPercent = Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-800 mb-2">7-Day Study Path</h1>
          <p className="text-slate-500">A structured journey through the essentials of Indian Knowledge Systems.</p>
        </div>
        <div className="bg-white px-6 py-4 rounded-3xl border border-slate-200 text-center">
          <div className="text-3xl font-bold text-indigo-600">{progressPercent}%</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</div>
        </div>
      </header>

      <div className="space-y-6">
        {ROADMAP.map((day) => (
          <div key={day.day} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0 text-center md:border-r border-slate-100 pr-0 md:pr-8">
              <div className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-1">Day</div>
              <div className="text-5xl font-display font-bold text-indigo-600">{day.day}</div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-slate-800">{day.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {day.tasks.map(task => (
                  <label 
                    key={task.id} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      completedTasks.includes(task.id) ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-transparent hover:border-slate-200'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded-md text-indigo-600 border-slate-300 focus:ring-indigo-500" 
                      checked={completedTasks.includes(task.id)}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span className={`text-sm font-semibold ${completedTasks.includes(task.id) ? 'text-green-700 line-through' : 'text-slate-600'}`}>
                      {task.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
