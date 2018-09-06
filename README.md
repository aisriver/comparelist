# comparelist
Compare two array for 'remove list' 'add list' and same key. 

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install comparelist --save

## step 2
import comparelist from 'comparelist';

- use 1

var arr1 = [ 1, 2, 3, 4 ];
var arr2 = [ 3, 4, 5, 6 ];

var result = comparelist({
    listBefore: arr1, 
    listNow: arr2, 
    // key, no use for this
});

console.log(result);
// { removeList: [ 1, 2 ], addList: [ 5, 6 ], sameKey: [ 3, 4 ] }

- use 2

var arr1 = [ { id: 1, ... }, { id: 2, ... }, { id: 3, ... }, { id: 4, ... } ];
var arr2 = [ { id: 3, ... }, { id: 4, ... }, { id: 5, ... }, { id: 6, ... } ];

var result = comparelist({
    listBefore: arr1, 
    listNow: arr2, 
    key: 'id',
});

console.log(result);
// { removeList: [ { id: 1, ... }, { id: 2, ... } ], addList: [ { id: 5, ... }, { id: 6, ... } ], sameKey: [ 3, 4 ] }

### github
[Jared](https://github.com/aisriver/comparelist.git)