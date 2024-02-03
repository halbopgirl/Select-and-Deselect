import './App.css';
import { Fragment } from 'react';

function createList(items) {
  let itemsWithSelect = items.map(item => 
    Object.assign(item, {selected: false})
  );

  return itemsWithSelect;
}

function List ({ items }) { 
  let selecteditems = createList(items);

  return (
    <Fragment>
      <div className='highlightedList'>
        <h1>Selected Items:</h1>
        <div id='injectionDiv'></div>
      </div>
      <ul className="List">
        {selecteditems.map(item => (
          <li id={item.name} key={item.name} className={`List__item List__item--${item.color} ${item.selected}`} onClick={() => {item.selected = !item.selected;
          if (item.selected) {
            document.getElementById(item.name).classList.add("selected");
            let div = document.getElementById("injectionDiv");
            div.innerHTML += `<div id=${item.name.replace(/ /g, '')}>${item.name}</div>`;
          } else {
            document.getElementById(item.name).classList.remove("selected");
            let clsname = item.name.replace(/ /g, '');
            let pg = document.getElementById(clsname);
            pg.parentNode.removeChild(pg);
            
          }}}>
            {item.name}
          </li>)
        )}
      </ul>
    </Fragment>
  )
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

function App() {
  items.forEach((item) => {
    item.selected = false;
    console.log(item);
  });

  return (
    <div className="App">
      <div className='root'>
        <List items={items}/>
      </div>
    </div>
  );
}

export default App;
