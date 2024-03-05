import Counter from './components/counter'
import Header from './components/header'

function App() {

  return (
    <div id="app">
      <Header />
      <Counter />
      <Counter>10</Counter>
  </div>
  )
}

export default App
