
import React from 'react';
import { Link } from 'react-router-dom';
import { IKS_TOPICS, IKS_FACTS } from '../constants';

const Home: React.FC = () => {
  const dailyFact = IKS_FACTS[Math.floor(Math.random() * IKS_FACTS.length)];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-indigo-900 text-white p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-indigo-500/30 text-indigo-100 px-4 py-1 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Welcome to the future of learning
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Explore the wisdom of Ancient India.
          </h1>
          <p className="text-indigo-100 text-lg mb-8 max-w-lg">
            A comprehensive hub to master Indian Knowledge Systems. Learn Ayurveda, Vedic Mathematics, Yoga, and much more.
          </p>
          <div className="flex gap-4">
            <Link to="/topics" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Start Learning
            </Link>
            <Link to="/roadmap" className="bg-indigo-600 border border-indigo-400 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors">
              View Path
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 hidden lg:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M47.5,-52.8C60.7,-43.3,69.9,-27.1,72.4,-10.1C74.9,7,70.7,24.8,61.1,39.3C51.4,53.8,36.4,65,19.2,69.1C2,73.1,-17.4,70.1,-34.8,62.3C-52.2,54.5,-67.7,42,-74.1,25.6C-80.5,9.2,-77.8,-11,-68.1,-26.8C-58.5,-42.6,-41.8,-53.9,-26.1,-61.8C-10.4,-69.6,4.3,-73.9,18.7,-68.8C33,-63.7,47.5,-52.8,47.5,-52.8Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Stats and Fact Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl">💡</div>
            <h2 className="text-xl font-bold text-slate-800">Daily IKS Fact</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            "{dailyFact}"
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-display font-bold text-indigo-600 mb-1">12</div>
          <div className="text-slate-500 font-medium">Topics Mastered</div>
          <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full">
            <div className="bg-indigo-500 h-full w-[40%] rounded-full"></div>
          </div>
          <div className="text-xs text-slate-400 mt-2">Level 4 Scholar</div>
        </div>
      </div>

      {/* Featured Topics */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Key Modules</h2>
          <Link to="/topics" className="text-indigo-600 font-semibold hover:underline">See all modules →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IKS_TOPICS.slice(0, 3).map((topic) => (
            <Link key={topic.id} to={`/topics/${topic.id}`} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="h-40 overflow-hidden">
                <img src={topic.image} alt={topic.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{topic.icon}</span>
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{topic.title}</h3>
                </div>
                <p className="text-slate-500 text-sm line-clamp-2">{topic.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
