function friend(friends){
    let newArray = [];
    friends.map((e,i)=> [...e].length == 4 && newArray.push(e));
    return newArray;
  }

friend(["Ryan", "Kieran", "Mark"]);

// orr

const friendTwo =friends => friend.filter((n)=> n.length == 4);