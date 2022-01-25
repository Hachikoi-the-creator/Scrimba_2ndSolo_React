import './App.css';
import Header from './components/Header';
import Travel from './components/Travels';
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return (
      <Travel
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="main">
      <Header />
      {/* <Travels />
      <Travels /> */}
      { cards }
    </div>
  )
}
export default App;


