
import React from 'react';
import { Link } from 'react-router-dom';
import { IKS_TOPICS } from '../constants';

const Topics: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-800 mb-2">Course Modules</h1>
        <p className="text-slate-500">Structured lessons covering the vast landscape of Indian Knowledge Systems.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IKS_TOPICS.map((topic) => (
          <div key={topic.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col group shadow-sm hover:shadow-lg transition-all">
            <div className="h-48 relative overflow-hidden">
              <img src={topic.image} alt={topic.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {topic.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{topic.icon}</span>
                <h2 className="text-xl font-bold text-slate-800">{topic.title}</h2>
              </div>
              <p className="text-slate-500 text-sm mb-6 flex-1">{topic.summary}</p>
              <div className="flex gap-3">
                <Link to={`/topics/${topic.id}`} className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
                  Study Notes
                </Link>
                <Link to={`/quiz/${topic.id}`} className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
                  Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
