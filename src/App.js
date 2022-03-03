import Todo from './components/Todo'; 

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Learn Java'/>
      <Todo text='Now You Can Too' />
      <Todo text='Try This Now' />
    </div>
  );
}

export default App;
