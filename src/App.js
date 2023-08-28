
import './App.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import ProjectUpdates from './components/ProjectUpdates';
import DocumentStorage from './components/DocumentStorage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductionDocs from './components/ProductionDocs';
import CompanyDocs from './components/CompanyDocs';
import Forum from './components/Forum';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/news">
              <NewsFeed />
            </Route>
            <Route path="/project">
              <ProjectUpdates />
            </Route>
            <Route path="/projects/productiondocs">
              <ProductionDocs />
            </Route>
            <Route path="/projects/companydocs">
              <CompanyDocs />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
