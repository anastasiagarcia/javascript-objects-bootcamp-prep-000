// //practicing 
// //adding to an Object

// var meals ={
//   breakfast: "oatmeal",
//   lunch:"burrito",
//   dinner:"steak"
// }
// //if we know the name of the key and its value. use dot syntax to add the new pair

// meals.snack="yogurt";

// meals.snack; //yogurt
// meals["snack"]; //yogurt

// //adding key-value pairs using bracker notation

// meals["second breakfast"] = "bagel";

// // to chaange the value
// meals.breakfast="cereal";

// //all of the changes above are destructive

var playlist ={
  Rihanna:"Birthday Cake",
  ACDC: "Thunderstruck"
};

function updatePlaylist(Object){
  playlist.artistName=["Rihanna","ACDC"];
  playlist.songTitle=["Birthday Cake", "Thunderstruck"];
  return playlist;
}