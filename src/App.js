import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {
    id : 1,
    name : "kim",
    image : "",
    rating : 5
  },
  {
    id : 2,
    name : "kimbab",
    image : "",
    rating : 4.9
  },
  {
    id : 3,
    name : "meat",
    image : "",
    rating : 4.8
  }
]

function Food({ name, picture , rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt ={name}/>
      <h4>{rating} </h4>
    </div>
  );
}

Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

function App() {
  return (
    <div>
      {foodLike.map(dish =>(
        <Food 
        key = {dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;


/*
argument 에
(props)라고 적은 후 object 내에서 props를 골라서 뽑을 수도 있고 -> return 내에서 {props.fav}로 뽑아냄,
({fav}) 로 직접 내부에서 얻을 수도 있다. -> return 내용 내에서도 {fav}로 뽑아냄
*/

// const fr = ["a","b","c"]

// fr.map(current =>{
//   console.log(current);
//   return 0
// })