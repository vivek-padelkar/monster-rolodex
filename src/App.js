import './App.css'
import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import InputField from './components/input-field/imput-field.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          monsters: users,
          inputVal: '',
        })
      )
  }

  sortDate() {}

  render() {
    const { monsters, inputVal } = this.state
    const filterArray = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(inputVal.toLowerCase())
    )

    const handleClick = (e) => this.setState({ inputVal: e.target.value })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Monster rolodex</h1>
          <InputField
            placeholder="Search monster"
            handleClick={(e) => {
              handleClick(e)
            }}
          />

          <CardList monsters={filterArray} />
        </header>
      </div>
    )
  }
}

export default App
