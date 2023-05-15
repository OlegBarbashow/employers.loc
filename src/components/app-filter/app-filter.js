import './app-filter.css';

const AppFilter = (props) => {
  const {onFilterSelect, filter} = props;

  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'Employees for promotion'},
    {name: 'moreThen1000', label: 'Salary above 1000$'},
  ];


  const buttons = buttonsData.map(({name, label}) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
          className={`btn ${clazz}`}
          type="button"
          onClick={() => onFilterSelect(name)}
          key={name}>
          {label}
      </button>
    )
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;
