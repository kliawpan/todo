import React, { useState, useEffect } from 'react';
import './App.css'; 

const TodoList = () => {
  const initialData = [
   
     
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    
  
  ];

  const [mainList, setMainList] = useState(initialData);
  const [fruitList, setFruitList] = useState([]);
  const [vegetableList, setVegetableList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fruitList.length + vegetableList.length < 5) {
        setMainList((prevList) => [...prevList, ...fruitList, ...vegetableList]);
      }
      setFruitList([]);
      setVegetableList([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [fruitList, vegetableList]);

  const handleButtonClick = (item) => {
    const isItemInFruitList = fruitList.some((i) => i === item);
    const isItemInVegetableList = vegetableList.some((i) => i === item);

    if (!isItemInFruitList && !isItemInVegetableList) {
      if (item.type === 'Fruit') {
        setFruitList((prevList) => [...prevList, item]);
      } else if (item.type === 'Vegetable') {
        setVegetableList((prevList) => [...prevList, item]);
      }
    } else {
      setMainList((prevList) => [...prevList, item]);
      setFruitList((prevList) => prevList.filter((i) => i !== item));
      setVegetableList((prevList) => prevList.filter((i) => i !== item));
    }
  };

  return (
    <div className="container text-center">
<div id="allgroup">
<div class="row align-items-start">
          <ul className="list-group">
            {mainList.map((item, index) => (
              <li key={index} className="list-group-item">
                <button className="btn btn-light" onClick={() => handleButtonClick(item)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div id="fruit">
  <div class="row align-items-start">
          <h2 className="col">Fruit</h2>
          <ul className="list-group">
            {fruitList.map((item, index) => (
              <li key={index} className="list-group-item">
                <button className="btn btn-primary" onClick={() => handleButtonClick(item)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div id="vegetable">
        <div class="row align-items-start">
          <h2 className="col ">Vegetable</h2>
          <ul className="list-group">
            {vegetableList.map((item, index) => (
              <li key={index} className="list-group-item">
                <button className="btn btn-success" onClick={() => handleButtonClick(item)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        </div>
      </div>
   
  );
};

export default TodoList;