import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (<>
    <div id="wrapper">
      <Sidebar></Sidebar>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div className="container-fluid">
            <Dashboard></Dashboard>
           
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default App;
