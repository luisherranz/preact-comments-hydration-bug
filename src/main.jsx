import { render } from 'preact';
import { useState } from 'preact/hooks';

// This works fine in React: https://stackblitz.com/edit/vitejs-vite-b5dcvx?file=src%2Fmain.jsx

const Element = ({ item, deleteItem }) => {
  return (
    <>
      <div>
        Item: {item} <button onClick={() => deleteItem(item)}>x</button>
      </div>
      {''} {/* If you delete this, it works fine. */}
    </>
  );
};

const App = () => {
  const [list, setList] = useState(
    Array(10)
      .fill()
      .map(() => Math.round(Math.random() * 10000))
  );

  const deleteItem = (item) => setList(list.filter((i) => i !== item));

  return list.map((item) => (
    <Element item={item} deleteItem={deleteItem} key={item} />
  ));
};

render(<App />, window.root);
