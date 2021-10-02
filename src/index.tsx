import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { render } from "solid-js/web";
interface item {
  name: string;
  completed: false;
}

const App = () => {
  const [todos, setTodos] = createSignal<item[]>([]);
  let todoForm;
  onMount(() => {
    if (localStorage.getItem("todos") !== "") {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  });
  createEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos()));
  });
  return (
    <div>
      <ul>
        {todos().map((x) => {
          return (
            <li>
              <p>{x.name}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <input type="text" ref={todoForm} />
        <button
          onClick={(e) => {
            const c: item[] = [
              ...todos(),
              { name: todoForm.value, completed: false },
            ];
            setTodos(c);
            todoForm.value = "";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

render(() => <App />, document.body);
