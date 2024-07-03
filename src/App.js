
import './App.css';
import Contacts from './components/Contacts';
import List from './components/Contacts/List';
import Form from './components/Contacts/Form'


function App() {
  return (
    <div className="App">
      <h1>Phone Directory</h1>
      <List/>
      <Form/>
    </div>
  );
}

export default App;
