import React, { useEffect, useState } from 'react';
import { getStudyMaterial, deleteStudyMaterial, auth } from '../firebase/config';

interface StudyMaterial {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: string;
  createdAt: any;
}

const StudyMaterials: React.FC = () => {
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const data: any = await getStudyMaterial(''); 
      const userMaterials = data.filter((m: StudyMaterial) => m.userId === auth.currentUser?.uid);
      // Sort by creation time if available
      userMaterials.sort((a: any, b: any) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setMaterials(userMaterials);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this study material?")) return;
    try {
      await deleteStudyMaterial(id);
      setMaterials(materials.filter(m => m.id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete.');
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading your materials...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-800 mb-2">Saved Study Materials</h1>
        <p className="text-slate-500">Review the insights and notes you've saved from the AI assistant.</p>
      </header>

      {materials.length === 0 ? (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
          <p className="text-slate-500">You haven't saved any materials yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {materials.map((mat) => (
            <div key={mat.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative group">
              <button 
                onClick={() => handleDelete(mat.id)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2"
                title="Delete Material"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
              <h2 className="text-lg font-bold text-slate-800 mb-3">{mat.title}</h2>
              <div className="text-slate-600 text-sm whitespace-pre-wrap bg-slate-50 p-4 rounded-xl border border-slate-100">
                {mat.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
