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
        {name: 'Dima Polyan', salary: 1700, increase: true, rise: true, id: 1,},
        {name: 'Dima Sisoev', salary: 800, increase: false, rise: false, id: 2,},
        {name: 'Oleg Nevsky', salary: 12000, increase: true, rise: false, id: 3,}
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

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    });
  }

  // onToggleIncrease = (id) => {
  //   // this.setState(({data}) => {
  //   //   const index = data.findIndex(item => item.id === id);
  //   //
  //   //   const old = data[index];
  //   //   const newItem = {...old, increase: !old.increase};
  //   //   const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
  //   //
  //   //   return {
  //   //     data: newArray,
  //   //   }
  //   // });
  //
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, increase: !item.increase}
  //       }
  //       return item;
  //     }),
  //   }));
  // }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      }),
    }));
  }

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  }

  render() {
    const employers = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase === true).length;
    return (
      <div className="app">
        <AppInfo employers={employers} increased={increased} />
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
