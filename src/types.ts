
export enum IKSSection {
  Ayurveda = 'Ayurveda',
  VedicMath = 'Vedic Mathematics',
  Yoga = 'Yoga & Lifestyle',
  Astronomy = 'Indian Astronomy',
  Vastu = 'Vastu Shastra',
  Architecture = 'Ancient Architecture'
}

export interface TopicContent {
  id: string;
  title: string;
  category: IKSSection;
  icon: string;
  summary: string;
  keyTerms: string[];
  notes: string[];
  image: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Flashcard {
  id: number;
  category: string;
  front: string;
  back: string;
}

export interface RoadmapDay {
  day: number;
  title: string;
  tasks: { id: string; text: string; completed: boolean }[];
}

export interface UserProgress {
  completedTopics: string[];
  quizScores: Record<string, number>;
  roadmapTasks: string[];
}
