
import { TopicContent, IKSSection, QuizQuestion, Flashcard, RoadmapDay } from './types';

export const IKS_TOPICS: TopicContent[] = [
  {
    id: 'ayurveda',
    title: 'Ayurveda: Science of Life',
    category: IKSSection.Ayurveda,
    icon: '🌿',
    summary: 'One of the world\'s oldest holistic healing systems, Ayurveda focuses on the balance between mind, body, and spirit.',
    keyTerms: ['Doshas (Vata, Pitta, Kapha)', 'Panchakarma', 'Dinacharya', 'Susruta Samhita'],
    notes: [
      'Focuses on preventive health and wellness through diet and lifestyle.',
      'Based on the concept of five elements: Earth, Water, Fire, Air, and Ether.',
      'Susruta is known as the "Father of Surgery" in ancient India.',
      'Treats the root cause of the ailment rather than just symptoms.'
    ],
    image: 'https://picsum.photos/seed/ayurveda/800/600'
  },
  {
    id: 'vedic-math',
    title: 'Vedic Mathematics',
    category: IKSSection.VedicMath,
    icon: '🔢',
    summary: 'A system of reasoning and mathematical working based on ancient Indian teachings, called Veda.',
    keyTerms: ['Sutras', 'Upa-sutras', 'Mental Math', 'Jagadguru Swami Bharati Krishna Tirtha'],
    notes: [
      'Consists of 16 Sutras (formulae) and 13 Upa-sutras (sub-formulae).',
      'Enables complex calculations to be done mentally with extreme speed.',
      'Unified system covering all areas of mathematics from arithmetic to calculus.',
      'The word "Vedic" is derived from the word "Veda" which means knowledge.'
    ],
    image: 'https://picsum.photos/seed/math/800/600'
  },
  {
    id: 'yoga',
    title: 'Yoga & Lifestyle',
    category: IKSSection.Yoga,
    icon: '🧘',
    summary: 'A spiritual and physical discipline originating in India that aims to bring harmony between mind and body.',
    keyTerms: ['Asana', 'Pranayama', 'Patanjali', 'Chakras', 'Eight Limbs (Ashtanga)'],
    notes: [
      'Patanjali’s Yoga Sutras is the foundational text of classical yoga.',
      'Ashtanga Yoga includes Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi.',
      'Yoga is recognized globally for its mental health and stress-relief benefits.',
      'Surya Namaskar (Sun Salutation) is a comprehensive sequence of 12 postures.'
    ],
    image: 'https://picsum.photos/seed/yoga/800/600'
  },
  {
    id: 'astronomy',
    title: 'Indian Astronomy',
    category: IKSSection.Astronomy,
    icon: '🔭',
    summary: 'Ancient Indians had advanced knowledge of planetary movements, eclipses, and the concept of zero long before the West.',
    keyTerms: ['Aryabhata', 'Surya Siddhanta', 'Nakshatras', 'Brahmagupta'],
    notes: [
      'Aryabhata calculated the value of Pi (π) and explained the cause of eclipses.',
      'The Surya Siddhanta is one of the oldest astronomical treatises in the world.',
      'Knowledge of "Shunya" (Zero) laid the foundation for modern mathematics.',
      'Ancient Indians identified 27 Nakshatras (lunar mansions).'
    ],
    image: 'https://picsum.photos/seed/astronomy/800/600'
  },
  {
    id: 'vastu',
    title: 'Vastu Shastra',
    category: IKSSection.Vastu,
    icon: '🏠',
    summary: 'The traditional Indian system of architecture that integrates nature, the relative functions of various parts of a structure, and ancient beliefs.',
    keyTerms: ['Vastu Purusha Mandala', 'Five Elements', 'Directions', 'Energy Flow'],
    notes: [
      'Integrates architecture with nature and ancient Indian beliefs.',
      'Uses geometric patterns (yantra) to align the design with cosmic energies.',
      'The "Northeast" (Ishanya) direction is considered the most sacred.',
      'Aims to bring prosperity, health, and peace to the inhabitants.'
    ],
    image: 'https://picsum.photos/seed/vastu/800/600'
  }
];

export const IKS_QUIZZES: Record<string, QuizQuestion[]> = {
  ayurveda: [
    {
      id: 1,
      question: "Which of the following is NOT one of the three Doshas in Ayurveda?",
      options: ["Vata", "Pitta", "Kapha", "Agni"],
      correctAnswer: 3,
      explanation: "Agni refers to digestive fire, while Vata, Pitta, and Kapha are the three primary biological energies (Doshas)."
    },
    {
      id: 2,
      question: "Who is considered the 'Father of Surgery' in ancient India?",
      options: ["Charaka", "Susruta", "Vagbhata", "Patanjali"],
      correctAnswer: 1,
      explanation: "Susruta authored the Susruta Samhita, which describes over 300 surgical procedures."
    }
  ],
  'vedic-math': [
    {
      id: 1,
      question: "How many Sutras are there in Vedic Mathematics?",
      options: ["10", "16", "24", "32"],
      correctAnswer: 1,
      explanation: "Vedic Mathematics consists of 16 basic Sutras and 13 sub-Sutras."
    }
  ]
};

export const FLASHCARDS: Flashcard[] = [
  { id: 1, category: 'Ayurveda', front: "What does the word 'Ayurveda' literally mean?", back: "The Science of Life (Ayur = Life, Veda = Knowledge)." },
  { id: 2, category: 'Yoga', front: "Who compiled the Yoga Sutras?", back: "Sage Patanjali." },
  { id: 3, category: 'Astronomy', front: "Which ancient Indian scientist first explained that the Earth is round and rotates on its axis?", back: "Aryabhata." },
  { id: 4, category: 'Mathematics', front: "What is the meaning of 'Shunya'?", back: "Zero or Void." }
];

export const ROADMAP: RoadmapDay[] = [
  {
    day: 1,
    title: "Introduction to IKS",
    tasks: [
      { id: 'd1t1', text: "Read about the 4 Vedas", completed: false },
      { id: 'd1t2', text: "Watch an intro video on IKS history", completed: false }
    ]
  },
  {
    day: 2,
    title: "Ayurveda & Health",
    tasks: [
      { id: 'd2t1', text: "Identify your Dosha type", completed: false },
      { id: 'd2t2', text: "Study Susruta's contributions", completed: false }
    ]
  },
  {
    day: 3,
    title: "Vedic Mathematics",
    tasks: [
      { id: 'd3t1', text: "Learn the 'Ekadhikena Purvena' sutra", completed: false },
      { id: 'd3t2', text: "Practice 10 speed math sums", completed: false }
    ]
  }
];

export const IKS_FACTS = [
  "Ancient India was the first to use Zero as a number.",
  "Ayurveda is recognized as the oldest medical system in existence.",
  "The iron pillar of Delhi, built in 400 CE, still hasn't rusted.",
  "Aryabhata calculated the length of a solar year as 365.258 days.",
  "Chess (Chaturanga) originated in India during the Gupta Empire."
];
