import { useNavigate } from 'react-router-dom';
import Copomap from './Copomap';
export default function Course2() {
  const navigate = useNavigate();
  const matrixData = [
  //         PO1 PO2 PO3 ... PO12 PSO1 PSO2 PSO3 PSO4
  ['CO1',    3,  2,  1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0],
  ['CO2',    2,  2, 3,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  ['CO3',    3, 1, 1,  1, 2, 3, 0, 0, 0, 0, 0, 1, 2, 3, 1, 2],
  ['CO4',    1, 1, 1,  1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
  ['CO5',    1,  1,  1,  0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
  ['CO6',    0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0],
];
const courseDetails = {
  courseName: "Object Oriented Programming",
  courseCode: "CS202",
  semester: "3",
  programme: "B.Tech CSE",
  year: "2025",
};

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
        <span>Course 2</span>
      </div>

      {/* Button group with equal dimensions */}
      <div className="flex flex-wrap gap-20">
        {/* Course Articulation Matrix Button */}
        <button
          className="w-64 h-20 flex items-center justify-center bg-blue-600 hover:bg-red-400 text-white font-semibold text-lg rounded-xl transition-colors duration-200 shadow-lg transform hover:scale-105"
          onClick={() => navigate('/Copomap',{state:{matrixData,courseDetails}})}
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