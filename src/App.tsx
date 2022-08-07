import { ItemCreator } from "./components/ItemCreator";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className='app'>
      <ItemCreator />
      <TodoList />
    </div>
  );
}

export default App;
