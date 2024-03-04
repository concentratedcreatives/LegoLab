import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home'; // Assuming your HomePage component is in a file called HomePage.js
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
<Router>
    <div>
      {/* Header */}
      <header>
        <h1>LEGO Lab</h1>
      </header>

      {/* Main content */}
      <main>
        <Routes>
          <Route exact path="/"element={<HomePage />} />
        
          {/* Add other routes here if needed */}
        </Routes>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} LEGO Lab. All rights reserved.</p>
      </footer>
    </div>
  </Router>
  );
}

export default App;

