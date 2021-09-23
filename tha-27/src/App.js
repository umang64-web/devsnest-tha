import './App.css';
import Addtodo from './components/Addtodo';
import List from './components/List';
import { Container, Paper } from '@material-ui/core';

function App() {
  return (
    <div className="App">
    
      <Container maxWidth="sm">
        <Paper elevation={3} style={{borderRadius: 15}}>
          <h1 style={{marginBottom:5}}>Task List</h1>
        </Paper>
        <Paper elevation={7} style={{padding: 30, borderRadius: 15}}>
        
          <Addtodo />
          <List />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
