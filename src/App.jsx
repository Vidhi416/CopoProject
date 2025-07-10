import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Course1 from './pages/Course1';
import Course2 from './pages/Course2';
import Copomap from './pages/Copomap';
import ViewCAM from './pages/ViewCAM';
import UpRes from './pages/UpRes';
import ViewReps from './pages/ViewReps';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Drawer isOpen={drawerOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AppBar onMenuClick={() => setDrawerOpen(!drawerOpen)} />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ViewCAM" element={<ViewCAM />} />
              <Route path="/UpRes" element={<UpRes />} />
              <Route path="/ViewReps" element={<ViewReps />} />
              <Route path="/course1" element={<Course1 />} />
              <Route path="/course2" element={<Course2 />} />
              <Route path="/copomap" element={<Copomap />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}