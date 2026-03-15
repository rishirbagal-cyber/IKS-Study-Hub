
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IKS_QUIZZES, IKS_TOPICS } from '../constants';

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = IKS_TOPICS.find(t => t.id === id);
  const questions = IKS_QUIZZES[id || ''] || [];

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  if (!topic || questions.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Quiz not available for this topic yet.</h2>
        <Link to="/topics" className="mt-4 inline-block text-indigo-600 font-bold">Back to Topics</Link>
      </div>
    );
  }

  const handleAnswerSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);

    if (idx === questions[currentQuestionIdx].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto py-10 animate-fade-in text-center">
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Quiz Completed!</h2>
          <p className="text-slate-500 text-lg">You scored</p>
          <div className="text-5xl font-bold text-indigo-600">{score} / {questions.length}</div>
          <div className="pt-6 flex flex-col gap-3">
            <Link to="/topics" className="bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
              Try Another Topic
            </Link>
            <button onClick={() => window.location.reload()} className="text-slate-500 font-semibold hover:text-slate-800">
              Retake This Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIdx];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-center text-slate-500 font-semibold">
        <span>Question {currentQuestionIdx + 1} of {questions.length}</span>
        <span>{topic.title}</span>
      </div>

      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 transition-all duration-500" 
          style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-bold text-slate-800 leading-snug">
          {currentQ.question}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswerSelect(idx)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-semibold ${
                selectedAnswer === idx 
                  ? (idx === currentQ.correctAnswer ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                  : (isAnswered && idx === currentQ.correctAnswer ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50')
              }`}
              disabled={isAnswered}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {isAnswered && idx === currentQ.correctAnswer && <span className="text-xl">✅</span>}
                {isAnswered && selectedAnswer === idx && idx !== currentQ.correctAnswer && <span className="text-xl">❌</span>}
              </div>
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 animate-slide-up">
            <h4 className="text-slate-800 font-bold mb-2">Explanation</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              isAnswered ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentQuestionIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
