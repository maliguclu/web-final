//Problem-1 = Multiples of 3 and 5
function multiplesOf3and5(number) {
    let toplam = 0;
    for (let i = 0; i <= number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        toplam += i;
      }
    }
    return toplam;
  }
multiplesOf3and5(1000); 

//--------------------------------------------------------------------------------------------
//Problem-11 = Largest product in a grid

var NUM = 4;
var GRID = [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]];
 

var product = 0;
for(var i = NUM - 1; i < (GRID.length - NUM); i++) {
    for(var k = NUM - 1; k < (GRID.length - NUM); k++) {
        product = Math.max(
            product,
          
            // TOP ROW
            (GRID[i - 3][k - 3] * GRID[i - 2][k - 2] * GRID[i - 1][k - 1] * GRID[i][k]), // LT
            (GRID[i - 3][k] * GRID[i - 2][k] * GRID[i - 1][k] * GRID[i][k]), // MT
            (GRID[i - 3][k + 3] * GRID[i - 2][k + 2] * GRID[i - 1][k + 1] * GRID[i][k]), // RT
            
            // MIDDLE ROW
            (GRID[i][k - 3] * GRID[i][k - 2] * GRID[i][k - 1] * GRID[i][k]), // LM
            (GRID[i][k + 3] * GRID[i][k + 2] * GRID[i][k + 1] * GRID[i][k]), // RM
            
            // BOTTOM ROW
            (GRID[i + 3][k - 3] * GRID[i + 2][k - 2] * GRID[i + 1][k + 1] * GRID[i][k]), // LB
            (GRID[i + 3][k] * GRID[i + 2][k] * GRID[i + 1][k] * GRID[i][k]), // MB
            (GRID[i + 3][k + 3] * GRID[i + 2][k + 2] * GRID[i + 1][k + 1] * GRID[i][k]) // RB
        );
    }
}
console.log('Solution: ' + product);

//Problem-21 = Amicable numbers

var bolenBul = function(n) {
    var bolenlerdizi = [];
    for (var i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            bolenlerdizi.push(i);
        }
    }
    return bolenlerdizi;
};

var toplam = function(a, b) {
    return a + b;
};

var d = function(n) {
    return bolenBul(n).reduce(toplam, 0);
};

var dostSayilariTopla = function(n) {
    var dostSayilar = [];
    for (var a = 1; a <= n; a++) {
        var b = d(a);
        if (a !== b && d(b) === a) {
            dostSayilar[a] = true;
            dostSayilar[b] = true;
        }
    }

    var toplam = 0;
    for (var i = 1; i <= n; i++) {
        if (dostSayilar[i]) {
            toplam += i;
        }
    }

    return toplam;
};

console.log(dostSayilariTopla(9999)); 

//Problem-31 = Coin sums
var splitTotal = function me(total, coins, minPos) {
    if (total === 0) return 1;

    var count = 0;
    for (var i = minPos; i < coins.length; i++) {
        if (coins[i] > total) continue;
        count += me(total - coins[i], coins, i);
    }
    return count;
};

console.log(splitTotal(200, [200, 100, 50, 20, 10, 5, 2, 1], 0));

//Problem-41 = Pandigital prime
var splitTotal = function me(total, coins, minPos) {
    if (total === 0) return 1;

    var count = 0;
    for (var i = minPos; i < coins.length; i++) {
        if (coins[i] > total) continue;
        count += me(total - coins[i], coins, i);
    }
    return count;
};

console.log(splitTotal(200, [200, 100, 50, 20, 10, 5, 2, 1], 0));

//--------------------
var time = new Date;
var buffer = [];
var greatest = 0;

function isPrime(number) {
var s = Math.sqrt(number);
for (var b = 2; b <= s; b++) {
    if (number % b === 0) {
        return false;
    }
}
return true;
}

function push(array) {
buffer.push(array.join(''));
}

function generate(length) {
var max = length;
for (var u = 1; u <= max; u++) {
    if (max === 1) {
        push([u]);
    }
    for (var i = 1; i <= max; i++) {
        if (i === u || max < 2) {
            continue;
        }
        if (max === 2) {
            push([u, i]);
        }
        for (var o = 1; o <= max; o++) {
            if (o === i || o === u || max < 3) {
                continue;
            }
            if (max === 3) {
                push([u, i, o]);
            }
            for (var p = 1; p <= max; p++) {
                if (p === i || p === o || p === u || max < 4) {
                    continue;
                }
                if (max === 4) {
                    push([u, i, o, p]);
                }
                for (var a = 1; a <= max; a++) {
                    if (a === i || a === o || a === p || a === u || max < 5) {
                        continue;
                    }
                    if (max === 5) {
                        push([u, i, o, p, a]);
                    }
                    for (var s = 1; s <= max; s++) {
                        if (s === a || s === p || s === o || s === i || s === u || max < 6) {
                            continue;
                        }
                        if (max === 6) {
                            push([u, i, o, p, a, s]);
                        }
                        for (var d = 1; d <= max; d++) {
                            if (d === s || d === a || d === p || d === o || d === i || d === u || max < 7) {
                                continue;
                            }
                            if (max === 7) {
                                push([u, i, o, p, a, s, d]);
                            }
                            for (var f = 1; f <= max; f++) {
                                if (f === d || f === s || f === a || f === p || f === o || f === i || f === u || max < 8) {
                                    continue;
                                }
                                if (max === 8) {
                                    push([u, i, o, p, a, s, d, f]);
                                }
                                for (var g = 1; g <= max; g++) {
                                    if (g === f || g === d || g === s || g === a || g === p || g === o || g === i || g === u || max < 9) {
                                        continue;
                                    }
                                    push([u, i, o, p, a, s, d, f, g]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}

for (var i = 1; i <= 8; i++) {
generate(i);
}

for (var i = buffer.length - 1; i >= 0; i--) {
if (isPrime(buffer[i])) {
    greatest = buffer[i];
    break;
}
}

var time1 = new Date;
console.log(greatest, 'took:', time1 - time, 'ms');


//BÖLÜM-3
//Problem-1 = Two Sum  

  const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};

//Problem-11 = Container With Most Water

var maxArea = function(height) {
    const { length } = height;
    let i = 0;
    let j = length - 1;
    
    let max = 0;
    
    while (i < j) {
        const x = j - i;
        const y = height[height[i] < height[j] ? i++ : j--];
        
        const res = x * y;
            
        if (res > max) max = res;
    }
    
    return max;
};

//Problem-21 = Container With Most Water

var mergeTwoLists = function(l1, l2) {
    let node = l1
    if (!l1) return l2
    if (!l2) return l1
    if (!l1 || !l2) return null
    while (node.next) {
        node = node.next
    }
    node.next = l2
    node = l1
    while (node) {
        let curr = node
        while(curr) {
            if (node.val > curr.val) {
                [curr.val, node.val] = [node.val, curr.val]
            }
            curr = curr.next
        }
        node = node.next
    }
    return l1
};

//Problem-41 = First Missing Positive    
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const arrLen = nums.length;
  const newArray = new Array(arrLen);

  for (let index = 0; index < arrLen; index++) {
    const element = nums[index];
    
    if (element > 0 && element <= arrLen) {
      (newArray[element-1] > 0 ? newArray[element-1] += 1 : newArray[element-1] = 1);
    }
  }

  let i = 0;
  while (newArray[i] && i<arrLen) {
    i++;
  };

  return i+1;
};

//Problem-71 = Simplify Path    
/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-11 09:59:27
 * 
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
  let len = path.length,
      res = [];
  
  for (let i=0; i<len;) {
      let tmp = '';
      while (path.charAt(i) === '/' && i<len) i++;
      while (path.charAt(i) !== '/' && i<len) {
          tmp += path.charAt(i);
          i++;
      }
      
      if (tmp === '..') res.pop();
      else if (tmp !== '.' && tmp !== '') res.push(tmp);
  }
  
  if (res.length === 0) return '/';
  else return '/' + res.join('/');
};

