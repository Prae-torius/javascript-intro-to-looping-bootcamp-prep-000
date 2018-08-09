// adds 'I am ${i} strange loop(s).' to array 25 times, then returns array
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
<<<<<<< HEAD
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  
=======
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
>>>>>>> bc1e428ec168c8bea89e3bdffba43db8093819a6
  return array;
}
   
  
// Counts down to 0, then returns 'done'
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
<<<<<<< HEAD
  return 'done';
}


function doWhileLoop(array) {
  var i = 1;
  
  function incrementVariable() {
      i = i + 1;
    }
  
  do { 
    array.pop();
  } while (array.length > 0 && incrementVariable());
  
  return array;
}
=======
  return ('done');
}


function doWhileLoop(array){
  var i = 1;
    function incrementVariable() {
      i = i + 1;
    }
  do { 
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}
>>>>>>> bc1e428ec168c8bea89e3bdffba43db8093819a6
