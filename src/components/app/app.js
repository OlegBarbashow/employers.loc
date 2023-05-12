import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import './app.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Dima Polyan', salary: 1700, increase: true, id: 1,},
        {name: 'Dima Sisoev', salary: 800, increase: false, id: 2,},
        {name: 'Oleg Nevsky', salary: 12000, increase: true, id: 3,}
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
      };
    });
  }

  addItem = (evt, name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
