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
      term: '',
      filter: 'all',
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
    if (name.length < 3){
      return name;
    }

    if (salary <= 0) {
      return salary;
    }
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

  searchEmp = (items, term) => {
    if (items.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  dataFiltering = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      case 'rise':
        return items.filter(item => item.rise === true);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const employers = data.length;
    const increased = data.filter(item => item.increase === true).length;
    const visibleData = this.dataFiltering(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employers={employers} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
