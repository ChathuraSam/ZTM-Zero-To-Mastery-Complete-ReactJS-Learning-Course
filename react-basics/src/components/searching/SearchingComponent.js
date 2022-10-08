import "../../App.css";
import { Component } from "react";

class SearchingComponent extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }))
      .then(console.log(this.state.monsters));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          placeholder="enter name to search"
          onChange={(event) => {
            this.setState(() => {
              return { searchField: event.target.value };
            });
          }}
        />
        {filteredMonsters.map((monster, id) => {
          return <h1 key={id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default SearchingComponent;
