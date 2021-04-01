import BooksList from './BooksList';
import BookForm from './BookForm';
import Navigation from '../components/navigation/Navigation';
import './App.css';

const App = () => (
  <div className="app">
    <Navigation />
    <div className="main-content">
      <BooksList />
      <BookForm />
    </div>
  </div>
);

export default App;
