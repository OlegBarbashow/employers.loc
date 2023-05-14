import './app-info.css';

const AppInfo = (props) => {
  const {increased, employers} = props;
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company</h1>
      <h2>Total number of employees: {employers}</h2>
      <h2>Employees will receive the award: {increased}</h2>
    </div>
  )
}

export default AppInfo;
