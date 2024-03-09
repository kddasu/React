import './App.css';

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return (
    <>
    <div>
    <h2>{date.toDateString()}</h2>
    <h3>{year}/{month}/{day}</h3>
    </div>
    </>
  );
}

export default App;
