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

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Globals = require("./Globals.jsx");

var _Engine2 = require("./Engine.jsx");

var _pathfinding = _interopRequireDefault(require("pathfinding"));

var _CombatManager = require("./CombatManager.jsx");

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

    _Globals.Globals.SetupPathWorker(_this.walkPoints);

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
    key: "renderBackground",
    value: function renderBackground() {
      var _this2 = this;

      console.log(this.canvas);
      this.canvas.setBackgroundImage('img/areas/area01.png', function () {
        console.log('rendering to', _this2);

        _this2.drawWalkpath();

        _this2.canvas.renderAll();
      });
    }
  }, {
    key: "drawWalkpath",
    value: function drawWalkpath() {
      var _this3 = this;

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

      this.walkPath.canvas.onclick = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event) {
          var player, bounds, start, end, obj, route;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  player = _this3.getPlayer();

                  if (!player.targetAcquired) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  player.cancelAnimations();
                  bounds = _this3.walkPath.canvas.getBoundingClientRect();
                  start = {};
                  start.x = player.getX();
                  start.y = player.getY();
                  end = {};
                  end.x = Math.round(event.clientX - bounds.left);
                  end.y = Math.round(event.clientY - bounds.top);

                  if (!_this3.walkPath.isPointInPath(end.x, end.y)) {
                    _context.next = 29;
                    break;
                  }

                  obj = {};
                  obj.command = 'clickedGround';
                  obj.start = start;
                  obj.end = end;
                  obj.width = _this3.width;
                  obj.height = _this3.height;
                  obj.path = _this3.walkPoints;
                  _context.prev = 19;
                  _context.next = 22;
                  return _Globals.Globals.SendToWorker(obj);

                case 22:
                  route = _context.sent;

                  _this3.getPlayer().clickedGroundPathResults(route.path);

                  _context.next = 29;
                  break;

                case 26:
                  _context.prev = 26;
                  _context.t0 = _context["catch"](19);
                  console.log(_context.t0);

                case 29:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[19, 26]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

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

},{"./CombatManager.jsx":39,"./Engine.jsx":41,"./Globals.jsx":42,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9,"@babel/runtime/regenerator":12,"pathfinding":15}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CombatManager = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
    this.updateRemainingMoves(this.player.remainingMoves);

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

      this.updateRemainingMoves(this.player.remainingMoves - this.player.equipped.speed);
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
            this.setPlayerRemainingMoves(0);
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
    value: function () {
      var _chooseTarget = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(npc) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                    var lastDist, target, i, results;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            lastDist = null;
                            target = null;

                            if (!(npc.team == 3)) {
                              _context.next = 20;
                              break;
                            }

                            i = 0;

                          case 4:
                            if (!(i < _this.allies.length)) {
                              _context.next = 20;
                              break;
                            }

                            _context.prev = 5;
                            _context.next = 8;
                            return _Globals.Globals.SendToWorker({
                              'end': {
                                'x': npc.getX(),
                                'y': npc.getY()
                              },
                              'start': {
                                'x': _this.allies[i].getX(),
                                'y': _this.allies[i].getY()
                              },
                              'width': _this.area.width,
                              'height': _this.area.height,
                              'path': _this.area.walkPoints
                            });

                          case 8:
                            results = _context.sent;

                            if (results.path) {
                              results.path = results.path.splice(0, results.path.length - 1);
                            }

                            if (!lastDist || results.path && results.path.length < lastDist) {
                              target = _this.allies[i];
                              lastDist = results.path.length;
                              resolve(target);
                            }

                            _context.next = 17;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](5);
                            console.log(_context.t0);
                            reject(_context.t0);

                          case 17:
                            i++;
                            _context.next = 4;
                            break;

                          case 20:
                            reject();

                          case 21:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[5, 13]]);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function chooseTarget(_x) {
        return _chooseTarget.apply(this, arguments);
      }

      return chooseTarget;
    }()
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
    value: function () {
      var _doNPCTurn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(npc) {
        var _this2 = this;

        var enemyPos, obj, results, i;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('running npc turn', npc);
                this.npcTurnInterval = setInterval(function () {
                  _this2.checkRemainingNPCMoves(npc);
                }, 100);

                if (npc.targetAcquired) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 5;
                return this.chooseTarget(npc);

              case 5:
                npc.targetAcquired = _context3.sent;

              case 6:
                console.log('npc target', npc.targetAcquired);
                enemyPos = {
                  'x': npc.targetAcquired.getX(),
                  'y': npc.targetAcquired.getY()
                };
                obj = {};
                obj.command = 'npcCheckRange';
                obj.npc = npc.id;
                obj.start = {
                  'x': npc.getX(),
                  'y': npc.getY()
                };
                obj.end = enemyPos;
                obj.width = this.area.width;
                obj.height = this.area.height;
                obj.path = this.area.WalkPoints;
                _context3.prev = 16;
                _context3.next = 19;
                return _Globals.Globals.SendToWorker(obj);

              case 19:
                results = _context3.sent;
                console.log('pt', results.path);

                if (results.path) {
                  results.path = results.path.splice(0, results.path.length - 1);
                }

                if (results.path && Math.ceil(results.path.length / 4) > npc.equipped.range) {
                  if (results.path.length / 4 > npc.characterSheet.stats.speed) {
                    results.path = results.path.splice(0, npc.characterSheet.stats.speed * 4);
                  }

                  for (i = 0; i < results.path.length; i++) {
                    results.path[i][0] *= _Globals.Globals.GRID_SQUARE_WIDTH;
                    results.path[i][1] *= _Globals.Globals.GRID_SQUARE_HEIGHT;
                  }

                  if (npc.remainingMoves - Math.ceil(results.path.length / 4) >= npc.equipped.speed) {
                    npc.walkRoute(results.path, this.runNPCAttacks.bind(this, npc));
                  } else {
                    npc.walkRoute(results.path, this.handleNPCEndTurn.bind(this, npc));
                  }
                } else {
                  this.runNPCAttacks(npc);
                }

                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](16);
                console.log(_context3.t0);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[16, 25]]);
      }));

      function doNPCTurn(_x4) {
        return _doNPCTurn.apply(this, arguments);
      }

      return doNPCTurn;
    }()
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
      var _this3 = this;

      if (this.combatSequence >= this.order.length && this.enemies.length) {
        this.combatSequence = 0;
      }

      if (this.order[this.combatSequence]) {
        if (this.order[this.combatSequence].type != _Globals.Globals.OBJECT_TYPE_PLAYER) {
          this.playerTurn = false;
          console.log('npc turn');
          this.order[this.combatSequence].remainingMoves = this.order[this.combatSequence].characterSheet.stats.speed;
          this.doNPCTurn(this.order[this.combatSequence]);
        } else {
          console.log('player turn');
          this.updateRemainingMoves(this.player.characterSheet.stats.speed);
          this.playerTurn = true;
          this.playerTurnInterval = setInterval(function () {
            _this3.checkRemainingPlayerMoves();
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
    key: "updateRemainingMoves",
    value: function updateRemainingMoves(value) {
      this.player.remainingMoves = value;
      document.querySelector('#movement_points').innerHTML = value;
    }
  }, {
    key: "combatMouseMoveResults",
    value: function combatMouseMoveResults(obj) {
      if (obj.path && obj.path.length) {
        if (!this.moveLine && !this.player.isMoving) {
          var coords = [obj.start.x, obj.start.y, obj.start.x, obj.start.y];
          this.moveLine = new fabric.Line(coords, {
            stroke: 'black',
            strokeWidth: 3,
            selectable: false
          });
          this.canvas.add(this.moveLine);
        }

        if (!this.moveText && !this.player.isMoving) {
          this.moveText = new fabric.Text('X', {
            left: 100,
            top: 100,
            fontFamily: 'verdana,geneva,sans-serif',
            fontSize: 18,
            fontWeight: 'bold',
            fill: 'green'
          });
          this.canvas.add(this.moveText);
        }

        if (this.moveLine) {
          this.moveLine.set({
            'x2': obj.end.x,
            'y2': obj.end.y
          });
        }

        var _textPos = Object.assign({}, obj.end); //textPos.x += 10;
        //textPos.y -= 7;


        console.log('move text', Math.ceil(obj.path.length / 4).toString(), 'remmoves', this.player.remainingMoves);
        this.moveText.set({
          text: Math.ceil(obj.path.length / 4).toString(),
          left: _textPos.x,
          top: _textPos.y
        });

        if (obj.path.length / 4 <= this.player.remainingMoves) {
          this.moveLine.set({
            stroke: 'green'
          });
          this.moveText.set({
            fill: 'green'
          });
        } else {
          this.moveLine.set({
            stroke: 'red'
          });
          this.moveText.set({
            fill: 'red'
          });
        }
      } else {
        this.moveLine.set({
          stroke: 'black'
        });
        this.moveText.set({
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
      var _this4 = this;

      this.canvas.on('mouse:out', function (event) {
        _this4.canvas.remove(_this4.moveLine);

        _this4.canvas.remove(_this4.moveText);

        _this4.moveLine = null;
        _this4.moveText = null;

        _Globals.Globals.PathWorker.postMessage({
          command: 'cancelThread'
        });
      });
      this.canvas.on('mouse:move', /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(event) {
          var start, end, coords, _textPos2, obj, results;

          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!_this4.playerTurn) {
                    _context4.next = 41;
                    break;
                  }

                  if (!_this4.player.targetAcquired) {
                    _context4.next = 5;
                    break;
                  }

                  if (_this4.moveLine) {
                    _this4.canvas.remove(_this4.moveLine);

                    _this4.moveLine = null;
                  }

                  if (_this4.moveText) {
                    _this4.canvas.remove(_this4.moveText);

                    _this4.moveText = null;
                  }

                  return _context4.abrupt("return");

                case 5:
                  start = {};
                  start.x = _this4.player.getX();
                  start.y = _this4.player.getY();
                  end = {};
                  end.x = Math.round(event.pointer.x);
                  end.y = Math.round(event.pointer.y);

                  if (!_this4.moveLine && !_this4.player.isMoving) {
                    coords = [start.x, start.y, start.x, start.y];
                    _this4.moveLine = new fabric.Line(coords, {
                      stroke: 'black',
                      strokeWidth: 3,
                      selectable: false
                    });

                    _this4.canvas.add(_this4.moveLine);
                  }

                  if (!_this4.moveText && !_this4.player.isMoving) {
                    _this4.moveText = new fabric.Text('X', {
                      left: 100,
                      top: 100,
                      fontFamily: 'verdana,geneva,sans-serif',
                      fontSize: 18,
                      fontWeight: 'bold',
                      fill: 'green'
                    });

                    _this4.canvas.add(_this4.moveText);
                  }

                  if (_this4.moveLine) {
                    _this4.moveLine.set({
                      'x2': end.x,
                      'y2': end.y
                    });
                  }

                  _textPos2 = Object.assign({}, end);
                  _textPos2.x += 10;
                  _textPos2.y -= 7;

                  if (!(_this4.moveText && _this4.moveLine)) {
                    _context4.next = 40;
                    break;
                  }

                  if (!_this4.area.walkPath.isPointInPath(end.x, end.y)) {
                    _context4.next = 39;
                    break;
                  }

                  obj = {};
                  obj.command = 'combatMouseMove';
                  obj.start = start;
                  obj.end = end;
                  obj.width = _this4.area.width;
                  obj.height = _this4.area.height;
                  obj.path = _this4.area.WalkPoints;
                  _context4.prev = 26;
                  _context4.next = 29;
                  return _Globals.Globals.SendToWorker(obj);

                case 29:
                  results = _context4.sent;
                  console.log(results);

                  _this4.combatMouseMoveResults(results);

                  _context4.next = 37;
                  break;

                case 34:
                  _context4.prev = 34;
                  _context4.t0 = _context4["catch"](26);
                  console.log(_context4.t0);

                case 37:
                  _context4.next = 40;
                  break;

                case 39:
                  _this4.moveText.set({
                    text: 'X',
                    left: _textPos2.x,
                    top: _textPos2.y,
                    fill: 'red'
                  });

                case 40:
                  _this4.canvas.renderAll();

                case 41:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[26, 34]]);
        }));

        return function (_x5) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
  return CombatManager;
}();

exports.CombatManager = CombatManager;

},{"./Globals.jsx":42,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/regenerator":12}],40:[function(require,module,exports){
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
      e.target.on('mouseup', /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(me) {
          var enemyPos, obj, results;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = me.button;
                  _context.next = _context.t0 === 1 ? 3 : _context.t0 === 3 ? 29 : 31;
                  break;

                case 3:
                  if (!(me.target.metadata && me.target.metadata.type == _Globals.Globals.OBJECT_TYPE_NPC)) {
                    _context.next = 28;
                    break;
                  }

                  enemyPos = {
                    'x': me.target.metadata.getX(),
                    'y': me.target.metadata.getY()
                  };
                  obj = {};
                  obj.command = 'playerCheckRange';
                  obj.npc = me.target.metadata.id;
                  obj.start = {
                    'x': _this.player.getX(),
                    'y': _this.player.getY()
                  };
                  obj.end = enemyPos;
                  obj.width = _this.currentArea.width;
                  obj.height = _this.currentArea.height;
                  obj.path = _this.currentArea.walkPoints;
                  _context.prev = 13;
                  _context.next = 16;
                  return _Globals.Globals.SendToWorker(obj);

                case 16:
                  results = _context.sent;

                  if (results.path) {
                    results.path = results.path.splice(0, results.path.length - 1);
                  }

                  if (!(results.path && Math.ceil(results.path.length / 4) > _this.currentArea.getPlayer().equipped.range)) {
                    _context.next = 21;
                    break;
                  }

                  _this.print("You're out of range.");

                  return _context.abrupt("return");

                case 21:
                  if (!_this.currentArea.combatOn) {
                    _this.currentArea.enterCombat('player');
                  }

                  _this.currentArea.combat.handlePlayerAttack(_this.currentArea.combat.getNPCByID(results.npc));

                  _context.next = 28;
                  break;

                case 25:
                  _context.prev = 25;
                  _context.t1 = _context["catch"](13);

                  if (_context.t1.data && _context.t1.data.err) {
                    console.log(_context.t1.data.err);
                  } else {
                    console.log(_context.t1);
                  }

                case 28:
                  return _context.abrupt("break", 31);

                case 29:
                  if (me.target.metadata) {
                    _this.renderRightClickOptions(me);
                  }

                  return _context.abrupt("break", 31);

                case 31:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[13, 25]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
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
      var _showCharacterSheet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var div, closex, stats, skills, derived, smellData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_Globals.Globals.isShowingSheet) {
                  _context2.next = 36;
                  break;
                }

                _Globals.Globals.isShowingSheet = true;
                div = document.createElement('div');
                div.classList.add('sheet_holder');
                document.body.appendChild(div);
                _context2.next = 7;
                return this.getTemplate('sheet.html');

              case 7:
                div.innerHTML = _context2.sent;
                closex = div.querySelector('header a');
                closex.onclick = this.showCharacterSheet;
                stats = div.querySelectorAll('.base_stats .box');
                stats[0].innerHTML = this.player.characterSheet.stats.fortitude;
                stats[1].innerHTML = this.player.characterSheet.stats.attention;
                stats[2].innerHTML = this.player.characterSheet.stats.charisma;
                stats[3].innerHTML = this.player.characterSheet.stats.intelligence;
                stats[4].innerHTML = this.player.characterSheet.stats.agility;
                stats[5].innerHTML = this.player.characterSheet.stats.luck;
                stats[6].innerHTML = this.player.characterSheet.stats.strength;
                skills = div.querySelectorAll('.skills .value');
                skills[0].innerHTML = this.player.characterSheet.skills.beggin + '%';
                skills[1].innerHTML = this.player.characterSheet.skills.shootin + '%';
                skills[2].innerHTML = this.player.characterSheet.skills.scrappin + '%';
                skills[3].innerHTML = this.player.characterSheet.skills.wrappin + '%';
                skills[4].innerHTML = this.player.characterSheet.skills.fixin + '%';
                skills[5].innerHTML = this.player.characterSheet.skills.learnin + '%';
                skills[6].innerHTML = this.player.characterSheet.skills.rantin + '%';
                skills[7].innerHTML = this.player.characterSheet.skills.shittin + '%';
                skills[8].innerHTML = this.player.characterSheet.skills.sleepin + '%';
                derived = div.querySelectorAll('.stats_info .value');
                derived[0].innerHTML = this.player.characterSheet.stats.tolerance + '%';
                derived[1].innerHTML = this.player.characterSheet.stats.speed;
                smellData = this.player.getSmellLabel(this.player.characterSheet.stats.smell);
                derived[2].style.color = smellData[1];
                derived[2].innerHTML = smellData[0];
                _context2.next = 38;
                break;

              case 36:
                _Globals.Globals.isShowingSheet = false;
                document.body.removeChild(document.body.querySelector('.sheet_holder'));

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
    value: function getTemplate(url) {
      return new Promise(function (resolve, reject) {
        fetch(_Globals.Globals.TEMPLATE_DIR + url, {
          method: 'GET',
          Headers: {
            'Content-Type': 'text/html'
          }
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (e) {
          reject(e);
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

var _PathfindWorker = _interopRequireDefault(require("./PathfindWorker.jsx"));

var _WebWorker = _interopRequireDefault(require("./WebWorker.jsx"));

var Globals = /*#__PURE__*/function () {
  function Globals() {
    (0, _classCallCheck2["default"])(this, Globals);
    (0, _defineProperty2["default"])(this, "apiKey", null);
    (0, _defineProperty2["default"])(this, "isShowingSheet", false);
    (0, _defineProperty2["default"])(this, "PathWorker", {});
  }

  (0, _createClass2["default"])(Globals, null, [{
    key: "SetupPathWorker",
    value: function SetupPathWorker(walkPoints) {
      var _this = this;

      this.PathWorker = new _WebWorker["default"](_PathfindWorker["default"]);
      this.PathWorker.postMessage({
        command: 'generateWalkPath',
        path: walkPoints
      });
      this.PathWorker.addEventListener('message', function (event) {
        var _event$data = event.data,
            id = _event$data.id,
            data = _event$data.data,
            err = _event$data.err;
        console.log('got ', event.data, 'back from worker');

        if (err) {
          var reject = _this.rejects[event.data.id];

          if (reject) {
            reject(event);
          }

          delete _this.rejects[event.data.id];
        }

        var resolve = _this.resolves[event.data.id];

        if (resolve) {
          resolve(event.data);
          delete _this.resolves[event.data.id];
        }
        /*
        case 'combatMouseMove':
        this.combat.combatMouseMoveResults(event.data);
        break;
        case 'playerCheckRange':
        if (event.data.path) {
          event.data.path = event.data.path.splice(0, event.data.path.length-1);
        }
        if (event.data.path && Math.ceil(event.data.path.length/4) > this.getPlayer().equipped.range) {
          this.print("You're out of range.");
          return;
        }
        if (!this.combatOn) {
          this.enterCombat('player');
        }
        console.log(event.data);
        this.combat.handlePlayerAttack(this.combat.getNPCByID(event.data.npc));
        break;
        case 'npcCheckRange':
        if (event.data.path) {
          event.data.path = event.data.path.splice(0, event.data.path.length-1);
        }
        let npc = this.combat.getNPCByID(event.data.npc);
        if (!this.combatOn) {
          this.enterCombat(npc);
        }
        
        if (event.data.path && Math.ceil(event.data.path.length/4) > npc.equipped.range) {
          this.print(Globals.ucwords(npc.name) + " is out of range.");
          this.combat.handleNPCMove();
          return;
        }
          console.log(event.data);
        this.combat.handleNPCAttack(npc, npc.targetAcquired);
        break;
        }*/

      });
    }
  }, {
    key: "SendToWorker",
    value: function SendToWorker(obj) {
      var _this2 = this;

      this.workerRequestID++;
      obj.gridwidth = Globals.GRID_SQUARE_WIDTH;
      obj.gridheight = Globals.GRID_SQUARE_HEIGHT;
      obj.id = this.workerRequestID;
      console.log('sending to worker', obj);
      return new Promise(function (resolve, reject) {
        _this2.resolves[_this2.workerRequestID] = resolve;
        _this2.rejects[_this2.workerRequestID] = reject;

        _this2.PathWorker.postMessage(obj);
      });
    }
  }, {
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
(0, _defineProperty2["default"])(Globals, "workerRequestID", 0);
(0, _defineProperty2["default"])(Globals, "resolves", {});
(0, _defineProperty2["default"])(Globals, "rejects", {});
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

},{"./PathfindWorker.jsx":44,"./WebWorker.jsx":47,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],43:[function(require,module,exports){
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
          var obj = {};

          try {
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
            obj.path = pathfinder.findPath(Math.round(event.data.start.x / event.data.gridwidth), Math.round(event.data.start.y / event.data.gridheight), Math.round(event.data.end.x / event.data.gridwidth), Math.round(event.data.end.y / event.data.gridheight), grid);
          } catch (error) {
            console.log('cuaght', error);
            obj.err = error;
          }

          obj.start = {};
          obj.end = {};
          obj.start.x = event.data.start.x;
          obj.start.y = event.data.start.y;
          obj.end.x = event.data.end.x;
          obj.end.y = event.data.end.y;

          if (event.data.npc) {
            obj.npc = event.data.npc;
          }

          obj.id = event.data.id;
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

window.onload = function () {
  document.querySelector('#endTurnBtn').onclick = function (event) {
    engine.endCombatTurn();
  };

  document.querySelector('#characterSheetBtn').onclick = function (event) {
    engine.showCharacterSheet();
  };

  document.querySelector('#targetModeBtn').onclick = function (event) {
    engine.enterTargetingMode();
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pmYWNlL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hlYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaGVhcC9saWIvaGVhcC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvUGF0aEZpbmRpbmcuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2NvcmUvRGlhZ29uYWxNb3ZlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9HcmlkLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL0hldXJpc3RpYy5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9Ob2RlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL1V0aWwuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmVzdEZpcnN0RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0JpQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCZXN0Rmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlEaWprc3RyYUZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9CcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvRGlqa3N0cmFGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSURBU3RhckZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0pQRk5ldmVyTW92ZURpYWdvbmFsbHkuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSnVtcFBvaW50RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0p1bXBQb2ludEZpbmRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3RhdGljL2pzL3NyYy9BcmVhLmpzeCIsInN0YXRpYy9qcy9zcmMvQ29tYmF0TWFuYWdlci5qc3giLCJzdGF0aWMvanMvc3JjL0RlY29yLmpzeCIsInN0YXRpYy9qcy9zcmMvRW5naW5lLmpzeCIsInN0YXRpYy9qcy9zcmMvR2xvYmFscy5qc3giLCJzdGF0aWMvanMvc3JjL05QQy5qc3giLCJzdGF0aWMvanMvc3JjL1BhdGhmaW5kV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvUGxheWVyLmpzeCIsInN0YXRpYy9qcy9zcmMvV2VhcG9uLmpzeCIsInN0YXRpYy9qcy9zcmMvV2ViV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvbWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalhBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBZXRDO0FBQ0Y7O0FBQ0QsNEJBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFkLENBQXFCLFlBQXJCOztBQWpDNEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTdFO0FBb0NBLGdCQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLGdCQUFuQjtBQUdBLGdCQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsa0JBQWtCLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBWixFQUFsQixHQUE4QyxPQUEzRDtBQUNBLGdCQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsTUFBTSxDQUFDLFdBQXBCLEVBQWlDLElBQWpDO0FBQ0Q7O0FBaEQyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTNFO0FBa0RBLEVBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFkO0FBQ0QsQ0FuRUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2hlYXAnKTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS44LjBcbihmdW5jdGlvbigpIHtcbiAgdmFyIEhlYXAsIGRlZmF1bHRDbXAsIGZsb29yLCBoZWFwaWZ5LCBoZWFwcG9wLCBoZWFwcHVzaCwgaGVhcHB1c2hwb3AsIGhlYXByZXBsYWNlLCBpbnNvcnQsIG1pbiwgbmxhcmdlc3QsIG5zbWFsbGVzdCwgdXBkYXRlSXRlbSwgX3NpZnRkb3duLCBfc2lmdHVwO1xuXG4gIGZsb29yID0gTWF0aC5mbG9vciwgbWluID0gTWF0aC5taW47XG5cblxuICAvKlxuICBEZWZhdWx0IGNvbXBhcmlzb24gZnVuY3Rpb24gdG8gYmUgdXNlZFxuICAgKi9cblxuICBkZWZhdWx0Q21wID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIGlmICh4IDwgeSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuXG4gIC8qXG4gIEluc2VydCBpdGVtIHggaW4gbGlzdCBhLCBhbmQga2VlcCBpdCBzb3J0ZWQgYXNzdW1pbmcgYSBpcyBzb3J0ZWQuXG4gIFxuICBJZiB4IGlzIGFscmVhZHkgaW4gYSwgaW5zZXJ0IGl0IHRvIHRoZSByaWdodCBvZiB0aGUgcmlnaHRtb3N0IHguXG4gIFxuICBPcHRpb25hbCBhcmdzIGxvIChkZWZhdWx0IDApIGFuZCBoaSAoZGVmYXVsdCBhLmxlbmd0aCkgYm91bmQgdGhlIHNsaWNlXG4gIG9mIGEgdG8gYmUgc2VhcmNoZWQuXG4gICAqL1xuXG4gIGluc29ydCA9IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSwgY21wKSB7XG4gICAgdmFyIG1pZDtcbiAgICBpZiAobG8gPT0gbnVsbCkge1xuICAgICAgbG8gPSAwO1xuICAgIH1cbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGlmIChsbyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbG8gbXVzdCBiZSBub24tbmVnYXRpdmUnKTtcbiAgICB9XG4gICAgaWYgKGhpID09IG51bGwpIHtcbiAgICAgIGhpID0gYS5sZW5ndGg7XG4gICAgfVxuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICBtaWQgPSBmbG9vcigobG8gKyBoaSkgLyAyKTtcbiAgICAgIGlmIChjbXAoeCwgYVttaWRdKSA8IDApIHtcbiAgICAgICAgaGkgPSBtaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsbyA9IG1pZCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoW10uc3BsaWNlLmFwcGx5KGEsIFtsbywgbG8gLSBsb10uY29uY2F0KHgpKSwgeCk7XG4gIH07XG5cblxuICAvKlxuICBQdXNoIGl0ZW0gb250byBoZWFwLCBtYWludGFpbmluZyB0aGUgaGVhcCBpbnZhcmlhbnQuXG4gICAqL1xuXG4gIGhlYXBwdXNoID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxLCBjbXApO1xuICB9O1xuXG5cbiAgLypcbiAgUG9wIHRoZSBzbWFsbGVzdCBpdGVtIG9mZiB0aGUgaGVhcCwgbWFpbnRhaW5pbmcgdGhlIGhlYXAgaW52YXJpYW50LlxuICAgKi9cblxuICBoZWFwcG9wID0gZnVuY3Rpb24oYXJyYXksIGNtcCkge1xuICAgIHZhciBsYXN0ZWx0LCByZXR1cm5pdGVtO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgbGFzdGVsdCA9IGFycmF5LnBvcCgpO1xuICAgIGlmIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybml0ZW0gPSBhcnJheVswXTtcbiAgICAgIGFycmF5WzBdID0gbGFzdGVsdDtcbiAgICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybml0ZW0gPSBsYXN0ZWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFBvcCBhbmQgcmV0dXJuIHRoZSBjdXJyZW50IHNtYWxsZXN0IHZhbHVlLCBhbmQgYWRkIHRoZSBuZXcgaXRlbS5cbiAgXG4gIFRoaXMgaXMgbW9yZSBlZmZpY2llbnQgdGhhbiBoZWFwcG9wKCkgZm9sbG93ZWQgYnkgaGVhcHB1c2goKSwgYW5kIGNhbiBiZVxuICBtb3JlIGFwcHJvcHJpYXRlIHdoZW4gdXNpbmcgYSBmaXhlZCBzaXplIGhlYXAuIE5vdGUgdGhhdCB0aGUgdmFsdWVcbiAgcmV0dXJuZWQgbWF5IGJlIGxhcmdlciB0aGFuIGl0ZW0hIFRoYXQgY29uc3RyYWlucyByZWFzb25hYmxlIHVzZSBvZlxuICB0aGlzIHJvdXRpbmUgdW5sZXNzIHdyaXR0ZW4gYXMgcGFydCBvZiBhIGNvbmRpdGlvbmFsIHJlcGxhY2VtZW50OlxuICAgICAgaWYgaXRlbSA+IGFycmF5WzBdXG4gICAgICAgIGl0ZW0gPSBoZWFwcmVwbGFjZShhcnJheSwgaXRlbSlcbiAgICovXG5cbiAgaGVhcHJlcGxhY2UgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgdmFyIHJldHVybml0ZW07XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICByZXR1cm5pdGVtID0gYXJyYXlbMF07XG4gICAgYXJyYXlbMF0gPSBpdGVtO1xuICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgcmV0dXJuIHJldHVybml0ZW07XG4gIH07XG5cblxuICAvKlxuICBGYXN0IHZlcnNpb24gb2YgYSBoZWFwcHVzaCBmb2xsb3dlZCBieSBhIGhlYXBwb3AuXG4gICAqL1xuXG4gIGhlYXBwdXNocG9wID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgaWYgKGFycmF5Lmxlbmd0aCAmJiBjbXAoYXJyYXlbMF0sIGl0ZW0pIDwgMCkge1xuICAgICAgX3JlZiA9IFthcnJheVswXSwgaXRlbV0sIGl0ZW0gPSBfcmVmWzBdLCBhcnJheVswXSA9IF9yZWZbMV07XG4gICAgICBfc2lmdHVwKGFycmF5LCAwLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFRyYW5zZm9ybSBsaXN0IGludG8gYSBoZWFwLCBpbi1wbGFjZSwgaW4gTyhhcnJheS5sZW5ndGgpIHRpbWUuXG4gICAqL1xuXG4gIGhlYXBpZnkgPSBmdW5jdGlvbihhcnJheSwgY21wKSB7XG4gICAgdmFyIGksIF9pLCBfaiwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzLCBfcmVzdWx0czE7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBfcmVmMSA9IChmdW5jdGlvbigpIHtcbiAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgZm9yICh2YXIgX2ogPSAwLCBfcmVmID0gZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7IDAgPD0gX3JlZiA/IF9qIDwgX3JlZiA6IF9qID4gX3JlZjsgMCA8PSBfcmVmID8gX2orKyA6IF9qLS0peyBfcmVzdWx0czEucHVzaChfaik7IH1cbiAgICAgIHJldHVybiBfcmVzdWx0czE7XG4gICAgfSkuYXBwbHkodGhpcykucmV2ZXJzZSgpO1xuICAgIF9yZXN1bHRzID0gW107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaSA9IF9yZWYxW19pXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goX3NpZnR1cChhcnJheSwgaSwgY21wKSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuXG4gIC8qXG4gIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGdpdmVuIGl0ZW0gaW4gdGhlIGhlYXAuXG4gIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBpdGVtIGlzIGJlaW5nIG1vZGlmaWVkLlxuICAgKi9cblxuICB1cGRhdGVJdGVtID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBwb3MgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9zaWZ0ZG93bihhcnJheSwgMCwgcG9zLCBjbXApO1xuICAgIHJldHVybiBfc2lmdHVwKGFycmF5LCBwb3MsIGNtcCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIGxhcmdlc3QgZWxlbWVudHMgaW4gYSBkYXRhc2V0LlxuICAgKi9cblxuICBubGFyZ2VzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBjbXApIHtcbiAgICB2YXIgZWxlbSwgcmVzdWx0LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIHJlc3VsdCA9IGFycmF5LnNsaWNlKDAsIG4pO1xuICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGVhcGlmeShyZXN1bHQsIGNtcCk7XG4gICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgZWxlbSA9IF9yZWZbX2ldO1xuICAgICAgaGVhcHB1c2hwb3AocmVzdWx0LCBlbGVtLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LnNvcnQoY21wKS5yZXZlcnNlKCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIHNtYWxsZXN0IGVsZW1lbnRzIGluIGEgZGF0YXNldC5cbiAgICovXG5cbiAgbnNtYWxsZXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGNtcCkge1xuICAgIHZhciBlbGVtLCBpLCBsb3MsIHJlc3VsdCwgX2ksIF9qLCBfbGVuLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBpZiAobiAqIDEwIDw9IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gYXJyYXkuc2xpY2UoMCwgbikuc29ydChjbXApO1xuICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBsb3MgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGVsZW0gPSBfcmVmW19pXTtcbiAgICAgICAgaWYgKGNtcChlbGVtLCBsb3MpIDwgMCkge1xuICAgICAgICAgIGluc29ydChyZXN1bHQsIGVsZW0sIDAsIG51bGwsIGNtcCk7XG4gICAgICAgICAgcmVzdWx0LnBvcCgpO1xuICAgICAgICAgIGxvcyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGhlYXBpZnkoYXJyYXksIGNtcCk7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaiA9IDAsIF9yZWYxID0gbWluKG4sIGFycmF5Lmxlbmd0aCk7IDAgPD0gX3JlZjEgPyBfaiA8IF9yZWYxIDogX2ogPiBfcmVmMTsgaSA9IDAgPD0gX3JlZjEgPyArK19qIDogLS1faikge1xuICAgICAgX3Jlc3VsdHMucHVzaChoZWFwcG9wKGFycmF5LCBjbXApKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG4gIF9zaWZ0ZG93biA9IGZ1bmN0aW9uKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApIHtcbiAgICB2YXIgbmV3aXRlbSwgcGFyZW50LCBwYXJlbnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBuZXdpdGVtID0gYXJyYXlbcG9zXTtcbiAgICB3aGlsZSAocG9zID4gc3RhcnRwb3MpIHtcbiAgICAgIHBhcmVudHBvcyA9IChwb3MgLSAxKSA+PiAxO1xuICAgICAgcGFyZW50ID0gYXJyYXlbcGFyZW50cG9zXTtcbiAgICAgIGlmIChjbXAobmV3aXRlbSwgcGFyZW50KSA8IDApIHtcbiAgICAgICAgYXJyYXlbcG9zXSA9IHBhcmVudDtcbiAgICAgICAgcG9zID0gcGFyZW50cG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlbcG9zXSA9IG5ld2l0ZW07XG4gIH07XG5cbiAgX3NpZnR1cCA9IGZ1bmN0aW9uKGFycmF5LCBwb3MsIGNtcCkge1xuICAgIHZhciBjaGlsZHBvcywgZW5kcG9zLCBuZXdpdGVtLCByaWdodHBvcywgc3RhcnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBlbmRwb3MgPSBhcnJheS5sZW5ndGg7XG4gICAgc3RhcnRwb3MgPSBwb3M7XG4gICAgbmV3aXRlbSA9IGFycmF5W3Bvc107XG4gICAgY2hpbGRwb3MgPSAyICogcG9zICsgMTtcbiAgICB3aGlsZSAoY2hpbGRwb3MgPCBlbmRwb3MpIHtcbiAgICAgIHJpZ2h0cG9zID0gY2hpbGRwb3MgKyAxO1xuICAgICAgaWYgKHJpZ2h0cG9zIDwgZW5kcG9zICYmICEoY21wKGFycmF5W2NoaWxkcG9zXSwgYXJyYXlbcmlnaHRwb3NdKSA8IDApKSB7XG4gICAgICAgIGNoaWxkcG9zID0gcmlnaHRwb3M7XG4gICAgICB9XG4gICAgICBhcnJheVtwb3NdID0gYXJyYXlbY2hpbGRwb3NdO1xuICAgICAgcG9zID0gY2hpbGRwb3M7XG4gICAgICBjaGlsZHBvcyA9IDIgKiBwb3MgKyAxO1xuICAgIH1cbiAgICBhcnJheVtwb3NdID0gbmV3aXRlbTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApO1xuICB9O1xuXG4gIEhlYXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgSGVhcC5wdXNoID0gaGVhcHB1c2g7XG5cbiAgICBIZWFwLnBvcCA9IGhlYXBwb3A7XG5cbiAgICBIZWFwLnJlcGxhY2UgPSBoZWFwcmVwbGFjZTtcblxuICAgIEhlYXAucHVzaHBvcCA9IGhlYXBwdXNocG9wO1xuXG4gICAgSGVhcC5oZWFwaWZ5ID0gaGVhcGlmeTtcblxuICAgIEhlYXAudXBkYXRlSXRlbSA9IHVwZGF0ZUl0ZW07XG5cbiAgICBIZWFwLm5sYXJnZXN0ID0gbmxhcmdlc3Q7XG5cbiAgICBIZWFwLm5zbWFsbGVzdCA9IG5zbWFsbGVzdDtcblxuICAgIGZ1bmN0aW9uIEhlYXAoY21wKSB7XG4gICAgICB0aGlzLmNtcCA9IGNtcCAhPSBudWxsID8gY21wIDogZGVmYXVsdENtcDtcbiAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXBwdXNoKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaGVhcHBvcCh0aGlzLm5vZGVzLCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzWzBdO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmluZGV4T2YoeCkgIT09IC0xO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXByZXBsYWNlKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaHBvcCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBoZWFwcHVzaHBvcCh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBoZWFwaWZ5KHRoaXMubm9kZXMsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB1cGRhdGVJdGVtKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzID0gW107XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFwO1xuICAgICAgaGVhcCA9IG5ldyBIZWFwKCk7XG4gICAgICBoZWFwLm5vZGVzID0gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICAgIHJldHVybiBoZWFwO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuaW5zZXJ0ID0gSGVhcC5wcm90b3R5cGUucHVzaDtcblxuICAgIEhlYXAucHJvdG90eXBlLnRvcCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5mcm9udCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5oYXMgPSBIZWFwLnByb3RvdHlwZS5jb250YWlucztcblxuICAgIEhlYXAucHJvdG90eXBlLmNvcHkgPSBIZWFwLnByb3RvdHlwZS5jbG9uZTtcblxuICAgIHJldHVybiBIZWFwO1xuXG4gIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsID8gbW9kdWxlLmV4cG9ydHMgOiB2b2lkIDApIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEhlYXA7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LkhlYXAgPSBIZWFwO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL1BhdGhGaW5kaW5nJyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgJ0hlYXAnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnaGVhcCcpLFxyXG4gICAgJ05vZGUnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL05vZGUnKSxcclxuICAgICdHcmlkJyAgICAgICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9HcmlkJyksXHJcbiAgICAnVXRpbCcgICAgICAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvVXRpbCcpLFxyXG4gICAgJ0RpYWdvbmFsTW92ZW1lbnQnICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKSxcclxuICAgICdIZXVyaXN0aWMnICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9IZXVyaXN0aWMnKSxcclxuICAgICdBU3RhckZpbmRlcicgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9BU3RhckZpbmRlcicpLFxyXG4gICAgJ0Jlc3RGaXJzdEZpbmRlcicgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0Jlc3RGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0JyZWFkdGhGaXJzdEZpbmRlcicgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JyZWFkdGhGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0RpamtzdHJhRmluZGVyJyAgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0RpamtzdHJhRmluZGVyJyksXHJcbiAgICAnQmlBU3RhckZpbmRlcicgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlBU3RhckZpbmRlcicpLFxyXG4gICAgJ0JpQmVzdEZpcnN0RmluZGVyJyAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JpQmVzdEZpcnN0RmluZGVyJyksXHJcbiAgICAnQmlCcmVhZHRoRmlyc3RGaW5kZXInICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXInKSxcclxuICAgICdCaURpamtzdHJhRmluZGVyJyAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CaURpamtzdHJhRmluZGVyJyksXHJcbiAgICAnSURBU3RhckZpbmRlcicgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvSURBU3RhckZpbmRlcicpLFxyXG4gICAgJ0p1bXBQb2ludEZpbmRlcicgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0p1bXBQb2ludEZpbmRlcicpLFxyXG59O1xyXG4iLCJ2YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHtcclxuICAgIEFsd2F5czogMSxcclxuICAgIE5ldmVyOiAyLFxyXG4gICAgSWZBdE1vc3RPbmVPYnN0YWNsZTogMyxcclxuICAgIE9ubHlXaGVuTm9PYnN0YWNsZXM6IDRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlhZ29uYWxNb3ZlbWVudDsiLCJ2YXIgTm9kZSA9IHJlcXVpcmUoJy4vTm9kZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4vRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkIGNsYXNzLCB3aGljaCBzZXJ2ZXMgYXMgdGhlIGVuY2Fwc3VsYXRpb24gb2YgdGhlIGxheW91dCBvZiB0aGUgbm9kZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge251bWJlcnxBcnJheTxBcnJheTwobnVtYmVyfGJvb2xlYW4pPj59IHdpZHRoX29yX21hdHJpeCBOdW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgZ3JpZCwgb3IgbWF0cml4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgTnVtYmVyIG9mIHJvd3Mgb2YgdGhlIGdyaWQuXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KG51bWJlcnxib29sZWFuKT4+fSBbbWF0cml4XSAtIEEgMC0xIG1hdHJpeFxyXG4gKiAgICAgcmVwcmVzZW50aW5nIHRoZSB3YWxrYWJsZSBzdGF0dXMgb2YgdGhlIG5vZGVzKDAgb3IgZmFsc2UgZm9yIHdhbGthYmxlKS5cclxuICogICAgIElmIHRoZSBtYXRyaXggaXMgbm90IHN1cHBsaWVkLCBhbGwgdGhlIG5vZGVzIHdpbGwgYmUgd2Fsa2FibGUuICAqL1xyXG5mdW5jdGlvbiBHcmlkKHdpZHRoX29yX21hdHJpeCwgaGVpZ2h0LCBtYXRyaXgpIHtcclxuICAgIHZhciB3aWR0aDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHdpZHRoX29yX21hdHJpeCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoX29yX21hdHJpeDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGhfb3JfbWF0cml4Lmxlbmd0aDtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoX29yX21hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAgICAgbWF0cml4ID0gd2lkdGhfb3JfbWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiByb3dzIG9mIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSAyRCBhcnJheSBvZiBub2Rlcy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMuX2J1aWxkTm9kZXMod2lkdGgsIGhlaWdodCwgbWF0cml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIG5vZGVzLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcnxib29sZWFuPj59IFttYXRyaXhdIC0gQSAwLTEgbWF0cml4IHJlcHJlc2VudGluZ1xyXG4gKiAgICAgdGhlIHdhbGthYmxlIHN0YXR1cyBvZiB0aGUgbm9kZXMuXHJcbiAqIEBzZWUgR3JpZFxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuX2J1aWxkTm9kZXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBtYXRyaXgpIHtcclxuICAgIHZhciBpLCBqLFxyXG4gICAgICAgIG5vZGVzID0gbmV3IEFycmF5KGhlaWdodCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XHJcbiAgICAgICAgbm9kZXNbaV0gPSBuZXcgQXJyYXkod2lkdGgpO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB3aWR0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIG5vZGVzW2ldW2pdID0gbmV3IE5vZGUoaiwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobWF0cml4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdHJpeC5sZW5ndGggIT09IGhlaWdodCB8fCBtYXRyaXhbMF0ubGVuZ3RoICE9PSB3aWR0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IHNpemUgZG9lcyBub3QgZml0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHdpZHRoOyArK2opIHtcclxuICAgICAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gMCwgZmFsc2UsIG51bGwgd2lsbCBiZSB3YWxrYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGUgb3RoZXJzIHdpbGwgYmUgdW4td2Fsa2FibGVcclxuICAgICAgICAgICAgICAgIG5vZGVzW2ldW2pdLndhbGthYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG59O1xyXG5cclxuXHJcbkdyaWQucHJvdG90eXBlLmdldE5vZGVBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzW3ldW3hdO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgd2Fsa2FibGUuXHJcbiAqIChBbHNvIHJldHVybnMgZmFsc2UgaWYgdGhlIHBvc2l0aW9uIGlzIG91dHNpZGUgdGhlIGdyaWQuKVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgbm9kZS5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBUaGUgd2Fsa2FiaWxpdHkgb2YgdGhlIG5vZGUuXHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5pc1dhbGthYmxlQXQgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luc2lkZSh4LCB5KSAmJiB0aGlzLm5vZGVzW3ldW3hdLndhbGthYmxlO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcG9zaXRpb24gaXMgaW5zaWRlIHRoZSBncmlkLlxyXG4gKiBYWFg6IGBncmlkLmlzSW5zaWRlKHgsIHkpYCBpcyB3aWVyZCB0byByZWFkLlxyXG4gKiBJdCBzaG91bGQgYmUgYCh4LCB5KSBpcyBpbnNpZGUgZ3JpZGAsIGJ1dCBJIGZhaWxlZCB0byBmaW5kIGEgYmV0dGVyXHJcbiAqIG5hbWUgZm9yIHRoaXMgbWV0aG9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuaXNJbnNpZGUgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCkgJiYgKHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXQgd2hldGhlciB0aGUgbm9kZSBvbiB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgd2Fsa2FibGUuXHJcbiAqIE5PVEU6IHRocm93cyBleGNlcHRpb24gaWYgdGhlIGNvb3JkaW5hdGUgaXMgbm90IGluc2lkZSB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBub2RlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gd2Fsa2FibGUgLSBXaGV0aGVyIHRoZSBwb3NpdGlvbiBpcyB3YWxrYWJsZS5cclxuICovXHJcbkdyaWQucHJvdG90eXBlLnNldFdhbGthYmxlQXQgPSBmdW5jdGlvbih4LCB5LCB3YWxrYWJsZSkge1xyXG4gICAgdGhpcy5ub2Rlc1t5XVt4XS53YWxrYWJsZSA9IHdhbGthYmxlO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIG5laWdoYm9ycyBvZiB0aGUgZ2l2ZW4gbm9kZS5cclxuICpcclxuICogICAgIG9mZnNldHMgICAgICBkaWFnb25hbE9mZnNldHM6XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICogIHwgICB8IDAgfCAgIHwgICAgfCAwIHwgICB8IDEgfFxyXG4gKiAgKy0tLSstLS0rLS0tKyAgICArLS0tKy0tLSstLS0rXHJcbiAqICB8IDMgfCAgIHwgMSB8ICAgIHwgICB8ICAgfCAgIHxcclxuICogICstLS0rLS0tKy0tLSsgICAgKy0tLSstLS0rLS0tK1xyXG4gKiAgfCAgIHwgMiB8ICAgfCAgICB8IDMgfCAgIHwgMiB8XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICpcclxuICogIFdoZW4gYWxsb3dEaWFnb25hbCBpcyB0cnVlLCBpZiBvZmZzZXRzW2ldIGlzIHZhbGlkLCB0aGVuXHJcbiAqICBkaWFnb25hbE9mZnNldHNbaV0gYW5kXHJcbiAqICBkaWFnb25hbE9mZnNldHNbKGkgKyAxKSAlIDRdIGlzIHZhbGlkLlxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBkaWFnb25hbE1vdmVtZW50XHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5nZXROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlLCBkaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICB2YXIgeCA9IG5vZGUueCxcclxuICAgICAgICB5ID0gbm9kZS55LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLFxyXG4gICAgICAgIHMwID0gZmFsc2UsIGQwID0gZmFsc2UsXHJcbiAgICAgICAgczEgPSBmYWxzZSwgZDEgPSBmYWxzZSxcclxuICAgICAgICBzMiA9IGZhbHNlLCBkMiA9IGZhbHNlLFxyXG4gICAgICAgIHMzID0gZmFsc2UsIGQzID0gZmFsc2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgIC8vIOKGkVxyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgLSAxXVt4XSk7XHJcbiAgICAgICAgczAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8g4oaSXHJcbiAgICBpZiAodGhpcy5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeV1beCArIDFdKTtcclxuICAgICAgICBzMSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyDihpNcclxuICAgIGlmICh0aGlzLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5ICsgMV1beF0pO1xyXG4gICAgICAgIHMyID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIOKGkFxyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3ldW3ggLSAxXSk7XHJcbiAgICAgICAgczMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzKSB7XHJcbiAgICAgICAgZDAgPSBzMyAmJiBzMDtcclxuICAgICAgICBkMSA9IHMwICYmIHMxO1xyXG4gICAgICAgIGQyID0gczEgJiYgczI7XHJcbiAgICAgICAgZDMgPSBzMiAmJiBzMztcclxuICAgIH0gZWxzZSBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlKSB7XHJcbiAgICAgICAgZDAgPSBzMyB8fCBzMDtcclxuICAgICAgICBkMSA9IHMwIHx8IHMxO1xyXG4gICAgICAgIGQyID0gczEgfHwgczI7XHJcbiAgICAgICAgZDMgPSBzMiB8fCBzMztcclxuICAgIH0gZWxzZSBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5BbHdheXMpIHtcclxuICAgICAgICBkMCA9IHRydWU7XHJcbiAgICAgICAgZDEgPSB0cnVlO1xyXG4gICAgICAgIGQyID0gdHJ1ZTtcclxuICAgICAgICBkMyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IHZhbHVlIG9mIGRpYWdvbmFsTW92ZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDihpZcclxuICAgIGlmIChkMCAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSAtIDFdW3ggLSAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihpdcclxuICAgIGlmIChkMSAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSAtIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSAtIDFdW3ggKyAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihphcclxuICAgIGlmIChkMiAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSArIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSArIDFdW3ggKyAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihplcclxuICAgIGlmIChkMyAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSArIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSArIDFdW3ggLSAxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IGEgY2xvbmUgb2YgdGhpcyBncmlkLlxyXG4gKiBAcmV0dXJuIHtHcmlkfSBDbG9uZWQgZ3JpZC5cclxuICovXHJcbkdyaWQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaSwgaixcclxuXHJcbiAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXNOb2RlcyA9IHRoaXMubm9kZXMsXHJcblxyXG4gICAgICAgIG5ld0dyaWQgPSBuZXcgR3JpZCh3aWR0aCwgaGVpZ2h0KSxcclxuICAgICAgICBuZXdOb2RlcyA9IG5ldyBBcnJheShoZWlnaHQpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7ICsraSkge1xyXG4gICAgICAgIG5ld05vZGVzW2ldID0gbmV3IEFycmF5KHdpZHRoKTtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7ICsraikge1xyXG4gICAgICAgICAgICBuZXdOb2Rlc1tpXVtqXSA9IG5ldyBOb2RlKGosIGksIHRoaXNOb2Rlc1tpXVtqXS53YWxrYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld0dyaWQubm9kZXMgPSBuZXdOb2RlcztcclxuXHJcbiAgICByZXR1cm4gbmV3R3JpZDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JpZDtcclxuIiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgUEYuSGV1cmlzdGljXHJcbiAqIEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgaGV1cmlzdGljIGZ1bmN0aW9ucy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAvKipcclxuICAgKiBNYW5oYXR0YW4gZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGR4ICsgZHlcclxuICAgKi9cclxuICBtYW5oYXR0YW46IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICByZXR1cm4gZHggKyBkeTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFdWNsaWRlYW4gZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNxcnQoZHggKiBkeCArIGR5ICogZHkpXHJcbiAgICovXHJcbiAgZXVjbGlkZWFuOiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogT2N0aWxlIGRpc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIERpZmZlcmVuY2UgaW4geC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHkgLSBEaWZmZXJlbmNlIGluIHkuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KSBmb3IgZ3JpZHNcclxuICAgKi9cclxuICBvY3RpbGU6IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICB2YXIgRiA9IE1hdGguU1FSVDIgLSAxO1xyXG4gICAgICByZXR1cm4gKGR4IDwgZHkpID8gRiAqIGR4ICsgZHkgOiBGICogZHkgKyBkeDtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBDaGVieXNoZXYgZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IG1heChkeCwgZHkpXHJcbiAgICovXHJcbiAgY2hlYnlzaGV2OiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KGR4LCBkeSk7XHJcbiAgfVxyXG5cclxufTtcclxuIiwiLyoqXHJcbiAqIEEgbm9kZSBpbiBncmlkLiBcclxuICogVGhpcyBjbGFzcyBob2xkcyBzb21lIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGEgbm9kZSBhbmQgY3VzdG9tIFxyXG4gKiBhdHRyaWJ1dGVzIG1heSBiZSBhZGRlZCwgZGVwZW5kaW5nIG9uIHRoZSBhbGdvcml0aG1zJyBuZWVkcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt3YWxrYWJsZV0gLSBXaGV0aGVyIHRoaXMgbm9kZSBpcyB3YWxrYWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIE5vZGUoeCwgeSwgd2Fsa2FibGUpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICAgICAqIEB0eXBlIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBub2RlIGNhbiBiZSB3YWxrZWQgdGhyb3VnaC5cclxuICAgICAqIEB0eXBlIGJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgdGhpcy53YWxrYWJsZSA9ICh3YWxrYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHdhbGthYmxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb2RlO1xyXG4iLCIvKipcclxuICogQmFja3RyYWNlIGFjY29yZGluZyB0byB0aGUgcGFyZW50IHJlY29yZHMgYW5kIHJldHVybiB0aGUgcGF0aC5cclxuICogKGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZCBlbmQgbm9kZXMpXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBFbmQgbm9kZVxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gdGhlIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIGJhY2t0cmFjZShub2RlKSB7XHJcbiAgICB2YXIgcGF0aCA9IFtbbm9kZS54LCBub2RlLnldXTtcclxuICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICBwYXRoLnB1c2goW25vZGUueCwgbm9kZS55XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XHJcbn1cclxuZXhwb3J0cy5iYWNrdHJhY2UgPSBiYWNrdHJhY2U7XHJcblxyXG4vKipcclxuICogQmFja3RyYWNlIGZyb20gc3RhcnQgYW5kIGVuZCBub2RlLCBhbmQgcmV0dXJuIHRoZSBwYXRoLlxyXG4gKiAoaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kIGVuZCBub2RlcylcclxuICogQHBhcmFtIHtOb2RlfVxyXG4gKiBAcGFyYW0ge05vZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBiaUJhY2t0cmFjZShub2RlQSwgbm9kZUIpIHtcclxuICAgIHZhciBwYXRoQSA9IGJhY2t0cmFjZShub2RlQSksXHJcbiAgICAgICAgcGF0aEIgPSBiYWNrdHJhY2Uobm9kZUIpO1xyXG4gICAgcmV0dXJuIHBhdGhBLmNvbmNhdChwYXRoQi5yZXZlcnNlKCkpO1xyXG59XHJcbmV4cG9ydHMuYmlCYWNrdHJhY2UgPSBiaUJhY2t0cmFjZTtcclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlIHRoZSBsZW5ndGggb2YgdGhlIHBhdGguXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRoZSBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXRoTGVuZ3RoKHBhdGgpIHtcclxuICAgIHZhciBpLCBzdW0gPSAwLCBhLCBiLCBkeCwgZHk7XHJcbiAgICBmb3IgKGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGEgPSBwYXRoW2kgLSAxXTtcclxuICAgICAgICBiID0gcGF0aFtpXTtcclxuICAgICAgICBkeCA9IGFbMF0gLSBiWzBdO1xyXG4gICAgICAgIGR5ID0gYVsxXSAtIGJbMV07XHJcbiAgICAgICAgc3VtICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtO1xyXG59XHJcbmV4cG9ydHMucGF0aExlbmd0aCA9IHBhdGhMZW5ndGg7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIHRoZSBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzLCByZXR1cm4gYWxsIHRoZSBjb29yZGluYXRlcyBseWluZ1xyXG4gKiBvbiB0aGUgbGluZSBmb3JtZWQgYnkgdGhlc2UgY29vcmRpbmF0ZXMsIGJhc2VkIG9uIEJyZXNlbmhhbSdzIGFsZ29yaXRobS5cclxuICogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVzZW5oYW0nc19saW5lX2FsZ29yaXRobSNTaW1wbGlmaWNhdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0geDAgU3RhcnQgeCBjb29yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5MCBTdGFydCB5IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHgxIEVuZCB4IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkxIEVuZCB5IGNvb3JkaW5hdGVcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBjb29yZGluYXRlcyBvbiB0aGUgbGluZVxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgIHZhciBhYnMgPSBNYXRoLmFicyxcclxuICAgICAgICBsaW5lID0gW10sXHJcbiAgICAgICAgc3gsIHN5LCBkeCwgZHksIGVyciwgZTI7XHJcblxyXG4gICAgZHggPSBhYnMoeDEgLSB4MCk7XHJcbiAgICBkeSA9IGFicyh5MSAtIHkwKTtcclxuXHJcbiAgICBzeCA9ICh4MCA8IHgxKSA/IDEgOiAtMTtcclxuICAgIHN5ID0gKHkwIDwgeTEpID8gMSA6IC0xO1xyXG5cclxuICAgIGVyciA9IGR4IC0gZHk7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsaW5lLnB1c2goW3gwLCB5MF0pO1xyXG5cclxuICAgICAgICBpZiAoeDAgPT09IHgxICYmIHkwID09PSB5MSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZTIgPSAyICogZXJyO1xyXG4gICAgICAgIGlmIChlMiA+IC1keSkge1xyXG4gICAgICAgICAgICBlcnIgPSBlcnIgLSBkeTtcclxuICAgICAgICAgICAgeDAgPSB4MCArIHN4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZTIgPCBkeCkge1xyXG4gICAgICAgICAgICBlcnIgPSBlcnIgKyBkeDtcclxuICAgICAgICAgICAgeTAgPSB5MCArIHN5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgY29tcHJlc3NlZCBwYXRoLCByZXR1cm4gYSBuZXcgcGF0aCB0aGF0IGhhcyBhbGwgdGhlIHNlZ21lbnRzXHJcbiAqIGluIGl0IGludGVycG9sYXRlZC5cclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZXhwYW5kZWQgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gZXhwYW5kUGF0aChwYXRoKSB7XHJcbiAgICB2YXIgZXhwYW5kZWQgPSBbXSxcclxuICAgICAgICBsZW4gPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICBjb29yZDAsIGNvb3JkMSxcclxuICAgICAgICBpbnRlcnBvbGF0ZWQsXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkTGVuLFxyXG4gICAgICAgIGksIGo7XHJcblxyXG4gICAgaWYgKGxlbiA8IDIpIHtcclxuICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xyXG4gICAgICAgIGNvb3JkMCA9IHBhdGhbaV07XHJcbiAgICAgICAgY29vcmQxID0gcGF0aFtpICsgMV07XHJcblxyXG4gICAgICAgIGludGVycG9sYXRlZCA9IGludGVycG9sYXRlKGNvb3JkMFswXSwgY29vcmQwWzFdLCBjb29yZDFbMF0sIGNvb3JkMVsxXSk7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVkTGVuID0gaW50ZXJwb2xhdGVkLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaW50ZXJwb2xhdGVkTGVuIC0gMTsgKytqKSB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goaW50ZXJwb2xhdGVkW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBhbmRlZC5wdXNoKHBhdGhbbGVuIC0gMV0pO1xyXG5cclxuICAgIHJldHVybiBleHBhbmRlZDtcclxufVxyXG5leHBvcnRzLmV4cGFuZFBhdGggPSBleHBhbmRQYXRoO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTbW9vdGhlbiB0aGUgZ2l2ZSBwYXRoLlxyXG4gKiBUaGUgb3JpZ2luYWwgcGF0aCB3aWxsIG5vdCBiZSBtb2RpZmllZDsgYSBuZXcgcGF0aCB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBAcGFyYW0ge1BGLkdyaWR9IGdyaWRcclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gc21vb3RoZW5QYXRoKGdyaWQsIHBhdGgpIHtcclxuICAgIHZhciBsZW4gPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICB4MCA9IHBhdGhbMF1bMF0sICAgICAgICAvLyBwYXRoIHN0YXJ0IHhcclxuICAgICAgICB5MCA9IHBhdGhbMF1bMV0sICAgICAgICAvLyBwYXRoIHN0YXJ0IHlcclxuICAgICAgICB4MSA9IHBhdGhbbGVuIC0gMV1bMF0sICAvLyBwYXRoIGVuZCB4XHJcbiAgICAgICAgeTEgPSBwYXRoW2xlbiAtIDFdWzFdLCAgLy8gcGF0aCBlbmQgeVxyXG4gICAgICAgIHN4LCBzeSwgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgc3RhcnQgY29vcmRpbmF0ZVxyXG4gICAgICAgIGV4LCBleSwgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgZW5kIGNvb3JkaW5hdGVcclxuICAgICAgICBuZXdQYXRoLFxyXG4gICAgICAgIGksIGosIGNvb3JkLCBsaW5lLCB0ZXN0Q29vcmQsIGJsb2NrZWQ7XHJcblxyXG4gICAgc3ggPSB4MDtcclxuICAgIHN5ID0geTA7XHJcbiAgICBuZXdQYXRoID0gW1tzeCwgc3ldXTtcclxuXHJcbiAgICBmb3IgKGkgPSAyOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBjb29yZCA9IHBhdGhbaV07XHJcbiAgICAgICAgZXggPSBjb29yZFswXTtcclxuICAgICAgICBleSA9IGNvb3JkWzFdO1xyXG4gICAgICAgIGxpbmUgPSBpbnRlcnBvbGF0ZShzeCwgc3ksIGV4LCBleSk7XHJcblxyXG4gICAgICAgIGJsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGogPSAxOyBqIDwgbGluZS5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICB0ZXN0Q29vcmQgPSBsaW5lW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh0ZXN0Q29vcmRbMF0sIHRlc3RDb29yZFsxXSkpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2NrZWQpIHtcclxuICAgICAgICAgICAgbGFzdFZhbGlkQ29vcmQgPSBwYXRoW2kgLSAxXTtcclxuICAgICAgICAgICAgbmV3UGF0aC5wdXNoKGxhc3RWYWxpZENvb3JkKTtcclxuICAgICAgICAgICAgc3ggPSBsYXN0VmFsaWRDb29yZFswXTtcclxuICAgICAgICAgICAgc3kgPSBsYXN0VmFsaWRDb29yZFsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdQYXRoLnB1c2goW3gxLCB5MV0pO1xyXG5cclxuICAgIHJldHVybiBuZXdQYXRoO1xyXG59XHJcbmV4cG9ydHMuc21vb3RoZW5QYXRoID0gc21vb3RoZW5QYXRoO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wcmVzcyBhIHBhdGgsIHJlbW92ZSByZWR1bmRhbnQgbm9kZXMgd2l0aG91dCBhbHRlcmluZyB0aGUgc2hhcGVcclxuICogVGhlIG9yaWdpbmFsIHBhdGggaXMgbm90IG1vZGlmaWVkXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBjb21wcmVzc2VkIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIGNvbXByZXNzUGF0aChwYXRoKSB7XHJcblxyXG4gICAgLy8gbm90aGluZyB0byBjb21wcmVzc1xyXG4gICAgaWYocGF0aC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbXByZXNzZWQgPSBbXSxcclxuICAgICAgICBzeCA9IHBhdGhbMF1bMF0sIC8vIHN0YXJ0IHhcclxuICAgICAgICBzeSA9IHBhdGhbMF1bMV0sIC8vIHN0YXJ0IHlcclxuICAgICAgICBweCA9IHBhdGhbMV1bMF0sIC8vIHNlY29uZCBwb2ludCB4XHJcbiAgICAgICAgcHkgPSBwYXRoWzFdWzFdLCAvLyBzZWNvbmQgcG9pbnQgeVxyXG4gICAgICAgIGR4ID0gcHggLSBzeCwgLy8gZGlyZWN0aW9uIGJldHdlZW4gdGhlIHR3byBwb2ludHNcclxuICAgICAgICBkeSA9IHB5IC0gc3ksIC8vIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXHJcbiAgICAgICAgbHgsIGx5LFxyXG4gICAgICAgIGxkeCwgbGR5LFxyXG4gICAgICAgIHNxLCBpO1xyXG5cclxuICAgIC8vIG5vcm1hbGl6ZSB0aGUgZGlyZWN0aW9uXHJcbiAgICBzcSA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuICAgIGR4IC89IHNxO1xyXG4gICAgZHkgLz0gc3E7XHJcblxyXG4gICAgLy8gc3RhcnQgdGhlIG5ldyBwYXRoXHJcbiAgICBjb21wcmVzc2VkLnB1c2goW3N4LHN5XSk7XHJcblxyXG4gICAgZm9yKGkgPSAyOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBwb2ludFxyXG4gICAgICAgIGx4ID0gcHg7XHJcbiAgICAgICAgbHkgPSBweTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgZGlyZWN0aW9uXHJcbiAgICAgICAgbGR4ID0gZHg7XHJcbiAgICAgICAgbGR5ID0gZHk7XHJcblxyXG4gICAgICAgIC8vIG5leHQgcG9pbnRcclxuICAgICAgICBweCA9IHBhdGhbaV1bMF07XHJcbiAgICAgICAgcHkgPSBwYXRoW2ldWzFdO1xyXG5cclxuICAgICAgICAvLyBuZXh0IGRpcmVjdGlvblxyXG4gICAgICAgIGR4ID0gcHggLSBseDtcclxuICAgICAgICBkeSA9IHB5IC0gbHk7XHJcblxyXG4gICAgICAgIC8vIG5vcm1hbGl6ZVxyXG4gICAgICAgIHNxID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG4gICAgICAgIGR4IC89IHNxO1xyXG4gICAgICAgIGR5IC89IHNxO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZGlyZWN0aW9uIGhhcyBjaGFuZ2VkLCBzdG9yZSB0aGUgcG9pbnRcclxuICAgICAgICBpZiAoIGR4ICE9PSBsZHggfHwgZHkgIT09IGxkeSApIHtcclxuICAgICAgICAgICAgY29tcHJlc3NlZC5wdXNoKFtseCxseV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdG9yZSB0aGUgbGFzdCBwb2ludFxyXG4gICAgY29tcHJlc3NlZC5wdXNoKFtweCxweV0pO1xyXG5cclxuICAgIHJldHVybiBjb21wcmVzc2VkO1xyXG59XHJcbmV4cG9ydHMuY29tcHJlc3NQYXRoID0gY29tcHJlc3NQYXRoO1xyXG4iLCJ2YXIgSGVhcCAgICAgICA9IHJlcXVpcmUoJ2hlYXAnKTtcclxudmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEEqIHBhdGgtZmluZGVyLiBCYXNlZCB1cG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvamF2YXNjcmlwdC1hc3RhclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmcgXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQud2VpZ2h0IFdlaWdodCB0byBhcHBseSB0byB0aGUgaGV1cmlzdGljIHRvIGFsbG93IGZvclxyXG4gKiAgICAgc3Vib3B0aW1hbCBwYXRocywgaW4gb3JkZXIgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaC5cclxuICovXHJcbmZ1bmN0aW9uIEFTdGFyRmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZCB0aGUgbWFuaGF0dGFuIGhldXJpc3RpYyBpcyBub3RcclxuICAgIC8vYWRtaXNzaWJsZS4gSXQgc2hvdWxkIGJlIG9jdGlsZSBpbnN0ZWFkXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMub2N0aWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5BU3RhckZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIG9wZW5MaXN0ID0gbmV3IEhlYXAoZnVuY3Rpb24obm9kZUEsIG5vZGVCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlQS5mIC0gbm9kZUIuZjtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgIGhldXJpc3RpYyA9IHRoaXMuaGV1cmlzdGljLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgd2VpZ2h0ID0gdGhpcy53ZWlnaHQsXHJcbiAgICAgICAgYWJzID0gTWF0aC5hYnMsIFNRUlQyID0gTWF0aC5TUVJUMixcclxuICAgICAgICBub2RlLCBuZWlnaGJvcnMsIG5laWdoYm9yLCBpLCBsLCB4LCB5LCBuZztcclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBzdGFydCBub2RlIHRvIGJlIDBcclxuICAgIHN0YXJ0Tm9kZS5nID0gMDtcclxuICAgIHN0YXJ0Tm9kZS5mID0gMDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBub2RlIGludG8gdGhlIG9wZW4gbGlzdFxyXG4gICAgb3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgLy8gd2hpbGUgdGhlIG9wZW4gbGlzdCBpcyBub3QgZW1wdHlcclxuICAgIHdoaWxlICghb3Blbkxpc3QuZW1wdHkoKSkge1xyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2Ygbm9kZSB3aGljaCBoYXMgdGhlIG1pbmltdW0gYGZgIHZhbHVlLlxyXG4gICAgICAgIG5vZGUgPSBvcGVuTGlzdC5wb3AoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGlmIHJlYWNoZWQgdGhlIGVuZCBwb3NpdGlvbiwgY29uc3RydWN0IHRoZSBwYXRoIGFuZCByZXR1cm4gaXRcclxuICAgICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5iYWNrdHJhY2UoZW5kTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4ID0gbmVpZ2hib3IueDtcclxuICAgICAgICAgICAgeSA9IG5laWdoYm9yLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gY3VycmVudCBub2RlIGFuZCB0aGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgbmV4dCBnIHNjb3JlXHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgKCh4IC0gbm9kZS54ID09PSAwIHx8IHkgLSBub2RlLnkgPT09IDApID8gMSA6IFNRUlQyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZWlnaGJvciBoYXMgbm90IGJlZW4gaW5zcGVjdGVkIHlldCwgb3JcclxuICAgICAgICAgICAgLy8gY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QgZnJvbSB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkIHx8IG5nIDwgbmVpZ2hib3IuZykge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuaCA9IG5laWdoYm9yLmggfHwgd2VpZ2h0ICogaGV1cmlzdGljKGFicyh4IC0gZW5kWCksIGFicyh5IC0gZW5kWSkpO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZiA9IG5laWdoYm9yLmcgKyBuZWlnaGJvci5oO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZWlnaGJvciBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBpdHMgZiB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkLCB3ZSBoYXZlIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGl0cyBwb3NpdGlvbiBpbiB0aGUgb3BlbiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbkxpc3QudXBkYXRlSXRlbShuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIGVuZCBmb3IgZWFjaCBuZWlnaGJvclxyXG4gICAgfSAvLyBlbmQgd2hpbGUgbm90IG9wZW4gbGlzdCBlbXB0eVxyXG5cclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBU3RhckZpbmRlcjtcclxuIiwidmFyIEFTdGFyRmluZGVyID0gcmVxdWlyZSgnLi9BU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIEJlc3QtRmlyc3QtU2VhcmNoIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQVN0YXJGaW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICovXHJcbmZ1bmN0aW9uIEJlc3RGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIEFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuXHJcbiAgICB2YXIgb3JpZyA9IHRoaXMuaGV1cmlzdGljO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gb3JpZyhkeCwgZHkpICogMTAwMDAwMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkJlc3RGaXJzdEZpbmRlci5wcm90b3R5cGUgPSBuZXcgQVN0YXJGaW5kZXIoKTtcclxuQmVzdEZpcnN0RmluZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJlc3RGaXJzdEZpbmRlcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmVzdEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgSGVhcCAgICAgICA9IHJlcXVpcmUoJ2hlYXAnKTtcclxudmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEEqIHBhdGgtZmluZGVyLlxyXG4gKiBiYXNlZCB1cG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvamF2YXNjcmlwdC1hc3RhclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC53ZWlnaHQgV2VpZ2h0IHRvIGFwcGx5IHRvIHRoZSBoZXVyaXN0aWMgdG8gYWxsb3cgZm9yXHJcbiAqICAgICBzdWJvcHRpbWFsIHBhdGhzLCBpbiBvcmRlciB0byBzcGVlZCB1cCB0aGUgc2VhcmNoLlxyXG4gKi9cclxuZnVuY3Rpb24gQmlBU3RhckZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1doZW4gZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZCB0aGUgbWFuaGF0dGFuIGhldXJpc3RpYyBpcyBub3QgYWRtaXNzaWJsZVxyXG4gICAgLy9JdCBzaG91bGQgYmUgb2N0aWxlIGluc3RlYWRcclxuICAgIGlmICh0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5vY3RpbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkJpQVN0YXJGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBjbXAgPSBmdW5jdGlvbihub2RlQSwgbm9kZUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVBLmYgLSBub2RlQi5mO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRPcGVuTGlzdCA9IG5ldyBIZWFwKGNtcCksXHJcbiAgICAgICAgZW5kT3Blbkxpc3QgPSBuZXcgSGVhcChjbXApLFxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgaGV1cmlzdGljID0gdGhpcy5oZXVyaXN0aWMsXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICB3ZWlnaHQgPSB0aGlzLndlaWdodCxcclxuICAgICAgICBhYnMgPSBNYXRoLmFicywgU1FSVDIgPSBNYXRoLlNRUlQyLFxyXG4gICAgICAgIG5vZGUsIG5laWdoYm9ycywgbmVpZ2hib3IsIGksIGwsIHgsIHksIG5nLFxyXG4gICAgICAgIEJZX1NUQVJUID0gMSwgQllfRU5EID0gMjtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBzdGFydCBub2RlIHRvIGJlIDBcclxuICAgIC8vIGFuZCBwdXNoIGl0IGludG8gdGhlIHN0YXJ0IG9wZW4gbGlzdFxyXG4gICAgc3RhcnROb2RlLmcgPSAwO1xyXG4gICAgc3RhcnROb2RlLmYgPSAwO1xyXG4gICAgc3RhcnRPcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gQllfU1RBUlQ7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBgZ2AgYW5kIGBmYCB2YWx1ZSBvZiB0aGUgZW5kIG5vZGUgdG8gYmUgMFxyXG4gICAgLy8gYW5kIHB1c2ggaXQgaW50byB0aGUgb3BlbiBvcGVuIGxpc3RcclxuICAgIGVuZE5vZGUuZyA9IDA7XHJcbiAgICBlbmROb2RlLmYgPSAwO1xyXG4gICAgZW5kT3Blbkxpc3QucHVzaChlbmROb2RlKTtcclxuICAgIGVuZE5vZGUub3BlbmVkID0gQllfRU5EO1xyXG5cclxuICAgIC8vIHdoaWxlIGJvdGggdGhlIG9wZW4gbGlzdHMgYXJlIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKCFzdGFydE9wZW5MaXN0LmVtcHR5KCkgJiYgIWVuZE9wZW5MaXN0LmVtcHR5KCkpIHtcclxuXHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBzdGFydCBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IHN0YXJ0T3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQgPT09IEJZX0VORCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmlCYWNrdHJhY2Uobm9kZSwgbmVpZ2hib3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4ID0gbmVpZ2hib3IueDtcclxuICAgICAgICAgICAgeSA9IG5laWdoYm9yLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gY3VycmVudCBub2RlIGFuZCB0aGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgbmV4dCBnIHNjb3JlXHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgKCh4IC0gbm9kZS54ID09PSAwIHx8IHkgLSBub2RlLnkgPT09IDApID8gMSA6IFNRUlQyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZWlnaGJvciBoYXMgbm90IGJlZW4gaW5zcGVjdGVkIHlldCwgb3JcclxuICAgICAgICAgICAgLy8gY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QgZnJvbSB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkIHx8IG5nIDwgbmVpZ2hib3IuZykge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuaCA9IG5laWdoYm9yLmggfHxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQgKiBoZXVyaXN0aWMoYWJzKHggLSBlbmRYKSwgYWJzKHkgLSBlbmRZKSk7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5mID0gbmVpZ2hib3IuZyArIG5laWdoYm9yLmg7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSBCWV9TVEFSVDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5laWdoYm9yIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIGl0cyBmIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQsIHdlIGhhdmUgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaXRzIHBvc2l0aW9uIGluIHRoZSBvcGVuIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBzdGFydE9wZW5MaXN0LnVwZGF0ZUl0ZW0obmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgZm9yIGVhY2ggbmVpZ2hib3JcclxuXHJcblxyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2YgZW5kIG5vZGUgd2hpY2ggaGFzIHRoZSBtaW5pbXVtIGBmYCB2YWx1ZS5cclxuICAgICAgICBub2RlID0gZW5kT3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQgPT09IEJZX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5iaUJhY2t0cmFjZShuZWlnaGJvciwgbm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHggPSBuZWlnaGJvci54O1xyXG4gICAgICAgICAgICB5ID0gbmVpZ2hib3IueTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBjdXJyZW50IG5vZGUgYW5kIHRoZSBuZWlnaGJvclxyXG4gICAgICAgICAgICAvLyBhbmQgY2FsY3VsYXRlIHRoZSBuZXh0IGcgc2NvcmVcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyAoKHggLSBub2RlLnggPT09IDAgfHwgeSAtIG5vZGUueSA9PT0gMCkgPyAxIDogU1FSVDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG5laWdoYm9yIGhhcyBub3QgYmVlbiBpbnNwZWN0ZWQgeWV0LCBvclxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdCBmcm9tIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQgfHwgbmcgPCBuZWlnaGJvci5nKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5oID0gbmVpZ2hib3IuaCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCAqIGhldXJpc3RpYyhhYnMoeCAtIHN0YXJ0WCksIGFicyh5IC0gc3RhcnRZKSk7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5mID0gbmVpZ2hib3IuZyArIG5laWdoYm9yLmg7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kT3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gQllfRU5EO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmVpZ2hib3IgY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgaXRzIGYgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCwgd2UgaGF2ZSB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBpdHMgcG9zaXRpb24gaW4gdGhlIG9wZW4gbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZE9wZW5MaXN0LnVwZGF0ZUl0ZW0obmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgZm9yIGVhY2ggbmVpZ2hib3JcclxuICAgIH0gLy8gZW5kIHdoaWxlIG5vdCBvcGVuIGxpc3QgZW1wdHlcclxuXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmlBU3RhckZpbmRlcjtcclxuIiwidmFyIEJpQVN0YXJGaW5kZXIgPSByZXF1aXJlKCcuL0JpQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBCaS1kaXJlY2l0aW9uYWwgQmVzdC1GaXJzdC1TZWFyY2ggcGF0aC1maW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyBCaUFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqL1xyXG5mdW5jdGlvbiBCaUJlc3RGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIEJpQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG5cclxuICAgIHZhciBvcmlnID0gdGhpcy5oZXVyaXN0aWM7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICAgIHJldHVybiBvcmlnKGR4LCBkeSkgKiAxMDAwMDAwO1xyXG4gICAgfTtcclxufVxyXG5cclxuQmlCZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlID0gbmV3IEJpQVN0YXJGaW5kZXIoKTtcclxuQmlCZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlCZXN0Rmlyc3RGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpQmVzdEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgVXRpbCA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEJpLWRpcmVjdGlvbmFsIEJyZWFkdGgtRmlyc3QtU2VhcmNoIHBhdGggZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIEJpQnJlYWR0aEZpcnN0RmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5CaUJyZWFkdGhGaXJzdEZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgc3RhcnRPcGVuTGlzdCA9IFtdLCBlbmRPcGVuTGlzdCA9IFtdLFxyXG4gICAgICAgIG5laWdoYm9ycywgbmVpZ2hib3IsIG5vZGUsXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICBCWV9TVEFSVCA9IDAsIEJZX0VORCA9IDEsXHJcbiAgICAgICAgaSwgbDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBhbmQgZW5kIG5vZGVzIGludG8gdGhlIHF1ZXVlc1xyXG4gICAgc3RhcnRPcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0Tm9kZS5ieSA9IEJZX1NUQVJUO1xyXG5cclxuICAgIGVuZE9wZW5MaXN0LnB1c2goZW5kTm9kZSk7XHJcbiAgICBlbmROb2RlLm9wZW5lZCA9IHRydWU7XHJcbiAgICBlbmROb2RlLmJ5ID0gQllfRU5EO1xyXG5cclxuICAgIC8vIHdoaWxlIGJvdGggdGhlIHF1ZXVlcyBhcmUgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAoc3RhcnRPcGVuTGlzdC5sZW5ndGggJiYgZW5kT3Blbkxpc3QubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIC8vIGV4cGFuZCBzdGFydCBvcGVuIGxpc3RcclxuXHJcbiAgICAgICAgbm9kZSA9IHN0YXJ0T3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBub2RlIGhhcyBiZWVuIGluc3BlY3RlZCBieSB0aGUgcmV2ZXJzZWQgc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBhIHBhdGggaXMgZm91bmQuXHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3IuYnkgPT09IEJZX0VORCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5vZGUsIG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXJ0T3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLmJ5ID0gQllfU1RBUlQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBleHBhbmQgZW5kIG9wZW4gbGlzdFxyXG5cclxuICAgICAgICBub2RlID0gZW5kT3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLmJ5ID09PSBCWV9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5laWdoYm9yLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuZE9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5ieSA9IEJZX0VORDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpQnJlYWR0aEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgQmlBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQmlBU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIEJpLWRpcmVjdGlvbmFsIERpamtzdHJhIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQmlBU3RhckZpbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gQmlEaWprc3RyYUZpbmRlcihvcHQpIHtcclxuICAgIEJpQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkJpRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlID0gbmV3IEJpQVN0YXJGaW5kZXIoKTtcclxuQmlEaWprc3RyYUZpbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaURpamtzdHJhRmluZGVyO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCaURpamtzdHJhRmluZGVyO1xyXG4iLCJ2YXIgVXRpbCA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEJyZWFkdGgtRmlyc3QtU2VhcmNoIHBhdGggZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIEJyZWFkdGhGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5CcmVhZHRoRmlyc3RGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBvcGVuTGlzdCA9IFtdLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSxcclxuICAgICAgICBuZWlnaGJvcnMsIG5laWdoYm9yLCBub2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IHBvcyBpbnRvIHRoZSBxdWV1ZVxyXG4gICAgb3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgLy8gd2hpbGUgdGhlIHF1ZXVlIGlzIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKG9wZW5MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vIHRha2UgdGhlIGZyb250IG5vZGUgZnJvbSB0aGUgcXVldWVcclxuICAgICAgICBub2RlID0gb3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIGVuZCBwb3NpdGlvblxyXG4gICAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmJhY2t0cmFjZShlbmROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gc2tpcCB0aGlzIG5laWdoYm9yIGlmIGl0IGhhcyBiZWVuIGluc3BlY3RlZCBiZWZvcmVcclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCB8fCBuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCcmVhZHRoRmlyc3RGaW5kZXI7XHJcbiIsInZhciBBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBEaWprc3RyYSBwYXRoLWZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlbmRzIEFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBEaWprc3RyYUZpbmRlcihvcHQpIHtcclxuICAgIEFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5EaWprc3RyYUZpbmRlci5wcm90b3R5cGUgPSBuZXcgQVN0YXJGaW5kZXIoKTtcclxuRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGlqa3N0cmFGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpamtzdHJhRmluZGVyO1xyXG4iLCJ2YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBOb2RlICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9Ob2RlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogSXRlcmF0aXZlIERlZXBpbmcgQSBTdGFyIChJREEqKSBwYXRoLWZpbmRlci5cclxuICpcclxuICogUmVjdXJzaW9uIGJhc2VkIG9uOlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBsLmpodS5lZHUvfmhhbGwvQUktUHJvZ3JhbW1pbmcvSURBLVN0YXIuaHRtbFxyXG4gKlxyXG4gKiBQYXRoIHJldHJhY2luZyBiYXNlZCBvbjpcclxuICogIFYuIE5hZ2VzaHdhcmEgUmFvLCBWaXBpbiBLdW1hciBhbmQgSy4gUmFtZXNoXHJcbiAqICBcIkEgUGFyYWxsZWwgSW1wbGVtZW50YXRpb24gb2YgSXRlcmF0aXZlLURlZXBpbmctQSpcIiwgSmFudWFyeSAxOTg3LlxyXG4gKiAgZnRwOi8vZnRwLmNzLnV0ZXhhcy5lZHUvLnNuYXBzaG90L2hvdXJseS4xL3B1Yi9BSS1MYWIvdGVjaC1yZXBvcnRzL1VULUFJLVRSLTg3LTQ2LnBkZlxyXG4gKlxyXG4gKiBAYXV0aG9yIEdlcmFyZCBNZWllciAod3d3LmdlcmFyZG1laWVyLmNvbSlcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQud2VpZ2h0IFdlaWdodCB0byBhcHBseSB0byB0aGUgaGV1cmlzdGljIHRvIGFsbG93IGZvclxyXG4gKiAgICAgc3Vib3B0aW1hbCBwYXRocywgaW4gb3JkZXIgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQudHJhY2tSZWN1cnNpb24gV2hldGhlciB0byB0cmFjayByZWN1cnNpb24gZm9yXHJcbiAqICAgICBzdGF0aXN0aWNhbCBwdXJwb3Nlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC50aW1lTGltaXQgTWF4aW11bSBleGVjdXRpb24gdGltZS4gVXNlIDw9IDAgZm9yIGluZmluaXRlLlxyXG4gKi9cclxuZnVuY3Rpb24gSURBU3RhckZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcbiAgICB0aGlzLnRyYWNrUmVjdXJzaW9uID0gb3B0LnRyYWNrUmVjdXJzaW9uIHx8IGZhbHNlO1xyXG4gICAgdGhpcy50aW1lTGltaXQgPSBvcHQudGltZUxpbWl0IHx8IEluZmluaXR5OyAvLyBEZWZhdWx0OiBubyB0aW1lIGxpbWl0LlxyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkIHRoZSBtYW5oYXR0YW4gaGV1cmlzdGljIGlzIG5vdFxyXG4gICAgLy8gYWRtaXNzaWJsZSwgaXQgc2hvdWxkIGJlIG9jdGlsZSBpbnN0ZWFkXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMub2N0aWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC4gV2hlbiBhbiBlbXB0eSBhcnJheSBpcyByZXR1cm5lZCwgZWl0aGVyXHJcbiAqIG5vIHBhdGggaXMgcG9zc2libGUsIG9yIHRoZSBtYXhpbXVtIGV4ZWN1dGlvbiB0aW1lIGlzIHJlYWNoZWQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuSURBU3RhckZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgLy8gVXNlZCBmb3Igc3RhdGlzdGljczpcclxuICAgIHZhciBub2Rlc1Zpc2l0ZWQgPSAwO1xyXG5cclxuICAgIC8vIEV4ZWN1dGlvbiB0aW1lIGxpbWl0YXRpb246XHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgLy8gSGV1cmlzdGljIGhlbHBlcjpcclxuICAgIHZhciBoID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhldXJpc3RpYyhNYXRoLmFicyhiLnggLSBhLngpLCBNYXRoLmFicyhiLnkgLSBhLnkpKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAvLyBTdGVwIGNvc3QgZnJvbSBhIHRvIGI6XHJcbiAgICB2YXIgY29zdCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gKGEueCA9PT0gYi54IHx8IGEueSA9PT0gYi55KSA/IDEgOiBNYXRoLlNRUlQyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElEQSogc2VhcmNoIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gVGhlIG5vZGUgY3VycmVudGx5IGV4cGFuZGluZyBmcm9tLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IENvc3QgdG8gcmVhY2ggdGhlIGdpdmVuIG5vZGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gTWF4aW11bSBzZWFyY2ggZGVwdGggKGN1dC1vZmYgdmFsdWUpLlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIGZvdW5kIHJvdXRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFJlY3Vyc2lvbiBkZXB0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGVpdGhlciBhIG51bWJlciB3aXRoIHRoZSBuZXcgb3B0aW1hbCBjdXQtb2ZmIGRlcHRoLFxyXG4gICAgICogb3IgYSB2YWxpZCBub2RlIGluc3RhbmNlLCBpbiB3aGljaCBjYXNlIGEgcGF0aCB3YXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbihub2RlLCBnLCBjdXRvZmYsIHJvdXRlLCBkZXB0aCkge1xyXG4gICAgICAgIG5vZGVzVmlzaXRlZCsrO1xyXG5cclxuICAgICAgICAvLyBFbmZvcmNlIHRpbWVsaW1pdDpcclxuICAgICAgICBpZiAodGhpcy50aW1lTGltaXQgPiAwICYmXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID4gdGhpcy50aW1lTGltaXQgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vIEVuZm9yY2VkIGFzIFwicGF0aC1ub3QtZm91bmRcIi5cclxuICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGYgPSBnICsgaChub2RlLCBlbmQpICogdGhpcy53ZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFdlJ3ZlIHNlYXJjaGVkIHRvbyBkZWVwIGZvciB0aGlzIGl0ZXJhdGlvbi5cclxuICAgICAgICBpZiAoZiA+IGN1dG9mZikge1xyXG4gICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlID09IGVuZCkge1xyXG4gICAgICAgICAgICByb3V0ZVtkZXB0aF0gPSBbbm9kZS54LCBub2RlLnldO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW4sIHQsIGssIG5laWdoYm91cjtcclxuXHJcbiAgICAgICAgdmFyIG5laWdoYm91cnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCB0aGlzLmRpYWdvbmFsTW92ZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZSBuZWlnaGJvdXJzLCBnaXZlcyBuaWNlciBwYXRocy4gQnV0LCB0aGlzIGRldmlhdGVzXHJcbiAgICAgICAgLy8gZnJvbSB0aGUgb3JpZ2luYWwgYWxnb3JpdGhtIC0gc28gSSBsZWZ0IGl0IG91dC5cclxuICAgICAgICAvL25laWdoYm91cnMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAvLyAgICByZXR1cm4gaChhLCBlbmQpIC0gaChiLCBlbmQpO1xyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qanNoaW50IC1XMDg0ICovLy9EaXNhYmxlIHdhcm5pbmc6IEV4cGVjdGVkIGEgY29uZGl0aW9uYWwgZXhwcmVzc2lvbiBhbmQgaW5zdGVhZCBzYXcgYW4gYXNzaWdubWVudFxyXG4gICAgICAgIGZvciAoayA9IDAsIG1pbiA9IEluZmluaXR5OyBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzW2tdOyArK2spIHtcclxuICAgICAgICAvKmpzaGludCArVzA4NCAqLy8vRW5hYmxlIHdhcm5pbmc6IEV4cGVjdGVkIGEgY29uZGl0aW9uYWwgZXhwcmVzc2lvbiBhbmQgaW5zdGVhZCBzYXcgYW4gYXNzaWdubWVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFja1JlY3Vyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0YWluIGEgY29weSBmb3IgdmlzdWFsaXNhdGlvbi4gRHVlIHRvIHJlY3Vyc2lvbiwgdGhpc1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZSBtYXkgYmUgcGFydCBvZiBvdGhlciBwYXRocyB0b28uXHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXIucmV0YWluQ291bnQgPSBuZWlnaGJvdXIucmV0YWluQ291bnQgKyAxIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobmVpZ2hib3VyLnRlc3RlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91ci50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ID0gc2VhcmNoKG5laWdoYm91ciwgZyArIGNvc3Qobm9kZSwgbmVpZ2hib3VyKSwgY3V0b2ZmLCByb3V0ZSwgZGVwdGggKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVbZGVwdGhdID0gW25vZGUueCwgbm9kZS55XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGb3IgYSB0eXBpY2FsIEEqIGxpbmtlZCBsaXN0LCB0aGlzIHdvdWxkIHdvcms6XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEZWNyZW1lbnQgY291bnQsIHRoZW4gZGV0ZXJtaW5lIHdoZXRoZXIgaXQncyBhY3R1YWxseSBjbG9zZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrUmVjdXJzaW9uICYmICgtLW5laWdoYm91ci5yZXRhaW5Db3VudCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91ci50ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHQgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIG1pbiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtaW47XHJcblxyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vIE5vZGUgaW5zdGFuY2UgbG9va3VwczpcclxuICAgIHZhciBzdGFydCA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgIHZhciBlbmQgICA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpO1xyXG5cclxuICAgIC8vIEluaXRpYWwgc2VhcmNoIGRlcHRoLCBnaXZlbiB0aGUgdHlwaWNhbCBoZXVyaXN0aWMgY29udHJhaW50cyxcclxuICAgIC8vIHRoZXJlIHNob3VsZCBiZSBubyBjaGVhcGVyIHJvdXRlIHBvc3NpYmxlLlxyXG4gICAgdmFyIGN1dE9mZiA9IGgoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgdmFyIGosIHJvdXRlLCB0O1xyXG5cclxuICAgIC8vIFdpdGggYW4gb3ZlcmZsb3cgcHJvdGVjdGlvbi5cclxuICAgIGZvciAoaiA9IDA7IHRydWU7ICsraikge1xyXG5cclxuICAgICAgICByb3V0ZSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTZWFyY2ggdGlsbCBjdXQtb2ZmIGRlcHRoOlxyXG4gICAgICAgIHQgPSBzZWFyY2goc3RhcnQsIDAsIGN1dE9mZiwgcm91dGUsIDApO1xyXG5cclxuICAgICAgICAvLyBSb3V0ZSBub3QgcG9zc2libGUsIG9yIG5vdCBmb3VuZCBpbiB0aW1lIGxpbWl0LlxyXG4gICAgICAgIGlmICh0ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0IGlzIGEgbm9kZSwgaXQncyBhbHNvIHRoZSBlbmQgbm9kZS4gUm91dGUgaXMgbm93XHJcbiAgICAgICAgLy8gcG9wdWxhdGVkIHdpdGggYSB2YWxpZCBwYXRoIHRvIHRoZSBlbmQgbm9kZS5cclxuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJ5IGFnYWluLCB0aGlzIHRpbWUgd2l0aCBhIGRlZXBlciBjdXQtb2ZmLiBUaGUgdCBzY29yZVxyXG4gICAgICAgIC8vIGlzIHRoZSBjbG9zZXN0IHdlIGdvdCB0byB0aGUgZW5kIG5vZGUuXHJcbiAgICAgICAgY3V0T2ZmID0gdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIF9zaG91bGRfIG5ldmVyIHRvIGJlIHJlYWNoZWQuXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IElEQVN0YXJGaW5kZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIHdoaWNoIGFsd2F5cyBtb3Zlc1xyXG4gKiBkaWFnb25hbGx5IGlycmVzcGVjdGl2ZSBvZiB0aGUgbnVtYmVyIG9mIG9ic3RhY2xlcy5cclxuICovXHJcbmZ1bmN0aW9uIEpQRkFsd2F5c01vdmVEaWFnb25hbGx5KG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZSA9IG5ldyBKdW1wUG9pbnRGaW5kZXJCYXNlKCk7XHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRkFsd2F5c01vdmVEaWFnb25hbGx5O1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fanVtcCA9IGZ1bmN0aW9uKHgsIHksIHB4LCBweSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgZHggPSB4IC0gcHgsIGR5ID0geSAtIHB5O1xyXG5cclxuICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGdyaWQuZ2V0Tm9kZUF0KHgsIHkpLnRlc3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyaWQuZ2V0Tm9kZUF0KHgsIHkpID09PSB0aGlzLmVuZE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBmb3JjZWQgbmVpZ2hib3JzXHJcbiAgICAvLyBhbG9uZyB0aGUgZGlhZ29uYWxcclxuICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IGNoZWNrIGZvciB2ZXJ0aWNhbC9ob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuX2p1bXAoeCArIGR4LCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHgsIHkgKyBkeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYoIGR4ICE9PSAwICkgeyAvLyBtb3ZpbmcgYWxvbmcgeFxyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5ICsgMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuX2ZpbmROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIHB4LCBweSwgbngsIG55LCBkeCwgZHksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sIG5laWdoYm9yTm9kZXMsIG5laWdoYm9yTm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBkaXJlY3RlZCBwcnVuaW5nOiBjYW4gaWdub3JlIG1vc3QgbmVpZ2hib3JzLCB1bmxlc3MgZm9yY2VkLlxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHB4ID0gcGFyZW50Lng7XHJcbiAgICAgICAgcHkgPSBwYXJlbnQueTtcclxuICAgICAgICAvLyBnZXQgdGhlIG5vcm1hbGl6ZWQgZGlyZWN0aW9uIG9mIHRyYXZlbFxyXG4gICAgICAgIGR4ID0gKHggLSBweCkgLyBNYXRoLm1heChNYXRoLmFicyh4IC0gcHgpLCAxKTtcclxuICAgICAgICBkeSA9ICh5IC0gcHkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHB5KSwgMSk7XHJcblxyXG4gICAgICAgIC8vIHNlYXJjaCBkaWFnb25hbGx5XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VhcmNoIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50LkFsd2F5cyk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGQWx3YXlzTW92ZURpYWdvbmFsbHk7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIHdoaWNoIG1vdmVzXHJcbiAqIGRpYWdvbmFsbHkgb25seSB3aGVuIHRoZXJlIGlzIGF0IG1vc3Qgb25lIG9ic3RhY2xlLlxyXG4gKi9cclxuZnVuY3Rpb24gSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlKG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUgPSBuZXcgSnVtcFBvaW50RmluZGVyQmFzZSgpO1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUuX2p1bXAgPSBmdW5jdGlvbih4LCB5LCBweCwgcHkpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGR4ID0geCAtIHB4LCBkeSA9IHkgLSBweTtcclxuXHJcbiAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy50cmFja0p1bXBSZWN1cnNpb24gPT09IHRydWUpIHtcclxuICAgICAgICBncmlkLmdldE5vZGVBdCh4LCB5KS50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmlkLmdldE5vZGVBdCh4LCB5KSA9PT0gdGhpcy5lbmROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBmb3IgZm9yY2VkIG5laWdoYm9yc1xyXG4gICAgLy8gYWxvbmcgdGhlIGRpYWdvbmFsXHJcbiAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBjaGVjayBmb3IgdmVydGljYWwvaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyBkeCwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4LCB5ICsgZHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKCBkeCAhPT0gMCApIHsgLy8gbW92aW5nIGFsb25nIHhcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBtYWtlIHN1cmUgb25lIG9mIHRoZSB2ZXJ0aWNhbC9ob3Jpem9udGFsXHJcbiAgICAvLyBuZWlnaGJvcnMgaXMgb3BlbiB0byBhbGxvdyB0aGUgcGF0aFxyXG4gICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkgfHwgZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlLnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoIGRpYWdvbmFsbHlcclxuICAgICAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpIHx8IGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSAmJiBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VhcmNoIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGUpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvck5vZGVzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvck5vZGUgPSBuZWlnaGJvck5vZGVzW2ldO1xyXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbbmVpZ2hib3JOb2RlLngsIG5laWdoYm9yTm9kZS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSnVtcFBvaW50RmluZGVyQmFzZSA9IHJlcXVpcmUoJy4vSnVtcFBvaW50RmluZGVyQmFzZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG0gd2hpY2ggbW92ZXNcclxuICogZGlhZ29uYWxseSBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIG9ic3RhY2xlcy5cclxuICovXHJcbmZ1bmN0aW9uIEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcyhvcHQpIHtcclxuICAgIEp1bXBQb2ludEZpbmRlckJhc2UuY2FsbCh0aGlzLCBvcHQpO1xyXG59XHJcblxyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcztcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggcmVjdXJzaXZlbHkgaW4gdGhlIGRpcmVjdGlvbiAocGFyZW50IC0+IGNoaWxkKSwgc3RvcHBpbmcgb25seSB3aGVuIGFcclxuICoganVtcCBwb2ludCBpcyBmb3VuZC5cclxuICogQHByb3RlY3RlZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHgsIHkgY29vcmRpbmF0ZSBvZiB0aGUganVtcCBwb2ludFxyXG4gKiAgICAgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIGZvcmNlZCBuZWlnaGJvcnNcclxuICAgIC8vIGFsb25nIHRoZSBkaWFnb25hbFxyXG4gICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgLy8gaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHx8XHJcbiAgICAgICAgICAgIC8vIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHdoZW4gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgY2hlY2sgZm9yIHZlcnRpY2FsL2hvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICBpZiAodGhpcy5fanVtcCh4ICsgZHgsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCwgeSArIGR5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoZHggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSAtIDEpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgMSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIGR5KSkgfHxcclxuICAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXaGVuIG1vdmluZyB2ZXJ0aWNhbGx5LCBtdXN0IGNoZWNrIGZvciBob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9qdW1wKHggKyAxLCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHggLSAxLCB5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBtYWtlIHN1cmUgb25lIG9mIHRoZSB2ZXJ0aWNhbC9ob3Jpem9udGFsXHJcbiAgICAvLyBuZWlnaGJvcnMgaXMgb3BlbiB0byBhbGxvdyB0aGUgcGF0aFxyXG4gICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoIGRpYWdvbmFsbHlcclxuICAgICAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpICYmIGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlYXJjaCBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaXNOZXh0V2Fsa2FibGU7XHJcbiAgICAgICAgICAgIGlmIChkeCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzVG9wV2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNCb3R0b21XYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOZXh0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVG9wV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQm90dG9tV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3BXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQm90dG9tV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUmlnaHRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0xlZnRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOZXh0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmlnaHRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzKTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JOb2Rlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3JOb2RlID0gbmVpZ2hib3JOb2Rlc1tpXTtcclxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yTm9kZS54LCBuZWlnaGJvck5vZGUueV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXM7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIGFsbG93aW5nIG9ubHkgaG9yaXpvbnRhbFxyXG4gKiBvciB2ZXJ0aWNhbCBtb3ZlbWVudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBKUEZOZXZlck1vdmVEaWFnb25hbGx5KG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUEZOZXZlck1vdmVEaWFnb25hbGx5O1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSAtIDEpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIGR5KSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vV2hlbiBtb3ZpbmcgdmVydGljYWxseSwgbXVzdCBjaGVjayBmb3IgaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyAxLCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHggLSAxLCB5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgbW92ZW1lbnRzIGFyZSBhbGxvd2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZOZXZlck1vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5OZXZlcik7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYW5pZXJvIC8gaHR0cHM6Ly9naXRodWIuY29tL2FuaWVyb1xyXG4gKi9cclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxudmFyIEpQRk5ldmVyTW92ZURpYWdvbmFsbHkgPSByZXF1aXJlKCcuL0pQRk5ldmVyTW92ZURpYWdvbmFsbHknKTtcclxudmFyIEpQRkFsd2F5c01vdmVEaWFnb25hbGx5ID0gcmVxdWlyZSgnLi9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseScpO1xyXG52YXIgSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzID0gcmVxdWlyZSgnLi9KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMnKTtcclxudmFyIEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZSA9IHJlcXVpcmUoJy4vSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlJyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQ29uZGl0aW9uIHVuZGVyIHdoaWNoIGRpYWdvbmFsXHJcbiAqICAgICAgbW92ZW1lbnQgd2lsbCBiZSBhbGxvd2VkLlxyXG4gKi9cclxuZnVuY3Rpb24gSnVtcFBvaW50RmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgaWYgKG9wdC5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKUEZOZXZlck1vdmVEaWFnb25hbGx5KG9wdCk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdC5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50LkFsd2F5cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkob3B0KTtcclxuICAgIH0gZWxzZSBpZiAob3B0LmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzKG9wdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlKG9wdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSnVtcFBvaW50RmluZGVyO1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBIZWFwICAgICAgID0gcmVxdWlyZSgnaGVhcCcpO1xyXG52YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobVxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqL1xyXG5mdW5jdGlvbiBKdW1wUG9pbnRGaW5kZXJCYXNlKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9IG9wdC50cmFja0p1bXBSZWN1cnNpb24gfHwgZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuSnVtcFBvaW50RmluZGVyQmFzZS5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIG9wZW5MaXN0ID0gdGhpcy5vcGVuTGlzdCA9IG5ldyBIZWFwKGZ1bmN0aW9uKG5vZGVBLCBub2RlQikge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUEuZiAtIG5vZGVCLmY7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IHRoaXMuZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLCBub2RlO1xyXG5cclxuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XHJcblxyXG5cclxuICAgIC8vIHNldCB0aGUgYGdgIGFuZCBgZmAgdmFsdWUgb2YgdGhlIHN0YXJ0IG5vZGUgdG8gYmUgMFxyXG4gICAgc3RhcnROb2RlLmcgPSAwO1xyXG4gICAgc3RhcnROb2RlLmYgPSAwO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IG5vZGUgaW50byB0aGUgb3BlbiBsaXN0XHJcbiAgICBvcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyB3aGlsZSB0aGUgb3BlbiBsaXN0IGlzIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKCFvcGVuTGlzdC5lbXB0eSgpKSB7XHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IG9wZW5MaXN0LnBvcCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXhwYW5kUGF0aChVdGlsLmJhY2t0cmFjZShlbmROb2RlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pZGVudGlmeVN1Y2Nlc3NvcnMobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG4vKipcclxuICogSWRlbnRpZnkgc3VjY2Vzc29ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIFJ1bnMgYSBqdW1wIHBvaW50IHNlYXJjaCBpbiB0aGVcclxuICogZGlyZWN0aW9uIG9mIGVhY2ggYXZhaWxhYmxlIG5laWdoYm9yLCBhZGRpbmcgYW55IHBvaW50cyBmb3VuZCB0byB0aGUgb3BlblxyXG4gKiBsaXN0LlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqL1xyXG5KdW1wUG9pbnRGaW5kZXJCYXNlLnByb3RvdHlwZS5faWRlbnRpZnlTdWNjZXNzb3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgaGV1cmlzdGljID0gdGhpcy5oZXVyaXN0aWMsXHJcbiAgICAgICAgb3Blbkxpc3QgPSB0aGlzLm9wZW5MaXN0LFxyXG4gICAgICAgIGVuZFggPSB0aGlzLmVuZE5vZGUueCxcclxuICAgICAgICBlbmRZID0gdGhpcy5lbmROb2RlLnksXHJcbiAgICAgICAgbmVpZ2hib3JzLCBuZWlnaGJvcixcclxuICAgICAgICBqdW1wUG9pbnQsIGksIGwsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBqeCwganksIGR4LCBkeSwgZCwgbmcsIGp1bXBOb2RlLFxyXG4gICAgICAgIGFicyA9IE1hdGguYWJzLCBtYXggPSBNYXRoLm1heDtcclxuXHJcbiAgICBuZWlnaGJvcnMgPSB0aGlzLl9maW5kTmVpZ2hib3JzKG5vZGUpO1xyXG4gICAgZm9yKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG4gICAgICAgIGp1bXBQb2ludCA9IHRoaXMuX2p1bXAobmVpZ2hib3JbMF0sIG5laWdoYm9yWzFdLCB4LCB5KTtcclxuICAgICAgICBpZiAoanVtcFBvaW50KSB7XHJcblxyXG4gICAgICAgICAgICBqeCA9IGp1bXBQb2ludFswXTtcclxuICAgICAgICAgICAgankgPSBqdW1wUG9pbnRbMV07XHJcbiAgICAgICAgICAgIGp1bXBOb2RlID0gZ3JpZC5nZXROb2RlQXQoangsIGp5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChqdW1wTm9kZS5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpbmNsdWRlIGRpc3RhbmNlLCBhcyBwYXJlbnQgbWF5IG5vdCBiZSBpbW1lZGlhdGVseSBhZGphY2VudDpcclxuICAgICAgICAgICAgZCA9IEhldXJpc3RpYy5vY3RpbGUoYWJzKGp4IC0geCksIGFicyhqeSAtIHkpKTtcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyBkOyAvLyBuZXh0IGBnYCB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCFqdW1wTm9kZS5vcGVuZWQgfHwgbmcgPCBqdW1wTm9kZS5nKSB7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5oID0ganVtcE5vZGUuaCB8fCBoZXVyaXN0aWMoYWJzKGp4IC0gZW5kWCksIGFicyhqeSAtIGVuZFkpKTtcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLmYgPSBqdW1wTm9kZS5nICsganVtcE5vZGUuaDtcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFqdW1wTm9kZS5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC5wdXNoKGp1bXBOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBqdW1wTm9kZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC51cGRhdGVJdGVtKGp1bXBOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSnVtcFBvaW50RmluZGVyQmFzZTtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnO1xyXG5pbXBvcnQgUEYgZnJvbSAncGF0aGZpbmRpbmcnO1xyXG5pbXBvcnQge0NvbWJhdE1hbmFnZXJ9IGZyb20gJy4vQ29tYmF0TWFuYWdlci5qc3gnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFyZWEgZXh0ZW5kcyBFbmdpbmUge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNvbWJhdCA9IG51bGw7XHJcbiAgICB0aGlzLmxvYWRlckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ2luaXQgYXJlYSB3aXRoIGlkJywgdGhpcy5pZCk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIFxyXG4gICAgdGhpcy53YWxrUG9pbnRzID0gW107XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5OjY3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MzI5LCB5OjY3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6NDQwLCB5OjM3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6NTA4LCB5OjM3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6NjU4LCB5OjY3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MTAyMywgeTo2NzN9KTtcclxuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjEwMjMsIHk6NzY3fSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5Ojc2N30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MCwgeTo2NzN9KTtcclxuICAgIFxyXG4gICAgdGhpcy5hY3RvcnMgPSBbXTtcclxuICAgIHRoaXMuZGVjb3IgPSBbXTtcclxuICAgIFxyXG4gICAgLy8zOThweCAvIDMwIGZlZXQgPSAxMy4zXHJcbiAgICB0aGlzLmhlaWdodCA9IDc2ODtcclxuICAgIHRoaXMud2lkdGggPSAxMDI0O1xyXG4gICAgdGhpcy52YW5pc2hpbmdQb2ludCA9IDIwMjtcclxuICAgIFxyXG4gICAgdGhpcy53YWxrUGF0aDtcclxuICAgIFxyXG4gICAgdGhpcy5jb21iYXRPbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLmdyaWQgPSBudWxsO1xyXG4gICAgXHJcbiAgICBHbG9iYWxzLlNldHVwUGF0aFdvcmtlcih0aGlzLndhbGtQb2ludHMpO1xyXG4gIH1cclxuICBcclxuICBnZXRQbGF5ZXIoKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmFjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5hY3RvcnNbaV0udHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3JzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuY2FudmFzLnNldEJhY2tncm91bmRJbWFnZSgnaW1nL2FyZWFzL2FyZWEwMS5wbmcnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgdG8nLCB0aGlzKTtcclxuICAgICAgdGhpcy5kcmF3V2Fsa3BhdGgoKTtcclxuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgZHJhd1dhbGtwYXRoKCkge1xyXG4gICAgdGhpcy53YWxrUGF0aCA9IHRoaXMuY2FudmFzLmNvbnRleHRUb3A7XHJcbiAgICB0aGlzLndhbGtQYXRoLmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy53YWxrUGF0aC5tb3ZlVG8odGhpcy53YWxrUG9pbnRzWzBdLngsIHRoaXMud2Fsa1BvaW50c1swXS55KTtcclxuICAgIGZvciAobGV0IGk9MTsgaSA8IHRoaXMud2Fsa1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLndhbGtQYXRoLmxpbmVUbyh0aGlzLndhbGtQb2ludHNbaV0ueCwgdGhpcy53YWxrUG9pbnRzW2ldLnkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53YWxrUGF0aC5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMud2Fsa1BhdGguZmlsbFN0eWxlID0gXCIjN2ZmZmQ0XCI7XHJcbiAgICB0aGlzLndhbGtQYXRoLmdsb2JhbEFscGhhID0gMDtcclxuICAgIHRoaXMud2Fsa1BhdGguZmlsbCgpO1xyXG4gICAgdGhpcy53YWxrUGF0aC5zYXZlKCk7XHJcbiAgICB0aGlzLndhbGtQYXRoLmNhbnZhcy5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcigpO1xyXG4gICAgICBpZiAocGxheWVyLnRhcmdldEFjcXVpcmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYXllci5jYW5jZWxBbmltYXRpb25zKCk7XHJcbiAgICAgIGxldCBib3VuZHMgPSB0aGlzLndhbGtQYXRoLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgbGV0IHN0YXJ0ID0ge307XHJcbiAgICAgIHN0YXJ0LnggPSBwbGF5ZXIuZ2V0WCgpO1xyXG4gICAgICBzdGFydC55ID0gcGxheWVyLmdldFkoKTtcclxuICAgICAgbGV0IGVuZCA9IHt9O1xyXG4gICAgICBlbmQueCA9IE1hdGgucm91bmQoZXZlbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0KTtcclxuICAgICAgZW5kLnkgPSBNYXRoLnJvdW5kKGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wKTtcclxuICAgICAgaWYgKHRoaXMud2Fsa1BhdGguaXNQb2ludEluUGF0aChlbmQueCwgZW5kLnkpKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICAgIG9iai5jb21tYW5kID0gJ2NsaWNrZWRHcm91bmQnO1xyXG4gICAgICAgIG9iai5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIG9iai5lbmQgPSBlbmQ7XHJcbiAgICAgICAgb2JqLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBvYmouaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgb2JqLnBhdGggPSB0aGlzLndhbGtQb2ludHM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCByb3V0ZSA9IGF3YWl0IEdsb2JhbHMuU2VuZFRvV29ya2VyKG9iaik7XHJcbiAgICAgICAgICB0aGlzLmdldFBsYXllcigpLmNsaWNrZWRHcm91bmRQYXRoUmVzdWx0cyhyb3V0ZS5wYXRoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMubG9hZGVySW1nLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfQVJFQV9SRUFEWSkpO1xyXG4gIH1cclxuICBcclxuICBlbmRDb21iYXRUdXJuKCkge1xyXG4gICAgaWYgKHRoaXMuY29tYmF0KSB7XHJcbiAgICAgIHRoaXMuY29tYmF0LmVuZFBsYXllclR1cm4oKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZW50ZXJDb21iYXQoaW5pdGlhdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgY29tYmF0Jyk7XHJcbiAgICBpZiAodGhpcy5nZXRQbGF5ZXIoKSkge1xyXG4gICAgICB0aGlzLmNvbWJhdE9uID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jb21iYXQgPSBuZXcgQ29tYmF0TWFuYWdlcih0aGlzLCBpbml0aWF0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleGl0Q29tYmF0KCkge1xyXG4gICAgdGhpcy5jb21iYXRPbiA9IGZhbHNlO1xyXG4gIH1cclxufSIsImltcG9ydCB7R2xvYmFsc30gZnJvbSAnLi9HbG9iYWxzLmpzeCdcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21iYXRNYW5hZ2VyIHtcclxuICBcclxuICBcclxuICBjb25zdHJ1Y3RvcihhcmVhLCBpbml0aWF0ZWQpIHtcclxuICAgIHRoaXMuYXJlYSA9IGFyZWE7XHJcbiAgICB0aGlzLnBsYXllciA9IGFyZWEuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGFyZWEuY2FudmFzO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcclxuICAgIGlmIChpbml0aWF0ZWQgPT0gJ3BsYXllcicpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5tb3ZlTGluZSA9IG51bGw7XHJcbiAgICB0aGlzLm1vdmVUZXh0ID0gbnVsbDtcclxuICAgIFxyXG4gICAgdGhpcy5hZGRNb3VzZUFjdGlvbnMoKTtcclxuICAgIHRoaXMuY29tYmF0U2VxdWVuY2UgPSAwO1xyXG4gICAgXHJcbiAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgIHRoaXMuYWxsaWVzID0gW107XHJcbiAgICBcclxuICAgIHRoaXMudXBkYXRlUmVtYWluaW5nTW92ZXModGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmFyZWEuYWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5hcmVhLmFjdG9yc1tpXS50ZWFtKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5hbGxpZXMucHVzaCh0aGlzLmFyZWEuYWN0b3JzW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuYXJlYS5hY3RvcnNbaV0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsaWVzLCB0aGlzLmVuZW1pZXMpO1xyXG4gICAgdGhpcy5vcmRlciA9IHRoaXMuZGV0ZXJtaW5lQ29tYmF0T3JkZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXIpO1xyXG4gICAgdGhpcy5uZXh0VHVybigpO1xyXG4gIH1cclxuICBcclxuICBoYW5kbGVQbGF5ZXJBdHRhY2soZW5lbXkpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLCBlbmVteSk7XHJcbiAgICBpZiAoIXRoaXMucGxheWVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wbGF5ZXIuZXF1aXBwZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxheWVyLmVxdWlwcGVkLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxheWVyLmdldFgoKSA8PSBlbmVteS5nZXRYKCkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIucnVuQXR0YWNrQW5pbWF0aW9uKCdyaWdodCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wbGF5ZXIucnVuQXR0YWNrQW5pbWF0aW9uKCdsZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVJlbWFpbmluZ01vdmVzKHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzIC0gdGhpcy5wbGF5ZXIuZXF1aXBwZWQuc3BlZWQpO1xyXG4gICAgLypcclxuICAgIGxldCBhdHRhY2tSZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2F0dGFjay8nICsgdGhpcy5zdGF0ZS5wbGF5ZXIuaWQgKyAnLycgKyBlbmVteS5pZCk7XHJcbiAgICBpZiAoYXR0YWNrUmVzdWx0KSB7XHJcbiAgICB9Ki9cclxuICAgIC8vODklIChhdHRhY2tlcidzIHdlYXBvbiBza2lsbCkgLSA1JSAoZGVmZW5kZXIncyBBcm1vciBDbGFzcykgPSA4NCVcclxuICAgIGxldCB0b0hpdCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluO1xyXG4gICAgaWYgKHRoaXMucGxheWVyLmVxdWlwcGVkLm1lbGVlKSB7XHJcbiAgICAgIHRvSGl0ID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNjcmFwcGluO1xyXG4gICAgfVxyXG4gICAgbGV0IGhpdENoYW5jZSA9IHRvSGl0IC0gZW5lbXkuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWMgKyBNYXRoLmNlaWwodGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjay8yKTtcclxuICAgIGxldCByb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcclxuICAgIGlmIChyb2xsIDw9IGhpdENoYW5jZSkge1xyXG4gICAgICBsZXQgZGFtQXJyID0gdGhpcy5wbGF5ZXIuZXF1aXBwZWQuZGFtYWdlLnNwbGl0KCdkJyk7XHJcbiAgICAgIGxldCBkYW1hZ2UgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYW1BcnJbMF07IGkrKykge1xyXG4gICAgICAgIGRhbWFnZSArPSBHbG9iYWxzLnJhbmRvbUludCgxLCBkYW1BcnJbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjcml0ID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcclxuICAgICAgaWYgKGNyaXQgPD0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY3JpdGljYWwpIHtcclxuICAgICAgICB0aGlzLmFyZWEucHJpbnQoJ1lvdSBjcml0aWNhbGx5IGhpdCAnICsgR2xvYmFscy51Y3dvcmRzKGVuZW15Lm5hbWUpICsgJyBmb3IgJyArIGRhbWFnZSpHbG9iYWxzLkNSSVRJQ0FMX0RBTUFHRV9NT0RJRklFUiArICcgcG9pbnRzIG9mIGRhbWFnZS4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFyZWEucHJpbnQoJ1lvdSBoaXQgJyArIEdsb2JhbHMudWN3b3JkcyhlbmVteS5uYW1lKSArICcgZm9yICcgKyBkYW1hZ2UgKyAnIHBvaW50cyBvZiBkYW1hZ2UuJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjcml0RmFpbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICAgIGlmIChjcml0RmFpbCA8PSBHbG9iYWxzLkNSSVRJQ0FMX0ZBSUxVUkVfQ0hBTkNFKSB7XHJcbiAgICAgICAgbGV0IHNhdmVSb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcclxuICAgICAgICBpZiAoc2F2ZVJvbGwgPj0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjaykge1xyXG4gICAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgY3JpdGljYWxseSBtaXNzZWQgYW5kIGxvc3QgdGhlIHJlc3Qgb2YgeW91ciB0dXJuLicpO1xyXG4gICAgICAgICAgdGhpcy5zZXRQbGF5ZXJSZW1haW5pbmdNb3ZlcygwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgbWlzc2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFyZWEucHJpbnQoJ1lvdSBtaXNzZWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlTlBDQXR0YWNrKG5wYywgdGFyZ2V0KSB7XHJcbiAgICBjb25zb2xlLmxvZygnbnBjIGF0dGFja2luZyEnKTtcclxuICAgIGNvbnNvbGUubG9nKG5wYywgdGFyZ2V0KTtcclxuICAgIGlmICghbnBjLmVxdWlwcGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChucGMuZXF1aXBwZWQudHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBucGMucmVtYWluaW5nTW92ZXMgLT0gbnBjLmVxdWlwcGVkLnNwZWVkO1xyXG4gICAgLy84OSUgKGF0dGFja2VyJ3Mgd2VhcG9uIHNraWxsKSAtIDUlIChkZWZlbmRlcidzIEFybW9yIENsYXNzKSA9IDg0JVxyXG4gICAgbGV0IHRvSGl0ID0gbnBjLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluO1xyXG4gICAgaWYgKG5wYy5lcXVpcHBlZC5tZWxlZSkge1xyXG4gICAgICB0b0hpdCA9IG5wYy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2NyYXBwaW47XHJcbiAgICB9XHJcbiAgICBsZXQgaGl0Q2hhbmNlID0gdG9IaXQgLSB0YXJnZXQuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWMgKyBNYXRoLmNlaWwobnBjLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2svMik7XHJcbiAgICBsZXQgcm9sbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICBpZiAocm9sbCA8PSBoaXRDaGFuY2UpIHtcclxuICAgICAgbGV0IGRhbUFyciA9IG5wYy5lcXVpcHBlZC5kYW1hZ2Uuc3BsaXQoJ2QnKTtcclxuICAgICAgbGV0IGRhbWFnZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhbUFyclswXTsgaSsrKSB7XHJcbiAgICAgICAgZGFtYWdlICs9IEdsb2JhbHMucmFuZG9tSW50KDEsIGRhbUFyclsxXSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNyaXQgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xyXG4gICAgICBpZiAoY3JpdCA8PSBucGMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY3JpdGljYWwpIHtcclxuICAgICAgICB0aGlzLmFyZWEucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgY3JpdGljYWxseSBoaXRzICcgKyBHbG9iYWxzLnVjd29yZHModGFyZ2V0Lm5hbWUpICsgJyBmb3IgJyArIGRhbWFnZSpHbG9iYWxzLkNSSVRJQ0FMX0RBTUFHRV9NT0RJRklFUiArICcgcG9pbnRzIG9mIGRhbWFnZS4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFyZWEucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgaGl0cyAnICsgR2xvYmFscy51Y3dvcmRzKHRhcmdldC5uYW1lKSArICcgZm9yICcgKyBkYW1hZ2UgKyAnIHBvaW50cyBvZiBkYW1hZ2UuJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjcml0RmFpbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICAgIGlmIChjcml0RmFpbCA8PSBHbG9iYWxzLkNSSVRJQ0FMX0ZBSUxVUkVfQ0hBTkNFKSB7XHJcbiAgICAgICAgbGV0IHNhdmVSb2xsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcclxuICAgICAgICBpZiAoc2F2ZVJvbGwgPj0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjaykge1xyXG4gICAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIGNyaXRpY2FsbHkgbWlzc2VkIGFuZCBsb3N0IHRoZSByZXN0IG9mIGhpcyB0dXJuLicpO1xyXG4gICAgICAgICAgbnBjLnJlbWFpbmluZ01vdmVzID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIG1pc3NlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIG1pc3NlZC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjaGVja1JlbWFpbmluZ05QQ01vdmVzKG5wYykge1xyXG4gICAgY29uc29sZS5sb2coJ25wYyBtdnMnLCBucGMucmVtYWluaW5nTW92ZXMpO1xyXG4gICAgaWYgKG5wYy5yZW1haW5pbmdNb3ZlcyA8PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCducGMgdHVybiBjb21wbGV0ZScpO1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMubnBjVHVybkludGVydmFsKTtcclxuICAgICAgdGhpcy5jb21iYXRTZXF1ZW5jZSsrO1xyXG4gICAgICBpZiAodGhpcy5hbGxpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGNob29zZVRhcmdldChucGMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBsYXN0RGlzdCA9IG51bGw7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xyXG4gICAgICBpZiAobnBjLnRlYW0gPT0gMykge1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuYWxsaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IEdsb2JhbHMuU2VuZFRvV29ya2VyKHtcclxuICAgICAgICAgICAgICAnZW5kJyA6IHtcclxuICAgICAgICAgICAgICAgICd4JzpucGMuZ2V0WCgpLFxyXG4gICAgICAgICAgICAgICAgJ3knOm5wYy5nZXRZKClcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICdzdGFydCc6e1xyXG4gICAgICAgICAgICAgICAgJ3gnOnRoaXMuYWxsaWVzW2ldLmdldFgoKSxcclxuICAgICAgICAgICAgICAgICd5Jzp0aGlzLmFsbGllc1tpXS5nZXRZKClcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICd3aWR0aCc6dGhpcy5hcmVhLndpZHRoLFxyXG4gICAgICAgICAgICAgICdoZWlnaHQnOnRoaXMuYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgJ3BhdGgnOiB0aGlzLmFyZWEud2Fsa1BvaW50c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHMucGF0aCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdHMucGF0aCA9IHJlc3VsdHMucGF0aC5zcGxpY2UoMCwgcmVzdWx0cy5wYXRoLmxlbmd0aC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWxhc3REaXN0IHx8IHJlc3VsdHMucGF0aCAmJiByZXN1bHRzLnBhdGgubGVuZ3RoIDwgbGFzdERpc3QpIHtcclxuICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFsbGllc1tpXTtcclxuICAgICAgICAgICAgICBsYXN0RGlzdCA9IHJlc3VsdHMucGF0aC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZU5QQ0VuZFR1cm4obnBjKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kaW5nIHR1cm4gZm9yJywgbnBjKTtcclxuICAgIG5wYy5yZW1haW5pbmdNb3ZlcyA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHJ1bk5QQ0F0dGFja3MobnBjKSB7XHJcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBucGMgYXR0YWNrcycsIG5wYy5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICBsZXQgdHVybnNMZWZ0ID0gbnBjLnJlbWFpbmluZ01vdmVzO1xyXG4gICAgaWYgKHR1cm5zTGVmdCA+PSBucGMuZXF1aXBwZWQuc3BlZWQpIHtcclxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdHVybnNMZWZ0OyBpKyspIHtcclxuICAgICAgICB0aGlzLmhhbmRsZU5QQ0F0dGFjayhucGMsIG5wYy50YXJnZXRBY3F1aXJlZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5wYy5yZW1haW5pbmdNb3ZlcyA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGRvTlBDVHVybihucGMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG5wYyB0dXJuJywgbnBjKTtcclxuICAgIHRoaXMubnBjVHVybkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrUmVtYWluaW5nTlBDTW92ZXMobnBjKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICBpZiAoIW5wYy50YXJnZXRBY3F1aXJlZCkge1xyXG4gICAgICBucGMudGFyZ2V0QWNxdWlyZWQgPSBhd2FpdCB0aGlzLmNob29zZVRhcmdldChucGMpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ25wYyB0YXJnZXQnLCBucGMudGFyZ2V0QWNxdWlyZWQpO1xyXG4gICAgXHJcbiAgICBsZXQgZW5lbXlQb3MgPSB7J3gnOm5wYy50YXJnZXRBY3F1aXJlZC5nZXRYKCksICd5JzpucGMudGFyZ2V0QWNxdWlyZWQuZ2V0WSgpfTtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIG9iai5jb21tYW5kID0gJ25wY0NoZWNrUmFuZ2UnO1xyXG4gICAgb2JqLm5wYyA9IG5wYy5pZDtcclxuICAgIG9iai5zdGFydCA9IHsneCc6bnBjLmdldFgoKSwgJ3knOm5wYy5nZXRZKCl9O1xyXG4gICAgb2JqLmVuZCA9IGVuZW15UG9zO1xyXG4gICAgb2JqLndpZHRoID0gdGhpcy5hcmVhLndpZHRoO1xyXG4gICAgb2JqLmhlaWdodCA9IHRoaXMuYXJlYS5oZWlnaHQ7XHJcbiAgICBvYmoucGF0aCA9IHRoaXMuYXJlYS5XYWxrUG9pbnRzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBHbG9iYWxzLlNlbmRUb1dvcmtlcihvYmopO1xyXG4gICAgICBjb25zb2xlLmxvZygncHQnLCByZXN1bHRzLnBhdGgpO1xyXG4gICAgICBpZiAocmVzdWx0cy5wYXRoKSB7XHJcbiAgICAgICAgcmVzdWx0cy5wYXRoID0gcmVzdWx0cy5wYXRoLnNwbGljZSgwLCByZXN1bHRzLnBhdGgubGVuZ3RoLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHRzLnBhdGggJiYgTWF0aC5jZWlsKHJlc3VsdHMucGF0aC5sZW5ndGgvNCkgPiBucGMuZXF1aXBwZWQucmFuZ2UpIHtcclxuICAgICAgICBpZiAocmVzdWx0cy5wYXRoLmxlbmd0aC80ID4gbnBjLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnBhdGggPSByZXN1bHRzLnBhdGguc3BsaWNlKDAsIG5wYy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCo0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcmVzdWx0cy5wYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnBhdGhbaV1bMF0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9XSURUSDtcclxuICAgICAgICAgIHJlc3VsdHMucGF0aFtpXVsxXSAqPSBHbG9iYWxzLkdSSURfU1FVQVJFX0hFSUdIVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5wYy5yZW1haW5pbmdNb3ZlcyAtIE1hdGguY2VpbChyZXN1bHRzLnBhdGgubGVuZ3RoLzQpID49IG5wYy5lcXVpcHBlZC5zcGVlZCkge1xyXG4gICAgICAgICAgbnBjLndhbGtSb3V0ZShyZXN1bHRzLnBhdGgsIHRoaXMucnVuTlBDQXR0YWNrcy5iaW5kKHRoaXMsIG5wYykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBucGMud2Fsa1JvdXRlKHJlc3VsdHMucGF0aCwgdGhpcy5oYW5kbGVOUENFbmRUdXJuLmJpbmQodGhpcywgbnBjKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucnVuTlBDQXR0YWNrcyhucGMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGxheWVyIHJlbWFpbmluZyBtb3ZlcycsIHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcclxuICAgIGlmICh0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA8PSAwKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVMaW5lKTtcclxuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlKHRoaXMubW92ZVRleHQpO1xyXG4gICAgICB0aGlzLm1vdmVMaW5lID0gbnVsbDtcclxuICAgICAgdGhpcy5tb3ZlVGV4dCA9IG51bGw7XHJcbiAgICAgIHRoaXMucGxheWVyVHVybiA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZygncGxheWVyIHR1cm4gY29tcGxldGUnKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBsYXllclR1cm5JbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMuY29tYmF0U2VxdWVuY2UrKztcclxuICAgICAgY29uc29sZS5sb2coJ3JlbWFpbmluZyBlbmVtaWVzJywgdGhpcy5lbmVtaWVzKTtcclxuICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm5leHRUdXJuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgbmV4dFR1cm4oc2VxdWVuY2UpIHtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLmNvbWJhdFNlcXVlbmNlID49IHRoaXMub3JkZXIubGVuZ3RoICYmIHRoaXMuZW5lbWllcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb21iYXRTZXF1ZW5jZSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcmRlclt0aGlzLmNvbWJhdFNlcXVlbmNlXSkge1xyXG4gICAgICBpZiAodGhpcy5vcmRlclt0aGlzLmNvbWJhdFNlcXVlbmNlXS50eXBlICE9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25wYyB0dXJuJyk7XHJcbiAgICAgICAgdGhpcy5vcmRlclt0aGlzLmNvbWJhdFNlcXVlbmNlXS5yZW1haW5pbmdNb3ZlcyA9IHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0uY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kb05QQ1R1cm4odGhpcy5vcmRlclt0aGlzLmNvbWJhdFNlcXVlbmNlXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciB0dXJuJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZW1haW5pbmdNb3Zlcyh0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXllclR1cm5JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tSZW1haW5pbmdQbGF5ZXJNb3ZlcygpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0TlBDQnlJRChpZCkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVtaWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbiAgZGV0ZXJtaW5lQ29tYmF0T3JkZXIoKSB7XHJcbiAgICBsZXQgb3JkZXIgPSBbXTtcclxuICAgIGxldCBwbGF5ZXJBZGRlZCA9IGZhbHNlO1xyXG4gICAgbGV0IG5wY0NvbWJhdGFudHMgPSBbXTtcclxuICAgIGlmICh0aGlzLmluaXRpYXRlZCA9PSAncGxheWVyJykge1xyXG4gICAgICAvL29yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICBwbGF5ZXJBZGRlZCA9IHRydWU7XHJcbiAgICAgIG5wY0NvbWJhdGFudHMgPSB0aGlzLmVuZW1pZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL29yZGVyLnB1c2godGhpcy5nZXROUENCeUlEKHRoaXMuaW5pdGlhdGVkKSk7XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgIT0gdGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgIG5wY0NvbWJhdGFudHMucHVzaCh0aGlzLmVuZW1pZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbnBjQ29tYmF0YW50cy5zb3J0KChhLCBiKSA9PiAoYS5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCA+IGIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQpID8gMSA6IC0xKTtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IG5wY0NvbWJhdGFudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG5wY0NvbWJhdGFudHNbaV0uY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQgPiB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCkge1xyXG4gICAgICAgIG9yZGVyLnB1c2gobnBjQ29tYmF0YW50c1tpXSk7XHJcbiAgICAgICAgaWYgKGkgPT0gdGhpcy5lbmVtaWVzLmxlbmd0aC0xICYmICFwbGF5ZXJBZGRlZCkge1xyXG4gICAgICAgICAgb3JkZXIucHVzaCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghcGxheWVyQWRkZWQpIHtcclxuICAgICAgICAgIG9yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmRlci5wdXNoKG5wY0NvbWJhdGFudHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGVuZFBsYXllclR1cm4oKSB7XHJcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IDA7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kIHBsYXllciB0dXJuJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZVJlbWFpbmluZ01vdmVzKHZhbHVlKSB7XHJcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IHZhbHVlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmVtZW50X3BvaW50cycpLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29tYmF0TW91c2VNb3ZlUmVzdWx0cyhvYmopIHtcclxuICAgIGlmIChvYmoucGF0aCAmJiBvYmoucGF0aC5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLm1vdmVMaW5lICYmICF0aGlzLnBsYXllci5pc01vdmluZykge1xyXG4gICAgICAgIGxldCBjb29yZHMgPSBbb2JqLnN0YXJ0LngsIG9iai5zdGFydC55LCBvYmouc3RhcnQueCwgb2JqLnN0YXJ0LnldO1xyXG4gICAgICAgIHRoaXMubW92ZUxpbmUgPSBuZXcgZmFicmljLkxpbmUoY29vcmRzLCB7XHJcbiAgICAgICAgICBzdHJva2U6ICdibGFjaycsXHJcbiAgICAgICAgICBzdHJva2VXaWR0aDogMyxcclxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5tb3ZlTGluZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLm1vdmVUZXh0ICYmICF0aGlzLnBsYXllci5pc01vdmluZykge1xyXG4gICAgICAgIHRoaXMubW92ZVRleHQgPSBuZXcgZmFicmljLlRleHQoJ1gnLCB7IGxlZnQ6IDEwMCwgdG9wOiAxMDAsIGZvbnRGYW1pbHk6J3ZlcmRhbmEsZ2VuZXZhLHNhbnMtc2VyaWYnLCBmb250U2l6ZToxOCwgZm9udFdlaWdodDonYm9sZCcsIGZpbGw6J2dyZWVuJ30pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLm1vdmVUZXh0KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMubW92ZUxpbmUpIHtcclxuICAgICAgICB0aGlzLm1vdmVMaW5lLnNldCh7J3gyJzpvYmouZW5kLngsICd5Mic6b2JqLmVuZC55fSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRleHRQb3MgPSBPYmplY3QuYXNzaWduKHt9LCBvYmouZW5kKTtcclxuICAgICAgLy90ZXh0UG9zLnggKz0gMTA7XHJcbiAgICAgIC8vdGV4dFBvcy55IC09IDc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIHRleHQnLCBNYXRoLmNlaWwob2JqLnBhdGgubGVuZ3RoLzQpLnRvU3RyaW5nKCksICdyZW1tb3ZlcycsIHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcclxuICAgICAgdGhpcy5tb3ZlVGV4dC5zZXQoe3RleHQ6TWF0aC5jZWlsKG9iai5wYXRoLmxlbmd0aC80KS50b1N0cmluZygpLCBsZWZ0OnRleHRQb3MueCwgdG9wOnRleHRQb3MueX0pO1xyXG4gICAgICBpZiAob2JqLnBhdGgubGVuZ3RoLzQgPD0gdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMpIHtcclxuICAgICAgICB0aGlzLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidncmVlbid9KTtcclxuICAgICAgICB0aGlzLm1vdmVUZXh0LnNldCh7ZmlsbDonZ3JlZW4nfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGluZS5zZXQoe3N0cm9rZToncmVkJ30pO1xyXG4gICAgICAgIHRoaXMubW92ZVRleHQuc2V0KHtmaWxsOidyZWQnfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW92ZUxpbmUuc2V0KHtzdHJva2U6J2JsYWNrJ30pO1xyXG4gICAgICB0aGlzLm1vdmVUZXh0LnNldCh7dGV4dDonWCcsIGxlZnQ6dGV4dFBvcy54LCB0b3A6dGV4dFBvcy55LCBmaWxsOidibGFjayd9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE1vdXNlQWN0aW9ucygpIHtcclxuXHJcbiAgICB0aGlzLmNhbnZhcy5vbignbW91c2U6b3V0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVMaW5lKTtcclxuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlKHRoaXMubW92ZVRleHQpO1xyXG4gICAgICB0aGlzLm1vdmVMaW5lID0gbnVsbDtcclxuICAgICAgdGhpcy5tb3ZlVGV4dCA9IG51bGw7XHJcbiAgICAgIEdsb2JhbHMuUGF0aFdvcmtlci5wb3N0TWVzc2FnZSh7Y29tbWFuZDonY2FuY2VsVGhyZWFkJ30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMub24oJ21vdXNlOm1vdmUnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKHRoaXMucGxheWVyVHVybikge1xyXG4gICAgICAgIC8vc2VsZi5hcmVhLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2NhbmNlbFRocmVhZCd9KTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIudGFyZ2V0QWNxdWlyZWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdmVMaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVMaW5lKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTGluZSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5tb3ZlVGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmUodGhpcy5tb3ZlVGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRleHQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhcnQgPSB7fTtcclxuICAgICAgICBzdGFydC54ID0gdGhpcy5wbGF5ZXIuZ2V0WCgpO1xyXG4gICAgICAgIHN0YXJ0LnkgPSB0aGlzLnBsYXllci5nZXRZKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVuZCA9IHt9O1xyXG4gICAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChldmVudC5wb2ludGVyLngpO1xyXG4gICAgICAgIGVuZC55ID0gTWF0aC5yb3VuZChldmVudC5wb2ludGVyLnkpO1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZlTGluZSAmJiAhdGhpcy5wbGF5ZXIuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgIGxldCBjb29yZHMgPSBbc3RhcnQueCwgc3RhcnQueSwgc3RhcnQueCwgc3RhcnQueV07XHJcbiAgICAgICAgICB0aGlzLm1vdmVMaW5lID0gbmV3IGZhYnJpYy5MaW5lKGNvb3Jkcywge1xyXG4gICAgICAgICAgICBzdHJva2U6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxyXG4gICAgICAgICAgICBzZWxlY3RhYmxlOmZhbHNlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLm1vdmVMaW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmVUZXh0ICYmICF0aGlzLnBsYXllci5pc01vdmluZykge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlVGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnWCcsIHsgbGVmdDogMTAwLCB0b3A6IDEwMCwgZm9udEZhbWlseTondmVyZGFuYSxnZW5ldmEsc2Fucy1zZXJpZicsIGZvbnRTaXplOjE4LCBmb250V2VpZ2h0Oidib2xkJywgZmlsbDonZ3JlZW4nfSk7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5tb3ZlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVMaW5lKSB7XHJcbiAgICAgICAgICB0aGlzLm1vdmVMaW5lLnNldCh7J3gyJzplbmQueCwgJ3kyJzplbmQueX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGV4dFBvcyA9IE9iamVjdC5hc3NpZ24oe30sIGVuZCk7XHJcbiAgICAgICAgdGV4dFBvcy54ICs9IDEwO1xyXG4gICAgICAgIHRleHRQb3MueSAtPSA3O1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVUZXh0ICYmIHRoaXMubW92ZUxpbmUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFyZWEud2Fsa1BhdGguaXNQb2ludEluUGF0aChlbmQueCwgZW5kLnkpKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgb2JqLmNvbW1hbmQgPSAnY29tYmF0TW91c2VNb3ZlJztcclxuICAgICAgICAgICAgb2JqLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIG9iai5lbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgIG9iai53aWR0aCA9IHRoaXMuYXJlYS53aWR0aDtcclxuICAgICAgICAgICAgb2JqLmhlaWdodCA9IHRoaXMuYXJlYS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIG9iai5wYXRoID0gdGhpcy5hcmVhLldhbGtQb2ludHM7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBHbG9iYWxzLlNlbmRUb1dvcmtlcihvYmopO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY29tYmF0TW91c2VNb3ZlUmVzdWx0cyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUZXh0LnNldCh7dGV4dDonWCcsIGxlZnQ6dGV4dFBvcy54LCB0b3A6dGV4dFBvcy55LCBmaWxsOidyZWQnfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlY29yIGV4dGVuZHMgRW5naW5lIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBjYW52YXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnR5cGUgPSBHbG9iYWxzLk9CSkVDVF9UWVBFX0RFQ09SO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcjtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5sb2NhdGlvbjtcclxuICAgIHRoaXMuaW1nVVJMID0gZGF0YS5pbWc7XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XHJcbiAgICB0aGlzLmRvb3IgPSBkYXRhLmRvb3I7XHJcbiAgICB0aGlzLm9wZW4gPSBkYXRhLm9wZW47XHJcblxyXG4gICAgdGhpcy5vcmdYID0gZGF0YS54O1xyXG4gICAgdGhpcy5vcmdZID0gZGF0YS55O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICB0aGlzLm1heEhlaWdodCA9IDA7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gMDtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuIFxyXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy5pbWcud2lkdGg7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5pbWcuaGVpZ2h0O1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1nLndpZHRoO1xyXG4gICAgICBpZiAoIXRoaXMuc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMuaW1nLCB7XHJcbiAgICAgICAgICBsZWZ0OiB0aGlzLm9yZ1gsXHJcbiAgICAgICAgICB0b3A6IHRoaXMub3JnWSxcclxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2UsXHJcbiAgICAgICAgICBob3ZlckN1cnNvcjonYXJyb3cnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy54ID0gdGhpcy5vcmdYICsgdGhpcy53aWR0aC8yO1xyXG4gICAgICB0aGlzLnkgPSB0aGlzLm9yZ1kgKyB0aGlzLmhlaWdodDtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB7fTtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB0aGlzO1xyXG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuc3ByaXRlKTtcclxuICAgICAgdGhpcy5pbWcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSkpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdpbWcvb2JqZWN0cy8nICsgdGhpcy5pbWdVUkw7XHJcbiAgfVxyXG4gIGdldFgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLngpO1xyXG4gIH1cclxuICBcclxuICBnZXRZKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcclxuICB9XHJcbn0iLCJcclxuaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4JztcclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IG51bGw7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2MnLCB7XHJcbiAgICAgIGZpcmVSaWdodENsaWNrOiB0cnVlLFxyXG4gICAgICBzdG9wQ29udGV4dE1lbnU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jYW52YXMub24oJ29iamVjdDphZGRlZCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBhZnRlcjpyZW5kZXIgVHJpZ2dlcmVkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBcclxuICAgICAgZS50YXJnZXQub24oJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWV0YWRhdGEpIHtcclxuICAgICAgICAgIHRoaXMucHJpbnQoJ1lvdSBzZWU6ICcgKyBHbG9iYWxzLnVjd29yZHMoZS50YXJnZXQubWV0YWRhdGEubmFtZSkgKyAnLicpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFyZWEuY29tYmF0T24gfHwgdGhpcy5wbGF5ZXIuaXNUYXJnZXRpbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldGluZyBucGMnKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudGFyZ2V0QWNxdWlyZWQgPSBlLnRhcmdldC5tZXRhZGF0YTtcclxuICAgICAgICAgICAgZS50YXJnZXQuaG92ZXJDdXJzb3I9J2Nyb3NzaGFpcic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZS50YXJnZXQub24oJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tZXRhZGF0YSAmJiB0aGlzLnBsYXllci50YXJnZXRBY3F1aXJlZCA9PSBlLnRhcmdldC5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIudGFyZ2V0QWNxdWlyZWQgPSBudWxsO1xyXG4gICAgICAgICAgZS50YXJnZXQuaG92ZXJDdXJzb3I9J2Fycm93JztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZS50YXJnZXQub24oJ21vdXNldXAnLCBhc3luYyAobWUpID0+ICB7XHJcbiAgICAgICAgc3dpdGNoKG1lLmJ1dHRvbikge1xyXG4gICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBpZiAobWUudGFyZ2V0Lm1ldGFkYXRhICYmIG1lLnRhcmdldC5tZXRhZGF0YS50eXBlID09IEdsb2JhbHMuT0JKRUNUX1RZUEVfTlBDKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGVuZW15UG9zID0geyd4JzptZS50YXJnZXQubWV0YWRhdGEuZ2V0WCgpLCAneSc6bWUudGFyZ2V0Lm1ldGFkYXRhLmdldFkoKX07XHJcbiAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgIG9iai5jb21tYW5kID0gJ3BsYXllckNoZWNrUmFuZ2UnO1xyXG4gICAgICAgICAgICAgIG9iai5ucGMgPSBtZS50YXJnZXQubWV0YWRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgb2JqLnN0YXJ0ID0geyd4Jzp0aGlzLnBsYXllci5nZXRYKCksICd5Jzp0aGlzLnBsYXllci5nZXRZKCl9O1xyXG4gICAgICAgICAgICAgIG9iai5lbmQgPSBlbmVteVBvcztcclxuICAgICAgICAgICAgICBvYmoud2lkdGggPSB0aGlzLmN1cnJlbnRBcmVhLndpZHRoO1xyXG4gICAgICAgICAgICAgIG9iai5oZWlnaHQgPSB0aGlzLmN1cnJlbnRBcmVhLmhlaWdodDtcclxuICAgICAgICAgICAgICBvYmoucGF0aCA9IHRoaXMuY3VycmVudEFyZWEud2Fsa1BvaW50cztcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBHbG9iYWxzLlNlbmRUb1dvcmtlcihvYmopO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMucGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICByZXN1bHRzLnBhdGggPSByZXN1bHRzLnBhdGguc3BsaWNlKDAsIHJlc3VsdHMucGF0aC5sZW5ndGgtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5wYXRoICYmIE1hdGguY2VpbChyZXN1bHRzLnBhdGgubGVuZ3RoLzQpID4gdGhpcy5jdXJyZW50QXJlYS5nZXRQbGF5ZXIoKS5lcXVpcHBlZC5yYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByaW50KFwiWW91J3JlIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50QXJlYS5jb21iYXRPbikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcmVhLmVudGVyQ29tYmF0KCdwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFyZWEuY29tYmF0LmhhbmRsZVBsYXllckF0dGFjayh0aGlzLmN1cnJlbnRBcmVhLmNvbWJhdC5nZXROUENCeUlEKHJlc3VsdHMubnBjKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kYXRhLmVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGlmIChtZS50YXJnZXQubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlclJpZ2h0Q2xpY2tPcHRpb25zKG1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQgPSB7fTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMgPSB7fTtcclxuICAgIC8qRi5BLkMuSS5BLkwuU1xyXG4gICAgRm9ydGl0dWRlXHJcbiAgICBBZ2lsaXR5XHJcbiAgICBDaGFyaXNtYVxyXG4gICAgSW50ZWxsaWdlbmNlXHJcbiAgICBBdHRlbnRpb25cclxuICAgIEx1Y2tcclxuICAgIFN0cmVuZ3RoKi9cclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjayA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnN0cmVuZ3RoID0gNTtcclxuICAgIFxyXG4gICAgLy9kZXJpdmVkIHN0YXRzXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkID0gKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eS8yKSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbi8yKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMudG9sZXJhbmNlID0gdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUqNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc21lbGwgPSBNYXRoLnJvdW5kKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY2hhcmlzbWEvMik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmhwID0gNTAgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWMgPSA1ICsgTWF0aC5yb3VuZCh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkvMiArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlLzIpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jcml0aWNhbCA9IHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjaztcclxuXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnRyYWl0cyA9IHt9O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC50cmFpdHMuYXV0aXNtID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzID0ge307XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5iZWdnaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY2hhcmlzbWEgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5zY3JhcHBpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zdHJlbmd0aCArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLndyYXBwaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2UpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuZml4aW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hZ2lsaXR5KTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLmxlYXJuaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnJhbnRpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2UgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaGl0dGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZSArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY2hhcmlzbWEpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2xlZXBpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXJSaWdodENsaWNrT3B0aW9ucyhtb3VzZWluZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgcmlnaHQgY2xpY2snKTtcclxuICAgIGxldCBlbGVtZW50ID0gbW91c2VpbmZvLnRhcmdldDtcclxuICAgIGxldCBtZW51VGltZW91dCA9IDIwMDA7XHJcbiAgICB0aGlzLnJlbW92ZUFsbENvbnRleHRNZW51cygpO1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRleHRNZW51Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnbW91c2UnLCBtb3VzZWluZm8pO1xyXG4gICAgZGl2LnN0eWxlLmxlZnQgPSAobW91c2VpbmZvLmFic29sdXRlUG9pbnRlci54ICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcy1jb250YWluZXInKS5vZmZzZXRMZWZ0KSArICdweCc7XHJcbiAgICBkaXYuc3R5bGUudG9wID0gbW91c2VpbmZvLmFic29sdXRlUG9pbnRlci55ICsgJ3B4JztcclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoR2xvYmFscy51Y3dvcmRzKGVsZW1lbnQubWV0YWRhdGEubmFtZSkpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdWaWV3JykpO1xyXG4gICAgbGkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByaW50KEdsb2JhbHMudXBwZXJGaXJzdENoYXIoZWxlbWVudC5tZXRhZGF0YS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbENvbnRleHRNZW51cygpO1xyXG4gICAgfTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGlmICgoZWxlbWVudC5tZXRhZGF0YS5jb250YWluZXIgfHwgZWxlbWVudC5tZXRhZGF0YS5kb29yKSAmJiAhZWxlbWVudC5tZXRhZGF0YS5vcGVuKSB7XHJcbiAgICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ09wZW4nKSk7XHJcbiAgICAgIGxpLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRyeVRvT3BlbihlbGVtZW50Lm1ldGFkYXRhKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbnRleHRNZW51cygpO1xyXG4gICAgICB9O1xyXG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9IGVsc2UgaWYgKChlbGVtZW50Lm1ldGFkYXRhLmNvbnRhaW5lciB8fCBlbGVtZW50Lm1ldGFkYXRhLmRvb3IpICYmIGVsZW1lbnQubWV0YWRhdGEub3Blbikge1xyXG4gICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDbG9zZScpKTtcclxuICAgICAgbGkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudHJ5VG9DbG9zZShlbGVtZW50Lm1ldGFkYXRhKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbnRleHRNZW51cygpO1xyXG4gICAgICB9O1xyXG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudC5tZXRhZGF0YS5jb250YWluZXIpIHtcclxuICAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VhcmNoJykpO1xyXG4gICAgICBsaS5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcclxuICAgICAgbGkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBsYXllci50cnlUb1NlYXJjaChlbGVtZW50Lm1ldGFkYXRhKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbnRleHRNZW51cygpO1xyXG4gICAgICB9O1xyXG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKGRpdiAmJiBkaXYucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgIH1cclxuICAgIH0sIG1lbnVUaW1lb3V0KTtcclxuICAgIGRpdi5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfTtcclxuICAgIGRpdi5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoZGl2ICYmIGRpdi5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgbWVudVRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZW1vdmVBbGxDb250ZXh0TWVudXMoKSB7XHJcbiAgICBsZXQgbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGV4dE1lbnUnKTtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IG1lbnVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1lbnVzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWVudXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBzaG93Q2hhcmFjdGVyU2hlZXQoKSB7XHJcbiAgICBpZiAoIUdsb2JhbHMuaXNTaG93aW5nU2hlZXQpIHtcclxuICAgICAgR2xvYmFscy5pc1Nob3dpbmdTaGVldCA9IHRydWU7XHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NoZWV0X2hvbGRlcicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBhd2FpdCB0aGlzLmdldFRlbXBsYXRlKCdzaGVldC5odG1sJyk7XHJcblxyXG4gICAgICBsZXQgY2xvc2V4ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBhJyk7XHJcbiAgICAgIGNsb3NleC5vbmNsaWNrID0gdGhpcy5zaG93Q2hhcmFjdGVyU2hlZXQ7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgc3RhdHMgPSBkaXYucXVlcnlTZWxlY3RvckFsbCgnLmJhc2Vfc3RhdHMgLmJveCcpO1xyXG4gICAgICBzdGF0c1swXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGU7XHJcbiAgICAgIHN0YXRzWzFdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbjtcclxuICAgICAgc3RhdHNbMl0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY2hhcmlzbWE7XHJcbiAgICAgIHN0YXRzWzNdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZTtcclxuICAgICAgc3RhdHNbNF0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eTtcclxuICAgICAgc3RhdHNbNV0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMubHVjaztcclxuICAgICAgc3RhdHNbNl0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3RyZW5ndGg7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgc2tpbGxzID0gZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHMgLnZhbHVlJyk7XHJcbiAgICAgIHNraWxsc1swXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuYmVnZ2luICsgJyUnO1xyXG4gICAgICBza2lsbHNbMV0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNob290aW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1syXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2NyYXBwaW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1szXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMud3JhcHBpbiArICclJztcclxuICAgICAgc2tpbGxzWzRdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5maXhpbiArICclJztcclxuICAgICAgc2tpbGxzWzVdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5sZWFybmluICsgJyUnO1xyXG4gICAgICBza2lsbHNbNl0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnJhbnRpbiArICclJztcclxuICAgICAgc2tpbGxzWzddLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaGl0dGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbOF0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNsZWVwaW4gKyAnJSc7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgZGVyaXZlZCA9IGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHNfaW5mbyAudmFsdWUnKTtcclxuICAgICAgZGVyaXZlZFswXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy50b2xlcmFuY2UgKyAnJSc7XHJcbiAgICAgIGRlcml2ZWRbMV0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQ7XHJcbiAgICAgIGxldCBzbWVsbERhdGEgPSB0aGlzLnBsYXllci5nZXRTbWVsbExhYmVsKHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNtZWxsKTtcclxuICAgICAgZGVyaXZlZFsyXS5zdHlsZS5jb2xvciA9IHNtZWxsRGF0YVsxXTtcclxuICAgICAgZGVyaXZlZFsyXS5pbm5lckhUTUwgPSBzbWVsbERhdGFbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBHbG9iYWxzLmlzU2hvd2luZ1NoZWV0ID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2hlZXRfaG9sZGVyJykpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBlbnRlclRhcmdldGluZ01vZGUoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhLmdldFBsYXllcigpLmlzVGFyZ2V0aW5nID0gIXRoaXMuY3VycmVudEFyZWEuZ2V0UGxheWVyKCkuaXNUYXJnZXRpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIGVuZENvbWJhdFR1cm4oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhLmVuZENvbWJhdFR1cm4oKTtcclxuICB9XHJcbiAgXHJcbiAgcHJpbnQodGV4dCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zb2xlJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MICs9ICc8cD4nICsgdGV4dCArICc8L3A+JztcclxuICAgIGRpdi5pbm5lckhUTUwgKz0gJzxwPjwvcD4nO1xyXG4gICAgZGl2LnNjcm9sbFRvcCA9IGRpdi5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIHF1ZXJ5QmFja2VuZCh0eXBlLCB1cmwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeWluZyAnICsgdXJsKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDp0eXBlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmVqZWN0KHsnY29kZSc6cmVzcG9uc2Uuc3RhdHVzLCAnbWVzc2FnZSc6cmVzcG9uc2Uuc3RhdHVzVGV4dH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShqc29uKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+cmVqZWN0KEpTT04ucGFyc2UoZXJyb3IpKSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yPT5yZWplY3QoSlNPTi5wYXJzZShlcnJvcikpKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRlbXBsYXRlKHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBmZXRjaChHbG9iYWxzLlRFTVBMQVRFX0RJUiArIHVybCwge1xyXG4gICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICBIZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSkuY2F0Y2goKGUpID0+IHtyZWplY3QoZSl9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufSIsImltcG9ydCB3b3JrZXIgZnJvbSAnLi9QYXRoZmluZFdvcmtlci5qc3gnO1xyXG5pbXBvcnQgV2ViV29ya2VyIGZyb20gJy4vV2ViV29ya2VyLmpzeCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFscyB7XHJcbiAgc3RhdGljIFJPT1RfRUxFTUVOVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbiAgc3RhdGljIEFSRUFTX0RJUiA9ICcvaW1nL2FyZWFzLyc7XHJcbiAgc3RhdGljIFRFTVBMQVRFX0RJUiA9ICcvdGVtcGxhdGVzLyc7XHJcbiAgc3RhdGljIEFQSV9ESVIgPSAnL2FwaS8nO1xyXG4gIHN0YXRpYyBBTklNQVRJT05TX0RJUiA9ICcvaW1nL2FuaW1hdGlvbnMvJztcclxuICBcclxuICBzdGF0aWMgR1JJRF9TUVVBUkVfV0lEVEggPSAyNTtcclxuICBzdGF0aWMgR1JJRF9TUVVBUkVfSEVJR0hUID0gMjU7XHJcbiAgXHJcbiAgc3RhdGljIEVWRU5UX1BMQVlFUl9SRUFEWSA9ICdwbGF5ZXJSZWFkeSc7XHJcbiAgc3RhdGljIEVWRU5UX0FSRUFfUkVBRFkgPSAnYXJlYVJlYWR5JztcclxuICBzdGF0aWMgRVZFTlRfTlBDX1JFQURZID0gJ25wY1JlYWR5JztcclxuICBzdGF0aWMgRVZFTlRfV0VBUE9OX1JFQURZID0gJ3dlYXBvblJlYWR5JztcclxuICBzdGF0aWMgRVZFTlRfREVDT1JfUkVBRFkgPSAnZGVjb3JSZWFkeSc7XHJcbiAgc3RhdGljIEVWRU5UX1BBVEhfV0FMS0VEID0gJ3BhdGhXYWxrZWQnO1xyXG4gIHN0YXRpYyBFVkVOVF9QQVRIX05PREVfV0FMS0VEID0gJ3BhdGhOb2RlV2Fsa2VkJztcclxuICBcclxuICBzdGF0aWMgT0JKRUNUX1RZUEVfUExBWUVSID0gMTtcclxuICBzdGF0aWMgT0JKRUNUX1RZUEVfTlBDID0gMjtcclxuICBzdGF0aWMgT0JKRUNUX1RZUEVfV0VBUE9OID0gMztcclxuICBzdGF0aWMgT0JKRUNUX1RZUEVfREVDT1IgPSA0O1xyXG4gIFxyXG4gIHN0YXRpYyBDUklUSUNBTF9GQUlMVVJFX0NIQU5DRSA9IDEwO1xyXG4gIHN0YXRpYyBDUklUSUNBTF9EQU1BR0VfTU9ESUZJRVIgPSAxMDtcclxuICBcclxuICBhcGlLZXkgPSBudWxsO1xyXG4gIGlzU2hvd2luZ1NoZWV0ID0gZmFsc2U7XHJcbiAgc3RhdGljIHdvcmtlclJlcXVlc3RJRCA9IDA7XHJcbiAgc3RhdGljIHJlc29sdmVzID0ge307XHJcbiAgc3RhdGljIHJlamVjdHMgPSB7fTtcclxuICBQYXRoV29ya2VyID0ge307XHJcbiAgXHJcbiAgc3RhdGljIFNldHVwUGF0aFdvcmtlcih3YWxrUG9pbnRzKSB7XHJcbiAgICB0aGlzLlBhdGhXb3JrZXIgPSBuZXcgV2ViV29ya2VyKHdvcmtlcik7XHJcbiAgICB0aGlzLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2dlbmVyYXRlV2Fsa1BhdGgnLCBwYXRoOndhbGtQb2ludHN9KTtcclxuICAgIHRoaXMuUGF0aFdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCB7aWQsIGRhdGEsIGVycn0gPSBldmVudC5kYXRhOyAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdnb3QgJywgZXZlbnQuZGF0YSwgJ2JhY2sgZnJvbSB3b3JrZXInKTtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnN0IHJlamVjdCA9IHRoaXMucmVqZWN0c1tldmVudC5kYXRhLmlkXTtcclxuICAgICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgICByZWplY3QoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5yZWplY3RzW2V2ZW50LmRhdGEuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc29sdmUgPSB0aGlzLnJlc29sdmVzW2V2ZW50LmRhdGEuaWRdO1xyXG4gICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVzb2x2ZXNbZXZlbnQuZGF0YS5pZF07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgLypcclxuICAgICAgICBjYXNlICdjb21iYXRNb3VzZU1vdmUnOlxyXG4gICAgICAgICAgdGhpcy5jb21iYXQuY29tYmF0TW91c2VNb3ZlUmVzdWx0cyhldmVudC5kYXRhKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3BsYXllckNoZWNrUmFuZ2UnOlxyXG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEucGF0aCkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhLnBhdGggPSBldmVudC5kYXRhLnBhdGguc3BsaWNlKDAsIGV2ZW50LmRhdGEucGF0aC5sZW5ndGgtMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoICYmIE1hdGguY2VpbChldmVudC5kYXRhLnBhdGgubGVuZ3RoLzQpID4gdGhpcy5nZXRQbGF5ZXIoKS5lcXVpcHBlZC5yYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByaW50KFwiWW91J3JlIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdGhpcy5jb21iYXRPbikge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQ29tYmF0KCdwbGF5ZXInKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5jb21iYXQuaGFuZGxlUGxheWVyQXR0YWNrKHRoaXMuY29tYmF0LmdldE5QQ0J5SUQoZXZlbnQuZGF0YS5ucGMpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25wY0NoZWNrUmFuZ2UnOlxyXG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEucGF0aCkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhLnBhdGggPSBldmVudC5kYXRhLnBhdGguc3BsaWNlKDAsIGV2ZW50LmRhdGEucGF0aC5sZW5ndGgtMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgbnBjID0gdGhpcy5jb21iYXQuZ2V0TlBDQnlJRChldmVudC5kYXRhLm5wYyk7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY29tYmF0T24pIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckNvbWJhdChucGMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoICYmIE1hdGguY2VpbChldmVudC5kYXRhLnBhdGgubGVuZ3RoLzQpID4gbnBjLmVxdWlwcGVkLnJhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArIFwiIGlzIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmF0LmhhbmRsZU5QQ01vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5jb21iYXQuaGFuZGxlTlBDQXR0YWNrKG5wYywgbnBjLnRhcmdldEFjcXVpcmVkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9Ki9cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgU2VuZFRvV29ya2VyKG9iaikge1xyXG4gICAgdGhpcy53b3JrZXJSZXF1ZXN0SUQrKztcclxuICAgIG9iai5ncmlkd2lkdGggPSBHbG9iYWxzLkdSSURfU1FVQVJFX1dJRFRIO1xyXG4gICAgb2JqLmdyaWRoZWlnaHQgPSBHbG9iYWxzLkdSSURfU1FVQVJFX0hFSUdIVDtcclxuICAgIG9iai5pZCA9IHRoaXMud29ya2VyUmVxdWVzdElEO1xyXG4gICAgY29uc29sZS5sb2coJ3NlbmRpbmcgdG8gd29ya2VyJywgb2JqKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVzW3RoaXMud29ya2VyUmVxdWVzdElEXSA9IHJlc29sdmU7XHJcbiAgICAgIHRoaXMucmVqZWN0c1t0aGlzLndvcmtlclJlcXVlc3RJRF0gPSByZWplY3Q7XHJcbiAgICAgIHRoaXMuUGF0aFdvcmtlci5wb3N0TWVzc2FnZShvYmopO1xyXG4gICAgfSk7IFxyXG4gIH1cclxuICBcclxuICBzdGF0aWMgaGFuZGxlQWNjZXNzRGVuaWVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB4aHIub3BlbignUE9TVCcsIEdsb2JhbHMuQVBJX1VSTCArICd0b2tlbicsIHRydWUpO1xyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBHbG9iYWxzLmFwaUtleSA9IGpzb24udG9rZW47XHJcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4aHIuc2VuZCgnZW1haWw9JyArIEdsb2JhbHMuYXBpRW1haWwgKyAnJnBhc3M9JyArIEdsb2JhbHMuYXBpUGFzcyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIHN0YXRpYyByYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgdXBwZXJGaXJzdENoYXIoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgdWN3b3JkcyhzdHIpIHtcclxuICAgIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL14oLil8XFxzKyguKS9nLCBmdW5jdGlvbiAoJDEpIHtcclxuICAgICAgcmV0dXJuICQxLnRvVXBwZXJDYXNlKClcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZGlzdGFuY2VCZXR3ZWVuKHBvaW50MSwgcG9pbnQyLCBhcmVhKSB7XHJcbiAgICBsZXQgcGF0aCA9IGFyZWEuZmluZFBhdGgocG9pbnQxLCBwb2ludDIpO1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgcGF0aCA9IHBhdGguc3BsaWNlKDAsIHBhdGgubGVuZ3RoLTEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguY2VpbChwYXRoLmxlbmd0aC80KTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nKG9iajEsIG9iajIpIHtcclxuICAgIHJldHVybiBvYmoxLmludGVyc2VjdHNXaXRoT2JqZWN0KG9iajIpIHx8XHJcbiAgICAgICAgICAgb2JqMS5pc0NvbnRhaW5lZFdpdGhpbk9iamVjdChvYmoyKSB8fFxyXG4gICAgICAgICAgIG9iajIuaXNDb250YWluZWRXaXRoaW5PYmplY3Qob2JqMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xyXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcclxuaW1wb3J0IHtXZWFwb259IGZyb20gJy4vV2VhcG9uLmpzeCdcclxuXHJcbmV4cG9ydCBjbGFzcyBOUEMgZXh0ZW5kcyBFbmdpbmUge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnR5cGUgPSBHbG9iYWxzLk9CSkVDVF9UWVBFX05QQztcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9ICdzb21lIGFzc2hvbGUnO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ICdzb21lb25lIHdobyBkZWZpZXMgZGVzY3JpcHRpb24nO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuaW1nWCA9IDkwMDtcclxuICAgIHRoaXMuaW1nWSA9IDQwMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xyXG4gICAgdGhpcy5tYXhXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcclxuICAgIHRoaXMubnBjRGVmYXVsdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5zaGVldCA9IHsuLi50aGlzLmNoYXJhY3RlclNoZWV0fTtcclxuICAgIHRoaXMudGVhbSA9IDM7XHJcbiAgICB0aGlzLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcclxuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudXNpbmdNZWxlZSA9IHRydWU7XHJcbiAgICB0aGlzLmludmVudG9yeSA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgZmlzdCA9IG5ldyBXZWFwb24oJ2IxYWU1MWIxLWM5YjktMTFlOS1iYzk3LTBlNDlmMWY4ZTc3YycpO1xyXG4gICAgZmlzdC5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSwgZXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvdyhmaXN0KTtcclxuICAgICAgdGhpcy5lcXVpcChmaXN0KTtcclxuICAgIH0pO1xyXG4gICAgZmlzdC5sb2FkKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHN0b3coaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkucHVzaChpdGVtKTtcclxuICB9XHJcbiAgXHJcbiAgZHJvcChpdGVtKSB7XHJcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaW52ZW50b3J5LnNwbGljZSh0aGlzLmludmVudG9yeS5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgZXF1aXAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZXF1aXBwZWQgPSBpdGVtO1xyXG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZXF1aXBwZWQnKS5zcmMgPSB0aGlzLmVxdWlwcGVkLmltZy5zcmM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEVxdWlwcGVkV2VhcG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXF1aXBwZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMubnBjRGVmYXVsdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWF4V2lkdGggPSB0aGlzLm5wY0RlZmF1bHQud2lkdGg7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5ucGNEZWZhdWx0LmhlaWdodDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm5wY0RlZmF1bHQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5ucGNEZWZhdWx0LndpZHRoO1xyXG5cclxuICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMubnBjRGVmYXVsdCwge1xyXG4gICAgICAgIGxlZnQ6IHRoaXMuaW1nWCxcclxuICAgICAgICB0b3A6IHRoaXMuaW1nWSxcclxuICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxyXG4gICAgICAgIGhvdmVyQ3Vyc29yOidhcnJvdydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0gdGhpcztcclxuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuc3ByaXRlKTtcclxuICAgICAgdGhpcy5ucGNEZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZKSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLm5wY0RlZmF1bHQuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteS5wbmcnO1xyXG4gICAgXHJcbiAgICB0aGlzLm5wY0xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubnBjTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X2xlZnQucG5nJztcclxuICAgIFxyXG4gICAgdGhpcy5ucGNSaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5ucGNSaWdodC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X3JpZ2h0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMubnBjVXAgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubnBjVXAuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteV9iYWNrd2FyZHMucG5nJztcclxuICB9XHJcbiAgXHJcbiAgcmVzYW1wbGUoKSB7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICBcclxuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuaW1nWSA9IHRoaXMuaW1nWSArIE1hdGguYWJzKHRoaXMubWF4SGVpZ2h0IC0gdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldCgndG9wJywgdGhpcy5pbWdZKTtcclxuICAgIHRoaXMuc3ByaXRlLnNldCgnbGVmdCcsIHRoaXMuaW1nWCk7XHJcbiAgICB0aGlzLnggPSB0aGlzLmltZ1ggKyB0aGlzLndpZHRoLzI7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmltZ1kgKyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuc3ByaXRlLnNldENvb3JkcygpO1xyXG4gIH1cclxuICBcclxuICBjYWxjdWxhdGVTaXplRnJvbVlQb3MoeSkge1xyXG4gICAgbGV0IHBlcmMgPSAoeS10aGlzLmxvY2F0aW9uLnZhbmlzaGluZ1BvaW50KS8odGhpcy5sb2NhdGlvbi5oZWlnaHQgLSB0aGlzLmxvY2F0aW9uLnZhbmlzaGluZ1BvaW50KTtcclxuICAgIGxldCBuZXdIID0gKHRoaXMubWF4SGVpZ2h0ICogcGVyYyk7XHJcbiAgICBsZXQgbmV3VyA9ICh0aGlzLm1heFdpZHRoL3RoaXMubWF4SGVpZ2h0KSAqIG5ld0g7XHJcbiAgICByZXR1cm4ge3c6bmV3VywgaDpuZXdIfTtcclxuICB9XHJcbiAgXHJcbiAgc2NhbGVTcHJpdGVCeVlDb29yZCh5KSB7XHJcbiAgICBsZXQgb2xkSCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgbGV0IG9sZFcgPSB0aGlzLndpZHRoO1xyXG4gICAgaWYgKCFvbGRIKSB7XHJcbiAgICAgIG9sZEggPSB0aGlzLm1heEhlaWdodDtcclxuICAgIH1cclxuICAgIGlmICghb2xkVykge1xyXG4gICAgICBvbGRXID0gdGhpcy5tYXhXaWR0aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemVGcm9tWVBvcyh5KTtcclxuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9IZWlnaHQoc2l6ZS5oKTtcclxuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9XaWR0aChzaXplLncpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBzaXplLmg7XHJcbiAgICB0aGlzLndpZHRoID0gc2l6ZS53O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxuICBnZXRYKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy54KTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0WSgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkanVzdFpQb3NpdGlvbigpIHtcclxuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxvY2F0aW9uLmRlY29yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChHbG9iYWxzLmlzSW50ZXJzZWN0aW5nKHRoaXMuc3ByaXRlLCB0aGlzLmxvY2F0aW9uLmRlY29yW2ldLnNwcml0ZSkpIHtcclxuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBkZWNvclogPj0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oZGVjb3JaKzEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oZGVjb3JaLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5hY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldID09IHRoaXMpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xyXG4gICAgICAgIGxldCBhY3RvclogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5zcHJpdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgYWN0b3JaID49IG15Wikge1xyXG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIGFjdG9yWiA8PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhhY3RvclotMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpKSB7XHJcbiAgICAgIGxldCBwbGF5ZXJaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpO1xyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgcGxheWVyWiA+PSBteVopIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWisxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmdldFBsYXllcigpLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIHBsYXllclogPD0gbXlaKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKHBsYXllclotMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spIHtcclxuICAgIGlmICh0aGlzLmFuaW1hdGluZ0NvdW50IDwgcGF0aC5sZW5ndGgpIHtcclxuICAgICAgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPCB0aGlzLmdldFgoKSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNMZWZ0KTtcclxuICAgICAgfSBlbHNlIGlmIChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzBdID4gdGhpcy5nZXRYKCkpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gPCB0aGlzLmdldFkoKSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNVcCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF0aFt0aGlzLmFuaW1hdGluZ0NvdW50XVswXSA+IHRoaXMuZ2V0WSgpKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY0RlZmF1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdtdicsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMuc2NhbGVTcHJpdGVCeVlDb29yZChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdKTtcclxuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgnbGVmdCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykgfSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ3RvcCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gLSB0aGlzLmhlaWdodCwge2R1cmF0aW9uOjEwMCwgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ291bnQrKztcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmdDb3VudCU0ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ01vdmVzLS07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtJywgdGhpcy5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spO1xyXG4gICAgICB9fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbWFpbmluZ01vdmVzLS07XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA8IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjTGVmdCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA+IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhdGhbcGF0aC5sZW5ndGgtMV1bMV0gPCBwYXRoW3BhdGgubGVuZ3RoLTJdWzFdKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY1VwKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNEZWZhdWx0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy54ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVswXTtcclxuICAgICAgdGhpcy55ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcclxuICAgICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHBhdGhbcGF0aC5sZW5ndGgtMV1bMV0pO1xyXG4gICAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCdsZWZ0JywgcGF0aFtwYXRoLmxlbmd0aC0xXVswXSAtIHRoaXMud2lkdGgvMiwge2R1cmF0aW9uOjEwMCwgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSB9KTtcclxuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJywgcGF0aFtwYXRoLmxlbmd0aC0xXVsxXSAtIHRoaXMuaGVpZ2h0LCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpfSk7XHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGp1c3RaUG9zaXRpb24oKTtcclxuICB9XHJcbiAgXHJcbiAgd2Fsa1JvdXRlKHBhdGgsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zb2xlLmxvZygnd2Fsa3JvdXRlIGNhbGxiYWNrJywgY2FsbGJhY2spO1xyXG4gICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcclxuICAgIHRoaXMuYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spO1xyXG4gIH1cclxuICBcclxufSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHNlbGYuaW1wb3J0U2NyaXB0cyhzZWxmLmxvY2F0aW9uLm9yaWdpbiArICcvanMvdGhpcmQtcGFydHkvcGF0aGZpbmRpbmctYnJvd3Nlci5taW4uanMnKTtcclxuICBcclxuICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEwMjQsIDc2OCk7XHJcbiAgc2VsZi53YWxrUGF0aCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIFxyXG4gIHNlbGYuY2FuY2VsID0gZmFsc2U7XHJcblxyXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgIGlmICghZXZlbnQpIHJldHVybjtcclxuICAgIFxyXG4gICAgc3dpdGNoKGV2ZW50LmRhdGEuY29tbWFuZCkge1xyXG4gICAgICBjYXNlICdnZW5lcmF0ZVdhbGtQYXRoJzpcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFrZSB3YWxrcGF0aCcpO1xyXG4gICAgICAgIHNlbGYud2Fsa1BhdGguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5tb3ZlVG8oZXZlbnQuZGF0YS5wYXRoWzBdLngsIGV2ZW50LmRhdGEucGF0aFswXS55KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBldmVudC5kYXRhLnBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHNlbGYud2Fsa1BhdGgubGluZVRvKGV2ZW50LmRhdGEucGF0aFtpXS54LCBldmVudC5kYXRhLnBhdGhbaV0ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYud2Fsa1BhdGguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5maWxsKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5zYXZlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NhbmNlbFRocmVhZCc6XHJcbiAgICAgICAgc2VsZi5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICghc2VsZi5jYW5jZWwpIHtcclxuICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVcgPSBNYXRoLmNlaWwoZXZlbnQuZGF0YS53aWR0aC9ldmVudC5kYXRhLmdyaWR3aWR0aCo0KTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlSCA9IE1hdGguY2VpbChldmVudC5kYXRhLmhlaWdodC9ldmVudC5kYXRhLmdyaWRoZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKHNjYWxlVywgc2NhbGVIKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2NhbGVXOyBpKyspIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBzPTA7IHMgPCBzY2FsZUg7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2Fsa1BhdGguaXNQb2ludEluUGF0aChpKmV2ZW50LmRhdGEuZ3JpZHdpZHRoLCBzKmV2ZW50LmRhdGEuZ3JpZGhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1ZScsIGksIHMpO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLnNldFdhbGthYmxlQXQoaSwgcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdmYWxzZScsIGksIHMpO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLnNldFdhbGthYmxlQXQoaSwgcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcGF0aGZpbmRlciA9IG5ldyBQRi5EaWprc3RyYUZpbmRlcih7XHJcbiAgICAgICAgICAgICAgYWxsb3dEaWFnb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICBkb250Q3Jvc3NDb3JuZXJzOmZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYmoucGF0aCA9IHBhdGhmaW5kZXIuZmluZFBhdGgoTWF0aC5yb3VuZChldmVudC5kYXRhLnN0YXJ0LngvZXZlbnQuZGF0YS5ncmlkd2lkdGgpLCBNYXRoLnJvdW5kKGV2ZW50LmRhdGEuc3RhcnQueS9ldmVudC5kYXRhLmdyaWRoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChldmVudC5kYXRhLmVuZC54L2V2ZW50LmRhdGEuZ3JpZHdpZHRoKSwgTWF0aC5yb3VuZChldmVudC5kYXRhLmVuZC55L2V2ZW50LmRhdGEuZ3JpZGhlaWdodCksIGdyaWQpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1YWdodCcsIGVycm9yKTtcclxuICAgICAgICAgICAgb2JqLmVyciA9IGVycm9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqLnN0YXJ0ID0ge307XHJcbiAgICAgICAgICBvYmouZW5kID0ge307XHJcbiAgICAgICAgICBvYmouc3RhcnQueCA9IGV2ZW50LmRhdGEuc3RhcnQueDtcclxuICAgICAgICAgIG9iai5zdGFydC55ID0gZXZlbnQuZGF0YS5zdGFydC55O1xyXG4gICAgICAgICAgb2JqLmVuZC54ID0gZXZlbnQuZGF0YS5lbmQueDtcclxuICAgICAgICAgIG9iai5lbmQueSA9IGV2ZW50LmRhdGEuZW5kLnk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5ucGMpIHtcclxuICAgICAgICAgICAgb2JqLm5wYyA9IGV2ZW50LmRhdGEubnBjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqLmlkID0gZXZlbnQuZGF0YS5pZDtcclxuICAgICAgICAgIHBvc3RNZXNzYWdlKG9iaik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuY2FuY2VsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnO1xyXG5pbXBvcnQge1dlYXBvbn0gZnJvbSAnLi9XZWFwb24uanN4J1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoaWQsIGNhbnZhcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5sb2NhdGlvbjtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5uYW1lID0gJ3lvdSc7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJ5b3UndmUgc2VlbiBiZXR0ZXIgZGF5cywgZm9yIHN1cmVcIjtcclxuXHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuaW1nWCA9IDQwO1xyXG4gICAgdGhpcy5pbWdZID0gNDAwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICB0aGlzLm1heEhlaWdodCA9IDA7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gMDtcclxuICAgIHRoaXMuYW5pbWF0aW5nQ291bnQgPSAwO1xyXG4gICAgdGhpcy5idW1EZWZhdWx0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbUludGVydmFsO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoZWV0ID0gey4uLnRoaXMuY2hhcmFjdGVyU2hlZXR9O1xyXG4gICAgXHJcbiAgICB0aGlzLnJlbWFpbmluZ01vdmVzID0gdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZDtcclxuXHJcbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVGFyZ2V0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcclxuICAgIFxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcclxuICAgIHRoaXMudGVhbSA9IDE7XHJcblxyXG4gICAgbGV0IGZpc3QgPSBuZXcgV2VhcG9uKCdiMWFlNTFiMS1jOWI5LTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnKTtcclxuICAgIGZpc3QuaW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9XRUFQT05fUkVBRFksIGV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3coZmlzdCk7XHJcbiAgICAgIHRoaXMuZXF1aXAoZmlzdCk7XHJcbiAgICB9KTtcclxuICAgIGZpc3QubG9hZCgpO1xyXG4gIH1cclxuICBcclxuICBzdG93KGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LnB1c2goaXRlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIGRyb3AoaXRlbSkge1xyXG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmludmVudG9yeS5zcGxpY2UodGhpcy5pbnZlbnRvcnkuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGVxdWlwKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVxdWlwcGVkID0gaXRlbTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5lcXVpcHBlZCcpLnNyYyA9IHRoaXMuZXF1aXBwZWQuaW1nLnNyYztcclxuICB9XHJcbiAgXHJcbiAgZ2V0RXF1aXBwZWRXZWFwb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lcXVpcHBlZDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0U21lbGxMYWJlbChzbWVsbCkge1xyXG4gICAgbGV0IHNtZWxscyA9IFsnTk9YSU9VUycsICdESVNHVVNUSU5HJywgJ0ZPVUwnLCAnTk9UIEdSRUFUJywgJ01JTEQnXTtcclxuICAgIGxldCBjb2xvcnMgPSBbJyNmNTU0NDInLCAnI2Y1YzI0MicsICcjZWZmNTQyJywgJyNiOWY1NDInLCAnIzQyZjU3YiddO1xyXG4gICAgcmV0dXJuIFtzbWVsbHNbc21lbGxdLCBjb2xvcnNbc21lbGxdXTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5idW1EZWZhdWx0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuYnVtRGVmYXVsdC53aWR0aDtcclxuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuYnVtRGVmYXVsdC5oZWlnaHQ7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmJ1bURlZmF1bHQud2lkdGg7XHJcblxyXG4gICAgICB0aGlzLnNwcml0ZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5idW1EZWZhdWx0LCB7XHJcbiAgICAgICAgbGVmdDogdGhpcy5pbWdYLFxyXG4gICAgICAgIHRvcDogdGhpcy5pbWdZLFxyXG4gICAgICAgIHNlbGVjdGFibGU6ZmFsc2UsXHJcbiAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB7fTtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB0aGlzO1xyXG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkIHBsYXllciBzcHJpdGUnKTtcclxuICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUExBWUVSX1JFQURZKSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5idW1EZWZhdWx0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9kZWZhdWx0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtTGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5idW1MZWZ0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9sZWZ0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtUmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuYnVtUmlnaHQuc3JjID0gJ2ltZy9wZW9wbGUvYnVtX3JpZ2h0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtVXAgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuYnVtVXAuc3JjID0gJ2ltZy9wZW9wbGUvYnVtX2JhY2t3YXJkcy5wbmcnO1xyXG4gICAgXHJcbiAgICB0aGlzLndhbGtSaWdodEZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy53YWxrTGVmdEZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy53YWxrVXBGcmFtZXMgPSBbXTtcclxuICAgIHRoaXMud2Fsa0Rvd25GcmFtZXMgPSBbXTtcclxuICAgIHRoaXMudGFsa0ZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy5wdW5jaExlZnRGcmFtZXMgPSBbXTtcclxuICAgIHRoaXMucHVuY2hSaWdodEZyYW1lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgZGJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhbmltYXRpb25zLycgKyB0aGlzLmlkKTtcclxuICAgIGlmIChkYkluZm8pIHtcclxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGJJbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5zcmMgPSBHbG9iYWxzLkFOSU1BVElPTlNfRElSICsgZGJJbmZvW2ldLnVybDtcclxuICAgICAgICBzd2l0Y2goZGJJbmZvW2ldLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ3dhbGtfbGVmdCc6XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMucHVzaChpbWcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3dhbGtfcmlnaHQnOlxyXG4gICAgICAgICAgICB0aGlzLndhbGtSaWdodEZyYW1lcy5wdXNoKGltZyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnd2Fsa191cCc6XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa1VwRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd3YWxrX2Rvd24nOlxyXG4gICAgICAgICAgICB0aGlzLndhbGtEb3duRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd0YWxrJzpcclxuICAgICAgICAgICAgdGhpcy50YWxrRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdwdW5jaF9sZWZ0JzpcclxuICAgICAgICAgICAgdGhpcy5wdW5jaExlZnRGcmFtZXMucHVzaChpbWcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3B1bmNoX3JpZ2h0JzpcclxuICAgICAgICAgICAgdGhpcy5wdW5jaFJpZ2h0RnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNhbXBsZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzYW1wbGVcIiwgdGhpcyk7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmltZ1ggPSB0aGlzLmltZ1ggKyBNYXRoLmFicyh0aGlzLm1heFdpZHRoIC0gdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgdGhpcy5zcHJpdGUuc2V0KCd0b3AnLCB0aGlzLmltZ1kpO1xyXG4gICAgdGhpcy5zcHJpdGUuc2V0KCdsZWZ0JywgdGhpcy5pbWdYKTtcclxuICAgIHRoaXMueCA9IHRoaXMuaW1nWCArIHRoaXMud2lkdGgvMjtcclxuICAgIHRoaXMueSA9IHRoaXMuaW1nWSArIHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGUuc2V0Q29vcmRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpIHtcclxuICAgIGxldCBwZXJjID0gKHktdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCkvKHRoaXMubG9jYXRpb24uaGVpZ2h0IC0gdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCk7XHJcbiAgICBsZXQgbmV3SCA9ICh0aGlzLm1heEhlaWdodCAqIHBlcmMpO1xyXG4gICAgbGV0IG5ld1cgPSAodGhpcy5tYXhXaWR0aC90aGlzLm1heEhlaWdodCkgKiBuZXdIO1xyXG4gICAgcmV0dXJuIHt3Om5ld1csIGg6bmV3SH07XHJcbiAgfVxyXG4gIFxyXG4gIHNjYWxlU3ByaXRlQnlZQ29vcmQoeSkge1xyXG4gICAgbGV0IG9sZEggPSB0aGlzLmhlaWdodDtcclxuICAgIGxldCBvbGRXID0gdGhpcy53aWR0aDtcclxuICAgIGlmICghb2xkSCkge1xyXG4gICAgICBvbGRIID0gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIW9sZFcpIHtcclxuICAgICAgb2xkVyA9IHRoaXMubWF4V2lkdGg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBzaXplID0gdGhpcy5jYWxjdWxhdGVTaXplRnJvbVlQb3MoeSk7XHJcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvSGVpZ2h0KHNpemUuaCk7XHJcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvV2lkdGgoc2l6ZS53KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oO1xyXG4gICAgdGhpcy53aWR0aCA9IHNpemUudztcclxuICB9XHJcbiAgXHJcbiAgbW92ZVRvRnJvbnQoKSB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xyXG4gICAgbGV0IG15WiA9IHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMuc3ByaXRlKTtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubG9jYXRpb24uZGVjb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xyXG4gICAgICAgIGxldCBkZWNvclogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLmxvY2F0aW9uLmRlY29yW2ldLnNwcml0ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSwgJ3ZzJywgdGhpcy5nZXRZKCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGVjb3JaLCAndnMnLCBteVopO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSkge1xyXG4gICAgICAgICAgdGhpcy5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XHJcbiAgICAgICAgICAvL3RoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIGRlY29yWiA8PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclotMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FmdGVyJywgdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5zcHJpdGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5hY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLnNwcml0ZSkpIHtcclxuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uZ2V0WSgpIDw9IHRoaXMuZ2V0WSgpICYmIGFjdG9yWiA+PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhhY3RvclorMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oYWN0b3JaLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZ2V0WCgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFkoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHZhbHVlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZW1lbnRfcG9pbnRzJykuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIHJ1bkF0dGFja0FuaW1hdGlvbihkaXIpIHtcclxuICAgIGxldCBmcmFtZXM7XHJcbiAgICBzd2l0Y2goZGlyKSB7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLnB1bmNoUmlnaHRGcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMucHVuY2hMZWZ0RnJhbWVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIHRoaXMuYW5pbUluZGV4ID0gMTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGZpZ2h0IGFuaW1hdGlvbicpO1xyXG4gICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAxO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnZmlnaHRpbmcgZnJhbWUnLCBmcmFtZXNbc2VsZi5hbmltSW5kZXhdKTtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudChmcmFtZXNbdGhpcy5hbmltSW5kZXhdKTtcclxuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIHRoaXMuYW5pbUluZGV4Kys7XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBcclxuICBjYW5jZWxBbmltYXRpb25zKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1JbnRlcnZhbCk7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gbnVsbDtcclxuICAgIHRoaXMuYnVtRGVmYXVsdC5yZW1vdmVFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCwgdGhpcy53YWxrQ2FsbGJhY2spO1xyXG4gICAgdGhpcy5ydW5uaW5nV2Fsa0xlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucnVubmluZ1dhbGtSaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5ydW5uaW5nV2Fsa1VwID0gZmFsc2U7XHJcbiAgICB0aGlzLnJ1bm5pbmdXYWxrRG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5ydW5uaW5nVGFsayA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBhbmltYXRlV2Fsayh4LCB5KSB7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQoeSk7XHJcbiAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHRoaXMud2lkdGgvMixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnNwcml0ZS5hQ29vcmRzLmJsLnggKyB0aGlzLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc01vdmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSAtIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueCArIHRoaXMud2lkdGgvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzTW92aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb25Db3VudCU0ID09PSAwICYmIHRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmVtZW50UG9pbnRzRGlzcGxheSh0aGlzLnJlbWFpbmluZ01vdmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRqdXN0WlBvc2l0aW9uKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGN5Y2xlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25Db3VudCsrO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbkNvdW50LCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Db3VudCA8IHRoaXMuY3VycmVudFBhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVdhbGsodGhpcy5jdXJyZW50UGF0aFt0aGlzLmFuaW1hdGlvbkNvdW50XVswXSwgdGhpcy5jdXJyZW50UGF0aFt0aGlzLmFuaW1hdGlvbkNvdW50XVsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnZW50aXJlIHBhdGggd2Fsa2VkJyk7XHJcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VEKSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBvcGVuQ29udGFpbmVyKGRhdGEpIHtcclxuICAgIGxldCBkZWNvclJlYWR5ID0gdGhpcy5hZGp1c3RaUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIGRhdGEuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XHJcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9vcGVuJykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcclxuICAgICAgZGF0YS5pbWdVUkwgPSBjb250YWluZXJJbmZvLmltZ19vcGVuO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2V0IGltZyB0bycsIGRhdGEuaW1nVVJMKTtcclxuICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coJ2RpbWcnLCBkYXRhLmltZyk7XHJcbiAgICAgIGRhdGEuaW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XHJcbiAgICAgIGRhdGEucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGNsb3NlQ29udGFpbmVyKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XHJcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9jbG9zZScpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChjb250YWluZXJJbmZvKSB7XHJcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfY2xvc2VkO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2V0IGltZyB0bycsIGRhdGEuaW1nVVJMKTtcclxuICAgICAgZGF0YS5vcGVuID0gZmFsc2U7XHJcbiAgICAgIGRhdGEucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIHNlYXJjaENvbnRhaW5lcihkYXRhKSB7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucGFyZW50LnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2NvbnRhaW5lci8nICsgZGF0YS5pZCArICcvY29udGVudHMnKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMucHJpbnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29udGFpbmVySW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29udCcsIGNvbnRhaW5lckluZm8pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0cnlUb09wZW4oZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XHJcbiAgICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gdGhpcy5vcGVuQ29udGFpbmVyLmJpbmQodGhpcywgZGF0YSlcclxuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xyXG4gICAgICB0aGlzLndhbGtUb09iamVjdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdHJ5VG9DbG9zZShkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2sgPSB0aGlzLmNsb3NlQ29udGFpbmVyLmJpbmQodGhpcywgZGF0YSlcclxuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xyXG4gICAgICB0aGlzLndhbGtUb09iamVjdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdHJ5VG9TZWFyY2goZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XHJcbiAgICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcclxuICAgICAgICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ1BVVCcsIEdsb2JhbHMuQVBJX0RJUiArICdjb250YWluZXIvJyArIGRhdGEuaWQgKyAnL29wZW4nKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoY29udGFpbmVySW5mbykge1xyXG4gICAgICAgICAgICBsZXQgZGVjb3JSZWFkeSA9IHRoaXMuYWRqdXN0WlBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfb3BlbjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBpbWcgdG8nLCBkYXRhLmltZ1VSTCk7XHJcbiAgICAgICAgICAgIGRhdGEub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaW1nJywgZGF0YS5pbWcpO1xyXG4gICAgICAgICAgICBkYXRhLmltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfREVDT1JfUkVBRFksIGRlY29yUmVhZHkpO1xyXG4gICAgICAgICAgICBkYXRhLnJlbmRlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaENvbnRhaW5lcihkYXRhKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xyXG4gICAgICB0aGlzLndhbGtUb09iamVjdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2xpY2tlZEdyb3VuZFBhdGhSZXN1bHRzKHBhdGgpIHtcclxuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5jYW52YXMucmVtb3ZlKHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVMaW5lKTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlTGluZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5jYW52YXMucmVtb3ZlKHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVUZXh0KTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlVGV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nIHx8IE1hdGguY2VpbChwYXRoLmxlbmd0aC80KSA+IHRoaXMucmVtYWluaW5nTW92ZXMpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBhdGhbaV1bMF0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9XSURUSDtcclxuICAgICAgICBwYXRoW2ldWzFdICo9IEdsb2JhbHMuR1JJRF9TUVVBUkVfSEVJR0hUO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnb3QgcGF0aCcsIHBhdGgpO1xyXG4gICAgICB0aGlzLndhbGtSb3V0ZShwYXRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VEKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdhbGtUb09iamVjdCh0YXJnZXQpIHtcclxuICAgIGlmICghdGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xyXG4gICAgICBsZXQgc3RhcnQgPSB7fTtcclxuICAgICAgc3RhcnQueCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBzdGFydC55ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIGxldCBlbmQgPSB7fTtcclxuICAgICAgZW5kLnggPSB0YXJnZXQuZ2V0WCgpO1xyXG4gICAgICBlbmQueSA9IHRhcmdldC5nZXRZKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQnLCBlbmQueCwgZW5kLnkpO1xyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi53YWxrUGF0aC5pc1BvaW50SW5QYXRoKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAnd2Fsa1RvT2JqZWN0JztcclxuICAgICAgICBvYmouc3RhcnQgPSBzdGFydDtcclxuICAgICAgICBvYmouZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uZmluZFBhdGgob2JqKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBydW5XYWxrQW5pbWF0aW9uKGRpcikge1xyXG4gICAgbGV0IGZyYW1lcztcclxuICAgIHN3aXRjaChkaXIpIHtcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ1JpZ2h0V2FsayA9IHRydWU7XHJcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrUmlnaHRGcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ0xlZnRXYWxrID0gdHJ1ZTtcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtMZWZ0RnJhbWVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nVXBXYWxrID0gdHJ1ZTtcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtVcEZyYW1lcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nRG93bldhbGsgPSB0cnVlO1xyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMud2Fsa0Rvd25GcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RhbGsnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ1RhbGsgPSB0cnVlO1xyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMudGFsa0ZyYW1lcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQoZnJhbWVzW3RoaXMuYW5pbUluZGV4XSk7XHJcbiAgICAgIHRoaXMuYW5pbUluZGV4Kys7XHJcbiAgICB9LCAyNTApO1xyXG4gICAgXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KGZyYW1lc1t0aGlzLmFuaW1JbmRleF0pO1xyXG4gICAgdGhpcy5hbmltSW5kZXgrKztcclxuICB9XHJcbiAgXHJcbiAgd2Fsa1JvdXRlKHBhdGgpIHtcclxuICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hbmltYXRpb25Db3VudCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gcGF0aDtcclxuICAgIHRoaXMud2Fsa0NhbGxiYWNrID0gdGhpcy5jeWNsZUFuaW1hdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmJ1bURlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQsIHRoaXMud2Fsa0NhbGxiYWNrKTtcclxuICAgIFxyXG4gICAgbGV0IHggPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdO1xyXG4gICAgbGV0IHkgPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzFdO1xyXG4gICAgXHJcbiAgICBpZiAoeCA8IHRoaXMuZ2V0WCgpKSB7XHJcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbignbGVmdCcpO1xyXG4gICAgfSBlbHNlIGlmICh4ID4gdGhpcy5nZXRYKCkpIHtcclxuICAgICAgdGhpcy5ydW5XYWxrQW5pbWF0aW9uKCdyaWdodCcpO1xyXG4gICAgfSBlbHNlIGlmICh5IDwgdGhpcy5nZXRZKCkpIHtcclxuICAgICAgdGhpcy5ydW5XYWxrQW5pbWF0aW9uKCd1cCcpO1xyXG4gICAgfSBlbHNlIGlmICh5ID4gdGhpcy5nZXRZKCkpIHtcclxuICAgICAgdGhpcy5ydW5XYWxrQW5pbWF0aW9uKCdkb3duJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMF0sIHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMV0pO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiBleHRlbmRzIEVuZ2luZSB7XHJcbiAgXHJcbiAgXHJcbiAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnR5cGUgPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTjtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuZGFtYWdlID0gMDtcclxuICAgIHRoaXMuaWNvbl91cmwgPSAnJztcclxuICAgIHRoaXMubWVsZWUgPSB0cnVlO1xyXG4gICAgdGhpcy5uYW1lID0gJ3dlYXBvbic7XHJcbiAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgIHRoaXMucmFuZ2UgPSAxO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCB3ZWFwb25JbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICd3ZWFwb24vJyArIHRoaXMuaWQpO1xyXG4gICAgaWYgKHdlYXBvbkluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYXAnLCB3ZWFwb25JbmZvKTtcclxuICAgICAgdGhpcy5kYW1hZ2UgPSB3ZWFwb25JbmZvLmRhbWFnZTtcclxuICAgICAgdGhpcy5pY29uX3VybCA9IHdlYXBvbkluZm8uaWNvbl91cmw7XHJcbiAgICAgIHRoaXMubWVsZWUgPSB3ZWFwb25JbmZvLm1lbGVlO1xyXG4gICAgICB0aGlzLm5hbWUgPSB3ZWFwb25JbmZvLm5hbWU7XHJcbiAgICAgIHRoaXMuc3BlZWQgPSB3ZWFwb25JbmZvLnNwZWVkO1xyXG4gICAgICB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9XRUFQT05fUkVBRFkpKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy5pY29uX3VybDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJXb3JrZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29ya2VyKSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHdvcmtlci50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbJygnK2NvZGUrJykoKSddKTtcclxuICAgICAgICByZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCB7R2xvYmFsc30gZnJvbSAnLi9HbG9iYWxzLmpzeCc7XHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuL1BsYXllci5qc3gnXHJcbmltcG9ydCB7QXJlYX0gZnJvbSAnLi9BcmVhLmpzeCdcclxuaW1wb3J0IHtEZWNvcn0gZnJvbSAnLi9EZWNvci5qc3gnXHJcbmltcG9ydCB7TlBDfSBmcm9tICcuL05QQy5qc3gnXHJcblxyXG5sZXQgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRUdXJuQnRuJykub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBlbmdpbmUuZW5kQ29tYmF0VHVybigpO1xyXG4gIH07XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXJhY3RlclNoZWV0QnRuJykub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBlbmdpbmUuc2hvd0NoYXJhY3RlclNoZWV0KCk7XHJcbiAgfTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0TW9kZUJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZW5naW5lLmVudGVyVGFyZ2V0aW5nTW9kZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgbGV0IHN0YXJ0QXJlYUlEID0gJzI5Yzk0NzA4LWM0NGMtMTFlOS1iYzk3LTBlNDlmMWY4ZTc3Yyc7XHJcbiAgbGV0IHRlbXBQbGF5ZXJJRCA9ICc0MzU1NDAxOC1jNDRiLTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnO1xyXG4gIFxyXG4gIGVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRlbXBQbGF5ZXJJRCwgZW5naW5lLmNhbnZhcyk7XHJcbiAgXHJcbiAgZW5naW5lLnBsYXllci5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QTEFZRVJfUkVBRFksIGV2ZW50ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBsZXQgZGJJbmZvID0gYXdhaXQgZW5naW5lLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FyZWEvJyArIHN0YXJ0QXJlYUlEKTtcclxuICAgIGlmIChkYkluZm8pIHtcclxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhID0gbmV3IEFyZWEoc3RhcnRBcmVhSUQsIGVuZ2luZS5jYW52YXMpO1xyXG4gICAgICBlbmdpbmUuY3VycmVudEFyZWEuYWN0b3JzLnB1c2goZW5naW5lLnBsYXllcik7XHJcbiAgICAgIGVuZ2luZS5wbGF5ZXIubG9jYXRpb24gPSBlbmdpbmUuY3VycmVudEFyZWE7XHJcbiAgICAgIFxyXG4gICAgICBlbmdpbmUuY3VycmVudEFyZWEubG9hZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9BUkVBX1JFQURZLCBldmVudCA9IGFzeW5jKCkgPT4geyAgXHJcbiAgICAgICAgZW5naW5lLnBsYXllci5yZXNhbXBsZSgpO1xyXG4gICAgICAgIGVuZ2luZS5wbGF5ZXIuc3ByaXRlLmJyaW5nVG9Gcm9udCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkZWNvckluZm8gPSBhd2FpdCBlbmdpbmUucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnYXJlYS8nICsgZW5naW5lLmN1cnJlbnRBcmVhLmlkICsgJy9kZWNvcicpO1xyXG4gICAgICAgIGlmIChkZWNvckluZm8pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWNvcicsIGRlY29ySW5mbyk7XHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBkZWNvckluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlY29yID0gbmV3IERlY29yKGRlY29ySW5mb1tpXSwgZW5naW5lLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIGRlY29yLmxvY2F0aW9uID0gZW5naW5lLmN1cnJlbnRBcmVhO1xyXG4gICAgICAgICAgICBkZWNvci5yZW5kZXIoKTtcclxuICAgICAgICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmRlY29yLnB1c2goZGVjb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBucGNJbmZvID0gYXdhaXQgZW5naW5lLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FyZWEvJyArIGVuZ2luZS5jdXJyZW50QXJlYS5pZCArICcvbnBjcycpO1xyXG4gICAgICAgICAgaWYgKG5wY0luZm8pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbnBjSW5mby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBucGMgPSBuZXcgTlBDKG5wY0luZm9baV0uaWQsIGVuZ2luZS5jYW52YXMpO1xyXG4gICAgICAgICAgICAgIG5wYy5uYW1lID0gbnBjSW5mb1tpXS5uYW1lO1xyXG4gICAgICAgICAgICAgIG5wYy5kZXNjcmlwdGlvbiA9IG5wY0luZm9baV0uZGVzY3I7XHJcbiAgICAgICAgICAgICAgbnBjLnRlYW0gPSBucGNJbmZvW2ldLnRlYW07XHJcbiAgICAgICAgICAgICAgbnBjLmltZ1ggPSBucGNJbmZvW2ldLng7XHJcbiAgICAgICAgICAgICAgbnBjLmltZ1kgPSBucGNJbmZvW2ldLnk7XHJcbiAgICAgICAgICAgICAgbnBjLmxvY2F0aW9uID0gZW5naW5lLmN1cnJlbnRBcmVhO1xyXG4gICAgICAgICAgICAgIG5wYy5ucGNEZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9OUENfUkVBRFksIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3VycmVudEFyZWEuYWN0b3JzLnB1c2gobnBjKTtcclxuICAgICAgICAgICAgICAgIG5wYy5yZXNhbXBsZSgpO1xyXG4gICAgICAgICAgICAgICAgbnBjLnNwcml0ZS5icmluZ1RvRnJvbnQoKTtcclxuICAgICAgICAgICAgICAgIC8vZW5naW5lLmN1cnJlbnRBcmVhLmVudGVyQ29tYmF0KCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbnBjLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbmdpbmUucGxheWVyLnNwcml0ZS5icmluZ1RvRnJvbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbmdpbmUuY3VycmVudEFyZWEucmVuZGVyQmFja2dyb3VuZCgpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGVuZ2luZS5wcmludCgnWW91IGVudGVyIDxiPicgKyBkYkluZm8ubmFtZS50b0xvd2VyQ2FzZSgpICsgJzwvYj4uJyk7XHJcbiAgICAgIGVuZ2luZS5wcmludChkYkluZm8uZGVzY3JpcHRpb24sIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGVuZ2luZS5wbGF5ZXIucmVuZGVyKCk7XHJcbn0iXX0=
