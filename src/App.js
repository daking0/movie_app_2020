import React from "react";

const foodLike = [
  {
    name : "kim",
    image : ""
  },
  {
    name : "kimbab",
    image : ""
  },
  {
    name : "meat",
    image : ""
  }
]

function Food({ name, picture }) {
  return <div>
    I like {name}
    <img src={picture}/>
    </div>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(dish =>
        <Food name={dish.name} picture={dish.image}/>
      )}
    </div>
  );
}
export default App;


/*
argument 에
(props)라고 적은 후 object 내에서 props를 골라서 뽑을 수도 있고 -> return 내에서 {props.fav}로 뽑아냄,
({fav}) 로 직접 내부에서 얻을 수도 있다. -> return 내용 내에서도 {fav}로 뽑아냄
*/

const fr = ["a","b","c"]

fr.map(current =>{
  console.log(current);
  return 0
})