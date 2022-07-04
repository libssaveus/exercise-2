//Cost complexity ~O(n)
//Time complexity ~O(1)
function canWalkAround(path: string[]): boolean {

  if(path.length === 10) {  // We want spend only 10 minutes walk

    var topDown = 0;
    var leftRight = 0;

    for(let direction of path) {

      switch(direction) {
        case 'n': topDown++;   break;
        case 's': topDown--;   break;
        case 'w': leftRight++; break;
        case 'e': leftRight--; break; 
      }
    }

    return topDown === 0 && leftRight === 0;  // Return to the starting point
  }

  return false;
}
