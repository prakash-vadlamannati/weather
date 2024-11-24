import BaseClass from './home';
import BaseFunction from './register';
import { Breadcrumbs, Drawer, Popover } from '@material-ui/core'; 
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Form from './form'
import "./App.css"
import GetRequest from './fetch'
import DocTitleOne from './components/docone'
import DocTitleTwo from './components/doctwo';
import ArrayFunctions from './complexmap';
import Weather from './weather';
import DatePickers from './popoer';

function App() {
  return (
    <div className="App">
      <header className="App">
      
       {/* <Form/> */}
       {/* <GetRequest/> */}
       {/*<DocTitleOne/>*/}
       {/*<DocTitleTwo/>*/}
       {/*<ArrayFunctions/>*/}
       {/*<Drawer/>*/}
       {/*<DatePickers/>*/}
       {/*<BaseFunction/>*/}
      
      
      
    
      
       <Weather/>
      
      </header>
      
    </div>
  );
}

export default App;
