import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
