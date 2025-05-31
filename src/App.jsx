// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <GoogleOAuthProvider clientId="1070883131027-dss2bmgq0a8djq3th69nl6kr4r71ndac.apps.googleusercontent.com">
      <Router>
        <div>
          <Header />
          <FileUpload />
          <hr className="text-dark" />
          <Dashboard />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;