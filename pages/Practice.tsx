import React, { useState, useEffect } from 'react';
import { Section, Card, Button, DecorativeShapes } from '../components/UI';
import { CheckCircle, ArrowRight, BookOpen, FileText, Download, PlayCircle, Clock, AlertCircle } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
};

type MockTest = {
  id: number;
  title: string;
  description: string;
  questions: Question[];
};

const MOCK_TESTS: MockTest[] = [
  {
    id: 1,
    title: 'Mock Test 1',
    description: 'Mental Ability and Scholastic subjects. Duration: 90 mins.',
    questions: [
      { id: 1, text: 'What is the capital of India?', options: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'], correctAnswer: 1 },
      { id: 2, text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: 1 },
      { id: 3, text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 1 },
    ]
  },
  {
    id: 2,
    title: 'Mock Test 2',
    description: 'Mental Ability and Scholastic subjects. Duration: 90 mins.',
    questions: [
      { id: 1, text: 'Who wrote the national anthem of India?', options: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Mahatma Gandhi'], correctAnswer: 0 },
      { id: 2, text: 'What is the largest mammal?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'], correctAnswer: 1 },
      { id: 3, text: 'What is the chemical symbol for water?', options: ['O2', 'H2O', 'CO2', 'NaCl'], correctAnswer: 1 },
    ]
  },
  {
    id: 3,
    title: 'Mock Test 3',
    description: 'Mental Ability and Scholastic subjects. Duration: 90 mins.',
    questions: [
      { id: 1, text: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Ganges', 'Yangtze'], correctAnswer: 1 },
      { id: 2, text: 'What is the square root of 64?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
      { id: 3, text: 'Who discovered gravity?', options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'], correctAnswer: 1 },
    ]
  }
];

type TestResult = {
  testId: number;
  testTitle: string;
  score: number;
  total: number;
  date: string;
};

const Practice: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tests');
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<TestResult[]>([]);
  const [showTestResult, setShowTestResult] = useState<{score: number, total: number} | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('abs_practice_results');
    if (savedResults) {
      try {
        setResults(JSON.parse(savedResults));
      } catch (e) {
        console.error('Failed to parse saved results', e);
      }
    }
  }, []);

  const saveResult = (result: TestResult) => {
    const newResults = [result, ...results];
    setResults(newResults);
    localStorage.setItem('abs_practice_results', JSON.stringify(newResults));
  };

  const startTest = (test: MockTest) => {
    setActiveTest(test);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowTestResult(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (activeTest && currentQuestionIndex < activeTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitTest = () => {
    if (!activeTest) return;
    
    let score = 0;
    activeTest.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });

    const result: TestResult = {
      testId: activeTest.id,
      testTitle: activeTest.title,
      score,
      total: activeTest.questions.length,
      date: new Date().toLocaleDateString()
    };

    saveResult(result);
    setShowTestResult({ score, total: activeTest.questions.length });
    setActiveTest(null);
  };

  const renderTestInterface = () => {
    if (!activeTest) return null;

    const currentQuestion = activeTest.questions[currentQuestionIndex];

    return (
      <Card className="p-6 md:p-8 border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{activeTest.title}</h2>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
            <Clock size={18} />
            <span>Question {currentQuestionIndex + 1} of {activeTest.questions.length}</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-6">
            {currentQuestionIndex + 1}. {currentQuestion.text}
          </h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="inline-block w-6 h-6 rounded-full text-center leading-6 mr-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
          <Button 
            variant="outline" 
            onClick={prevQuestion} 
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          {currentQuestionIndex === activeTest.questions.length - 1 ? (
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white border-none"
              onClick={submitTest}
            >
              Submit Test
            </Button>
          ) : (
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white border-none"
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          )}
        </div>
      </Card>
    );
  };

  const renderTestResult = () => {
    if (!showTestResult) return null;

    const percentage = Math.round((showTestResult.score / showTestResult.total) * 100);
    let message = "Good effort!";
    if (percentage >= 80) message = "Excellent work!";
    else if (percentage >= 60) message = "Well done!";

    return (
      <Card className="p-8 border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto text-center">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Test Completed!</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{message}</p>
        
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 mb-8 inline-block min-w-[200px]">
          <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
            {showTestResult.score} <span className="text-2xl text-slate-400">/ {showTestResult.total}</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-sm">Score</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => setShowTestResult(null)}>
            Back to Tests
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-none" onClick={() => {
            setShowTestResult(null);
            setActiveTab('results');
          }}>
            View All Results
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-32 md:pt-40 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                Practice Portal
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Access practice materials, take mock tests, and check your temporary scores.
              </p>
            </div>
          </div>

          {/* Tabs - hide when taking a test */}
          {!activeTest && !showTestResult && (
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {[
                { id: 'tests', label: 'Practice Tests', icon: PlayCircle },
                { id: 'papers', label: 'Previous Papers', icon: FileText },
                { id: 'materials', label: 'Study Materials', icon: BookOpen },
                { id: 'results', label: 'My Results', icon: CheckCircle },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Content Area */}
          <div className="grid gap-6">
            {activeTest && renderTestInterface()}
            {showTestResult && renderTestResult()}

            {!activeTest && !showTestResult && activeTab === 'tests' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {MOCK_TESTS.map((test) => (
                  <Card key={test.id} className="p-6 border border-slate-200 dark:border-slate-800">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                      <PlayCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{test.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                      {test.description}
                    </p>
                    <Button 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none"
                      onClick={() => startTest(test)}
                    >
                      Start Practice Test
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {!activeTest && !showTestResult && activeTab === 'papers' && (
              <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {[2023, 2022, 2021, 2020].map((year) => (
                  <Card key={year} className="p-6 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Previous Year Paper {year}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">PDF Format • Includes Answer Key</p>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0 flex items-center gap-2">
                      <Download size={16} /> Download
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {!activeTest && !showTestResult && activeTab === 'materials' && (
              <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {['Mental Ability (MAT)', 'Mathematics', 'Science', 'Social Studies'].map((subject, i) => (
                  <Card key={i} className="p-6 border border-slate-200 dark:border-slate-800">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{subject}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Comprehensive study notes and practice questions.
                    </p>
                    <Button variant="ghost" className="w-full justify-between group">
                      View Material <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {!activeTest && !showTestResult && activeTab === 'results' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {results.length > 0 ? (
                  <div className="grid gap-4">
                    {results.map((result, index) => (
                      <Card key={index} className="p-6 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{result.testTitle}</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">Attempted on {result.date}</p>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-xl text-indigo-700 dark:text-indigo-300 font-bold">
                          Score: {result.score} / {result.total}
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 border border-slate-200 dark:border-slate-800">
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Results Yet</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Take a practice test to see your performance analysis here.
                      </p>
                      <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white border-none" onClick={() => setActiveTab('tests')}>
                        Go to Practice Tests
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Practice;

