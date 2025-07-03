import { useNavigate } from 'react-router-dom';

export default function Course1() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* Breadcrumb navigation with clickable Home */}
      <div className="flex items-center text-lg text-gray-700 mb-8">
        <span 
          className="cursor-pointer hover:text-yellow-600 hover:scale-110"
          onClick={() => navigate('/')}  // Navigates to home page
        >
          Home
        </span>
        <span className="mx-2">&gt;</span>
        <span>Course 1</span>
      </div>

      {/* Button group with equal dimensions */}
      <div className="flex flex-wrap gap-20">
        {/* Course Articulation Matrix Button */}
        <button
          className="w-64 h-20 flex items-center justify-center bg-blue-600 hover:bg-red-400 text-white font-semibold text-lg rounded-xl transition-colors duration-200 shadow-lg transform hover:scale-105"
          onClick={() => console.log("Course Articulation Matrix button clicked")}
        >
          Course Articulation Matrix
        </button>

        {/* Import Quiz Marks Button */}
        <button
          className="w-64 h-20 flex items-center justify-center bg-green-600 hover:bg-red-400 text-white font-semibold text-lg rounded-xl transition-colors duration-200 shadow-lg transform hover:scale-105"
          onClick={() => console.log("Import Quiz Marks button clicked")}
        >
          Import Quiz Marks
        </button>

        {/* Generate Reports Button */}
        <button
          className="w-64 h-20 flex items-center justify-center bg-purple-600 hover:bg-red-400 text-white font-semibold text-lg rounded-xl transition-colors duration-200 shadow-lg transform hover:scale-105"
          onClick={() => console.log("Generate Reports button clicked")}
        >
          Generate Reports
        </button>
      </div>
    </div>
  );
}