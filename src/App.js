import './App.css';
import Example from './components/example';

const options = [
  {
    value: 'option1',
  },
  {
    value: 'option2',
  },
  {
    value: 'option3',
  },
  {
    value: 'option4',
  },
];

function App() {
  return (
    <div>
      <Example options={options} />
    </div>
  );
}

export default App;
