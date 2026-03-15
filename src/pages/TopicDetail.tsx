
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { IKS_TOPICS } from '../constants';

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = IKS_TOPICS.find(t => t.id === id);

  if (!topic) return <Navigate to="/topics" />;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <nav className="flex gap-2 text-sm font-medium text-slate-500">
        <Link to="/topics" className="hover:text-indigo-600 transition-colors">Modules</Link>
        <span>/</span>
        <span className="text-slate-800">{topic.title}</span>
      </nav>

      <header className="space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl text-4xl">
          {topic.icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
          {topic.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          {topic.summary}
        </p>
      </header>

      <img src={topic.image} alt={topic.title} className="w-full h-80 object-cover rounded-3xl shadow-lg border border-slate-100" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
              Core Concepts
            </h2>
            <ul className="space-y-4">
              {topic.notes.map((note, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="mt-1 w-6 h-6 flex-shrink-0 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{note}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex justify-between items-center p-8 bg-slate-900 rounded-3xl text-white">
            <div>
              <h3 className="text-xl font-bold mb-1">Ready for the test?</h3>
              <p className="text-slate-400 text-sm">Challenge yourself with the topic quiz.</p>
            </div>
            <Link to={`/quiz/${topic.id}`} className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Take Quiz
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
            <h3 className="text-orange-800 font-bold mb-4 flex items-center gap-2">
              <span>🗝️</span> Key Terms
            </h3>
            <div className="flex flex-wrap gap-2">
              {topic.keyTerms.map((term, idx) => (
                <span key={idx} className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-orange-700 shadow-sm border border-orange-100">
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
            <h3 className="text-indigo-800 font-bold mb-4 flex items-center gap-2">
              <span>📚</span> Resources
            </h3>
            <ul className="text-sm space-y-2 text-indigo-700/80 font-medium">
              <li className="hover:text-indigo-900 cursor-pointer">PDF Study Guide →</li>
              <li className="hover:text-indigo-900 cursor-pointer">Ancient Texts List →</li>
              <li className="hover:text-indigo-900 cursor-pointer">Video Lecture →</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TopicDetail;
