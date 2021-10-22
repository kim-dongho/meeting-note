import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="info">
        <nav class="navbar">
          <div class="navbar__logo">
            Meeting Notes Logo
          </div>
          <ul class="navbar__menu">
            <li>HOME</li>
            <li>RECORD</li>
          </ul>
        </nav>
      </div>
      <div class="recoder">
        <div class="recoder__text">
          <span>Record</span>
        </div>
        <div class="recoder__animation">
          <div class="loader">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
          </div>
        </div>
        <div class="recoder__timer">
          <span>00 : 00 : 00</span>
        </div>
        <div class="recode__button">
          <button><i class="fas fa-microphone fa-4x"></i></button>
        </div>
      </div>
    </div>
  );
}

export default App;
