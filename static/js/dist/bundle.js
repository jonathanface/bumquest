(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],2:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],5:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],7:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":10}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],9:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":11,"./assertThisInitialized":1}],10:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],11:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],12:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":37}],13:[function(require,module,exports){
module.exports = require('./lib/heap');

},{"./lib/heap":14}],14:[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Heap;
  } else {
    window.Heap = Heap;
  }

}).call(this);

},{}],15:[function(require,module,exports){
module.exports = require('./src/PathFinding');

},{"./src/PathFinding":16}],16:[function(require,module,exports){
module.exports = {
    'Heap'                      : require('heap'),
    'Node'                      : require('./core/Node'),
    'Grid'                      : require('./core/Grid'),
    'Util'                      : require('./core/Util'),
    'DiagonalMovement'          : require('./core/DiagonalMovement'),
    'Heuristic'                 : require('./core/Heuristic'),
    'AStarFinder'               : require('./finders/AStarFinder'),
    'BestFirstFinder'           : require('./finders/BestFirstFinder'),
    'BreadthFirstFinder'        : require('./finders/BreadthFirstFinder'),
    'DijkstraFinder'            : require('./finders/DijkstraFinder'),
    'BiAStarFinder'             : require('./finders/BiAStarFinder'),
    'BiBestFirstFinder'         : require('./finders/BiBestFirstFinder'),
    'BiBreadthFirstFinder'      : require('./finders/BiBreadthFirstFinder'),
    'BiDijkstraFinder'          : require('./finders/BiDijkstraFinder'),
    'IDAStarFinder'             : require('./finders/IDAStarFinder'),
    'JumpPointFinder'           : require('./finders/JumpPointFinder'),
};

},{"./core/DiagonalMovement":17,"./core/Grid":18,"./core/Heuristic":19,"./core/Node":20,"./core/Util":21,"./finders/AStarFinder":22,"./finders/BestFirstFinder":23,"./finders/BiAStarFinder":24,"./finders/BiBestFirstFinder":25,"./finders/BiBreadthFirstFinder":26,"./finders/BiDijkstraFinder":27,"./finders/BreadthFirstFinder":28,"./finders/DijkstraFinder":29,"./finders/IDAStarFinder":30,"./finders/JumpPointFinder":35,"heap":13}],17:[function(require,module,exports){
var DiagonalMovement = {
    Always: 1,
    Never: 2,
    IfAtMostOneObstacle: 3,
    OnlyWhenNoObstacles: 4
};

module.exports = DiagonalMovement;
},{}],18:[function(require,module,exports){
var Node = require('./Node');
var DiagonalMovement = require('./DiagonalMovement');

/**
 * The Grid class, which serves as the encapsulation of the layout of the nodes.
 * @constructor
 * @param {number|Array<Array<(number|boolean)>>} width_or_matrix Number of columns of the grid, or matrix
 * @param {number} height Number of rows of the grid.
 * @param {Array<Array<(number|boolean)>>} [matrix] - A 0-1 matrix
 *     representing the walkable status of the nodes(0 or false for walkable).
 *     If the matrix is not supplied, all the nodes will be walkable.  */
function Grid(width_or_matrix, height, matrix) {
    var width;

    if (typeof width_or_matrix !== 'object') {
        width = width_or_matrix;
    } else {
        height = width_or_matrix.length;
        width = width_or_matrix[0].length;
        matrix = width_or_matrix;
    }

    /**
     * The number of columns of the grid.
     * @type number
     */
    this.width = width;
    /**
     * The number of rows of the grid.
     * @type number
     */
    this.height = height;

    /**
     * A 2D array of nodes.
     */
    this.nodes = this._buildNodes(width, height, matrix);
}

/**
 * Build and return the nodes.
 * @private
 * @param {number} width
 * @param {number} height
 * @param {Array<Array<number|boolean>>} [matrix] - A 0-1 matrix representing
 *     the walkable status of the nodes.
 * @see Grid
 */
Grid.prototype._buildNodes = function(width, height, matrix) {
    var i, j,
        nodes = new Array(height);

    for (i = 0; i < height; ++i) {
        nodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            nodes[i][j] = new Node(j, i);
        }
    }


    if (matrix === undefined) {
        return nodes;
    }

    if (matrix.length !== height || matrix[0].length !== width) {
        throw new Error('Matrix size does not fit');
    }

    for (i = 0; i < height; ++i) {
        for (j = 0; j < width; ++j) {
            if (matrix[i][j]) {
                // 0, false, null will be walkable
                // while others will be un-walkable
                nodes[i][j].walkable = false;
            }
        }
    }

    return nodes;
};


Grid.prototype.getNodeAt = function(x, y) {
    return this.nodes[y][x];
};


/**
 * Determine whether the node at the given position is walkable.
 * (Also returns false if the position is outside the grid.)
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @return {boolean} - The walkability of the node.
 */
Grid.prototype.isWalkableAt = function(x, y) {
    return this.isInside(x, y) && this.nodes[y][x].walkable;
};


/**
 * Determine whether the position is inside the grid.
 * XXX: `grid.isInside(x, y)` is wierd to read.
 * It should be `(x, y) is inside grid`, but I failed to find a better
 * name for this method.
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
Grid.prototype.isInside = function(x, y) {
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height);
};


/**
 * Set whether the node on the given position is walkable.
 * NOTE: throws exception if the coordinate is not inside the grid.
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @param {boolean} walkable - Whether the position is walkable.
 */
Grid.prototype.setWalkableAt = function(x, y, walkable) {
    this.nodes[y][x].walkable = walkable;
};


/**
 * Get the neighbors of the given node.
 *
 *     offsets      diagonalOffsets:
 *  +---+---+---+    +---+---+---+
 *  |   | 0 |   |    | 0 |   | 1 |
 *  +---+---+---+    +---+---+---+
 *  | 3 |   | 1 |    |   |   |   |
 *  +---+---+---+    +---+---+---+
 *  |   | 2 |   |    | 3 |   | 2 |
 *  +---+---+---+    +---+---+---+
 *
 *  When allowDiagonal is true, if offsets[i] is valid, then
 *  diagonalOffsets[i] and
 *  diagonalOffsets[(i + 1) % 4] is valid.
 * @param {Node} node
 * @param {DiagonalMovement} diagonalMovement
 */
Grid.prototype.getNeighbors = function(node, diagonalMovement) {
    var x = node.x,
        y = node.y,
        neighbors = [],
        s0 = false, d0 = false,
        s1 = false, d1 = false,
        s2 = false, d2 = false,
        s3 = false, d3 = false,
        nodes = this.nodes;

    // ↑
    if (this.isWalkableAt(x, y - 1)) {
        neighbors.push(nodes[y - 1][x]);
        s0 = true;
    }
    // →
    if (this.isWalkableAt(x + 1, y)) {
        neighbors.push(nodes[y][x + 1]);
        s1 = true;
    }
    // ↓
    if (this.isWalkableAt(x, y + 1)) {
        neighbors.push(nodes[y + 1][x]);
        s2 = true;
    }
    // ←
    if (this.isWalkableAt(x - 1, y)) {
        neighbors.push(nodes[y][x - 1]);
        s3 = true;
    }

    if (diagonalMovement === DiagonalMovement.Never) {
        return neighbors;
    }

    if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        d0 = s3 && s0;
        d1 = s0 && s1;
        d2 = s1 && s2;
        d3 = s2 && s3;
    } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {
        d0 = s3 || s0;
        d1 = s0 || s1;
        d2 = s1 || s2;
        d3 = s2 || s3;
    } else if (diagonalMovement === DiagonalMovement.Always) {
        d0 = true;
        d1 = true;
        d2 = true;
        d3 = true;
    } else {
        throw new Error('Incorrect value of diagonalMovement');
    }

    // ↖
    if (d0 && this.isWalkableAt(x - 1, y - 1)) {
        neighbors.push(nodes[y - 1][x - 1]);
    }
    // ↗
    if (d1 && this.isWalkableAt(x + 1, y - 1)) {
        neighbors.push(nodes[y - 1][x + 1]);
    }
    // ↘
    if (d2 && this.isWalkableAt(x + 1, y + 1)) {
        neighbors.push(nodes[y + 1][x + 1]);
    }
    // ↙
    if (d3 && this.isWalkableAt(x - 1, y + 1)) {
        neighbors.push(nodes[y + 1][x - 1]);
    }

    return neighbors;
};


/**
 * Get a clone of this grid.
 * @return {Grid} Cloned grid.
 */
Grid.prototype.clone = function() {
    var i, j,

        width = this.width,
        height = this.height,
        thisNodes = this.nodes,

        newGrid = new Grid(width, height),
        newNodes = new Array(height);

    for (i = 0; i < height; ++i) {
        newNodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);
        }
    }

    newGrid.nodes = newNodes;

    return newGrid;
};

module.exports = Grid;

},{"./DiagonalMovement":17,"./Node":20}],19:[function(require,module,exports){
/**
 * @namespace PF.Heuristic
 * @description A collection of heuristic functions.
 */
module.exports = {

  /**
   * Manhattan distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} dx + dy
   */
  manhattan: function(dx, dy) {
      return dx + dy;
  },

  /**
   * Euclidean distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy)
   */
  euclidean: function(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Octile distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy) for grids
   */
  octile: function(dx, dy) {
      var F = Math.SQRT2 - 1;
      return (dx < dy) ? F * dx + dy : F * dy + dx;
  },

  /**
   * Chebyshev distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} max(dx, dy)
   */
  chebyshev: function(dx, dy) {
      return Math.max(dx, dy);
  }

};

},{}],20:[function(require,module,exports){
/**
 * A node in grid. 
 * This class holds some basic information about a node and custom 
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node on the grid.
 * @param {number} y - The y coordinate of the node on the grid.
 * @param {boolean} [walkable] - Whether this node is walkable.
 */
function Node(x, y, walkable) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * Whether this node can be walked through.
     * @type boolean
     */
    this.walkable = (walkable === undefined ? true : walkable);
}

module.exports = Node;

},{}],21:[function(require,module,exports){
/**
 * Backtrace according to the parent records and return the path.
 * (including both start and end nodes)
 * @param {Node} node End node
 * @return {Array<Array<number>>} the path
 */
function backtrace(node) {
    var path = [[node.x, node.y]];
    while (node.parent) {
        node = node.parent;
        path.push([node.x, node.y]);
    }
    return path.reverse();
}
exports.backtrace = backtrace;

/**
 * Backtrace from start and end node, and return the path.
 * (including both start and end nodes)
 * @param {Node}
 * @param {Node}
 */
function biBacktrace(nodeA, nodeB) {
    var pathA = backtrace(nodeA),
        pathB = backtrace(nodeB);
    return pathA.concat(pathB.reverse());
}
exports.biBacktrace = biBacktrace;

/**
 * Compute the length of the path.
 * @param {Array<Array<number>>} path The path
 * @return {number} The length of the path
 */
function pathLength(path) {
    var i, sum = 0, a, b, dx, dy;
    for (i = 1; i < path.length; ++i) {
        a = path[i - 1];
        b = path[i];
        dx = a[0] - b[0];
        dy = a[1] - b[1];
        sum += Math.sqrt(dx * dx + dy * dy);
    }
    return sum;
}
exports.pathLength = pathLength;


/**
 * Given the start and end coordinates, return all the coordinates lying
 * on the line formed by these coordinates, based on Bresenham's algorithm.
 * http://en.wikipedia.org/wiki/Bresenham's_line_algorithm#Simplification
 * @param {number} x0 Start x coordinate
 * @param {number} y0 Start y coordinate
 * @param {number} x1 End x coordinate
 * @param {number} y1 End y coordinate
 * @return {Array<Array<number>>} The coordinates on the line
 */
function interpolate(x0, y0, x1, y1) {
    var abs = Math.abs,
        line = [],
        sx, sy, dx, dy, err, e2;

    dx = abs(x1 - x0);
    dy = abs(y1 - y0);

    sx = (x0 < x1) ? 1 : -1;
    sy = (y0 < y1) ? 1 : -1;

    err = dx - dy;

    while (true) {
        line.push([x0, y0]);

        if (x0 === x1 && y0 === y1) {
            break;
        }
        
        e2 = 2 * err;
        if (e2 > -dy) {
            err = err - dy;
            x0 = x0 + sx;
        }
        if (e2 < dx) {
            err = err + dx;
            y0 = y0 + sy;
        }
    }

    return line;
}
exports.interpolate = interpolate;


/**
 * Given a compressed path, return a new path that has all the segments
 * in it interpolated.
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} expanded path
 */
function expandPath(path) {
    var expanded = [],
        len = path.length,
        coord0, coord1,
        interpolated,
        interpolatedLen,
        i, j;

    if (len < 2) {
        return expanded;
    }

    for (i = 0; i < len - 1; ++i) {
        coord0 = path[i];
        coord1 = path[i + 1];

        interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);
        interpolatedLen = interpolated.length;
        for (j = 0; j < interpolatedLen - 1; ++j) {
            expanded.push(interpolated[j]);
        }
    }
    expanded.push(path[len - 1]);

    return expanded;
}
exports.expandPath = expandPath;


/**
 * Smoothen the give path.
 * The original path will not be modified; a new path will be returned.
 * @param {PF.Grid} grid
 * @param {Array<Array<number>>} path The path
 */
function smoothenPath(grid, path) {
    var len = path.length,
        x0 = path[0][0],        // path start x
        y0 = path[0][1],        // path start y
        x1 = path[len - 1][0],  // path end x
        y1 = path[len - 1][1],  // path end y
        sx, sy,                 // current start coordinate
        ex, ey,                 // current end coordinate
        newPath,
        i, j, coord, line, testCoord, blocked;

    sx = x0;
    sy = y0;
    newPath = [[sx, sy]];

    for (i = 2; i < len; ++i) {
        coord = path[i];
        ex = coord[0];
        ey = coord[1];
        line = interpolate(sx, sy, ex, ey);

        blocked = false;
        for (j = 1; j < line.length; ++j) {
            testCoord = line[j];

            if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {
                blocked = true;
                break;
            }
        }
        if (blocked) {
            lastValidCoord = path[i - 1];
            newPath.push(lastValidCoord);
            sx = lastValidCoord[0];
            sy = lastValidCoord[1];
        }
    }
    newPath.push([x1, y1]);

    return newPath;
}
exports.smoothenPath = smoothenPath;


/**
 * Compress a path, remove redundant nodes without altering the shape
 * The original path is not modified
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} The compressed path
 */
function compressPath(path) {

    // nothing to compress
    if(path.length < 3) {
        return path;
    }

    var compressed = [],
        sx = path[0][0], // start x
        sy = path[0][1], // start y
        px = path[1][0], // second point x
        py = path[1][1], // second point y
        dx = px - sx, // direction between the two points
        dy = py - sy, // direction between the two points
        lx, ly,
        ldx, ldy,
        sq, i;

    // normalize the direction
    sq = Math.sqrt(dx*dx + dy*dy);
    dx /= sq;
    dy /= sq;

    // start the new path
    compressed.push([sx,sy]);

    for(i = 2; i < path.length; i++) {

        // store the last point
        lx = px;
        ly = py;

        // store the last direction
        ldx = dx;
        ldy = dy;

        // next point
        px = path[i][0];
        py = path[i][1];

        // next direction
        dx = px - lx;
        dy = py - ly;

        // normalize
        sq = Math.sqrt(dx*dx + dy*dy);
        dx /= sq;
        dy /= sq;

        // if the direction has changed, store the point
        if ( dx !== ldx || dy !== ldy ) {
            compressed.push([lx,ly]);
        }
    }

    // store the last point
    compressed.push([px,py]);

    return compressed;
}
exports.compressPath = compressPath;

},{}],22:[function(require,module,exports){
var Heap       = require('heap');
var Util       = require('../core/Util');
var Heuristic  = require('../core/Heuristic');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * A* path-finder. Based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching 
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function AStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    //admissible. It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
AStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng;

    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        // if reached the end position, construct the path and return it
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    openList.push(neighbor);
                    neighbor.opened = true;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    openList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = AStarFinder;

},{"../core/DiagonalMovement":17,"../core/Heuristic":19,"../core/Util":21,"heap":13}],23:[function(require,module,exports){
var AStarFinder = require('./AStarFinder');

/**
 * Best-First-Search path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BestFirstFinder(opt) {
    AStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BestFirstFinder.prototype = new AStarFinder();
BestFirstFinder.prototype.constructor = BestFirstFinder;

module.exports = BestFirstFinder;

},{"./AStarFinder":22}],24:[function(require,module,exports){
var Heap       = require('heap');
var Util       = require('../core/Util');
var Heuristic  = require('../core/Heuristic');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * A* path-finder.
 * based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function BiAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    //When diagonal movement is allowed the manhattan heuristic is not admissible
    //It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var cmp = function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        },
        startOpenList = new Heap(cmp),
        endOpenList = new Heap(cmp),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng,
        BY_START = 1, BY_END = 2;

    // set the `g` and `f` value of the start node to be 0
    // and push it into the start open list
    startNode.g = 0;
    startNode.f = 0;
    startOpenList.push(startNode);
    startNode.opened = BY_START;

    // set the `g` and `f` value of the end node to be 0
    // and push it into the open open list
    endNode.g = 0;
    endNode.f = 0;
    endOpenList.push(endNode);
    endNode.opened = BY_END;

    // while both the open lists are not empty
    while (!startOpenList.empty() && !endOpenList.empty()) {

        // pop the position of start node which has the minimum `f` value.
        node = startOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_END) {
                return Util.biBacktrace(node, neighbor);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    startOpenList.push(neighbor);
                    neighbor.opened = BY_START;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    startOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor


        // pop the position of end node which has the minimum `f` value.
        node = endOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_START) {
                return Util.biBacktrace(neighbor, node);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - startX), abs(y - startY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    endOpenList.push(neighbor);
                    neighbor.opened = BY_END;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    endOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = BiAStarFinder;

},{"../core/DiagonalMovement":17,"../core/Heuristic":19,"../core/Util":21,"heap":13}],25:[function(require,module,exports){
var BiAStarFinder = require('./BiAStarFinder');

/**
 * Bi-direcitional Best-First-Search path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BiBestFirstFinder(opt) {
    BiAStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BiBestFirstFinder.prototype = new BiAStarFinder();
BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

module.exports = BiBestFirstFinder;

},{"./BiAStarFinder":24}],26:[function(require,module,exports){
var Util = require('../core/Util');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Bi-directional Breadth-First-Search path finder.
 * @constructor
 * @param {object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiBreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}


/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        startOpenList = [], endOpenList = [],
        neighbors, neighbor, node,
        diagonalMovement = this.diagonalMovement,
        BY_START = 0, BY_END = 1,
        i, l;

    // push the start and end nodes into the queues
    startOpenList.push(startNode);
    startNode.opened = true;
    startNode.by = BY_START;

    endOpenList.push(endNode);
    endNode.opened = true;
    endNode.by = BY_END;

    // while both the queues are not empty
    while (startOpenList.length && endOpenList.length) {

        // expand start open list

        node = startOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                // if this node has been inspected by the reversed search,
                // then a path is found.
                if (neighbor.by === BY_END) {
                    return Util.biBacktrace(node, neighbor);
                }
                continue;
            }
            startOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_START;
        }

        // expand end open list

        node = endOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                if (neighbor.by === BY_START) {
                    return Util.biBacktrace(neighbor, node);
                }
                continue;
            }
            endOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_END;
        }
    }

    // fail to find the path
    return [];
};

module.exports = BiBreadthFirstFinder;

},{"../core/DiagonalMovement":17,"../core/Util":21}],27:[function(require,module,exports){
var BiAStarFinder = require('./BiAStarFinder');

/**
 * Bi-directional Dijkstra path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiDijkstraFinder(opt) {
    BiAStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

BiDijkstraFinder.prototype = new BiAStarFinder();
BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

module.exports = BiDijkstraFinder;

},{"./BiAStarFinder":24}],28:[function(require,module,exports){
var Util = require('../core/Util');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Breadth-First-Search path finder.
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = [],
        diagonalMovement = this.diagonalMovement,
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        neighbors, neighbor, node, i, l;

    // push the start pos into the queue
    openList.push(startNode);
    startNode.opened = true;

    // while the queue is not empty
    while (openList.length) {
        // take the front node from the queue
        node = openList.shift();
        node.closed = true;

        // reached the end position
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            // skip this neighbor if it has been inspected before
            if (neighbor.closed || neighbor.opened) {
                continue;
            }

            openList.push(neighbor);
            neighbor.opened = true;
            neighbor.parent = node;
        }
    }
    
    // fail to find the path
    return [];
};

module.exports = BreadthFirstFinder;

},{"../core/DiagonalMovement":17,"../core/Util":21}],29:[function(require,module,exports){
var AStarFinder = require('./AStarFinder');

/**
 * Dijkstra path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function DijkstraFinder(opt) {
    AStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

DijkstraFinder.prototype = new AStarFinder();
DijkstraFinder.prototype.constructor = DijkstraFinder;

module.exports = DijkstraFinder;

},{"./AStarFinder":22}],30:[function(require,module,exports){
var Util       = require('../core/Util');
var Heuristic  = require('../core/Heuristic');
var Node       = require('../core/Node');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Iterative Deeping A Star (IDA*) path-finder.
 *
 * Recursion based on:
 *   http://www.apl.jhu.edu/~hall/AI-Programming/IDA-Star.html
 *
 * Path retracing based on:
 *  V. Nageshwara Rao, Vipin Kumar and K. Ramesh
 *  "A Parallel Implementation of Iterative-Deeping-A*", January 1987.
 *  ftp://ftp.cs.utexas.edu/.snapshot/hourly.1/pub/AI-Lab/tech-reports/UT-AI-TR-87-46.pdf
 *
 * @author Gerard Meier (www.gerardmeier.com)
 *
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 * @param {boolean} opt.trackRecursion Whether to track recursion for
 *     statistical purposes.
 * @param {number} opt.timeLimit Maximum execution time. Use <= 0 for infinite.
 */
function IDAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.trackRecursion = opt.trackRecursion || false;
    this.timeLimit = opt.timeLimit || Infinity; // Default: no time limit.

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    // admissible, it should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path. When an empty array is returned, either
 * no path is possible, or the maximum execution time is reached.
 *
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
IDAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    // Used for statistics:
    var nodesVisited = 0;

    // Execution time limitation:
    var startTime = new Date().getTime();

    // Heuristic helper:
    var h = function(a, b) {
        return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    }.bind(this);

    // Step cost from a to b:
    var cost = function(a, b) {
        return (a.x === b.x || a.y === b.y) ? 1 : Math.SQRT2;
    };

    /**
     * IDA* search implementation.
     *
     * @param {Node} The node currently expanding from.
     * @param {number} Cost to reach the given node.
     * @param {number} Maximum search depth (cut-off value).
     * @param {Array<Array<number>>} The found route.
     * @param {number} Recursion depth.
     *
     * @return {Object} either a number with the new optimal cut-off depth,
     * or a valid node instance, in which case a path was found.
     */
    var search = function(node, g, cutoff, route, depth) {
        nodesVisited++;

        // Enforce timelimit:
        if (this.timeLimit > 0 &&
            new Date().getTime() - startTime > this.timeLimit * 1000) {
            // Enforced as "path-not-found".
            return Infinity;
        }

        var f = g + h(node, end) * this.weight;

        // We've searched too deep for this iteration.
        if (f > cutoff) {
            return f;
        }

        if (node == end) {
            route[depth] = [node.x, node.y];
            return node;
        }

        var min, t, k, neighbour;

        var neighbours = grid.getNeighbors(node, this.diagonalMovement);

        // Sort the neighbours, gives nicer paths. But, this deviates
        // from the original algorithm - so I left it out.
        //neighbours.sort(function(a, b){
        //    return h(a, end) - h(b, end);
        //});

        
        /*jshint -W084 *///Disable warning: Expected a conditional expression and instead saw an assignment
        for (k = 0, min = Infinity; neighbour = neighbours[k]; ++k) {
        /*jshint +W084 *///Enable warning: Expected a conditional expression and instead saw an assignment
            if (this.trackRecursion) {
                // Retain a copy for visualisation. Due to recursion, this
                // node may be part of other paths too.
                neighbour.retainCount = neighbour.retainCount + 1 || 1;

                if(neighbour.tested !== true) {
                    neighbour.tested = true;
                }
            }

            t = search(neighbour, g + cost(node, neighbour), cutoff, route, depth + 1);

            if (t instanceof Node) {
                route[depth] = [node.x, node.y];

                // For a typical A* linked list, this would work:
                // neighbour.parent = node;
                return t;
            }

            // Decrement count, then determine whether it's actually closed.
            if (this.trackRecursion && (--neighbour.retainCount) === 0) {
                neighbour.tested = false;
            }

            if (t < min) {
                min = t;
            }
        }

        return min;

    }.bind(this);

    // Node instance lookups:
    var start = grid.getNodeAt(startX, startY);
    var end   = grid.getNodeAt(endX, endY);

    // Initial search depth, given the typical heuristic contraints,
    // there should be no cheaper route possible.
    var cutOff = h(start, end);

    var j, route, t;

    // With an overflow protection.
    for (j = 0; true; ++j) {

        route = [];

        // Search till cut-off depth:
        t = search(start, 0, cutOff, route, 0);

        // Route not possible, or not found in time limit.
        if (t === Infinity) {
            return [];
        }

        // If t is a node, it's also the end node. Route is now
        // populated with a valid path to the end node.
        if (t instanceof Node) {
            return route;
        }

        // Try again, this time with a deeper cut-off. The t score
        // is the closest we got to the end node.
        cutOff = t;
    }

    // This _should_ never to be reached.
    return [];
};

module.exports = IDAStarFinder;

},{"../core/DiagonalMovement":17,"../core/Heuristic":19,"../core/Node":20,"../core/Util":21}],31:[function(require,module,exports){
/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = require('./JumpPointFinderBase');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Path finder using the Jump Point Search algorithm which always moves
 * diagonally irrespective of the number of obstacles.
 */
function JPFAlwaysMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase();
JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFAlwaysMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x + dx, y + dy)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                }
                if (!grid.isWalkableAt(x + 1, y)) {
                    neighbors.push([x + 1, y + dy]);
                }
                if (!grid.isWalkableAt(x - 1, y)) {
                    neighbors.push([x - 1, y + dy]);
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                }
                if (!grid.isWalkableAt(x, y + 1)) {
                    neighbors.push([x + dx, y + 1]);
                }
                if (!grid.isWalkableAt(x, y - 1)) {
                    neighbors.push([x + dx, y - 1]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Always);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFAlwaysMoveDiagonally;

},{"../core/DiagonalMovement":17,"./JumpPointFinderBase":36}],32:[function(require,module,exports){
/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = require('./JumpPointFinderBase');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there is at most one obstacle.
 */
function JPFMoveDiagonallyIfAtMostOneObstacle(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) || grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) || grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y) && grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                    if (!grid.isWalkableAt(x + 1, y)) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (!grid.isWalkableAt(x - 1, y)) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                    if (!grid.isWalkableAt(x, y + 1)) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (!grid.isWalkableAt(x, y - 1)) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.IfAtMostOneObstacle);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfAtMostOneObstacle;

},{"../core/DiagonalMovement":17,"./JumpPointFinderBase":36}],33:[function(require,module,exports){
/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = require('./JumpPointFinderBase');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there are no obstacles.
 */
function JPFMoveDiagonallyIfNoObstacles(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfNoObstacles.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        // if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            // (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            // return [x, y];
        // }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if (dx !== 0) {
            if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
                (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
                return [x, y];
            }
        }
        else if (dy !== 0) {
            if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
                (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
                return [x, y];
            }
            // When moving vertically, must check for horizontal jump points
            // if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
                // return [x, y];
            // }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) && grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
        }
        // search horizontally/vertically
        else {
            var isNextWalkable;
            if (dx !== 0) {
                isNextWalkable = grid.isWalkableAt(x + dx, y);
                var isTopWalkable = grid.isWalkableAt(x, y + 1);
                var isBottomWalkable = grid.isWalkableAt(x, y - 1);

                if (isNextWalkable) {
                    neighbors.push([x + dx, y]);
                    if (isTopWalkable) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (isBottomWalkable) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
                if (isTopWalkable) {
                    neighbors.push([x, y + 1]);
                }
                if (isBottomWalkable) {
                    neighbors.push([x, y - 1]);
                }
            }
            else if (dy !== 0) {
                isNextWalkable = grid.isWalkableAt(x, y + dy);
                var isRightWalkable = grid.isWalkableAt(x + 1, y);
                var isLeftWalkable = grid.isWalkableAt(x - 1, y);

                if (isNextWalkable) {
                    neighbors.push([x, y + dy]);
                    if (isRightWalkable) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (isLeftWalkable) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
                if (isRightWalkable) {
                    neighbors.push([x + 1, y]);
                }
                if (isLeftWalkable) {
                    neighbors.push([x - 1, y]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.OnlyWhenNoObstacles);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfNoObstacles;

},{"../core/DiagonalMovement":17,"./JumpPointFinderBase":36}],34:[function(require,module,exports){
/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = require('./JumpPointFinderBase');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Path finder using the Jump Point Search algorithm allowing only horizontal
 * or vertical movements.
 */
function JPFNeverMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase();
JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFNeverMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    if (dx !== 0) {
        if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
            (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
            return [x, y];
        }
    }
    else if (dy !== 0) {
        if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
            (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
            return [x, y];
        }
        //When moving vertically, must check for horizontal jump points
        if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
            return [x, y];
        }
    }
    else {
        throw new Error("Only horizontal and vertical movements are allowed");
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFNeverMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        if (dx !== 0) {
            if (grid.isWalkableAt(x, y - 1)) {
                neighbors.push([x, y - 1]);
            }
            if (grid.isWalkableAt(x, y + 1)) {
                neighbors.push([x, y + 1]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
        }
        else if (dy !== 0) {
            if (grid.isWalkableAt(x - 1, y)) {
                neighbors.push([x - 1, y]);
            }
            if (grid.isWalkableAt(x + 1, y)) {
                neighbors.push([x + 1, y]);
            }
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Never);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFNeverMoveDiagonally;

},{"../core/DiagonalMovement":17,"./JumpPointFinderBase":36}],35:[function(require,module,exports){
/**
 * @author aniero / https://github.com/aniero
 */
var DiagonalMovement = require('../core/DiagonalMovement');
var JPFNeverMoveDiagonally = require('./JPFNeverMoveDiagonally');
var JPFAlwaysMoveDiagonally = require('./JPFAlwaysMoveDiagonally');
var JPFMoveDiagonallyIfNoObstacles = require('./JPFMoveDiagonallyIfNoObstacles');
var JPFMoveDiagonallyIfAtMostOneObstacle = require('./JPFMoveDiagonallyIfAtMostOneObstacle');

/**
 * Path finder using the Jump Point Search algorithm
 * @param {Object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {DiagonalMovement} opt.diagonalMovement Condition under which diagonal
 *      movement will be allowed.
 */
function JumpPointFinder(opt) {
    opt = opt || {};
    if (opt.diagonalMovement === DiagonalMovement.Never) {
        return new JPFNeverMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.Always) {
        return new JPFAlwaysMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        return new JPFMoveDiagonallyIfNoObstacles(opt);
    } else {
        return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
    }
}

module.exports = JumpPointFinder;

},{"../core/DiagonalMovement":17,"./JPFAlwaysMoveDiagonally":31,"./JPFMoveDiagonallyIfAtMostOneObstacle":32,"./JPFMoveDiagonallyIfNoObstacles":33,"./JPFNeverMoveDiagonally":34}],36:[function(require,module,exports){
/**
 * @author imor / https://github.com/imor
 */
var Heap       = require('heap');
var Util       = require('../core/Util');
var Heuristic  = require('../core/Heuristic');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Base class for the Jump Point Search algorithm
 * @param {object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function JumpPointFinderBase(opt) {
    opt = opt || {};
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.trackJumpRecursion = opt.trackJumpRecursion || false;
}

/**
 * Find and return the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
JumpPointFinderBase.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = this.openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = this.startNode = grid.getNodeAt(startX, startY),
        endNode = this.endNode = grid.getNodeAt(endX, endY), node;

    this.grid = grid;


    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        if (node === endNode) {
            return Util.expandPath(Util.backtrace(endNode));
        }

        this._identifySuccessors(node);
    }

    // fail to find the path
    return [];
};

/**
 * Identify successors for the given node. Runs a jump point search in the
 * direction of each available neighbor, adding any points found to the open
 * list.
 * @protected
 */
JumpPointFinderBase.prototype._identifySuccessors = function(node) {
    var grid = this.grid,
        heuristic = this.heuristic,
        openList = this.openList,
        endX = this.endNode.x,
        endY = this.endNode.y,
        neighbors, neighbor,
        jumpPoint, i, l,
        x = node.x, y = node.y,
        jx, jy, dx, dy, d, ng, jumpNode,
        abs = Math.abs, max = Math.max;

    neighbors = this._findNeighbors(node);
    for(i = 0, l = neighbors.length; i < l; ++i) {
        neighbor = neighbors[i];
        jumpPoint = this._jump(neighbor[0], neighbor[1], x, y);
        if (jumpPoint) {

            jx = jumpPoint[0];
            jy = jumpPoint[1];
            jumpNode = grid.getNodeAt(jx, jy);

            if (jumpNode.closed) {
                continue;
            }

            // include distance, as parent may not be immediately adjacent:
            d = Heuristic.octile(abs(jx - x), abs(jy - y));
            ng = node.g + d; // next `g` value

            if (!jumpNode.opened || ng < jumpNode.g) {
                jumpNode.g = ng;
                jumpNode.h = jumpNode.h || heuristic(abs(jx - endX), abs(jy - endY));
                jumpNode.f = jumpNode.g + jumpNode.h;
                jumpNode.parent = node;

                if (!jumpNode.opened) {
                    openList.push(jumpNode);
                    jumpNode.opened = true;
                } else {
                    openList.updateItem(jumpNode);
                }
            }
        }
    }
};

module.exports = JumpPointFinderBase;

},{"../core/DiagonalMovement":17,"../core/Heuristic":19,"../core/Util":21,"heap":13}],37:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],38:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Area = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

var _pathfinding = _interopRequireDefault(require("pathfinding"));

var _CombatManager = require("./CombatManager.jsx");

var _PathfindWorker = _interopRequireDefault(require("./PathfindWorker.jsx"));

var _WebWorker = _interopRequireDefault(require("./WebWorker.jsx"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Area = /*#__PURE__*/function (_Engine) {
  (0, _inherits2["default"])(Area, _Engine);

  var _super = _createSuper(Area);

  function Area(id, canvas) {
    var _this;

    (0, _classCallCheck2["default"])(this, Area);
    _this = _super.call(this);
    _this.id = id;
    _this.combat = null;
    _this.loaderImg = new Image();
    console.log('init area with id', _this.id);
    _this.canvas = canvas;
    _this.walkPoints = [];

    _this.walkPoints.push({
      x: 0,
      y: 673
    });

    _this.walkPoints.push({
      x: 329,
      y: 673
    });

    _this.walkPoints.push({
      x: 440,
      y: 373
    });

    _this.walkPoints.push({
      x: 508,
      y: 373
    });

    _this.walkPoints.push({
      x: 658,
      y: 673
    });

    _this.walkPoints.push({
      x: 1023,
      y: 673
    });

    _this.walkPoints.push({
      x: 1023,
      y: 767
    });

    _this.walkPoints.push({
      x: 0,
      y: 767
    });

    _this.walkPoints.push({
      x: 0,
      y: 673
    });

    _this.actors = [];
    _this.decor = []; //398px / 30 feet = 13.3

    _this.height = 768;
    _this.width = 1024;
    _this.vanishingPoint = 202;
    _this.walkPath;
    _this.combatOn = false;
    _this.grid = null;

    _this.setupPathWorker();

    return _this;
  }

  (0, _createClass2["default"])(Area, [{
    key: "getPlayer",
    value: function getPlayer() {
      for (var i = 0; i < this.actors.length; i++) {
        if (this.actors[i].type = _Globals.Globals.OBJECT_TYPE_PLAYER) {
          return this.actors[i];
        }
      }

      return null;
    }
  }, {
    key: "setupPathWorker",
    value: function setupPathWorker() {
      var _this2 = this;

      this.PathWorker = new _WebWorker["default"](_PathfindWorker["default"]);
      this.PathWorker.postMessage({
        command: 'generateWalkPath',
        path: this.walkPoints
      });
      this.PathWorker.addEventListener('message', function (event) {
        console.log('got ', event.data.command, 'back from worker');

        switch (event.data.command) {
          case 'clickedGround':
          case 'walkToObject':
            _this2.getPlayer().clickedGroundPathResults(event.data.path);

            break;

          case 'combatMouseMove':
            _this2.combat.combatMouseMoveResults(event.data);

            break;

          case 'playerCheckRange':
            if (event.data.path) {
              event.data.path = event.data.path.splice(0, event.data.path.length - 1);
            }

            if (event.data.path && Math.ceil(event.data.path.length / 4) > _this2.getPlayer().equipped.range) {
              _this2.print("You're out of range.");

              return;
            }

            if (!_this2.combatOn) {
              _this2.enterCombat('player');
            }

            console.log(event.data);

            _this2.combat.handlePlayerAttack(_this2.combat.getNPCByID(event.data.npc));

            break;

          case 'npcCheckRange':
            if (event.data.path) {
              event.data.path = event.data.path.splice(0, event.data.path.length - 1);
            }

            var npc = _this2.combat.getNPCByID(event.data.npc);

            console.log('npc', npc);

            if (event.data.path && Math.ceil(event.data.path.length / 4) > npc.equipped.range) {
              _this2.print(npc.name + " is out of range.");

              return;
            }

            if (!_this2.combatOn) {
              _this2.enterCombat(npc);
            }

            console.log(event.data);

            _this2.combat.handleNPCAttack(npc, npc.targetAcquired);

            break;
        }
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this3 = this;

      console.log(this.canvas);
      this.canvas.setBackgroundImage('img/areas/area01.png', function () {
        console.log('rendering to', _this3);

        _this3.drawWalkpath();

        _this3.canvas.renderAll();
      });
    }
  }, {
    key: "findPath",
    value: function findPath(obj) {
      obj.width = this.width;
      obj.height = this.height;
      obj.gridwidth = _Globals.Globals.GRID_SQUARE_WIDTH;
      obj.gridheight = _Globals.Globals.GRID_SQUARE_HEIGHT;
      obj.path = this.walkPoints;
      this.PathWorker.postMessage(obj);
    }
  }, {
    key: "drawWalkpath",
    value: function drawWalkpath() {
      var _this4 = this;

      this.walkPath = this.canvas.contextTop;
      this.walkPath.beginPath();
      this.walkPath.moveTo(this.walkPoints[0].x, this.walkPoints[0].y);

      for (var i = 1; i < this.walkPoints.length; i++) {
        this.walkPath.lineTo(this.walkPoints[i].x, this.walkPoints[i].y);
      }

      this.walkPath.closePath();
      this.walkPath.fillStyle = "#7fffd4";
      this.walkPath.globalAlpha = 0;
      this.walkPath.fill();
      this.walkPath.save();

      this.walkPath.canvas.onclick = function (event) {
        var player = _this4.getPlayer();

        if (player.targetAcquired) {
          return;
        }

        player.cancelAnimations();

        var bounds = _this4.walkPath.canvas.getBoundingClientRect();

        var start = {};
        start.x = player.getX();
        start.y = player.getY();
        var end = {};
        end.x = Math.round(event.clientX - bounds.left);
        end.y = Math.round(event.clientY - bounds.top);

        if (_this4.walkPath.isPointInPath(end.x, end.y)) {
          var obj = {};
          obj.command = 'clickedGround';
          obj.start = start;
          obj.end = end;

          _this4.findPath(obj);
        }
      };

      this.loaderImg.dispatchEvent(new Event(_Globals.Globals.EVENT_AREA_READY));
    }
  }, {
    key: "endCombatTurn",
    value: function endCombatTurn() {
      if (this.combat) {
        this.combat.endPlayerTurn();
      }
    }
  }, {
    key: "enterCombat",
    value: function enterCombat(initiated) {
      console.log('starting combat');

      if (this.getPlayer()) {
        this.combatOn = true;
        this.combat = new _CombatManager.CombatManager(this, initiated);
      }
    }
  }, {
    key: "exitCombat",
    value: function exitCombat() {
      this.combatOn = false;
    }
  }]);
  return Area;
}(_Engine2.Engine);

exports.Area = Area;

},{"./CombatManager.jsx":39,"./Engine.jsx":41,"./Globals.jsx":42,"./PathfindWorker.jsx":44,"./WebWorker.jsx":47,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9,"pathfinding":15}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CombatManager = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Globals = require("./Globals.jsx");

var CombatManager = /*#__PURE__*/function () {
  function CombatManager(area, initiated) {
    (0, _classCallCheck2["default"])(this, CombatManager);
    this.area = area;
    this.player = area.getPlayer();
    this.canvas = area.canvas;
    this.playerTurn = false;

    if (initiated == 'player') {
      this.playerTurn = true;
    }

    this.moveLine = null;
    this.moveText = null;
    this.addMouseActions();
    this.combatSequence = 0;
    this.enemies = [];
    this.allies = [];
    this.updateMovementPointsDisplay(this.player.remainingMoves);

    for (var i = 0; i < this.area.actors.length; i++) {
      switch (this.area.actors[i].team) {
        case 1:
          this.allies.push(this.area.actors[i]);
          break;

        case 3:
          this.enemies.push(this.area.actors[i]);
          break;
      }
    }

    console.log(this.allies, this.enemies);
    this.order = this.determineCombatOrder();
    console.log(this.order);
    this.nextTurn();
  }

  (0, _createClass2["default"])(CombatManager, [{
    key: "handlePlayerAttack",
    value: function handlePlayerAttack(enemy) {
      console.log(this.player, enemy);

      if (!this.player) {
        return;
      }

      if (!this.player.equipped) {
        return;
      }

      if (this.player.equipped.type != _Globals.Globals.OBJECT_TYPE_WEAPON) {
        return;
      }

      if (this.player.getX() <= enemy.getX()) {
        this.player.runAttackAnimation('right');
      } else {
        this.player.runAttackAnimation('left');
      }

      this.player.remainingMoves -= this.player.equipped.speed;
      this.updateMovementPointsDisplay(this.player.remainingMoves);
      /*
      let attackResult = await this.queryBackend('GET', Globals.API_DIR + 'attack/' + this.state.player.id + '/' + enemy.id);
      if (attackResult) {
      }*/
      //89% (attacker's weapon skill) - 5% (defender's Armor Class) = 84%

      var toHit = this.player.characterSheet.skills.shootin;

      if (this.player.equipped.melee) {
        toHit = this.player.characterSheet.skills.scrappin;
      }

      var hitChance = toHit - enemy.characterSheet.stats.ac + Math.ceil(this.player.characterSheet.stats.luck / 2);

      var roll = _Globals.Globals.randomInt(1, 100);

      if (roll <= hitChance) {
        var damArr = this.player.equipped.damage.split('d');
        var damage = 0;

        for (var i = 0; i < damArr[0]; i++) {
          damage += _Globals.Globals.randomInt(1, damArr[1]);
        }

        var crit = _Globals.Globals.randomInt(1, 100);

        if (crit <= this.player.characterSheet.stats.critical) {
          this.area.print('You critically hit ' + _Globals.Globals.ucwords(enemy.name) + ' for ' + damage * _Globals.Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
        } else {
          this.area.print('You hit ' + _Globals.Globals.ucwords(enemy.name) + ' for ' + damage + ' points of damage.');
        }
      } else {
        var critFail = _Globals.Globals.randomInt(1, 100);

        if (critFail <= _Globals.Globals.CRITICAL_FAILURE_CHANCE) {
          var saveRoll = _Globals.Globals.randomInt(1, 100);

          if (saveRoll >= this.player.characterSheet.stats.luck) {
            this.area.print('You critically missed and lost the rest of your turn.');
            this.player.remainingMoves = 0;
            this.updateMovementPointsDisplay(this.player.remainingMoves);
          } else {
            this.area.print('You missed.');
          }
        } else {
          this.area.print('You missed.');
        }
      }
    }
  }, {
    key: "handleNPCAttack",
    value: function handleNPCAttack(npc, target) {
      console.log('npc attacking!');
      console.log(npc, target);

      if (!npc.equipped) {
        return;
      }

      if (npc.equipped.type != _Globals.Globals.OBJECT_TYPE_WEAPON) {
        return;
      }

      npc.remainingMoves -= npc.equipped.speed; //89% (attacker's weapon skill) - 5% (defender's Armor Class) = 84%

      var toHit = npc.characterSheet.skills.shootin;

      if (npc.equipped.melee) {
        toHit = npc.characterSheet.skills.scrappin;
      }

      var hitChance = toHit - target.characterSheet.stats.ac + Math.ceil(npc.characterSheet.stats.luck / 2);

      var roll = _Globals.Globals.randomInt(1, 100);

      if (roll <= hitChance) {
        var damArr = npc.equipped.damage.split('d');
        var damage = 0;

        for (var i = 0; i < damArr[0]; i++) {
          damage += _Globals.Globals.randomInt(1, damArr[1]);
        }

        var crit = _Globals.Globals.randomInt(1, 100);

        if (crit <= npc.characterSheet.stats.critical) {
          this.area.print(_Globals.Globals.ucwords(npc.name) + ' critically hits ' + _Globals.Globals.ucwords(target.name) + ' for ' + damage * _Globals.Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
        } else {
          this.area.print(_Globals.Globals.ucwords(npc.name) + ' hits ' + _Globals.Globals.ucwords(target.name) + ' for ' + damage + ' points of damage.');
        }
      } else {
        var critFail = _Globals.Globals.randomInt(1, 100);

        if (critFail <= _Globals.Globals.CRITICAL_FAILURE_CHANCE) {
          var saveRoll = _Globals.Globals.randomInt(1, 100);

          if (saveRoll >= this.player.characterSheet.stats.luck) {
            this.area.print(_Globals.Globals.ucwords(npc.name) + ' critically missed and lost the rest of his turn.');
            npc.remainingMoves = 0;
          } else {
            this.area.print(_Globals.Globals.ucwords(npc.name) + ' missed.');
          }
        } else {
          this.area.print(_Globals.Globals.ucwords(npc.name) + ' missed.');
        }
      }
    }
  }, {
    key: "checkRemainingNPCMoves",
    value: function checkRemainingNPCMoves(npc) {
      console.log('npc mvs', npc.remainingMoves);

      if (npc.remainingMoves <= 0) {
        console.log('npc turn complete');
        clearInterval(this.npcTurnInterval);
        this.combatSequence++;

        if (this.allies.length) {
          this.nextTurn();
        }
      }
    }
  }, {
    key: "chooseTarget",
    value: function chooseTarget(npc) {
      /*
      let lastDist = null;
      let target = null;
      if (npc.team == 3) {
        for (let i=0; i < this.allies.length; i++) {
          console.log(npc.getX(), npc.getY(), this.allies[i].getX(), this.allies[i].getY());
          let path = this.area.findPath({'x':npc.getX(), 'y':npc.getY()}, {'x':this.allies[i].getX(), 'y':this.allies[i].getY()});
          if (path) {
            path = path.splice(0, path.length-1);
          }
          console.log(path);
          if (!lastDist || path && path.length < lastDist) {
            target = this.allies[i];
            lastDist = path.length;
            return target;
          }
        }
        return this.player;
      }
      return null;*/
      return this.player;
    }
  }, {
    key: "handleNPCEndTurn",
    value: function handleNPCEndTurn(npc) {
      console.log('ending turn for', npc);
      npc.remainingMoves = 0;
    }
  }, {
    key: "runNPCAttacks",
    value: function runNPCAttacks(npc) {
      console.log('running npc attacks', npc.remainingMoves);
      var turnsLeft = npc.remainingMoves;

      if (turnsLeft >= npc.equipped.speed) {
        for (var i = 0; i < turnsLeft; i++) {
          this.handleNPCAttack(npc, npc.targetAcquired);
        }
      } else {
        npc.remainingMoves = 0;
      }
    }
  }, {
    key: "doNPCTurn",
    value: function doNPCTurn(npc) {
      var _this = this;

      console.log('running npc turn', npc);
      this.npcTurnInterval = setInterval(function () {
        _this.checkRemainingNPCMoves(npc);
      }, 100);

      if (!npc.targetAcquired) {
        npc.targetAcquired = this.chooseTarget(npc);
      }

      console.log('npc target', npc.targetAcquired);
      var enemyPos = {
        'x': npc.targetAcquired.getX(),
        'y': npc.targetAcquired.getY()
      };
      var obj = {};
      obj.command = 'npcCheckRange';
      obj.npc = npc.id;
      obj.start = {
        'x': npc.getX(),
        'y': npc.getY()
      };
      obj.end = enemyPos;
      var path = this.area.findPath(obj);
      console.log('pt', path);

      if (path) {
        path = path.splice(0, path.length - 1);
      }

      if (Math.ceil(path.length / 4) > npc.equipped.range) {
        if (path.length / 4 > npc.characterSheet.stats.speed) {
          path = path.splice(0, npc.characterSheet.stats.speed * 4);
        }

        for (var i = 0; i < path.length; i++) {
          path[i][0] *= _Globals.Globals.GRID_SQUARE_WIDTH;
          path[i][1] *= _Globals.Globals.GRID_SQUARE_HEIGHT;
        }

        if (npc.remainingMoves - Math.ceil(path.length / 4) >= npc.equipped.speed) {
          npc.walkRoute(path, this.runNPCAttacks.bind(self, npc));
        } else {
          npc.walkRoute(path, this.handleNPCEndTurn.bind(self, npc));
        }
      } else {
        this.runNPCAttacks(npc);
      }
    }
  }, {
    key: "checkRemainingPlayerMoves",
    value: function checkRemainingPlayerMoves() {
      console.log('player remaining moves', this.player.remainingMoves);

      if (this.player.remainingMoves <= 0) {
        this.canvas.remove(this.moveLine);
        this.canvas.remove(this.moveText);
        this.moveLine = null;
        this.moveText = null;
        this.playerTurn = false;
        console.log('player turn complete');
        clearInterval(this.playerTurnInterval);
        this.combatSequence++;
        console.log('remaining enemies', this.enemies);

        if (this.enemies.length) {
          this.nextTurn();
        }
      }
    }
  }, {
    key: "nextTurn",
    value: function nextTurn(sequence) {
      this.player.remainingMoves = this.player.characterSheet.stats.speed;
      var self = this;

      if (this.combatSequence >= this.order.length && this.enemies.length) {
        this.combatSequence = 0;
      }

      if (this.order[this.combatSequence]) {
        this.order[this.combatSequence].remainingMoves = this.order[this.combatSequence].characterSheet.stats.speed;

        if (this.order[this.combatSequence].type != _Globals.Globals.OBJECT_TYPE_PLAYER) {
          this.playerTurn = false;
          console.log('npc turn');
          this.doNPCTurn(this.order[this.combatSequence]);
        } else {
          console.log('player turn');
          this.updateMovementPointsDisplay(this.player.remainingMoves);
          this.playerTurn = true;
          self.playerTurnInterval = setInterval(function () {
            self.checkRemainingPlayerMoves();
          }, 100);
        }
      }
    }
  }, {
    key: "getNPCByID",
    value: function getNPCByID(id) {
      for (var i = 0; i < this.enemies.length; i++) {
        if (this.enemies[i].id == id) {
          return this.enemies[i];
        }
      }

      return null;
    }
  }, {
    key: "determineCombatOrder",
    value: function determineCombatOrder() {
      var order = [];
      var playerAdded = false;
      var npcCombatants = [];

      if (this.initiated == 'player') {
        //order.push(this.player);
        playerAdded = true;
        npcCombatants = this.enemies;
      } else {
        //order.push(this.getNPCByID(this.initiated));
        for (var i = 0; i < this.enemies.length; i++) {
          if (this.enemies[i].id != this.initiated) {
            npcCombatants.push(this.enemies[i]);
          }
        }
      }

      npcCombatants.sort(function (a, b) {
        return a.characterSheet.stats.speed > b.characterSheet.stats.speed ? 1 : -1;
      });

      for (var _i = 0; _i < npcCombatants.length; _i++) {
        if (npcCombatants[_i].characterSheet.stats.speed > this.player.characterSheet.stats.speed) {
          order.push(npcCombatants[_i]);

          if (_i == this.enemies.length - 1 && !playerAdded) {
            order.push(this.player);
          }
        } else {
          if (!playerAdded) {
            order.push(this.player);
            playerAdded = true;
          }

          order.push(npcCombatants[_i]);
        }
      }

      return order;
    }
  }, {
    key: "endPlayerTurn",
    value: function endPlayerTurn() {
      this.player.remainingMoves = 0;
      console.log('end player turn');
    }
  }, {
    key: "updateMovementPointsDisplay",
    value: function updateMovementPointsDisplay(value) {
      document.querySelector('#movement_points').innerHTML = value;
    }
  }, {
    key: "combatMouseMoveResults",
    value: function combatMouseMoveResults(obj) {
      console.log('wtf', obj.path);
      var self = this;

      if (obj.path && obj.path.length) {
        if (!self.moveLine && !self.player.isMoving) {
          var coords = [obj.start.x, obj.start.y, obj.start.x, obj.start.y];
          self.moveLine = new fabric.Line(coords, {
            stroke: 'black',
            strokeWidth: 3,
            selectable: false
          });
          self.canvas.add(self.moveLine);
        }

        if (!self.moveText && !self.player.isMoving) {
          self.moveText = new fabric.Text('X', {
            left: 100,
            top: 100,
            fontFamily: 'verdana,geneva,sans-serif',
            fontSize: 18,
            fontWeight: 'bold',
            fill: 'green'
          });
          self.canvas.add(self.moveText);
        }

        if (self.moveLine) {
          self.moveLine.set({
            'x2': obj.end.x,
            'y2': obj.end.y
          });
        }

        var _textPos = Object.assign({}, obj.end); //textPos.x += 10;
        //textPos.y -= 7;


        console.log('move text', Math.ceil(obj.path.length / 4).toString(), 'remmoves', self.player.remainingMoves);
        self.moveText.set({
          text: Math.ceil(obj.path.length / 4).toString(),
          left: _textPos.x,
          top: _textPos.y
        });

        if (obj.path.length / 4 <= self.player.remainingMoves) {
          self.moveLine.set({
            stroke: 'green'
          });
          self.moveText.set({
            fill: 'green'
          });
        } else {
          self.moveLine.set({
            stroke: 'red'
          });
          self.moveText.set({
            fill: 'red'
          });
        }
      } else {
        self.moveLine.set({
          stroke: 'black'
        });
        self.moveText.set({
          text: 'X',
          left: textPos.x,
          top: textPos.y,
          fill: 'black'
        });
      }
    }
  }, {
    key: "addMouseActions",
    value: function addMouseActions() {
      var self = this;
      this.canvas.on('mouse:out', function (event) {
        this.remove(self.moveLine);
        this.remove(self.moveText);
        self.moveLine = null;
        self.moveText = null;
        self.area.PathWorker.postMessage({
          command: 'cancelThread'
        });
      });
      this.canvas.on('mouse:move', function (event) {
        var player = self.player;

        if (self.playerTurn) {
          //self.area.PathWorker.postMessage({command:'cancelThread'});
          if (player.targetAcquired) {
            if (self.moveLine) {
              this.remove(self.moveLine);
              self.moveLine = null;
            }

            if (self.moveText) {
              this.remove(self.moveText);
              self.moveText = null;
            }

            return;
          }

          var start = {};
          start.x = player.getX();
          start.y = player.getY();
          var end = {};
          end.x = Math.round(event.pointer.x);
          end.y = Math.round(event.pointer.y);

          if (!self.moveLine && !player.isMoving) {
            var coords = [start.x, start.y, start.x, start.y];
            self.moveLine = new fabric.Line(coords, {
              stroke: 'black',
              strokeWidth: 3,
              selectable: false
            });
            self.canvas.add(self.moveLine);
          }

          if (!self.moveText && !player.isMoving) {
            self.moveText = new fabric.Text('X', {
              left: 100,
              top: 100,
              fontFamily: 'verdana,geneva,sans-serif',
              fontSize: 18,
              fontWeight: 'bold',
              fill: 'green'
            });
            self.canvas.add(self.moveText);
          }

          if (self.moveLine) {
            self.moveLine.set({
              'x2': end.x,
              'y2': end.y
            });
          }

          var _textPos2 = Object.assign({}, end);

          _textPos2.x += 10;
          _textPos2.y -= 7;

          if (self.moveText && self.moveLine) {
            if (self.area.walkPath.isPointInPath(end.x, end.y)) {
              var obj = {};
              obj.command = 'combatMouseMove';
              obj.start = start;
              obj.end = end;
              self.area.findPath(obj);
            } else {
              self.moveText.set({
                text: 'X',
                left: _textPos2.x,
                top: _textPos2.y,
                fill: 'red'
              });
            }
          }

          this.renderAll();
        }
      });
    }
  }]);
  return CombatManager;
}();

exports.CombatManager = CombatManager;

},{"./Globals.jsx":42,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],40:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decor = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Decor = /*#__PURE__*/function (_Engine) {
  (0, _inherits2["default"])(Decor, _Engine);

  var _super = _createSuper(Decor);

  function Decor(data, canvas) {
    var _this;

    (0, _classCallCheck2["default"])(this, Decor);
    _this = _super.call(this);
    _this.type = _Globals.Globals.OBJECT_TYPE_DECOR;
    _this.id = data.id;
    _this.name = data.name;
    _this.description = data.descr;
    _this.canvas = canvas;
    _this.location;
    _this.imgURL = data.img;
    _this.container = data.container;
    _this.door = data.door;
    _this.open = data.open;
    _this.orgX = data.x;
    _this.orgY = data.y;
    _this.height = 0;
    _this.width = 0;
    _this.maxHeight = 0;
    _this.maxWidth = 0;
    _this.img = new Image();
    return _this;
  }

  (0, _createClass2["default"])(Decor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.img.onload = function () {
        _this2.maxWidth = _this2.img.width;
        _this2.maxHeight = _this2.img.height;
        _this2.height = _this2.img.height;
        _this2.width = _this2.img.width;

        if (!_this2.sprite) {
          _this2.sprite = new fabric.Image(_this2.img, {
            left: _this2.orgX,
            top: _this2.orgY,
            selectable: false,
            hoverCursor: 'arrow'
          });
        }

        _this2.x = _this2.orgX + _this2.width / 2;
        _this2.y = _this2.orgY + _this2.height;
        _this2.sprite.metadata = {};
        _this2.sprite.metadata = _this2;

        _this2.canvas.add(_this2.sprite);

        _this2.canvas.add(_this2.sprite);

        _this2.img.dispatchEvent(new Event(_Globals.Globals.EVENT_DECOR_READY));
      };

      this.img.src = 'img/objects/' + this.imgURL;
    }
  }, {
    key: "getX",
    value: function getX() {
      return Math.round(this.x);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Math.round(this.y);
    }
  }]);
  return Decor;
}(_Engine2.Engine);

exports.Decor = Decor;

},{"./Engine.jsx":41,"./Globals.jsx":42,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Globals = require("./Globals.jsx");

var Engine = /*#__PURE__*/function () {
  function Engine() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Engine);
    this.player = null;
    this.currentArea = null;
    this.canvas = new fabric.Canvas('c', {
      fireRightClick: true,
      stopContextMenu: true
    });
    this.canvas.on('object:added', function (e) {
      console.log('Event after:render Triggered');
      console.log(e);
      e.target.on('mouseover', function () {
        if (e.target.metadata) {
          _this.print('You see: ' + _Globals.Globals.ucwords(e.target.metadata.name) + '.');

          if (_this.currentArea.combatOn || _this.player.isTargeting) {
            console.log('targeting npc');
            _this.player.targetAcquired = e.target.metadata;
            e.target.hoverCursor = 'crosshair';
          }
        }
      });
      e.target.on('mouseout', function () {
        if (e.target.metadata && _this.player.targetAcquired == e.target.metadata) {
          _this.player.targetAcquired = null;
          e.target.hoverCursor = 'arrow';
        }
      });
      e.target.on('mouseup', function (me) {
        switch (me.button) {
          case 1:
            if (me.target.metadata && me.target.metadata.type == _Globals.Globals.OBJECT_TYPE_NPC) {
              var enemyPos = {
                'x': me.target.metadata.getX(),
                'y': me.target.metadata.getY()
              };
              var obj = {};
              obj.command = 'playerCheckRange';
              obj.npc = me.target.metadata.id;
              obj.start = {
                'x': _this.player.getX(),
                'y': _this.player.getY()
              };
              obj.end = enemyPos;

              _this.currentArea.findPath(obj);
            }

            break;

          case 3:
            if (me.target.metadata) {
              _this.renderRightClickOptions(me);
            }

            break;
        }
      });
    });
    this.characterSheet = {};
    this.characterSheet.stats = {};
    /*F.A.C.I.A.L.S
    Fortitude
    Agility
    Charisma
    Intelligence
    Attention
    Luck
    Strength*/

    this.characterSheet.stats.fortitude = 5;
    this.characterSheet.stats.agility = 5;
    this.characterSheet.stats.charisma = 5;
    this.characterSheet.stats.intelligence = 5;
    this.characterSheet.stats.attention = 5;
    this.characterSheet.stats.luck = 5;
    this.characterSheet.stats.strength = 5; //derived stats

    this.characterSheet.stats.speed = this.characterSheet.stats.agility / 2 + this.characterSheet.stats.attention / 2;
    this.characterSheet.stats.tolerance = this.characterSheet.stats.fortitude * 5;
    this.characterSheet.stats.smell = Math.round(this.characterSheet.stats.charisma / 2);
    this.characterSheet.stats.hp = 50 + this.characterSheet.stats.fortitude;
    this.characterSheet.stats.ac = 5 + Math.round(this.characterSheet.stats.agility / 2 + this.characterSheet.stats.fortitude / 2);
    this.characterSheet.stats.critical = this.characterSheet.stats.luck;
    this.characterSheet.traits = {};
    this.characterSheet.traits.autism = false;
    this.characterSheet.skills = {};
    this.characterSheet.skills.beggin = 5 + (this.characterSheet.stats.charisma + this.characterSheet.stats.attention);
    this.characterSheet.skills.shootin = 5 + this.characterSheet.stats.attention;
    this.characterSheet.skills.scrappin = 5 + (this.characterSheet.stats.strength + this.characterSheet.stats.attention);
    this.characterSheet.skills.wrappin = 5 + (this.characterSheet.stats.attention + this.characterSheet.stats.intelligence);
    this.characterSheet.skills.fixin = 5 + (this.characterSheet.stats.intelligence + this.characterSheet.stats.agility);
    this.characterSheet.skills.learnin = 5 + this.characterSheet.stats.intelligence;
    this.characterSheet.skills.rantin = 5 + (this.characterSheet.stats.intelligence + this.characterSheet.stats.attention);
    this.characterSheet.skills.shittin = 5 + (this.characterSheet.stats.fortitude + this.characterSheet.stats.charisma);
    this.characterSheet.skills.sleepin = 5 + this.characterSheet.stats.fortitude;
  }

  (0, _createClass2["default"])(Engine, [{
    key: "renderRightClickOptions",
    value: function renderRightClickOptions(mouseinfo) {
      var _this2 = this;

      console.log('render right click');
      var element = mouseinfo.target;
      var menuTimeout = 2000;
      this.removeAllContextMenus();
      var div = document.createElement('div');

      div.oncontextmenu = function (e) {
        e.preventDefault();
        return false;
      };

      div.classList.add('contextMenu');
      console.log('mouse', mouseinfo);
      div.style.left = mouseinfo.absolutePointer.x + document.querySelector('.canvas-container').offsetLeft + 'px';
      div.style.top = mouseinfo.absolutePointer.y + 'px';
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(_Globals.Globals.ucwords(element.metadata.name)));
      ul.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('View'));

      li.oncontextmenu = function () {
        return false;
      };

      li.onclick = function () {
        _this2.print(_Globals.Globals.upperFirstChar(element.metadata.description));

        _this2.removeAllContextMenus();
      };

      ul.appendChild(li);

      if ((element.metadata.container || element.metadata.door) && !element.metadata.open) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode('Open'));

        li.oncontextmenu = function () {
          return false;
        };

        li.onclick = function () {
          _this2.player.tryToOpen(element.metadata);

          _this2.removeAllContextMenus();
        };

        ul.appendChild(li);
      } else if ((element.metadata.container || element.metadata.door) && element.metadata.open) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode('Close'));

        li.oncontextmenu = function () {
          return false;
        };

        li.onclick = function () {
          _this2.player.tryToClose(element.metadata);

          _this2.removeAllContextMenus();
        };

        ul.appendChild(li);
      }

      if (element.metadata.container) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode('Search'));

        li.oncontextmenu = function () {
          return false;
        };

        li.onclick = function () {
          _this2.player.tryToSearch(element.metadata);

          _this2.removeAllContextMenus();
        };

        ul.appendChild(li);
      }

      div.appendChild(ul);
      document.body.appendChild(div);
      var timer = setTimeout(function () {
        if (div && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, menuTimeout);

      div.onmouseover = function () {
        clearTimeout(timer);
      };

      div.onmouseout = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (div && div.parentNode) {
            div.parentNode.removeChild(div);
          }
        }, menuTimeout);
      };
    }
  }, {
    key: "removeAllContextMenus",
    value: function removeAllContextMenus() {
      var menus = document.querySelectorAll('.contextMenu');

      for (var i = 0; i < menus.length; i++) {
        menus[i].parentNode.removeChild(menus[i]);
      }
    }
  }, {
    key: "showCharacterSheet",
    value: function () {
      var _showCharacterSheet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var div, closex, stats, skills, derived, smellData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_Globals.Globals.isShowingSheet) {
                  _context.next = 35;
                  break;
                }

                _Globals.Globals.isShowingSheet = true;
                div = document.createElement('div');
                div.classList.add('sheet_holder');
                document.body.appendChild(div);
                _context.next = 7;
                return this.getTemplate('sheet.html', div);

              case 7:
                closex = div.querySelector('header a');
                closex.onclick = this.showCharacterSheet;
                stats = div.querySelectorAll('.base_stats .box');
                stats[0].innerHTML = this.state.player.stats.fortitude;
                stats[1].innerHTML = this.state.player.stats.attention;
                stats[2].innerHTML = this.state.player.stats.charisma;
                stats[3].innerHTML = this.state.player.stats.intelligence;
                stats[4].innerHTML = this.state.player.stats.agility;
                stats[5].innerHTML = this.state.player.stats.luck;
                stats[6].innerHTML = this.state.player.stats.strength;
                skills = div.querySelectorAll('.skills .value');
                skills[0].innerHTML = this.state.player.skills.beggin + '%';
                skills[1].innerHTML = this.state.player.skills.shootin + '%';
                skills[2].innerHTML = this.state.player.skills.scrappin + '%';
                skills[3].innerHTML = this.state.player.skills.wrappin + '%';
                skills[4].innerHTML = this.state.player.skills.fixin + '%';
                skills[5].innerHTML = this.state.player.skills.learnin + '%';
                skills[6].innerHTML = this.state.player.skills.rantin + '%';
                skills[7].innerHTML = this.state.player.skills.shittin + '%';
                skills[8].innerHTML = this.state.player.skills.sleepin + '%';
                derived = div.querySelectorAll('.stats_info .value');
                derived[0].innerHTML = this.state.player.stats.tolerance + '%';
                derived[1].innerHTML = this.state.player.stats.speed;
                smellData = this.state.player.getSmellLabel(this.state.player.stats.smell);
                derived[2].style.color = smellData[1];
                derived[2].innerHTML = smellData[0];
                _context.next = 37;
                break;

              case 35:
                _Globals.Globals.isShowingSheet = false;
                document.body.removeChild(document.body.querySelector('.sheet_holder'));

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function showCharacterSheet() {
        return _showCharacterSheet.apply(this, arguments);
      }

      return showCharacterSheet;
    }()
  }, {
    key: "enterTargetingMode",
    value: function enterTargetingMode() {
      this.currentArea.getPlayer().isTargeting = !this.currentArea.getPlayer().isTargeting;
    }
  }, {
    key: "endCombatTurn",
    value: function endCombatTurn() {
      this.currentArea.endCombatTurn();
    }
  }, {
    key: "print",
    value: function print(text) {
      var div = document.querySelector('.console');
      div.innerHTML += '<p>' + text + '</p>';
      div.innerHTML += '<p></p>';
      div.scrollTop = div.scrollHeight;
    }
  }, {
    key: "queryBackend",
    value: function queryBackend(type, url) {
      console.log('querying ' + url);
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: type,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (!response.ok) {
            reject({
              'code': response.status,
              'message': response.statusText
            });
          }

          response.json().then(function (json) {
            console.log(json);
            resolve(json);
          })["catch"](function (error) {
            return reject(JSON.parse(error));
          });
        })["catch"](function (error) {
          return reject(JSON.parse(error));
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(url, div) {
      return new Promise(function (resolve, reject) {
        fetch(_Globals.Globals.TEMPLATE_DIR + url, {
          method: 'GET',
          Headers: {
            'Content-Type': 'text/html'
          }
        }).then(function (response) {
          div.innerHTML = response;
          resolve();
        })["catch"](function (error) {
          return console.log(error);
        });
      });
    }
  }]);
  return Engine;
}();

exports.Engine = Engine;

},{"./Globals.jsx":42,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/regenerator":12}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Globals = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Globals = /*#__PURE__*/function () {
  function Globals() {
    (0, _classCallCheck2["default"])(this, Globals);
    (0, _defineProperty2["default"])(this, "apiKey", null);
    (0, _defineProperty2["default"])(this, "isShowingSheet", false);
  }

  (0, _createClass2["default"])(Globals, null, [{
    key: "randomInt",
    value: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "upperFirstChar",
    value: function upperFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }, {
    key: "ucwords",
    value: function ucwords(str) {
      return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
      });
    }
  }, {
    key: "distanceBetween",
    value: function distanceBetween(point1, point2, area) {
      var path = area.findPath(point1, point2);

      if (path) {
        path = path.splice(0, path.length - 1);
      }

      return Math.ceil(path.length / 4);
    }
  }, {
    key: "isIntersecting",
    value: function isIntersecting(obj1, obj2) {
      return obj1.intersectsWithObject(obj2) || obj1.isContainedWithinObject(obj2) || obj2.isContainedWithinObject(obj1);
    }
  }]);
  return Globals;
}();

exports.Globals = Globals;
(0, _defineProperty2["default"])(Globals, "ROOT_ELEMENT", document.getElementById('root'));
(0, _defineProperty2["default"])(Globals, "AREAS_DIR", '/img/areas/');
(0, _defineProperty2["default"])(Globals, "TEMPLATE_DIR", '/templates/');
(0, _defineProperty2["default"])(Globals, "API_DIR", '/api/');
(0, _defineProperty2["default"])(Globals, "ANIMATIONS_DIR", '/img/animations/');
(0, _defineProperty2["default"])(Globals, "GRID_SQUARE_WIDTH", 25);
(0, _defineProperty2["default"])(Globals, "GRID_SQUARE_HEIGHT", 25);
(0, _defineProperty2["default"])(Globals, "EVENT_PLAYER_READY", 'playerReady');
(0, _defineProperty2["default"])(Globals, "EVENT_AREA_READY", 'areaReady');
(0, _defineProperty2["default"])(Globals, "EVENT_NPC_READY", 'npcReady');
(0, _defineProperty2["default"])(Globals, "EVENT_WEAPON_READY", 'weaponReady');
(0, _defineProperty2["default"])(Globals, "EVENT_DECOR_READY", 'decorReady');
(0, _defineProperty2["default"])(Globals, "EVENT_PATH_WALKED", 'pathWalked');
(0, _defineProperty2["default"])(Globals, "EVENT_PATH_NODE_WALKED", 'pathNodeWalked');
(0, _defineProperty2["default"])(Globals, "OBJECT_TYPE_PLAYER", 1);
(0, _defineProperty2["default"])(Globals, "OBJECT_TYPE_NPC", 2);
(0, _defineProperty2["default"])(Globals, "OBJECT_TYPE_WEAPON", 3);
(0, _defineProperty2["default"])(Globals, "OBJECT_TYPE_DECOR", 4);
(0, _defineProperty2["default"])(Globals, "CRITICAL_FAILURE_CHANCE", 10);
(0, _defineProperty2["default"])(Globals, "CRITICAL_DAMAGE_MODIFIER", 10);
(0, _defineProperty2["default"])(Globals, "handleAccessDenied", function (callback) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', Globals.API_URL + 'token', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    xhr.onload = function () {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.response);
        Globals.apiKey = json.token;

        if (callback) {
          callback();
        }

        resolve(true);
      } else {
        try {
          reject(false);
        } catch (e) {
          console.log(e);
        }
      }
    };

    xhr.send('email=' + Globals.apiEmail + '&pass=' + Globals.apiPass);
  });
});

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NPC = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

var _Weapon = require("./Weapon.jsx");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NPC = /*#__PURE__*/function (_Engine) {
  (0, _inherits2["default"])(NPC, _Engine);

  var _super = _createSuper(NPC);

  function NPC(id, canvas) {
    var _this;

    (0, _classCallCheck2["default"])(this, NPC);
    _this = _super.call(this);
    _this.type = _Globals.Globals.OBJECT_TYPE_NPC;
    _this.id = id;
    _this.name = 'some asshole';
    _this.description = 'someone who defies description';
    _this.canvas = canvas;
    _this.location = null;
    _this.x = 0;
    _this.y = 0;
    _this.imgX = 900;
    _this.imgY = 400;
    _this.height = 0;
    _this.width = 0;
    _this.maxHeight = 0;
    _this.maxWidth = 0;
    _this.animatingCount = 0;
    _this.npcDefault = new Image();
    _this.sheet = _objectSpread({}, _this.characterSheet);
    _this.team = 3;
    _this.targetAcquired = null;
    _this.isMoving = false;
    _this.usingMelee = true;
    _this.inventory = [];
    var fist = new _Weapon.Weapon('b1ae51b1-c9b9-11e9-bc97-0e49f1f8e77c');
    fist.img.addEventListener(_Globals.Globals.EVENT_WEAPON_READY, event = function event() {
      _this.stow(fist);

      _this.equip(fist);
    });
    fist.load();
    return _this;
  }

  (0, _createClass2["default"])(NPC, [{
    key: "stow",
    value: function stow(item) {
      this.inventory.push(item);
    }
  }, {
    key: "drop",
    value: function drop(item) {
      if (!this.inventory.includes(item)) {
        return;
      }

      this.inventory.splice(this.inventory.indexOf(item), 1);
    }
  }, {
    key: "equip",
    value: function equip(item) {
      if (item.type != _Globals.Globals.OBJECT_TYPE_WEAPON) {
        return;
      }

      if (!this.inventory.includes(item)) {
        return;
      }

      this.equipped = item; //document.querySelector('img.equipped').src = this.equipped.img.src;
    }
  }, {
    key: "getEquippedWeapon",
    value: function getEquippedWeapon() {
      return this.equipped;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.npcDefault.onload = function () {
        _this2.maxWidth = _this2.npcDefault.width;
        _this2.maxHeight = _this2.npcDefault.height;
        _this2.height = _this2.npcDefault.height;
        _this2.width = _this2.npcDefault.width;
        _this2.sprite = new fabric.Image(_this2.npcDefault, {
          left: _this2.imgX,
          top: _this2.imgY,
          selectable: false,
          hoverCursor: 'arrow'
        });
        _this2.sprite.metadata = {};
        _this2.sprite.metadata = _this2;

        _this2.canvas.add(_this2.sprite);

        _this2.npcDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_NPC_READY));
      };

      this.npcDefault.src = 'img/people/generic_enemy.png';
      this.npcLeft = new Image();
      this.npcLeft.src = 'img/people/generic_enemy_left.png';
      this.npcRight = new Image();
      this.npcRight.src = 'img/people/generic_enemy_right.png';
      this.npcUp = new Image();
      this.npcUp.src = 'img/people/generic_enemy_backwards.png';
    }
  }, {
    key: "resample",
    value: function resample() {
      this.scaleSpriteByYCoord(this.imgY + this.height);
      this.imgX = this.imgX + Math.abs(this.maxWidth - this.width);
      this.imgY = this.imgY + Math.abs(this.maxHeight - this.height);
      this.sprite.set('top', this.imgY);
      this.sprite.set('left', this.imgX);
      this.x = this.imgX + this.width / 2;
      this.y = this.imgY + this.height;
      this.sprite.setCoords();
    }
  }, {
    key: "calculateSizeFromYPos",
    value: function calculateSizeFromYPos(y) {
      var perc = (y - this.location.vanishingPoint) / (this.location.height - this.location.vanishingPoint);
      var newH = this.maxHeight * perc;
      var newW = this.maxWidth / this.maxHeight * newH;
      return {
        w: newW,
        h: newH
      };
    }
  }, {
    key: "scaleSpriteByYCoord",
    value: function scaleSpriteByYCoord(y) {
      var oldH = this.height;
      var oldW = this.width;

      if (!oldH) {
        oldH = this.maxHeight;
      }

      if (!oldW) {
        oldW = this.maxWidth;
      }

      var size = this.calculateSizeFromYPos(y);
      this.sprite.scaleToHeight(size.h);
      this.sprite.scaleToWidth(size.w);
      this.height = size.h;
      this.width = size.w;
    }
  }, {
    key: "getX",
    value: function getX() {
      return Math.round(this.x);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Math.round(this.y);
    }
  }, {
    key: "adjustZPosition",
    value: function adjustZPosition() {
      var myZ = this.canvas.getObjects().indexOf(this.sprite);

      for (var i = 0; i < this.location.decor.length; i++) {
        if (_Globals.Globals.isIntersecting(this.sprite, this.location.decor[i].sprite)) {
          var decorZ = this.canvas.getObjects().indexOf(this.location.decor[i].sprite);

          if (this.location.decor[i].getY() <= this.getY() && decorZ >= myZ) {
            this.sprite.moveTo(decorZ + 1);
          } else if (this.location.decor[i].getY() > this.getY() && decorZ <= myZ) {
            this.sprite.moveTo(decorZ - 1);
          }
        }
      }

      for (var _i = 0; _i < this.location.actors.length; _i++) {
        if (this.location.actors[_i] == this) {
          continue;
        }

        if (_Globals.Globals.isIntersecting(this.sprite, this.location.actors[_i].sprite)) {
          var actorZ = this.canvas.getObjects().indexOf(this.location.actors[_i].sprite);

          if (this.location.actors[_i].getY() <= this.getY() && actorZ >= myZ) {
            this.sprite.moveTo(actorZ + 1);
          } else if (this.location.actors[_i].getY() > this.getY() && actorZ <= myZ) {
            this.sprite.moveTo(actorZ - 1);
          }
        }
      }

      if (_Globals.Globals.isIntersecting(this.sprite, this.location.getPlayer().sprite)) {
        var playerZ = this.canvas.getObjects().indexOf(this.location.getPlayer().sprite);

        if (this.location.getPlayer().getY() <= this.getY() && playerZ >= myZ) {
          this.sprite.moveTo(playerZ + 1);
        } else if (this.location.getPlayer().getY() > this.getY() && playerZ <= myZ) {
          this.sprite.moveTo(playerZ - 1);
        }
      }
    }
  }, {
    key: "animateWalk",
    value: function animateWalk(path, callback) {
      var _this3 = this;

      if (this.animatingCount < path.length) {
        if (path[this.animatingCount][0] < this.getX()) {
          this.sprite.setElement(this.npcLeft);
        } else if (path[this.animatingCount][0] > this.getX()) {
          this.sprite.setElement(this.npcRight);
        } else if (path[this.animatingCount][1] < this.getY()) {
          this.sprite.setElement(this.npcUp);
        } else if (path[this.animatingCount][0] > this.getY()) {
          this.sprite.setElement(this.npcDefault);
        } //console.log('mv', path[this.animatingCount][0] - this.width/2, path[this.animatingCount][1] - this.height);


        this.scaleSpriteByYCoord(path[this.animatingCount][1]);
        this.sprite.animate('left', path[this.animatingCount][0] - this.width / 2, {
          duration: 100,
          onChange: this.canvas.renderAll.bind(this.canvas)
        });
        this.sprite.animate('top', path[this.animatingCount][1] - this.height, {
          duration: 100,
          onChange: this.canvas.renderAll.bind(this.canvas),
          onComplete: function onComplete() {
            _this3.animatingCount++;

            if (_this3.animatingCount % 4 === 0) {
              _this3.remainingMoves--;
              console.log('rem', _this3.remainingMoves);
            }

            _this3.animateWalk(path, callback);
          }
        });
      } else {
        this.remainingMoves--;

        if (path[path.length - 1][0] < path[path.length - 2][0]) {
          this.sprite.setElement(this.npcLeft);
        } else if (path[path.length - 1][0] > path[path.length - 2][0]) {
          this.sprite.setElement(this.npcRight);
        } else if (path[path.length - 1][1] < path[path.length - 2][1]) {
          this.sprite.setElement(this.npcUp);
        } else if (path[path.length - 1][1] > path[path.length - 2][1]) {
          this.sprite.setElement(this.npcDefault);
        } else {
          this.sprite.setElement(this.npcDefault);
        }

        this.x = path[path.length - 1][0];
        this.y = path[path.length - 1][1];
        this.scaleSpriteByYCoord(path[path.length - 1][1]);
        this.sprite.animate('left', path[path.length - 1][0] - this.width / 2, {
          duration: 100,
          onChange: this.canvas.renderAll.bind(this.canvas)
        });
        this.sprite.animate('top', path[path.length - 1][1] - this.height, {
          duration: 100,
          onChange: this.canvas.renderAll.bind(this.canvas)
        });

        if (callback) {
          callback();
        }

        this.isMoving = false;
      }

      this.adjustZPosition();
    }
  }, {
    key: "walkRoute",
    value: function walkRoute(path, callback) {
      console.log('walkroute callback', callback);
      this.isMoving = true;
      this.animatingCount = 0;
      this.animateWalk(path, callback);
    }
  }]);
  return NPC;
}(_Engine2.Engine);

exports.NPC = NPC;

},{"./Engine.jsx":41,"./Globals.jsx":42,"./Weapon.jsx":46,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  self.importScripts(self.location.origin + '/js/third-party/pathfinding-browser.min.js');
  var canvas = new OffscreenCanvas(1024, 768);
  self.walkPath = canvas.getContext('2d');
  self.cancel = false;
  self.addEventListener('message', function (event) {
    // eslint-disable-line no-restricted-globals
    if (!event) return;

    switch (event.data.command) {
      case 'generateWalkPath':
        console.log('make walkpath');
        self.walkPath.beginPath();
        self.walkPath.moveTo(event.data.path[0].x, event.data.path[0].y);

        for (var i = 1; i < event.data.path.length; i++) {
          self.walkPath.lineTo(event.data.path[i].x, event.data.path[i].y);
        }

        self.walkPath.closePath();
        self.walkPath.fill();
        self.walkPath.save();
        break;

      case 'cancelThread':
        self.cancel = true;
        break;

      default:
        if (!self.cancel) {
          var scaleW = Math.ceil(event.data.width / event.data.gridwidth * 4);
          var scaleH = Math.ceil(event.data.height / event.data.gridheight);
          var grid = new PF.Grid(scaleW, scaleH);

          for (var _i = 0; _i < scaleW; _i++) {
            for (var s = 0; s < scaleH; s++) {
              if (self.walkPath.isPointInPath(_i * event.data.gridwidth, s * event.data.gridheight)) {
                //console.log('true', i, s);
                grid.setWalkableAt(_i, s, true);
              } else {
                //console.log('false', i, s);
                grid.setWalkableAt(_i, s, false);
              }
            }
          }

          var pathfinder = new PF.DijkstraFinder({
            allowDiagonal: true,
            dontCrossCorners: false
          });
          var obj = event.data;
          obj.path = pathfinder.findPath(Math.round(obj.start.x / obj.gridwidth), Math.round(obj.start.y / obj.gridheight), Math.round(obj.end.x / obj.gridwidth), Math.round(obj.end.y / obj.gridheight), grid);
          postMessage(obj);
        } else {
          self.cancel = false;
        }

    }
  });
};

exports["default"] = _default;

},{}],45:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

var _Weapon = require("./Weapon.jsx");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Player = /*#__PURE__*/function (_Engine) {
  (0, _inherits2["default"])(Player, _Engine);

  var _super = _createSuper(Player);

  function Player(id, canvas) {
    var _this;

    (0, _classCallCheck2["default"])(this, Player);
    _this = _super.call(this);
    _this.type = _Globals.Globals.OBJECT_TYPE_PLAYER;
    _this.id = id;
    _this.location;
    _this.canvas = canvas;
    _this.name = 'you';
    _this.description = "you've seen better days, for sure";
    _this.x = 0;
    _this.y = 0;
    _this.imgX = 40;
    _this.imgY = 400;
    _this.height = 0;
    _this.width = 0;
    _this.maxHeight = 0;
    _this.maxWidth = 0;
    _this.animatingCount = 0;
    _this.bumDefault = new Image();
    _this.animInterval;
    _this.sheet = _objectSpread({}, _this.characterSheet);
    _this.remainingMoves = _this.characterSheet.stats.speed;
    _this.isMoving = false;
    _this.isTargeting = false;
    _this.targetAcquired = null;
    _this.inventory = [];
    _this.team = 1;
    var fist = new _Weapon.Weapon('b1ae51b1-c9b9-11e9-bc97-0e49f1f8e77c');
    fist.img.addEventListener(_Globals.Globals.EVENT_WEAPON_READY, event = function event() {
      _this.stow(fist);

      _this.equip(fist);
    });
    fist.load();
    return _this;
  }

  (0, _createClass2["default"])(Player, [{
    key: "stow",
    value: function stow(item) {
      this.inventory.push(item);
    }
  }, {
    key: "drop",
    value: function drop(item) {
      if (!this.inventory.includes(item)) {
        return;
      }

      this.inventory.splice(this.inventory.indexOf(item), 1);
    }
  }, {
    key: "equip",
    value: function equip(item) {
      if (item.type != _Globals.Globals.OBJECT_TYPE_WEAPON) {
        return;
      }

      if (!this.inventory.includes(item)) {
        return;
      }

      this.equipped = item;
      document.querySelector('img.equipped').src = this.equipped.img.src;
    }
  }, {
    key: "getEquippedWeapon",
    value: function getEquippedWeapon() {
      return this.equipped;
    }
  }, {
    key: "getSmellLabel",
    value: function getSmellLabel(smell) {
      var smells = ['NOXIOUS', 'DISGUSTING', 'FOUL', 'NOT GREAT', 'MILD'];
      var colors = ['#f55442', '#f5c242', '#eff542', '#b9f542', '#42f57b'];
      return [smells[smell], colors[smell]];
    }
  }, {
    key: "render",
    value: function () {
      var _render = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        var dbInfo, i, img;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.bumDefault.onload = function () {
                  _this2.maxWidth = _this2.bumDefault.width;
                  _this2.maxHeight = _this2.bumDefault.height;
                  _this2.height = _this2.bumDefault.height;
                  _this2.width = _this2.bumDefault.width;
                  _this2.sprite = new fabric.Image(_this2.bumDefault, {
                    left: _this2.imgX,
                    top: _this2.imgY,
                    selectable: false,
                    hoverCursor: 'arrow'
                  });
                  _this2.sprite.metadata = {};
                  _this2.sprite.metadata = _this2;

                  _this2.canvas.add(_this2.sprite);

                  console.log('loaded player sprite');

                  _this2.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PLAYER_READY));
                };

                this.bumDefault.src = 'img/people/bum_default.png';
                this.bumLeft = new Image();
                this.bumLeft.src = 'img/people/bum_left.png';
                this.bumRight = new Image();
                this.bumRight.src = 'img/people/bum_right.png';
                this.bumUp = new Image();
                this.bumUp.src = 'img/people/bum_backwards.png';
                this.walkRightFrames = [];
                this.walkLeftFrames = [];
                this.walkUpFrames = [];
                this.walkDownFrames = [];
                this.talkFrames = [];
                this.punchLeftFrames = [];
                this.punchRightFrames = [];
                _context.next = 17;
                return this.queryBackend('GET', _Globals.Globals.API_DIR + 'animations/' + this.id);

              case 17:
                dbInfo = _context.sent;

                if (!dbInfo) {
                  _context.next = 43;
                  break;
                }

                i = 0;

              case 20:
                if (!(i < dbInfo.length)) {
                  _context.next = 43;
                  break;
                }

                img = new Image();
                img.src = _Globals.Globals.ANIMATIONS_DIR + dbInfo[i].url;
                _context.t0 = dbInfo[i].type;
                _context.next = _context.t0 === 'walk_left' ? 26 : _context.t0 === 'walk_right' ? 28 : _context.t0 === 'walk_up' ? 30 : _context.t0 === 'walk_down' ? 32 : _context.t0 === 'talk' ? 34 : _context.t0 === 'punch_left' ? 36 : _context.t0 === 'punch_right' ? 38 : 40;
                break;

              case 26:
                this.walkLeftFrames.push(img);
                return _context.abrupt("break", 40);

              case 28:
                this.walkRightFrames.push(img);
                return _context.abrupt("break", 40);

              case 30:
                this.walkUpFrames.push(img);
                return _context.abrupt("break", 40);

              case 32:
                this.walkDownFrames.push(img);
                return _context.abrupt("break", 40);

              case 34:
                this.talkFrames.push(img);
                return _context.abrupt("break", 40);

              case 36:
                this.punchLeftFrames.push(img);
                return _context.abrupt("break", 40);

              case 38:
                this.punchRightFrames.push(img);
                return _context.abrupt("break", 40);

              case 40:
                i++;
                _context.next = 20;
                break;

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "resample",
    value: function resample() {
      console.log("resample", this);
      this.scaleSpriteByYCoord(this.imgY + this.height);
      console.log(this.width);
      this.imgX = this.imgX + Math.abs(this.maxWidth - this.width);
      this.imgY = this.imgY + Math.abs(this.maxHeight - this.height);
      this.sprite.set('top', this.imgY);
      this.sprite.set('left', this.imgX);
      this.x = this.imgX + this.width / 2;
      this.y = this.imgY + this.height;
      this.sprite.setCoords();
      console.log(this.x, this.y);
    }
  }, {
    key: "calculateSizeFromYPos",
    value: function calculateSizeFromYPos(y) {
      var perc = (y - this.location.vanishingPoint) / (this.location.height - this.location.vanishingPoint);
      var newH = this.maxHeight * perc;
      var newW = this.maxWidth / this.maxHeight * newH;
      return {
        w: newW,
        h: newH
      };
    }
  }, {
    key: "scaleSpriteByYCoord",
    value: function scaleSpriteByYCoord(y) {
      var oldH = this.height;
      var oldW = this.width;

      if (!oldH) {
        oldH = this.maxHeight;
      }

      if (!oldW) {
        oldW = this.maxWidth;
      }

      var size = this.calculateSizeFromYPos(y);
      this.sprite.scaleToHeight(size.h);
      this.sprite.scaleToWidth(size.w);
      this.height = size.h;
      this.width = size.w;
    }
  }, {
    key: "moveToFront",
    value: function moveToFront() {}
  }, {
    key: "adjustZPosition",
    value: function adjustZPosition() {
      var myZ = this.canvas.getObjects().indexOf(this.sprite);

      for (var i = 0; i < this.location.decor.length; i++) {
        if (_Globals.Globals.isIntersecting(this.sprite, this.location.decor[i].sprite)) {
          var decorZ = this.canvas.getObjects().indexOf(this.location.decor[i].sprite); //console.log(this.location.decor[i].getY(), 'vs', this.getY());
          //console.log(decorZ, 'vs', myZ);

          if (this.location.decor[i].getY() <= this.getY()) {
            this.sprite.bringToFront(); //this.sprite.moveTo(decorZ+1);
          } else if (this.location.decor[i].getY() > this.getY() && decorZ <= myZ) {
            this.sprite.moveTo(decorZ - 1);
          } //console.log('after', this.canvas.getObjects().indexOf(this.sprite));

        }
      }

      for (var _i = 0; _i < this.location.actors.length; _i++) {
        if (_Globals.Globals.isIntersecting(this.sprite, this.location.actors[_i].sprite)) {
          var actorZ = this.canvas.getObjects().indexOf(this.location.actors[_i].sprite);

          if (this.location.actors[_i].getY() <= this.getY() && actorZ >= myZ) {
            this.sprite.moveTo(actorZ + 1);
          } else if (this.location.actors[_i].getY() > this.getY() && actorZ <= myZ) {
            this.sprite.moveTo(actorZ - 1);
          }
        }
      }
    }
  }, {
    key: "getX",
    value: function getX() {
      return Math.round(this.x);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Math.round(this.y);
    }
  }, {
    key: "updateMovementPointsDisplay",
    value: function updateMovementPointsDisplay(value) {
      document.querySelector('#movement_points').innerHTML = value;
    }
  }, {
    key: "runAttackAnimation",
    value: function () {
      var _runAttackAnimation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dir) {
        var _this3 = this;

        var frames;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = dir;
                _context2.next = _context2.t0 === 'right' ? 3 : _context2.t0 === 'left' ? 5 : 7;
                break;

              case 3:
                frames = this.punchRightFrames;
                return _context2.abrupt("break", 7);

              case 5:
                frames = this.punchLeftFrames;
                return _context2.abrupt("break", 7);

              case 7:
                this.animIndex = 1;
                clearInterval(this.animInterval);
                console.log('starting fight animation');
                this.animInterval = setInterval(function () {
                  if (_this3.animIndex >= frames.length) {
                    _this3.animIndex = 1;
                    clearInterval(_this3.animInterval);

                    _this3.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PATH_NODE_WALKED));
                  }

                  console.log('fighting frame', frames[self.animIndex]);

                  _this3.sprite.setElement(frames[_this3.animIndex]);

                  _this3.canvas.renderAll();

                  _this3.animIndex++;
                }, 50);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function runAttackAnimation(_x) {
        return _runAttackAnimation.apply(this, arguments);
      }

      return runAttackAnimation;
    }()
  }, {
    key: "cancelAnimations",
    value: function cancelAnimations() {
      clearInterval(this.animInterval);
      this.currentPath = null;
      this.bumDefault.removeEventListener(_Globals.Globals.EVENT_PATH_NODE_WALKED, this.walkCallback);
      this.runningWalkLeft = false;
      this.runningWalkRight = false;
      this.runningWalkUp = false;
      this.runningWalkDown = false;
      this.runningTalk = false;
      this.isMoving = false;
    }
  }, {
    key: "animateWalk",
    value: function animateWalk(x, y) {
      var _this4 = this;

      this.scaleSpriteByYCoord(y);
      this.sprite.animate('left', x - this.width / 2, {
        duration: 100,
        onChange: this.canvas.renderAll.bind(this.canvas),
        abort: function abort() {
          if (!_this4.isMoving) {
            console.log('cancel');
            _this4.x = _this4.sprite.aCoords.bl.x + _this4.width / 2;
            _this4.y = _this4.sprite.aCoords.bl.y;
          }

          return !_this4.isMoving;
        }
      });
      this.sprite.animate('top', y - this.height, {
        duration: 100,
        onChange: this.canvas.renderAll.bind(this.canvas),
        abort: function abort() {
          if (!_this4.isMoving) {
            console.log('cancel');
            _this4.x = _this4.sprite.aCoords.bl.x + _this4.width / 2;
            _this4.y = _this4.sprite.aCoords.bl.y;
          }

          return !_this4.isMoving;
        },
        onComplete: function onComplete() {
          _this4.x = x;
          _this4.y = y;

          if (_this4.animationCount % 4 === 0 && _this4.location.combatOn) {
            _this4.remainingMoves--;

            _this4.updateMovementPointsDisplay(_this4.remainingMoves);
          }

          _this4.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PATH_NODE_WALKED));
        }
      });
      this.adjustZPosition();
    }
  }, {
    key: "cycleAnimation",
    value: function cycleAnimation() {
      this.animationCount++; //console.log(this.animationCount, this.currentPath.length);

      if (this.animationCount < this.currentPath.length) {
        this.animateWalk(this.currentPath[this.animationCount][0], this.currentPath[this.animationCount][1]);
      } else {
        console.log('entire path walked');
        this.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PATH_WALKED));
        this.cancelAnimations();
      }
    }
  }, {
    key: "openContainer",
    value: function () {
      var _openContainer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        var _this5 = this;

        var decorReady, containerInfo;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                decorReady = this.adjustZPosition.bind(this);
                data.img.removeEventListener(_Globals.Globals.EVENT_DECOR_READY, decorReady);
                this.bumDefault.removeEventListener(_Globals.Globals.EVENT_PATH_WALKED, this.walkActionCallback);
                this.walkActionCallback = null;
                _context3.next = 6;
                return this.queryBackend('PUT', _Globals.Globals.API_DIR + 'container/' + data.id + '/open')["catch"](function (err) {
                  _this5.print(err.message);
                });

              case 6:
                containerInfo = _context3.sent;

                if (containerInfo) {
                  data.imgURL = containerInfo.img_open;
                  console.log('set img to', data.imgURL);
                  data.open = true;
                  console.log('dimg', data.img);
                  data.img.addEventListener(_Globals.Globals.EVENT_DECOR_READY, decorReady);
                  data.render();
                }

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function openContainer(_x2) {
        return _openContainer.apply(this, arguments);
      }

      return openContainer;
    }()
  }, {
    key: "closeContainer",
    value: function () {
      var _closeContainer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
        var _this6 = this;

        var containerInfo;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('data', data);
                this.bumDefault.removeEventListener(_Globals.Globals.EVENT_PATH_WALKED, this.walkActionCallback);
                this.walkActionCallback = null;
                _context4.next = 5;
                return this.queryBackend('PUT', _Globals.Globals.API_DIR + 'container/' + data.id + '/close')["catch"](function (err) {
                  _this6.print(err.message);
                });

              case 5:
                containerInfo = _context4.sent;

                if (containerInfo) {
                  data.imgURL = containerInfo.img_closed;
                  console.log('set img to', data.imgURL);
                  data.open = false;
                  data.render();
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function closeContainer(_x3) {
        return _closeContainer.apply(this, arguments);
      }

      return closeContainer;
    }()
  }, {
    key: "searchContainer",
    value: function () {
      var _searchContainer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
        var _this7 = this;

        var containerInfo;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.parent.queryBackend('GET', _Globals.Globals.API_DIR + 'container/' + data.id + '/contents')["catch"](function (err) {
                  _this7.print(err.message);
                });

              case 2:
                containerInfo = _context5.sent;

                if (containerInfo) {
                  console.log('cont', containerInfo);
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function searchContainer(_x4) {
        return _searchContainer.apply(this, arguments);
      }

      return searchContainer;
    }()
  }, {
    key: "tryToOpen",
    value: function tryToOpen(data) {
      if (!this.location.combatOn) {
        this.walkActionCallback = this.openContainer.bind(this, data);
        this.bumDefault.addEventListener(_Globals.Globals.EVENT_PATH_WALKED, this.walkActionCallback);
        this.walkToObject(data);
      }
    }
  }, {
    key: "tryToClose",
    value: function tryToClose(data) {
      if (!this.location.combatOn) {
        this.walkActionCallback = this.closeContainer.bind(this, data);
        this.bumDefault.addEventListener(_Globals.Globals.EVENT_PATH_WALKED, this.walkActionCallback);
        this.walkToObject(data);
      }
    }
  }, {
    key: "tryToSearch",
    value: function tryToSearch(data) {
      var _this8 = this;

      if (!this.location.combatOn) {
        this.walkActionCallback = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
          var containerInfo, decorReady;
          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (data.open) {
                    _context6.next = 5;
                    break;
                  }

                  _context6.next = 3;
                  return _this8.queryBackend('PUT', _Globals.Globals.API_DIR + 'container/' + data.id + '/open')["catch"](function (err) {
                    _this8.print(err.message);
                  });

                case 3:
                  containerInfo = _context6.sent;

                  if (containerInfo) {
                    decorReady = _this8.adjustZPosition.bind(_this8);
                    data.imgURL = containerInfo.img_open;
                    console.log('set img to', data.imgURL);
                    data.open = true;
                    console.log('dimg', data.img);
                    data.img.addEventListener(_Globals.Globals.EVENT_DECOR_READY, decorReady);
                    data.render();
                  }

                case 5:
                  _this8.searchContainer(data);

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        this.bumDefault.addEventListener(_Globals.Globals.EVENT_PATH_WALKED, this.walkActionCallback);
        this.walkToObject(data);
      }
    }
  }, {
    key: "clickedGroundPathResults",
    value: function clickedGroundPathResults(path) {
      if (path && path.length) {
        if (this.location.combatOn) {
          this.location.canvas.remove(this.location.combat.moveLine);
          this.location.combat.moveLine = null;
          this.location.canvas.remove(this.location.combat.moveText);
          this.location.combat.moveText = null;

          if (this.isMoving || Math.ceil(path.length / 4) > this.remainingMoves) {
            return;
          }
        }

        for (var i = 0; i < path.length; i++) {
          path[i][0] *= _Globals.Globals.GRID_SQUARE_WIDTH;
          path[i][1] *= _Globals.Globals.GRID_SQUARE_HEIGHT;
        }

        console.log('got path', path);
        this.walkRoute(path);
      } else {
        this.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PATH_WALKED));
      }
    }
  }, {
    key: "walkToObject",
    value: function walkToObject(target) {
      if (!this.location.combatOn) {
        var start = {};
        start.x = this.getX();
        start.y = this.getY();
        var end = {};
        end.x = target.getX();
        end.y = target.getY();
        console.log('end', end.x, end.y);

        if (this.location.walkPath.isPointInPath(end.x, end.y)) {
          var obj = {};
          obj.command = 'walkToObject';
          obj.start = start;
          obj.end = end;
          this.location.findPath(obj);
        }
      }
    }
  }, {
    key: "runWalkAnimation",
    value: function runWalkAnimation(dir) {
      var _this9 = this;

      var frames;

      switch (dir) {
        case 'right':
          this.runningRightWalk = true;
          frames = this.walkRightFrames;
          break;

        case 'left':
          this.runningLeftWalk = true;
          frames = this.walkLeftFrames;
          break;

        case 'up':
          this.runningUpWalk = true;
          frames = this.walkUpFrames;
          break;

        case 'down':
          this.runningDownWalk = true;
          frames = this.walkDownFrames;
          break;

        case 'talk':
          this.runningTalk = true;
          frames = this.talkFrames;
          break;
      }

      this.animIndex = 0;
      clearInterval(this.animInterval);
      this.animInterval = setInterval(function () {
        if (_this9.animIndex >= frames.length) {
          _this9.animIndex = 0;
        }

        _this9.sprite.setElement(frames[_this9.animIndex]);

        _this9.animIndex++;
      }, 250);
      this.sprite.setElement(frames[this.animIndex]);
      this.animIndex++;
    }
  }, {
    key: "walkRoute",
    value: function walkRoute(path) {
      this.isMoving = true;
      this.animationCount = 0;
      this.currentPath = path;
      this.walkCallback = this.cycleAnimation.bind(this);
      this.bumDefault.addEventListener(_Globals.Globals.EVENT_PATH_NODE_WALKED, this.walkCallback);
      var x = path[path.length - 1][0];
      var y = path[path.length - 1][1];

      if (x < this.getX()) {
        this.runWalkAnimation('left');
      } else if (x > this.getX()) {
        this.runWalkAnimation('right');
      } else if (y < this.getY()) {
        this.runWalkAnimation('up');
      } else if (y > this.getY()) {
        this.runWalkAnimation('down');
      }

      this.animateWalk(path[this.animationCount][0], path[this.animationCount][1]);
    }
  }]);
  return Player;
}(_Engine2.Engine);

exports.Player = Player;

},{"./Engine.jsx":41,"./Globals.jsx":42,"./Weapon.jsx":46,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9,"@babel/runtime/regenerator":12}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Weapon = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Weapon = /*#__PURE__*/function (_Engine) {
  (0, _inherits2["default"])(Weapon, _Engine);

  var _super = _createSuper(Weapon);

  function Weapon(id) {
    var _this;

    (0, _classCallCheck2["default"])(this, Weapon);
    _this = _super.call(this);
    _this.type = _Globals.Globals.OBJECT_TYPE_WEAPON;
    _this.id = id;
    _this.damage = 0;
    _this.icon_url = '';
    _this.melee = true;
    _this.name = 'weapon';
    _this.speed = 1;
    _this.range = 1;
    _this.img = new Image();
    return _this;
  }

  (0, _createClass2["default"])(Weapon, [{
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        var weaponInfo;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.queryBackend('GET', _Globals.Globals.API_DIR + 'weapon/' + this.id);

              case 2:
                weaponInfo = _context.sent;

                if (weaponInfo) {
                  console.log('weap', weaponInfo);
                  this.damage = weaponInfo.damage;
                  this.icon_url = weaponInfo.icon_url;
                  this.melee = weaponInfo.melee;
                  this.name = weaponInfo.name;
                  this.speed = weaponInfo.speed;

                  this.img.onload = function () {
                    _this2.img.dispatchEvent(new Event(_Globals.Globals.EVENT_WEAPON_READY));
                  };

                  this.img.src = this.icon_url;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return Weapon;
}(_Engine2.Engine);

exports.Weapon = Weapon;

},{"./Engine.jsx":41,"./Globals.jsx":42,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9,"@babel/runtime/regenerator":12}],47:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var WebWorker = function WebWorker(worker) {
  (0, _classCallCheck2["default"])(this, WebWorker);
  var code = worker.toString();
  var blob = new Blob(['(' + code + ')()']);
  return new Worker(URL.createObjectURL(blob));
};

exports["default"] = WebWorker;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/interopRequireDefault":8}],48:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Globals = require("./Globals.jsx");

var _Engine = require("./Engine.jsx");

var _Player = require("./Player.jsx");

var _Area = require("./Area.jsx");

var _Decor = require("./Decor.jsx");

var _NPC = require("./NPC.jsx");

var engine = new _Engine.Engine();

function callCharacterSheet() {
  engine.showCharacterSheet();
}

function triggerEndTurn() {
  engine.endCombatTurn();
}

window.onload = function () {
  //new Globals();
  var startAreaID = '29c94708-c44c-11e9-bc97-0e49f1f8e77c';
  var tempPlayerID = '43554018-c44b-11e9-bc97-0e49f1f8e77c';
  engine.player = new _Player.Player(tempPlayerID, engine.canvas);
  engine.player.bumDefault.addEventListener(_Globals.Globals.EVENT_PLAYER_READY, event = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var dbInfo;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return engine.queryBackend('GET', _Globals.Globals.API_DIR + 'area/' + startAreaID);

            case 2:
              dbInfo = _context2.sent;

              if (dbInfo) {
                engine.currentArea = new _Area.Area(startAreaID, engine.canvas);
                engine.currentArea.actors.push(engine.player);
                engine.player.location = engine.currentArea;
                engine.currentArea.loaderImg.addEventListener(_Globals.Globals.EVENT_AREA_READY, event = /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                    var decorInfo, i, decor, npcInfo, _loop, _i;

                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            engine.player.resample();
                            engine.player.sprite.bringToFront();
                            _context.next = 4;
                            return engine.queryBackend('GET', _Globals.Globals.API_DIR + 'area/' + engine.currentArea.id + '/decor');

                          case 4:
                            decorInfo = _context.sent;

                            if (!decorInfo) {
                              _context.next = 13;
                              break;
                            }

                            console.log('decor', decorInfo);

                            for (i = 0; i < decorInfo.length; i++) {
                              decor = new _Decor.Decor(decorInfo[i], engine.canvas);
                              decor.location = engine.currentArea;
                              decor.render();
                              engine.currentArea.decor.push(decor);
                            }

                            _context.next = 10;
                            return engine.queryBackend('GET', _Globals.Globals.API_DIR + 'area/' + engine.currentArea.id + '/npcs');

                          case 10:
                            npcInfo = _context.sent;

                            if (npcInfo) {
                              _loop = function _loop(_i) {
                                var npc = new _NPC.NPC(npcInfo[_i].id, engine.canvas);
                                npc.name = npcInfo[_i].name;
                                npc.description = npcInfo[_i].descr;
                                npc.team = npcInfo[_i].team;
                                npc.imgX = npcInfo[_i].x;
                                npc.imgY = npcInfo[_i].y;
                                npc.location = engine.currentArea;
                                npc.npcDefault.addEventListener(_Globals.Globals.EVENT_NPC_READY, function (event) {
                                  engine.currentArea.actors.push(npc);
                                  npc.resample();
                                  npc.sprite.bringToFront(); //engine.currentArea.enterCombat();
                                });
                                npc.render();
                              };

                              for (_i = 0; _i < npcInfo.length; _i++) {
                                _loop(_i);
                              }
                            }

                            engine.player.sprite.bringToFront();

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function event() {
                    return _ref2.apply(this, arguments);
                  };
                }());
                engine.currentArea.renderBackground();
                engine.print('You enter <b>' + dbInfo.name.toLowerCase() + '</b>.');
                engine.print(dbInfo.description, true);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function event() {
      return _ref.apply(this, arguments);
    };
  }());
  engine.player.render();
};

},{"./Area.jsx":38,"./Decor.jsx":40,"./Engine.jsx":41,"./Globals.jsx":42,"./NPC.jsx":43,"./Player.jsx":45,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/regenerator":12}]},{},[42,48,38,45,46,39,44,47])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2pmYWNlL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hlYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaGVhcC9saWIvaGVhcC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvUGF0aEZpbmRpbmcuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2NvcmUvRGlhZ29uYWxNb3ZlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9HcmlkLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL0hldXJpc3RpYy5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9Ob2RlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL1V0aWwuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmVzdEZpcnN0RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0JpQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCZXN0Rmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlEaWprc3RyYUZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9CcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvRGlqa3N0cmFGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSURBU3RhckZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0pQRk5ldmVyTW92ZURpYWdvbmFsbHkuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSnVtcFBvaW50RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0p1bXBQb2ludEZpbmRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3RhdGljL2pzL3NyYy9BcmVhLmpzeCIsInN0YXRpYy9qcy9zcmMvQ29tYmF0TWFuYWdlci5qc3giLCJzdGF0aWMvanMvc3JjL0RlY29yLmpzeCIsInN0YXRpYy9qcy9zcmMvRW5naW5lLmpzeCIsInN0YXRpYy9qcy9zcmMvR2xvYmFscy5qc3giLCJzdGF0aWMvanMvc3JjL05QQy5qc3giLCJzdGF0aWMvanMvc3JjL1BhdGhmaW5kV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvUGxheWVyLmpzeCIsInN0YXRpYy9qcy9zcmMvV2VhcG9uLmpzeCIsInN0YXRpYy9qcy9zcmMvV2ViV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvbWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalhBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUMsR0FBRyxPQUFPLENBQUMsTUFBMUIsRUFBa0MsRUFBQyxFQUFuQyxFQUF1QztBQUFBLHNDQUE5QixFQUE4QjtBQWV0QztBQUNGOztBQUNELDRCQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsTUFBZCxDQUFxQixZQUFyQjs7QUFqQzRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFIOztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE3RTtBQW9DQSxnQkFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixnQkFBbkI7QUFHQSxnQkFBQSxNQUFNLENBQUMsS0FBUCxDQUFhLGtCQUFrQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVosRUFBbEIsR0FBOEMsT0FBM0Q7QUFDQSxnQkFBQSxNQUFNLENBQUMsS0FBUCxDQUFhLE1BQU0sQ0FBQyxXQUFwQixFQUFpQyxJQUFqQztBQUNEOztBQWhEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEzRTtBQWtEQSxFQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsTUFBZDtBQUNELENBM0REIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9oZWFwJyk7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOC4wXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBIZWFwLCBkZWZhdWx0Q21wLCBmbG9vciwgaGVhcGlmeSwgaGVhcHBvcCwgaGVhcHB1c2gsIGhlYXBwdXNocG9wLCBoZWFwcmVwbGFjZSwgaW5zb3J0LCBtaW4sIG5sYXJnZXN0LCBuc21hbGxlc3QsIHVwZGF0ZUl0ZW0sIF9zaWZ0ZG93biwgX3NpZnR1cDtcblxuICBmbG9vciA9IE1hdGguZmxvb3IsIG1pbiA9IE1hdGgubWluO1xuXG5cbiAgLypcbiAgRGVmYXVsdCBjb21wYXJpc29uIGZ1bmN0aW9uIHRvIGJlIHVzZWRcbiAgICovXG5cbiAgZGVmYXVsdENtcCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBpZiAoeCA8IHkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHggPiB5KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG5cblxuICAvKlxuICBJbnNlcnQgaXRlbSB4IGluIGxpc3QgYSwgYW5kIGtlZXAgaXQgc29ydGVkIGFzc3VtaW5nIGEgaXMgc29ydGVkLlxuICBcbiAgSWYgeCBpcyBhbHJlYWR5IGluIGEsIGluc2VydCBpdCB0byB0aGUgcmlnaHQgb2YgdGhlIHJpZ2h0bW9zdCB4LlxuICBcbiAgT3B0aW9uYWwgYXJncyBsbyAoZGVmYXVsdCAwKSBhbmQgaGkgKGRlZmF1bHQgYS5sZW5ndGgpIGJvdW5kIHRoZSBzbGljZVxuICBvZiBhIHRvIGJlIHNlYXJjaGVkLlxuICAgKi9cblxuICBpbnNvcnQgPSBmdW5jdGlvbihhLCB4LCBsbywgaGksIGNtcCkge1xuICAgIHZhciBtaWQ7XG4gICAgaWYgKGxvID09IG51bGwpIHtcbiAgICAgIGxvID0gMDtcbiAgICB9XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBpZiAobG8gPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvIG11c3QgYmUgbm9uLW5lZ2F0aXZlJyk7XG4gICAgfVxuICAgIGlmIChoaSA9PSBudWxsKSB7XG4gICAgICBoaSA9IGEubGVuZ3RoO1xuICAgIH1cbiAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgbWlkID0gZmxvb3IoKGxvICsgaGkpIC8gMik7XG4gICAgICBpZiAoY21wKHgsIGFbbWlkXSkgPCAwKSB7XG4gICAgICAgIGhpID0gbWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG8gPSBtaWQgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFtdLnNwbGljZS5hcHBseShhLCBbbG8sIGxvIC0gbG9dLmNvbmNhdCh4KSksIHgpO1xuICB9O1xuXG5cbiAgLypcbiAgUHVzaCBpdGVtIG9udG8gaGVhcCwgbWFpbnRhaW5pbmcgdGhlIGhlYXAgaW52YXJpYW50LlxuICAgKi9cblxuICBoZWFwcHVzaCA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBjbXApIHtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIF9zaWZ0ZG93bihhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gMSwgY21wKTtcbiAgfTtcblxuXG4gIC8qXG4gIFBvcCB0aGUgc21hbGxlc3QgaXRlbSBvZmYgdGhlIGhlYXAsIG1haW50YWluaW5nIHRoZSBoZWFwIGludmFyaWFudC5cbiAgICovXG5cbiAgaGVhcHBvcCA9IGZ1bmN0aW9uKGFycmF5LCBjbXApIHtcbiAgICB2YXIgbGFzdGVsdCwgcmV0dXJuaXRlbTtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGxhc3RlbHQgPSBhcnJheS5wb3AoKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5pdGVtID0gYXJyYXlbMF07XG4gICAgICBhcnJheVswXSA9IGxhc3RlbHQ7XG4gICAgICBfc2lmdHVwKGFycmF5LCAwLCBjbXApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5pdGVtID0gbGFzdGVsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybml0ZW07XG4gIH07XG5cblxuICAvKlxuICBQb3AgYW5kIHJldHVybiB0aGUgY3VycmVudCBzbWFsbGVzdCB2YWx1ZSwgYW5kIGFkZCB0aGUgbmV3IGl0ZW0uXG4gIFxuICBUaGlzIGlzIG1vcmUgZWZmaWNpZW50IHRoYW4gaGVhcHBvcCgpIGZvbGxvd2VkIGJ5IGhlYXBwdXNoKCksIGFuZCBjYW4gYmVcbiAgbW9yZSBhcHByb3ByaWF0ZSB3aGVuIHVzaW5nIGEgZml4ZWQgc2l6ZSBoZWFwLiBOb3RlIHRoYXQgdGhlIHZhbHVlXG4gIHJldHVybmVkIG1heSBiZSBsYXJnZXIgdGhhbiBpdGVtISBUaGF0IGNvbnN0cmFpbnMgcmVhc29uYWJsZSB1c2Ugb2ZcbiAgdGhpcyByb3V0aW5lIHVubGVzcyB3cml0dGVuIGFzIHBhcnQgb2YgYSBjb25kaXRpb25hbCByZXBsYWNlbWVudDpcbiAgICAgIGlmIGl0ZW0gPiBhcnJheVswXVxuICAgICAgICBpdGVtID0gaGVhcHJlcGxhY2UoYXJyYXksIGl0ZW0pXG4gICAqL1xuXG4gIGhlYXByZXBsYWNlID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciByZXR1cm5pdGVtO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgcmV0dXJuaXRlbSA9IGFycmF5WzBdO1xuICAgIGFycmF5WzBdID0gaXRlbTtcbiAgICBfc2lmdHVwKGFycmF5LCAwLCBjbXApO1xuICAgIHJldHVybiByZXR1cm5pdGVtO1xuICB9O1xuXG5cbiAgLypcbiAgRmFzdCB2ZXJzaW9uIG9mIGEgaGVhcHB1c2ggZm9sbG93ZWQgYnkgYSBoZWFwcG9wLlxuICAgKi9cblxuICBoZWFwcHVzaHBvcCA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBjbXApIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGlmIChhcnJheS5sZW5ndGggJiYgY21wKGFycmF5WzBdLCBpdGVtKSA8IDApIHtcbiAgICAgIF9yZWYgPSBbYXJyYXlbMF0sIGl0ZW1dLCBpdGVtID0gX3JlZlswXSwgYXJyYXlbMF0gPSBfcmVmWzFdO1xuICAgICAgX3NpZnR1cChhcnJheSwgMCwgY21wKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cblxuICAvKlxuICBUcmFuc2Zvcm0gbGlzdCBpbnRvIGEgaGVhcCwgaW4tcGxhY2UsIGluIE8oYXJyYXkubGVuZ3RoKSB0aW1lLlxuICAgKi9cblxuICBoZWFwaWZ5ID0gZnVuY3Rpb24oYXJyYXksIGNtcCkge1xuICAgIHZhciBpLCBfaSwgX2osIF9sZW4sIF9yZWYsIF9yZWYxLCBfcmVzdWx0cywgX3Jlc3VsdHMxO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgX3JlZjEgPSAoZnVuY3Rpb24oKSB7XG4gICAgICBfcmVzdWx0czEgPSBbXTtcbiAgICAgIGZvciAodmFyIF9qID0gMCwgX3JlZiA9IGZsb29yKGFycmF5Lmxlbmd0aCAvIDIpOyAwIDw9IF9yZWYgPyBfaiA8IF9yZWYgOiBfaiA+IF9yZWY7IDAgPD0gX3JlZiA/IF9qKysgOiBfai0tKXsgX3Jlc3VsdHMxLnB1c2goX2opOyB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgIH0pLmFwcGx5KHRoaXMpLnJldmVyc2UoKTtcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZjEubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGkgPSBfcmVmMVtfaV07XG4gICAgICBfcmVzdWx0cy5wdXNoKF9zaWZ0dXAoYXJyYXksIGksIGNtcCkpO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG5cblxuICAvKlxuICBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBnaXZlbiBpdGVtIGluIHRoZSBoZWFwLlxuICBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGUgaXRlbSBpcyBiZWluZyBtb2RpZmllZC5cbiAgICovXG5cbiAgdXBkYXRlSXRlbSA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBjbXApIHtcbiAgICB2YXIgcG9zO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgcG9zID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfc2lmdGRvd24oYXJyYXksIDAsIHBvcywgY21wKTtcbiAgICByZXR1cm4gX3NpZnR1cChhcnJheSwgcG9zLCBjbXApO1xuICB9O1xuXG5cbiAgLypcbiAgRmluZCB0aGUgbiBsYXJnZXN0IGVsZW1lbnRzIGluIGEgZGF0YXNldC5cbiAgICovXG5cbiAgbmxhcmdlc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgY21wKSB7XG4gICAgdmFyIGVsZW0sIHJlc3VsdCwgX2ksIF9sZW4sIF9yZWY7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICByZXN1bHQgPSBhcnJheS5zbGljZSgwLCBuKTtcbiAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGhlYXBpZnkocmVzdWx0LCBjbXApO1xuICAgIF9yZWYgPSBhcnJheS5zbGljZShuKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGVsZW0gPSBfcmVmW19pXTtcbiAgICAgIGhlYXBwdXNocG9wKHJlc3VsdCwgZWxlbSwgY21wKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5zb3J0KGNtcCkucmV2ZXJzZSgpO1xuICB9O1xuXG5cbiAgLypcbiAgRmluZCB0aGUgbiBzbWFsbGVzdCBlbGVtZW50cyBpbiBhIGRhdGFzZXQuXG4gICAqL1xuXG4gIG5zbWFsbGVzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBjbXApIHtcbiAgICB2YXIgZWxlbSwgaSwgbG9zLCByZXN1bHQsIF9pLCBfaiwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgaWYgKG4gKiAxMCA8PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IGFycmF5LnNsaWNlKDAsIG4pLnNvcnQoY21wKTtcbiAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgbG9zID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgIF9yZWYgPSBhcnJheS5zbGljZShuKTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBlbGVtID0gX3JlZltfaV07XG4gICAgICAgIGlmIChjbXAoZWxlbSwgbG9zKSA8IDApIHtcbiAgICAgICAgICBpbnNvcnQocmVzdWx0LCBlbGVtLCAwLCBudWxsLCBjbXApO1xuICAgICAgICAgIHJlc3VsdC5wb3AoKTtcbiAgICAgICAgICBsb3MgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBoZWFwaWZ5KGFycmF5LCBjbXApO1xuICAgIF9yZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gX2ogPSAwLCBfcmVmMSA9IG1pbihuLCBhcnJheS5sZW5ndGgpOyAwIDw9IF9yZWYxID8gX2ogPCBfcmVmMSA6IF9qID4gX3JlZjE7IGkgPSAwIDw9IF9yZWYxID8gKytfaiA6IC0tX2opIHtcbiAgICAgIF9yZXN1bHRzLnB1c2goaGVhcHBvcChhcnJheSwgY21wKSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICBfc2lmdGRvd24gPSBmdW5jdGlvbihhcnJheSwgc3RhcnRwb3MsIHBvcywgY21wKSB7XG4gICAgdmFyIG5ld2l0ZW0sIHBhcmVudCwgcGFyZW50cG9zO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgbmV3aXRlbSA9IGFycmF5W3Bvc107XG4gICAgd2hpbGUgKHBvcyA+IHN0YXJ0cG9zKSB7XG4gICAgICBwYXJlbnRwb3MgPSAocG9zIC0gMSkgPj4gMTtcbiAgICAgIHBhcmVudCA9IGFycmF5W3BhcmVudHBvc107XG4gICAgICBpZiAoY21wKG5ld2l0ZW0sIHBhcmVudCkgPCAwKSB7XG4gICAgICAgIGFycmF5W3Bvc10gPSBwYXJlbnQ7XG4gICAgICAgIHBvcyA9IHBhcmVudHBvcztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5W3Bvc10gPSBuZXdpdGVtO1xuICB9O1xuXG4gIF9zaWZ0dXAgPSBmdW5jdGlvbihhcnJheSwgcG9zLCBjbXApIHtcbiAgICB2YXIgY2hpbGRwb3MsIGVuZHBvcywgbmV3aXRlbSwgcmlnaHRwb3MsIHN0YXJ0cG9zO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgZW5kcG9zID0gYXJyYXkubGVuZ3RoO1xuICAgIHN0YXJ0cG9zID0gcG9zO1xuICAgIG5ld2l0ZW0gPSBhcnJheVtwb3NdO1xuICAgIGNoaWxkcG9zID0gMiAqIHBvcyArIDE7XG4gICAgd2hpbGUgKGNoaWxkcG9zIDwgZW5kcG9zKSB7XG4gICAgICByaWdodHBvcyA9IGNoaWxkcG9zICsgMTtcbiAgICAgIGlmIChyaWdodHBvcyA8IGVuZHBvcyAmJiAhKGNtcChhcnJheVtjaGlsZHBvc10sIGFycmF5W3JpZ2h0cG9zXSkgPCAwKSkge1xuICAgICAgICBjaGlsZHBvcyA9IHJpZ2h0cG9zO1xuICAgICAgfVxuICAgICAgYXJyYXlbcG9zXSA9IGFycmF5W2NoaWxkcG9zXTtcbiAgICAgIHBvcyA9IGNoaWxkcG9zO1xuICAgICAgY2hpbGRwb3MgPSAyICogcG9zICsgMTtcbiAgICB9XG4gICAgYXJyYXlbcG9zXSA9IG5ld2l0ZW07XG4gICAgcmV0dXJuIF9zaWZ0ZG93bihhcnJheSwgc3RhcnRwb3MsIHBvcywgY21wKTtcbiAgfTtcblxuICBIZWFwID0gKGZ1bmN0aW9uKCkge1xuICAgIEhlYXAucHVzaCA9IGhlYXBwdXNoO1xuXG4gICAgSGVhcC5wb3AgPSBoZWFwcG9wO1xuXG4gICAgSGVhcC5yZXBsYWNlID0gaGVhcHJlcGxhY2U7XG5cbiAgICBIZWFwLnB1c2hwb3AgPSBoZWFwcHVzaHBvcDtcblxuICAgIEhlYXAuaGVhcGlmeSA9IGhlYXBpZnk7XG5cbiAgICBIZWFwLnVwZGF0ZUl0ZW0gPSB1cGRhdGVJdGVtO1xuXG4gICAgSGVhcC5ubGFyZ2VzdCA9IG5sYXJnZXN0O1xuXG4gICAgSGVhcC5uc21hbGxlc3QgPSBuc21hbGxlc3Q7XG5cbiAgICBmdW5jdGlvbiBIZWFwKGNtcCkge1xuICAgICAgdGhpcy5jbXAgPSBjbXAgIT0gbnVsbCA/IGNtcCA6IGRlZmF1bHRDbXA7XG4gICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgfVxuXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBoZWFwcHVzaCh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGhlYXBwb3AodGhpcy5ub2RlcywgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlc1swXTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5pbmRleE9mKHgpICE9PSAtMTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBoZWFwcmVwbGFjZSh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnB1c2hwb3AgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gaGVhcHB1c2hwb3AodGhpcy5ub2RlcywgeCwgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5oZWFwaWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaGVhcGlmeSh0aGlzLm5vZGVzLCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnVwZGF0ZUl0ZW0gPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdXBkYXRlSXRlbSh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlcyA9IFtdO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGg7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGVhcDtcbiAgICAgIGhlYXAgPSBuZXcgSGVhcCgpO1xuICAgICAgaGVhcC5ub2RlcyA9IHRoaXMubm9kZXMuc2xpY2UoMCk7XG4gICAgICByZXR1cm4gaGVhcDtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMuc2xpY2UoMCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmluc2VydCA9IEhlYXAucHJvdG90eXBlLnB1c2g7XG5cbiAgICBIZWFwLnByb3RvdHlwZS50b3AgPSBIZWFwLnByb3RvdHlwZS5wZWVrO1xuXG4gICAgSGVhcC5wcm90b3R5cGUuZnJvbnQgPSBIZWFwLnByb3RvdHlwZS5wZWVrO1xuXG4gICAgSGVhcC5wcm90b3R5cGUuaGFzID0gSGVhcC5wcm90b3R5cGUuY29udGFpbnM7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jb3B5ID0gSGVhcC5wcm90b3R5cGUuY2xvbmU7XG5cbiAgICByZXR1cm4gSGVhcDtcblxuICB9KSgpO1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAhPT0gbnVsbCA/IG1vZHVsZS5leHBvcnRzIDogdm9pZCAwKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBIZWFwO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5IZWFwID0gSGVhcDtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9QYXRoRmluZGluZycpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICdIZWFwJyAgICAgICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJ2hlYXAnKSxcclxuICAgICdOb2RlJyAgICAgICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9Ob2RlJyksXHJcbiAgICAnR3JpZCcgICAgICAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvR3JpZCcpLFxyXG4gICAgJ1V0aWwnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL1V0aWwnKSxcclxuICAgICdEaWFnb25hbE1vdmVtZW50JyAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9EaWFnb25hbE1vdmVtZW50JyksXHJcbiAgICAnSGV1cmlzdGljJyAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvSGV1cmlzdGljJyksXHJcbiAgICAnQVN0YXJGaW5kZXInICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQVN0YXJGaW5kZXInKSxcclxuICAgICdCZXN0Rmlyc3RGaW5kZXInICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CZXN0Rmlyc3RGaW5kZXInKSxcclxuICAgICdCcmVhZHRoRmlyc3RGaW5kZXInICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CcmVhZHRoRmlyc3RGaW5kZXInKSxcclxuICAgICdEaWprc3RyYUZpbmRlcicgICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9EaWprc3RyYUZpbmRlcicpLFxyXG4gICAgJ0JpQVN0YXJGaW5kZXInICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JpQVN0YXJGaW5kZXInKSxcclxuICAgICdCaUJlc3RGaXJzdEZpbmRlcicgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CaUJlc3RGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0JpQnJlYWR0aEZpcnN0RmluZGVyJyAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JpQnJlYWR0aEZpcnN0RmluZGVyJyksXHJcbiAgICAnQmlEaWprc3RyYUZpbmRlcicgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlEaWprc3RyYUZpbmRlcicpLFxyXG4gICAgJ0lEQVN0YXJGaW5kZXInICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0lEQVN0YXJGaW5kZXInKSxcclxuICAgICdKdW1wUG9pbnRGaW5kZXInICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9KdW1wUG9pbnRGaW5kZXInKSxcclxufTtcclxuIiwidmFyIERpYWdvbmFsTW92ZW1lbnQgPSB7XHJcbiAgICBBbHdheXM6IDEsXHJcbiAgICBOZXZlcjogMixcclxuICAgIElmQXRNb3N0T25lT2JzdGFjbGU6IDMsXHJcbiAgICBPbmx5V2hlbk5vT2JzdGFjbGVzOiA0XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpYWdvbmFsTW92ZW1lbnQ7IiwidmFyIE5vZGUgPSByZXF1aXJlKCcuL05vZGUnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZCBjbGFzcywgd2hpY2ggc2VydmVzIGFzIHRoZSBlbmNhcHN1bGF0aW9uIG9mIHRoZSBsYXlvdXQgb2YgdGhlIG5vZGVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ8QXJyYXk8QXJyYXk8KG51bWJlcnxib29sZWFuKT4+fSB3aWR0aF9vcl9tYXRyaXggTnVtYmVyIG9mIGNvbHVtbnMgb2YgdGhlIGdyaWQsIG9yIG1hdHJpeFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IE51bWJlciBvZiByb3dzIG9mIHRoZSBncmlkLlxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChudW1iZXJ8Ym9vbGVhbik+Pn0gW21hdHJpeF0gLSBBIDAtMSBtYXRyaXhcclxuICogICAgIHJlcHJlc2VudGluZyB0aGUgd2Fsa2FibGUgc3RhdHVzIG9mIHRoZSBub2RlcygwIG9yIGZhbHNlIGZvciB3YWxrYWJsZSkuXHJcbiAqICAgICBJZiB0aGUgbWF0cml4IGlzIG5vdCBzdXBwbGllZCwgYWxsIHRoZSBub2RlcyB3aWxsIGJlIHdhbGthYmxlLiAgKi9cclxuZnVuY3Rpb24gR3JpZCh3aWR0aF9vcl9tYXRyaXgsIGhlaWdodCwgbWF0cml4KSB7XHJcbiAgICB2YXIgd2lkdGg7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aWR0aF9vcl9tYXRyaXggIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aF9vcl9tYXRyaXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlaWdodCA9IHdpZHRoX29yX21hdHJpeC5sZW5ndGg7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aF9vcl9tYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgICAgIG1hdHJpeCA9IHdpZHRoX29yX21hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgZ3JpZC5cclxuICAgICAqIEB0eXBlIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygcm93cyBvZiB0aGUgZ3JpZC5cclxuICAgICAqIEB0eXBlIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgMkQgYXJyYXkgb2Ygbm9kZXMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLl9idWlsZE5vZGVzKHdpZHRoLCBoZWlnaHQsIG1hdHJpeCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBub2Rlcy5cclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXJ8Ym9vbGVhbj4+fSBbbWF0cml4XSAtIEEgMC0xIG1hdHJpeCByZXByZXNlbnRpbmdcclxuICogICAgIHRoZSB3YWxrYWJsZSBzdGF0dXMgb2YgdGhlIG5vZGVzLlxyXG4gKiBAc2VlIEdyaWRcclxuICovXHJcbkdyaWQucHJvdG90eXBlLl9idWlsZE5vZGVzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgbWF0cml4KSB7XHJcbiAgICB2YXIgaSwgaixcclxuICAgICAgICBub2RlcyA9IG5ldyBBcnJheShoZWlnaHQpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7ICsraSkge1xyXG4gICAgICAgIG5vZGVzW2ldID0gbmV3IEFycmF5KHdpZHRoKTtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7ICsraikge1xyXG4gICAgICAgICAgICBub2Rlc1tpXVtqXSA9IG5ldyBOb2RlKGosIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG1hdHJpeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXRyaXgubGVuZ3RoICE9PSBoZWlnaHQgfHwgbWF0cml4WzBdLmxlbmd0aCAhPT0gd2lkdGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBzaXplIGRvZXMgbm90IGZpdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7ICsraSkge1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB3aWR0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXRyaXhbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgIC8vIDAsIGZhbHNlLCBudWxsIHdpbGwgYmUgd2Fsa2FibGVcclxuICAgICAgICAgICAgICAgIC8vIHdoaWxlIG90aGVycyB3aWxsIGJlIHVuLXdhbGthYmxlXHJcbiAgICAgICAgICAgICAgICBub2Rlc1tpXVtqXS53YWxrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlcztcclxufTtcclxuXHJcblxyXG5HcmlkLnByb3RvdHlwZS5nZXROb2RlQXQgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1t5XVt4XTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHdhbGthYmxlLlxyXG4gKiAoQWxzbyByZXR1cm5zIGZhbHNlIGlmIHRoZSBwb3NpdGlvbiBpcyBvdXRzaWRlIHRoZSBncmlkLilcclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBub2RlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVGhlIHdhbGthYmlsaXR5IG9mIHRoZSBub2RlLlxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuaXNXYWxrYWJsZUF0ID0gZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ub2Rlc1t5XVt4XS53YWxrYWJsZTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBvc2l0aW9uIGlzIGluc2lkZSB0aGUgZ3JpZC5cclxuICogWFhYOiBgZ3JpZC5pc0luc2lkZSh4LCB5KWAgaXMgd2llcmQgdG8gcmVhZC5cclxuICogSXQgc2hvdWxkIGJlIGAoeCwgeSkgaXMgaW5zaWRlIGdyaWRgLCBidXQgSSBmYWlsZWQgdG8gZmluZCBhIGJldHRlclxyXG4gKiBuYW1lIGZvciB0aGlzIG1ldGhvZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbkdyaWQucHJvdG90eXBlLmlzSW5zaWRlID0gZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuICh4ID49IDAgJiYgeCA8IHRoaXMud2lkdGgpICYmICh5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogU2V0IHdoZXRoZXIgdGhlIG5vZGUgb24gdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHdhbGthYmxlLlxyXG4gKiBOT1RFOiB0aHJvd3MgZXhjZXB0aW9uIGlmIHRoZSBjb29yZGluYXRlIGlzIG5vdCBpbnNpZGUgdGhlIGdyaWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHdhbGthYmxlIC0gV2hldGhlciB0aGUgcG9zaXRpb24gaXMgd2Fsa2FibGUuXHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5zZXRXYWxrYWJsZUF0ID0gZnVuY3Rpb24oeCwgeSwgd2Fsa2FibGUpIHtcclxuICAgIHRoaXMubm9kZXNbeV1beF0ud2Fsa2FibGUgPSB3YWxrYWJsZTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IHRoZSBuZWlnaGJvcnMgb2YgdGhlIGdpdmVuIG5vZGUuXHJcbiAqXHJcbiAqICAgICBvZmZzZXRzICAgICAgZGlhZ29uYWxPZmZzZXRzOlxyXG4gKiAgKy0tLSstLS0rLS0tKyAgICArLS0tKy0tLSstLS0rXHJcbiAqICB8ICAgfCAwIHwgICB8ICAgIHwgMCB8ICAgfCAxIHxcclxuICogICstLS0rLS0tKy0tLSsgICAgKy0tLSstLS0rLS0tK1xyXG4gKiAgfCAzIHwgICB8IDEgfCAgICB8ICAgfCAgIHwgICB8XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICogIHwgICB8IDIgfCAgIHwgICAgfCAzIHwgICB8IDIgfFxyXG4gKiAgKy0tLSstLS0rLS0tKyAgICArLS0tKy0tLSstLS0rXHJcbiAqXHJcbiAqICBXaGVuIGFsbG93RGlhZ29uYWwgaXMgdHJ1ZSwgaWYgb2Zmc2V0c1tpXSBpcyB2YWxpZCwgdGhlblxyXG4gKiAgZGlhZ29uYWxPZmZzZXRzW2ldIGFuZFxyXG4gKiAgZGlhZ29uYWxPZmZzZXRzWyhpICsgMSkgJSA0XSBpcyB2YWxpZC5cclxuICogQHBhcmFtIHtOb2RlfSBub2RlXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gZGlhZ29uYWxNb3ZlbWVudFxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzID0gZnVuY3Rpb24obm9kZSwgZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgdmFyIHggPSBub2RlLngsXHJcbiAgICAgICAgeSA9IG5vZGUueSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSxcclxuICAgICAgICBzMCA9IGZhbHNlLCBkMCA9IGZhbHNlLFxyXG4gICAgICAgIHMxID0gZmFsc2UsIGQxID0gZmFsc2UsXHJcbiAgICAgICAgczIgPSBmYWxzZSwgZDIgPSBmYWxzZSxcclxuICAgICAgICBzMyA9IGZhbHNlLCBkMyA9IGZhbHNlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcztcclxuXHJcbiAgICAvLyDihpFcclxuICAgIGlmICh0aGlzLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5IC0gMV1beF0pO1xyXG4gICAgICAgIHMwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIOKGklxyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3ldW3ggKyAxXSk7XHJcbiAgICAgICAgczEgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8g4oaTXHJcbiAgICBpZiAodGhpcy5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSArIDFdW3hdKTtcclxuICAgICAgICBzMiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyDihpBcclxuICAgIGlmICh0aGlzLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5XVt4IC0gMV0pO1xyXG4gICAgICAgIHMzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcikge1xyXG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcykge1xyXG4gICAgICAgIGQwID0gczMgJiYgczA7XHJcbiAgICAgICAgZDEgPSBzMCAmJiBzMTtcclxuICAgICAgICBkMiA9IHMxICYmIHMyO1xyXG4gICAgICAgIGQzID0gczIgJiYgczM7XHJcbiAgICB9IGVsc2UgaWYgKGRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZSkge1xyXG4gICAgICAgIGQwID0gczMgfHwgczA7XHJcbiAgICAgICAgZDEgPSBzMCB8fCBzMTtcclxuICAgICAgICBkMiA9IHMxIHx8IHMyO1xyXG4gICAgICAgIGQzID0gczIgfHwgczM7XHJcbiAgICB9IGVsc2UgaWYgKGRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuQWx3YXlzKSB7XHJcbiAgICAgICAgZDAgPSB0cnVlO1xyXG4gICAgICAgIGQxID0gdHJ1ZTtcclxuICAgICAgICBkMiA9IHRydWU7XHJcbiAgICAgICAgZDMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCB2YWx1ZSBvZiBkaWFnb25hbE1vdmVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oaWXHJcbiAgICBpZiAoZDAgJiYgdGhpcy5pc1dhbGthYmxlQXQoeCAtIDEsIHkgLSAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgLSAxXVt4IC0gMV0pO1xyXG4gICAgfVxyXG4gICAgLy8g4oaXXHJcbiAgICBpZiAoZDEgJiYgdGhpcy5pc1dhbGthYmxlQXQoeCArIDEsIHkgLSAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgLSAxXVt4ICsgMV0pO1xyXG4gICAgfVxyXG4gICAgLy8g4oaYXHJcbiAgICBpZiAoZDIgJiYgdGhpcy5pc1dhbGthYmxlQXQoeCArIDEsIHkgKyAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgKyAxXVt4ICsgMV0pO1xyXG4gICAgfVxyXG4gICAgLy8g4oaZXHJcbiAgICBpZiAoZDMgJiYgdGhpcy5pc1dhbGthYmxlQXQoeCAtIDEsIHkgKyAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgKyAxXVt4IC0gMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCBhIGNsb25lIG9mIHRoaXMgZ3JpZC5cclxuICogQHJldHVybiB7R3JpZH0gQ2xvbmVkIGdyaWQuXHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGksIGosXHJcblxyXG4gICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzTm9kZXMgPSB0aGlzLm5vZGVzLFxyXG5cclxuICAgICAgICBuZXdHcmlkID0gbmV3IEdyaWQod2lkdGgsIGhlaWdodCksXHJcbiAgICAgICAgbmV3Tm9kZXMgPSBuZXcgQXJyYXkoaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0OyArK2kpIHtcclxuICAgICAgICBuZXdOb2Rlc1tpXSA9IG5ldyBBcnJheSh3aWR0aCk7XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHdpZHRoOyArK2opIHtcclxuICAgICAgICAgICAgbmV3Tm9kZXNbaV1bal0gPSBuZXcgTm9kZShqLCBpLCB0aGlzTm9kZXNbaV1bal0ud2Fsa2FibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXdHcmlkLm5vZGVzID0gbmV3Tm9kZXM7XHJcblxyXG4gICAgcmV0dXJuIG5ld0dyaWQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWQ7XHJcbiIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIFBGLkhldXJpc3RpY1xyXG4gKiBAZGVzY3JpcHRpb24gQSBjb2xsZWN0aW9uIG9mIGhldXJpc3RpYyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWFuaGF0dGFuIGRpc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIERpZmZlcmVuY2UgaW4geC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHkgLSBEaWZmZXJlbmNlIGluIHkuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBkeCArIGR5XHJcbiAgICovXHJcbiAgbWFuaGF0dGFuOiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgcmV0dXJuIGR4ICsgZHk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogRXVjbGlkZWFuIGRpc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIERpZmZlcmVuY2UgaW4geC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHkgLSBEaWZmZXJlbmNlIGluIHkuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxyXG4gICAqL1xyXG4gIGV1Y2xpZGVhbjogZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIE9jdGlsZSBkaXN0YW5jZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBEaWZmZXJlbmNlIGluIHguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR5IC0gRGlmZmVyZW5jZSBpbiB5LlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgZm9yIGdyaWRzXHJcbiAgICovXHJcbiAgb2N0aWxlOiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgdmFyIEYgPSBNYXRoLlNRUlQyIC0gMTtcclxuICAgICAgcmV0dXJuIChkeCA8IGR5KSA/IEYgKiBkeCArIGR5IDogRiAqIGR5ICsgZHg7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlYnlzaGV2IGRpc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIERpZmZlcmVuY2UgaW4geC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHkgLSBEaWZmZXJlbmNlIGluIHkuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBtYXgoZHgsIGR5KVxyXG4gICAqL1xyXG4gIGNoZWJ5c2hldjogZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heChkeCwgZHkpO1xyXG4gIH1cclxuXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBBIG5vZGUgaW4gZ3JpZC4gXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgc29tZSBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhIG5vZGUgYW5kIGN1c3RvbSBcclxuICogYXR0cmlidXRlcyBtYXkgYmUgYWRkZWQsIGRlcGVuZGluZyBvbiB0aGUgYWxnb3JpdGhtcycgbmVlZHMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUgb24gdGhlIGdyaWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtib29sZWFufSBbd2Fsa2FibGVdIC0gV2hldGhlciB0aGlzIG5vZGUgaXMgd2Fsa2FibGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBOb2RlKHgsIHksIHdhbGthYmxlKSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUgb24gdGhlIGdyaWQuXHJcbiAgICAgKiBAdHlwZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICAgICAqIEB0eXBlIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgbm9kZSBjYW4gYmUgd2Fsa2VkIHRocm91Z2guXHJcbiAgICAgKiBAdHlwZSBib29sZWFuXHJcbiAgICAgKi9cclxuICAgIHRoaXMud2Fsa2FibGUgPSAod2Fsa2FibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB3YWxrYWJsZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9kZTtcclxuIiwiLyoqXHJcbiAqIEJhY2t0cmFjZSBhY2NvcmRpbmcgdG8gdGhlIHBhcmVudCByZWNvcmRzIGFuZCByZXR1cm4gdGhlIHBhdGguXHJcbiAqIChpbmNsdWRpbmcgYm90aCBzdGFydCBhbmQgZW5kIG5vZGVzKVxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgRW5kIG5vZGVcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHRoZSBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBiYWNrdHJhY2Uobm9kZSkge1xyXG4gICAgdmFyIHBhdGggPSBbW25vZGUueCwgbm9kZS55XV07XHJcbiAgICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgcGF0aC5wdXNoKFtub2RlLngsIG5vZGUueV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGgucmV2ZXJzZSgpO1xyXG59XHJcbmV4cG9ydHMuYmFja3RyYWNlID0gYmFja3RyYWNlO1xyXG5cclxuLyoqXHJcbiAqIEJhY2t0cmFjZSBmcm9tIHN0YXJ0IGFuZCBlbmQgbm9kZSwgYW5kIHJldHVybiB0aGUgcGF0aC5cclxuICogKGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZCBlbmQgbm9kZXMpXHJcbiAqIEBwYXJhbSB7Tm9kZX1cclxuICogQHBhcmFtIHtOb2RlfVxyXG4gKi9cclxuZnVuY3Rpb24gYmlCYWNrdHJhY2Uobm9kZUEsIG5vZGVCKSB7XHJcbiAgICB2YXIgcGF0aEEgPSBiYWNrdHJhY2Uobm9kZUEpLFxyXG4gICAgICAgIHBhdGhCID0gYmFja3RyYWNlKG5vZGVCKTtcclxuICAgIHJldHVybiBwYXRoQS5jb25jYXQocGF0aEIucmV2ZXJzZSgpKTtcclxufVxyXG5leHBvcnRzLmJpQmFja3RyYWNlID0gYmlCYWNrdHJhY2U7XHJcblxyXG4vKipcclxuICogQ29tcHV0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBwYXRoLlxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBwYXRoIFRoZSBwYXRoXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGxlbmd0aCBvZiB0aGUgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gcGF0aExlbmd0aChwYXRoKSB7XHJcbiAgICB2YXIgaSwgc3VtID0gMCwgYSwgYiwgZHgsIGR5O1xyXG4gICAgZm9yIChpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBhID0gcGF0aFtpIC0gMV07XHJcbiAgICAgICAgYiA9IHBhdGhbaV07XHJcbiAgICAgICAgZHggPSBhWzBdIC0gYlswXTtcclxuICAgICAgICBkeSA9IGFbMV0gLSBiWzFdO1xyXG4gICAgICAgIHN1bSArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bTtcclxufVxyXG5leHBvcnRzLnBhdGhMZW5ndGggPSBwYXRoTGVuZ3RoO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiB0aGUgc3RhcnQgYW5kIGVuZCBjb29yZGluYXRlcywgcmV0dXJuIGFsbCB0aGUgY29vcmRpbmF0ZXMgbHlpbmdcclxuICogb24gdGhlIGxpbmUgZm9ybWVkIGJ5IHRoZXNlIGNvb3JkaW5hdGVzLCBiYXNlZCBvbiBCcmVzZW5oYW0ncyBhbGdvcml0aG0uXHJcbiAqIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlc2VuaGFtJ3NfbGluZV9hbGdvcml0aG0jU2ltcGxpZmljYXRpb25cclxuICogQHBhcmFtIHtudW1iZXJ9IHgwIFN0YXJ0IHggY29vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geTAgU3RhcnQgeSBjb29yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4MSBFbmQgeCBjb29yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5MSBFbmQgeSBjb29yZGluYXRlXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgY29vcmRpbmF0ZXMgb24gdGhlIGxpbmVcclxuICovXHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICB2YXIgYWJzID0gTWF0aC5hYnMsXHJcbiAgICAgICAgbGluZSA9IFtdLFxyXG4gICAgICAgIHN4LCBzeSwgZHgsIGR5LCBlcnIsIGUyO1xyXG5cclxuICAgIGR4ID0gYWJzKHgxIC0geDApO1xyXG4gICAgZHkgPSBhYnMoeTEgLSB5MCk7XHJcblxyXG4gICAgc3ggPSAoeDAgPCB4MSkgPyAxIDogLTE7XHJcbiAgICBzeSA9ICh5MCA8IHkxKSA/IDEgOiAtMTtcclxuXHJcbiAgICBlcnIgPSBkeCAtIGR5O1xyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKFt4MCwgeTBdKTtcclxuXHJcbiAgICAgICAgaWYgKHgwID09PSB4MSAmJiB5MCA9PT0geTEpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGUyID0gMiAqIGVycjtcclxuICAgICAgICBpZiAoZTIgPiAtZHkpIHtcclxuICAgICAgICAgICAgZXJyID0gZXJyIC0gZHk7XHJcbiAgICAgICAgICAgIHgwID0geDAgKyBzeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUyIDwgZHgpIHtcclxuICAgICAgICAgICAgZXJyID0gZXJyICsgZHg7XHJcbiAgICAgICAgICAgIHkwID0geTAgKyBzeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIGNvbXByZXNzZWQgcGF0aCwgcmV0dXJuIGEgbmV3IHBhdGggdGhhdCBoYXMgYWxsIHRoZSBzZWdtZW50c1xyXG4gKiBpbiBpdCBpbnRlcnBvbGF0ZWQuXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGV4cGFuZGVkIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIGV4cGFuZFBhdGgocGF0aCkge1xyXG4gICAgdmFyIGV4cGFuZGVkID0gW10sXHJcbiAgICAgICAgbGVuID0gcGF0aC5sZW5ndGgsXHJcbiAgICAgICAgY29vcmQwLCBjb29yZDEsXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkLFxyXG4gICAgICAgIGludGVycG9sYXRlZExlbixcclxuICAgICAgICBpLCBqO1xyXG5cclxuICAgIGlmIChsZW4gPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gLSAxOyArK2kpIHtcclxuICAgICAgICBjb29yZDAgPSBwYXRoW2ldO1xyXG4gICAgICAgIGNvb3JkMSA9IHBhdGhbaSArIDFdO1xyXG5cclxuICAgICAgICBpbnRlcnBvbGF0ZWQgPSBpbnRlcnBvbGF0ZShjb29yZDBbMF0sIGNvb3JkMFsxXSwgY29vcmQxWzBdLCBjb29yZDFbMV0pO1xyXG4gICAgICAgIGludGVycG9sYXRlZExlbiA9IGludGVycG9sYXRlZC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGludGVycG9sYXRlZExlbiAtIDE7ICsraikge1xyXG4gICAgICAgICAgICBleHBhbmRlZC5wdXNoKGludGVycG9sYXRlZFtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwYW5kZWQucHVzaChwYXRoW2xlbiAtIDFdKTtcclxuXHJcbiAgICByZXR1cm4gZXhwYW5kZWQ7XHJcbn1cclxuZXhwb3J0cy5leHBhbmRQYXRoID0gZXhwYW5kUGF0aDtcclxuXHJcblxyXG4vKipcclxuICogU21vb3RoZW4gdGhlIGdpdmUgcGF0aC5cclxuICogVGhlIG9yaWdpbmFsIHBhdGggd2lsbCBub3QgYmUgbW9kaWZpZWQ7IGEgbmV3IHBhdGggd2lsbCBiZSByZXR1cm5lZC5cclxuICogQHBhcmFtIHtQRi5HcmlkfSBncmlkXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIHNtb290aGVuUGF0aChncmlkLCBwYXRoKSB7XHJcbiAgICB2YXIgbGVuID0gcGF0aC5sZW5ndGgsXHJcbiAgICAgICAgeDAgPSBwYXRoWzBdWzBdLCAgICAgICAgLy8gcGF0aCBzdGFydCB4XHJcbiAgICAgICAgeTAgPSBwYXRoWzBdWzFdLCAgICAgICAgLy8gcGF0aCBzdGFydCB5XHJcbiAgICAgICAgeDEgPSBwYXRoW2xlbiAtIDFdWzBdLCAgLy8gcGF0aCBlbmQgeFxyXG4gICAgICAgIHkxID0gcGF0aFtsZW4gLSAxXVsxXSwgIC8vIHBhdGggZW5kIHlcclxuICAgICAgICBzeCwgc3ksICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IHN0YXJ0IGNvb3JkaW5hdGVcclxuICAgICAgICBleCwgZXksICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGVuZCBjb29yZGluYXRlXHJcbiAgICAgICAgbmV3UGF0aCxcclxuICAgICAgICBpLCBqLCBjb29yZCwgbGluZSwgdGVzdENvb3JkLCBibG9ja2VkO1xyXG5cclxuICAgIHN4ID0geDA7XHJcbiAgICBzeSA9IHkwO1xyXG4gICAgbmV3UGF0aCA9IFtbc3gsIHN5XV07XHJcblxyXG4gICAgZm9yIChpID0gMjsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgY29vcmQgPSBwYXRoW2ldO1xyXG4gICAgICAgIGV4ID0gY29vcmRbMF07XHJcbiAgICAgICAgZXkgPSBjb29yZFsxXTtcclxuICAgICAgICBsaW5lID0gaW50ZXJwb2xhdGUoc3gsIHN5LCBleCwgZXkpO1xyXG5cclxuICAgICAgICBibG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChqID0gMTsgaiA8IGxpbmUubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgdGVzdENvb3JkID0gbGluZVtqXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQodGVzdENvb3JkWzBdLCB0ZXN0Q29vcmRbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9ja2VkKSB7XHJcbiAgICAgICAgICAgIGxhc3RWYWxpZENvb3JkID0gcGF0aFtpIC0gMV07XHJcbiAgICAgICAgICAgIG5ld1BhdGgucHVzaChsYXN0VmFsaWRDb29yZCk7XHJcbiAgICAgICAgICAgIHN4ID0gbGFzdFZhbGlkQ29vcmRbMF07XHJcbiAgICAgICAgICAgIHN5ID0gbGFzdFZhbGlkQ29vcmRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV3UGF0aC5wdXNoKFt4MSwgeTFdKTtcclxuXHJcbiAgICByZXR1cm4gbmV3UGF0aDtcclxufVxyXG5leHBvcnRzLnNtb290aGVuUGF0aCA9IHNtb290aGVuUGF0aDtcclxuXHJcblxyXG4vKipcclxuICogQ29tcHJlc3MgYSBwYXRoLCByZW1vdmUgcmVkdW5kYW50IG5vZGVzIHdpdGhvdXQgYWx0ZXJpbmcgdGhlIHNoYXBlXHJcbiAqIFRoZSBvcmlnaW5hbCBwYXRoIGlzIG5vdCBtb2RpZmllZFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBwYXRoIFRoZSBwYXRoXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgY29tcHJlc3NlZCBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wcmVzc1BhdGgocGF0aCkge1xyXG5cclxuICAgIC8vIG5vdGhpbmcgdG8gY29tcHJlc3NcclxuICAgIGlmKHBhdGgubGVuZ3RoIDwgMykge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb21wcmVzc2VkID0gW10sXHJcbiAgICAgICAgc3ggPSBwYXRoWzBdWzBdLCAvLyBzdGFydCB4XHJcbiAgICAgICAgc3kgPSBwYXRoWzBdWzFdLCAvLyBzdGFydCB5XHJcbiAgICAgICAgcHggPSBwYXRoWzFdWzBdLCAvLyBzZWNvbmQgcG9pbnQgeFxyXG4gICAgICAgIHB5ID0gcGF0aFsxXVsxXSwgLy8gc2Vjb25kIHBvaW50IHlcclxuICAgICAgICBkeCA9IHB4IC0gc3gsIC8vIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXHJcbiAgICAgICAgZHkgPSBweSAtIHN5LCAvLyBkaXJlY3Rpb24gYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xyXG4gICAgICAgIGx4LCBseSxcclxuICAgICAgICBsZHgsIGxkeSxcclxuICAgICAgICBzcSwgaTtcclxuXHJcbiAgICAvLyBub3JtYWxpemUgdGhlIGRpcmVjdGlvblxyXG4gICAgc3EgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcbiAgICBkeCAvPSBzcTtcclxuICAgIGR5IC89IHNxO1xyXG5cclxuICAgIC8vIHN0YXJ0IHRoZSBuZXcgcGF0aFxyXG4gICAgY29tcHJlc3NlZC5wdXNoKFtzeCxzeV0pO1xyXG5cclxuICAgIGZvcihpID0gMjsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgcG9pbnRcclxuICAgICAgICBseCA9IHB4O1xyXG4gICAgICAgIGx5ID0gcHk7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXN0IGRpcmVjdGlvblxyXG4gICAgICAgIGxkeCA9IGR4O1xyXG4gICAgICAgIGxkeSA9IGR5O1xyXG5cclxuICAgICAgICAvLyBuZXh0IHBvaW50XHJcbiAgICAgICAgcHggPSBwYXRoW2ldWzBdO1xyXG4gICAgICAgIHB5ID0gcGF0aFtpXVsxXTtcclxuXHJcbiAgICAgICAgLy8gbmV4dCBkaXJlY3Rpb25cclxuICAgICAgICBkeCA9IHB4IC0gbHg7XHJcbiAgICAgICAgZHkgPSBweSAtIGx5O1xyXG5cclxuICAgICAgICAvLyBub3JtYWxpemVcclxuICAgICAgICBzcSA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuICAgICAgICBkeCAvPSBzcTtcclxuICAgICAgICBkeSAvPSBzcTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIGRpcmVjdGlvbiBoYXMgY2hhbmdlZCwgc3RvcmUgdGhlIHBvaW50XHJcbiAgICAgICAgaWYgKCBkeCAhPT0gbGR4IHx8IGR5ICE9PSBsZHkgKSB7XHJcbiAgICAgICAgICAgIGNvbXByZXNzZWQucHVzaChbbHgsbHldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RvcmUgdGhlIGxhc3QgcG9pbnRcclxuICAgIGNvbXByZXNzZWQucHVzaChbcHgscHldKTtcclxuXHJcbiAgICByZXR1cm4gY29tcHJlc3NlZDtcclxufVxyXG5leHBvcnRzLmNvbXByZXNzUGF0aCA9IGNvbXByZXNzUGF0aDtcclxuIiwidmFyIEhlYXAgICAgICAgPSByZXF1aXJlKCdoZWFwJyk7XHJcbnZhciBVdGlsICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBIZXVyaXN0aWMgID0gcmVxdWlyZSgnLi4vY29yZS9IZXVyaXN0aWMnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBBKiBwYXRoLWZpbmRlci4gQmFzZWQgdXBvbiBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL2phdmFzY3JpcHQtYXN0YXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nIFxyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0LndlaWdodCBXZWlnaHQgdG8gYXBwbHkgdG8gdGhlIGhldXJpc3RpYyB0byBhbGxvdyBmb3JcclxuICogICAgIHN1Ym9wdGltYWwgcGF0aHMsIGluIG9yZGVyIHRvIHNwZWVkIHVwIHRoZSBzZWFyY2guXHJcbiAqL1xyXG5mdW5jdGlvbiBBU3RhckZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIHRoaXMud2VpZ2h0ID0gb3B0LndlaWdodCB8fCAxO1xyXG4gICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gb3B0LmRpYWdvbmFsTW92ZW1lbnQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQgdGhlIG1hbmhhdHRhbiBoZXVyaXN0aWMgaXMgbm90XHJcbiAgICAvL2FkbWlzc2libGUuIEl0IHNob3VsZCBiZSBvY3RpbGUgaW5zdGVhZFxyXG4gICAgaWYgKHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcikge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm9jdGlsZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuQVN0YXJGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBvcGVuTGlzdCA9IG5ldyBIZWFwKGZ1bmN0aW9uKG5vZGVBLCBub2RlQikge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUEuZiAtIG5vZGVCLmY7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSxcclxuICAgICAgICBoZXVyaXN0aWMgPSB0aGlzLmhldXJpc3RpYyxcclxuICAgICAgICBkaWFnb25hbE1vdmVtZW50ID0gdGhpcy5kaWFnb25hbE1vdmVtZW50LFxyXG4gICAgICAgIHdlaWdodCA9IHRoaXMud2VpZ2h0LFxyXG4gICAgICAgIGFicyA9IE1hdGguYWJzLCBTUVJUMiA9IE1hdGguU1FSVDIsXHJcbiAgICAgICAgbm9kZSwgbmVpZ2hib3JzLCBuZWlnaGJvciwgaSwgbCwgeCwgeSwgbmc7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBgZ2AgYW5kIGBmYCB2YWx1ZSBvZiB0aGUgc3RhcnQgbm9kZSB0byBiZSAwXHJcbiAgICBzdGFydE5vZGUuZyA9IDA7XHJcbiAgICBzdGFydE5vZGUuZiA9IDA7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgc3RhcnQgbm9kZSBpbnRvIHRoZSBvcGVuIGxpc3RcclxuICAgIG9wZW5MaXN0LnB1c2goc3RhcnROb2RlKTtcclxuICAgIHN0YXJ0Tm9kZS5vcGVuZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIHdoaWxlIHRoZSBvcGVuIGxpc3QgaXMgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAoIW9wZW5MaXN0LmVtcHR5KCkpIHtcclxuICAgICAgICAvLyBwb3AgdGhlIHBvc2l0aW9uIG9mIG5vZGUgd2hpY2ggaGFzIHRoZSBtaW5pbXVtIGBmYCB2YWx1ZS5cclxuICAgICAgICBub2RlID0gb3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBpZiByZWFjaGVkIHRoZSBlbmQgcG9zaXRpb24sIGNvbnN0cnVjdCB0aGUgcGF0aCBhbmQgcmV0dXJuIGl0XHJcbiAgICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmFja3RyYWNlKGVuZE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IG5laWdib3VycyBvZiB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeCA9IG5laWdoYm9yLng7XHJcbiAgICAgICAgICAgIHkgPSBuZWlnaGJvci55O1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGN1cnJlbnQgbm9kZSBhbmQgdGhlIG5laWdoYm9yXHJcbiAgICAgICAgICAgIC8vIGFuZCBjYWxjdWxhdGUgdGhlIG5leHQgZyBzY29yZVxyXG4gICAgICAgICAgICBuZyA9IG5vZGUuZyArICgoeCAtIG5vZGUueCA9PT0gMCB8fCB5IC0gbm9kZS55ID09PSAwKSA/IDEgOiBTUVJUMik7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbmVpZ2hib3IgaGFzIG5vdCBiZWVuIGluc3BlY3RlZCB5ZXQsIG9yXHJcbiAgICAgICAgICAgIC8vIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0IGZyb20gdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCB8fCBuZyA8IG5laWdoYm9yLmcpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmcgPSBuZztcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmggPSBuZWlnaGJvci5oIHx8IHdlaWdodCAqIGhldXJpc3RpYyhhYnMoeCAtIGVuZFgpLCBhYnMoeSAtIGVuZFkpKTtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmYgPSBuZWlnaGJvci5nICsgbmVpZ2hib3IuaDtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmVpZ2hib3IgY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgaXRzIGYgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCwgd2UgaGF2ZSB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBpdHMgcG9zaXRpb24gaW4gdGhlIG9wZW4gbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnVwZGF0ZUl0ZW0obmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgZm9yIGVhY2ggbmVpZ2hib3JcclxuICAgIH0gLy8gZW5kIHdoaWxlIG5vdCBvcGVuIGxpc3QgZW1wdHlcclxuXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQVN0YXJGaW5kZXI7XHJcbiIsInZhciBBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBCZXN0LUZpcnN0LVNlYXJjaCBwYXRoLWZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlbmRzIEFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqL1xyXG5mdW5jdGlvbiBCZXN0Rmlyc3RGaW5kZXIob3B0KSB7XHJcbiAgICBBU3RhckZpbmRlci5jYWxsKHRoaXMsIG9wdCk7XHJcblxyXG4gICAgdmFyIG9yaWcgPSB0aGlzLmhldXJpc3RpYztcclxuICAgIHRoaXMuaGV1cmlzdGljID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWcoZHgsIGR5KSAqIDEwMDAwMDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5CZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlID0gbmV3IEFTdGFyRmluZGVyKCk7XHJcbkJlc3RGaXJzdEZpbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCZXN0Rmlyc3RGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJlc3RGaXJzdEZpbmRlcjtcclxuIiwidmFyIEhlYXAgICAgICAgPSByZXF1aXJlKCdoZWFwJyk7XHJcbnZhciBVdGlsICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBIZXVyaXN0aWMgID0gcmVxdWlyZSgnLi4vY29yZS9IZXVyaXN0aWMnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBBKiBwYXRoLWZpbmRlci5cclxuICogYmFzZWQgdXBvbiBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL2phdmFzY3JpcHQtYXN0YXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQud2VpZ2h0IFdlaWdodCB0byBhcHBseSB0byB0aGUgaGV1cmlzdGljIHRvIGFsbG93IGZvclxyXG4gKiAgICAgc3Vib3B0aW1hbCBwYXRocywgaW4gb3JkZXIgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaC5cclxuICovXHJcbmZ1bmN0aW9uIEJpQVN0YXJGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmFsbG93RGlhZ29uYWwgPSBvcHQuYWxsb3dEaWFnb25hbDtcclxuICAgIHRoaXMuZG9udENyb3NzQ29ybmVycyA9IG9wdC5kb250Q3Jvc3NDb3JuZXJzO1xyXG4gICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gb3B0LmRpYWdvbmFsTW92ZW1lbnQ7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIHRoaXMud2VpZ2h0ID0gb3B0LndlaWdodCB8fCAxO1xyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9XaGVuIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQgdGhlIG1hbmhhdHRhbiBoZXVyaXN0aWMgaXMgbm90IGFkbWlzc2libGVcclxuICAgIC8vSXQgc2hvdWxkIGJlIG9jdGlsZSBpbnN0ZWFkXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMub2N0aWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5CaUFTdGFyRmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICB2YXIgY21wID0gZnVuY3Rpb24obm9kZUEsIG5vZGVCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlQS5mIC0gbm9kZUIuZjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0T3Blbkxpc3QgPSBuZXcgSGVhcChjbXApLFxyXG4gICAgICAgIGVuZE9wZW5MaXN0ID0gbmV3IEhlYXAoY21wKSxcclxuICAgICAgICBzdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgIGhldXJpc3RpYyA9IHRoaXMuaGV1cmlzdGljLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgd2VpZ2h0ID0gdGhpcy53ZWlnaHQsXHJcbiAgICAgICAgYWJzID0gTWF0aC5hYnMsIFNRUlQyID0gTWF0aC5TUVJUMixcclxuICAgICAgICBub2RlLCBuZWlnaGJvcnMsIG5laWdoYm9yLCBpLCBsLCB4LCB5LCBuZyxcclxuICAgICAgICBCWV9TVEFSVCA9IDEsIEJZX0VORCA9IDI7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBgZ2AgYW5kIGBmYCB2YWx1ZSBvZiB0aGUgc3RhcnQgbm9kZSB0byBiZSAwXHJcbiAgICAvLyBhbmQgcHVzaCBpdCBpbnRvIHRoZSBzdGFydCBvcGVuIGxpc3RcclxuICAgIHN0YXJ0Tm9kZS5nID0gMDtcclxuICAgIHN0YXJ0Tm9kZS5mID0gMDtcclxuICAgIHN0YXJ0T3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IEJZX1NUQVJUO1xyXG5cclxuICAgIC8vIHNldCB0aGUgYGdgIGFuZCBgZmAgdmFsdWUgb2YgdGhlIGVuZCBub2RlIHRvIGJlIDBcclxuICAgIC8vIGFuZCBwdXNoIGl0IGludG8gdGhlIG9wZW4gb3BlbiBsaXN0XHJcbiAgICBlbmROb2RlLmcgPSAwO1xyXG4gICAgZW5kTm9kZS5mID0gMDtcclxuICAgIGVuZE9wZW5MaXN0LnB1c2goZW5kTm9kZSk7XHJcbiAgICBlbmROb2RlLm9wZW5lZCA9IEJZX0VORDtcclxuXHJcbiAgICAvLyB3aGlsZSBib3RoIHRoZSBvcGVuIGxpc3RzIGFyZSBub3QgZW1wdHlcclxuICAgIHdoaWxlICghc3RhcnRPcGVuTGlzdC5lbXB0eSgpICYmICFlbmRPcGVuTGlzdC5lbXB0eSgpKSB7XHJcblxyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2Ygc3RhcnQgbm9kZSB3aGljaCBoYXMgdGhlIG1pbmltdW0gYGZgIHZhbHVlLlxyXG4gICAgICAgIG5vZGUgPSBzdGFydE9wZW5MaXN0LnBvcCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IG5laWdib3VycyBvZiB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3Iub3BlbmVkID09PSBCWV9FTkQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5vZGUsIG5laWdoYm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeCA9IG5laWdoYm9yLng7XHJcbiAgICAgICAgICAgIHkgPSBuZWlnaGJvci55O1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGN1cnJlbnQgbm9kZSBhbmQgdGhlIG5laWdoYm9yXHJcbiAgICAgICAgICAgIC8vIGFuZCBjYWxjdWxhdGUgdGhlIG5leHQgZyBzY29yZVxyXG4gICAgICAgICAgICBuZyA9IG5vZGUuZyArICgoeCAtIG5vZGUueCA9PT0gMCB8fCB5IC0gbm9kZS55ID09PSAwKSA/IDEgOiBTUVJUMik7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbmVpZ2hib3IgaGFzIG5vdCBiZWVuIGluc3BlY3RlZCB5ZXQsIG9yXHJcbiAgICAgICAgICAgIC8vIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0IGZyb20gdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCB8fCBuZyA8IG5laWdoYm9yLmcpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmcgPSBuZztcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmggPSBuZWlnaGJvci5oIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ICogaGV1cmlzdGljKGFicyh4IC0gZW5kWCksIGFicyh5IC0gZW5kWSkpO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZiA9IG5laWdoYm9yLmcgKyBuZWlnaGJvci5oO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gQllfU1RBUlQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZWlnaGJvciBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBpdHMgZiB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkLCB3ZSBoYXZlIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGl0cyBwb3NpdGlvbiBpbiB0aGUgb3BlbiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPcGVuTGlzdC51cGRhdGVJdGVtKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZW5kIGZvciBlYWNoIG5laWdoYm9yXHJcblxyXG5cclxuICAgICAgICAvLyBwb3AgdGhlIHBvc2l0aW9uIG9mIGVuZCBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IGVuZE9wZW5MaXN0LnBvcCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IG5laWdib3VycyBvZiB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3Iub3BlbmVkID09PSBCWV9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmlCYWNrdHJhY2UobmVpZ2hib3IsIG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4ID0gbmVpZ2hib3IueDtcclxuICAgICAgICAgICAgeSA9IG5laWdoYm9yLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gY3VycmVudCBub2RlIGFuZCB0aGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgbmV4dCBnIHNjb3JlXHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgKCh4IC0gbm9kZS54ID09PSAwIHx8IHkgLSBub2RlLnkgPT09IDApID8gMSA6IFNRUlQyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZWlnaGJvciBoYXMgbm90IGJlZW4gaW5zcGVjdGVkIHlldCwgb3JcclxuICAgICAgICAgICAgLy8gY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QgZnJvbSB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkIHx8IG5nIDwgbmVpZ2hib3IuZykge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuaCA9IG5laWdoYm9yLmggfHxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQgKiBoZXVyaXN0aWMoYWJzKHggLSBzdGFydFgpLCBhYnMoeSAtIHN0YXJ0WSkpO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZiA9IG5laWdoYm9yLmcgKyBuZWlnaGJvci5oO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZE9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IEJZX0VORDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5laWdoYm9yIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIGl0cyBmIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQsIHdlIGhhdmUgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaXRzIHBvc2l0aW9uIGluIHRoZSBvcGVuIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBlbmRPcGVuTGlzdC51cGRhdGVJdGVtKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZW5kIGZvciBlYWNoIG5laWdoYm9yXHJcbiAgICB9IC8vIGVuZCB3aGlsZSBub3Qgb3BlbiBsaXN0IGVtcHR5XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpQVN0YXJGaW5kZXI7XHJcbiIsInZhciBCaUFTdGFyRmluZGVyID0gcmVxdWlyZSgnLi9CaUFTdGFyRmluZGVyJyk7XHJcblxyXG4vKipcclxuICogQmktZGlyZWNpdGlvbmFsIEJlc3QtRmlyc3QtU2VhcmNoIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQmlBU3RhckZpbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKi9cclxuZnVuY3Rpb24gQmlCZXN0Rmlyc3RGaW5kZXIob3B0KSB7XHJcbiAgICBCaUFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuXHJcbiAgICB2YXIgb3JpZyA9IHRoaXMuaGV1cmlzdGljO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gb3JpZyhkeCwgZHkpICogMTAwMDAwMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkJpQmVzdEZpcnN0RmluZGVyLnByb3RvdHlwZSA9IG5ldyBCaUFTdGFyRmluZGVyKCk7XHJcbkJpQmVzdEZpcnN0RmluZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJpQmVzdEZpcnN0RmluZGVyO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCaUJlc3RGaXJzdEZpbmRlcjtcclxuIiwidmFyIFV0aWwgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBCaS1kaXJlY3Rpb25hbCBCcmVhZHRoLUZpcnN0LVNlYXJjaCBwYXRoIGZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBCaUJyZWFkdGhGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuQmlCcmVhZHRoRmlyc3RGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBzdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgIHN0YXJ0T3Blbkxpc3QgPSBbXSwgZW5kT3Blbkxpc3QgPSBbXSxcclxuICAgICAgICBuZWlnaGJvcnMsIG5laWdoYm9yLCBub2RlLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgQllfU1RBUlQgPSAwLCBCWV9FTkQgPSAxLFxyXG4gICAgICAgIGksIGw7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgc3RhcnQgYW5kIGVuZCBub2RlcyBpbnRvIHRoZSBxdWV1ZXNcclxuICAgIHN0YXJ0T3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcbiAgICBzdGFydE5vZGUuYnkgPSBCWV9TVEFSVDtcclxuXHJcbiAgICBlbmRPcGVuTGlzdC5wdXNoKGVuZE5vZGUpO1xyXG4gICAgZW5kTm9kZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgZW5kTm9kZS5ieSA9IEJZX0VORDtcclxuXHJcbiAgICAvLyB3aGlsZSBib3RoIHRoZSBxdWV1ZXMgYXJlIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKHN0YXJ0T3Blbkxpc3QubGVuZ3RoICYmIGVuZE9wZW5MaXN0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAvLyBleHBhbmQgc3RhcnQgb3BlbiBsaXN0XHJcblxyXG4gICAgICAgIG5vZGUgPSBzdGFydE9wZW5MaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgbm9kZSBoYXMgYmVlbiBpbnNwZWN0ZWQgYnkgdGhlIHJldmVyc2VkIHNlYXJjaCxcclxuICAgICAgICAgICAgICAgIC8vIHRoZW4gYSBwYXRoIGlzIGZvdW5kLlxyXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLmJ5ID09PSBCWV9FTkQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5iaUJhY2t0cmFjZShub2RlLCBuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFydE9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5ieSA9IEJZX1NUQVJUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXhwYW5kIGVuZCBvcGVuIGxpc3RcclxuXHJcbiAgICAgICAgbm9kZSA9IGVuZE9wZW5MaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvci5ieSA9PT0gQllfU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5iaUJhY2t0cmFjZShuZWlnaGJvciwgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmRPcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVpZ2hib3IuYnkgPSBCWV9FTkQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCaUJyZWFkdGhGaXJzdEZpbmRlcjtcclxuIiwidmFyIEJpQVN0YXJGaW5kZXIgPSByZXF1aXJlKCcuL0JpQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBCaS1kaXJlY3Rpb25hbCBEaWprc3RyYSBwYXRoLWZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlbmRzIEJpQVN0YXJGaW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIEJpRGlqa3N0cmFGaW5kZXIob3B0KSB7XHJcbiAgICBCaUFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5CaURpamtzdHJhRmluZGVyLnByb3RvdHlwZSA9IG5ldyBCaUFTdGFyRmluZGVyKCk7XHJcbkJpRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlEaWprc3RyYUZpbmRlcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmlEaWprc3RyYUZpbmRlcjtcclxuIiwidmFyIFV0aWwgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBCcmVhZHRoLUZpcnN0LVNlYXJjaCBwYXRoIGZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBCcmVhZHRoRmlyc3RGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmFsbG93RGlhZ29uYWwgPSBvcHQuYWxsb3dEaWFnb25hbDtcclxuICAgIHRoaXMuZG9udENyb3NzQ29ybmVycyA9IG9wdC5kb250Q3Jvc3NDb3JuZXJzO1xyXG4gICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gb3B0LmRpYWdvbmFsTW92ZW1lbnQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuQnJlYWR0aEZpcnN0RmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICB2YXIgb3Blbkxpc3QgPSBbXSxcclxuICAgICAgICBkaWFnb25hbE1vdmVtZW50ID0gdGhpcy5kaWFnb25hbE1vdmVtZW50LFxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgbmVpZ2hib3JzLCBuZWlnaGJvciwgbm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBwb3MgaW50byB0aGUgcXVldWVcclxuICAgIG9wZW5MaXN0LnB1c2goc3RhcnROb2RlKTtcclxuICAgIHN0YXJ0Tm9kZS5vcGVuZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIHdoaWxlIHRoZSBxdWV1ZSBpcyBub3QgZW1wdHlcclxuICAgIHdoaWxlIChvcGVuTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAvLyB0YWtlIHRoZSBmcm9udCBub2RlIGZyb20gdGhlIHF1ZXVlXHJcbiAgICAgICAgbm9kZSA9IG9wZW5MaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmQgcG9zaXRpb25cclxuICAgICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5iYWNrdHJhY2UoZW5kTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNraXAgdGhpcyBuZWlnaGJvciBpZiBpdCBoYXMgYmVlbiBpbnNwZWN0ZWQgYmVmb3JlXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQgfHwgbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQnJlYWR0aEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgQVN0YXJGaW5kZXIgPSByZXF1aXJlKCcuL0FTdGFyRmluZGVyJyk7XHJcblxyXG4vKipcclxuICogRGlqa3N0cmEgcGF0aC1maW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyBBU3RhckZpbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gRGlqa3N0cmFGaW5kZXIob3B0KSB7XHJcbiAgICBBU3RhckZpbmRlci5jYWxsKHRoaXMsIG9wdCk7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxufVxyXG5cclxuRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlID0gbmV3IEFTdGFyRmluZGVyKCk7XHJcbkRpamtzdHJhRmluZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERpamtzdHJhRmluZGVyO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEaWprc3RyYUZpbmRlcjtcclxuIiwidmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgTm9kZSAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvTm9kZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEl0ZXJhdGl2ZSBEZWVwaW5nIEEgU3RhciAoSURBKikgcGF0aC1maW5kZXIuXHJcbiAqXHJcbiAqIFJlY3Vyc2lvbiBiYXNlZCBvbjpcclxuICogICBodHRwOi8vd3d3LmFwbC5qaHUuZWR1L35oYWxsL0FJLVByb2dyYW1taW5nL0lEQS1TdGFyLmh0bWxcclxuICpcclxuICogUGF0aCByZXRyYWNpbmcgYmFzZWQgb246XHJcbiAqICBWLiBOYWdlc2h3YXJhIFJhbywgVmlwaW4gS3VtYXIgYW5kIEsuIFJhbWVzaFxyXG4gKiAgXCJBIFBhcmFsbGVsIEltcGxlbWVudGF0aW9uIG9mIEl0ZXJhdGl2ZS1EZWVwaW5nLUEqXCIsIEphbnVhcnkgMTk4Ny5cclxuICogIGZ0cDovL2Z0cC5jcy51dGV4YXMuZWR1Ly5zbmFwc2hvdC9ob3VybHkuMS9wdWIvQUktTGFiL3RlY2gtcmVwb3J0cy9VVC1BSS1UUi04Ny00Ni5wZGZcclxuICpcclxuICogQGF1dGhvciBHZXJhcmQgTWVpZXIgKHd3dy5nZXJhcmRtZWllci5jb20pXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0LndlaWdodCBXZWlnaHQgdG8gYXBwbHkgdG8gdGhlIGhldXJpc3RpYyB0byBhbGxvdyBmb3JcclxuICogICAgIHN1Ym9wdGltYWwgcGF0aHMsIGluIG9yZGVyIHRvIHNwZWVkIHVwIHRoZSBzZWFyY2guXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LnRyYWNrUmVjdXJzaW9uIFdoZXRoZXIgdG8gdHJhY2sgcmVjdXJzaW9uIGZvclxyXG4gKiAgICAgc3RhdGlzdGljYWwgcHVycG9zZXMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQudGltZUxpbWl0IE1heGltdW0gZXhlY3V0aW9uIHRpbWUuIFVzZSA8PSAwIGZvciBpbmZpbml0ZS5cclxuICovXHJcbmZ1bmN0aW9uIElEQVN0YXJGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmFsbG93RGlhZ29uYWwgPSBvcHQuYWxsb3dEaWFnb25hbDtcclxuICAgIHRoaXMuZG9udENyb3NzQ29ybmVycyA9IG9wdC5kb250Q3Jvc3NDb3JuZXJzO1xyXG4gICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gb3B0LmRpYWdvbmFsTW92ZW1lbnQ7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIHRoaXMud2VpZ2h0ID0gb3B0LndlaWdodCB8fCAxO1xyXG4gICAgdGhpcy50cmFja1JlY3Vyc2lvbiA9IG9wdC50cmFja1JlY3Vyc2lvbiB8fCBmYWxzZTtcclxuICAgIHRoaXMudGltZUxpbWl0ID0gb3B0LnRpbWVMaW1pdCB8fCBJbmZpbml0eTsgLy8gRGVmYXVsdDogbm8gdGltZSBsaW1pdC5cclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZCB0aGUgbWFuaGF0dGFuIGhldXJpc3RpYyBpcyBub3RcclxuICAgIC8vIGFkbWlzc2libGUsIGl0IHNob3VsZCBiZSBvY3RpbGUgaW5zdGVhZFxyXG4gICAgaWYgKHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcikge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm9jdGlsZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgdGhlIHBhdGguIFdoZW4gYW4gZW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQsIGVpdGhlclxyXG4gKiBubyBwYXRoIGlzIHBvc3NpYmxlLCBvciB0aGUgbWF4aW11bSBleGVjdXRpb24gdGltZSBpcyByZWFjaGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbklEQVN0YXJGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIC8vIFVzZWQgZm9yIHN0YXRpc3RpY3M6XHJcbiAgICB2YXIgbm9kZXNWaXNpdGVkID0gMDtcclxuXHJcbiAgICAvLyBFeGVjdXRpb24gdGltZSBsaW1pdGF0aW9uOlxyXG4gICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIC8vIEhldXJpc3RpYyBoZWxwZXI6XHJcbiAgICB2YXIgaCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZXVyaXN0aWMoTWF0aC5hYnMoYi54IC0gYS54KSwgTWF0aC5hYnMoYi55IC0gYS55KSk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy8gU3RlcCBjb3N0IGZyb20gYSB0byBiOlxyXG4gICAgdmFyIGNvc3QgPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIChhLnggPT09IGIueCB8fCBhLnkgPT09IGIueSkgPyAxIDogTWF0aC5TUVJUMjtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJREEqIHNlYXJjaCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge05vZGV9IFRoZSBub2RlIGN1cnJlbnRseSBleHBhbmRpbmcgZnJvbS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBDb3N0IHRvIHJlYWNoIHRoZSBnaXZlbiBub2RlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IE1heGltdW0gc2VhcmNoIGRlcHRoIChjdXQtb2ZmIHZhbHVlKS5cclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBmb3VuZCByb3V0ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBSZWN1cnNpb24gZGVwdGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBlaXRoZXIgYSBudW1iZXIgd2l0aCB0aGUgbmV3IG9wdGltYWwgY3V0LW9mZiBkZXB0aCxcclxuICAgICAqIG9yIGEgdmFsaWQgbm9kZSBpbnN0YW5jZSwgaW4gd2hpY2ggY2FzZSBhIHBhdGggd2FzIGZvdW5kLlxyXG4gICAgICovXHJcbiAgICB2YXIgc2VhcmNoID0gZnVuY3Rpb24obm9kZSwgZywgY3V0b2ZmLCByb3V0ZSwgZGVwdGgpIHtcclxuICAgICAgICBub2Rlc1Zpc2l0ZWQrKztcclxuXHJcbiAgICAgICAgLy8gRW5mb3JjZSB0aW1lbGltaXQ6XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxpbWl0ID4gMCAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSA+IHRoaXMudGltZUxpbWl0ICogMTAwMCkge1xyXG4gICAgICAgICAgICAvLyBFbmZvcmNlZCBhcyBcInBhdGgtbm90LWZvdW5kXCIuXHJcbiAgICAgICAgICAgIHJldHVybiBJbmZpbml0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmID0gZyArIGgobm9kZSwgZW5kKSAqIHRoaXMud2VpZ2h0O1xyXG5cclxuICAgICAgICAvLyBXZSd2ZSBzZWFyY2hlZCB0b28gZGVlcCBmb3IgdGhpcyBpdGVyYXRpb24uXHJcbiAgICAgICAgaWYgKGYgPiBjdXRvZmYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZSA9PSBlbmQpIHtcclxuICAgICAgICAgICAgcm91dGVbZGVwdGhdID0gW25vZGUueCwgbm9kZS55XTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWluLCB0LCBrLCBuZWlnaGJvdXI7XHJcblxyXG4gICAgICAgIHZhciBuZWlnaGJvdXJzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgdGhpcy5kaWFnb25hbE1vdmVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCB0aGUgbmVpZ2hib3VycywgZ2l2ZXMgbmljZXIgcGF0aHMuIEJ1dCwgdGhpcyBkZXZpYXRlc1xyXG4gICAgICAgIC8vIGZyb20gdGhlIG9yaWdpbmFsIGFsZ29yaXRobSAtIHNvIEkgbGVmdCBpdCBvdXQuXHJcbiAgICAgICAgLy9uZWlnaGJvdXJzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGgoYSwgZW5kKSAtIGgoYiwgZW5kKTtcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvKmpzaGludCAtVzA4NCAqLy8vRGlzYWJsZSB3YXJuaW5nOiBFeHBlY3RlZCBhIGNvbmRpdGlvbmFsIGV4cHJlc3Npb24gYW5kIGluc3RlYWQgc2F3IGFuIGFzc2lnbm1lbnRcclxuICAgICAgICBmb3IgKGsgPSAwLCBtaW4gPSBJbmZpbml0eTsgbmVpZ2hib3VyID0gbmVpZ2hib3Vyc1trXTsgKytrKSB7XHJcbiAgICAgICAgLypqc2hpbnQgK1cwODQgKi8vL0VuYWJsZSB3YXJuaW5nOiBFeHBlY3RlZCBhIGNvbmRpdGlvbmFsIGV4cHJlc3Npb24gYW5kIGluc3RlYWQgc2F3IGFuIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tSZWN1cnNpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldGFpbiBhIGNvcHkgZm9yIHZpc3VhbGlzYXRpb24uIER1ZSB0byByZWN1cnNpb24sIHRoaXNcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUgbWF5IGJlIHBhcnQgb2Ygb3RoZXIgcGF0aHMgdG9vLlxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3VyLnJldGFpbkNvdW50ID0gbmVpZ2hib3VyLnJldGFpbkNvdW50ICsgMSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG5laWdoYm91ci50ZXN0ZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXIudGVzdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdCA9IHNlYXJjaChuZWlnaGJvdXIsIGcgKyBjb3N0KG5vZGUsIG5laWdoYm91ciksIGN1dG9mZiwgcm91dGUsIGRlcHRoICsgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlW2RlcHRoXSA9IFtub2RlLngsIG5vZGUueV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIGEgdHlwaWNhbCBBKiBsaW5rZWQgbGlzdCwgdGhpcyB3b3VsZCB3b3JrOlxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVjcmVtZW50IGNvdW50LCB0aGVuIGRldGVybWluZSB3aGV0aGVyIGl0J3MgYWN0dWFsbHkgY2xvc2VkLlxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFja1JlY3Vyc2lvbiAmJiAoLS1uZWlnaGJvdXIucmV0YWluQ291bnQpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXIudGVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0IDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWluO1xyXG5cclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAvLyBOb2RlIGluc3RhbmNlIGxvb2t1cHM6XHJcbiAgICB2YXIgc3RhcnQgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICB2YXIgZW5kICAgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHNlYXJjaCBkZXB0aCwgZ2l2ZW4gdGhlIHR5cGljYWwgaGV1cmlzdGljIGNvbnRyYWludHMsXHJcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgbm8gY2hlYXBlciByb3V0ZSBwb3NzaWJsZS5cclxuICAgIHZhciBjdXRPZmYgPSBoKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgIHZhciBqLCByb3V0ZSwgdDtcclxuXHJcbiAgICAvLyBXaXRoIGFuIG92ZXJmbG93IHByb3RlY3Rpb24uXHJcbiAgICBmb3IgKGogPSAwOyB0cnVlOyArK2opIHtcclxuXHJcbiAgICAgICAgcm91dGUgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gU2VhcmNoIHRpbGwgY3V0LW9mZiBkZXB0aDpcclxuICAgICAgICB0ID0gc2VhcmNoKHN0YXJ0LCAwLCBjdXRPZmYsIHJvdXRlLCAwKTtcclxuXHJcbiAgICAgICAgLy8gUm91dGUgbm90IHBvc3NpYmxlLCBvciBub3QgZm91bmQgaW4gdGltZSBsaW1pdC5cclxuICAgICAgICBpZiAodCA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdCBpcyBhIG5vZGUsIGl0J3MgYWxzbyB0aGUgZW5kIG5vZGUuIFJvdXRlIGlzIG5vd1xyXG4gICAgICAgIC8vIHBvcHVsYXRlZCB3aXRoIGEgdmFsaWQgcGF0aCB0byB0aGUgZW5kIG5vZGUuXHJcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRyeSBhZ2FpbiwgdGhpcyB0aW1lIHdpdGggYSBkZWVwZXIgY3V0LW9mZi4gVGhlIHQgc2NvcmVcclxuICAgICAgICAvLyBpcyB0aGUgY2xvc2VzdCB3ZSBnb3QgdG8gdGhlIGVuZCBub2RlLlxyXG4gICAgICAgIGN1dE9mZiA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBfc2hvdWxkXyBuZXZlciB0byBiZSByZWFjaGVkLlxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJREFTdGFyRmluZGVyO1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBKdW1wUG9pbnRGaW5kZXJCYXNlID0gcmVxdWlyZSgnLi9KdW1wUG9pbnRGaW5kZXJCYXNlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobSB3aGljaCBhbHdheXMgbW92ZXNcclxuICogZGlhZ29uYWxseSBpcnJlc3BlY3RpdmUgb2YgdGhlIG51bWJlciBvZiBvYnN0YWNsZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBKUEZBbHdheXNNb3ZlRGlhZ29uYWxseShvcHQpIHtcclxuICAgIEp1bXBQb2ludEZpbmRlckJhc2UuY2FsbCh0aGlzLCBvcHQpO1xyXG59XHJcblxyXG5KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUgPSBuZXcgSnVtcFBvaW50RmluZGVyQmFzZSgpO1xyXG5KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUEZBbHdheXNNb3ZlRGlhZ29uYWxseTtcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggcmVjdXJzaXZlbHkgaW4gdGhlIGRpcmVjdGlvbiAocGFyZW50IC0+IGNoaWxkKSwgc3RvcHBpbmcgb25seSB3aGVuIGFcclxuICoganVtcCBwb2ludCBpcyBmb3VuZC5cclxuICogQHByb3RlY3RlZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHgsIHkgY29vcmRpbmF0ZSBvZiB0aGUganVtcCBwb2ludFxyXG4gKiAgICAgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuX2p1bXAgPSBmdW5jdGlvbih4LCB5LCBweCwgcHkpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGR4ID0geCAtIHB4LCBkeSA9IHkgLSBweTtcclxuXHJcbiAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy50cmFja0p1bXBSZWN1cnNpb24gPT09IHRydWUpIHtcclxuICAgICAgICBncmlkLmdldE5vZGVBdCh4LCB5KS50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmlkLmdldE5vZGVBdCh4LCB5KSA9PT0gdGhpcy5lbmROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBmb3IgZm9yY2VkIG5laWdoYm9yc1xyXG4gICAgLy8gYWxvbmcgdGhlIGRpYWdvbmFsXHJcbiAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBjaGVjayBmb3IgdmVydGljYWwvaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyBkeCwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4LCB5ICsgZHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKCBkeCAhPT0gMCApIHsgLy8gbW92aW5nIGFsb25nIHhcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fanVtcCh4ICsgZHgsIHkgKyBkeSwgeCwgeSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLl9maW5kTmVpZ2hib3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50LFxyXG4gICAgICAgIHggPSBub2RlLngsIHkgPSBub2RlLnksXHJcbiAgICAgICAgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBweCwgcHksIG54LCBueSwgZHgsIGR5LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLCBuZWlnaGJvck5vZGVzLCBuZWlnaGJvck5vZGUsIGksIGw7XHJcblxyXG4gICAgLy8gZGlyZWN0ZWQgcHJ1bmluZzogY2FuIGlnbm9yZSBtb3N0IG5laWdoYm9ycywgdW5sZXNzIGZvcmNlZC5cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBweCA9IHBhcmVudC54O1xyXG4gICAgICAgIHB5ID0gcGFyZW50Lnk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBub3JtYWxpemVkIGRpcmVjdGlvbiBvZiB0cmF2ZWxcclxuICAgICAgICBkeCA9ICh4IC0gcHgpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHB4KSwgMSk7XHJcbiAgICAgICAgZHkgPSAoeSAtIHB5KSAvIE1hdGgubWF4KE1hdGguYWJzKHkgLSBweSksIDEpO1xyXG5cclxuICAgICAgICAvLyBzZWFyY2ggZGlhZ29uYWxseVxyXG4gICAgICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlYXJjaCBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5BbHdheXMpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvck5vZGVzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvck5vZGUgPSBuZWlnaGJvck5vZGVzW2ldO1xyXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbbmVpZ2hib3JOb2RlLngsIG5laWdoYm9yTm9kZS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpQRkFsd2F5c01vdmVEaWFnb25hbGx5O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBKdW1wUG9pbnRGaW5kZXJCYXNlID0gcmVxdWlyZSgnLi9KdW1wUG9pbnRGaW5kZXJCYXNlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobSB3aGljaCBtb3Zlc1xyXG4gKiBkaWFnb25hbGx5IG9ubHkgd2hlbiB0aGVyZSBpcyBhdCBtb3N0IG9uZSBvYnN0YWNsZS5cclxuICovXHJcbmZ1bmN0aW9uIEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZShvcHQpIHtcclxuICAgIEp1bXBQb2ludEZpbmRlckJhc2UuY2FsbCh0aGlzLCBvcHQpO1xyXG59XHJcblxyXG5KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggcmVjdXJzaXZlbHkgaW4gdGhlIGRpcmVjdGlvbiAocGFyZW50IC0+IGNoaWxkKSwgc3RvcHBpbmcgb25seSB3aGVuIGFcclxuICoganVtcCBwb2ludCBpcyBmb3VuZC5cclxuICogQHByb3RlY3RlZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHgsIHkgY29vcmRpbmF0ZSBvZiB0aGUganVtcCBwb2ludFxyXG4gKiAgICAgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIGZvcmNlZCBuZWlnaGJvcnNcclxuICAgIC8vIGFsb25nIHRoZSBkaWFnb25hbFxyXG4gICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHx8XHJcbiAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgY2hlY2sgZm9yIHZlcnRpY2FsL2hvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICBpZiAodGhpcy5fanVtcCh4ICsgZHgsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCwgeSArIGR5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiggZHggIT09IDAgKSB7IC8vIG1vdmluZyBhbG9uZyB4XHJcbiAgICAgICAgICAgIGlmKChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgKyAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB8fFxyXG4gICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB8fFxyXG4gICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgbWFrZSBzdXJlIG9uZSBvZiB0aGUgdmVydGljYWwvaG9yaXpvbnRhbFxyXG4gICAgLy8gbmVpZ2hib3JzIGlzIG9wZW4gdG8gYWxsb3cgdGhlIHBhdGhcclxuICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpIHx8IGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanVtcCh4ICsgZHgsIHkgKyBkeSwgeCwgeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIG5laWdoYm9ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIElmIHRoZSBub2RlIGhhcyBhIHBhcmVudCxcclxuICogcHJ1bmUgdGhlIG5laWdoYm9ycyBiYXNlZCBvbiB0aGUganVtcCBwb2ludCBzZWFyY2ggYWxnb3JpdGhtLCBvdGhlcndpc2VcclxuICogcmV0dXJuIGFsbCBhdmFpbGFibGUgbmVpZ2hib3JzLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIG5laWdoYm9ycyBmb3VuZC5cclxuICovXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUuX2ZpbmROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIHB4LCBweSwgbngsIG55LCBkeCwgZHksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sIG5laWdoYm9yTm9kZXMsIG5laWdoYm9yTm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBkaXJlY3RlZCBwcnVuaW5nOiBjYW4gaWdub3JlIG1vc3QgbmVpZ2hib3JzLCB1bmxlc3MgZm9yY2VkLlxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHB4ID0gcGFyZW50Lng7XHJcbiAgICAgICAgcHkgPSBwYXJlbnQueTtcclxuICAgICAgICAvLyBnZXQgdGhlIG5vcm1hbGl6ZWQgZGlyZWN0aW9uIG9mIHRyYXZlbFxyXG4gICAgICAgIGR4ID0gKHggLSBweCkgLyBNYXRoLm1heChNYXRoLmFicyh4IC0gcHgpLCAxKTtcclxuICAgICAgICBkeSA9ICh5IC0gcHkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHB5KSwgMSk7XHJcblxyXG4gICAgICAgIC8vIHNlYXJjaCBkaWFnb25hbGx5XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSB8fCBncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSBkeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpICYmIGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlYXJjaCBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlKTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JOb2Rlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3JOb2RlID0gbmVpZ2hib3JOb2Rlc1tpXTtcclxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yTm9kZS54LCBuZWlnaGJvck5vZGUueV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIHdoaWNoIG1vdmVzXHJcbiAqIGRpYWdvbmFsbHkgb25seSB3aGVuIHRoZXJlIGFyZSBubyBvYnN0YWNsZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMob3B0KSB7XHJcbiAgICBKdW1wUG9pbnRGaW5kZXJCYXNlLmNhbGwodGhpcywgb3B0KTtcclxufVxyXG5cclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZSA9IG5ldyBKdW1wUG9pbnRGaW5kZXJCYXNlKCk7XHJcbkpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXM7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHJlY3Vyc2l2ZWx5IGluIHRoZSBkaXJlY3Rpb24gKHBhcmVudCAtPiBjaGlsZCksIHN0b3BwaW5nIG9ubHkgd2hlbiBhXHJcbiAqIGp1bXAgcG9pbnQgaXMgZm91bmQuXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSB4LCB5IGNvb3JkaW5hdGUgb2YgdGhlIGp1bXAgcG9pbnRcclxuICogICAgIGZvdW5kLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZS5fanVtcCA9IGZ1bmN0aW9uKHgsIHksIHB4LCBweSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgZHggPSB4IC0gcHgsIGR5ID0geSAtIHB5O1xyXG5cclxuICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGdyaWQuZ2V0Tm9kZUF0KHgsIHkpLnRlc3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyaWQuZ2V0Tm9kZUF0KHgsIHkpID09PSB0aGlzLmVuZE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBmb3JjZWQgbmVpZ2hib3JzXHJcbiAgICAvLyBhbG9uZyB0aGUgZGlhZ29uYWxcclxuICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgIC8vIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpKSB8fFxyXG4gICAgICAgICAgICAvLyAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB3aGVuIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IGNoZWNrIGZvciB2ZXJ0aWNhbC9ob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuX2p1bXAoeCArIGR4LCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHgsIHkgKyBkeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgLSAxKSkgfHxcclxuICAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIDEpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkgLSBkeSkpIHx8XHJcbiAgICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gV2hlbiBtb3ZpbmcgdmVydGljYWxseSwgbXVzdCBjaGVjayBmb3IgaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fanVtcCh4ICsgMSwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4IC0gMSwgeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgbWFrZSBzdXJlIG9uZSBvZiB0aGUgdmVydGljYWwvaG9yaXpvbnRhbFxyXG4gICAgLy8gbmVpZ2hib3JzIGlzIG9wZW4gdG8gYWxsb3cgdGhlIHBhdGhcclxuICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpICYmIGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanVtcCh4ICsgZHgsIHkgKyBkeSwgeCwgeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIG5laWdoYm9ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIElmIHRoZSBub2RlIGhhcyBhIHBhcmVudCxcclxuICogcHJ1bmUgdGhlIG5laWdoYm9ycyBiYXNlZCBvbiB0aGUganVtcCBwb2ludCBzZWFyY2ggYWxnb3JpdGhtLCBvdGhlcndpc2VcclxuICogcmV0dXJuIGFsbCBhdmFpbGFibGUgbmVpZ2hib3JzLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIG5laWdoYm9ycyBmb3VuZC5cclxuICovXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcy5wcm90b3R5cGUuX2ZpbmROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIHB4LCBweSwgbngsIG55LCBkeCwgZHksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sIG5laWdoYm9yTm9kZXMsIG5laWdoYm9yTm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBkaXJlY3RlZCBwcnVuaW5nOiBjYW4gaWdub3JlIG1vc3QgbmVpZ2hib3JzLCB1bmxlc3MgZm9yY2VkLlxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHB4ID0gcGFyZW50Lng7XHJcbiAgICAgICAgcHkgPSBwYXJlbnQueTtcclxuICAgICAgICAvLyBnZXQgdGhlIG5vcm1hbGl6ZWQgZGlyZWN0aW9uIG9mIHRyYXZlbFxyXG4gICAgICAgIGR4ID0gKHggLSBweCkgLyBNYXRoLm1heChNYXRoLmFicyh4IC0gcHgpLCAxKTtcclxuICAgICAgICBkeSA9ICh5IC0gcHkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHB5KSwgMSk7XHJcblxyXG4gICAgICAgIC8vIHNlYXJjaCBkaWFnb25hbGx5XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSAmJiBncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZWFyY2ggaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGlzTmV4dFdhbGthYmxlO1xyXG4gICAgICAgICAgICBpZiAoZHggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlzTmV4dFdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1RvcFdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzQm90dG9tV2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvcFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JvdHRvbVdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9wV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0JvdHRvbVdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZHkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlzTmV4dFdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1JpZ2h0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNMZWZ0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVmdFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmlnaHRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgMSwgeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGVmdFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYWxsIG5laWdoYm9yc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JOb2RlcyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcyk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzO1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBKdW1wUG9pbnRGaW5kZXJCYXNlID0gcmVxdWlyZSgnLi9KdW1wUG9pbnRGaW5kZXJCYXNlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobSBhbGxvd2luZyBvbmx5IGhvcml6b250YWxcclxuICogb3IgdmVydGljYWwgbW92ZW1lbnRzLlxyXG4gKi9cclxuZnVuY3Rpb24gSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseShvcHQpIHtcclxuICAgIEp1bXBQb2ludEZpbmRlckJhc2UuY2FsbCh0aGlzLCBvcHQpO1xyXG59XHJcblxyXG5KUEZOZXZlck1vdmVEaWFnb25hbGx5LnByb3RvdHlwZSA9IG5ldyBKdW1wUG9pbnRGaW5kZXJCYXNlKCk7XHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseTtcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggcmVjdXJzaXZlbHkgaW4gdGhlIGRpcmVjdGlvbiAocGFyZW50IC0+IGNoaWxkKSwgc3RvcHBpbmcgb25seSB3aGVuIGFcclxuICoganVtcCBwb2ludCBpcyBmb3VuZC5cclxuICogQHByb3RlY3RlZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHgsIHkgY29vcmRpbmF0ZSBvZiB0aGUganVtcCBwb2ludFxyXG4gKiAgICAgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5KUEZOZXZlck1vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fanVtcCA9IGZ1bmN0aW9uKHgsIHksIHB4LCBweSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgZHggPSB4IC0gcHgsIGR5ID0geSAtIHB5O1xyXG5cclxuICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGdyaWQuZ2V0Tm9kZUF0KHgsIHkpLnRlc3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyaWQuZ2V0Tm9kZUF0KHgsIHkpID09PSB0aGlzLmVuZE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkeCAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgLSAxKSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgMSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZHkgIT09IDApIHtcclxuICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkgLSBkeSkpIHx8XHJcbiAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1doZW4gbW92aW5nIHZlcnRpY2FsbHksIG11c3QgY2hlY2sgZm9yIGhvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICBpZiAodGhpcy5fanVtcCh4ICsgMSwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4IC0gMSwgeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIG1vdmVtZW50cyBhcmUgYWxsb3dlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fanVtcCh4ICsgZHgsIHkgKyBkeSwgeCwgeSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuX2ZpbmROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIHB4LCBweSwgbngsIG55LCBkeCwgZHksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sIG5laWdoYm9yTm9kZXMsIG5laWdoYm9yTm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBkaXJlY3RlZCBwcnVuaW5nOiBjYW4gaWdub3JlIG1vc3QgbmVpZ2hib3JzLCB1bmxlc3MgZm9yY2VkLlxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHB4ID0gcGFyZW50Lng7XHJcbiAgICAgICAgcHkgPSBwYXJlbnQueTtcclxuICAgICAgICAvLyBnZXQgdGhlIG5vcm1hbGl6ZWQgZGlyZWN0aW9uIG9mIHRyYXZlbFxyXG4gICAgICAgIGR4ID0gKHggLSBweCkgLyBNYXRoLm1heChNYXRoLmFicyh4IC0gcHgpLCAxKTtcclxuICAgICAgICBkeSA9ICh5IC0gcHkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHB5KSwgMSk7XHJcblxyXG4gICAgICAgIGlmIChkeCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gMSwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgMSwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYWxsIG5laWdoYm9yc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JOb2RlcyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvck5vZGVzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvck5vZGUgPSBuZWlnaGJvck5vZGVzW2ldO1xyXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbbmVpZ2hib3JOb2RlLngsIG5laWdoYm9yTm9kZS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpQRk5ldmVyTW92ZURpYWdvbmFsbHk7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGFuaWVybyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmllcm9cclxuICovXHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcbnZhciBKUEZOZXZlck1vdmVEaWFnb25hbGx5ID0gcmVxdWlyZSgnLi9KUEZOZXZlck1vdmVEaWFnb25hbGx5Jyk7XHJcbnZhciBKUEZBbHdheXNNb3ZlRGlhZ29uYWxseSA9IHJlcXVpcmUoJy4vSlBGQWx3YXlzTW92ZURpYWdvbmFsbHknKTtcclxudmFyIEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcyA9IHJlcXVpcmUoJy4vSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzJyk7XHJcbnZhciBKUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUgPSByZXF1aXJlKCcuL0pQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZScpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG1cclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IENvbmRpdGlvbiB1bmRlciB3aGljaCBkaWFnb25hbFxyXG4gKiAgICAgIG1vdmVtZW50IHdpbGwgYmUgYWxsb3dlZC5cclxuICovXHJcbmZ1bmN0aW9uIEp1bXBQb2ludEZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIGlmIChvcHQuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseShvcHQpO1xyXG4gICAgfSBlbHNlIGlmIChvcHQuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5BbHdheXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEpQRkFsd2F5c01vdmVEaWFnb25hbGx5KG9wdCk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdC5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcyhvcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZShvcHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEp1bXBQb2ludEZpbmRlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSGVhcCAgICAgICA9IHJlcXVpcmUoJ2hlYXAnKTtcclxudmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG1cclxuICogQHBhcmFtIHtvYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKi9cclxuZnVuY3Rpb24gSnVtcFBvaW50RmluZGVyQmFzZShvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy50cmFja0p1bXBSZWN1cnNpb24gPSBvcHQudHJhY2tKdW1wUmVjdXJzaW9uIHx8IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkp1bXBQb2ludEZpbmRlckJhc2UucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBvcGVuTGlzdCA9IHRoaXMub3Blbkxpc3QgPSBuZXcgSGVhcChmdW5jdGlvbihub2RlQSwgbm9kZUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVBLmYgLSBub2RlQi5mO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IHRoaXMuc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSB0aGlzLmVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSwgbm9kZTtcclxuXHJcbiAgICB0aGlzLmdyaWQgPSBncmlkO1xyXG5cclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBzdGFydCBub2RlIHRvIGJlIDBcclxuICAgIHN0YXJ0Tm9kZS5nID0gMDtcclxuICAgIHN0YXJ0Tm9kZS5mID0gMDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBub2RlIGludG8gdGhlIG9wZW4gbGlzdFxyXG4gICAgb3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgLy8gd2hpbGUgdGhlIG9wZW4gbGlzdCBpcyBub3QgZW1wdHlcclxuICAgIHdoaWxlICghb3Blbkxpc3QuZW1wdHkoKSkge1xyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2Ygbm9kZSB3aGljaCBoYXMgdGhlIG1pbmltdW0gYGZgIHZhbHVlLlxyXG4gICAgICAgIG5vZGUgPSBvcGVuTGlzdC5wb3AoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmV4cGFuZFBhdGgoVXRpbC5iYWNrdHJhY2UoZW5kTm9kZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faWRlbnRpZnlTdWNjZXNzb3JzKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZ5IHN1Y2Nlc3NvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBSdW5zIGEganVtcCBwb2ludCBzZWFyY2ggaW4gdGhlXHJcbiAqIGRpcmVjdGlvbiBvZiBlYWNoIGF2YWlsYWJsZSBuZWlnaGJvciwgYWRkaW5nIGFueSBwb2ludHMgZm91bmQgdG8gdGhlIG9wZW5cclxuICogbGlzdC5cclxuICogQHByb3RlY3RlZFxyXG4gKi9cclxuSnVtcFBvaW50RmluZGVyQmFzZS5wcm90b3R5cGUuX2lkZW50aWZ5U3VjY2Vzc29ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGhldXJpc3RpYyA9IHRoaXMuaGV1cmlzdGljLFxyXG4gICAgICAgIG9wZW5MaXN0ID0gdGhpcy5vcGVuTGlzdCxcclxuICAgICAgICBlbmRYID0gdGhpcy5lbmROb2RlLngsXHJcbiAgICAgICAgZW5kWSA9IHRoaXMuZW5kTm9kZS55LFxyXG4gICAgICAgIG5laWdoYm9ycywgbmVpZ2hib3IsXHJcbiAgICAgICAganVtcFBvaW50LCBpLCBsLFxyXG4gICAgICAgIHggPSBub2RlLngsIHkgPSBub2RlLnksXHJcbiAgICAgICAgangsIGp5LCBkeCwgZHksIGQsIG5nLCBqdW1wTm9kZSxcclxuICAgICAgICBhYnMgPSBNYXRoLmFicywgbWF4ID0gTWF0aC5tYXg7XHJcblxyXG4gICAgbmVpZ2hib3JzID0gdGhpcy5fZmluZE5laWdoYm9ycyhub2RlKTtcclxuICAgIGZvcihpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuICAgICAgICBqdW1wUG9pbnQgPSB0aGlzLl9qdW1wKG5laWdoYm9yWzBdLCBuZWlnaGJvclsxXSwgeCwgeSk7XHJcbiAgICAgICAgaWYgKGp1bXBQb2ludCkge1xyXG5cclxuICAgICAgICAgICAganggPSBqdW1wUG9pbnRbMF07XHJcbiAgICAgICAgICAgIGp5ID0ganVtcFBvaW50WzFdO1xyXG4gICAgICAgICAgICBqdW1wTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGp4LCBqeSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoanVtcE5vZGUuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaW5jbHVkZSBkaXN0YW5jZSwgYXMgcGFyZW50IG1heSBub3QgYmUgaW1tZWRpYXRlbHkgYWRqYWNlbnQ6XHJcbiAgICAgICAgICAgIGQgPSBIZXVyaXN0aWMub2N0aWxlKGFicyhqeCAtIHgpLCBhYnMoankgLSB5KSk7XHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgZDsgLy8gbmV4dCBgZ2AgdmFsdWVcclxuXHJcbiAgICAgICAgICAgIGlmICghanVtcE5vZGUub3BlbmVkIHx8IG5nIDwganVtcE5vZGUuZykge1xyXG4gICAgICAgICAgICAgICAganVtcE5vZGUuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAganVtcE5vZGUuaCA9IGp1bXBOb2RlLmggfHwgaGV1cmlzdGljKGFicyhqeCAtIGVuZFgpLCBhYnMoankgLSBlbmRZKSk7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5mID0ganVtcE5vZGUuZyArIGp1bXBOb2RlLmg7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghanVtcE5vZGUub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbkxpc3QucHVzaChqdW1wTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAganVtcE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbkxpc3QudXBkYXRlSXRlbShqdW1wTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEp1bXBQb2ludEZpbmRlckJhc2U7XHJcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xuaW1wb3J0IHtFbmdpbmV9IGZyb20gJy4vRW5naW5lLmpzeCc7XG5pbXBvcnQgUEYgZnJvbSAncGF0aGZpbmRpbmcnO1xuaW1wb3J0IHtDb21iYXRNYW5hZ2VyfSBmcm9tICcuL0NvbWJhdE1hbmFnZXIuanN4J1xuaW1wb3J0IHdvcmtlciBmcm9tICcuL1BhdGhmaW5kV29ya2VyLmpzeCc7XG5pbXBvcnQgV2ViV29ya2VyIGZyb20gJy4vV2ViV29ya2VyLmpzeCc7XG5cbmV4cG9ydCBjbGFzcyBBcmVhIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmNvbWJhdCA9IG51bGw7XG4gICAgdGhpcy5sb2FkZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zb2xlLmxvZygnaW5pdCBhcmVhIHdpdGggaWQnLCB0aGlzLmlkKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICBcbiAgICB0aGlzLndhbGtQb2ludHMgPSBbXTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5OjY3M30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjMyOSwgeTo2NzN9KTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDo0NDAsIHk6MzczfSk7XG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6NTA4LCB5OjM3M30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjY1OCwgeTo2NzN9KTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDoxMDIzLCB5OjY3M30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjEwMjMsIHk6NzY3fSk7XG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MCwgeTo3Njd9KTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5OjY3M30pO1xuICAgIFxuICAgIHRoaXMuYWN0b3JzID0gW107XG4gICAgdGhpcy5kZWNvciA9IFtdO1xuICAgIFxuICAgIC8vMzk4cHggLyAzMCBmZWV0ID0gMTMuM1xuICAgIHRoaXMuaGVpZ2h0ID0gNzY4O1xuICAgIHRoaXMud2lkdGggPSAxMDI0O1xuICAgIHRoaXMudmFuaXNoaW5nUG9pbnQgPSAyMDI7XG4gICAgXG4gICAgdGhpcy53YWxrUGF0aDtcbiAgICBcbiAgICB0aGlzLmNvbWJhdE9uID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5ncmlkID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnNldHVwUGF0aFdvcmtlcigpO1xuICB9XG4gIFxuICBnZXRQbGF5ZXIoKSB7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5hY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmFjdG9yc1tpXS50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9QTEFZRVIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3JzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgc2V0dXBQYXRoV29ya2VyKCkge1xuICAgIHRoaXMuUGF0aFdvcmtlciA9IG5ldyBXZWJXb3JrZXIod29ya2VyKTtcbiAgICB0aGlzLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2dlbmVyYXRlV2Fsa1BhdGgnLCBwYXRoOnRoaXMud2Fsa1BvaW50c30pO1xuICAgIHRoaXMuUGF0aFdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2dvdCAnLCBldmVudC5kYXRhLmNvbW1hbmQsICdiYWNrIGZyb20gd29ya2VyJyk7XG4gICAgICBzd2l0Y2goZXZlbnQuZGF0YS5jb21tYW5kKSB7XG4gICAgICAgIGNhc2UgJ2NsaWNrZWRHcm91bmQnOlxuICAgICAgICBjYXNlICd3YWxrVG9PYmplY3QnOlxuICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuY2xpY2tlZEdyb3VuZFBhdGhSZXN1bHRzKGV2ZW50LmRhdGEucGF0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbWJhdE1vdXNlTW92ZSc6XG4gICAgICAgICAgdGhpcy5jb21iYXQuY29tYmF0TW91c2VNb3ZlUmVzdWx0cyhldmVudC5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGxheWVyQ2hlY2tSYW5nZSc6XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEucGF0aCkge1xuICAgICAgICAgICAgZXZlbnQuZGF0YS5wYXRoID0gZXZlbnQuZGF0YS5wYXRoLnNwbGljZSgwLCBldmVudC5kYXRhLnBhdGgubGVuZ3RoLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoICYmIE1hdGguY2VpbChldmVudC5kYXRhLnBhdGgubGVuZ3RoLzQpID4gdGhpcy5nZXRQbGF5ZXIoKS5lcXVpcHBlZC5yYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcmludChcIllvdSdyZSBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY29tYmF0T24pIHtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDb21iYXQoJ3BsYXllcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcbiAgICAgICAgICB0aGlzLmNvbWJhdC5oYW5kbGVQbGF5ZXJBdHRhY2sodGhpcy5jb21iYXQuZ2V0TlBDQnlJRChldmVudC5kYXRhLm5wYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICducGNDaGVja1JhbmdlJzpcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhLnBhdGggPSBldmVudC5kYXRhLnBhdGguc3BsaWNlKDAsIGV2ZW50LmRhdGEucGF0aC5sZW5ndGgtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBucGMgPSB0aGlzLmNvbWJhdC5nZXROUENCeUlEKGV2ZW50LmRhdGEubnBjKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbnBjJywgbnBjKTtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoICYmIE1hdGguY2VpbChldmVudC5kYXRhLnBhdGgubGVuZ3RoLzQpID4gbnBjLmVxdWlwcGVkLnJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50KG5wYy5uYW1lICsgXCIgaXMgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbWJhdE9uKSB7XG4gICAgICAgICAgICB0aGlzLmVudGVyQ29tYmF0KG5wYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xuICAgICAgICAgIHRoaXMuY29tYmF0LmhhbmRsZU5QQ0F0dGFjayhucGMsIG5wYy50YXJnZXRBY3F1aXJlZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIHJlbmRlckJhY2tncm91bmQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jYW52YXMpO1xuICAgIHRoaXMuY2FudmFzLnNldEJhY2tncm91bmRJbWFnZSgnaW1nL2FyZWFzL2FyZWEwMS5wbmcnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVuZGVyaW5nIHRvJywgdGhpcyk7XG4gICAgICB0aGlzLmRyYXdXYWxrcGF0aCgpO1xuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZpbmRQYXRoKG9iaikge1xuICAgIG9iai53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgb2JqLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIG9iai5ncmlkd2lkdGggPSBHbG9iYWxzLkdSSURfU1FVQVJFX1dJRFRIO1xuICAgIG9iai5ncmlkaGVpZ2h0ID0gR2xvYmFscy5HUklEX1NRVUFSRV9IRUlHSFQ7XG4gICAgb2JqLnBhdGggPSB0aGlzLndhbGtQb2ludHM7XG4gICAgdGhpcy5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKG9iaik7XG4gIH1cbiAgXG4gIGRyYXdXYWxrcGF0aCgpIHtcbiAgICB0aGlzLndhbGtQYXRoID0gdGhpcy5jYW52YXMuY29udGV4dFRvcDtcbiAgICB0aGlzLndhbGtQYXRoLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMud2Fsa1BhdGgubW92ZVRvKHRoaXMud2Fsa1BvaW50c1swXS54LCB0aGlzLndhbGtQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaT0xOyBpIDwgdGhpcy53YWxrUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndhbGtQYXRoLmxpbmVUbyh0aGlzLndhbGtQb2ludHNbaV0ueCwgdGhpcy53YWxrUG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICB0aGlzLndhbGtQYXRoLmNsb3NlUGF0aCgpO1xuICAgIHRoaXMud2Fsa1BhdGguZmlsbFN0eWxlID0gXCIjN2ZmZmQ0XCI7XG4gICAgdGhpcy53YWxrUGF0aC5nbG9iYWxBbHBoYSA9IDA7XG4gICAgdGhpcy53YWxrUGF0aC5maWxsKCk7XG4gICAgdGhpcy53YWxrUGF0aC5zYXZlKCk7XG4gICAgdGhpcy53YWxrUGF0aC5jYW52YXMub25jbGljayA9IChldmVudCA9PiB7XG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKTtcbiAgICAgIGlmIChwbGF5ZXIudGFyZ2V0QWNxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGxheWVyLmNhbmNlbEFuaW1hdGlvbnMoKTtcbiAgICAgIGxldCBib3VuZHMgPSB0aGlzLndhbGtQYXRoLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBzdGFydCA9IHt9O1xuICAgICAgc3RhcnQueCA9IHBsYXllci5nZXRYKCk7XG4gICAgICBzdGFydC55ID0gcGxheWVyLmdldFkoKTtcbiAgICAgIGxldCBlbmQgPSB7fTtcbiAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChldmVudC5jbGllbnRYIC0gYm91bmRzLmxlZnQpO1xuICAgICAgZW5kLnkgPSBNYXRoLnJvdW5kKGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wKTtcbiAgICAgIGlmICh0aGlzLndhbGtQYXRoLmlzUG9pbnRJblBhdGgoZW5kLngsIGVuZC55KSkge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIG9iai5jb21tYW5kID0gJ2NsaWNrZWRHcm91bmQnO1xuICAgICAgICBvYmouc3RhcnQgPSBzdGFydDtcbiAgICAgICAgb2JqLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5maW5kUGF0aChvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubG9hZGVySW1nLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfQVJFQV9SRUFEWSkpO1xuICB9XG4gIFxuICBlbmRDb21iYXRUdXJuKCkge1xuICAgIGlmICh0aGlzLmNvbWJhdCkge1xuICAgICAgdGhpcy5jb21iYXQuZW5kUGxheWVyVHVybigpO1xuICAgIH1cbiAgfVxuICBcbiAgZW50ZXJDb21iYXQoaW5pdGlhdGVkKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGNvbWJhdCcpO1xuICAgIGlmICh0aGlzLmdldFBsYXllcigpKSB7XG4gICAgICB0aGlzLmNvbWJhdE9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29tYmF0ID0gbmV3IENvbWJhdE1hbmFnZXIodGhpcywgaW5pdGlhdGVkKTtcbiAgICB9XG4gIH1cbiAgXG4gIGV4aXRDb21iYXQoKSB7XG4gICAgdGhpcy5jb21iYXRPbiA9IGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xuXG5leHBvcnQgY2xhc3MgQ29tYmF0TWFuYWdlciB7XG4gIFxuICBcbiAgY29uc3RydWN0b3IoYXJlYSwgaW5pdGlhdGVkKSB7XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB0aGlzLnBsYXllciA9IGFyZWEuZ2V0UGxheWVyKCk7XG4gICAgdGhpcy5jYW52YXMgPSBhcmVhLmNhbnZhcztcbiAgICBcbiAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcbiAgICBpZiAoaW5pdGlhdGVkID09ICdwbGF5ZXInKSB7XG4gICAgICB0aGlzLnBsYXllclR1cm4gPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm1vdmVMaW5lID0gbnVsbDtcbiAgICB0aGlzLm1vdmVUZXh0ID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLmFkZE1vdXNlQWN0aW9ucygpO1xuICAgIHRoaXMuY29tYmF0U2VxdWVuY2UgPSAwO1xuICAgIFxuICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgIHRoaXMuYWxsaWVzID0gW107XG4gICAgXG4gICAgdGhpcy51cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMpO1xuICAgIFxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuYXJlYS5hY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN3aXRjaCAodGhpcy5hcmVhLmFjdG9yc1tpXS50ZWFtKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmFsbGllcy5wdXNoKHRoaXMuYXJlYS5hY3RvcnNbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5hcmVhLmFjdG9yc1tpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsaWVzLCB0aGlzLmVuZW1pZXMpO1xuICAgIHRoaXMub3JkZXIgPSB0aGlzLmRldGVybWluZUNvbWJhdE9yZGVyKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlcik7XG4gICAgdGhpcy5uZXh0VHVybigpO1xuICB9XG4gIFxuICBoYW5kbGVQbGF5ZXJBdHRhY2soZW5lbXkpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllciwgZW5lbXkpO1xuICAgIGlmICghdGhpcy5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBsYXllci5lcXVpcHBlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZXIuZXF1aXBwZWQudHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0WCgpIDw9IGVuZW15LmdldFgoKSkge1xuICAgICAgdGhpcy5wbGF5ZXIucnVuQXR0YWNrQW5pbWF0aW9uKCdyaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllci5ydW5BdHRhY2tBbmltYXRpb24oJ2xlZnQnKTtcbiAgICB9XG4gICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgLT0gdGhpcy5wbGF5ZXIuZXF1aXBwZWQuc3BlZWQ7XG4gICAgdGhpcy51cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMpO1xuICAgIC8qXG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnYXR0YWNrLycgKyB0aGlzLnN0YXRlLnBsYXllci5pZCArICcvJyArIGVuZW15LmlkKTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0KSB7XG4gICAgfSovXG4gICAgLy84OSUgKGF0dGFja2VyJ3Mgd2VhcG9uIHNraWxsKSAtIDUlIChkZWZlbmRlcidzIEFybW9yIENsYXNzKSA9IDg0JVxuICAgIGxldCB0b0hpdCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluO1xuICAgIGlmICh0aGlzLnBsYXllci5lcXVpcHBlZC5tZWxlZSkge1xuICAgICAgdG9IaXQgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2NyYXBwaW47XG4gICAgfVxuICAgIGxldCBoaXRDaGFuY2UgPSB0b0hpdCAtIGVuZW15LmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjICsgTWF0aC5jZWlsKHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2svMik7XG4gICAgbGV0IHJvbGwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgIGlmIChyb2xsIDw9IGhpdENoYW5jZSkge1xuICAgICAgbGV0IGRhbUFyciA9IHRoaXMucGxheWVyLmVxdWlwcGVkLmRhbWFnZS5zcGxpdCgnZCcpO1xuICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYW1BcnJbMF07IGkrKykge1xuICAgICAgICBkYW1hZ2UgKz0gR2xvYmFscy5yYW5kb21JbnQoMSwgZGFtQXJyWzFdKTtcbiAgICAgIH1cbiAgICAgIGxldCBjcml0ID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICAgIGlmIChjcml0IDw9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNyaXRpY2FsKSB7XG4gICAgICAgIHRoaXMuYXJlYS5wcmludCgnWW91IGNyaXRpY2FsbHkgaGl0ICcgKyBHbG9iYWxzLnVjd29yZHMoZW5lbXkubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlKkdsb2JhbHMuQ1JJVElDQUxfREFNQUdFX01PRElGSUVSICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgaGl0ICcgKyBHbG9iYWxzLnVjd29yZHMoZW5lbXkubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3JpdEZhaWwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgICAgaWYgKGNyaXRGYWlsIDw9IEdsb2JhbHMuQ1JJVElDQUxfRkFJTFVSRV9DSEFOQ0UpIHtcbiAgICAgICAgbGV0IHNhdmVSb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICAgICAgaWYgKHNhdmVSb2xsID49IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2spIHtcbiAgICAgICAgICB0aGlzLmFyZWEucHJpbnQoJ1lvdSBjcml0aWNhbGx5IG1pc3NlZCBhbmQgbG9zdCB0aGUgcmVzdCBvZiB5b3VyIHR1cm4uJyk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgPSAwO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFyZWEucHJpbnQoJ1lvdSBtaXNzZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXJlYS5wcmludCgnWW91IG1pc3NlZC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGhhbmRsZU5QQ0F0dGFjayhucGMsIHRhcmdldCkge1xuICAgIGNvbnNvbGUubG9nKCducGMgYXR0YWNraW5nIScpO1xuICAgIGNvbnNvbGUubG9nKG5wYywgdGFyZ2V0KTtcbiAgICBpZiAoIW5wYy5lcXVpcHBlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobnBjLmVxdWlwcGVkLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbnBjLnJlbWFpbmluZ01vdmVzIC09IG5wYy5lcXVpcHBlZC5zcGVlZDtcbiAgICAvLzg5JSAoYXR0YWNrZXIncyB3ZWFwb24gc2tpbGwpIC0gNSUgKGRlZmVuZGVyJ3MgQXJtb3IgQ2xhc3MpID0gODQlXG4gICAgbGV0IHRvSGl0ID0gbnBjLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluO1xuICAgIGlmIChucGMuZXF1aXBwZWQubWVsZWUpIHtcbiAgICAgIHRvSGl0ID0gbnBjLmNoYXJhY3RlclNoZWV0LnNraWxscy5zY3JhcHBpbjtcbiAgICB9XG4gICAgbGV0IGhpdENoYW5jZSA9IHRvSGl0IC0gdGFyZ2V0LmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjICsgTWF0aC5jZWlsKG5wYy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5sdWNrLzIpO1xuICAgIGxldCByb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICBpZiAocm9sbCA8PSBoaXRDaGFuY2UpIHtcbiAgICAgIGxldCBkYW1BcnIgPSBucGMuZXF1aXBwZWQuZGFtYWdlLnNwbGl0KCdkJyk7XG4gICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhbUFyclswXTsgaSsrKSB7XG4gICAgICAgIGRhbWFnZSArPSBHbG9iYWxzLnJhbmRvbUludCgxLCBkYW1BcnJbMV0pO1xuICAgICAgfVxuICAgICAgbGV0IGNyaXQgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgICAgaWYgKGNyaXQgPD0gbnBjLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNyaXRpY2FsKSB7XG4gICAgICAgIHRoaXMuYXJlYS5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBjcml0aWNhbGx5IGhpdHMgJyArIEdsb2JhbHMudWN3b3Jkcyh0YXJnZXQubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlKkdsb2JhbHMuQ1JJVElDQUxfREFNQUdFX01PRElGSUVSICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIGhpdHMgJyArIEdsb2JhbHMudWN3b3Jkcyh0YXJnZXQubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3JpdEZhaWwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgICAgaWYgKGNyaXRGYWlsIDw9IEdsb2JhbHMuQ1JJVElDQUxfRkFJTFVSRV9DSEFOQ0UpIHtcbiAgICAgICAgbGV0IHNhdmVSb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICAgICAgaWYgKHNhdmVSb2xsID49IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2spIHtcbiAgICAgICAgICB0aGlzLmFyZWEucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgY3JpdGljYWxseSBtaXNzZWQgYW5kIGxvc3QgdGhlIHJlc3Qgb2YgaGlzIHR1cm4uJyk7XG4gICAgICAgICAgbnBjLnJlbWFpbmluZ01vdmVzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFyZWEucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgbWlzc2VkLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFyZWEucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgbWlzc2VkLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tSZW1haW5pbmdOUENNb3ZlcyhucGMpIHtcbiAgICBjb25zb2xlLmxvZygnbnBjIG12cycsIG5wYy5yZW1haW5pbmdNb3Zlcyk7XG4gICAgaWYgKG5wYy5yZW1haW5pbmdNb3ZlcyA8PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnbnBjIHR1cm4gY29tcGxldGUnKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ucGNUdXJuSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5jb21iYXRTZXF1ZW5jZSsrO1xuICAgICAgaWYgKHRoaXMuYWxsaWVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm5leHRUdXJuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjaG9vc2VUYXJnZXQobnBjKSB7XG4gICAgLypcbiAgICBsZXQgbGFzdERpc3QgPSBudWxsO1xuICAgIGxldCB0YXJnZXQgPSBudWxsO1xuICAgIGlmIChucGMudGVhbSA9PSAzKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmFsbGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhucGMuZ2V0WCgpLCBucGMuZ2V0WSgpLCB0aGlzLmFsbGllc1tpXS5nZXRYKCksIHRoaXMuYWxsaWVzW2ldLmdldFkoKSk7XG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5hcmVhLmZpbmRQYXRoKHsneCc6bnBjLmdldFgoKSwgJ3knOm5wYy5nZXRZKCl9LCB7J3gnOnRoaXMuYWxsaWVzW2ldLmdldFgoKSwgJ3knOnRoaXMuYWxsaWVzW2ldLmdldFkoKX0pO1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHBhdGggPSBwYXRoLnNwbGljZSgwLCBwYXRoLmxlbmd0aC0xKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgICAgaWYgKCFsYXN0RGlzdCB8fCBwYXRoICYmIHBhdGgubGVuZ3RoIDwgbGFzdERpc3QpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFsbGllc1tpXTtcbiAgICAgICAgICBsYXN0RGlzdCA9IHBhdGgubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7Ki9cbiAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gIH1cbiAgXG4gIGhhbmRsZU5QQ0VuZFR1cm4obnBjKSB7XG4gICAgY29uc29sZS5sb2coJ2VuZGluZyB0dXJuIGZvcicsIG5wYyk7XG4gICAgbnBjLnJlbWFpbmluZ01vdmVzID0gMDtcbiAgfVxuICBcbiAgcnVuTlBDQXR0YWNrcyhucGMpIHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBucGMgYXR0YWNrcycsIG5wYy5yZW1haW5pbmdNb3Zlcyk7XG4gICAgbGV0IHR1cm5zTGVmdCA9IG5wYy5yZW1haW5pbmdNb3ZlcztcbiAgICBpZiAodHVybnNMZWZ0ID49IG5wYy5lcXVpcHBlZC5zcGVlZCkge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdHVybnNMZWZ0OyBpKyspIHtcbiAgICAgICAgdGhpcy5oYW5kbGVOUENBdHRhY2sobnBjLCBucGMudGFyZ2V0QWNxdWlyZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBucGMucmVtYWluaW5nTW92ZXMgPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgZG9OUENUdXJuKG5wYykge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG5wYyB0dXJuJywgbnBjKTtcbiAgICB0aGlzLm5wY1R1cm5JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tSZW1haW5pbmdOUENNb3ZlcyhucGMpO1xuICAgIH0sIDEwMCk7XG4gICAgaWYgKCFucGMudGFyZ2V0QWNxdWlyZWQpIHtcbiAgICAgIG5wYy50YXJnZXRBY3F1aXJlZCA9IHRoaXMuY2hvb3NlVGFyZ2V0KG5wYyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCducGMgdGFyZ2V0JywgbnBjLnRhcmdldEFjcXVpcmVkKTtcbiAgICBsZXQgZW5lbXlQb3MgPSB7J3gnOm5wYy50YXJnZXRBY3F1aXJlZC5nZXRYKCksICd5JzpucGMudGFyZ2V0QWNxdWlyZWQuZ2V0WSgpfTtcbiAgICBsZXQgb2JqID0ge307XG4gICAgb2JqLmNvbW1hbmQgPSAnbnBjQ2hlY2tSYW5nZSc7XG4gICAgb2JqLm5wYyA9IG5wYy5pZDtcbiAgICBvYmouc3RhcnQgPSB7J3gnOm5wYy5nZXRYKCksICd5JzpucGMuZ2V0WSgpfTtcbiAgICBvYmouZW5kID0gZW5lbXlQb3M7XG4gICAgbGV0IHBhdGggPSB0aGlzLmFyZWEuZmluZFBhdGgob2JqKTtcbiAgICBjb25zb2xlLmxvZygncHQnLCBwYXRoKTtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aCA9IHBhdGguc3BsaWNlKDAsIHBhdGgubGVuZ3RoLTEpO1xuICAgIH1cbiAgICBpZiAoTWF0aC5jZWlsKHBhdGgubGVuZ3RoLzQpID4gbnBjLmVxdWlwcGVkLnJhbmdlKSB7XG4gICAgICBpZiAocGF0aC5sZW5ndGgvNCA+IG5wYy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zcGxpY2UoMCwgbnBjLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkKjQpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXRoW2ldWzBdICo9IEdsb2JhbHMuR1JJRF9TUVVBUkVfV0lEVEg7XG4gICAgICAgIHBhdGhbaV1bMV0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9IRUlHSFQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChucGMucmVtYWluaW5nTW92ZXMgLSBNYXRoLmNlaWwocGF0aC5sZW5ndGgvNCkgPj0gbnBjLmVxdWlwcGVkLnNwZWVkKSB7XG4gICAgICAgIG5wYy53YWxrUm91dGUocGF0aCwgdGhpcy5ydW5OUENBdHRhY2tzLmJpbmQoc2VsZiwgbnBjKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBucGMud2Fsa1JvdXRlKHBhdGgsIHRoaXMuaGFuZGxlTlBDRW5kVHVybi5iaW5kKHNlbGYsIG5wYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bk5QQ0F0dGFja3MobnBjKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllciByZW1haW5pbmcgbW92ZXMnLCB0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XG4gICAgaWYgKHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzIDw9IDApIHtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVMaW5lKTtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVUZXh0KTtcbiAgICAgIHRoaXMubW92ZUxpbmUgPSBudWxsO1xuICAgICAgdGhpcy5tb3ZlVGV4dCA9IG51bGw7XG4gICAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgdHVybiBjb21wbGV0ZScpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBsYXllclR1cm5JbnRlcnZhbCk7XG4gICAgICB0aGlzLmNvbWJhdFNlcXVlbmNlKys7XG4gICAgICBjb25zb2xlLmxvZygncmVtYWluaW5nIGVuZW1pZXMnLCB0aGlzLmVuZW1pZXMpO1xuICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgbmV4dFR1cm4oc2VxdWVuY2UpIHtcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5jb21iYXRTZXF1ZW5jZSA+PSB0aGlzLm9yZGVyLmxlbmd0aCAmJiB0aGlzLmVuZW1pZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbWJhdFNlcXVlbmNlID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pIHtcbiAgICAgIHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0ucmVtYWluaW5nTW92ZXMgPSB0aGlzLm9yZGVyW3RoaXMuY29tYmF0U2VxdWVuY2VdLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkO1xuICAgICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1BMQVlFUikge1xuICAgICAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ25wYyB0dXJuJyk7XG4gICAgICAgIHRoaXMuZG9OUENUdXJuKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciB0dXJuJyk7XG4gICAgICAgIHRoaXMudXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5wbGF5ZXJUdXJuSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGdldE5QQ0J5SUQoaWQpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbWllc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGRldGVybWluZUNvbWJhdE9yZGVyKCkge1xuICAgIGxldCBvcmRlciA9IFtdO1xuICAgIGxldCBwbGF5ZXJBZGRlZCA9IGZhbHNlO1xuICAgIGxldCBucGNDb21iYXRhbnRzID0gW107XG4gICAgaWYgKHRoaXMuaW5pdGlhdGVkID09ICdwbGF5ZXInKSB7XG4gICAgICAvL29yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xuICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xuICAgICAgbnBjQ29tYmF0YW50cyA9IHRoaXMuZW5lbWllcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy9vcmRlci5wdXNoKHRoaXMuZ2V0TlBDQnlJRCh0aGlzLmluaXRpYXRlZCkpO1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgIT0gdGhpcy5pbml0aWF0ZWQpIHtcbiAgICAgICAgICBucGNDb21iYXRhbnRzLnB1c2godGhpcy5lbmVtaWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBucGNDb21iYXRhbnRzLnNvcnQoKGEsIGIpID0+IChhLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkID4gYi5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCkgPyAxIDogLTEpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IG5wY0NvbWJhdGFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChucGNDb21iYXRhbnRzW2ldLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkID4gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQpIHtcbiAgICAgICAgb3JkZXIucHVzaChucGNDb21iYXRhbnRzW2ldKTtcbiAgICAgICAgaWYgKGkgPT0gdGhpcy5lbmVtaWVzLmxlbmd0aC0xICYmICFwbGF5ZXJBZGRlZCkge1xuICAgICAgICAgIG9yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXBsYXllckFkZGVkKSB7XG4gICAgICAgICAgb3JkZXIucHVzaCh0aGlzLnBsYXllcik7XG4gICAgICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG9yZGVyLnB1c2gobnBjQ29tYmF0YW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBcbiAgZW5kUGxheWVyVHVybigpIHtcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IDA7XG4gICAgY29uc29sZS5sb2coJ2VuZCBwbGF5ZXIgdHVybicpO1xuICB9XG4gIFxuICB1cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodmFsdWUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZW1lbnRfcG9pbnRzJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH1cblxuICBjb21iYXRNb3VzZU1vdmVSZXN1bHRzKG9iaikge1xuICAgIGNvbnNvbGUubG9nKCd3dGYnLCBvYmoucGF0aCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChvYmoucGF0aCAmJiBvYmoucGF0aC5sZW5ndGgpIHtcbiAgICAgIGlmICghc2VsZi5tb3ZlTGluZSAmJiAhc2VsZi5wbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IFtvYmouc3RhcnQueCwgb2JqLnN0YXJ0LnksIG9iai5zdGFydC54LCBvYmouc3RhcnQueV07XG4gICAgICAgIHNlbGYubW92ZUxpbmUgPSBuZXcgZmFicmljLkxpbmUoY29vcmRzLCB7XG4gICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuY2FudmFzLmFkZChzZWxmLm1vdmVMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2VsZi5tb3ZlVGV4dCAmJiAhc2VsZi5wbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgc2VsZi5tb3ZlVGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnWCcsIHsgbGVmdDogMTAwLCB0b3A6IDEwMCwgZm9udEZhbWlseTondmVyZGFuYSxnZW5ldmEsc2Fucy1zZXJpZicsIGZvbnRTaXplOjE4LCBmb250V2VpZ2h0Oidib2xkJywgZmlsbDonZ3JlZW4nfSk7XG4gICAgICAgIHNlbGYuY2FudmFzLmFkZChzZWxmLm1vdmVUZXh0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHNlbGYubW92ZUxpbmUpIHtcbiAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoeyd4Mic6b2JqLmVuZC54LCAneTInOm9iai5lbmQueX0pO1xuICAgICAgfVxuICAgICAgbGV0IHRleHRQb3MgPSBPYmplY3QuYXNzaWduKHt9LCBvYmouZW5kKTtcbiAgICAgIC8vdGV4dFBvcy54ICs9IDEwO1xuICAgICAgLy90ZXh0UG9zLnkgLT0gNztcbiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIHRleHQnLCBNYXRoLmNlaWwob2JqLnBhdGgubGVuZ3RoLzQpLnRvU3RyaW5nKCksICdyZW1tb3ZlcycsIHNlbGYucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgIHNlbGYubW92ZVRleHQuc2V0KHt0ZXh0Ok1hdGguY2VpbChvYmoucGF0aC5sZW5ndGgvNCkudG9TdHJpbmcoKSwgbGVmdDp0ZXh0UG9zLngsIHRvcDp0ZXh0UG9zLnl9KTtcbiAgICAgIGlmIChvYmoucGF0aC5sZW5ndGgvNCA8PSBzZWxmLnBsYXllci5yZW1haW5pbmdNb3Zlcykge1xuICAgICAgICBzZWxmLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidncmVlbid9KTtcbiAgICAgICAgc2VsZi5tb3ZlVGV4dC5zZXQoe2ZpbGw6J2dyZWVuJ30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoe3N0cm9rZToncmVkJ30pO1xuICAgICAgICBzZWxmLm1vdmVUZXh0LnNldCh7ZmlsbDoncmVkJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidibGFjayd9KTtcbiAgICAgIHNlbGYubW92ZVRleHQuc2V0KHt0ZXh0OidYJywgbGVmdDp0ZXh0UG9zLngsIHRvcDp0ZXh0UG9zLnksIGZpbGw6J2JsYWNrJ30pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1vdXNlQWN0aW9ucygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5jYW52YXMub24oJ21vdXNlOm91dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZShzZWxmLm1vdmVMaW5lKTtcbiAgICAgIHRoaXMucmVtb3ZlKHNlbGYubW92ZVRleHQpO1xuICAgICAgc2VsZi5tb3ZlTGluZSA9IG51bGw7XG4gICAgICBzZWxmLm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgIHNlbGYuYXJlYS5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKHtjb21tYW5kOidjYW5jZWxUaHJlYWQnfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbnZhcy5vbignbW91c2U6bW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgcGxheWVyID0gc2VsZi5wbGF5ZXI7XG4gICAgICBpZiAoc2VsZi5wbGF5ZXJUdXJuKSB7XG4gICAgICAgIC8vc2VsZi5hcmVhLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2NhbmNlbFRocmVhZCd9KTtcbiAgICAgICAgaWYgKHBsYXllci50YXJnZXRBY3F1aXJlZCkge1xuICAgICAgICAgIGlmIChzZWxmLm1vdmVMaW5lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShzZWxmLm1vdmVMaW5lKTtcbiAgICAgICAgICAgIHNlbGYubW92ZUxpbmUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZi5tb3ZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoc2VsZi5tb3ZlVGV4dCk7XG4gICAgICAgICAgICBzZWxmLm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydCA9IHt9O1xuICAgICAgICBzdGFydC54ID0gcGxheWVyLmdldFgoKTtcbiAgICAgICAgc3RhcnQueSA9IHBsYXllci5nZXRZKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZW5kID0ge307XG4gICAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChldmVudC5wb2ludGVyLngpO1xuICAgICAgICBlbmQueSA9IE1hdGgucm91bmQoZXZlbnQucG9pbnRlci55KTtcbiAgICAgICAgaWYgKCFzZWxmLm1vdmVMaW5lICYmICFwbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgICBsZXQgY29vcmRzID0gW3N0YXJ0LngsIHN0YXJ0LnksIHN0YXJ0LngsIHN0YXJ0LnldO1xuICAgICAgICAgIHNlbGYubW92ZUxpbmUgPSBuZXcgZmFicmljLkxpbmUoY29vcmRzLCB7XG4gICAgICAgICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLmNhbnZhcy5hZGQoc2VsZi5tb3ZlTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLm1vdmVUZXh0ICYmICFwbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgICBzZWxmLm1vdmVUZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCdYJywgeyBsZWZ0OiAxMDAsIHRvcDogMTAwLCBmb250RmFtaWx5Oid2ZXJkYW5hLGdlbmV2YSxzYW5zLXNlcmlmJywgZm9udFNpemU6MTgsIGZvbnRXZWlnaHQ6J2JvbGQnLCBmaWxsOidncmVlbid9KTtcbiAgICAgICAgICBzZWxmLmNhbnZhcy5hZGQoc2VsZi5tb3ZlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzZWxmLm1vdmVMaW5lKSB7XG4gICAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoeyd4Mic6ZW5kLngsICd5Mic6ZW5kLnl9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dFBvcyA9IE9iamVjdC5hc3NpZ24oe30sIGVuZCk7XG4gICAgICAgIHRleHRQb3MueCArPSAxMDtcbiAgICAgICAgdGV4dFBvcy55IC09IDc7XG4gICAgICAgIGlmIChzZWxmLm1vdmVUZXh0ICYmIHNlbGYubW92ZUxpbmUpIHtcbiAgICAgICAgICBpZiAoc2VsZi5hcmVhLndhbGtQYXRoLmlzUG9pbnRJblBhdGgoZW5kLngsIGVuZC55KSkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvbW1hbmQgPSAnY29tYmF0TW91c2VNb3ZlJztcbiAgICAgICAgICAgIG9iai5zdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgb2JqLmVuZCA9IGVuZDtcbiAgICAgICAgICAgIHNlbGYuYXJlYS5maW5kUGF0aChvYmopO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm1vdmVUZXh0LnNldCh7dGV4dDonWCcsIGxlZnQ6dGV4dFBvcy54LCB0b3A6dGV4dFBvcy55LCBmaWxsOidyZWQnfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcblxuZXhwb3J0IGNsYXNzIERlY29yIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9ERUNPUjtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3I7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5sb2NhdGlvbjtcbiAgICB0aGlzLmltZ1VSTCA9IGRhdGEuaW1nO1xuICAgIFxuICAgIHRoaXMuY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XG4gICAgdGhpcy5kb29yID0gZGF0YS5kb29yO1xuICAgIHRoaXMub3BlbiA9IGRhdGEub3BlbjtcblxuICAgIHRoaXMub3JnWCA9IGRhdGEueDtcbiAgICB0aGlzLm9yZ1kgPSBkYXRhLnk7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gMDtcbiAgICB0aGlzLm1heFdpZHRoID0gMDtcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuaW1nLndpZHRoO1xuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQ7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltZy53aWR0aDtcbiAgICAgIGlmICghdGhpcy5zcHJpdGUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMuaW1nLCB7XG4gICAgICAgICAgbGVmdDogdGhpcy5vcmdYLFxuICAgICAgICAgIHRvcDogdGhpcy5vcmdZLFxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2UsXG4gICAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLnggPSB0aGlzLm9yZ1ggKyB0aGlzLndpZHRoLzI7XG4gICAgICB0aGlzLnkgPSB0aGlzLm9yZ1kgKyB0aGlzLmhlaWdodDtcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XG4gICAgICB0aGlzLnNwcml0ZS5tZXRhZGF0YSA9IHRoaXM7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgdGhpcy5pbWcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSkpO1xuICAgIH07XG4gICAgdGhpcy5pbWcuc3JjID0gJ2ltZy9vYmplY3RzLycgKyB0aGlzLmltZ1VSTDtcbiAgfVxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxufSIsIlxyXG5pbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnO1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgIHRoaXMuY3VycmVudEFyZWEgPSBudWxsO1xyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnYycsIHtcclxuICAgICAgZmlyZVJpZ2h0Q2xpY2s6IHRydWUsXHJcbiAgICAgIHN0b3BDb250ZXh0TWVudTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNhbnZhcy5vbignb2JqZWN0OmFkZGVkJywgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0V2ZW50IGFmdGVyOnJlbmRlciBUcmlnZ2VyZWQnKTtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIFxyXG4gICAgICBlLnRhcmdldC5vbignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5wcmludCgnWW91IHNlZTogJyArIEdsb2JhbHMudWN3b3JkcyhlLnRhcmdldC5tZXRhZGF0YS5uYW1lKSArICcuJyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QXJlYS5jb21iYXRPbiB8fCB0aGlzLnBsYXllci5pc1RhcmdldGluZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0aW5nIG5wYycpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci50YXJnZXRBY3F1aXJlZCA9IGUudGFyZ2V0Lm1ldGFkYXRhO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5ob3ZlckN1cnNvcj0nY3Jvc3NoYWlyJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBlLnRhcmdldC5vbignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1ldGFkYXRhICYmIHRoaXMucGxheWVyLnRhcmdldEFjcXVpcmVkID09IGUudGFyZ2V0Lm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllci50YXJnZXRBY3F1aXJlZCA9IG51bGw7XHJcbiAgICAgICAgICBlLnRhcmdldC5ob3ZlckN1cnNvcj0nYXJyb3cnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBlLnRhcmdldC5vbignbW91c2V1cCcsIChtZSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaChtZS5idXR0b24pIHtcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgaWYgKG1lLnRhcmdldC5tZXRhZGF0YSAmJiBtZS50YXJnZXQubWV0YWRhdGEudHlwZSA9PSBHbG9iYWxzLk9CSkVDVF9UWVBFX05QQykge1xyXG4gICAgICAgICAgICAgIGxldCBlbmVteVBvcyA9IHsneCc6bWUudGFyZ2V0Lm1ldGFkYXRhLmdldFgoKSwgJ3knOm1lLnRhcmdldC5tZXRhZGF0YS5nZXRZKCl9O1xyXG4gICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICBvYmouY29tbWFuZCA9ICdwbGF5ZXJDaGVja1JhbmdlJztcclxuICAgICAgICAgICAgICBvYmoubnBjID0gbWUudGFyZ2V0Lm1ldGFkYXRhLmlkO1xyXG4gICAgICAgICAgICAgIG9iai5zdGFydCA9IHsneCc6dGhpcy5wbGF5ZXIuZ2V0WCgpLCAneSc6dGhpcy5wbGF5ZXIuZ2V0WSgpfTtcclxuICAgICAgICAgICAgICBvYmouZW5kID0gZW5lbXlQb3M7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJlYS5maW5kUGF0aChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBpZiAobWUudGFyZ2V0Lm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSaWdodENsaWNrT3B0aW9ucyhtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0ID0ge307XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzID0ge307XHJcbiAgICAvKkYuQS5DLkkuQS5MLlNcclxuICAgIEZvcnRpdHVkZVxyXG4gICAgQWdpbGl0eVxyXG4gICAgQ2hhcmlzbWFcclxuICAgIEludGVsbGlnZW5jZVxyXG4gICAgQXR0ZW50aW9uXHJcbiAgICBMdWNrXHJcbiAgICBTdHJlbmd0aCovXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jaGFyaXNtYSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbiA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2sgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zdHJlbmd0aCA9IDU7XHJcbiAgICBcclxuICAgIC8vZGVyaXZlZCBzdGF0c1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCA9ICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkvMikgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24vMik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnRvbGVyYW5jZSA9IHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlKjU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNtZWxsID0gTWF0aC5yb3VuZCh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hLzIpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5ocCA9IDUwICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjID0gNSArIE1hdGgucm91bmQodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hZ2lsaXR5LzIgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZS8yKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY3JpdGljYWwgPSB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2s7XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC50cmFpdHMgPSB7fTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQudHJhaXRzLmF1dGlzbSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscyA9IHt9O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuYmVnZ2luID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hvb3RpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2NyYXBwaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3RyZW5ndGggKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy53cmFwcGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbiArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLmZpeGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5sZWFybmluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5yYW50aW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hpdHRpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNsZWVwaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyUmlnaHRDbGlja09wdGlvbnMobW91c2VpbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIHJpZ2h0IGNsaWNrJyk7XHJcbiAgICBsZXQgZWxlbWVudCA9IG1vdXNlaW5mby50YXJnZXQ7XHJcbiAgICBsZXQgbWVudVRpbWVvdXQgPSAyMDAwO1xyXG4gICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHJldHVybiBmYWxzZTsgfTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZXh0TWVudScpO1xyXG4gICAgY29uc29sZS5sb2coJ21vdXNlJywgbW91c2VpbmZvKTtcclxuICAgIGRpdi5zdHlsZS5sZWZ0ID0gKG1vdXNlaW5mby5hYnNvbHV0ZVBvaW50ZXIueCArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMtY29udGFpbmVyJykub2Zmc2V0TGVmdCkgKyAncHgnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9IG1vdXNlaW5mby5hYnNvbHV0ZVBvaW50ZXIueSArICdweCc7XHJcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEdsb2JhbHMudWN3b3JkcyhlbGVtZW50Lm1ldGFkYXRhLm5hbWUpKSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVmlldycpKTtcclxuICAgIGxpLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgbGkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcmludChHbG9iYWxzLnVwcGVyRmlyc3RDaGFyKGVsZW1lbnQubWV0YWRhdGEuZGVzY3JpcHRpb24pKTtcclxuICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgIH07XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBpZiAoKGVsZW1lbnQubWV0YWRhdGEuY29udGFpbmVyIHx8IGVsZW1lbnQubWV0YWRhdGEuZG9vcikgJiYgIWVsZW1lbnQubWV0YWRhdGEub3Blbikge1xyXG4gICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPcGVuJykpO1xyXG4gICAgICBsaS5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcclxuICAgICAgbGkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBsYXllci50cnlUb09wZW4oZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSBlbHNlIGlmICgoZWxlbWVudC5tZXRhZGF0YS5jb250YWluZXIgfHwgZWxlbWVudC5tZXRhZGF0YS5kb29yKSAmJiBlbGVtZW50Lm1ldGFkYXRhLm9wZW4pIHtcclxuICAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2xvc2UnKSk7XHJcbiAgICAgIGxpLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRyeVRvQ2xvc2UoZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnQubWV0YWRhdGEuY29udGFpbmVyKSB7XHJcbiAgICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlYXJjaCcpKTtcclxuICAgICAgbGkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudHJ5VG9TZWFyY2goZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChkaXYgJiYgZGl2LnBhcmVudE5vZGUpIHtcclxuICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICB9XHJcbiAgICB9LCBtZW51VGltZW91dCk7XHJcbiAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH07XHJcbiAgICBkaXYub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGRpdiAmJiBkaXYucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIG1lbnVUaW1lb3V0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlQWxsQ29udGV4dE1lbnVzKCkge1xyXG4gICAgbGV0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRleHRNZW51Jyk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBtZW51cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtZW51c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lbnVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgc2hvd0NoYXJhY3RlclNoZWV0KCkge1xyXG4gICAgaWYgKCFHbG9iYWxzLmlzU2hvd2luZ1NoZWV0KSB7XHJcbiAgICAgIEdsb2JhbHMuaXNTaG93aW5nU2hlZXQgPSB0cnVlO1xyXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaGVldF9ob2xkZXInKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFRlbXBsYXRlKCdzaGVldC5odG1sJywgZGl2KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBjbG9zZXggPSBkaXYucXVlcnlTZWxlY3RvcignaGVhZGVyIGEnKTtcclxuICAgICAgY2xvc2V4Lm9uY2xpY2sgPSB0aGlzLnNob3dDaGFyYWN0ZXJTaGVldDtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdGF0cyA9IGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuYmFzZV9zdGF0cyAuYm94Jyk7XHJcbiAgICAgIHN0YXRzWzBdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnN0YXRzLmZvcnRpdHVkZTtcclxuICAgICAgc3RhdHNbMV0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuYXR0ZW50aW9uO1xyXG4gICAgICBzdGF0c1syXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5jaGFyaXNtYTtcclxuICAgICAgc3RhdHNbM10uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgICBzdGF0c1s0XS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5hZ2lsaXR5O1xyXG4gICAgICBzdGF0c1s1XS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5sdWNrO1xyXG4gICAgICBzdGF0c1s2XS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5zdHJlbmd0aDtcclxuICAgICAgXHJcbiAgICAgIGxldCBza2lsbHMgPSBkaXYucXVlcnlTZWxlY3RvckFsbCgnLnNraWxscyAudmFsdWUnKTtcclxuICAgICAgc2tpbGxzWzBdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy5iZWdnaW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1sxXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMuc2hvb3RpbiArICclJztcclxuICAgICAgc2tpbGxzWzJdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy5zY3JhcHBpbiArICclJztcclxuICAgICAgc2tpbGxzWzNdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy53cmFwcGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbNF0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLmZpeGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbNV0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLmxlYXJuaW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1s2XS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMucmFudGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbN10uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLnNoaXR0aW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1s4XS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMuc2xlZXBpbiArICclJztcclxuICAgICAgXHJcbiAgICAgIGxldCBkZXJpdmVkID0gZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0c19pbmZvIC52YWx1ZScpO1xyXG4gICAgICBkZXJpdmVkWzBdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnN0YXRzLnRvbGVyYW5jZSArICclJztcclxuICAgICAgZGVyaXZlZFsxXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5zcGVlZDtcclxuICAgICAgbGV0IHNtZWxsRGF0YSA9IHRoaXMuc3RhdGUucGxheWVyLmdldFNtZWxsTGFiZWwodGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuc21lbGwpO1xyXG4gICAgICBkZXJpdmVkWzJdLnN0eWxlLmNvbG9yID0gc21lbGxEYXRhWzFdO1xyXG4gICAgICBkZXJpdmVkWzJdLmlubmVySFRNTCA9IHNtZWxsRGF0YVswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEdsb2JhbHMuaXNTaG93aW5nU2hlZXQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldF9ob2xkZXInKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyVGFyZ2V0aW5nTW9kZSgpIHtcclxuICAgIHRoaXMuY3VycmVudEFyZWEuZ2V0UGxheWVyKCkuaXNUYXJnZXRpbmcgPSAhdGhpcy5jdXJyZW50QXJlYS5nZXRQbGF5ZXIoKS5pc1RhcmdldGluZztcclxuICB9XHJcbiAgXHJcbiAgZW5kQ29tYmF0VHVybigpIHtcclxuICAgIHRoaXMuY3VycmVudEFyZWEuZW5kQ29tYmF0VHVybigpO1xyXG4gIH1cclxuICBcclxuICBwcmludCh0ZXh0KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnNvbGUnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgKz0gJzxwPicgKyB0ZXh0ICsgJzwvcD4nO1xyXG4gICAgZGl2LmlubmVySFRNTCArPSAnPHA+PC9wPic7XHJcbiAgICBkaXYuc2Nyb2xsVG9wID0gZGl2LnNjcm9sbEhlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgcXVlcnlCYWNrZW5kKHR5cGUsIHVybCkge1xyXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5aW5nICcgKyB1cmwpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOnR5cGUsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZWplY3Qoeydjb2RlJzpyZXNwb25zZS5zdGF0dXMsICdtZXNzYWdlJzpyZXNwb25zZS5zdGF0dXNUZXh0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT5yZWplY3QoSlNPTi5wYXJzZShlcnJvcikpKTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3I9PnJlamVjdChKU09OLnBhcnNlKGVycm9yKSkpO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0VGVtcGxhdGUodXJsLCBkaXYpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgZmV0Y2goR2xvYmFscy5URU1QTEFURV9ESVIgKyB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgSGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtkaXYuaW5uZXJIVE1MID0gcmVzcG9uc2U7IHJlc29sdmUoKTt9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufSIsIlxuZXhwb3J0IGNsYXNzIEdsb2JhbHMge1xuICBzdGF0aWMgUk9PVF9FTEVNRU5UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgc3RhdGljIEFSRUFTX0RJUiA9ICcvaW1nL2FyZWFzLyc7XG4gIHN0YXRpYyBURU1QTEFURV9ESVIgPSAnL3RlbXBsYXRlcy8nO1xuICBzdGF0aWMgQVBJX0RJUiA9ICcvYXBpLyc7XG4gIHN0YXRpYyBBTklNQVRJT05TX0RJUiA9ICcvaW1nL2FuaW1hdGlvbnMvJztcbiAgXG4gIHN0YXRpYyBHUklEX1NRVUFSRV9XSURUSCA9IDI1O1xuICBzdGF0aWMgR1JJRF9TUVVBUkVfSEVJR0hUID0gMjU7XG4gIFxuICBzdGF0aWMgRVZFTlRfUExBWUVSX1JFQURZID0gJ3BsYXllclJlYWR5JztcbiAgc3RhdGljIEVWRU5UX0FSRUFfUkVBRFkgPSAnYXJlYVJlYWR5JztcbiAgc3RhdGljIEVWRU5UX05QQ19SRUFEWSA9ICducGNSZWFkeSc7XG4gIHN0YXRpYyBFVkVOVF9XRUFQT05fUkVBRFkgPSAnd2VhcG9uUmVhZHknO1xuICBzdGF0aWMgRVZFTlRfREVDT1JfUkVBRFkgPSAnZGVjb3JSZWFkeSc7XG4gIHN0YXRpYyBFVkVOVF9QQVRIX1dBTEtFRCA9ICdwYXRoV2Fsa2VkJztcbiAgc3RhdGljIEVWRU5UX1BBVEhfTk9ERV9XQUxLRUQgPSAncGF0aE5vZGVXYWxrZWQnO1xuICBcbiAgc3RhdGljIE9CSkVDVF9UWVBFX1BMQVlFUiA9IDE7XG4gIHN0YXRpYyBPQkpFQ1RfVFlQRV9OUEMgPSAyO1xuICBzdGF0aWMgT0JKRUNUX1RZUEVfV0VBUE9OID0gMztcbiAgc3RhdGljIE9CSkVDVF9UWVBFX0RFQ09SID0gNDtcbiAgXG4gIHN0YXRpYyBDUklUSUNBTF9GQUlMVVJFX0NIQU5DRSA9IDEwO1xuICBzdGF0aWMgQ1JJVElDQUxfREFNQUdFX01PRElGSUVSID0gMTA7XG4gIFxuICBhcGlLZXkgPSBudWxsO1xuICBpc1Nob3dpbmdTaGVldCA9IGZhbHNlO1xuICBcbiAgc3RhdGljIGhhbmRsZUFjY2Vzc0RlbmllZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBHbG9iYWxzLkFQSV9VUkwgKyAndG9rZW4nLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIpO1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICBHbG9iYWxzLmFwaUtleSA9IGpzb24udG9rZW47XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQoJ2VtYWlsPScgKyBHbG9iYWxzLmFwaUVtYWlsICsgJyZwYXNzPScgKyBHbG9iYWxzLmFwaVBhc3MpO1xuICAgIH0pO1xuICB9O1xuICBcbiAgc3RhdGljIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICB9XG4gIFxuICBzdGF0aWMgdXBwZXJGaXJzdENoYXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxuICBcbiAgc3RhdGljIHVjd29yZHMoc3RyKSB7XG4gICAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvXiguKXxcXHMrKC4pL2csIGZ1bmN0aW9uICgkMSkge1xuICAgICAgcmV0dXJuICQxLnRvVXBwZXJDYXNlKClcbiAgICB9KTtcbiAgfVxuICBcbiAgc3RhdGljIGRpc3RhbmNlQmV0d2Vlbihwb2ludDEsIHBvaW50MiwgYXJlYSkge1xuICAgIGxldCBwYXRoID0gYXJlYS5maW5kUGF0aChwb2ludDEsIHBvaW50Mik7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGljZSgwLCBwYXRoLmxlbmd0aC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguY2VpbChwYXRoLmxlbmd0aC80KTtcbiAgfVxuICBcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nKG9iajEsIG9iajIpIHtcbiAgICByZXR1cm4gb2JqMS5pbnRlcnNlY3RzV2l0aE9iamVjdChvYmoyKSB8fFxuICAgICAgICAgICBvYmoxLmlzQ29udGFpbmVkV2l0aGluT2JqZWN0KG9iajIpIHx8XG4gICAgICAgICAgIG9iajIuaXNDb250YWluZWRXaXRoaW5PYmplY3Qob2JqMSk7XG4gIH1cbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcbmltcG9ydCB7V2VhcG9ufSBmcm9tICcuL1dlYXBvbi5qc3gnXG5cbmV4cG9ydCBjbGFzcyBOUEMgZXh0ZW5kcyBFbmdpbmUge1xuICBcbiAgY29uc3RydWN0b3IoaWQsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9OUEM7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9ICdzb21lIGFzc2hvbGUnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnc29tZW9uZSB3aG8gZGVmaWVzIGRlc2NyaXB0aW9uJztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLmltZ1ggPSA5MDA7XG4gICAgdGhpcy5pbWdZID0gNDAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICB0aGlzLm1heEhlaWdodCA9IDA7XG4gICAgdGhpcy5tYXhXaWR0aCA9IDA7XG4gICAgdGhpcy5hbmltYXRpbmdDb3VudCA9IDA7XG4gICAgdGhpcy5ucGNEZWZhdWx0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zaGVldCA9IHsuLi50aGlzLmNoYXJhY3RlclNoZWV0fTtcbiAgICB0aGlzLnRlYW0gPSAzO1xuICAgIHRoaXMudGFyZ2V0QWNxdWlyZWQgPSBudWxsO1xuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnVzaW5nTWVsZWUgPSB0cnVlO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgXG4gICAgbGV0IGZpc3QgPSBuZXcgV2VhcG9uKCdiMWFlNTFiMS1jOWI5LTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnKTtcbiAgICBmaXN0LmltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfV0VBUE9OX1JFQURZLCBldmVudCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RvdyhmaXN0KTtcbiAgICAgIHRoaXMuZXF1aXAoZmlzdCk7XG4gICAgfSk7XG4gICAgZmlzdC5sb2FkKCk7XG4gIH1cbiAgXG4gIHN0b3coaXRlbSkge1xuICAgIHRoaXMuaW52ZW50b3J5LnB1c2goaXRlbSk7XG4gIH1cbiAgXG4gIGRyb3AoaXRlbSkge1xuICAgIGlmICghdGhpcy5pbnZlbnRvcnkuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZlbnRvcnkuc3BsaWNlKHRoaXMuaW52ZW50b3J5LmluZGV4T2YoaXRlbSksIDEpO1xuICB9XG4gIFxuICBlcXVpcChpdGVtKSB7XG4gICAgaWYgKGl0ZW0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXF1aXBwZWQgPSBpdGVtO1xuICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmVxdWlwcGVkJykuc3JjID0gdGhpcy5lcXVpcHBlZC5pbWcuc3JjO1xuICB9XG4gIFxuICBnZXRFcXVpcHBlZFdlYXBvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVpcHBlZDtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHRoaXMubnBjRGVmYXVsdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy5ucGNEZWZhdWx0LndpZHRoO1xuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLm5wY0RlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm5wY0RlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMubnBjRGVmYXVsdC53aWR0aDtcblxuICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMubnBjRGVmYXVsdCwge1xuICAgICAgICBsZWZ0OiB0aGlzLmltZ1gsXG4gICAgICAgIHRvcDogdGhpcy5pbWdZLFxuICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxuICAgICAgICBob3ZlckN1cnNvcjonYXJyb3cnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XG4gICAgICB0aGlzLnNwcml0ZS5tZXRhZGF0YSA9IHRoaXM7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgdGhpcy5ucGNEZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZKSk7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLm5wY0RlZmF1bHQuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteS5wbmcnO1xuICAgIFxuICAgIHRoaXMubnBjTGVmdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubnBjTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X2xlZnQucG5nJztcbiAgICBcbiAgICB0aGlzLm5wY1JpZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ucGNSaWdodC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X3JpZ2h0LnBuZyc7XG4gICAgXG4gICAgdGhpcy5ucGNVcCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubnBjVXAuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteV9iYWNrd2FyZHMucG5nJztcbiAgfVxuICBcbiAgcmVzYW1wbGUoKSB7XG4gICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHRoaXMuaW1nWSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgIFxuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuc3ByaXRlLnNldCgndG9wJywgdGhpcy5pbWdZKTtcbiAgICB0aGlzLnNwcml0ZS5zZXQoJ2xlZnQnLCB0aGlzLmltZ1gpO1xuICAgIHRoaXMueCA9IHRoaXMuaW1nWCArIHRoaXMud2lkdGgvMjtcbiAgICB0aGlzLnkgPSB0aGlzLmltZ1kgKyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwcml0ZS5zZXRDb29yZHMoKTtcbiAgfVxuICBcbiAgY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpIHtcbiAgICBsZXQgcGVyYyA9ICh5LXRoaXMubG9jYXRpb24udmFuaXNoaW5nUG9pbnQpLyh0aGlzLmxvY2F0aW9uLmhlaWdodCAtIHRoaXMubG9jYXRpb24udmFuaXNoaW5nUG9pbnQpO1xuICAgIGxldCBuZXdIID0gKHRoaXMubWF4SGVpZ2h0ICogcGVyYyk7XG4gICAgbGV0IG5ld1cgPSAodGhpcy5tYXhXaWR0aC90aGlzLm1heEhlaWdodCkgKiBuZXdIO1xuICAgIHJldHVybiB7dzpuZXdXLCBoOm5ld0h9O1xuICB9XG4gIFxuICBzY2FsZVNwcml0ZUJ5WUNvb3JkKHkpIHtcbiAgICBsZXQgb2xkSCA9IHRoaXMuaGVpZ2h0O1xuICAgIGxldCBvbGRXID0gdGhpcy53aWR0aDtcbiAgICBpZiAoIW9sZEgpIHtcbiAgICAgIG9sZEggPSB0aGlzLm1heEhlaWdodDtcbiAgICB9XG4gICAgaWYgKCFvbGRXKSB7XG4gICAgICBvbGRXID0gdGhpcy5tYXhXaWR0aDtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemVGcm9tWVBvcyh5KTtcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvSGVpZ2h0KHNpemUuaCk7XG4gICAgdGhpcy5zcHJpdGUuc2NhbGVUb1dpZHRoKHNpemUudyk7XG4gICAgdGhpcy5oZWlnaHQgPSBzaXplLmg7XG4gICAgdGhpcy53aWR0aCA9IHNpemUudztcbiAgICBcbiAgfVxuXG4gIFxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxuICBcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5kZWNvci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgZGVjb3JaID49IG15Wikge1xuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGRlY29yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxvY2F0aW9uLmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldID09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBhY3RvclogPj0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpKSB7XG4gICAgICBsZXQgcGxheWVyWiA9IHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMubG9jYXRpb24uZ2V0UGxheWVyKCkuc3ByaXRlKTtcbiAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmdldFBsYXllcigpLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBwbGF5ZXJaID49IG15Wikge1xuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWisxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBwbGF5ZXJaIDw9IG15Wikge1xuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWi0xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nQ291bnQgPCBwYXRoLmxlbmd0aCkge1xuICAgICAgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPCB0aGlzLmdldFgoKSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjTGVmdCk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPiB0aGlzLmdldFgoKSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIDwgdGhpcy5nZXRZKCkpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY1VwKTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aFt0aGlzLmFuaW1hdGluZ0NvdW50XVswXSA+IHRoaXMuZ2V0WSgpKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNEZWZhdWx0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy9jb25zb2xlLmxvZygnbXYnLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzBdIC0gdGhpcy53aWR0aC8yLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIC0gdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0pO1xuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgnbGVmdCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykgfSk7XG4gICAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCd0b3AnLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIC0gdGhpcy5oZWlnaHQsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcyksIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmdDb3VudCU0ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW0nLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKTtcbiAgICAgIH19KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgXG4gICAgICBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA8IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY0xlZnQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzBdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVswXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdIDwgcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjVXApO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLnggPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdO1xuICAgICAgdGhpcy55ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcbiAgICAgIHRoaXMuc2NhbGVTcHJpdGVCeVlDb29yZChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdKTtcbiAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ2xlZnQnLCBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdIC0gdGhpcy53aWR0aC8yLCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpIH0pO1xuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJywgcGF0aFtwYXRoLmxlbmd0aC0xXVsxXSAtIHRoaXMuaGVpZ2h0LCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpfSk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGp1c3RaUG9zaXRpb24oKTtcbiAgfVxuICBcbiAgd2Fsa1JvdXRlKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coJ3dhbGtyb3V0ZSBjYWxsYmFjaycsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcbiAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKTtcbiAgfVxuICBcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBzZWxmLmltcG9ydFNjcmlwdHMoc2VsZi5sb2NhdGlvbi5vcmlnaW4gKyAnL2pzL3RoaXJkLXBhcnR5L3BhdGhmaW5kaW5nLWJyb3dzZXIubWluLmpzJyk7XG4gIFxuICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEwMjQsIDc2OCk7XG4gIHNlbGYud2Fsa1BhdGggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgXG4gIHNlbGYuY2FuY2VsID0gZmFsc2U7XG4gIFxuICBcbiAgXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XG4gICAgXG4gICAgc3dpdGNoKGV2ZW50LmRhdGEuY29tbWFuZCkge1xuICAgICAgY2FzZSAnZ2VuZXJhdGVXYWxrUGF0aCc6XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHdhbGtwYXRoJyk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGguYmVnaW5QYXRoKCk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGgubW92ZVRvKGV2ZW50LmRhdGEucGF0aFswXS54LCBldmVudC5kYXRhLnBhdGhbMF0ueSk7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IGV2ZW50LmRhdGEucGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNlbGYud2Fsa1BhdGgubGluZVRvKGV2ZW50LmRhdGEucGF0aFtpXS54LCBldmVudC5kYXRhLnBhdGhbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi53YWxrUGF0aC5jbG9zZVBhdGgoKTtcbiAgICAgICAgc2VsZi53YWxrUGF0aC5maWxsKCk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGguc2F2ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbmNlbFRocmVhZCc6XG4gICAgICAgIHNlbGYuY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIXNlbGYuY2FuY2VsKSB7XG4gICAgICAgICAgbGV0IHNjYWxlVyA9IE1hdGguY2VpbChldmVudC5kYXRhLndpZHRoL2V2ZW50LmRhdGEuZ3JpZHdpZHRoKjQpO1xuICAgICAgICAgIGxldCBzY2FsZUggPSBNYXRoLmNlaWwoZXZlbnQuZGF0YS5oZWlnaHQvZXZlbnQuZGF0YS5ncmlkaGVpZ2h0KTtcbiAgICAgICAgICBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKHNjYWxlVywgc2NhbGVIKTtcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBzY2FsZVc7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcz0wOyBzIDwgc2NhbGVIOyBzKyspIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYud2Fsa1BhdGguaXNQb2ludEluUGF0aChpKmV2ZW50LmRhdGEuZ3JpZHdpZHRoLCBzKmV2ZW50LmRhdGEuZ3JpZGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0cnVlJywgaSwgcyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5zZXRXYWxrYWJsZUF0KGksIHMsIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ZhbHNlJywgaSwgcyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5zZXRXYWxrYWJsZUF0KGksIHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGF0aGZpbmRlciA9IG5ldyBQRi5EaWprc3RyYUZpbmRlcih7XG4gICAgICAgICAgICBhbGxvd0RpYWdvbmFsOiB0cnVlLFxuICAgICAgICAgICAgZG9udENyb3NzQ29ybmVyczpmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCBvYmogPSBldmVudC5kYXRhO1xuICAgICAgICAgIG9iai5wYXRoID0gcGF0aGZpbmRlci5maW5kUGF0aChNYXRoLnJvdW5kKG9iai5zdGFydC54L29iai5ncmlkd2lkdGgpLCBNYXRoLnJvdW5kKG9iai5zdGFydC55L29iai5ncmlkaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChvYmouZW5kLngvb2JqLmdyaWR3aWR0aCksIE1hdGgucm91bmQob2JqLmVuZC55L29iai5ncmlkaGVpZ2h0KSwgZ3JpZCk7XG4gICAgICAgICAgcG9zdE1lc3NhZ2Uob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNhbmNlbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuIiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xuaW1wb3J0IHtFbmdpbmV9IGZyb20gJy4vRW5naW5lLmpzeCc7XG5pbXBvcnQge1dlYXBvbn0gZnJvbSAnLi9XZWFwb24uanN4J1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmxvY2F0aW9uO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMubmFtZSA9ICd5b3UnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcInlvdSd2ZSBzZWVuIGJldHRlciBkYXlzLCBmb3Igc3VyZVwiO1xuXG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuaW1nWCA9IDQwO1xuICAgIHRoaXMuaW1nWSA9IDQwMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgIHRoaXMubWF4V2lkdGggPSAwO1xuICAgIHRoaXMuYW5pbWF0aW5nQ291bnQgPSAwO1xuICAgIHRoaXMuYnVtRGVmYXVsdCA9IG5ldyBJbWFnZSgpO1xuICAgIFxuICAgIHRoaXMuYW5pbUludGVydmFsO1xuICAgIFxuICAgIHRoaXMuc2hlZXQgPSB7Li4udGhpcy5jaGFyYWN0ZXJTaGVldH07XG4gICAgXG4gICAgdGhpcy5yZW1haW5pbmdNb3ZlcyA9IHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQ7XG5cbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1RhcmdldGluZyA9IGZhbHNlO1xuICAgIHRoaXMudGFyZ2V0QWNxdWlyZWQgPSBudWxsO1xuICAgIFxuICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgdGhpcy50ZWFtID0gMTtcblxuICAgIGxldCBmaXN0ID0gbmV3IFdlYXBvbignYjFhZTUxYjEtYzliOS0xMWU5LWJjOTctMGU0OWYxZjhlNzdjJyk7XG4gICAgZmlzdC5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSwgZXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0b3coZmlzdCk7XG4gICAgICB0aGlzLmVxdWlwKGZpc3QpO1xuICAgIH0pO1xuICAgIGZpc3QubG9hZCgpO1xuICB9XG4gIFxuICBzdG93KGl0ZW0pIHtcbiAgICB0aGlzLmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICB9XG4gIFxuICBkcm9wKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52ZW50b3J5LnNwbGljZSh0aGlzLmludmVudG9yeS5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgfVxuICBcbiAgZXF1aXAoaXRlbSkge1xuICAgIGlmIChpdGVtLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVxdWlwcGVkID0gaXRlbTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZXF1aXBwZWQnKS5zcmMgPSB0aGlzLmVxdWlwcGVkLmltZy5zcmM7XG4gIH1cbiAgXG4gIGdldEVxdWlwcGVkV2VhcG9uKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWlwcGVkO1xuICB9XG4gIFxuICBnZXRTbWVsbExhYmVsKHNtZWxsKSB7XG4gICAgbGV0IHNtZWxscyA9IFsnTk9YSU9VUycsICdESVNHVVNUSU5HJywgJ0ZPVUwnLCAnTk9UIEdSRUFUJywgJ01JTEQnXTtcbiAgICBsZXQgY29sb3JzID0gWycjZjU1NDQyJywgJyNmNWMyNDInLCAnI2VmZjU0MicsICcjYjlmNTQyJywgJyM0MmY1N2InXTtcbiAgICByZXR1cm4gW3NtZWxsc1tzbWVsbF0sIGNvbG9yc1tzbWVsbF1dO1xuICB9XG4gIFxuICBcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIHRoaXMuYnVtRGVmYXVsdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy5idW1EZWZhdWx0LndpZHRoO1xuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuYnVtRGVmYXVsdC53aWR0aDtcblxuICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMuYnVtRGVmYXVsdCwge1xuICAgICAgICBsZWZ0OiB0aGlzLmltZ1gsXG4gICAgICAgIHRvcDogdGhpcy5pbWdZLFxuICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxuICAgICAgICBob3ZlckN1cnNvcjonYXJyb3cnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XG4gICAgICB0aGlzLnNwcml0ZS5tZXRhZGF0YSA9IHRoaXM7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBwbGF5ZXIgc3ByaXRlJyk7XG4gICAgICB0aGlzLmJ1bURlZmF1bHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9QTEFZRVJfUkVBRFkpKTtcbiAgICB9O1xuICAgIHRoaXMuYnVtRGVmYXVsdC5zcmMgPSAnaW1nL3Blb3BsZS9idW1fZGVmYXVsdC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtTGVmdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuYnVtTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9idW1fbGVmdC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJ1bVJpZ2h0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9yaWdodC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtVXAgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJ1bVVwLnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9iYWNrd2FyZHMucG5nJztcbiAgICBcbiAgICB0aGlzLndhbGtSaWdodEZyYW1lcyA9IFtdO1xuICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMgPSBbXTtcbiAgICB0aGlzLndhbGtVcEZyYW1lcyA9IFtdO1xuICAgIHRoaXMud2Fsa0Rvd25GcmFtZXMgPSBbXTtcbiAgICB0aGlzLnRhbGtGcmFtZXMgPSBbXTtcbiAgICB0aGlzLnB1bmNoTGVmdEZyYW1lcyA9IFtdO1xuICAgIHRoaXMucHVuY2hSaWdodEZyYW1lcyA9IFtdO1xuICAgIFxuICAgIGxldCBkYkluZm8gPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FuaW1hdGlvbnMvJyArIHRoaXMuaWQpO1xuICAgIGlmIChkYkluZm8pIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRiSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBHbG9iYWxzLkFOSU1BVElPTlNfRElSICsgZGJJbmZvW2ldLnVybDtcbiAgICAgICAgc3dpdGNoKGRiSW5mb1tpXS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnd2Fsa19sZWZ0JzpcbiAgICAgICAgICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMucHVzaChpbWcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnd2Fsa19yaWdodCc6XG4gICAgICAgICAgICB0aGlzLndhbGtSaWdodEZyYW1lcy5wdXNoKGltZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd3YWxrX3VwJzpcbiAgICAgICAgICAgIHRoaXMud2Fsa1VwRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dhbGtfZG93bic6XG4gICAgICAgICAgICB0aGlzLndhbGtEb3duRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhbGsnOlxuICAgICAgICAgICAgdGhpcy50YWxrRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3B1bmNoX2xlZnQnOlxuICAgICAgICAgICAgdGhpcy5wdW5jaExlZnRGcmFtZXMucHVzaChpbWcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHVuY2hfcmlnaHQnOlxuICAgICAgICAgICAgdGhpcy5wdW5jaFJpZ2h0RnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzYW1wbGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXNhbXBsZVwiLCB0aGlzKTtcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud2lkdGgpO1xuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICB0aGlzLnNwcml0ZS5zZXQoJ3RvcCcsIHRoaXMuaW1nWSk7XG4gICAgdGhpcy5zcHJpdGUuc2V0KCdsZWZ0JywgdGhpcy5pbWdYKTtcbiAgICB0aGlzLnggPSB0aGlzLmltZ1ggKyB0aGlzLndpZHRoLzI7XG4gICAgdGhpcy55ID0gdGhpcy5pbWdZICsgdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcHJpdGUuc2V0Q29vcmRzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy54LCB0aGlzLnkpO1xuICAgIFxuICB9XG4gIFxuICBjYWxjdWxhdGVTaXplRnJvbVlQb3MoeSkge1xuICAgIGxldCBwZXJjID0gKHktdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCkvKHRoaXMubG9jYXRpb24uaGVpZ2h0IC0gdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCk7XG4gICAgbGV0IG5ld0ggPSAodGhpcy5tYXhIZWlnaHQgKiBwZXJjKTtcbiAgICBsZXQgbmV3VyA9ICh0aGlzLm1heFdpZHRoL3RoaXMubWF4SGVpZ2h0KSAqIG5ld0g7XG4gICAgcmV0dXJuIHt3Om5ld1csIGg6bmV3SH07XG4gIH1cbiAgXG4gIHNjYWxlU3ByaXRlQnlZQ29vcmQoeSkge1xuICAgIGxldCBvbGRIID0gdGhpcy5oZWlnaHQ7XG4gICAgbGV0IG9sZFcgPSB0aGlzLndpZHRoO1xuICAgIGlmICghb2xkSCkge1xuICAgICAgb2xkSCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoIW9sZFcpIHtcbiAgICAgIG9sZFcgPSB0aGlzLm1heFdpZHRoO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpO1xuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9IZWlnaHQoc2l6ZS5oKTtcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvV2lkdGgoc2l6ZS53KTtcbiAgICB0aGlzLmhlaWdodCA9IHNpemUuaDtcbiAgICB0aGlzLndpZHRoID0gc2l6ZS53O1xuICB9XG4gIFxuICBtb3ZlVG9Gcm9udCgpIHtcbiAgICBcbiAgfVxuICBcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5kZWNvci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubG9jYXRpb24uZGVjb3JbaV0uZ2V0WSgpLCAndnMnLCB0aGlzLmdldFkoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGVjb3JaLCAndnMnLCBteVopO1xuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkpIHtcbiAgICAgICAgICB0aGlzLnNwcml0ZS5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICAvL3RoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGRlY29yWi0xKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdhZnRlcicsIHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMuc3ByaXRlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubG9jYXRpb24uYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBhY3RvclogPj0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxuXG4gIHVwZGF0ZU1vdmVtZW50UG9pbnRzRGlzcGxheSh2YWx1ZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlbWVudF9wb2ludHMnKS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfVxuICBcbiAgYXN5bmMgcnVuQXR0YWNrQW5pbWF0aW9uKGRpcikge1xuICAgIGxldCBmcmFtZXM7XG4gICAgc3dpdGNoKGRpcikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBmcmFtZXMgPSB0aGlzLnB1bmNoUmlnaHRGcmFtZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGZyYW1lcyA9IHRoaXMucHVuY2hMZWZ0RnJhbWVzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgICBcbiAgICB0aGlzLmFuaW1JbmRleCA9IDE7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1JbnRlcnZhbCk7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGZpZ2h0IGFuaW1hdGlvbicpO1xuICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYW5pbUluZGV4ID49IGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAxO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYW5pbUludGVydmFsKTtcbiAgICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCkpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2ZpZ2h0aW5nIGZyYW1lJywgZnJhbWVzW3NlbGYuYW5pbUluZGV4XSk7XG4gICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KGZyYW1lc1t0aGlzLmFuaW1JbmRleF0pO1xuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB0aGlzLmFuaW1JbmRleCsrO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIFxuICBjYW5jZWxBbmltYXRpb25zKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xuICAgIHRoaXMuY3VycmVudFBhdGggPSBudWxsO1xuICAgIHRoaXMuYnVtRGVmYXVsdC5yZW1vdmVFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCwgdGhpcy53YWxrQ2FsbGJhY2spO1xuICAgIHRoaXMucnVubmluZ1dhbGtMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa1VwID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa0Rvd24gPSBmYWxzZTtcbiAgICB0aGlzLnJ1bm5pbmdUYWxrID0gZmFsc2U7XG4gICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICB9XG4gIFxuICBhbmltYXRlV2Fsayh4LCB5KSB7XG4gICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHkpO1xuICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC54ICsgdGhpcy53aWR0aC8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNNb3Zpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB5IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueCArIHRoaXMud2lkdGgvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzTW92aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvdW50JTQgPT09IDAgJiYgdGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLmFkanVzdFpQb3NpdGlvbigpO1xuICB9XG4gIFxuICBjeWNsZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvdW50Kys7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbkNvdW50LCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCk7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ291bnQgPCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy5hbmltYXRlV2Fsayh0aGlzLmN1cnJlbnRQYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzBdLCB0aGlzLmN1cnJlbnRQYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2VudGlyZSBwYXRoIHdhbGtlZCcpO1xuICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUEFUSF9XQUxLRUQpKTtcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9ucygpO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgb3BlbkNvbnRhaW5lcihkYXRhKSB7XG4gICAgbGV0IGRlY29yUmVhZHkgPSB0aGlzLmFkanVzdFpQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIGRhdGEuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XG4gICAgdGhpcy5idW1EZWZhdWx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gbnVsbDtcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9vcGVuJykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfb3BlbjtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXQgaW1nIHRvJywgZGF0YS5pbWdVUkwpO1xuICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdkaW1nJywgZGF0YS5pbWcpO1xuICAgICAgZGF0YS5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX0RFQ09SX1JFQURZLCBkZWNvclJlYWR5KTtcbiAgICAgIGRhdGEucmVuZGVyKCk7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBjbG9zZUNvbnRhaW5lcihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ1BVVCcsIEdsb2JhbHMuQVBJX0RJUiArICdjb250YWluZXIvJyArIGRhdGEuaWQgKyAnL2Nsb3NlJykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfY2xvc2VkO1xuICAgICAgY29uc29sZS5sb2coJ3NldCBpbWcgdG8nLCBkYXRhLmltZ1VSTCk7XG4gICAgICBkYXRhLm9wZW4gPSBmYWxzZTtcbiAgICAgIGRhdGEucmVuZGVyKCk7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBzZWFyY2hDb250YWluZXIoZGF0YSkge1xuICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5wYXJlbnQucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9jb250ZW50cycpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMucHJpbnQoZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGlmIChjb250YWluZXJJbmZvKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29udCcsIGNvbnRhaW5lckluZm8pO1xuICAgIH1cbiAgfVxuICBcbiAgdHJ5VG9PcGVuKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcbiAgICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gdGhpcy5vcGVuQ29udGFpbmVyLmJpbmQodGhpcywgZGF0YSlcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9XQUxLRUQsIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrKTtcbiAgICAgIHRoaXMud2Fsa1RvT2JqZWN0KGRhdGEpO1xuICAgIH1cbiAgfVxuICBcbiAgdHJ5VG9DbG9zZShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IHRoaXMuY2xvc2VDb250YWluZXIuYmluZCh0aGlzLCBkYXRhKVxuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgICAgdGhpcy53YWxrVG9PYmplY3QoZGF0YSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnlUb1NlYXJjaChkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ1BVVCcsIEdsb2JhbHMuQVBJX0RJUiArICdjb250YWluZXIvJyArIGRhdGEuaWQgKyAnL29wZW4nKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoY29udGFpbmVySW5mbykge1xuICAgICAgICAgICAgbGV0IGRlY29yUmVhZHkgPSB0aGlzLmFkanVzdFpQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgZGF0YS5pbWdVUkwgPSBjb250YWluZXJJbmZvLmltZ19vcGVuO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBpbWcgdG8nLCBkYXRhLmltZ1VSTCk7XG4gICAgICAgICAgICBkYXRhLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpbWcnLCBkYXRhLmltZyk7XG4gICAgICAgICAgICBkYXRhLmltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfREVDT1JfUkVBRFksIGRlY29yUmVhZHkpO1xuICAgICAgICAgICAgZGF0YS5yZW5kZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hDb250YWluZXIoZGF0YSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgICAgdGhpcy53YWxrVG9PYmplY3QoZGF0YSk7XG4gICAgfVxuICB9XG4gIFxuICBjbGlja2VkR3JvdW5kUGF0aFJlc3VsdHMocGF0aCkge1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmNhbnZhcy5yZW1vdmUodGhpcy5sb2NhdGlvbi5jb21iYXQubW92ZUxpbmUpO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlTGluZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24uY2FudmFzLnJlbW92ZSh0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlVGV4dCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc01vdmluZyB8fCBNYXRoLmNlaWwocGF0aC5sZW5ndGgvNCkgPiB0aGlzLnJlbWFpbmluZ01vdmVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhdGhbaV1bMF0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9XSURUSDtcbiAgICAgICAgcGF0aFtpXVsxXSAqPSBHbG9iYWxzLkdSSURfU1FVQVJFX0hFSUdIVDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdnb3QgcGF0aCcsIHBhdGgpO1xuICAgICAgdGhpcy53YWxrUm91dGUocGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VEKSk7XG4gICAgfVxuICB9XG4gIFxuICB3YWxrVG9PYmplY3QodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICBsZXQgc3RhcnQgPSB7fTtcbiAgICAgIHN0YXJ0LnggPSB0aGlzLmdldFgoKTtcbiAgICAgIHN0YXJ0LnkgPSB0aGlzLmdldFkoKTtcbiAgICAgIGxldCBlbmQgPSB7fTtcbiAgICAgIGVuZC54ID0gdGFyZ2V0LmdldFgoKTtcbiAgICAgIGVuZC55ID0gdGFyZ2V0LmdldFkoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQnLCBlbmQueCwgZW5kLnkpO1xuICAgICAgaWYgKHRoaXMubG9jYXRpb24ud2Fsa1BhdGguaXNQb2ludEluUGF0aChlbmQueCwgZW5kLnkpKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAnd2Fsa1RvT2JqZWN0JztcbiAgICAgICAgb2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIG9iai5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24uZmluZFBhdGgob2JqKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBydW5XYWxrQW5pbWF0aW9uKGRpcikge1xuICAgIGxldCBmcmFtZXM7XG4gICAgc3dpdGNoKGRpcikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLnJ1bm5pbmdSaWdodFdhbGsgPSB0cnVlO1xuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtSaWdodEZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5ydW5uaW5nTGVmdFdhbGsgPSB0cnVlO1xuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtMZWZ0RnJhbWVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgdGhpcy5ydW5uaW5nVXBXYWxrID0gdHJ1ZTtcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrVXBGcmFtZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgIHRoaXMucnVubmluZ0Rvd25XYWxrID0gdHJ1ZTtcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrRG93bkZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0YWxrJzpcbiAgICAgICAgdGhpcy5ydW5uaW5nVGFsayA9IHRydWU7XG4gICAgICAgIGZyYW1lcyA9IHRoaXMudGFsa0ZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYW5pbUludGVydmFsKTtcbiAgICB0aGlzLmFuaW1JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQoZnJhbWVzW3RoaXMuYW5pbUluZGV4XSk7XG4gICAgICB0aGlzLmFuaW1JbmRleCsrO1xuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudChmcmFtZXNbdGhpcy5hbmltSW5kZXhdKTtcbiAgICB0aGlzLmFuaW1JbmRleCsrO1xuICB9XG4gIFxuICB3YWxrUm91dGUocGF0aCkge1xuICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0aW9uQ291bnQgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhdGggPSBwYXRoO1xuICAgIHRoaXMud2Fsa0NhbGxiYWNrID0gdGhpcy5jeWNsZUFuaW1hdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX05PREVfV0FMS0VELCB0aGlzLndhbGtDYWxsYmFjayk7XG4gICAgXG4gICAgbGV0IHggPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdO1xuICAgIGxldCB5ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcbiAgICBcbiAgICBpZiAoeCA8IHRoaXMuZ2V0WCgpKSB7XG4gICAgICB0aGlzLnJ1bldhbGtBbmltYXRpb24oJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHggPiB0aGlzLmdldFgoKSkge1xuICAgICAgdGhpcy5ydW5XYWxrQW5pbWF0aW9uKCdyaWdodCcpO1xuICAgIH0gZWxzZSBpZiAoeSA8IHRoaXMuZ2V0WSgpKSB7XG4gICAgICB0aGlzLnJ1bldhbGtBbmltYXRpb24oJ3VwJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gdGhpcy5nZXRZKCkpIHtcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbignZG93bicpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMF0sIHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMV0pO1xuICB9XG5cbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcblxuZXhwb3J0IGNsYXNzIFdlYXBvbiBleHRlbmRzIEVuZ2luZSB7XG4gIFxuICBcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfV0VBUE9OO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgdGhpcy5pY29uX3VybCA9ICcnO1xuICAgIHRoaXMubWVsZWUgPSB0cnVlO1xuICAgIHRoaXMubmFtZSA9ICd3ZWFwb24nO1xuICAgIHRoaXMuc3BlZWQgPSAxO1xuICAgIHRoaXMucmFuZ2UgPSAxO1xuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgbGV0IHdlYXBvbkluZm8gPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ3dlYXBvbi8nICsgdGhpcy5pZCk7XG4gICAgaWYgKHdlYXBvbkluZm8pIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWFwJywgd2VhcG9uSW5mbyk7XG4gICAgICB0aGlzLmRhbWFnZSA9IHdlYXBvbkluZm8uZGFtYWdlO1xuICAgICAgdGhpcy5pY29uX3VybCA9IHdlYXBvbkluZm8uaWNvbl91cmw7XG4gICAgICB0aGlzLm1lbGVlID0gd2VhcG9uSW5mby5tZWxlZTtcbiAgICAgIHRoaXMubmFtZSA9IHdlYXBvbkluZm8ubmFtZTtcbiAgICAgIHRoaXMuc3BlZWQgPSB3ZWFwb25JbmZvLnNwZWVkO1xuICAgICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmltZy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSkpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuaWNvbl91cmw7XG4gICAgfVxuICB9XG4gIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYldvcmtlciB7XG4gICAgY29uc3RydWN0b3Iod29ya2VyKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB3b3JrZXIudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFsnKCcrY29kZSsnKSgpJ10pO1xuICAgICAgICByZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICB9XG59XG5cbiIsIlxuaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4JztcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi9QbGF5ZXIuanN4J1xuaW1wb3J0IHtBcmVhfSBmcm9tICcuL0FyZWEuanN4J1xuaW1wb3J0IHtEZWNvcn0gZnJvbSAnLi9EZWNvci5qc3gnXG5pbXBvcnQge05QQ30gZnJvbSAnLi9OUEMuanN4J1xuXG5sZXQgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xuXG5mdW5jdGlvbiBjYWxsQ2hhcmFjdGVyU2hlZXQoKSB7XG4gIGVuZ2luZS5zaG93Q2hhcmFjdGVyU2hlZXQoKTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXJFbmRUdXJuKCkge1xuICBlbmdpbmUuZW5kQ29tYmF0VHVybigpO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIC8vbmV3IEdsb2JhbHMoKTtcbiAgXG4gIGxldCBzdGFydEFyZWFJRCA9ICcyOWM5NDcwOC1jNDRjLTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnO1xuICBsZXQgdGVtcFBsYXllcklEID0gJzQzNTU0MDE4LWM0NGItMTFlOS1iYzk3LTBlNDlmMWY4ZTc3Yyc7XG4gIFxuICBlbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0ZW1wUGxheWVySUQsIGVuZ2luZS5jYW52YXMpO1xuICBcbiAgZW5naW5lLnBsYXllci5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QTEFZRVJfUkVBRFksIGV2ZW50ID0gYXN5bmMoKSA9PiB7XG4gICAgbGV0IGRiSW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBzdGFydEFyZWFJRCk7XG4gICAgaWYgKGRiSW5mbykge1xuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhID0gbmV3IEFyZWEoc3RhcnRBcmVhSUQsIGVuZ2luZS5jYW52YXMpO1xuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmFjdG9ycy5wdXNoKGVuZ2luZS5wbGF5ZXIpO1xuICAgICAgZW5naW5lLnBsYXllci5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcbiAgICAgIFxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmxvYWRlckltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfQVJFQV9SRUFEWSwgZXZlbnQgPSBhc3luYygpID0+IHsgIFxuICAgICAgICBlbmdpbmUucGxheWVyLnJlc2FtcGxlKCk7XG4gICAgICAgIGVuZ2luZS5wbGF5ZXIuc3ByaXRlLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlY29ySW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBlbmdpbmUuY3VycmVudEFyZWEuaWQgKyAnL2RlY29yJyk7XG4gICAgICAgIGlmIChkZWNvckluZm8pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVjb3InLCBkZWNvckluZm8pO1xuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRlY29ySW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY29yID0gbmV3IERlY29yKGRlY29ySW5mb1tpXSwgZW5naW5lLmNhbnZhcyk7XG4gICAgICAgICAgICBkZWNvci5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcbiAgICAgICAgICAgIGRlY29yLnJlbmRlcigpO1xuICAgICAgICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmRlY29yLnB1c2goZGVjb3IpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBucGNJbmZvID0gYXdhaXQgZW5naW5lLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FyZWEvJyArIGVuZ2luZS5jdXJyZW50QXJlYS5pZCArICcvbnBjcycpO1xuICAgICAgICAgIGlmIChucGNJbmZvKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBucGNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGxldCBucGMgPSBuZXcgTlBDKG5wY0luZm9baV0uaWQsIGVuZ2luZS5jYW52YXMpO1xuICAgICAgICAgICAgICBucGMubmFtZSA9IG5wY0luZm9baV0ubmFtZTtcbiAgICAgICAgICAgICAgbnBjLmRlc2NyaXB0aW9uID0gbnBjSW5mb1tpXS5kZXNjcjtcbiAgICAgICAgICAgICAgbnBjLnRlYW0gPSBucGNJbmZvW2ldLnRlYW07XG4gICAgICAgICAgICAgIG5wYy5pbWdYID0gbnBjSW5mb1tpXS54O1xuICAgICAgICAgICAgICBucGMuaW1nWSA9IG5wY0luZm9baV0ueTtcbiAgICAgICAgICAgICAgbnBjLmxvY2F0aW9uID0gZW5naW5lLmN1cnJlbnRBcmVhO1xuICAgICAgICAgICAgICBucGMubnBjRGVmYXVsdC5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5jdXJyZW50QXJlYS5hY3RvcnMucHVzaChucGMpO1xuICAgICAgICAgICAgICAgIG5wYy5yZXNhbXBsZSgpO1xuICAgICAgICAgICAgICAgIG5wYy5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XG4gICAgICAgICAgICAgICAgLy9lbmdpbmUuY3VycmVudEFyZWEuZW50ZXJDb21iYXQoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG5wYy5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZW5naW5lLnBsYXllci5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLnJlbmRlckJhY2tncm91bmQoKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBlbmdpbmUucHJpbnQoJ1lvdSBlbnRlciA8Yj4nICsgZGJJbmZvLm5hbWUudG9Mb3dlckNhc2UoKSArICc8L2I+LicpO1xuICAgICAgZW5naW5lLnByaW50KGRiSW5mby5kZXNjcmlwdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbiAgZW5naW5lLnBsYXllci5yZW5kZXIoKTtcbn0iXX0=
