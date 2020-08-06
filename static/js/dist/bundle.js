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
            this.updateRemainingMoves(0);
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

        var enemyPos, obj, results;
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
                obj.path = this.area.walkPoints;
                _context3.prev = 15;
                _context3.next = 18;
                return _Globals.Globals.SendToWorker(obj);

              case 18:
                results = _context3.sent;
                console.log('pt', results.path);

                if (results.path) {
                  results.path = results.path.splice(0, results.path.length - 1);
                }

                if (results.path && Math.ceil(results.path.length / 4) > npc.equipped.range) {
                  if (results.path.length / 4 > npc.characterSheet.stats.speed) {
                    results.path = results.path.splice(0, npc.characterSheet.stats.speed * 4);
                  }

                  if (npc.remainingMoves - Math.ceil(results.path.length / 4) >= npc.equipped.speed) {
                    npc.walkRoute(results.path, this.runNPCAttacks.bind(this, npc));
                  } else {
                    npc.walkRoute(results.path, this.handleNPCEndTurn.bind(this, npc));
                  }
                } else {
                  this.runNPCAttacks(npc);
                }

                _context3.next = 27;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](15);
                console.log(_context3.t0);

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[15, 24]]);
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
        }

        var resolve = _this.resolves[event.data.id];

        if (resolve) {
          resolve(event.data);
        }

        delete _this.resolves[event.data.id];
        delete _this.rejects[event.data.id];
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

            for (var _i2 = 0; _i2 < obj.path.length; _i2++) {
              obj.path[_i2][0] *= event.data.gridwidth;
              obj.path[_i2][1] *= event.data.gridheight;
            }
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
                return this.queryBackend('GET', _Globals.Globals.API_DIR + 'container/' + data.id + '/contents')["catch"](function (err) {
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

        console.log('got path', path);
        this.walkRoute(path);
      } else {
        this.bumDefault.dispatchEvent(new Event(_Globals.Globals.EVENT_PATH_WALKED));
      }
    }
  }, {
    key: "walkToObject",
    value: function () {
      var _walkToObject = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(target) {
        var start, end, obj, results;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.location.combatOn) {
                  _context7.next = 27;
                  break;
                }

                console.log('tr', target);
                start = {};
                start.x = this.getX();
                start.y = this.getY();
                end = {};
                end.x = target.getX();
                end.y = target.getY();

                if (!this.location.walkPath.isPointInPath(end.x, end.y)) {
                  _context7.next = 27;
                  break;
                }

                obj = {};
                obj.command = 'walkToObject';
                obj.start = start;
                obj.end = end;
                obj.path = this.location.walkPoints;
                obj.width = this.location.width;
                obj.height = this.location.height;
                console.log(obj);
                _context7.prev = 17;
                _context7.next = 20;
                return _Globals.Globals.SendToWorker(obj);

              case 20:
                results = _context7.sent;
                this.walkRoute(results.path);
                _context7.next = 27;
                break;

              case 24:
                _context7.prev = 24;
                _context7.t0 = _context7["catch"](17);
                console.log(_context7.t0);

              case 27:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[17, 24]]);
      }));

      function walkToObject(_x5) {
        return _walkToObject.apply(this, arguments);
      }

      return walkToObject;
    }()
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
      console.log('path', path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pmYWNlL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hlYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaGVhcC9saWIvaGVhcC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvUGF0aEZpbmRpbmcuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2NvcmUvRGlhZ29uYWxNb3ZlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9HcmlkLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL0hldXJpc3RpYy5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9Ob2RlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL1V0aWwuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmVzdEZpcnN0RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0JpQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCZXN0Rmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlEaWprc3RyYUZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9CcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvRGlqa3N0cmFGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSURBU3RhckZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0pQRk5ldmVyTW92ZURpYWdvbmFsbHkuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSnVtcFBvaW50RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0p1bXBQb2ludEZpbmRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3RhdGljL2pzL3NyYy9BcmVhLmpzeCIsInN0YXRpYy9qcy9zcmMvQ29tYmF0TWFuYWdlci5qc3giLCJzdGF0aWMvanMvc3JjL0RlY29yLmpzeCIsInN0YXRpYy9qcy9zcmMvRW5naW5lLmpzeCIsInN0YXRpYy9qcy9zcmMvR2xvYmFscy5qc3giLCJzdGF0aWMvanMvc3JjL05QQy5qc3giLCJzdGF0aWMvanMvc3JjL1BhdGhmaW5kV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvUGxheWVyLmpzeCIsInN0YXRpYy9qcy9zcmMvV2VhcG9uLmpzeCIsInN0YXRpYy9qcy9zcmMvV2ViV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvbWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalhBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cUIsWUFBckI7O0FBakM0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBN0U7QUFvQ0EsZ0JBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsZ0JBQW5CO0FBR0EsZ0JBQUEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxrQkFBa0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxXQUFaLEVBQWxCLEdBQThDLE9BQTNEO0FBQ0EsZ0JBQUEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxNQUFNLENBQUMsV0FBcEIsRUFBaUMsSUFBakM7QUFDRDs7QUFoRDJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBM0U7QUFrREEsRUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLE1BQWQ7QUFDRCxDQW5FRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaGVhcCcpO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjguMFxuKGZ1bmN0aW9uKCkge1xuICB2YXIgSGVhcCwgZGVmYXVsdENtcCwgZmxvb3IsIGhlYXBpZnksIGhlYXBwb3AsIGhlYXBwdXNoLCBoZWFwcHVzaHBvcCwgaGVhcHJlcGxhY2UsIGluc29ydCwgbWluLCBubGFyZ2VzdCwgbnNtYWxsZXN0LCB1cGRhdGVJdGVtLCBfc2lmdGRvd24sIF9zaWZ0dXA7XG5cbiAgZmxvb3IgPSBNYXRoLmZsb29yLCBtaW4gPSBNYXRoLm1pbjtcblxuXG4gIC8qXG4gIERlZmF1bHQgY29tcGFyaXNvbiBmdW5jdGlvbiB0byBiZSB1c2VkXG4gICAqL1xuXG4gIGRlZmF1bHRDbXAgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgaWYgKHggPCB5KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh4ID4geSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG5cbiAgLypcbiAgSW5zZXJ0IGl0ZW0geCBpbiBsaXN0IGEsIGFuZCBrZWVwIGl0IHNvcnRlZCBhc3N1bWluZyBhIGlzIHNvcnRlZC5cbiAgXG4gIElmIHggaXMgYWxyZWFkeSBpbiBhLCBpbnNlcnQgaXQgdG8gdGhlIHJpZ2h0IG9mIHRoZSByaWdodG1vc3QgeC5cbiAgXG4gIE9wdGlvbmFsIGFyZ3MgbG8gKGRlZmF1bHQgMCkgYW5kIGhpIChkZWZhdWx0IGEubGVuZ3RoKSBib3VuZCB0aGUgc2xpY2VcbiAgb2YgYSB0byBiZSBzZWFyY2hlZC5cbiAgICovXG5cbiAgaW5zb3J0ID0gZnVuY3Rpb24oYSwgeCwgbG8sIGhpLCBjbXApIHtcbiAgICB2YXIgbWlkO1xuICAgIGlmIChsbyA9PSBudWxsKSB7XG4gICAgICBsbyA9IDA7XG4gICAgfVxuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgaWYgKGxvIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsbyBtdXN0IGJlIG5vbi1uZWdhdGl2ZScpO1xuICAgIH1cbiAgICBpZiAoaGkgPT0gbnVsbCkge1xuICAgICAgaGkgPSBhLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIG1pZCA9IGZsb29yKChsbyArIGhpKSAvIDIpO1xuICAgICAgaWYgKGNtcCh4LCBhW21pZF0pIDwgMCkge1xuICAgICAgICBoaSA9IG1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvID0gbWlkICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChbXS5zcGxpY2UuYXBwbHkoYSwgW2xvLCBsbyAtIGxvXS5jb25jYXQoeCkpLCB4KTtcbiAgfTtcblxuXG4gIC8qXG4gIFB1c2ggaXRlbSBvbnRvIGhlYXAsIG1haW50YWluaW5nIHRoZSBoZWFwIGludmFyaWFudC5cbiAgICovXG5cbiAgaGVhcHB1c2ggPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBfc2lmdGRvd24oYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtIDEsIGNtcCk7XG4gIH07XG5cblxuICAvKlxuICBQb3AgdGhlIHNtYWxsZXN0IGl0ZW0gb2ZmIHRoZSBoZWFwLCBtYWludGFpbmluZyB0aGUgaGVhcCBpbnZhcmlhbnQuXG4gICAqL1xuXG4gIGhlYXBwb3AgPSBmdW5jdGlvbihhcnJheSwgY21wKSB7XG4gICAgdmFyIGxhc3RlbHQsIHJldHVybml0ZW07XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBsYXN0ZWx0ID0gYXJyYXkucG9wKCk7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuaXRlbSA9IGFycmF5WzBdO1xuICAgICAgYXJyYXlbMF0gPSBsYXN0ZWx0O1xuICAgICAgX3NpZnR1cChhcnJheSwgMCwgY21wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuaXRlbSA9IGxhc3RlbHQ7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5pdGVtO1xuICB9O1xuXG5cbiAgLypcbiAgUG9wIGFuZCByZXR1cm4gdGhlIGN1cnJlbnQgc21hbGxlc3QgdmFsdWUsIGFuZCBhZGQgdGhlIG5ldyBpdGVtLlxuICBcbiAgVGhpcyBpcyBtb3JlIGVmZmljaWVudCB0aGFuIGhlYXBwb3AoKSBmb2xsb3dlZCBieSBoZWFwcHVzaCgpLCBhbmQgY2FuIGJlXG4gIG1vcmUgYXBwcm9wcmlhdGUgd2hlbiB1c2luZyBhIGZpeGVkIHNpemUgaGVhcC4gTm90ZSB0aGF0IHRoZSB2YWx1ZVxuICByZXR1cm5lZCBtYXkgYmUgbGFyZ2VyIHRoYW4gaXRlbSEgVGhhdCBjb25zdHJhaW5zIHJlYXNvbmFibGUgdXNlIG9mXG4gIHRoaXMgcm91dGluZSB1bmxlc3Mgd3JpdHRlbiBhcyBwYXJ0IG9mIGEgY29uZGl0aW9uYWwgcmVwbGFjZW1lbnQ6XG4gICAgICBpZiBpdGVtID4gYXJyYXlbMF1cbiAgICAgICAgaXRlbSA9IGhlYXByZXBsYWNlKGFycmF5LCBpdGVtKVxuICAgKi9cblxuICBoZWFwcmVwbGFjZSA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBjbXApIHtcbiAgICB2YXIgcmV0dXJuaXRlbTtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIHJldHVybml0ZW0gPSBhcnJheVswXTtcbiAgICBhcnJheVswXSA9IGl0ZW07XG4gICAgX3NpZnR1cChhcnJheSwgMCwgY21wKTtcbiAgICByZXR1cm4gcmV0dXJuaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIEZhc3QgdmVyc2lvbiBvZiBhIGhlYXBwdXNoIGZvbGxvd2VkIGJ5IGEgaGVhcHBvcC5cbiAgICovXG5cbiAgaGVhcHB1c2hwb3AgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBpZiAoYXJyYXkubGVuZ3RoICYmIGNtcChhcnJheVswXSwgaXRlbSkgPCAwKSB7XG4gICAgICBfcmVmID0gW2FycmF5WzBdLCBpdGVtXSwgaXRlbSA9IF9yZWZbMF0sIGFycmF5WzBdID0gX3JlZlsxXTtcbiAgICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG5cbiAgLypcbiAgVHJhbnNmb3JtIGxpc3QgaW50byBhIGhlYXAsIGluLXBsYWNlLCBpbiBPKGFycmF5Lmxlbmd0aCkgdGltZS5cbiAgICovXG5cbiAgaGVhcGlmeSA9IGZ1bmN0aW9uKGFycmF5LCBjbXApIHtcbiAgICB2YXIgaSwgX2ksIF9qLCBfbGVuLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHMsIF9yZXN1bHRzMTtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIF9yZWYxID0gKGZ1bmN0aW9uKCkge1xuICAgICAgX3Jlc3VsdHMxID0gW107XG4gICAgICBmb3IgKHZhciBfaiA9IDAsIF9yZWYgPSBmbG9vcihhcnJheS5sZW5ndGggLyAyKTsgMCA8PSBfcmVmID8gX2ogPCBfcmVmIDogX2ogPiBfcmVmOyAwIDw9IF9yZWYgPyBfaisrIDogX2otLSl7IF9yZXN1bHRzMS5wdXNoKF9qKTsgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzMTtcbiAgICB9KS5hcHBseSh0aGlzKS5yZXZlcnNlKCk7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBpID0gX3JlZjFbX2ldO1xuICAgICAgX3Jlc3VsdHMucHVzaChfc2lmdHVwKGFycmF5LCBpLCBjbXApKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG5cbiAgLypcbiAgVXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ2l2ZW4gaXRlbSBpbiB0aGUgaGVhcC5cbiAgVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIGl0ZW0gaXMgYmVpbmcgbW9kaWZpZWQuXG4gICAqL1xuXG4gIHVwZGF0ZUl0ZW0gPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgdmFyIHBvcztcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIHBvcyA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3NpZnRkb3duKGFycmF5LCAwLCBwb3MsIGNtcCk7XG4gICAgcmV0dXJuIF9zaWZ0dXAoYXJyYXksIHBvcywgY21wKTtcbiAgfTtcblxuXG4gIC8qXG4gIEZpbmQgdGhlIG4gbGFyZ2VzdCBlbGVtZW50cyBpbiBhIGRhdGFzZXQuXG4gICAqL1xuXG4gIG5sYXJnZXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGNtcCkge1xuICAgIHZhciBlbGVtLCByZXN1bHQsIF9pLCBfbGVuLCBfcmVmO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgcmVzdWx0ID0gYXJyYXkuc2xpY2UoMCwgbik7XG4gICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBoZWFwaWZ5KHJlc3VsdCwgY21wKTtcbiAgICBfcmVmID0gYXJyYXkuc2xpY2Uobik7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBlbGVtID0gX3JlZltfaV07XG4gICAgICBoZWFwcHVzaHBvcChyZXN1bHQsIGVsZW0sIGNtcCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuc29ydChjbXApLnJldmVyc2UoKTtcbiAgfTtcblxuXG4gIC8qXG4gIEZpbmQgdGhlIG4gc21hbGxlc3QgZWxlbWVudHMgaW4gYSBkYXRhc2V0LlxuICAgKi9cblxuICBuc21hbGxlc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgY21wKSB7XG4gICAgdmFyIGVsZW0sIGksIGxvcywgcmVzdWx0LCBfaSwgX2osIF9sZW4sIF9yZWYsIF9yZWYxLCBfcmVzdWx0cztcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGlmIChuICogMTAgPD0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBhcnJheS5zbGljZSgwLCBuKS5zb3J0KGNtcCk7XG4gICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGxvcyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICBfcmVmID0gYXJyYXkuc2xpY2Uobik7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgZWxlbSA9IF9yZWZbX2ldO1xuICAgICAgICBpZiAoY21wKGVsZW0sIGxvcykgPCAwKSB7XG4gICAgICAgICAgaW5zb3J0KHJlc3VsdCwgZWxlbSwgMCwgbnVsbCwgY21wKTtcbiAgICAgICAgICByZXN1bHQucG9wKCk7XG4gICAgICAgICAgbG9zID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGVhcGlmeShhcnJheSwgY21wKTtcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IF9qID0gMCwgX3JlZjEgPSBtaW4obiwgYXJyYXkubGVuZ3RoKTsgMCA8PSBfcmVmMSA/IF9qIDwgX3JlZjEgOiBfaiA+IF9yZWYxOyBpID0gMCA8PSBfcmVmMSA/ICsrX2ogOiAtLV9qKSB7XG4gICAgICBfcmVzdWx0cy5wdXNoKGhlYXBwb3AoYXJyYXksIGNtcCkpO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG5cbiAgX3NpZnRkb3duID0gZnVuY3Rpb24oYXJyYXksIHN0YXJ0cG9zLCBwb3MsIGNtcCkge1xuICAgIHZhciBuZXdpdGVtLCBwYXJlbnQsIHBhcmVudHBvcztcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIG5ld2l0ZW0gPSBhcnJheVtwb3NdO1xuICAgIHdoaWxlIChwb3MgPiBzdGFydHBvcykge1xuICAgICAgcGFyZW50cG9zID0gKHBvcyAtIDEpID4+IDE7XG4gICAgICBwYXJlbnQgPSBhcnJheVtwYXJlbnRwb3NdO1xuICAgICAgaWYgKGNtcChuZXdpdGVtLCBwYXJlbnQpIDwgMCkge1xuICAgICAgICBhcnJheVtwb3NdID0gcGFyZW50O1xuICAgICAgICBwb3MgPSBwYXJlbnRwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBhcnJheVtwb3NdID0gbmV3aXRlbTtcbiAgfTtcblxuICBfc2lmdHVwID0gZnVuY3Rpb24oYXJyYXksIHBvcywgY21wKSB7XG4gICAgdmFyIGNoaWxkcG9zLCBlbmRwb3MsIG5ld2l0ZW0sIHJpZ2h0cG9zLCBzdGFydHBvcztcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGVuZHBvcyA9IGFycmF5Lmxlbmd0aDtcbiAgICBzdGFydHBvcyA9IHBvcztcbiAgICBuZXdpdGVtID0gYXJyYXlbcG9zXTtcbiAgICBjaGlsZHBvcyA9IDIgKiBwb3MgKyAxO1xuICAgIHdoaWxlIChjaGlsZHBvcyA8IGVuZHBvcykge1xuICAgICAgcmlnaHRwb3MgPSBjaGlsZHBvcyArIDE7XG4gICAgICBpZiAocmlnaHRwb3MgPCBlbmRwb3MgJiYgIShjbXAoYXJyYXlbY2hpbGRwb3NdLCBhcnJheVtyaWdodHBvc10pIDwgMCkpIHtcbiAgICAgICAgY2hpbGRwb3MgPSByaWdodHBvcztcbiAgICAgIH1cbiAgICAgIGFycmF5W3Bvc10gPSBhcnJheVtjaGlsZHBvc107XG4gICAgICBwb3MgPSBjaGlsZHBvcztcbiAgICAgIGNoaWxkcG9zID0gMiAqIHBvcyArIDE7XG4gICAgfVxuICAgIGFycmF5W3Bvc10gPSBuZXdpdGVtO1xuICAgIHJldHVybiBfc2lmdGRvd24oYXJyYXksIHN0YXJ0cG9zLCBwb3MsIGNtcCk7XG4gIH07XG5cbiAgSGVhcCA9IChmdW5jdGlvbigpIHtcbiAgICBIZWFwLnB1c2ggPSBoZWFwcHVzaDtcblxuICAgIEhlYXAucG9wID0gaGVhcHBvcDtcblxuICAgIEhlYXAucmVwbGFjZSA9IGhlYXByZXBsYWNlO1xuXG4gICAgSGVhcC5wdXNocG9wID0gaGVhcHB1c2hwb3A7XG5cbiAgICBIZWFwLmhlYXBpZnkgPSBoZWFwaWZ5O1xuXG4gICAgSGVhcC51cGRhdGVJdGVtID0gdXBkYXRlSXRlbTtcblxuICAgIEhlYXAubmxhcmdlc3QgPSBubGFyZ2VzdDtcblxuICAgIEhlYXAubnNtYWxsZXN0ID0gbnNtYWxsZXN0O1xuXG4gICAgZnVuY3Rpb24gSGVhcChjbXApIHtcbiAgICAgIHRoaXMuY21wID0gY21wICE9IG51bGwgPyBjbXAgOiBkZWZhdWx0Q21wO1xuICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIH1cblxuICAgIEhlYXAucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gaGVhcHB1c2godGhpcy5ub2RlcywgeCwgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBoZWFwcG9wKHRoaXMubm9kZXMsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXNbMF07XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaW5kZXhPZih4KSAhPT0gLTE7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gaGVhcHJlcGxhY2UodGhpcy5ub2RlcywgeCwgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wdXNocG9wID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXBwdXNocG9wKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuaGVhcGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGhlYXBpZnkodGhpcy5ub2RlcywgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS51cGRhdGVJdGVtID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZUl0ZW0odGhpcy5ub2RlcywgeCwgdGhpcy5jbXApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMubGVuZ3RoO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhlYXA7XG4gICAgICBoZWFwID0gbmV3IEhlYXAoKTtcbiAgICAgIGhlYXAubm9kZXMgPSB0aGlzLm5vZGVzLnNsaWNlKDApO1xuICAgICAgcmV0dXJuIGhlYXA7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNsaWNlKDApO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5pbnNlcnQgPSBIZWFwLnByb3RvdHlwZS5wdXNoO1xuXG4gICAgSGVhcC5wcm90b3R5cGUudG9wID0gSGVhcC5wcm90b3R5cGUucGVlaztcblxuICAgIEhlYXAucHJvdG90eXBlLmZyb250ID0gSGVhcC5wcm90b3R5cGUucGVlaztcblxuICAgIEhlYXAucHJvdG90eXBlLmhhcyA9IEhlYXAucHJvdG90eXBlLmNvbnRhaW5zO1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY29weSA9IEhlYXAucHJvdG90eXBlLmNsb25lO1xuXG4gICAgcmV0dXJuIEhlYXA7XG5cbiAgfSkoKTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwgPyBtb2R1bGUuZXhwb3J0cyA6IHZvaWQgMCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gSGVhcDtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuSGVhcCA9IEhlYXA7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvUGF0aEZpbmRpbmcnKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAnSGVhcCcgICAgICAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCdoZWFwJyksXHJcbiAgICAnTm9kZScgICAgICAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvTm9kZScpLFxyXG4gICAgJ0dyaWQnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL0dyaWQnKSxcclxuICAgICdVdGlsJyAgICAgICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9VdGlsJyksXHJcbiAgICAnRGlhZ29uYWxNb3ZlbWVudCcgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpLFxyXG4gICAgJ0hldXJpc3RpYycgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL0hldXJpc3RpYycpLFxyXG4gICAgJ0FTdGFyRmluZGVyJyAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0FTdGFyRmluZGVyJyksXHJcbiAgICAnQmVzdEZpcnN0RmluZGVyJyAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmVzdEZpcnN0RmluZGVyJyksXHJcbiAgICAnQnJlYWR0aEZpcnN0RmluZGVyJyAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQnJlYWR0aEZpcnN0RmluZGVyJyksXHJcbiAgICAnRGlqa3N0cmFGaW5kZXInICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvRGlqa3N0cmFGaW5kZXInKSxcclxuICAgICdCaUFTdGFyRmluZGVyJyAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CaUFTdGFyRmluZGVyJyksXHJcbiAgICAnQmlCZXN0Rmlyc3RGaW5kZXInICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlCZXN0Rmlyc3RGaW5kZXInKSxcclxuICAgICdCaUJyZWFkdGhGaXJzdEZpbmRlcicgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CaUJyZWFkdGhGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0JpRGlqa3N0cmFGaW5kZXInICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JpRGlqa3N0cmFGaW5kZXInKSxcclxuICAgICdJREFTdGFyRmluZGVyJyAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9JREFTdGFyRmluZGVyJyksXHJcbiAgICAnSnVtcFBvaW50RmluZGVyJyAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvSnVtcFBvaW50RmluZGVyJyksXHJcbn07XHJcbiIsInZhciBEaWFnb25hbE1vdmVtZW50ID0ge1xyXG4gICAgQWx3YXlzOiAxLFxyXG4gICAgTmV2ZXI6IDIsXHJcbiAgICBJZkF0TW9zdE9uZU9ic3RhY2xlOiAzLFxyXG4gICAgT25seVdoZW5Ob09ic3RhY2xlczogNFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEaWFnb25hbE1vdmVtZW50OyIsInZhciBOb2RlID0gcmVxdWlyZSgnLi9Ob2RlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogVGhlIEdyaWQgY2xhc3MsIHdoaWNoIHNlcnZlcyBhcyB0aGUgZW5jYXBzdWxhdGlvbiBvZiB0aGUgbGF5b3V0IG9mIHRoZSBub2Rlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfEFycmF5PEFycmF5PChudW1iZXJ8Ym9vbGVhbik+Pn0gd2lkdGhfb3JfbWF0cml4IE51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBncmlkLCBvciBtYXRyaXhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBOdW1iZXIgb2Ygcm93cyBvZiB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtBcnJheTxBcnJheTwobnVtYmVyfGJvb2xlYW4pPj59IFttYXRyaXhdIC0gQSAwLTEgbWF0cml4XHJcbiAqICAgICByZXByZXNlbnRpbmcgdGhlIHdhbGthYmxlIHN0YXR1cyBvZiB0aGUgbm9kZXMoMCBvciBmYWxzZSBmb3Igd2Fsa2FibGUpLlxyXG4gKiAgICAgSWYgdGhlIG1hdHJpeCBpcyBub3Qgc3VwcGxpZWQsIGFsbCB0aGUgbm9kZXMgd2lsbCBiZSB3YWxrYWJsZS4gICovXHJcbmZ1bmN0aW9uIEdyaWQod2lkdGhfb3JfbWF0cml4LCBoZWlnaHQsIG1hdHJpeCkge1xyXG4gICAgdmFyIHdpZHRoO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygd2lkdGhfb3JfbWF0cml4ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGhfb3JfbWF0cml4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWlnaHQgPSB3aWR0aF9vcl9tYXRyaXgubGVuZ3RoO1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGhfb3JfbWF0cml4WzBdLmxlbmd0aDtcclxuICAgICAgICBtYXRyaXggPSB3aWR0aF9vcl9tYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgb2YgdGhlIGdyaWQuXHJcbiAgICAgKiBAdHlwZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHJvd3Mgb2YgdGhlIGdyaWQuXHJcbiAgICAgKiBAdHlwZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIDJEIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICovXHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5fYnVpbGROb2Rlcyh3aWR0aCwgaGVpZ2h0LCBtYXRyaXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgYW5kIHJldHVybiB0aGUgbm9kZXMuXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyfGJvb2xlYW4+Pn0gW21hdHJpeF0gLSBBIDAtMSBtYXRyaXggcmVwcmVzZW50aW5nXHJcbiAqICAgICB0aGUgd2Fsa2FibGUgc3RhdHVzIG9mIHRoZSBub2Rlcy5cclxuICogQHNlZSBHcmlkXHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5fYnVpbGROb2RlcyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIG1hdHJpeCkge1xyXG4gICAgdmFyIGksIGosXHJcbiAgICAgICAgbm9kZXMgPSBuZXcgQXJyYXkoaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0OyArK2kpIHtcclxuICAgICAgICBub2Rlc1tpXSA9IG5ldyBBcnJheSh3aWR0aCk7XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHdpZHRoOyArK2opIHtcclxuICAgICAgICAgICAgbm9kZXNbaV1bal0gPSBuZXcgTm9kZShqLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChtYXRyaXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBub2RlcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0cml4Lmxlbmd0aCAhPT0gaGVpZ2h0IHx8IG1hdHJpeFswXS5sZW5ndGggIT09IHdpZHRoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggc2l6ZSBkb2VzIG5vdCBmaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0OyArK2kpIHtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7ICsraikge1xyXG4gICAgICAgICAgICBpZiAobWF0cml4W2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAwLCBmYWxzZSwgbnVsbCB3aWxsIGJlIHdhbGthYmxlXHJcbiAgICAgICAgICAgICAgICAvLyB3aGlsZSBvdGhlcnMgd2lsbCBiZSB1bi13YWxrYWJsZVxyXG4gICAgICAgICAgICAgICAgbm9kZXNbaV1bal0ud2Fsa2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbn07XHJcblxyXG5cclxuR3JpZC5wcm90b3R5cGUuZ2V0Tm9kZUF0ID0gZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNbeV1beF07XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBpcyB3YWxrYWJsZS5cclxuICogKEFsc28gcmV0dXJucyBmYWxzZSBpZiB0aGUgcG9zaXRpb24gaXMgb3V0c2lkZSB0aGUgZ3JpZC4pXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlLlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFRoZSB3YWxrYWJpbGl0eSBvZiB0aGUgbm9kZS5cclxuICovXHJcbkdyaWQucHJvdG90eXBlLmlzV2Fsa2FibGVBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMubm9kZXNbeV1beF0ud2Fsa2FibGU7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwb3NpdGlvbiBpcyBpbnNpZGUgdGhlIGdyaWQuXHJcbiAqIFhYWDogYGdyaWQuaXNJbnNpZGUoeCwgeSlgIGlzIHdpZXJkIHRvIHJlYWQuXHJcbiAqIEl0IHNob3VsZCBiZSBgKHgsIHkpIGlzIGluc2lkZSBncmlkYCwgYnV0IEkgZmFpbGVkIHRvIGZpbmQgYSBiZXR0ZXJcclxuICogbmFtZSBmb3IgdGhpcyBtZXRob2QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5pc0luc2lkZSA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoKSAmJiAoeSA+PSAwICYmIHkgPCB0aGlzLmhlaWdodCk7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCB3aGV0aGVyIHRoZSBub2RlIG9uIHRoZSBnaXZlbiBwb3NpdGlvbiBpcyB3YWxrYWJsZS5cclxuICogTk9URTogdGhyb3dzIGV4Y2VwdGlvbiBpZiB0aGUgY29vcmRpbmF0ZSBpcyBub3QgaW5zaWRlIHRoZSBncmlkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgbm9kZS5cclxuICogQHBhcmFtIHtib29sZWFufSB3YWxrYWJsZSAtIFdoZXRoZXIgdGhlIHBvc2l0aW9uIGlzIHdhbGthYmxlLlxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuc2V0V2Fsa2FibGVBdCA9IGZ1bmN0aW9uKHgsIHksIHdhbGthYmxlKSB7XHJcbiAgICB0aGlzLm5vZGVzW3ldW3hdLndhbGthYmxlID0gd2Fsa2FibGU7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIHRoZSBnaXZlbiBub2RlLlxyXG4gKlxyXG4gKiAgICAgb2Zmc2V0cyAgICAgIGRpYWdvbmFsT2Zmc2V0czpcclxuICogICstLS0rLS0tKy0tLSsgICAgKy0tLSstLS0rLS0tK1xyXG4gKiAgfCAgIHwgMCB8ICAgfCAgICB8IDAgfCAgIHwgMSB8XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICogIHwgMyB8ICAgfCAxIHwgICAgfCAgIHwgICB8ICAgfFxyXG4gKiAgKy0tLSstLS0rLS0tKyAgICArLS0tKy0tLSstLS0rXHJcbiAqICB8ICAgfCAyIHwgICB8ICAgIHwgMyB8ICAgfCAyIHxcclxuICogICstLS0rLS0tKy0tLSsgICAgKy0tLSstLS0rLS0tK1xyXG4gKlxyXG4gKiAgV2hlbiBhbGxvd0RpYWdvbmFsIGlzIHRydWUsIGlmIG9mZnNldHNbaV0gaXMgdmFsaWQsIHRoZW5cclxuICogIGRpYWdvbmFsT2Zmc2V0c1tpXSBhbmRcclxuICogIGRpYWdvbmFsT2Zmc2V0c1soaSArIDEpICUgNF0gaXMgdmFsaWQuXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IGRpYWdvbmFsTW92ZW1lbnRcclxuICovXHJcbkdyaWQucHJvdG90eXBlLmdldE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgIHZhciB4ID0gbm9kZS54LFxyXG4gICAgICAgIHkgPSBub2RlLnksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sXHJcbiAgICAgICAgczAgPSBmYWxzZSwgZDAgPSBmYWxzZSxcclxuICAgICAgICBzMSA9IGZhbHNlLCBkMSA9IGZhbHNlLFxyXG4gICAgICAgIHMyID0gZmFsc2UsIGQyID0gZmFsc2UsXHJcbiAgICAgICAgczMgPSBmYWxzZSwgZDMgPSBmYWxzZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXM7XHJcblxyXG4gICAgLy8g4oaRXHJcbiAgICBpZiAodGhpcy5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSAtIDFdW3hdKTtcclxuICAgICAgICBzMCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyDihpJcclxuICAgIGlmICh0aGlzLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5XVt4ICsgMV0pO1xyXG4gICAgICAgIHMxID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIOKGk1xyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgKyAxXVt4XSk7XHJcbiAgICAgICAgczIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8g4oaQXHJcbiAgICBpZiAodGhpcy5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeV1beCAtIDFdKTtcclxuICAgICAgICBzMyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXMpIHtcclxuICAgICAgICBkMCA9IHMzICYmIHMwO1xyXG4gICAgICAgIGQxID0gczAgJiYgczE7XHJcbiAgICAgICAgZDIgPSBzMSAmJiBzMjtcclxuICAgICAgICBkMyA9IHMyICYmIHMzO1xyXG4gICAgfSBlbHNlIGlmIChkaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGUpIHtcclxuICAgICAgICBkMCA9IHMzIHx8IHMwO1xyXG4gICAgICAgIGQxID0gczAgfHwgczE7XHJcbiAgICAgICAgZDIgPSBzMSB8fCBzMjtcclxuICAgICAgICBkMyA9IHMyIHx8IHMzO1xyXG4gICAgfSBlbHNlIGlmIChkaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50LkFsd2F5cykge1xyXG4gICAgICAgIGQwID0gdHJ1ZTtcclxuICAgICAgICBkMSA9IHRydWU7XHJcbiAgICAgICAgZDIgPSB0cnVlO1xyXG4gICAgICAgIGQzID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgdmFsdWUgb2YgZGlhZ29uYWxNb3ZlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKGllxyXG4gICAgaWYgKGQwICYmIHRoaXMuaXNXYWxrYWJsZUF0KHggLSAxLCB5IC0gMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5IC0gMV1beCAtIDFdKTtcclxuICAgIH1cclxuICAgIC8vIOKGl1xyXG4gICAgaWYgKGQxICYmIHRoaXMuaXNXYWxrYWJsZUF0KHggKyAxLCB5IC0gMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5IC0gMV1beCArIDFdKTtcclxuICAgIH1cclxuICAgIC8vIOKGmFxyXG4gICAgaWYgKGQyICYmIHRoaXMuaXNXYWxrYWJsZUF0KHggKyAxLCB5ICsgMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5ICsgMV1beCArIDFdKTtcclxuICAgIH1cclxuICAgIC8vIOKGmVxyXG4gICAgaWYgKGQzICYmIHRoaXMuaXNXYWxrYWJsZUF0KHggLSAxLCB5ICsgMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5ICsgMV1beCAtIDFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBjbG9uZSBvZiB0aGlzIGdyaWQuXHJcbiAqIEByZXR1cm4ge0dyaWR9IENsb25lZCBncmlkLlxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpLCBqLFxyXG5cclxuICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpc05vZGVzID0gdGhpcy5ub2RlcyxcclxuXHJcbiAgICAgICAgbmV3R3JpZCA9IG5ldyBHcmlkKHdpZHRoLCBoZWlnaHQpLFxyXG4gICAgICAgIG5ld05vZGVzID0gbmV3IEFycmF5KGhlaWdodCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XHJcbiAgICAgICAgbmV3Tm9kZXNbaV0gPSBuZXcgQXJyYXkod2lkdGgpO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB3aWR0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIG5ld05vZGVzW2ldW2pdID0gbmV3IE5vZGUoaiwgaSwgdGhpc05vZGVzW2ldW2pdLndhbGthYmxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV3R3JpZC5ub2RlcyA9IG5ld05vZGVzO1xyXG5cclxuICAgIHJldHVybiBuZXdHcmlkO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcmlkO1xyXG4iLCIvKipcclxuICogQG5hbWVzcGFjZSBQRi5IZXVyaXN0aWNcclxuICogQGRlc2NyaXB0aW9uIEEgY29sbGVjdGlvbiBvZiBoZXVyaXN0aWMgZnVuY3Rpb25zLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hbmhhdHRhbiBkaXN0YW5jZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBEaWZmZXJlbmNlIGluIHguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR5IC0gRGlmZmVyZW5jZSBpbiB5LlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gZHggKyBkeVxyXG4gICAqL1xyXG4gIG1hbmhhdHRhbjogZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgIHJldHVybiBkeCArIGR5O1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEV1Y2xpZGVhbiBkaXN0YW5jZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBEaWZmZXJlbmNlIGluIHguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR5IC0gRGlmZmVyZW5jZSBpbiB5LlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcclxuICAgKi9cclxuICBldWNsaWRlYW46IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBPY3RpbGUgZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNxcnQoZHggKiBkeCArIGR5ICogZHkpIGZvciBncmlkc1xyXG4gICAqL1xyXG4gIG9jdGlsZTogZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgIHZhciBGID0gTWF0aC5TUVJUMiAtIDE7XHJcbiAgICAgIHJldHVybiAoZHggPCBkeSkgPyBGICogZHggKyBkeSA6IEYgKiBkeSArIGR4O1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWJ5c2hldiBkaXN0YW5jZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBEaWZmZXJlbmNlIGluIHguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR5IC0gRGlmZmVyZW5jZSBpbiB5LlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gbWF4KGR4LCBkeSlcclxuICAgKi9cclxuICBjaGVieXNoZXY6IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgoZHgsIGR5KTtcclxuICB9XHJcblxyXG59O1xyXG4iLCIvKipcclxuICogQSBub2RlIGluIGdyaWQuIFxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHNvbWUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYSBub2RlIGFuZCBjdXN0b20gXHJcbiAqIGF0dHJpYnV0ZXMgbWF5IGJlIGFkZGVkLCBkZXBlbmRpbmcgb24gdGhlIGFsZ29yaXRobXMnIG5lZWRzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUgb24gdGhlIGdyaWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhbGthYmxlXSAtIFdoZXRoZXIgdGhpcyBub2RlIGlzIHdhbGthYmxlLlxyXG4gKi9cclxuZnVuY3Rpb24gTm9kZSh4LCB5LCB3YWxrYWJsZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUgb24gdGhlIGdyaWQuXHJcbiAgICAgKiBAdHlwZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIG5vZGUgY2FuIGJlIHdhbGtlZCB0aHJvdWdoLlxyXG4gICAgICogQHR5cGUgYm9vbGVhblxyXG4gICAgICovXHJcbiAgICB0aGlzLndhbGthYmxlID0gKHdhbGthYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogd2Fsa2FibGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGU7XHJcbiIsIi8qKlxyXG4gKiBCYWNrdHJhY2UgYWNjb3JkaW5nIHRvIHRoZSBwYXJlbnQgcmVjb3JkcyBhbmQgcmV0dXJuIHRoZSBwYXRoLlxyXG4gKiAoaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kIGVuZCBub2RlcylcclxuICogQHBhcmFtIHtOb2RlfSBub2RlIEVuZCBub2RlXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSB0aGUgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gYmFja3RyYWNlKG5vZGUpIHtcclxuICAgIHZhciBwYXRoID0gW1tub2RlLngsIG5vZGUueV1dO1xyXG4gICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHBhdGgucHVzaChbbm9kZS54LCBub2RlLnldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoLnJldmVyc2UoKTtcclxufVxyXG5leHBvcnRzLmJhY2t0cmFjZSA9IGJhY2t0cmFjZTtcclxuXHJcbi8qKlxyXG4gKiBCYWNrdHJhY2UgZnJvbSBzdGFydCBhbmQgZW5kIG5vZGUsIGFuZCByZXR1cm4gdGhlIHBhdGguXHJcbiAqIChpbmNsdWRpbmcgYm90aCBzdGFydCBhbmQgZW5kIG5vZGVzKVxyXG4gKiBAcGFyYW0ge05vZGV9XHJcbiAqIEBwYXJhbSB7Tm9kZX1cclxuICovXHJcbmZ1bmN0aW9uIGJpQmFja3RyYWNlKG5vZGVBLCBub2RlQikge1xyXG4gICAgdmFyIHBhdGhBID0gYmFja3RyYWNlKG5vZGVBKSxcclxuICAgICAgICBwYXRoQiA9IGJhY2t0cmFjZShub2RlQik7XHJcbiAgICByZXR1cm4gcGF0aEEuY29uY2F0KHBhdGhCLnJldmVyc2UoKSk7XHJcbn1cclxuZXhwb3J0cy5iaUJhY2t0cmFjZSA9IGJpQmFja3RyYWNlO1xyXG5cclxuLyoqXHJcbiAqIENvbXB1dGUgdGhlIGxlbmd0aCBvZiB0aGUgcGF0aC5cclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZW5ndGggb2YgdGhlIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIHBhdGhMZW5ndGgocGF0aCkge1xyXG4gICAgdmFyIGksIHN1bSA9IDAsIGEsIGIsIGR4LCBkeTtcclxuICAgIGZvciAoaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYSA9IHBhdGhbaSAtIDFdO1xyXG4gICAgICAgIGIgPSBwYXRoW2ldO1xyXG4gICAgICAgIGR4ID0gYVswXSAtIGJbMF07XHJcbiAgICAgICAgZHkgPSBhWzFdIC0gYlsxXTtcclxuICAgICAgICBzdW0gKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW07XHJcbn1cclxuZXhwb3J0cy5wYXRoTGVuZ3RoID0gcGF0aExlbmd0aDtcclxuXHJcblxyXG4vKipcclxuICogR2l2ZW4gdGhlIHN0YXJ0IGFuZCBlbmQgY29vcmRpbmF0ZXMsIHJldHVybiBhbGwgdGhlIGNvb3JkaW5hdGVzIGx5aW5nXHJcbiAqIG9uIHRoZSBsaW5lIGZvcm1lZCBieSB0aGVzZSBjb29yZGluYXRlcywgYmFzZWQgb24gQnJlc2VuaGFtJ3MgYWxnb3JpdGhtLlxyXG4gKiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZXNlbmhhbSdzX2xpbmVfYWxnb3JpdGhtI1NpbXBsaWZpY2F0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4MCBTdGFydCB4IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkwIFN0YXJ0IHkgY29vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geDEgRW5kIHggY29vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geTEgRW5kIHkgY29vcmRpbmF0ZVxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIGNvb3JkaW5hdGVzIG9uIHRoZSBsaW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZSh4MCwgeTAsIHgxLCB5MSkge1xyXG4gICAgdmFyIGFicyA9IE1hdGguYWJzLFxyXG4gICAgICAgIGxpbmUgPSBbXSxcclxuICAgICAgICBzeCwgc3ksIGR4LCBkeSwgZXJyLCBlMjtcclxuXHJcbiAgICBkeCA9IGFicyh4MSAtIHgwKTtcclxuICAgIGR5ID0gYWJzKHkxIC0geTApO1xyXG5cclxuICAgIHN4ID0gKHgwIDwgeDEpID8gMSA6IC0xO1xyXG4gICAgc3kgPSAoeTAgPCB5MSkgPyAxIDogLTE7XHJcblxyXG4gICAgZXJyID0gZHggLSBkeTtcclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGxpbmUucHVzaChbeDAsIHkwXSk7XHJcblxyXG4gICAgICAgIGlmICh4MCA9PT0geDEgJiYgeTAgPT09IHkxKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBlMiA9IDIgKiBlcnI7XHJcbiAgICAgICAgaWYgKGUyID4gLWR5KSB7XHJcbiAgICAgICAgICAgIGVyciA9IGVyciAtIGR5O1xyXG4gICAgICAgICAgICB4MCA9IHgwICsgc3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlMiA8IGR4KSB7XHJcbiAgICAgICAgICAgIGVyciA9IGVyciArIGR4O1xyXG4gICAgICAgICAgICB5MCA9IHkwICsgc3k7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuXHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBjb21wcmVzc2VkIHBhdGgsIHJldHVybiBhIG5ldyBwYXRoIHRoYXQgaGFzIGFsbCB0aGUgc2VnbWVudHNcclxuICogaW4gaXQgaW50ZXJwb2xhdGVkLlxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBwYXRoIFRoZSBwYXRoXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBleHBhbmRlZCBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBleHBhbmRQYXRoKHBhdGgpIHtcclxuICAgIHZhciBleHBhbmRlZCA9IFtdLFxyXG4gICAgICAgIGxlbiA9IHBhdGgubGVuZ3RoLFxyXG4gICAgICAgIGNvb3JkMCwgY29vcmQxLFxyXG4gICAgICAgIGludGVycG9sYXRlZCxcclxuICAgICAgICBpbnRlcnBvbGF0ZWRMZW4sXHJcbiAgICAgICAgaSwgajtcclxuXHJcbiAgICBpZiAobGVuIDwgMikge1xyXG4gICAgICAgIHJldHVybiBleHBhbmRlZDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuIC0gMTsgKytpKSB7XHJcbiAgICAgICAgY29vcmQwID0gcGF0aFtpXTtcclxuICAgICAgICBjb29yZDEgPSBwYXRoW2kgKyAxXTtcclxuXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkID0gaW50ZXJwb2xhdGUoY29vcmQwWzBdLCBjb29yZDBbMV0sIGNvb3JkMVswXSwgY29vcmQxWzFdKTtcclxuICAgICAgICBpbnRlcnBvbGF0ZWRMZW4gPSBpbnRlcnBvbGF0ZWQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBpbnRlcnBvbGF0ZWRMZW4gLSAxOyArK2opIHtcclxuICAgICAgICAgICAgZXhwYW5kZWQucHVzaChpbnRlcnBvbGF0ZWRbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cGFuZGVkLnB1c2gocGF0aFtsZW4gLSAxXSk7XHJcblxyXG4gICAgcmV0dXJuIGV4cGFuZGVkO1xyXG59XHJcbmV4cG9ydHMuZXhwYW5kUGF0aCA9IGV4cGFuZFBhdGg7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNtb290aGVuIHRoZSBnaXZlIHBhdGguXHJcbiAqIFRoZSBvcmlnaW5hbCBwYXRoIHdpbGwgbm90IGJlIG1vZGlmaWVkOyBhIG5ldyBwYXRoIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqIEBwYXJhbSB7UEYuR3JpZH0gZ3JpZFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBwYXRoIFRoZSBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBzbW9vdGhlblBhdGgoZ3JpZCwgcGF0aCkge1xyXG4gICAgdmFyIGxlbiA9IHBhdGgubGVuZ3RoLFxyXG4gICAgICAgIHgwID0gcGF0aFswXVswXSwgICAgICAgIC8vIHBhdGggc3RhcnQgeFxyXG4gICAgICAgIHkwID0gcGF0aFswXVsxXSwgICAgICAgIC8vIHBhdGggc3RhcnQgeVxyXG4gICAgICAgIHgxID0gcGF0aFtsZW4gLSAxXVswXSwgIC8vIHBhdGggZW5kIHhcclxuICAgICAgICB5MSA9IHBhdGhbbGVuIC0gMV1bMV0sICAvLyBwYXRoIGVuZCB5XHJcbiAgICAgICAgc3gsIHN5LCAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBzdGFydCBjb29yZGluYXRlXHJcbiAgICAgICAgZXgsIGV5LCAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBlbmQgY29vcmRpbmF0ZVxyXG4gICAgICAgIG5ld1BhdGgsXHJcbiAgICAgICAgaSwgaiwgY29vcmQsIGxpbmUsIHRlc3RDb29yZCwgYmxvY2tlZDtcclxuXHJcbiAgICBzeCA9IHgwO1xyXG4gICAgc3kgPSB5MDtcclxuICAgIG5ld1BhdGggPSBbW3N4LCBzeV1dO1xyXG5cclxuICAgIGZvciAoaSA9IDI7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIGNvb3JkID0gcGF0aFtpXTtcclxuICAgICAgICBleCA9IGNvb3JkWzBdO1xyXG4gICAgICAgIGV5ID0gY29vcmRbMV07XHJcbiAgICAgICAgbGluZSA9IGludGVycG9sYXRlKHN4LCBzeSwgZXgsIGV5KTtcclxuXHJcbiAgICAgICAgYmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoaiA9IDE7IGogPCBsaW5lLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIHRlc3RDb29yZCA9IGxpbmVbal07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHRlc3RDb29yZFswXSwgdGVzdENvb3JkWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmxvY2tlZCkge1xyXG4gICAgICAgICAgICBsYXN0VmFsaWRDb29yZCA9IHBhdGhbaSAtIDFdO1xyXG4gICAgICAgICAgICBuZXdQYXRoLnB1c2gobGFzdFZhbGlkQ29vcmQpO1xyXG4gICAgICAgICAgICBzeCA9IGxhc3RWYWxpZENvb3JkWzBdO1xyXG4gICAgICAgICAgICBzeSA9IGxhc3RWYWxpZENvb3JkWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5ld1BhdGgucHVzaChbeDEsIHkxXSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1BhdGg7XHJcbn1cclxuZXhwb3J0cy5zbW9vdGhlblBhdGggPSBzbW9vdGhlblBhdGg7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbXByZXNzIGEgcGF0aCwgcmVtb3ZlIHJlZHVuZGFudCBub2RlcyB3aXRob3V0IGFsdGVyaW5nIHRoZSBzaGFwZVxyXG4gKiBUaGUgb3JpZ2luYWwgcGF0aCBpcyBub3QgbW9kaWZpZWRcclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIGNvbXByZXNzZWQgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gY29tcHJlc3NQYXRoKHBhdGgpIHtcclxuXHJcbiAgICAvLyBub3RoaW5nIHRvIGNvbXByZXNzXHJcbiAgICBpZihwYXRoLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29tcHJlc3NlZCA9IFtdLFxyXG4gICAgICAgIHN4ID0gcGF0aFswXVswXSwgLy8gc3RhcnQgeFxyXG4gICAgICAgIHN5ID0gcGF0aFswXVsxXSwgLy8gc3RhcnQgeVxyXG4gICAgICAgIHB4ID0gcGF0aFsxXVswXSwgLy8gc2Vjb25kIHBvaW50IHhcclxuICAgICAgICBweSA9IHBhdGhbMV1bMV0sIC8vIHNlY29uZCBwb2ludCB5XHJcbiAgICAgICAgZHggPSBweCAtIHN4LCAvLyBkaXJlY3Rpb24gYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xyXG4gICAgICAgIGR5ID0gcHkgLSBzeSwgLy8gZGlyZWN0aW9uIGJldHdlZW4gdGhlIHR3byBwb2ludHNcclxuICAgICAgICBseCwgbHksXHJcbiAgICAgICAgbGR4LCBsZHksXHJcbiAgICAgICAgc3EsIGk7XHJcblxyXG4gICAgLy8gbm9ybWFsaXplIHRoZSBkaXJlY3Rpb25cclxuICAgIHNxID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG4gICAgZHggLz0gc3E7XHJcbiAgICBkeSAvPSBzcTtcclxuXHJcbiAgICAvLyBzdGFydCB0aGUgbmV3IHBhdGhcclxuICAgIGNvbXByZXNzZWQucHVzaChbc3gsc3ldKTtcclxuXHJcbiAgICBmb3IoaSA9IDI7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXN0IHBvaW50XHJcbiAgICAgICAgbHggPSBweDtcclxuICAgICAgICBseSA9IHB5O1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBkaXJlY3Rpb25cclxuICAgICAgICBsZHggPSBkeDtcclxuICAgICAgICBsZHkgPSBkeTtcclxuXHJcbiAgICAgICAgLy8gbmV4dCBwb2ludFxyXG4gICAgICAgIHB4ID0gcGF0aFtpXVswXTtcclxuICAgICAgICBweSA9IHBhdGhbaV1bMV07XHJcblxyXG4gICAgICAgIC8vIG5leHQgZGlyZWN0aW9uXHJcbiAgICAgICAgZHggPSBweCAtIGx4O1xyXG4gICAgICAgIGR5ID0gcHkgLSBseTtcclxuXHJcbiAgICAgICAgLy8gbm9ybWFsaXplXHJcbiAgICAgICAgc3EgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcbiAgICAgICAgZHggLz0gc3E7XHJcbiAgICAgICAgZHkgLz0gc3E7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBkaXJlY3Rpb24gaGFzIGNoYW5nZWQsIHN0b3JlIHRoZSBwb2ludFxyXG4gICAgICAgIGlmICggZHggIT09IGxkeCB8fCBkeSAhPT0gbGR5ICkge1xyXG4gICAgICAgICAgICBjb21wcmVzc2VkLnB1c2goW2x4LGx5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0b3JlIHRoZSBsYXN0IHBvaW50XHJcbiAgICBjb21wcmVzc2VkLnB1c2goW3B4LHB5XSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXByZXNzZWQ7XHJcbn1cclxuZXhwb3J0cy5jb21wcmVzc1BhdGggPSBjb21wcmVzc1BhdGg7XHJcbiIsInZhciBIZWFwICAgICAgID0gcmVxdWlyZSgnaGVhcCcpO1xyXG52YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQSogcGF0aC1maW5kZXIuIEJhc2VkIHVwb24gaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9qYXZhc2NyaXB0LWFzdGFyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZyBcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC53ZWlnaHQgV2VpZ2h0IHRvIGFwcGx5IHRvIHRoZSBoZXVyaXN0aWMgdG8gYWxsb3cgZm9yXHJcbiAqICAgICBzdWJvcHRpbWFsIHBhdGhzLCBpbiBvcmRlciB0byBzcGVlZCB1cCB0aGUgc2VhcmNoLlxyXG4gKi9cclxuZnVuY3Rpb24gQVN0YXJGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmFsbG93RGlhZ29uYWwgPSBvcHQuYWxsb3dEaWFnb25hbDtcclxuICAgIHRoaXMuZG9udENyb3NzQ29ybmVycyA9IG9wdC5kb250Q3Jvc3NDb3JuZXJzO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB0aGlzLndlaWdodCA9IG9wdC53ZWlnaHQgfHwgMTtcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkIHRoZSBtYW5oYXR0YW4gaGV1cmlzdGljIGlzIG5vdFxyXG4gICAgLy9hZG1pc3NpYmxlLiBJdCBzaG91bGQgYmUgb2N0aWxlIGluc3RlYWRcclxuICAgIGlmICh0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5vY3RpbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkFTdGFyRmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICB2YXIgb3Blbkxpc3QgPSBuZXcgSGVhcChmdW5jdGlvbihub2RlQSwgbm9kZUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVBLmYgLSBub2RlQi5mO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgaGV1cmlzdGljID0gdGhpcy5oZXVyaXN0aWMsXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICB3ZWlnaHQgPSB0aGlzLndlaWdodCxcclxuICAgICAgICBhYnMgPSBNYXRoLmFicywgU1FSVDIgPSBNYXRoLlNRUlQyLFxyXG4gICAgICAgIG5vZGUsIG5laWdoYm9ycywgbmVpZ2hib3IsIGksIGwsIHgsIHksIG5nO1xyXG5cclxuICAgIC8vIHNldCB0aGUgYGdgIGFuZCBgZmAgdmFsdWUgb2YgdGhlIHN0YXJ0IG5vZGUgdG8gYmUgMFxyXG4gICAgc3RhcnROb2RlLmcgPSAwO1xyXG4gICAgc3RhcnROb2RlLmYgPSAwO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IG5vZGUgaW50byB0aGUgb3BlbiBsaXN0XHJcbiAgICBvcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyB3aGlsZSB0aGUgb3BlbiBsaXN0IGlzIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKCFvcGVuTGlzdC5lbXB0eSgpKSB7XHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IG9wZW5MaXN0LnBvcCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gaWYgcmVhY2hlZCB0aGUgZW5kIHBvc2l0aW9uLCBjb25zdHJ1Y3QgdGhlIHBhdGggYW5kIHJldHVybiBpdFxyXG4gICAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmJhY2t0cmFjZShlbmROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBuZWlnYm91cnMgb2YgdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHggPSBuZWlnaGJvci54O1xyXG4gICAgICAgICAgICB5ID0gbmVpZ2hib3IueTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBjdXJyZW50IG5vZGUgYW5kIHRoZSBuZWlnaGJvclxyXG4gICAgICAgICAgICAvLyBhbmQgY2FsY3VsYXRlIHRoZSBuZXh0IGcgc2NvcmVcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyAoKHggLSBub2RlLnggPT09IDAgfHwgeSAtIG5vZGUueSA9PT0gMCkgPyAxIDogU1FSVDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG5laWdoYm9yIGhhcyBub3QgYmVlbiBpbnNwZWN0ZWQgeWV0LCBvclxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdCBmcm9tIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQgfHwgbmcgPCBuZWlnaGJvci5nKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5oID0gbmVpZ2hib3IuaCB8fCB3ZWlnaHQgKiBoZXVyaXN0aWMoYWJzKHggLSBlbmRYKSwgYWJzKHkgLSBlbmRZKSk7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5mID0gbmVpZ2hib3IuZyArIG5laWdoYm9yLmg7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5laWdoYm9yIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIGl0cyBmIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQsIHdlIGhhdmUgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaXRzIHBvc2l0aW9uIGluIHRoZSBvcGVuIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC51cGRhdGVJdGVtKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZW5kIGZvciBlYWNoIG5laWdoYm9yXHJcbiAgICB9IC8vIGVuZCB3aGlsZSBub3Qgb3BlbiBsaXN0IGVtcHR5XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFTdGFyRmluZGVyO1xyXG4iLCJ2YXIgQVN0YXJGaW5kZXIgPSByZXF1aXJlKCcuL0FTdGFyRmluZGVyJyk7XHJcblxyXG4vKipcclxuICogQmVzdC1GaXJzdC1TZWFyY2ggcGF0aC1maW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyBBU3RhckZpbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKi9cclxuZnVuY3Rpb24gQmVzdEZpcnN0RmluZGVyKG9wdCkge1xyXG4gICAgQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG5cclxuICAgIHZhciBvcmlnID0gdGhpcy5oZXVyaXN0aWM7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICAgIHJldHVybiBvcmlnKGR4LCBkeSkgKiAxMDAwMDAwO1xyXG4gICAgfTtcclxufVxyXG5cclxuQmVzdEZpcnN0RmluZGVyLnByb3RvdHlwZSA9IG5ldyBBU3RhckZpbmRlcigpO1xyXG5CZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmVzdEZpcnN0RmluZGVyO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCZXN0Rmlyc3RGaW5kZXI7XHJcbiIsInZhciBIZWFwICAgICAgID0gcmVxdWlyZSgnaGVhcCcpO1xyXG52YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQSogcGF0aC1maW5kZXIuXHJcbiAqIGJhc2VkIHVwb24gaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9qYXZhc2NyaXB0LWFzdGFyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHQuaGV1cmlzdGljIEhldXJpc3RpYyBmdW5jdGlvbiB0byBlc3RpbWF0ZSB0aGUgZGlzdGFuY2VcclxuICogICAgIChkZWZhdWx0cyB0byBtYW5oYXR0YW4pLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0LndlaWdodCBXZWlnaHQgdG8gYXBwbHkgdG8gdGhlIGhldXJpc3RpYyB0byBhbGxvdyBmb3JcclxuICogICAgIHN1Ym9wdGltYWwgcGF0aHMsIGluIG9yZGVyIHRvIHNwZWVkIHVwIHRoZSBzZWFyY2guXHJcbiAqL1xyXG5mdW5jdGlvbiBCaUFTdGFyRmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB0aGlzLndlaWdodCA9IG9wdC53ZWlnaHQgfHwgMTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2hlbiBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkIHRoZSBtYW5oYXR0YW4gaGV1cmlzdGljIGlzIG5vdCBhZG1pc3NpYmxlXHJcbiAgICAvL0l0IHNob3VsZCBiZSBvY3RpbGUgaW5zdGVhZFxyXG4gICAgaWYgKHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcikge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm9jdGlsZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuQmlBU3RhckZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIGNtcCA9IGZ1bmN0aW9uKG5vZGVBLCBub2RlQikge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUEuZiAtIG5vZGVCLmY7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydE9wZW5MaXN0ID0gbmV3IEhlYXAoY21wKSxcclxuICAgICAgICBlbmRPcGVuTGlzdCA9IG5ldyBIZWFwKGNtcCksXHJcbiAgICAgICAgc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSxcclxuICAgICAgICBoZXVyaXN0aWMgPSB0aGlzLmhldXJpc3RpYyxcclxuICAgICAgICBkaWFnb25hbE1vdmVtZW50ID0gdGhpcy5kaWFnb25hbE1vdmVtZW50LFxyXG4gICAgICAgIHdlaWdodCA9IHRoaXMud2VpZ2h0LFxyXG4gICAgICAgIGFicyA9IE1hdGguYWJzLCBTUVJUMiA9IE1hdGguU1FSVDIsXHJcbiAgICAgICAgbm9kZSwgbmVpZ2hib3JzLCBuZWlnaGJvciwgaSwgbCwgeCwgeSwgbmcsXHJcbiAgICAgICAgQllfU1RBUlQgPSAxLCBCWV9FTkQgPSAyO1xyXG5cclxuICAgIC8vIHNldCB0aGUgYGdgIGFuZCBgZmAgdmFsdWUgb2YgdGhlIHN0YXJ0IG5vZGUgdG8gYmUgMFxyXG4gICAgLy8gYW5kIHB1c2ggaXQgaW50byB0aGUgc3RhcnQgb3BlbiBsaXN0XHJcbiAgICBzdGFydE5vZGUuZyA9IDA7XHJcbiAgICBzdGFydE5vZGUuZiA9IDA7XHJcbiAgICBzdGFydE9wZW5MaXN0LnB1c2goc3RhcnROb2RlKTtcclxuICAgIHN0YXJ0Tm9kZS5vcGVuZWQgPSBCWV9TVEFSVDtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBlbmQgbm9kZSB0byBiZSAwXHJcbiAgICAvLyBhbmQgcHVzaCBpdCBpbnRvIHRoZSBvcGVuIG9wZW4gbGlzdFxyXG4gICAgZW5kTm9kZS5nID0gMDtcclxuICAgIGVuZE5vZGUuZiA9IDA7XHJcbiAgICBlbmRPcGVuTGlzdC5wdXNoKGVuZE5vZGUpO1xyXG4gICAgZW5kTm9kZS5vcGVuZWQgPSBCWV9FTkQ7XHJcblxyXG4gICAgLy8gd2hpbGUgYm90aCB0aGUgb3BlbiBsaXN0cyBhcmUgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAoIXN0YXJ0T3Blbkxpc3QuZW1wdHkoKSAmJiAhZW5kT3Blbkxpc3QuZW1wdHkoKSkge1xyXG5cclxuICAgICAgICAvLyBwb3AgdGhlIHBvc2l0aW9uIG9mIHN0YXJ0IG5vZGUgd2hpY2ggaGFzIHRoZSBtaW5pbXVtIGBmYCB2YWx1ZS5cclxuICAgICAgICBub2RlID0gc3RhcnRPcGVuTGlzdC5wb3AoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGdldCBuZWlnYm91cnMgb2YgdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCA9PT0gQllfRU5EKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5iaUJhY2t0cmFjZShub2RlLCBuZWlnaGJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHggPSBuZWlnaGJvci54O1xyXG4gICAgICAgICAgICB5ID0gbmVpZ2hib3IueTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBjdXJyZW50IG5vZGUgYW5kIHRoZSBuZWlnaGJvclxyXG4gICAgICAgICAgICAvLyBhbmQgY2FsY3VsYXRlIHRoZSBuZXh0IGcgc2NvcmVcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyAoKHggLSBub2RlLnggPT09IDAgfHwgeSAtIG5vZGUueSA9PT0gMCkgPyAxIDogU1FSVDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG5laWdoYm9yIGhhcyBub3QgYmVlbiBpbnNwZWN0ZWQgeWV0LCBvclxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdCBmcm9tIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQgfHwgbmcgPCBuZWlnaGJvci5nKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5oID0gbmVpZ2hib3IuaCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCAqIGhldXJpc3RpYyhhYnMoeCAtIGVuZFgpLCBhYnMoeSAtIGVuZFkpKTtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmYgPSBuZWlnaGJvci5nICsgbmVpZ2hib3IuaDtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydE9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IEJZX1NUQVJUO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmVpZ2hib3IgY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgaXRzIGYgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCwgd2UgaGF2ZSB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBpdHMgcG9zaXRpb24gaW4gdGhlIG9wZW4gbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T3Blbkxpc3QudXBkYXRlSXRlbShuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIGVuZCBmb3IgZWFjaCBuZWlnaGJvclxyXG5cclxuXHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBlbmQgbm9kZSB3aGljaCBoYXMgdGhlIG1pbmltdW0gYGZgIHZhbHVlLlxyXG4gICAgICAgIG5vZGUgPSBlbmRPcGVuTGlzdC5wb3AoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGdldCBuZWlnYm91cnMgb2YgdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCA9PT0gQllfU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5laWdoYm9yLCBub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeCA9IG5laWdoYm9yLng7XHJcbiAgICAgICAgICAgIHkgPSBuZWlnaGJvci55O1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGN1cnJlbnQgbm9kZSBhbmQgdGhlIG5laWdoYm9yXHJcbiAgICAgICAgICAgIC8vIGFuZCBjYWxjdWxhdGUgdGhlIG5leHQgZyBzY29yZVxyXG4gICAgICAgICAgICBuZyA9IG5vZGUuZyArICgoeCAtIG5vZGUueCA9PT0gMCB8fCB5IC0gbm9kZS55ID09PSAwKSA/IDEgOiBTUVJUMik7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbmVpZ2hib3IgaGFzIG5vdCBiZWVuIGluc3BlY3RlZCB5ZXQsIG9yXHJcbiAgICAgICAgICAgIC8vIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0IGZyb20gdGhlIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCB8fCBuZyA8IG5laWdoYm9yLmcpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmcgPSBuZztcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmggPSBuZWlnaGJvci5oIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ICogaGV1cmlzdGljKGFicyh4IC0gc3RhcnRYKSwgYWJzKHkgLSBzdGFydFkpKTtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLmYgPSBuZWlnaGJvci5nICsgbmVpZ2hib3IuaDtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRPcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSBCWV9FTkQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZWlnaGJvciBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBpdHMgZiB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkLCB3ZSBoYXZlIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGl0cyBwb3NpdGlvbiBpbiB0aGUgb3BlbiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kT3Blbkxpc3QudXBkYXRlSXRlbShuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIGVuZCBmb3IgZWFjaCBuZWlnaGJvclxyXG4gICAgfSAvLyBlbmQgd2hpbGUgbm90IG9wZW4gbGlzdCBlbXB0eVxyXG5cclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCaUFTdGFyRmluZGVyO1xyXG4iLCJ2YXIgQmlBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQmlBU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIEJpLWRpcmVjaXRpb25hbCBCZXN0LUZpcnN0LVNlYXJjaCBwYXRoLWZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlbmRzIEJpQVN0YXJGaW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICovXHJcbmZ1bmN0aW9uIEJpQmVzdEZpcnN0RmluZGVyKG9wdCkge1xyXG4gICAgQmlBU3RhckZpbmRlci5jYWxsKHRoaXMsIG9wdCk7XHJcblxyXG4gICAgdmFyIG9yaWcgPSB0aGlzLmhldXJpc3RpYztcclxuICAgIHRoaXMuaGV1cmlzdGljID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWcoZHgsIGR5KSAqIDEwMDAwMDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5CaUJlc3RGaXJzdEZpbmRlci5wcm90b3R5cGUgPSBuZXcgQmlBU3RhckZpbmRlcigpO1xyXG5CaUJlc3RGaXJzdEZpbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaUJlc3RGaXJzdEZpbmRlcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmlCZXN0Rmlyc3RGaW5kZXI7XHJcbiIsInZhciBVdGlsID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQmktZGlyZWN0aW9uYWwgQnJlYWR0aC1GaXJzdC1TZWFyY2ggcGF0aCBmaW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gQmlCcmVhZHRoRmlyc3RGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmFsbG93RGlhZ29uYWwgPSBvcHQuYWxsb3dEaWFnb25hbDtcclxuICAgIHRoaXMuZG9udENyb3NzQ29ybmVycyA9IG9wdC5kb250Q3Jvc3NDb3JuZXJzO1xyXG4gICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gb3B0LmRpYWdvbmFsTW92ZW1lbnQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkJpQnJlYWR0aEZpcnN0RmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICB2YXIgc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSxcclxuICAgICAgICBzdGFydE9wZW5MaXN0ID0gW10sIGVuZE9wZW5MaXN0ID0gW10sXHJcbiAgICAgICAgbmVpZ2hib3JzLCBuZWlnaGJvciwgbm9kZSxcclxuICAgICAgICBkaWFnb25hbE1vdmVtZW50ID0gdGhpcy5kaWFnb25hbE1vdmVtZW50LFxyXG4gICAgICAgIEJZX1NUQVJUID0gMCwgQllfRU5EID0gMSxcclxuICAgICAgICBpLCBsO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IGFuZCBlbmQgbm9kZXMgaW50byB0aGUgcXVldWVzXHJcbiAgICBzdGFydE9wZW5MaXN0LnB1c2goc3RhcnROb2RlKTtcclxuICAgIHN0YXJ0Tm9kZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgc3RhcnROb2RlLmJ5ID0gQllfU1RBUlQ7XHJcblxyXG4gICAgZW5kT3Blbkxpc3QucHVzaChlbmROb2RlKTtcclxuICAgIGVuZE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuICAgIGVuZE5vZGUuYnkgPSBCWV9FTkQ7XHJcblxyXG4gICAgLy8gd2hpbGUgYm90aCB0aGUgcXVldWVzIGFyZSBub3QgZW1wdHlcclxuICAgIHdoaWxlIChzdGFydE9wZW5MaXN0Lmxlbmd0aCAmJiBlbmRPcGVuTGlzdC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgLy8gZXhwYW5kIHN0YXJ0IG9wZW4gbGlzdFxyXG5cclxuICAgICAgICBub2RlID0gc3RhcnRPcGVuTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIG5vZGUgaGFzIGJlZW4gaW5zcGVjdGVkIGJ5IHRoZSByZXZlcnNlZCBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICAvLyB0aGVuIGEgcGF0aCBpcyBmb3VuZC5cclxuICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvci5ieSA9PT0gQllfRU5EKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmlCYWNrdHJhY2Uobm9kZSwgbmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhcnRPcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVpZ2hib3IuYnkgPSBCWV9TVEFSVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV4cGFuZCBlbmQgb3BlbiBsaXN0XHJcblxyXG4gICAgICAgIG5vZGUgPSBlbmRPcGVuTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3IuYnkgPT09IEJZX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmlCYWNrdHJhY2UobmVpZ2hib3IsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW5kT3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLmJ5ID0gQllfRU5EO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmlCcmVhZHRoRmlyc3RGaW5kZXI7XHJcbiIsInZhciBCaUFTdGFyRmluZGVyID0gcmVxdWlyZSgnLi9CaUFTdGFyRmluZGVyJyk7XHJcblxyXG4vKipcclxuICogQmktZGlyZWN0aW9uYWwgRGlqa3N0cmEgcGF0aC1maW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyBCaUFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBCaURpamtzdHJhRmluZGVyKG9wdCkge1xyXG4gICAgQmlBU3RhckZpbmRlci5jYWxsKHRoaXMsIG9wdCk7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxufVxyXG5cclxuQmlEaWprc3RyYUZpbmRlci5wcm90b3R5cGUgPSBuZXcgQmlBU3RhckZpbmRlcigpO1xyXG5CaURpamtzdHJhRmluZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJpRGlqa3N0cmFGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpRGlqa3N0cmFGaW5kZXI7XHJcbiIsInZhciBVdGlsID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQnJlYWR0aC1GaXJzdC1TZWFyY2ggcGF0aCBmaW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gQnJlYWR0aEZpcnN0RmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkJyZWFkdGhGaXJzdEZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIG9wZW5MaXN0ID0gW10sXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICBzdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgIG5laWdoYm9ycywgbmVpZ2hib3IsIG5vZGUsIGksIGw7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgc3RhcnQgcG9zIGludG8gdGhlIHF1ZXVlXHJcbiAgICBvcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyB3aGlsZSB0aGUgcXVldWUgaXMgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAob3Blbkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gdGFrZSB0aGUgZnJvbnQgbm9kZSBmcm9tIHRoZSBxdWV1ZVxyXG4gICAgICAgIG5vZGUgPSBvcGVuTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gcmVhY2hlZCB0aGUgZW5kIHBvc2l0aW9uXHJcbiAgICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmFja3RyYWNlKGVuZE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmVpZ2hib3JzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgZGlhZ29uYWxNb3ZlbWVudCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBza2lwIHRoaXMgbmVpZ2hib3IgaWYgaXQgaGFzIGJlZW4gaW5zcGVjdGVkIGJlZm9yZVxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3IuY2xvc2VkIHx8IG5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJyZWFkdGhGaXJzdEZpbmRlcjtcclxuIiwidmFyIEFTdGFyRmluZGVyID0gcmVxdWlyZSgnLi9BU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIERpamtzdHJhIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQVN0YXJGaW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIERpamtzdHJhRmluZGVyKG9wdCkge1xyXG4gICAgQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkRpamtzdHJhRmluZGVyLnByb3RvdHlwZSA9IG5ldyBBU3RhckZpbmRlcigpO1xyXG5EaWprc3RyYUZpbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEaWprc3RyYUZpbmRlcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlqa3N0cmFGaW5kZXI7XHJcbiIsInZhciBVdGlsICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBIZXVyaXN0aWMgID0gcmVxdWlyZSgnLi4vY29yZS9IZXVyaXN0aWMnKTtcclxudmFyIE5vZGUgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL05vZGUnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBJdGVyYXRpdmUgRGVlcGluZyBBIFN0YXIgKElEQSopIHBhdGgtZmluZGVyLlxyXG4gKlxyXG4gKiBSZWN1cnNpb24gYmFzZWQgb246XHJcbiAqICAgaHR0cDovL3d3dy5hcGwuamh1LmVkdS9+aGFsbC9BSS1Qcm9ncmFtbWluZy9JREEtU3Rhci5odG1sXHJcbiAqXHJcbiAqIFBhdGggcmV0cmFjaW5nIGJhc2VkIG9uOlxyXG4gKiAgVi4gTmFnZXNod2FyYSBSYW8sIFZpcGluIEt1bWFyIGFuZCBLLiBSYW1lc2hcclxuICogIFwiQSBQYXJhbGxlbCBJbXBsZW1lbnRhdGlvbiBvZiBJdGVyYXRpdmUtRGVlcGluZy1BKlwiLCBKYW51YXJ5IDE5ODcuXHJcbiAqICBmdHA6Ly9mdHAuY3MudXRleGFzLmVkdS8uc25hcHNob3QvaG91cmx5LjEvcHViL0FJLUxhYi90ZWNoLXJlcG9ydHMvVVQtQUktVFItODctNDYucGRmXHJcbiAqXHJcbiAqIEBhdXRob3IgR2VyYXJkIE1laWVyICh3d3cuZ2VyYXJkbWVpZXIuY29tKVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC53ZWlnaHQgV2VpZ2h0IHRvIGFwcGx5IHRvIHRoZSBoZXVyaXN0aWMgdG8gYWxsb3cgZm9yXHJcbiAqICAgICBzdWJvcHRpbWFsIHBhdGhzLCBpbiBvcmRlciB0byBzcGVlZCB1cCB0aGUgc2VhcmNoLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC50cmFja1JlY3Vyc2lvbiBXaGV0aGVyIHRvIHRyYWNrIHJlY3Vyc2lvbiBmb3JcclxuICogICAgIHN0YXRpc3RpY2FsIHB1cnBvc2VzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0LnRpbWVMaW1pdCBNYXhpbXVtIGV4ZWN1dGlvbiB0aW1lLiBVc2UgPD0gMCBmb3IgaW5maW5pdGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBJREFTdGFyRmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB0aGlzLndlaWdodCA9IG9wdC53ZWlnaHQgfHwgMTtcclxuICAgIHRoaXMudHJhY2tSZWN1cnNpb24gPSBvcHQudHJhY2tSZWN1cnNpb24gfHwgZmFsc2U7XHJcbiAgICB0aGlzLnRpbWVMaW1pdCA9IG9wdC50aW1lTGltaXQgfHwgSW5maW5pdHk7IC8vIERlZmF1bHQ6IG5vIHRpbWUgbGltaXQuXHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQgdGhlIG1hbmhhdHRhbiBoZXVyaXN0aWMgaXMgbm90XHJcbiAgICAvLyBhZG1pc3NpYmxlLCBpdCBzaG91bGQgYmUgb2N0aWxlIGluc3RlYWRcclxuICAgIGlmICh0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5vY3RpbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLiBXaGVuIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkLCBlaXRoZXJcclxuICogbm8gcGF0aCBpcyBwb3NzaWJsZSwgb3IgdGhlIG1heGltdW0gZXhlY3V0aW9uIHRpbWUgaXMgcmVhY2hlZC5cclxuICpcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5JREFTdGFyRmluZGVyLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICAvLyBVc2VkIGZvciBzdGF0aXN0aWNzOlxyXG4gICAgdmFyIG5vZGVzVmlzaXRlZCA9IDA7XHJcblxyXG4gICAgLy8gRXhlY3V0aW9uIHRpbWUgbGltaXRhdGlvbjpcclxuICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAvLyBIZXVyaXN0aWMgaGVscGVyOlxyXG4gICAgdmFyIGggPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGV1cmlzdGljKE1hdGguYWJzKGIueCAtIGEueCksIE1hdGguYWJzKGIueSAtIGEueSkpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vIFN0ZXAgY29zdCBmcm9tIGEgdG8gYjpcclxuICAgIHZhciBjb3N0ID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiAoYS54ID09PSBiLnggfHwgYS55ID09PSBiLnkpID8gMSA6IE1hdGguU1FSVDI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSURBKiBzZWFyY2ggaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBUaGUgbm9kZSBjdXJyZW50bHkgZXhwYW5kaW5nIGZyb20uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gQ29zdCB0byByZWFjaCB0aGUgZ2l2ZW4gbm9kZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBNYXhpbXVtIHNlYXJjaCBkZXB0aCAoY3V0LW9mZiB2YWx1ZSkuXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgZm91bmQgcm91dGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gUmVjdXJzaW9uIGRlcHRoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gZWl0aGVyIGEgbnVtYmVyIHdpdGggdGhlIG5ldyBvcHRpbWFsIGN1dC1vZmYgZGVwdGgsXHJcbiAgICAgKiBvciBhIHZhbGlkIG5vZGUgaW5zdGFuY2UsIGluIHdoaWNoIGNhc2UgYSBwYXRoIHdhcyBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgdmFyIHNlYXJjaCA9IGZ1bmN0aW9uKG5vZGUsIGcsIGN1dG9mZiwgcm91dGUsIGRlcHRoKSB7XHJcbiAgICAgICAgbm9kZXNWaXNpdGVkKys7XHJcblxyXG4gICAgICAgIC8vIEVuZm9yY2UgdGltZWxpbWl0OlxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMaW1pdCA+IDAgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUgPiB0aGlzLnRpbWVMaW1pdCAqIDEwMDApIHtcclxuICAgICAgICAgICAgLy8gRW5mb3JjZWQgYXMgXCJwYXRoLW5vdC1mb3VuZFwiLlxyXG4gICAgICAgICAgICByZXR1cm4gSW5maW5pdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZiA9IGcgKyBoKG5vZGUsIGVuZCkgKiB0aGlzLndlaWdodDtcclxuXHJcbiAgICAgICAgLy8gV2UndmUgc2VhcmNoZWQgdG9vIGRlZXAgZm9yIHRoaXMgaXRlcmF0aW9uLlxyXG4gICAgICAgIGlmIChmID4gY3V0b2ZmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUgPT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHJvdXRlW2RlcHRoXSA9IFtub2RlLngsIG5vZGUueV07XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1pbiwgdCwgaywgbmVpZ2hib3VyO1xyXG5cclxuICAgICAgICB2YXIgbmVpZ2hib3VycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgdGhlIG5laWdoYm91cnMsIGdpdmVzIG5pY2VyIHBhdGhzLiBCdXQsIHRoaXMgZGV2aWF0ZXNcclxuICAgICAgICAvLyBmcm9tIHRoZSBvcmlnaW5hbCBhbGdvcml0aG0gLSBzbyBJIGxlZnQgaXQgb3V0LlxyXG4gICAgICAgIC8vbmVpZ2hib3Vycy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIC8vICAgIHJldHVybiBoKGEsIGVuZCkgLSBoKGIsIGVuZCk7XHJcbiAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLypqc2hpbnQgLVcwODQgKi8vL0Rpc2FibGUgd2FybmluZzogRXhwZWN0ZWQgYSBjb25kaXRpb25hbCBleHByZXNzaW9uIGFuZCBpbnN0ZWFkIHNhdyBhbiBhc3NpZ25tZW50XHJcbiAgICAgICAgZm9yIChrID0gMCwgbWluID0gSW5maW5pdHk7IG5laWdoYm91ciA9IG5laWdoYm91cnNba107ICsraykge1xyXG4gICAgICAgIC8qanNoaW50ICtXMDg0ICovLy9FbmFibGUgd2FybmluZzogRXhwZWN0ZWQgYSBjb25kaXRpb25hbCBleHByZXNzaW9uIGFuZCBpbnN0ZWFkIHNhdyBhbiBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrUmVjdXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXRhaW4gYSBjb3B5IGZvciB2aXN1YWxpc2F0aW9uLiBEdWUgdG8gcmVjdXJzaW9uLCB0aGlzXHJcbiAgICAgICAgICAgICAgICAvLyBub2RlIG1heSBiZSBwYXJ0IG9mIG90aGVyIHBhdGhzIHRvby5cclxuICAgICAgICAgICAgICAgIG5laWdoYm91ci5yZXRhaW5Db3VudCA9IG5laWdoYm91ci5yZXRhaW5Db3VudCArIDEgfHwgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihuZWlnaGJvdXIudGVzdGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3VyLnRlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHQgPSBzZWFyY2gobmVpZ2hib3VyLCBnICsgY29zdChub2RlLCBuZWlnaGJvdXIpLCBjdXRvZmYsIHJvdXRlLCBkZXB0aCArIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZVtkZXB0aF0gPSBbbm9kZS54LCBub2RlLnldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZvciBhIHR5cGljYWwgQSogbGlua2VkIGxpc3QsIHRoaXMgd291bGQgd29yazpcclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ci5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERlY3JlbWVudCBjb3VudCwgdGhlbiBkZXRlcm1pbmUgd2hldGhlciBpdCdzIGFjdHVhbGx5IGNsb3NlZC5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tSZWN1cnNpb24gJiYgKC0tbmVpZ2hib3VyLnJldGFpbkNvdW50KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3VyLnRlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodCA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgbWluID0gdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuXHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy8gTm9kZSBpbnN0YW5jZSBsb29rdXBzOlxyXG4gICAgdmFyIHN0YXJ0ID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpO1xyXG4gICAgdmFyIGVuZCAgID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBzZWFyY2ggZGVwdGgsIGdpdmVuIHRoZSB0eXBpY2FsIGhldXJpc3RpYyBjb250cmFpbnRzLFxyXG4gICAgLy8gdGhlcmUgc2hvdWxkIGJlIG5vIGNoZWFwZXIgcm91dGUgcG9zc2libGUuXHJcbiAgICB2YXIgY3V0T2ZmID0gaChzdGFydCwgZW5kKTtcclxuXHJcbiAgICB2YXIgaiwgcm91dGUsIHQ7XHJcblxyXG4gICAgLy8gV2l0aCBhbiBvdmVyZmxvdyBwcm90ZWN0aW9uLlxyXG4gICAgZm9yIChqID0gMDsgdHJ1ZTsgKytqKSB7XHJcblxyXG4gICAgICAgIHJvdXRlID0gW107XHJcblxyXG4gICAgICAgIC8vIFNlYXJjaCB0aWxsIGN1dC1vZmYgZGVwdGg6XHJcbiAgICAgICAgdCA9IHNlYXJjaChzdGFydCwgMCwgY3V0T2ZmLCByb3V0ZSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFJvdXRlIG5vdCBwb3NzaWJsZSwgb3Igbm90IGZvdW5kIGluIHRpbWUgbGltaXQuXHJcbiAgICAgICAgaWYgKHQgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHQgaXMgYSBub2RlLCBpdCdzIGFsc28gdGhlIGVuZCBub2RlLiBSb3V0ZSBpcyBub3dcclxuICAgICAgICAvLyBwb3B1bGF0ZWQgd2l0aCBhIHZhbGlkIHBhdGggdG8gdGhlIGVuZCBub2RlLlxyXG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUcnkgYWdhaW4sIHRoaXMgdGltZSB3aXRoIGEgZGVlcGVyIGN1dC1vZmYuIFRoZSB0IHNjb3JlXHJcbiAgICAgICAgLy8gaXMgdGhlIGNsb3Nlc3Qgd2UgZ290IHRvIHRoZSBlbmQgbm9kZS5cclxuICAgICAgICBjdXRPZmYgPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgX3Nob3VsZF8gbmV2ZXIgdG8gYmUgcmVhY2hlZC5cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSURBU3RhckZpbmRlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSnVtcFBvaW50RmluZGVyQmFzZSA9IHJlcXVpcmUoJy4vSnVtcFBvaW50RmluZGVyQmFzZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG0gd2hpY2ggYWx3YXlzIG1vdmVzXHJcbiAqIGRpYWdvbmFsbHkgaXJyZXNwZWN0aXZlIG9mIHRoZSBudW1iZXIgb2Ygb2JzdGFjbGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkob3B0KSB7XHJcbiAgICBKdW1wUG9pbnRGaW5kZXJCYXNlLmNhbGwodGhpcywgb3B0KTtcclxufVxyXG5cclxuSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSlBGQWx3YXlzTW92ZURpYWdvbmFsbHk7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHJlY3Vyc2l2ZWx5IGluIHRoZSBkaXJlY3Rpb24gKHBhcmVudCAtPiBjaGlsZCksIHN0b3BwaW5nIG9ubHkgd2hlbiBhXHJcbiAqIGp1bXAgcG9pbnQgaXMgZm91bmQuXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSB4LCB5IGNvb3JkaW5hdGUgb2YgdGhlIGp1bXAgcG9pbnRcclxuICogICAgIGZvdW5kLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIGZvcmNlZCBuZWlnaGJvcnNcclxuICAgIC8vIGFsb25nIHRoZSBkaWFnb25hbFxyXG4gICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHx8XHJcbiAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgY2hlY2sgZm9yIHZlcnRpY2FsL2hvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICBpZiAodGhpcy5fanVtcCh4ICsgZHgsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCwgeSArIGR5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiggZHggIT09IDAgKSB7IC8vIG1vdmluZyBhbG9uZyB4XHJcbiAgICAgICAgICAgIGlmKChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgKyAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB8fFxyXG4gICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB8fFxyXG4gICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2p1bXAoeCArIGR4LCB5ICsgZHksIHgsIHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIG5laWdoYm9ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIElmIHRoZSBub2RlIGhhcyBhIHBhcmVudCxcclxuICogcHJ1bmUgdGhlIG5laWdoYm9ycyBiYXNlZCBvbiB0aGUganVtcCBwb2ludCBzZWFyY2ggYWxnb3JpdGhtLCBvdGhlcndpc2VcclxuICogcmV0dXJuIGFsbCBhdmFpbGFibGUgbmVpZ2hib3JzLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIG5laWdoYm9ycyBmb3VuZC5cclxuICovXHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoIGRpYWdvbmFsbHlcclxuICAgICAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSBkeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZWFyY2ggaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYWxsIG5laWdoYm9yc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JOb2RlcyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIERpYWdvbmFsTW92ZW1lbnQuQWx3YXlzKTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JOb2Rlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3JOb2RlID0gbmVpZ2hib3JOb2Rlc1tpXTtcclxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yTm9kZS54LCBuZWlnaGJvck5vZGUueV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKUEZBbHdheXNNb3ZlRGlhZ29uYWxseTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSnVtcFBvaW50RmluZGVyQmFzZSA9IHJlcXVpcmUoJy4vSnVtcFBvaW50RmluZGVyQmFzZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG0gd2hpY2ggbW92ZXNcclxuICogZGlhZ29uYWxseSBvbmx5IHdoZW4gdGhlcmUgaXMgYXQgbW9zdCBvbmUgb2JzdGFjbGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBKUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUob3B0KSB7XHJcbiAgICBKdW1wUG9pbnRGaW5kZXJCYXNlLmNhbGwodGhpcywgb3B0KTtcclxufVxyXG5cclxuSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlLnByb3RvdHlwZSA9IG5ldyBKdW1wUG9pbnRGaW5kZXJCYXNlKCk7XHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGU7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHJlY3Vyc2l2ZWx5IGluIHRoZSBkaXJlY3Rpb24gKHBhcmVudCAtPiBjaGlsZCksIHN0b3BwaW5nIG9ubHkgd2hlbiBhXHJcbiAqIGp1bXAgcG9pbnQgaXMgZm91bmQuXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSB4LCB5IGNvb3JkaW5hdGUgb2YgdGhlIGp1bXAgcG9pbnRcclxuICogICAgIGZvdW5kLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlLnByb3RvdHlwZS5fanVtcCA9IGZ1bmN0aW9uKHgsIHksIHB4LCBweSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgZHggPSB4IC0gcHgsIGR5ID0geSAtIHB5O1xyXG5cclxuICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGdyaWQuZ2V0Tm9kZUF0KHgsIHkpLnRlc3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyaWQuZ2V0Tm9kZUF0KHgsIHkpID09PSB0aGlzLmVuZE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBmb3JjZWQgbmVpZ2hib3JzXHJcbiAgICAvLyBhbG9uZyB0aGUgZGlhZ29uYWxcclxuICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IGNoZWNrIGZvciB2ZXJ0aWNhbC9ob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuX2p1bXAoeCArIGR4LCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHgsIHkgKyBkeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYoIGR4ICE9PSAwICkgeyAvLyBtb3ZpbmcgYWxvbmcgeFxyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5ICsgMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IG1ha2Ugc3VyZSBvbmUgb2YgdGhlIHZlcnRpY2FsL2hvcml6b250YWxcclxuICAgIC8vIG5laWdoYm9ycyBpcyBvcGVuIHRvIGFsbG93IHRoZSBwYXRoXHJcbiAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSB8fCBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2p1bXAoeCArIGR4LCB5ICsgZHksIHgsIHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUucHJvdG90eXBlLl9maW5kTmVpZ2hib3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50LFxyXG4gICAgICAgIHggPSBub2RlLngsIHkgPSBub2RlLnksXHJcbiAgICAgICAgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBweCwgcHksIG54LCBueSwgZHgsIGR5LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLCBuZWlnaGJvck5vZGVzLCBuZWlnaGJvck5vZGUsIGksIGw7XHJcblxyXG4gICAgLy8gZGlyZWN0ZWQgcHJ1bmluZzogY2FuIGlnbm9yZSBtb3N0IG5laWdoYm9ycywgdW5sZXNzIGZvcmNlZC5cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBweCA9IHBhcmVudC54O1xyXG4gICAgICAgIHB5ID0gcGFyZW50Lnk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBub3JtYWxpemVkIGRpcmVjdGlvbiBvZiB0cmF2ZWxcclxuICAgICAgICBkeCA9ICh4IC0gcHgpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHB4KSwgMSk7XHJcbiAgICAgICAgZHkgPSAoeSAtIHB5KSAvIE1hdGgubWF4KE1hdGguYWJzKHkgLSBweSksIDEpO1xyXG5cclxuICAgICAgICAvLyBzZWFyY2ggZGlhZ29uYWxseVxyXG4gICAgICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkgfHwgZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpICYmIGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSAmJiBncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZWFyY2ggaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYWxsIG5laWdoYm9yc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JOb2RlcyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZSk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBKdW1wUG9pbnRGaW5kZXJCYXNlID0gcmVxdWlyZSgnLi9KdW1wUG9pbnRGaW5kZXJCYXNlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobSB3aGljaCBtb3Zlc1xyXG4gKiBkaWFnb25hbGx5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbm8gb2JzdGFjbGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzKG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcy5wcm90b3R5cGUgPSBuZXcgSnVtcFBvaW50RmluZGVyQmFzZSgpO1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzO1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcy5wcm90b3R5cGUuX2p1bXAgPSBmdW5jdGlvbih4LCB5LCBweCwgcHkpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGR4ID0geCAtIHB4LCBkeSA9IHkgLSBweTtcclxuXHJcbiAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy50cmFja0p1bXBSZWN1cnNpb24gPT09IHRydWUpIHtcclxuICAgICAgICBncmlkLmdldE5vZGVBdCh4LCB5KS50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmlkLmdldE5vZGVBdCh4LCB5KSA9PT0gdGhpcy5lbmROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBmb3IgZm9yY2VkIG5laWdoYm9yc1xyXG4gICAgLy8gYWxvbmcgdGhlIGRpYWdvbmFsXHJcbiAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAvLyBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSkgfHxcclxuICAgICAgICAgICAgLy8gKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBjaGVjayBmb3IgdmVydGljYWwvaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyBkeCwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4LCB5ICsgZHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChkeCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5IC0gMSkpIHx8XHJcbiAgICAgICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyAxKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5IC0gZHkpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFdoZW4gbW92aW5nIHZlcnRpY2FsbHksIG11c3QgY2hlY2sgZm9yIGhvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2p1bXAoeCArIDEsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCAtIDEsIHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IG1ha2Ugc3VyZSBvbmUgb2YgdGhlIHZlcnRpY2FsL2hvcml6b250YWxcclxuICAgIC8vIG5laWdoYm9ycyBpcyBvcGVuIHRvIGFsbG93IHRoZSBwYXRoXHJcbiAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSAmJiBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2p1bXAoeCArIGR4LCB5ICsgZHksIHgsIHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlLl9maW5kTmVpZ2hib3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50LFxyXG4gICAgICAgIHggPSBub2RlLngsIHkgPSBub2RlLnksXHJcbiAgICAgICAgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBweCwgcHksIG54LCBueSwgZHgsIGR5LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLCBuZWlnaGJvck5vZGVzLCBuZWlnaGJvck5vZGUsIGksIGw7XHJcblxyXG4gICAgLy8gZGlyZWN0ZWQgcHJ1bmluZzogY2FuIGlnbm9yZSBtb3N0IG5laWdoYm9ycywgdW5sZXNzIGZvcmNlZC5cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBweCA9IHBhcmVudC54O1xyXG4gICAgICAgIHB5ID0gcGFyZW50Lnk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBub3JtYWxpemVkIGRpcmVjdGlvbiBvZiB0cmF2ZWxcclxuICAgICAgICBkeCA9ICh4IC0gcHgpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHB4KSwgMSk7XHJcbiAgICAgICAgZHkgPSAoeSAtIHB5KSAvIE1hdGgubWF4KE1hdGguYWJzKHkgLSBweSksIDEpO1xyXG5cclxuICAgICAgICAvLyBzZWFyY2ggZGlhZ29uYWxseVxyXG4gICAgICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VhcmNoIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpc05leHRXYWxrYWJsZTtcclxuICAgICAgICAgICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc05leHRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUb3BXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0JvdHRvbVdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc05leHRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3BXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCb3R0b21XYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc1RvcFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCb3R0b21XYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc05leHRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNSaWdodFdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzTGVmdFdhbGthYmxlID0gZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc05leHRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSaWdodFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgMSwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZnRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0xlZnRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gMSwgeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXMpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvck5vZGVzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvck5vZGUgPSBuZWlnaGJvck5vZGVzW2ldO1xyXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbbmVpZ2hib3JOb2RlLngsIG5laWdoYm9yTm9kZS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcztcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSnVtcFBvaW50RmluZGVyQmFzZSA9IHJlcXVpcmUoJy4vSnVtcFBvaW50RmluZGVyQmFzZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG0gYWxsb3dpbmcgb25seSBob3Jpem9udGFsXHJcbiAqIG9yIHZlcnRpY2FsIG1vdmVtZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIEpQRk5ldmVyTW92ZURpYWdvbmFsbHkob3B0KSB7XHJcbiAgICBKdW1wUG9pbnRGaW5kZXJCYXNlLmNhbGwodGhpcywgb3B0KTtcclxufVxyXG5cclxuSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUgPSBuZXcgSnVtcFBvaW50RmluZGVyQmFzZSgpO1xyXG5KUEZOZXZlck1vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRk5ldmVyTW92ZURpYWdvbmFsbHk7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHJlY3Vyc2l2ZWx5IGluIHRoZSBkaXJlY3Rpb24gKHBhcmVudCAtPiBjaGlsZCksIHN0b3BwaW5nIG9ubHkgd2hlbiBhXHJcbiAqIGp1bXAgcG9pbnQgaXMgZm91bmQuXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSB4LCB5IGNvb3JkaW5hdGUgb2YgdGhlIGp1bXAgcG9pbnRcclxuICogICAgIGZvdW5kLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuX2p1bXAgPSBmdW5jdGlvbih4LCB5LCBweCwgcHkpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGR4ID0geCAtIHB4LCBkeSA9IHkgLSBweTtcclxuXHJcbiAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy50cmFja0p1bXBSZWN1cnNpb24gPT09IHRydWUpIHtcclxuICAgICAgICBncmlkLmdldE5vZGVBdCh4LCB5KS50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmlkLmdldE5vZGVBdCh4LCB5KSA9PT0gdGhpcy5lbmROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHggIT09IDApIHtcclxuICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5IC0gMSkpIHx8XHJcbiAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIDEpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGR5ICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5IC0gZHkpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9XaGVuIG1vdmluZyB2ZXJ0aWNhbGx5LCBtdXN0IGNoZWNrIGZvciBob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuX2p1bXAoeCArIDEsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCAtIDEsIHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBtb3ZlbWVudHMgYXJlIGFsbG93ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2p1bXAoeCArIGR4LCB5ICsgZHksIHgsIHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIG5laWdoYm9ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIElmIHRoZSBub2RlIGhhcyBhIHBhcmVudCxcclxuICogcHJ1bmUgdGhlIG5laWdoYm9ycyBiYXNlZCBvbiB0aGUganVtcCBwb2ludCBzZWFyY2ggYWxnb3JpdGhtLCBvdGhlcndpc2VcclxuICogcmV0dXJuIGFsbCBhdmFpbGFibGUgbmVpZ2hib3JzLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIG5laWdoYm9ycyBmb3VuZC5cclxuICovXHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLl9maW5kTmVpZ2hib3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50LFxyXG4gICAgICAgIHggPSBub2RlLngsIHkgPSBub2RlLnksXHJcbiAgICAgICAgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBweCwgcHksIG54LCBueSwgZHgsIGR5LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLCBuZWlnaGJvck5vZGVzLCBuZWlnaGJvck5vZGUsIGksIGw7XHJcblxyXG4gICAgLy8gZGlyZWN0ZWQgcHJ1bmluZzogY2FuIGlnbm9yZSBtb3N0IG5laWdoYm9ycywgdW5sZXNzIGZvcmNlZC5cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBweCA9IHBhcmVudC54O1xyXG4gICAgICAgIHB5ID0gcGFyZW50Lnk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBub3JtYWxpemVkIGRpcmVjdGlvbiBvZiB0cmF2ZWxcclxuICAgICAgICBkeCA9ICh4IC0gcHgpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHB4KSwgMSk7XHJcbiAgICAgICAgZHkgPSAoeSAtIHB5KSAvIE1hdGgubWF4KE1hdGguYWJzKHkgLSBweSksIDEpO1xyXG5cclxuICAgICAgICBpZiAoZHggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3gsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JOb2Rlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3JOb2RlID0gbmVpZ2hib3JOb2Rlc1tpXTtcclxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yTm9kZS54LCBuZWlnaGJvck5vZGUueV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKUEZOZXZlck1vdmVEaWFnb25hbGx5O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBhbmllcm8gLyBodHRwczovL2dpdGh1Yi5jb20vYW5pZXJvXHJcbiAqL1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG52YXIgSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseSA9IHJlcXVpcmUoJy4vSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseScpO1xyXG52YXIgSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkgPSByZXF1aXJlKCcuL0pQRkFsd2F5c01vdmVEaWFnb25hbGx5Jyk7XHJcbnZhciBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMgPSByZXF1aXJlKCcuL0pQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcycpO1xyXG52YXIgSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlID0gcmVxdWlyZSgnLi9KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBDb25kaXRpb24gdW5kZXIgd2hpY2ggZGlhZ29uYWxcclxuICogICAgICBtb3ZlbWVudCB3aWxsIGJlIGFsbG93ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBKdW1wUG9pbnRGaW5kZXIob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICBpZiAob3B0LmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEpQRk5ldmVyTW92ZURpYWdvbmFsbHkob3B0KTtcclxuICAgIH0gZWxzZSBpZiAob3B0LmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuQWx3YXlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKUEZBbHdheXNNb3ZlRGlhZ29uYWxseShvcHQpO1xyXG4gICAgfSBlbHNlIGlmIChvcHQuZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMob3B0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUob3B0KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKdW1wUG9pbnRGaW5kZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEhlYXAgICAgICAgPSByZXF1aXJlKCdoZWFwJyk7XHJcbnZhciBVdGlsICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9VdGlsJyk7XHJcbnZhciBIZXVyaXN0aWMgID0gcmVxdWlyZSgnLi4vY29yZS9IZXVyaXN0aWMnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICovXHJcbmZ1bmN0aW9uIEp1bXBQb2ludEZpbmRlckJhc2Uob3B0KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID0gb3B0LnRyYWNrSnVtcFJlY3Vyc2lvbiB8fCBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYW5kIHJldHVybiB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5KdW1wUG9pbnRGaW5kZXJCYXNlLnByb3RvdHlwZS5maW5kUGF0aCA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBncmlkKSB7XHJcbiAgICB2YXIgb3Blbkxpc3QgPSB0aGlzLm9wZW5MaXN0ID0gbmV3IEhlYXAoZnVuY3Rpb24obm9kZUEsIG5vZGVCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlQS5mIC0gbm9kZUIuZjtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gdGhpcy5lbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksIG5vZGU7XHJcblxyXG4gICAgdGhpcy5ncmlkID0gZ3JpZDtcclxuXHJcblxyXG4gICAgLy8gc2V0IHRoZSBgZ2AgYW5kIGBmYCB2YWx1ZSBvZiB0aGUgc3RhcnQgbm9kZSB0byBiZSAwXHJcbiAgICBzdGFydE5vZGUuZyA9IDA7XHJcbiAgICBzdGFydE5vZGUuZiA9IDA7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgc3RhcnQgbm9kZSBpbnRvIHRoZSBvcGVuIGxpc3RcclxuICAgIG9wZW5MaXN0LnB1c2goc3RhcnROb2RlKTtcclxuICAgIHN0YXJ0Tm9kZS5vcGVuZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIHdoaWxlIHRoZSBvcGVuIGxpc3QgaXMgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAoIW9wZW5MaXN0LmVtcHR5KCkpIHtcclxuICAgICAgICAvLyBwb3AgdGhlIHBvc2l0aW9uIG9mIG5vZGUgd2hpY2ggaGFzIHRoZSBtaW5pbXVtIGBmYCB2YWx1ZS5cclxuICAgICAgICBub2RlID0gb3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHBhbmRQYXRoKFV0aWwuYmFja3RyYWNlKGVuZE5vZGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lkZW50aWZ5U3VjY2Vzc29ycyhub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmeSBzdWNjZXNzb3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gUnVucyBhIGp1bXAgcG9pbnQgc2VhcmNoIGluIHRoZVxyXG4gKiBkaXJlY3Rpb24gb2YgZWFjaCBhdmFpbGFibGUgbmVpZ2hib3IsIGFkZGluZyBhbnkgcG9pbnRzIGZvdW5kIHRvIHRoZSBvcGVuXHJcbiAqIGxpc3QuXHJcbiAqIEBwcm90ZWN0ZWRcclxuICovXHJcbkp1bXBQb2ludEZpbmRlckJhc2UucHJvdG90eXBlLl9pZGVudGlmeVN1Y2Nlc3NvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBoZXVyaXN0aWMgPSB0aGlzLmhldXJpc3RpYyxcclxuICAgICAgICBvcGVuTGlzdCA9IHRoaXMub3Blbkxpc3QsXHJcbiAgICAgICAgZW5kWCA9IHRoaXMuZW5kTm9kZS54LFxyXG4gICAgICAgIGVuZFkgPSB0aGlzLmVuZE5vZGUueSxcclxuICAgICAgICBuZWlnaGJvcnMsIG5laWdoYm9yLFxyXG4gICAgICAgIGp1bXBQb2ludCwgaSwgbCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGp4LCBqeSwgZHgsIGR5LCBkLCBuZywganVtcE5vZGUsXHJcbiAgICAgICAgYWJzID0gTWF0aC5hYnMsIG1heCA9IE1hdGgubWF4O1xyXG5cclxuICAgIG5laWdoYm9ycyA9IHRoaXMuX2ZpbmROZWlnaGJvcnMobm9kZSk7XHJcbiAgICBmb3IoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XHJcbiAgICAgICAganVtcFBvaW50ID0gdGhpcy5fanVtcChuZWlnaGJvclswXSwgbmVpZ2hib3JbMV0sIHgsIHkpO1xyXG4gICAgICAgIGlmIChqdW1wUG9pbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGp4ID0ganVtcFBvaW50WzBdO1xyXG4gICAgICAgICAgICBqeSA9IGp1bXBQb2ludFsxXTtcclxuICAgICAgICAgICAganVtcE5vZGUgPSBncmlkLmdldE5vZGVBdChqeCwgankpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGp1bXBOb2RlLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgZGlzdGFuY2UsIGFzIHBhcmVudCBtYXkgbm90IGJlIGltbWVkaWF0ZWx5IGFkamFjZW50OlxyXG4gICAgICAgICAgICBkID0gSGV1cmlzdGljLm9jdGlsZShhYnMoanggLSB4KSwgYWJzKGp5IC0geSkpO1xyXG4gICAgICAgICAgICBuZyA9IG5vZGUuZyArIGQ7IC8vIG5leHQgYGdgIHZhbHVlXHJcblxyXG4gICAgICAgICAgICBpZiAoIWp1bXBOb2RlLm9wZW5lZCB8fCBuZyA8IGp1bXBOb2RlLmcpIHtcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLmcgPSBuZztcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLmggPSBqdW1wTm9kZS5oIHx8IGhldXJpc3RpYyhhYnMoanggLSBlbmRYKSwgYWJzKGp5IC0gZW5kWSkpO1xyXG4gICAgICAgICAgICAgICAganVtcE5vZGUuZiA9IGp1bXBOb2RlLmcgKyBqdW1wTm9kZS5oO1xyXG4gICAgICAgICAgICAgICAganVtcE5vZGUucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWp1bXBOb2RlLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnB1c2goanVtcE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1bXBOb2RlLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnVwZGF0ZUl0ZW0oanVtcE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKdW1wUG9pbnRGaW5kZXJCYXNlO1xyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCB7R2xvYmFsc30gZnJvbSAnLi9HbG9iYWxzLmpzeCdcclxuaW1wb3J0IHtFbmdpbmV9IGZyb20gJy4vRW5naW5lLmpzeCc7XHJcbmltcG9ydCBQRiBmcm9tICdwYXRoZmluZGluZyc7XHJcbmltcG9ydCB7Q29tYmF0TWFuYWdlcn0gZnJvbSAnLi9Db21iYXRNYW5hZ2VyLmpzeCdcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXJlYSBleHRlbmRzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoaWQsIGNhbnZhcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY29tYmF0ID0gbnVsbDtcclxuICAgIHRoaXMubG9hZGVySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zb2xlLmxvZygnaW5pdCBhcmVhIHdpdGggaWQnLCB0aGlzLmlkKTtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgXHJcbiAgICB0aGlzLndhbGtQb2ludHMgPSBbXTtcclxuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjAsIHk6NjczfSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDozMjksIHk6NjczfSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDo0NDAsIHk6MzczfSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDo1MDgsIHk6MzczfSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDo2NTgsIHk6NjczfSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDoxMDIzLCB5OjY3M30pO1xyXG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MTAyMywgeTo3Njd9KTtcclxuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjAsIHk6NzY3fSk7XHJcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5OjY3M30pO1xyXG4gICAgXHJcbiAgICB0aGlzLmFjdG9ycyA9IFtdO1xyXG4gICAgdGhpcy5kZWNvciA9IFtdO1xyXG4gICAgXHJcbiAgICAvLzM5OHB4IC8gMzAgZmVldCA9IDEzLjNcclxuICAgIHRoaXMuaGVpZ2h0ID0gNzY4O1xyXG4gICAgdGhpcy53aWR0aCA9IDEwMjQ7XHJcbiAgICB0aGlzLnZhbmlzaGluZ1BvaW50ID0gMjAyO1xyXG4gICAgXHJcbiAgICB0aGlzLndhbGtQYXRoO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbWJhdE9uID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHRoaXMuZ3JpZCA9IG51bGw7XHJcbiAgICBcclxuICAgIEdsb2JhbHMuU2V0dXBQYXRoV29ya2VyKHRoaXMud2Fsa1BvaW50cyk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFBsYXllcigpIHtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuYWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdG9yc1tpXS50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9QTEFZRVIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RvcnNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBcclxuICByZW5kZXJCYWNrZ3JvdW5kKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0QmFja2dyb3VuZEltYWdlKCdpbWcvYXJlYXMvYXJlYTAxLnBuZycsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmluZyB0bycsIHRoaXMpO1xyXG4gICAgICB0aGlzLmRyYXdXYWxrcGF0aCgpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBkcmF3V2Fsa3BhdGgoKSB7XHJcbiAgICB0aGlzLndhbGtQYXRoID0gdGhpcy5jYW52YXMuY29udGV4dFRvcDtcclxuICAgIHRoaXMud2Fsa1BhdGguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLndhbGtQYXRoLm1vdmVUbyh0aGlzLndhbGtQb2ludHNbMF0ueCwgdGhpcy53YWxrUG9pbnRzWzBdLnkpO1xyXG4gICAgZm9yIChsZXQgaT0xOyBpIDwgdGhpcy53YWxrUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMud2Fsa1BhdGgubGluZVRvKHRoaXMud2Fsa1BvaW50c1tpXS54LCB0aGlzLndhbGtQb2ludHNbaV0ueSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndhbGtQYXRoLmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy53YWxrUGF0aC5maWxsU3R5bGUgPSBcIiM3ZmZmZDRcIjtcclxuICAgIHRoaXMud2Fsa1BhdGguZ2xvYmFsQWxwaGEgPSAwO1xyXG4gICAgdGhpcy53YWxrUGF0aC5maWxsKCk7XHJcbiAgICB0aGlzLndhbGtQYXRoLnNhdmUoKTtcclxuICAgIHRoaXMud2Fsa1BhdGguY2FudmFzLm9uY2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKCk7XHJcbiAgICAgIGlmIChwbGF5ZXIudGFyZ2V0QWNxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcGxheWVyLmNhbmNlbEFuaW1hdGlvbnMoKTtcclxuICAgICAgbGV0IGJvdW5kcyA9IHRoaXMud2Fsa1BhdGguY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBsZXQgc3RhcnQgPSB7fTtcclxuICAgICAgc3RhcnQueCA9IHBsYXllci5nZXRYKCk7XHJcbiAgICAgIHN0YXJ0LnkgPSBwbGF5ZXIuZ2V0WSgpO1xyXG4gICAgICBsZXQgZW5kID0ge307XHJcbiAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChldmVudC5jbGllbnRYIC0gYm91bmRzLmxlZnQpO1xyXG4gICAgICBlbmQueSA9IE1hdGgucm91bmQoZXZlbnQuY2xpZW50WSAtIGJvdW5kcy50b3ApO1xyXG4gICAgICBpZiAodGhpcy53YWxrUGF0aC5pc1BvaW50SW5QYXRoKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAnY2xpY2tlZEdyb3VuZCc7XHJcbiAgICAgICAgb2JqLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgb2JqLmVuZCA9IGVuZDtcclxuICAgICAgICBvYmoud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIG9iai5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBvYmoucGF0aCA9IHRoaXMud2Fsa1BvaW50cztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IHJvdXRlID0gYXdhaXQgR2xvYmFscy5TZW5kVG9Xb3JrZXIob2JqKTtcclxuICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuY2xpY2tlZEdyb3VuZFBhdGhSZXN1bHRzKHJvdXRlLnBhdGgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5sb2FkZXJJbWcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9BUkVBX1JFQURZKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGVuZENvbWJhdFR1cm4oKSB7XHJcbiAgICBpZiAodGhpcy5jb21iYXQpIHtcclxuICAgICAgdGhpcy5jb21iYXQuZW5kUGxheWVyVHVybigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBlbnRlckNvbWJhdChpbml0aWF0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBjb21iYXQnKTtcclxuICAgIGlmICh0aGlzLmdldFBsYXllcigpKSB7XHJcbiAgICAgIHRoaXMuY29tYmF0T24gPSB0cnVlO1xyXG4gICAgICB0aGlzLmNvbWJhdCA9IG5ldyBDb21iYXRNYW5hZ2VyKHRoaXMsIGluaXRpYXRlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4aXRDb21iYXQoKSB7XHJcbiAgICB0aGlzLmNvbWJhdE9uID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJhdE1hbmFnZXIge1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGFyZWEsIGluaXRpYXRlZCkge1xyXG4gICAgdGhpcy5hcmVhID0gYXJlYTtcclxuICAgIHRoaXMucGxheWVyID0gYXJlYS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMuY2FudmFzID0gYXJlYS5jYW52YXM7XHJcbiAgICBcclxuICAgIHRoaXMucGxheWVyVHVybiA9IGZhbHNlO1xyXG4gICAgaWYgKGluaXRpYXRlZCA9PSAncGxheWVyJykge1xyXG4gICAgICB0aGlzLnBsYXllclR1cm4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLm1vdmVMaW5lID0gbnVsbDtcclxuICAgIHRoaXMubW92ZVRleHQgPSBudWxsO1xyXG4gICAgXHJcbiAgICB0aGlzLmFkZE1vdXNlQWN0aW9ucygpO1xyXG4gICAgdGhpcy5jb21iYXRTZXF1ZW5jZSA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgdGhpcy5hbGxpZXMgPSBbXTtcclxuICAgIFxyXG4gICAgdGhpcy51cGRhdGVSZW1haW5pbmdNb3Zlcyh0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuYXJlYS5hY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3dpdGNoICh0aGlzLmFyZWEuYWN0b3JzW2ldLnRlYW0pIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLmFsbGllcy5wdXNoKHRoaXMuYXJlYS5hY3RvcnNbaV0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5hcmVhLmFjdG9yc1tpXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxpZXMsIHRoaXMuZW5lbWllcyk7XHJcbiAgICB0aGlzLm9yZGVyID0gdGhpcy5kZXRlcm1pbmVDb21iYXRPcmRlcigpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlcik7XHJcbiAgICB0aGlzLm5leHRUdXJuKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZVBsYXllckF0dGFjayhlbmVteSkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIsIGVuZW15KTtcclxuICAgIGlmICghdGhpcy5wbGF5ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBsYXllci5lcXVpcHBlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuZXF1aXBwZWQudHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0WCgpIDw9IGVuZW15LmdldFgoKSkge1xyXG4gICAgICB0aGlzLnBsYXllci5ydW5BdHRhY2tBbmltYXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBsYXllci5ydW5BdHRhY2tBbmltYXRpb24oJ2xlZnQnKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUmVtYWluaW5nTW92ZXModGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgLSB0aGlzLnBsYXllci5lcXVpcHBlZC5zcGVlZCk7XHJcbiAgICBsZXQgdG9IaXQgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hvb3RpbjtcclxuICAgIGlmICh0aGlzLnBsYXllci5lcXVpcHBlZC5tZWxlZSkge1xyXG4gICAgICB0b0hpdCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zY3JhcHBpbjtcclxuICAgIH1cclxuICAgIGxldCBoaXRDaGFuY2UgPSB0b0hpdCAtIGVuZW15LmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjICsgTWF0aC5jZWlsKHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2svMik7XHJcbiAgICBsZXQgcm9sbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICBpZiAocm9sbCA8PSBoaXRDaGFuY2UpIHtcclxuICAgICAgbGV0IGRhbUFyciA9IHRoaXMucGxheWVyLmVxdWlwcGVkLmRhbWFnZS5zcGxpdCgnZCcpO1xyXG4gICAgICBsZXQgZGFtYWdlID0gMDtcclxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGFtQXJyWzBdOyBpKyspIHtcclxuICAgICAgICBkYW1hZ2UgKz0gR2xvYmFscy5yYW5kb21JbnQoMSwgZGFtQXJyWzFdKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY3JpdCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICAgIGlmIChjcml0IDw9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNyaXRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgY3JpdGljYWxseSBoaXQgJyArIEdsb2JhbHMudWN3b3JkcyhlbmVteS5uYW1lKSArICcgZm9yICcgKyBkYW1hZ2UqR2xvYmFscy5DUklUSUNBTF9EQU1BR0VfTU9ESUZJRVIgKyAnIHBvaW50cyBvZiBkYW1hZ2UuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgaGl0ICcgKyBHbG9iYWxzLnVjd29yZHMoZW5lbXkubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3JpdEZhaWwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xyXG4gICAgICBpZiAoY3JpdEZhaWwgPD0gR2xvYmFscy5DUklUSUNBTF9GQUlMVVJFX0NIQU5DRSkge1xyXG4gICAgICAgIGxldCBzYXZlUm9sbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICAgICAgaWYgKHNhdmVSb2xsID49IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2spIHtcclxuICAgICAgICAgIHRoaXMuYXJlYS5wcmludCgnWW91IGNyaXRpY2FsbHkgbWlzc2VkIGFuZCBsb3N0IHRoZSByZXN0IG9mIHlvdXIgdHVybi4nKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUmVtYWluaW5nTW92ZXMoMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYXJlYS5wcmludCgnWW91IG1pc3NlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KCdZb3UgbWlzc2VkLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZU5QQ0F0dGFjayhucGMsIHRhcmdldCkge1xyXG4gICAgY29uc29sZS5sb2coJ25wYyBhdHRhY2tpbmchJyk7XHJcbiAgICBjb25zb2xlLmxvZyhucGMsIHRhcmdldCk7XHJcbiAgICBpZiAoIW5wYy5lcXVpcHBlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobnBjLmVxdWlwcGVkLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbnBjLnJlbWFpbmluZ01vdmVzIC09IG5wYy5lcXVpcHBlZC5zcGVlZDtcclxuICAgIC8vODklIChhdHRhY2tlcidzIHdlYXBvbiBza2lsbCkgLSA1JSAoZGVmZW5kZXIncyBBcm1vciBDbGFzcykgPSA4NCVcclxuICAgIGxldCB0b0hpdCA9IG5wYy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hvb3RpbjtcclxuICAgIGlmIChucGMuZXF1aXBwZWQubWVsZWUpIHtcclxuICAgICAgdG9IaXQgPSBucGMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNjcmFwcGluO1xyXG4gICAgfVxyXG4gICAgbGV0IGhpdENoYW5jZSA9IHRvSGl0IC0gdGFyZ2V0LmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjICsgTWF0aC5jZWlsKG5wYy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5sdWNrLzIpO1xyXG4gICAgbGV0IHJvbGwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xyXG4gICAgaWYgKHJvbGwgPD0gaGl0Q2hhbmNlKSB7XHJcbiAgICAgIGxldCBkYW1BcnIgPSBucGMuZXF1aXBwZWQuZGFtYWdlLnNwbGl0KCdkJyk7XHJcbiAgICAgIGxldCBkYW1hZ2UgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYW1BcnJbMF07IGkrKykge1xyXG4gICAgICAgIGRhbWFnZSArPSBHbG9iYWxzLnJhbmRvbUludCgxLCBkYW1BcnJbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjcml0ID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcclxuICAgICAgaWYgKGNyaXQgPD0gbnBjLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNyaXRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIGNyaXRpY2FsbHkgaGl0cyAnICsgR2xvYmFscy51Y3dvcmRzKHRhcmdldC5uYW1lKSArICcgZm9yICcgKyBkYW1hZ2UqR2xvYmFscy5DUklUSUNBTF9EQU1BR0VfTU9ESUZJRVIgKyAnIHBvaW50cyBvZiBkYW1hZ2UuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIGhpdHMgJyArIEdsb2JhbHMudWN3b3Jkcyh0YXJnZXQubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3JpdEZhaWwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xyXG4gICAgICBpZiAoY3JpdEZhaWwgPD0gR2xvYmFscy5DUklUSUNBTF9GQUlMVVJFX0NIQU5DRSkge1xyXG4gICAgICAgIGxldCBzYXZlUm9sbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XHJcbiAgICAgICAgaWYgKHNhdmVSb2xsID49IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2spIHtcclxuICAgICAgICAgIHRoaXMuYXJlYS5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBjcml0aWNhbGx5IG1pc3NlZCBhbmQgbG9zdCB0aGUgcmVzdCBvZiBoaXMgdHVybi4nKTtcclxuICAgICAgICAgIG5wYy5yZW1haW5pbmdNb3ZlcyA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYXJlYS5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBtaXNzZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXJlYS5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBtaXNzZWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2hlY2tSZW1haW5pbmdOUENNb3ZlcyhucGMpIHtcclxuICAgIGNvbnNvbGUubG9nKCducGMgbXZzJywgbnBjLnJlbWFpbmluZ01vdmVzKTtcclxuICAgIGlmIChucGMucmVtYWluaW5nTW92ZXMgPD0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbnBjIHR1cm4gY29tcGxldGUnKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm5wY1R1cm5JbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMuY29tYmF0U2VxdWVuY2UrKztcclxuICAgICAgaWYgKHRoaXMuYWxsaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubmV4dFR1cm4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBjaG9vc2VUYXJnZXQobnBjKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgbGFzdERpc3QgPSBudWxsO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgaWYgKG5wYy50ZWFtID09IDMpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmFsbGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBHbG9iYWxzLlNlbmRUb1dvcmtlcih7XHJcbiAgICAgICAgICAgICAgJ2VuZCcgOiB7XHJcbiAgICAgICAgICAgICAgICAneCc6bnBjLmdldFgoKSxcclxuICAgICAgICAgICAgICAgICd5JzpucGMuZ2V0WSgpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAnc3RhcnQnOntcclxuICAgICAgICAgICAgICAgICd4Jzp0aGlzLmFsbGllc1tpXS5nZXRYKCksXHJcbiAgICAgICAgICAgICAgICAneSc6dGhpcy5hbGxpZXNbaV0uZ2V0WSgpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAnd2lkdGgnOnRoaXMuYXJlYS53aWR0aCxcclxuICAgICAgICAgICAgICAnaGVpZ2h0Jzp0aGlzLmFyZWEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICdwYXRoJzogdGhpcy5hcmVhLndhbGtQb2ludHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzLnBhdGgpIHtcclxuICAgICAgICAgICAgICByZXN1bHRzLnBhdGggPSByZXN1bHRzLnBhdGguc3BsaWNlKDAsIHJlc3VsdHMucGF0aC5sZW5ndGgtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFsYXN0RGlzdCB8fCByZXN1bHRzLnBhdGggJiYgcmVzdWx0cy5wYXRoLmxlbmd0aCA8IGxhc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5hbGxpZXNbaV07XHJcbiAgICAgICAgICAgICAgbGFzdERpc3QgPSByZXN1bHRzLnBhdGgubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZWplY3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBoYW5kbGVOUENFbmRUdXJuKG5wYykge1xyXG4gICAgY29uc29sZS5sb2coJ2VuZGluZyB0dXJuIGZvcicsIG5wYyk7XHJcbiAgICBucGMucmVtYWluaW5nTW92ZXMgPSAwO1xyXG4gIH1cclxuICBcclxuICBydW5OUENBdHRhY2tzKG5wYykge1xyXG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgbnBjIGF0dGFja3MnLCBucGMucmVtYWluaW5nTW92ZXMpO1xyXG4gICAgbGV0IHR1cm5zTGVmdCA9IG5wYy5yZW1haW5pbmdNb3ZlcztcclxuICAgIGlmICh0dXJuc0xlZnQgPj0gbnBjLmVxdWlwcGVkLnNwZWVkKSB7XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHR1cm5zTGVmdDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOUENBdHRhY2sobnBjLCBucGMudGFyZ2V0QWNxdWlyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBucGMucmVtYWluaW5nTW92ZXMgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBkb05QQ1R1cm4obnBjKSB7XHJcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBucGMgdHVybicsIG5wYyk7XHJcbiAgICB0aGlzLm5wY1R1cm5JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGVja1JlbWFpbmluZ05QQ01vdmVzKG5wYyk7XHJcbiAgICB9LCAxMDApO1xyXG4gICAgaWYgKCFucGMudGFyZ2V0QWNxdWlyZWQpIHtcclxuICAgICAgbnBjLnRhcmdldEFjcXVpcmVkID0gYXdhaXQgdGhpcy5jaG9vc2VUYXJnZXQobnBjKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGVuZW15UG9zID0geyd4JzpucGMudGFyZ2V0QWNxdWlyZWQuZ2V0WCgpLCAneSc6bnBjLnRhcmdldEFjcXVpcmVkLmdldFkoKX07XHJcbiAgICBsZXQgb2JqID0ge307XHJcbiAgICBvYmouY29tbWFuZCA9ICducGNDaGVja1JhbmdlJztcclxuICAgIG9iai5ucGMgPSBucGMuaWQ7XHJcbiAgICBvYmouc3RhcnQgPSB7J3gnOm5wYy5nZXRYKCksICd5JzpucGMuZ2V0WSgpfTtcclxuICAgIG9iai5lbmQgPSBlbmVteVBvcztcclxuICAgIG9iai53aWR0aCA9IHRoaXMuYXJlYS53aWR0aDtcclxuICAgIG9iai5oZWlnaHQgPSB0aGlzLmFyZWEuaGVpZ2h0O1xyXG4gICAgb2JqLnBhdGggPSB0aGlzLmFyZWEud2Fsa1BvaW50cztcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgR2xvYmFscy5TZW5kVG9Xb3JrZXIob2JqKTtcclxuICAgICAgY29uc29sZS5sb2coJ3B0JywgcmVzdWx0cy5wYXRoKTtcclxuICAgICAgaWYgKHJlc3VsdHMucGF0aCkge1xyXG4gICAgICAgIHJlc3VsdHMucGF0aCA9IHJlc3VsdHMucGF0aC5zcGxpY2UoMCwgcmVzdWx0cy5wYXRoLmxlbmd0aC0xKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0cy5wYXRoICYmIE1hdGguY2VpbChyZXN1bHRzLnBhdGgubGVuZ3RoLzQpID4gbnBjLmVxdWlwcGVkLnJhbmdlKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdHMucGF0aC5sZW5ndGgvNCA+IG5wYy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wYXRoID0gcmVzdWx0cy5wYXRoLnNwbGljZSgwLCBucGMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQqNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChucGMucmVtYWluaW5nTW92ZXMgLSBNYXRoLmNlaWwocmVzdWx0cy5wYXRoLmxlbmd0aC80KSA+PSBucGMuZXF1aXBwZWQuc3BlZWQpIHtcclxuICAgICAgICAgIG5wYy53YWxrUm91dGUocmVzdWx0cy5wYXRoLCB0aGlzLnJ1bk5QQ0F0dGFja3MuYmluZCh0aGlzLCBucGMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnBjLndhbGtSb3V0ZShyZXN1bHRzLnBhdGgsIHRoaXMuaGFuZGxlTlBDRW5kVHVybi5iaW5kKHRoaXMsIG5wYykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJ1bk5QQ0F0dGFja3MobnBjKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjaGVja1JlbWFpbmluZ1BsYXllck1vdmVzKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3BsYXllciByZW1haW5pbmcgbW92ZXMnLCB0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgPD0gMCkge1xyXG4gICAgICB0aGlzLmNhbnZhcy5yZW1vdmUodGhpcy5tb3ZlTGluZSk7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVUZXh0KTtcclxuICAgICAgdGhpcy5tb3ZlTGluZSA9IG51bGw7XHJcbiAgICAgIHRoaXMubW92ZVRleHQgPSBudWxsO1xyXG4gICAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coJ3BsYXllciB0dXJuIGNvbXBsZXRlJyk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5ZXJUdXJuSW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLmNvbWJhdFNlcXVlbmNlKys7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1haW5pbmcgZW5lbWllcycsIHRoaXMuZW5lbWllcyk7XHJcbiAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIG5leHRUdXJuKHNlcXVlbmNlKSB7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5jb21iYXRTZXF1ZW5jZSA+PSB0aGlzLm9yZGVyLmxlbmd0aCAmJiB0aGlzLmVuZW1pZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY29tYmF0U2VxdWVuY2UgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pIHtcclxuICAgICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1BMQVlFUikge1xyXG4gICAgICAgIHRoaXMucGxheWVyVHVybiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCducGMgdHVybicpO1xyXG4gICAgICAgIHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0ucmVtYWluaW5nTW92ZXMgPSB0aGlzLm9yZGVyW3RoaXMuY29tYmF0U2VxdWVuY2VdLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZG9OUENUdXJuKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgdHVybicpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVtYWluaW5nTW92ZXModGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyVHVybiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldE5QQ0J5SUQoaWQpIHtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5lbmVtaWVzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbWllc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG4gIGRldGVybWluZUNvbWJhdE9yZGVyKCkge1xyXG4gICAgbGV0IG9yZGVyID0gW107XHJcbiAgICBsZXQgcGxheWVyQWRkZWQgPSBmYWxzZTtcclxuICAgIGxldCBucGNDb21iYXRhbnRzID0gW107XHJcbiAgICBpZiAodGhpcy5pbml0aWF0ZWQgPT0gJ3BsYXllcicpIHtcclxuICAgICAgLy9vcmRlci5wdXNoKHRoaXMucGxheWVyKTtcclxuICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xyXG4gICAgICBucGNDb21iYXRhbnRzID0gdGhpcy5lbmVtaWVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9vcmRlci5wdXNoKHRoaXMuZ2V0TlBDQnlJRCh0aGlzLmluaXRpYXRlZCkpO1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzW2ldLmlkICE9IHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICBucGNDb21iYXRhbnRzLnB1c2godGhpcy5lbmVtaWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG5wY0NvbWJhdGFudHMuc29ydCgoYSwgYikgPT4gKGEuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQgPiBiLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkKSA/IDEgOiAtMSk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBucGNDb21iYXRhbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChucGNDb21iYXRhbnRzW2ldLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkID4gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQpIHtcclxuICAgICAgICBvcmRlci5wdXNoKG5wY0NvbWJhdGFudHNbaV0pO1xyXG4gICAgICAgIGlmIChpID09IHRoaXMuZW5lbWllcy5sZW5ndGgtMSAmJiAhcGxheWVyQWRkZWQpIHtcclxuICAgICAgICAgIG9yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXBsYXllckFkZGVkKSB7XHJcbiAgICAgICAgICBvcmRlci5wdXNoKHRoaXMucGxheWVyKTtcclxuICAgICAgICAgIHBsYXllckFkZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JkZXIucHVzaChucGNDb21iYXRhbnRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yZGVyO1xyXG4gIH1cclxuICBcclxuICBlbmRQbGF5ZXJUdXJuKCkge1xyXG4gICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgPSAwO1xyXG4gICAgY29uc29sZS5sb2coJ2VuZCBwbGF5ZXIgdHVybicpO1xyXG4gIH1cclxuICBcclxuICB1cGRhdGVSZW1haW5pbmdNb3Zlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgPSB2YWx1ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlbWVudF9wb2ludHMnKS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbWJhdE1vdXNlTW92ZVJlc3VsdHMob2JqKSB7XHJcbiAgICBpZiAob2JqLnBhdGggJiYgb2JqLnBhdGgubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tb3ZlTGluZSAmJiAhdGhpcy5wbGF5ZXIuaXNNb3ZpbmcpIHtcclxuICAgICAgICBsZXQgY29vcmRzID0gW29iai5zdGFydC54LCBvYmouc3RhcnQueSwgb2JqLnN0YXJ0LngsIG9iai5zdGFydC55XTtcclxuICAgICAgICB0aGlzLm1vdmVMaW5lID0gbmV3IGZhYnJpYy5MaW5lKGNvb3Jkcywge1xyXG4gICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOmZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMubW92ZUxpbmUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tb3ZlVGV4dCAmJiAhdGhpcy5wbGF5ZXIuaXNNb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLm1vdmVUZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCdYJywgeyBsZWZ0OiAxMDAsIHRvcDogMTAwLCBmb250RmFtaWx5Oid2ZXJkYW5hLGdlbmV2YSxzYW5zLXNlcmlmJywgZm9udFNpemU6MTgsIGZvbnRXZWlnaHQ6J2JvbGQnLCBmaWxsOidncmVlbid9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5tb3ZlVGV4dCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLm1vdmVMaW5lKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGluZS5zZXQoeyd4Mic6b2JqLmVuZC54LCAneTInOm9iai5lbmQueX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ZXh0UG9zID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqLmVuZCk7XHJcbiAgICAgIC8vdGV4dFBvcy54ICs9IDEwO1xyXG4gICAgICAvL3RleHRQb3MueSAtPSA3O1xyXG4gICAgICBjb25zb2xlLmxvZygnbW92ZSB0ZXh0JywgTWF0aC5jZWlsKG9iai5wYXRoLmxlbmd0aC80KS50b1N0cmluZygpLCAncmVtbW92ZXMnLCB0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICAgIHRoaXMubW92ZVRleHQuc2V0KHt0ZXh0Ok1hdGguY2VpbChvYmoucGF0aC5sZW5ndGgvNCkudG9TdHJpbmcoKSwgbGVmdDp0ZXh0UG9zLngsIHRvcDp0ZXh0UG9zLnl9KTtcclxuICAgICAgaWYgKG9iai5wYXRoLmxlbmd0aC80IDw9IHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGluZS5zZXQoe3N0cm9rZTonZ3JlZW4nfSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVGV4dC5zZXQoe2ZpbGw6J2dyZWVuJ30pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubW92ZUxpbmUuc2V0KHtzdHJva2U6J3JlZCd9KTtcclxuICAgICAgICB0aGlzLm1vdmVUZXh0LnNldCh7ZmlsbDoncmVkJ30pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidibGFjayd9KTtcclxuICAgICAgdGhpcy5tb3ZlVGV4dC5zZXQoe3RleHQ6J1gnLCBsZWZ0OnRleHRQb3MueCwgdG9wOnRleHRQb3MueSwgZmlsbDonYmxhY2snfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRNb3VzZUFjdGlvbnMoKSB7XHJcblxyXG4gICAgdGhpcy5jYW52YXMub24oJ21vdXNlOm91dCcsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmNhbnZhcy5yZW1vdmUodGhpcy5tb3ZlTGluZSk7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVUZXh0KTtcclxuICAgICAgdGhpcy5tb3ZlTGluZSA9IG51bGw7XHJcbiAgICAgIHRoaXMubW92ZVRleHQgPSBudWxsO1xyXG4gICAgICBHbG9iYWxzLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2NhbmNlbFRocmVhZCd9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXllclR1cm4pIHtcclxuICAgICAgICAvL3NlbGYuYXJlYS5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKHtjb21tYW5kOidjYW5jZWxUaHJlYWQnfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnRhcmdldEFjcXVpcmVkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tb3ZlTGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmUodGhpcy5tb3ZlTGluZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxpbmUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubW92ZVRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlKHRoaXMubW92ZVRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUZXh0ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0ge307XHJcbiAgICAgICAgc3RhcnQueCA9IHRoaXMucGxheWVyLmdldFgoKTtcclxuICAgICAgICBzdGFydC55ID0gdGhpcy5wbGF5ZXIuZ2V0WSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbmQgPSB7fTtcclxuICAgICAgICBlbmQueCA9IE1hdGgucm91bmQoZXZlbnQucG9pbnRlci54KTtcclxuICAgICAgICBlbmQueSA9IE1hdGgucm91bmQoZXZlbnQucG9pbnRlci55KTtcclxuICAgICAgICBpZiAoIXRoaXMubW92ZUxpbmUgJiYgIXRoaXMucGxheWVyLmlzTW92aW5nKSB7XHJcbiAgICAgICAgICBsZXQgY29vcmRzID0gW3N0YXJ0LngsIHN0YXJ0LnksIHN0YXJ0LngsIHN0YXJ0LnldO1xyXG4gICAgICAgICAgdGhpcy5tb3ZlTGluZSA9IG5ldyBmYWJyaWMuTGluZShjb29yZHMsIHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcclxuICAgICAgICAgICAgc2VsZWN0YWJsZTpmYWxzZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5tb3ZlTGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZlVGV4dCAmJiAhdGhpcy5wbGF5ZXIuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgIHRoaXMubW92ZVRleHQgPSBuZXcgZmFicmljLlRleHQoJ1gnLCB7IGxlZnQ6IDEwMCwgdG9wOiAxMDAsIGZvbnRGYW1pbHk6J3ZlcmRhbmEsZ2VuZXZhLHNhbnMtc2VyaWYnLCBmb250U2l6ZToxOCwgZm9udFdlaWdodDonYm9sZCcsIGZpbGw6J2dyZWVuJ30pO1xyXG4gICAgICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMubW92ZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5tb3ZlTGluZSkge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlTGluZS5zZXQoeyd4Mic6ZW5kLngsICd5Mic6ZW5kLnl9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRleHRQb3MgPSBPYmplY3QuYXNzaWduKHt9LCBlbmQpO1xyXG4gICAgICAgIHRleHRQb3MueCArPSAxMDtcclxuICAgICAgICB0ZXh0UG9zLnkgLT0gNztcclxuICAgICAgICBpZiAodGhpcy5tb3ZlVGV4dCAmJiB0aGlzLm1vdmVMaW5lKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hcmVhLndhbGtQYXRoLmlzUG9pbnRJblBhdGgoZW5kLngsIGVuZC55KSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgICAgIG9iai5jb21tYW5kID0gJ2NvbWJhdE1vdXNlTW92ZSc7XHJcbiAgICAgICAgICAgIG9iai5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICBvYmouZW5kID0gZW5kO1xyXG4gICAgICAgICAgICBvYmoud2lkdGggPSB0aGlzLmFyZWEud2lkdGg7XHJcbiAgICAgICAgICAgIG9iai5oZWlnaHQgPSB0aGlzLmFyZWEuaGVpZ2h0O1xyXG4gICAgICAgICAgICBvYmoucGF0aCA9IHRoaXMuYXJlYS5XYWxrUG9pbnRzO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgR2xvYmFscy5TZW5kVG9Xb3JrZXIob2JqKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbWJhdE1vdXNlTW92ZVJlc3VsdHMocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVGV4dC5zZXQoe3RleHQ6J1gnLCBsZWZ0OnRleHRQb3MueCwgdG9wOnRleHRQb3MueSwgZmlsbDoncmVkJ30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xyXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWNvciBleHRlbmRzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FudmFzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9ERUNPUjtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3I7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMubG9jYXRpb247XHJcbiAgICB0aGlzLmltZ1VSTCA9IGRhdGEuaW1nO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xyXG4gICAgdGhpcy5kb29yID0gZGF0YS5kb29yO1xyXG4gICAgdGhpcy5vcGVuID0gZGF0YS5vcGVuO1xyXG5cclxuICAgIHRoaXMub3JnWCA9IGRhdGEueDtcclxuICAgIHRoaXMub3JnWSA9IGRhdGEueTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xyXG4gICAgdGhpcy5tYXhXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuaW1nLndpZHRoO1xyXG4gICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltZy53aWR0aDtcclxuICAgICAgaWYgKCF0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLmltZywge1xyXG4gICAgICAgICAgbGVmdDogdGhpcy5vcmdYLFxyXG4gICAgICAgICAgdG9wOiB0aGlzLm9yZ1ksXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxyXG4gICAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueCA9IHRoaXMub3JnWCArIHRoaXMud2lkdGgvMjtcclxuICAgICAgdGhpcy55ID0gdGhpcy5vcmdZICsgdGhpcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0gdGhpcztcclxuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuc3ByaXRlKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLnNwcml0ZSk7XHJcbiAgICAgIHRoaXMuaW1nLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfREVDT1JfUkVBRFkpKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnaW1nL29iamVjdHMvJyArIHRoaXMuaW1nVVJMO1xyXG4gIH1cclxuICBnZXRYKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy54KTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0WSgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSk7XHJcbiAgfVxyXG59IiwiXHJcbmltcG9ydCB7R2xvYmFsc30gZnJvbSAnLi9HbG9iYWxzLmpzeCc7XHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50QXJlYSA9IG51bGw7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjJywge1xyXG4gICAgICBmaXJlUmlnaHRDbGljazogdHJ1ZSxcclxuICAgICAgc3RvcENvbnRleHRNZW51OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2FudmFzLm9uKCdvYmplY3Q6YWRkZWQnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXZlbnQgYWZ0ZXI6cmVuZGVyIFRyaWdnZXJlZCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgXHJcbiAgICAgIGUudGFyZ2V0Lm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLnByaW50KCdZb3Ugc2VlOiAnICsgR2xvYmFscy51Y3dvcmRzKGUudGFyZ2V0Lm1ldGFkYXRhLm5hbWUpICsgJy4nKTtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcmVhLmNvbWJhdE9uIHx8IHRoaXMucGxheWVyLmlzVGFyZ2V0aW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRpbmcgbnBjJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnRhcmdldEFjcXVpcmVkID0gZS50YXJnZXQubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmhvdmVyQ3Vyc29yPSdjcm9zc2hhaXInO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGUudGFyZ2V0Lm9uKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWV0YWRhdGEgJiYgdGhpcy5wbGF5ZXIudGFyZ2V0QWNxdWlyZWQgPT0gZS50YXJnZXQubWV0YWRhdGEpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcclxuICAgICAgICAgIGUudGFyZ2V0LmhvdmVyQ3Vyc29yPSdhcnJvdyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGUudGFyZ2V0Lm9uKCdtb3VzZXVwJywgYXN5bmMgKG1lKSA9PiAge1xyXG4gICAgICAgIHN3aXRjaChtZS5idXR0b24pIHtcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgaWYgKG1lLnRhcmdldC5tZXRhZGF0YSAmJiBtZS50YXJnZXQubWV0YWRhdGEudHlwZSA9PSBHbG9iYWxzLk9CSkVDVF9UWVBFX05QQykge1xyXG4gICAgICAgICAgICAgIGxldCBlbmVteVBvcyA9IHsneCc6bWUudGFyZ2V0Lm1ldGFkYXRhLmdldFgoKSwgJ3knOm1lLnRhcmdldC5tZXRhZGF0YS5nZXRZKCl9O1xyXG4gICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICBvYmouY29tbWFuZCA9ICdwbGF5ZXJDaGVja1JhbmdlJztcclxuICAgICAgICAgICAgICBvYmoubnBjID0gbWUudGFyZ2V0Lm1ldGFkYXRhLmlkO1xyXG4gICAgICAgICAgICAgIG9iai5zdGFydCA9IHsneCc6dGhpcy5wbGF5ZXIuZ2V0WCgpLCAneSc6dGhpcy5wbGF5ZXIuZ2V0WSgpfTtcclxuICAgICAgICAgICAgICBvYmouZW5kID0gZW5lbXlQb3M7XHJcbiAgICAgICAgICAgICAgb2JqLndpZHRoID0gdGhpcy5jdXJyZW50QXJlYS53aWR0aDtcclxuICAgICAgICAgICAgICBvYmouaGVpZ2h0ID0gdGhpcy5jdXJyZW50QXJlYS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgb2JqLnBhdGggPSB0aGlzLmN1cnJlbnRBcmVhLndhbGtQb2ludHM7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgR2xvYmFscy5TZW5kVG9Xb3JrZXIob2JqKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLnBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wYXRoID0gcmVzdWx0cy5wYXRoLnNwbGljZSgwLCByZXN1bHRzLnBhdGgubGVuZ3RoLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMucGF0aCAmJiBNYXRoLmNlaWwocmVzdWx0cy5wYXRoLmxlbmd0aC80KSA+IHRoaXMuY3VycmVudEFyZWEuZ2V0UGxheWVyKCkuZXF1aXBwZWQucmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcmludChcIllvdSdyZSBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudEFyZWEuY29tYmF0T24pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJlYS5lbnRlckNvbWJhdCgncGxheWVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcmVhLmNvbWJhdC5oYW5kbGVQbGF5ZXJBdHRhY2sodGhpcy5jdXJyZW50QXJlYS5jb21iYXQuZ2V0TlBDQnlJRChyZXN1bHRzLm5wYykpO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSAmJiBlLmRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YS5lcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBpZiAobWUudGFyZ2V0Lm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSaWdodENsaWNrT3B0aW9ucyhtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0ID0ge307XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzID0ge307XHJcbiAgICAvKkYuQS5DLkkuQS5MLlNcclxuICAgIEZvcnRpdHVkZVxyXG4gICAgQWdpbGl0eVxyXG4gICAgQ2hhcmlzbWFcclxuICAgIEludGVsbGlnZW5jZVxyXG4gICAgQXR0ZW50aW9uXHJcbiAgICBMdWNrXHJcbiAgICBTdHJlbmd0aCovXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jaGFyaXNtYSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbiA9IDU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2sgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zdHJlbmd0aCA9IDU7XHJcbiAgICBcclxuICAgIC8vZGVyaXZlZCBzdGF0c1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZCA9ICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkvMikgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24vMik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnRvbGVyYW5jZSA9IHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlKjU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNtZWxsID0gTWF0aC5yb3VuZCh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hLzIpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5ocCA9IDUwICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGU7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFjID0gNSArIE1hdGgucm91bmQodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hZ2lsaXR5LzIgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZS8yKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY3JpdGljYWwgPSB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2s7XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC50cmFpdHMgPSB7fTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQudHJhaXRzLmF1dGlzbSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscyA9IHt9O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuYmVnZ2luID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hvb3RpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2NyYXBwaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3RyZW5ndGggKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy53cmFwcGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmF0dGVudGlvbiArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLmZpeGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5sZWFybmluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5yYW50aW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaW50ZWxsaWdlbmNlICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hpdHRpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNsZWVwaW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyUmlnaHRDbGlja09wdGlvbnMobW91c2VpbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIHJpZ2h0IGNsaWNrJyk7XHJcbiAgICBsZXQgZWxlbWVudCA9IG1vdXNlaW5mby50YXJnZXQ7XHJcbiAgICBsZXQgbWVudVRpbWVvdXQgPSAyMDAwO1xyXG4gICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHJldHVybiBmYWxzZTsgfTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZXh0TWVudScpO1xyXG4gICAgY29uc29sZS5sb2coJ21vdXNlJywgbW91c2VpbmZvKTtcclxuICAgIGRpdi5zdHlsZS5sZWZ0ID0gKG1vdXNlaW5mby5hYnNvbHV0ZVBvaW50ZXIueCArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMtY29udGFpbmVyJykub2Zmc2V0TGVmdCkgKyAncHgnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9IG1vdXNlaW5mby5hYnNvbHV0ZVBvaW50ZXIueSArICdweCc7XHJcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEdsb2JhbHMudWN3b3JkcyhlbGVtZW50Lm1ldGFkYXRhLm5hbWUpKSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVmlldycpKTtcclxuICAgIGxpLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgbGkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcmludChHbG9iYWxzLnVwcGVyRmlyc3RDaGFyKGVsZW1lbnQubWV0YWRhdGEuZGVzY3JpcHRpb24pKTtcclxuICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgIH07XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBpZiAoKGVsZW1lbnQubWV0YWRhdGEuY29udGFpbmVyIHx8IGVsZW1lbnQubWV0YWRhdGEuZG9vcikgJiYgIWVsZW1lbnQubWV0YWRhdGEub3Blbikge1xyXG4gICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPcGVuJykpO1xyXG4gICAgICBsaS5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcclxuICAgICAgbGkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBsYXllci50cnlUb09wZW4oZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSBlbHNlIGlmICgoZWxlbWVudC5tZXRhZGF0YS5jb250YWluZXIgfHwgZWxlbWVudC5tZXRhZGF0YS5kb29yKSAmJiBlbGVtZW50Lm1ldGFkYXRhLm9wZW4pIHtcclxuICAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2xvc2UnKSk7XHJcbiAgICAgIGxpLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRyeVRvQ2xvc2UoZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnQubWV0YWRhdGEuY29udGFpbmVyKSB7XHJcbiAgICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlYXJjaCcpKTtcclxuICAgICAgbGkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudHJ5VG9TZWFyY2goZWxlbWVudC5tZXRhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb250ZXh0TWVudXMoKTtcclxuICAgICAgfTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChkaXYgJiYgZGl2LnBhcmVudE5vZGUpIHtcclxuICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICB9XHJcbiAgICB9LCBtZW51VGltZW91dCk7XHJcbiAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH07XHJcbiAgICBkaXYub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGRpdiAmJiBkaXYucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIG1lbnVUaW1lb3V0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlQWxsQ29udGV4dE1lbnVzKCkge1xyXG4gICAgbGV0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRleHRNZW51Jyk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBtZW51cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtZW51c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lbnVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgc2hvd0NoYXJhY3RlclNoZWV0KCkge1xyXG4gICAgaWYgKCFHbG9iYWxzLmlzU2hvd2luZ1NoZWV0KSB7XHJcbiAgICAgIEdsb2JhbHMuaXNTaG93aW5nU2hlZXQgPSB0cnVlO1xyXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaGVldF9ob2xkZXInKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gYXdhaXQgdGhpcy5nZXRUZW1wbGF0ZSgnc2hlZXQuaHRtbCcpO1xyXG5cclxuICAgICAgbGV0IGNsb3NleCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYScpO1xyXG4gICAgICBjbG9zZXgub25jbGljayA9IHRoaXMuc2hvd0NoYXJhY3RlclNoZWV0O1xyXG4gICAgICBcclxuICAgICAgbGV0IHN0YXRzID0gZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNlX3N0YXRzIC5ib3gnKTtcclxuICAgICAgc3RhdHNbMF0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlO1xyXG4gICAgICBzdGF0c1sxXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb247XHJcbiAgICAgIHN0YXRzWzJdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNoYXJpc21hO1xyXG4gICAgICBzdGF0c1szXS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2U7XHJcbiAgICAgIHN0YXRzWzRdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHk7XHJcbiAgICAgIHN0YXRzWzVdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLmx1Y2s7XHJcbiAgICAgIHN0YXRzWzZdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLnN0cmVuZ3RoO1xyXG4gICAgICBcclxuICAgICAgbGV0IHNraWxscyA9IGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxzIC52YWx1ZScpO1xyXG4gICAgICBza2lsbHNbMF0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLmJlZ2dpbiArICclJztcclxuICAgICAgc2tpbGxzWzFdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zaG9vdGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbMl0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNjcmFwcGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbM10uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLndyYXBwaW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1s0XS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuZml4aW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1s1XS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMubGVhcm5pbiArICclJztcclxuICAgICAgc2tpbGxzWzZdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5yYW50aW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1s3XS5pbm5lckhUTUwgPSB0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5za2lsbHMuc2hpdHRpbiArICclJztcclxuICAgICAgc2tpbGxzWzhdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnNraWxscy5zbGVlcGluICsgJyUnO1xyXG4gICAgICBcclxuICAgICAgbGV0IGRlcml2ZWQgPSBkaXYucXVlcnlTZWxlY3RvckFsbCgnLnN0YXRzX2luZm8gLnZhbHVlJyk7XHJcbiAgICAgIGRlcml2ZWRbMF0uaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXIuY2hhcmFjdGVyU2hlZXQuc3RhdHMudG9sZXJhbmNlICsgJyUnO1xyXG4gICAgICBkZXJpdmVkWzFdLmlubmVySFRNTCA9IHRoaXMucGxheWVyLmNoYXJhY3RlclNoZWV0LnN0YXRzLnNwZWVkO1xyXG4gICAgICBsZXQgc21lbGxEYXRhID0gdGhpcy5wbGF5ZXIuZ2V0U21lbGxMYWJlbCh0aGlzLnBsYXllci5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zbWVsbCk7XHJcbiAgICAgIGRlcml2ZWRbMl0uc3R5bGUuY29sb3IgPSBzbWVsbERhdGFbMV07XHJcbiAgICAgIGRlcml2ZWRbMl0uaW5uZXJIVE1MID0gc21lbGxEYXRhWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgR2xvYmFscy5pc1Nob3dpbmdTaGVldCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNoZWV0X2hvbGRlcicpKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZW50ZXJUYXJnZXRpbmdNb2RlKCkge1xyXG4gICAgdGhpcy5jdXJyZW50QXJlYS5nZXRQbGF5ZXIoKS5pc1RhcmdldGluZyA9ICF0aGlzLmN1cnJlbnRBcmVhLmdldFBsYXllcigpLmlzVGFyZ2V0aW5nO1xyXG4gIH1cclxuICBcclxuICBlbmRDb21iYXRUdXJuKCkge1xyXG4gICAgdGhpcy5jdXJyZW50QXJlYS5lbmRDb21iYXRUdXJuKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHByaW50KHRleHQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc29sZScpO1xyXG4gICAgZGl2LmlubmVySFRNTCArPSAnPHA+JyArIHRleHQgKyAnPC9wPic7XHJcbiAgICBkaXYuaW5uZXJIVE1MICs9ICc8cD48L3A+JztcclxuICAgIGRpdi5zY3JvbGxUb3AgPSBkaXYuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuICBcclxuICBxdWVyeUJhY2tlbmQodHlwZSwgdXJsKSB7XHJcbiAgICBjb25zb2xlLmxvZygncXVlcnlpbmcgJyArIHVybCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6dHlwZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJlamVjdCh7J2NvZGUnOnJlc3BvbnNlLnN0YXR1cywgJ21lc3NhZ2UnOnJlc3BvbnNlLnN0YXR1c1RleHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PnJlamVjdChKU09OLnBhcnNlKGVycm9yKSkpO1xyXG4gICAgICB9KS5jYXRjaChlcnJvcj0+cmVqZWN0KEpTT04ucGFyc2UoZXJyb3IpKSk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuICBcclxuICBnZXRUZW1wbGF0ZSh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgZmV0Y2goR2xvYmFscy5URU1QTEFURV9ESVIgKyB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgSGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSkudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpLmNhdGNoKChlKSA9PiB7cmVqZWN0KGUpfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn0iLCJpbXBvcnQgd29ya2VyIGZyb20gJy4vUGF0aGZpbmRXb3JrZXIuanN4JztcclxuaW1wb3J0IFdlYldvcmtlciBmcm9tICcuL1dlYldvcmtlci5qc3gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHMge1xyXG4gIHN0YXRpYyBST09UX0VMRU1FTlQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gIHN0YXRpYyBBUkVBU19ESVIgPSAnL2ltZy9hcmVhcy8nO1xyXG4gIHN0YXRpYyBURU1QTEFURV9ESVIgPSAnL3RlbXBsYXRlcy8nO1xyXG4gIHN0YXRpYyBBUElfRElSID0gJy9hcGkvJztcclxuICBzdGF0aWMgQU5JTUFUSU9OU19ESVIgPSAnL2ltZy9hbmltYXRpb25zLyc7XHJcbiAgXHJcbiAgc3RhdGljIEdSSURfU1FVQVJFX1dJRFRIID0gMjU7XHJcbiAgc3RhdGljIEdSSURfU1FVQVJFX0hFSUdIVCA9IDI1O1xyXG4gIFxyXG4gIHN0YXRpYyBFVkVOVF9QTEFZRVJfUkVBRFkgPSAncGxheWVyUmVhZHknO1xyXG4gIHN0YXRpYyBFVkVOVF9BUkVBX1JFQURZID0gJ2FyZWFSZWFkeSc7XHJcbiAgc3RhdGljIEVWRU5UX05QQ19SRUFEWSA9ICducGNSZWFkeSc7XHJcbiAgc3RhdGljIEVWRU5UX1dFQVBPTl9SRUFEWSA9ICd3ZWFwb25SZWFkeSc7XHJcbiAgc3RhdGljIEVWRU5UX0RFQ09SX1JFQURZID0gJ2RlY29yUmVhZHknO1xyXG4gIHN0YXRpYyBFVkVOVF9QQVRIX1dBTEtFRCA9ICdwYXRoV2Fsa2VkJztcclxuICBzdGF0aWMgRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCA9ICdwYXRoTm9kZVdhbGtlZCc7XHJcbiAgXHJcbiAgc3RhdGljIE9CSkVDVF9UWVBFX1BMQVlFUiA9IDE7XHJcbiAgc3RhdGljIE9CSkVDVF9UWVBFX05QQyA9IDI7XHJcbiAgc3RhdGljIE9CSkVDVF9UWVBFX1dFQVBPTiA9IDM7XHJcbiAgc3RhdGljIE9CSkVDVF9UWVBFX0RFQ09SID0gNDtcclxuICBcclxuICBzdGF0aWMgQ1JJVElDQUxfRkFJTFVSRV9DSEFOQ0UgPSAxMDtcclxuICBzdGF0aWMgQ1JJVElDQUxfREFNQUdFX01PRElGSUVSID0gMTA7XHJcbiAgXHJcbiAgYXBpS2V5ID0gbnVsbDtcclxuICBpc1Nob3dpbmdTaGVldCA9IGZhbHNlO1xyXG4gIHN0YXRpYyB3b3JrZXJSZXF1ZXN0SUQgPSAwO1xyXG4gIHN0YXRpYyByZXNvbHZlcyA9IHt9O1xyXG4gIHN0YXRpYyByZWplY3RzID0ge307XHJcbiAgUGF0aFdvcmtlciA9IHt9O1xyXG4gIFxyXG4gIHN0YXRpYyBTZXR1cFBhdGhXb3JrZXIod2Fsa1BvaW50cykge1xyXG4gICAgdGhpcy5QYXRoV29ya2VyID0gbmV3IFdlYldvcmtlcih3b3JrZXIpO1xyXG4gICAgdGhpcy5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKHtjb21tYW5kOidnZW5lcmF0ZVdhbGtQYXRoJywgcGF0aDp3YWxrUG9pbnRzfSk7XHJcbiAgICB0aGlzLlBhdGhXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHtcclxuICAgICAgY29uc3Qge2lkLCBkYXRhLCBlcnJ9ID0gZXZlbnQuZGF0YTsgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnZ290ICcsIGV2ZW50LmRhdGEsICdiYWNrIGZyb20gd29ya2VyJyk7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zdCByZWplY3QgPSB0aGlzLnJlamVjdHNbZXZlbnQuZGF0YS5pZF07XHJcbiAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgcmVqZWN0KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMucmVzb2x2ZXNbZXZlbnQuZGF0YS5pZF07XHJcbiAgICAgIGlmIChyZXNvbHZlKSB7XHJcbiAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWxldGUgdGhpcy5yZXNvbHZlc1tldmVudC5kYXRhLmlkXTtcclxuICAgICAgZGVsZXRlIHRoaXMucmVqZWN0c1tldmVudC5kYXRhLmlkXTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgU2VuZFRvV29ya2VyKG9iaikge1xyXG4gICAgdGhpcy53b3JrZXJSZXF1ZXN0SUQrKztcclxuICAgIG9iai5ncmlkd2lkdGggPSBHbG9iYWxzLkdSSURfU1FVQVJFX1dJRFRIO1xyXG4gICAgb2JqLmdyaWRoZWlnaHQgPSBHbG9iYWxzLkdSSURfU1FVQVJFX0hFSUdIVDtcclxuICAgIG9iai5pZCA9IHRoaXMud29ya2VyUmVxdWVzdElEO1xyXG4gICAgY29uc29sZS5sb2coJ3NlbmRpbmcgdG8gd29ya2VyJywgb2JqKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVzW3RoaXMud29ya2VyUmVxdWVzdElEXSA9IHJlc29sdmU7XHJcbiAgICAgIHRoaXMucmVqZWN0c1t0aGlzLndvcmtlclJlcXVlc3RJRF0gPSByZWplY3Q7XHJcbiAgICAgIHRoaXMuUGF0aFdvcmtlci5wb3N0TWVzc2FnZShvYmopO1xyXG4gICAgfSk7IFxyXG4gIH1cclxuICBcclxuICBzdGF0aWMgaGFuZGxlQWNjZXNzRGVuaWVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB4aHIub3BlbignUE9TVCcsIEdsb2JhbHMuQVBJX1VSTCArICd0b2tlbicsIHRydWUpO1xyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBHbG9iYWxzLmFwaUtleSA9IGpzb24udG9rZW47XHJcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4aHIuc2VuZCgnZW1haWw9JyArIEdsb2JhbHMuYXBpRW1haWwgKyAnJnBhc3M9JyArIEdsb2JhbHMuYXBpUGFzcyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIHN0YXRpYyByYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgdXBwZXJGaXJzdENoYXIoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgdWN3b3JkcyhzdHIpIHtcclxuICAgIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL14oLil8XFxzKyguKS9nLCBmdW5jdGlvbiAoJDEpIHtcclxuICAgICAgcmV0dXJuICQxLnRvVXBwZXJDYXNlKClcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZGlzdGFuY2VCZXR3ZWVuKHBvaW50MSwgcG9pbnQyLCBhcmVhKSB7XHJcbiAgICBsZXQgcGF0aCA9IGFyZWEuZmluZFBhdGgocG9pbnQxLCBwb2ludDIpO1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgcGF0aCA9IHBhdGguc3BsaWNlKDAsIHBhdGgubGVuZ3RoLTEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguY2VpbChwYXRoLmxlbmd0aC80KTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nKG9iajEsIG9iajIpIHtcclxuICAgIHJldHVybiBvYmoxLmludGVyc2VjdHNXaXRoT2JqZWN0KG9iajIpIHx8XHJcbiAgICAgICAgICAgb2JqMS5pc0NvbnRhaW5lZFdpdGhpbk9iamVjdChvYmoyKSB8fFxyXG4gICAgICAgICAgIG9iajIuaXNDb250YWluZWRXaXRoaW5PYmplY3Qob2JqMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xyXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcclxuaW1wb3J0IHtXZWFwb259IGZyb20gJy4vV2VhcG9uLmpzeCdcclxuXHJcbmV4cG9ydCBjbGFzcyBOUEMgZXh0ZW5kcyBFbmdpbmUge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnR5cGUgPSBHbG9iYWxzLk9CSkVDVF9UWVBFX05QQztcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9ICdzb21lIGFzc2hvbGUnO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ICdzb21lb25lIHdobyBkZWZpZXMgZGVzY3JpcHRpb24nO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuaW1nWCA9IDkwMDtcclxuICAgIHRoaXMuaW1nWSA9IDQwMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xyXG4gICAgdGhpcy5tYXhXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcclxuICAgIHRoaXMubnBjRGVmYXVsdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5zaGVldCA9IHsuLi50aGlzLmNoYXJhY3RlclNoZWV0fTtcclxuICAgIHRoaXMudGVhbSA9IDM7XHJcbiAgICB0aGlzLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcclxuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudXNpbmdNZWxlZSA9IHRydWU7XHJcbiAgICB0aGlzLmludmVudG9yeSA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgZmlzdCA9IG5ldyBXZWFwb24oJ2IxYWU1MWIxLWM5YjktMTFlOS1iYzk3LTBlNDlmMWY4ZTc3YycpO1xyXG4gICAgZmlzdC5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSwgZXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvdyhmaXN0KTtcclxuICAgICAgdGhpcy5lcXVpcChmaXN0KTtcclxuICAgIH0pO1xyXG4gICAgZmlzdC5sb2FkKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHN0b3coaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkucHVzaChpdGVtKTtcclxuICB9XHJcbiAgXHJcbiAgZHJvcChpdGVtKSB7XHJcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaW52ZW50b3J5LnNwbGljZSh0aGlzLmludmVudG9yeS5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgZXF1aXAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZXF1aXBwZWQgPSBpdGVtO1xyXG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZXF1aXBwZWQnKS5zcmMgPSB0aGlzLmVxdWlwcGVkLmltZy5zcmM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEVxdWlwcGVkV2VhcG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXF1aXBwZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMubnBjRGVmYXVsdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWF4V2lkdGggPSB0aGlzLm5wY0RlZmF1bHQud2lkdGg7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5ucGNEZWZhdWx0LmhlaWdodDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm5wY0RlZmF1bHQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5ucGNEZWZhdWx0LndpZHRoO1xyXG5cclxuICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMubnBjRGVmYXVsdCwge1xyXG4gICAgICAgIGxlZnQ6IHRoaXMuaW1nWCxcclxuICAgICAgICB0b3A6IHRoaXMuaW1nWSxcclxuICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxyXG4gICAgICAgIGhvdmVyQ3Vyc29yOidhcnJvdydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XHJcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0gdGhpcztcclxuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuc3ByaXRlKTtcclxuICAgICAgdGhpcy5ucGNEZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZKSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLm5wY0RlZmF1bHQuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteS5wbmcnO1xyXG4gICAgXHJcbiAgICB0aGlzLm5wY0xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubnBjTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X2xlZnQucG5nJztcclxuICAgIFxyXG4gICAgdGhpcy5ucGNSaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5ucGNSaWdodC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X3JpZ2h0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMubnBjVXAgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubnBjVXAuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteV9iYWNrd2FyZHMucG5nJztcclxuICB9XHJcbiAgXHJcbiAgcmVzYW1wbGUoKSB7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICBcclxuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuaW1nWSA9IHRoaXMuaW1nWSArIE1hdGguYWJzKHRoaXMubWF4SGVpZ2h0IC0gdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldCgndG9wJywgdGhpcy5pbWdZKTtcclxuICAgIHRoaXMuc3ByaXRlLnNldCgnbGVmdCcsIHRoaXMuaW1nWCk7XHJcbiAgICB0aGlzLnggPSB0aGlzLmltZ1ggKyB0aGlzLndpZHRoLzI7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmltZ1kgKyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuc3ByaXRlLnNldENvb3JkcygpO1xyXG4gIH1cclxuICBcclxuICBjYWxjdWxhdGVTaXplRnJvbVlQb3MoeSkge1xyXG4gICAgbGV0IHBlcmMgPSAoeS10aGlzLmxvY2F0aW9uLnZhbmlzaGluZ1BvaW50KS8odGhpcy5sb2NhdGlvbi5oZWlnaHQgLSB0aGlzLmxvY2F0aW9uLnZhbmlzaGluZ1BvaW50KTtcclxuICAgIGxldCBuZXdIID0gKHRoaXMubWF4SGVpZ2h0ICogcGVyYyk7XHJcbiAgICBsZXQgbmV3VyA9ICh0aGlzLm1heFdpZHRoL3RoaXMubWF4SGVpZ2h0KSAqIG5ld0g7XHJcbiAgICByZXR1cm4ge3c6bmV3VywgaDpuZXdIfTtcclxuICB9XHJcbiAgXHJcbiAgc2NhbGVTcHJpdGVCeVlDb29yZCh5KSB7XHJcbiAgICBsZXQgb2xkSCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgbGV0IG9sZFcgPSB0aGlzLndpZHRoO1xyXG4gICAgaWYgKCFvbGRIKSB7XHJcbiAgICAgIG9sZEggPSB0aGlzLm1heEhlaWdodDtcclxuICAgIH1cclxuICAgIGlmICghb2xkVykge1xyXG4gICAgICBvbGRXID0gdGhpcy5tYXhXaWR0aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemVGcm9tWVBvcyh5KTtcclxuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9IZWlnaHQoc2l6ZS5oKTtcclxuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9XaWR0aChzaXplLncpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBzaXplLmg7XHJcbiAgICB0aGlzLndpZHRoID0gc2l6ZS53O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxuICBnZXRYKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy54KTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0WSgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkanVzdFpQb3NpdGlvbigpIHtcclxuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxvY2F0aW9uLmRlY29yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChHbG9iYWxzLmlzSW50ZXJzZWN0aW5nKHRoaXMuc3ByaXRlLCB0aGlzLmxvY2F0aW9uLmRlY29yW2ldLnNwcml0ZSkpIHtcclxuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBkZWNvclogPj0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oZGVjb3JaKzEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oZGVjb3JaLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5hY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldID09IHRoaXMpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xyXG4gICAgICAgIGxldCBhY3RvclogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5zcHJpdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgYWN0b3JaID49IG15Wikge1xyXG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIGFjdG9yWiA8PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhhY3RvclotMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpKSB7XHJcbiAgICAgIGxldCBwbGF5ZXJaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpO1xyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgcGxheWVyWiA+PSBteVopIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWisxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmdldFBsYXllcigpLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIHBsYXllclogPD0gbXlaKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKHBsYXllclotMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spIHtcclxuICAgIGlmICh0aGlzLmFuaW1hdGluZ0NvdW50IDwgcGF0aC5sZW5ndGgpIHtcclxuICAgICAgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPCB0aGlzLmdldFgoKSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNMZWZ0KTtcclxuICAgICAgfSBlbHNlIGlmIChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzBdID4gdGhpcy5nZXRYKCkpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gPCB0aGlzLmdldFkoKSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNVcCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF0aFt0aGlzLmFuaW1hdGluZ0NvdW50XVswXSA+IHRoaXMuZ2V0WSgpKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY0RlZmF1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdtdicsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMuc2NhbGVTcHJpdGVCeVlDb29yZChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdKTtcclxuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgnbGVmdCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykgfSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ3RvcCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0gLSB0aGlzLmhlaWdodCwge2R1cmF0aW9uOjEwMCwgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ291bnQrKztcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmdDb3VudCU0ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ01vdmVzLS07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtJywgdGhpcy5yZW1haW5pbmdNb3Zlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spO1xyXG4gICAgICB9fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbWFpbmluZ01vdmVzLS07XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA8IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjTGVmdCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA+IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhdGhbcGF0aC5sZW5ndGgtMV1bMV0gPCBwYXRoW3BhdGgubGVuZ3RoLTJdWzFdKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY1VwKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNEZWZhdWx0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy54ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVswXTtcclxuICAgICAgdGhpcy55ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcclxuICAgICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHBhdGhbcGF0aC5sZW5ndGgtMV1bMV0pO1xyXG4gICAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCdsZWZ0JywgcGF0aFtwYXRoLmxlbmd0aC0xXVswXSAtIHRoaXMud2lkdGgvMiwge2R1cmF0aW9uOjEwMCwgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSB9KTtcclxuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJywgcGF0aFtwYXRoLmxlbmd0aC0xXVsxXSAtIHRoaXMuaGVpZ2h0LCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpfSk7XHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGp1c3RaUG9zaXRpb24oKTtcclxuICB9XHJcbiAgXHJcbiAgd2Fsa1JvdXRlKHBhdGgsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zb2xlLmxvZygnd2Fsa3JvdXRlIGNhbGxiYWNrJywgY2FsbGJhY2spO1xyXG4gICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcclxuICAgIHRoaXMuYW5pbWF0ZVdhbGsocGF0aCwgY2FsbGJhY2spO1xyXG4gIH1cclxuICBcclxufSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHNlbGYuaW1wb3J0U2NyaXB0cyhzZWxmLmxvY2F0aW9uLm9yaWdpbiArICcvanMvdGhpcmQtcGFydHkvcGF0aGZpbmRpbmctYnJvd3Nlci5taW4uanMnKTtcclxuICBcclxuICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEwMjQsIDc2OCk7XHJcbiAgc2VsZi53YWxrUGF0aCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIFxyXG4gIHNlbGYuY2FuY2VsID0gZmFsc2U7XHJcblxyXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgIGlmICghZXZlbnQpIHJldHVybjtcclxuICAgIFxyXG4gICAgc3dpdGNoKGV2ZW50LmRhdGEuY29tbWFuZCkge1xyXG4gICAgICBjYXNlICdnZW5lcmF0ZVdhbGtQYXRoJzpcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFrZSB3YWxrcGF0aCcpO1xyXG4gICAgICAgIHNlbGYud2Fsa1BhdGguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5tb3ZlVG8oZXZlbnQuZGF0YS5wYXRoWzBdLngsIGV2ZW50LmRhdGEucGF0aFswXS55KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBldmVudC5kYXRhLnBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHNlbGYud2Fsa1BhdGgubGluZVRvKGV2ZW50LmRhdGEucGF0aFtpXS54LCBldmVudC5kYXRhLnBhdGhbaV0ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYud2Fsa1BhdGguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5maWxsKCk7XHJcbiAgICAgICAgc2VsZi53YWxrUGF0aC5zYXZlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NhbmNlbFRocmVhZCc6XHJcbiAgICAgICAgc2VsZi5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICghc2VsZi5jYW5jZWwpIHtcclxuICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVcgPSBNYXRoLmNlaWwoZXZlbnQuZGF0YS53aWR0aC9ldmVudC5kYXRhLmdyaWR3aWR0aCo0KTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlSCA9IE1hdGguY2VpbChldmVudC5kYXRhLmhlaWdodC9ldmVudC5kYXRhLmdyaWRoZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKHNjYWxlVywgc2NhbGVIKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2NhbGVXOyBpKyspIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBzPTA7IHMgPCBzY2FsZUg7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2Fsa1BhdGguaXNQb2ludEluUGF0aChpKmV2ZW50LmRhdGEuZ3JpZHdpZHRoLCBzKmV2ZW50LmRhdGEuZ3JpZGhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1ZScsIGksIHMpO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLnNldFdhbGthYmxlQXQoaSwgcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdmYWxzZScsIGksIHMpO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLnNldFdhbGthYmxlQXQoaSwgcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcGF0aGZpbmRlciA9IG5ldyBQRi5EaWprc3RyYUZpbmRlcih7XHJcbiAgICAgICAgICAgICAgYWxsb3dEaWFnb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICBkb250Q3Jvc3NDb3JuZXJzOmZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYmoucGF0aCA9IHBhdGhmaW5kZXIuZmluZFBhdGgoTWF0aC5yb3VuZChldmVudC5kYXRhLnN0YXJ0LngvZXZlbnQuZGF0YS5ncmlkd2lkdGgpLCBNYXRoLnJvdW5kKGV2ZW50LmRhdGEuc3RhcnQueS9ldmVudC5kYXRhLmdyaWRoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChldmVudC5kYXRhLmVuZC54L2V2ZW50LmRhdGEuZ3JpZHdpZHRoKSwgTWF0aC5yb3VuZChldmVudC5kYXRhLmVuZC55L2V2ZW50LmRhdGEuZ3JpZGhlaWdodCksIGdyaWQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBvYmoucGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIG9iai5wYXRoW2ldWzBdICo9IGV2ZW50LmRhdGEuZ3JpZHdpZHRoO1xyXG4gICAgICAgICAgICAgIG9iai5wYXRoW2ldWzFdICo9IGV2ZW50LmRhdGEuZ3JpZGhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1YWdodCcsIGVycm9yKTtcclxuICAgICAgICAgICAgb2JqLmVyciA9IGVycm9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqLnN0YXJ0ID0ge307XHJcbiAgICAgICAgICBvYmouZW5kID0ge307XHJcbiAgICAgICAgICBvYmouc3RhcnQueCA9IGV2ZW50LmRhdGEuc3RhcnQueDtcclxuICAgICAgICAgIG9iai5zdGFydC55ID0gZXZlbnQuZGF0YS5zdGFydC55O1xyXG4gICAgICAgICAgb2JqLmVuZC54ID0gZXZlbnQuZGF0YS5lbmQueDtcclxuICAgICAgICAgIG9iai5lbmQueSA9IGV2ZW50LmRhdGEuZW5kLnk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5ucGMpIHtcclxuICAgICAgICAgICAgb2JqLm5wYyA9IGV2ZW50LmRhdGEubnBjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqLmlkID0gZXZlbnQuZGF0YS5pZDtcclxuICAgICAgICAgIHBvc3RNZXNzYWdlKG9iaik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuY2FuY2VsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXHJcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnO1xyXG5pbXBvcnQge1dlYXBvbn0gZnJvbSAnLi9XZWFwb24uanN4J1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoaWQsIGNhbnZhcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5sb2NhdGlvbjtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5uYW1lID0gJ3lvdSc7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJ5b3UndmUgc2VlbiBiZXR0ZXIgZGF5cywgZm9yIHN1cmVcIjtcclxuXHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuaW1nWCA9IDQwO1xyXG4gICAgdGhpcy5pbWdZID0gNDAwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICB0aGlzLm1heEhlaWdodCA9IDA7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gMDtcclxuICAgIHRoaXMuYW5pbWF0aW5nQ291bnQgPSAwO1xyXG4gICAgdGhpcy5idW1EZWZhdWx0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbUludGVydmFsO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoZWV0ID0gey4uLnRoaXMuY2hhcmFjdGVyU2hlZXR9O1xyXG4gICAgXHJcbiAgICB0aGlzLnJlbWFpbmluZ01vdmVzID0gdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zcGVlZDtcclxuXHJcbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVGFyZ2V0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcclxuICAgIFxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcclxuICAgIHRoaXMudGVhbSA9IDE7XHJcblxyXG4gICAgbGV0IGZpc3QgPSBuZXcgV2VhcG9uKCdiMWFlNTFiMS1jOWI5LTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnKTtcclxuICAgIGZpc3QuaW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9XRUFQT05fUkVBRFksIGV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3coZmlzdCk7XHJcbiAgICAgIHRoaXMuZXF1aXAoZmlzdCk7XHJcbiAgICB9KTtcclxuICAgIGZpc3QubG9hZCgpO1xyXG4gIH1cclxuICBcclxuICBzdG93KGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LnB1c2goaXRlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIGRyb3AoaXRlbSkge1xyXG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmludmVudG9yeS5zcGxpY2UodGhpcy5pbnZlbnRvcnkuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGVxdWlwKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVxdWlwcGVkID0gaXRlbTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5lcXVpcHBlZCcpLnNyYyA9IHRoaXMuZXF1aXBwZWQuaW1nLnNyYztcclxuICB9XHJcbiAgXHJcbiAgZ2V0RXF1aXBwZWRXZWFwb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lcXVpcHBlZDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0U21lbGxMYWJlbChzbWVsbCkge1xyXG4gICAgbGV0IHNtZWxscyA9IFsnTk9YSU9VUycsICdESVNHVVNUSU5HJywgJ0ZPVUwnLCAnTk9UIEdSRUFUJywgJ01JTEQnXTtcclxuICAgIGxldCBjb2xvcnMgPSBbJyNmNTU0NDInLCAnI2Y1YzI0MicsICcjZWZmNTQyJywgJyNiOWY1NDInLCAnIzQyZjU3YiddO1xyXG4gICAgcmV0dXJuIFtzbWVsbHNbc21lbGxdLCBjb2xvcnNbc21lbGxdXTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5idW1EZWZhdWx0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuYnVtRGVmYXVsdC53aWR0aDtcclxuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuYnVtRGVmYXVsdC5oZWlnaHQ7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmJ1bURlZmF1bHQud2lkdGg7XHJcblxyXG4gICAgICB0aGlzLnNwcml0ZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5idW1EZWZhdWx0LCB7XHJcbiAgICAgICAgbGVmdDogdGhpcy5pbWdYLFxyXG4gICAgICAgIHRvcDogdGhpcy5pbWdZLFxyXG4gICAgICAgIHNlbGVjdGFibGU6ZmFsc2UsXHJcbiAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB7fTtcclxuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB0aGlzO1xyXG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkIHBsYXllciBzcHJpdGUnKTtcclxuICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUExBWUVSX1JFQURZKSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5idW1EZWZhdWx0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9kZWZhdWx0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtTGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5idW1MZWZ0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9sZWZ0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtUmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuYnVtUmlnaHQuc3JjID0gJ2ltZy9wZW9wbGUvYnVtX3JpZ2h0LnBuZyc7XHJcbiAgICBcclxuICAgIHRoaXMuYnVtVXAgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuYnVtVXAuc3JjID0gJ2ltZy9wZW9wbGUvYnVtX2JhY2t3YXJkcy5wbmcnO1xyXG4gICAgXHJcbiAgICB0aGlzLndhbGtSaWdodEZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy53YWxrTGVmdEZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy53YWxrVXBGcmFtZXMgPSBbXTtcclxuICAgIHRoaXMud2Fsa0Rvd25GcmFtZXMgPSBbXTtcclxuICAgIHRoaXMudGFsa0ZyYW1lcyA9IFtdO1xyXG4gICAgdGhpcy5wdW5jaExlZnRGcmFtZXMgPSBbXTtcclxuICAgIHRoaXMucHVuY2hSaWdodEZyYW1lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgZGJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhbmltYXRpb25zLycgKyB0aGlzLmlkKTtcclxuICAgIGlmIChkYkluZm8pIHtcclxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGJJbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5zcmMgPSBHbG9iYWxzLkFOSU1BVElPTlNfRElSICsgZGJJbmZvW2ldLnVybDtcclxuICAgICAgICBzd2l0Y2goZGJJbmZvW2ldLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ3dhbGtfbGVmdCc6XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMucHVzaChpbWcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3dhbGtfcmlnaHQnOlxyXG4gICAgICAgICAgICB0aGlzLndhbGtSaWdodEZyYW1lcy5wdXNoKGltZyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnd2Fsa191cCc6XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa1VwRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd3YWxrX2Rvd24nOlxyXG4gICAgICAgICAgICB0aGlzLndhbGtEb3duRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd0YWxrJzpcclxuICAgICAgICAgICAgdGhpcy50YWxrRnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdwdW5jaF9sZWZ0JzpcclxuICAgICAgICAgICAgdGhpcy5wdW5jaExlZnRGcmFtZXMucHVzaChpbWcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3B1bmNoX3JpZ2h0JzpcclxuICAgICAgICAgICAgdGhpcy5wdW5jaFJpZ2h0RnJhbWVzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNhbXBsZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzYW1wbGVcIiwgdGhpcyk7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmltZ1ggPSB0aGlzLmltZ1ggKyBNYXRoLmFicyh0aGlzLm1heFdpZHRoIC0gdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgdGhpcy5zcHJpdGUuc2V0KCd0b3AnLCB0aGlzLmltZ1kpO1xyXG4gICAgdGhpcy5zcHJpdGUuc2V0KCdsZWZ0JywgdGhpcy5pbWdYKTtcclxuICAgIHRoaXMueCA9IHRoaXMuaW1nWCArIHRoaXMud2lkdGgvMjtcclxuICAgIHRoaXMueSA9IHRoaXMuaW1nWSArIHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGUuc2V0Q29vcmRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpIHtcclxuICAgIGxldCBwZXJjID0gKHktdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCkvKHRoaXMubG9jYXRpb24uaGVpZ2h0IC0gdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCk7XHJcbiAgICBsZXQgbmV3SCA9ICh0aGlzLm1heEhlaWdodCAqIHBlcmMpO1xyXG4gICAgbGV0IG5ld1cgPSAodGhpcy5tYXhXaWR0aC90aGlzLm1heEhlaWdodCkgKiBuZXdIO1xyXG4gICAgcmV0dXJuIHt3Om5ld1csIGg6bmV3SH07XHJcbiAgfVxyXG4gIFxyXG4gIHNjYWxlU3ByaXRlQnlZQ29vcmQoeSkge1xyXG4gICAgbGV0IG9sZEggPSB0aGlzLmhlaWdodDtcclxuICAgIGxldCBvbGRXID0gdGhpcy53aWR0aDtcclxuICAgIGlmICghb2xkSCkge1xyXG4gICAgICBvbGRIID0gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIW9sZFcpIHtcclxuICAgICAgb2xkVyA9IHRoaXMubWF4V2lkdGg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBzaXplID0gdGhpcy5jYWxjdWxhdGVTaXplRnJvbVlQb3MoeSk7XHJcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvSGVpZ2h0KHNpemUuaCk7XHJcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvV2lkdGgoc2l6ZS53KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oO1xyXG4gICAgdGhpcy53aWR0aCA9IHNpemUudztcclxuICB9XHJcbiAgXHJcbiAgbW92ZVRvRnJvbnQoKSB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xyXG4gICAgbGV0IG15WiA9IHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMuc3ByaXRlKTtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubG9jYXRpb24uZGVjb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xyXG4gICAgICAgIGxldCBkZWNvclogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLmxvY2F0aW9uLmRlY29yW2ldLnNwcml0ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSwgJ3ZzJywgdGhpcy5nZXRZKCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGVjb3JaLCAndnMnLCBteVopO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSkge1xyXG4gICAgICAgICAgdGhpcy5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XHJcbiAgICAgICAgICAvL3RoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmRlY29yW2ldLmdldFkoKSA+IHRoaXMuZ2V0WSgpICYmIGRlY29yWiA8PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclotMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FmdGVyJywgdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5zcHJpdGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5hY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLnNwcml0ZSkpIHtcclxuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uZ2V0WSgpIDw9IHRoaXMuZ2V0WSgpICYmIGFjdG9yWiA+PSBteVopIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhhY3RvclorMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8oYWN0b3JaLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZ2V0WCgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFkoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHZhbHVlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZW1lbnRfcG9pbnRzJykuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIHJ1bkF0dGFja0FuaW1hdGlvbihkaXIpIHtcclxuICAgIGxldCBmcmFtZXM7XHJcbiAgICBzd2l0Y2goZGlyKSB7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLnB1bmNoUmlnaHRGcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMucHVuY2hMZWZ0RnJhbWVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIHRoaXMuYW5pbUluZGV4ID0gMTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGZpZ2h0IGFuaW1hdGlvbicpO1xyXG4gICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAxO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnZmlnaHRpbmcgZnJhbWUnLCBmcmFtZXNbc2VsZi5hbmltSW5kZXhdKTtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudChmcmFtZXNbdGhpcy5hbmltSW5kZXhdKTtcclxuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIHRoaXMuYW5pbUluZGV4Kys7XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBcclxuICBjYW5jZWxBbmltYXRpb25zKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1JbnRlcnZhbCk7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gbnVsbDtcclxuICAgIHRoaXMuYnVtRGVmYXVsdC5yZW1vdmVFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCwgdGhpcy53YWxrQ2FsbGJhY2spO1xyXG4gICAgdGhpcy5ydW5uaW5nV2Fsa0xlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucnVubmluZ1dhbGtSaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5ydW5uaW5nV2Fsa1VwID0gZmFsc2U7XHJcbiAgICB0aGlzLnJ1bm5pbmdXYWxrRG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5ydW5uaW5nVGFsayA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBhbmltYXRlV2Fsayh4LCB5KSB7XHJcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQoeSk7XHJcbiAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHRoaXMud2lkdGgvMixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnNwcml0ZS5hQ29vcmRzLmJsLnggKyB0aGlzLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc01vdmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSAtIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueCArIHRoaXMud2lkdGgvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzTW92aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb25Db3VudCU0ID09PSAwICYmIHRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmVtZW50UG9pbnRzRGlzcGxheSh0aGlzLnJlbWFpbmluZ01vdmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRqdXN0WlBvc2l0aW9uKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGN5Y2xlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25Db3VudCsrO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbkNvdW50LCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Db3VudCA8IHRoaXMuY3VycmVudFBhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVdhbGsodGhpcy5jdXJyZW50UGF0aFt0aGlzLmFuaW1hdGlvbkNvdW50XVswXSwgdGhpcy5jdXJyZW50UGF0aFt0aGlzLmFuaW1hdGlvbkNvdW50XVsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnZW50aXJlIHBhdGggd2Fsa2VkJyk7XHJcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VEKSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBvcGVuQ29udGFpbmVyKGRhdGEpIHtcclxuICAgIGxldCBkZWNvclJlYWR5ID0gdGhpcy5hZGp1c3RaUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIGRhdGEuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XHJcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9vcGVuJykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcclxuICAgICAgZGF0YS5pbWdVUkwgPSBjb250YWluZXJJbmZvLmltZ19vcGVuO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2V0IGltZyB0bycsIGRhdGEuaW1nVVJMKTtcclxuICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coJ2RpbWcnLCBkYXRhLmltZyk7XHJcbiAgICAgIGRhdGEuaW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XHJcbiAgICAgIGRhdGEucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGNsb3NlQ29udGFpbmVyKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XHJcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9jbG9zZScpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChjb250YWluZXJJbmZvKSB7XHJcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfY2xvc2VkO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2V0IGltZyB0bycsIGRhdGEuaW1nVVJMKTtcclxuICAgICAgZGF0YS5vcGVuID0gZmFsc2U7XHJcbiAgICAgIGRhdGEucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIHNlYXJjaENvbnRhaW5lcihkYXRhKSB7XHJcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9jb250ZW50cycpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChjb250YWluZXJJbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb250JywgY29udGFpbmVySW5mbyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRyeVRvT3BlbihkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2sgPSB0aGlzLm9wZW5Db250YWluZXIuYmluZCh0aGlzLCBkYXRhKVxyXG4gICAgICB0aGlzLmJ1bURlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICAgIHRoaXMud2Fsa1RvT2JqZWN0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0cnlUb0Nsb3NlKGRhdGEpIHtcclxuICAgIGlmICghdGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xyXG4gICAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IHRoaXMuY2xvc2VDb250YWluZXIuYmluZCh0aGlzLCBkYXRhKVxyXG4gICAgICB0aGlzLmJ1bURlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICAgIHRoaXMud2Fsa1RvT2JqZWN0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0cnlUb1NlYXJjaChkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2sgPSBhc3luYygpID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xyXG4gICAgICAgICAgbGV0IGNvbnRhaW5lckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnUFVUJywgR2xvYmFscy5BUElfRElSICsgJ2NvbnRhaW5lci8nICsgZGF0YS5pZCArICcvb3BlbicpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChjb250YWluZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWNvclJlYWR5ID0gdGhpcy5hZGp1c3RaUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgZGF0YS5pbWdVUkwgPSBjb250YWluZXJJbmZvLmltZ19vcGVuO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGltZyB0bycsIGRhdGEuaW1nVVJMKTtcclxuICAgICAgICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpbWcnLCBkYXRhLmltZyk7XHJcbiAgICAgICAgICAgIGRhdGEuaW1nLmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XHJcbiAgICAgICAgICAgIGRhdGEucmVuZGVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQ29udGFpbmVyKGRhdGEpO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmJ1bURlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XHJcbiAgICAgIHRoaXMud2Fsa1RvT2JqZWN0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGlja2VkR3JvdW5kUGF0aFJlc3VsdHMocGF0aCkge1xyXG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmNhbnZhcy5yZW1vdmUodGhpcy5sb2NhdGlvbi5jb21iYXQubW92ZUxpbmUpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVMaW5lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmNhbnZhcy5yZW1vdmUodGhpcy5sb2NhdGlvbi5jb21iYXQubW92ZVRleHQpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVUZXh0ID0gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcgfHwgTWF0aC5jZWlsKHBhdGgubGVuZ3RoLzQpID4gdGhpcy5yZW1haW5pbmdNb3Zlcykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnZ290IHBhdGgnLCBwYXRoKTtcclxuICAgICAgdGhpcy53YWxrUm91dGUocGF0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1bURlZmF1bHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyB3YWxrVG9PYmplY3QodGFyZ2V0KSB7XHJcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ3RyJywgdGFyZ2V0KTtcclxuICAgICAgbGV0IHN0YXJ0ID0ge307XHJcbiAgICAgIHN0YXJ0LnggPSB0aGlzLmdldFgoKTtcclxuICAgICAgc3RhcnQueSA9IHRoaXMuZ2V0WSgpO1xyXG4gICAgICBsZXQgZW5kID0ge307XHJcbiAgICAgIGVuZC54ID0gdGFyZ2V0LmdldFgoKTtcclxuICAgICAgZW5kLnkgPSB0YXJnZXQuZ2V0WSgpO1xyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi53YWxrUGF0aC5pc1BvaW50SW5QYXRoKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAnd2Fsa1RvT2JqZWN0JztcclxuICAgICAgICBvYmouc3RhcnQgPSBzdGFydDtcclxuICAgICAgICBvYmouZW5kID0gZW5kO1xyXG4gICAgICAgIG9iai5wYXRoID0gdGhpcy5sb2NhdGlvbi53YWxrUG9pbnRzO1xyXG4gICAgICAgIG9iai53aWR0aCA9IHRoaXMubG9jYXRpb24ud2lkdGg7XHJcbiAgICAgICAgb2JqLmhlaWdodCA9IHRoaXMubG9jYXRpb24uaGVpZ2h0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgR2xvYmFscy5TZW5kVG9Xb3JrZXIob2JqKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy53YWxrUm91dGUocmVzdWx0cy5wYXRoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBydW5XYWxrQW5pbWF0aW9uKGRpcikge1xyXG4gICAgbGV0IGZyYW1lcztcclxuICAgIHN3aXRjaChkaXIpIHtcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ1JpZ2h0V2FsayA9IHRydWU7XHJcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrUmlnaHRGcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ0xlZnRXYWxrID0gdHJ1ZTtcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtMZWZ0RnJhbWVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nVXBXYWxrID0gdHJ1ZTtcclxuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtVcEZyYW1lcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nRG93bldhbGsgPSB0cnVlO1xyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMud2Fsa0Rvd25GcmFtZXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RhbGsnOlxyXG4gICAgICAgIHRoaXMucnVubmluZ1RhbGsgPSB0cnVlO1xyXG4gICAgICAgIGZyYW1lcyA9IHRoaXMudGFsa0ZyYW1lcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5hbmltSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQoZnJhbWVzW3RoaXMuYW5pbUluZGV4XSk7XHJcbiAgICAgIHRoaXMuYW5pbUluZGV4Kys7XHJcbiAgICB9LCAyNTApO1xyXG4gICAgXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KGZyYW1lc1t0aGlzLmFuaW1JbmRleF0pO1xyXG4gICAgdGhpcy5hbmltSW5kZXgrKztcclxuICB9XHJcbiAgXHJcbiAgd2Fsa1JvdXRlKHBhdGgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdwYXRoJywgcGF0aCk7XHJcbiAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQ291bnQgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50UGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLndhbGtDYWxsYmFjayA9IHRoaXMuY3ljbGVBbmltYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX05PREVfV0FMS0VELCB0aGlzLndhbGtDYWxsYmFjayk7XHJcbiAgICBcclxuICAgIGxldCB4ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVswXTtcclxuICAgIGxldCB5ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcclxuICAgIFxyXG4gICAgaWYgKHggPCB0aGlzLmdldFgoKSkge1xyXG4gICAgICB0aGlzLnJ1bldhbGtBbmltYXRpb24oJ2xlZnQnKTtcclxuICAgIH0gZWxzZSBpZiAoeCA+IHRoaXMuZ2V0WCgpKSB7XHJcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbigncmlnaHQnKTtcclxuICAgIH0gZWxzZSBpZiAoeSA8IHRoaXMuZ2V0WSgpKSB7XHJcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbigndXAnKTtcclxuICAgIH0gZWxzZSBpZiAoeSA+IHRoaXMuZ2V0WSgpKSB7XHJcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbignZG93bicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbmltYXRlV2FsayhwYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzBdLCBwYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzFdKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xyXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb24gZXh0ZW5kcyBFbmdpbmUge1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT047XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmRhbWFnZSA9IDA7XHJcbiAgICB0aGlzLmljb25fdXJsID0gJyc7XHJcbiAgICB0aGlzLm1lbGVlID0gdHJ1ZTtcclxuICAgIHRoaXMubmFtZSA9ICd3ZWFwb24nO1xyXG4gICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICB0aGlzLnJhbmdlID0gMTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQgd2VhcG9uSW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnd2VhcG9uLycgKyB0aGlzLmlkKTtcclxuICAgIGlmICh3ZWFwb25JbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWFwJywgd2VhcG9uSW5mbyk7XHJcbiAgICAgIHRoaXMuZGFtYWdlID0gd2VhcG9uSW5mby5kYW1hZ2U7XHJcbiAgICAgIHRoaXMuaWNvbl91cmwgPSB3ZWFwb25JbmZvLmljb25fdXJsO1xyXG4gICAgICB0aGlzLm1lbGVlID0gd2VhcG9uSW5mby5tZWxlZTtcclxuICAgICAgdGhpcy5uYW1lID0gd2VhcG9uSW5mby5uYW1lO1xyXG4gICAgICB0aGlzLnNwZWVkID0gd2VhcG9uSW5mby5zcGVlZDtcclxuICAgICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1nLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfV0VBUE9OX1JFQURZKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuaWNvbl91cmw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViV29ya2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmtlcikge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSB3b3JrZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoWycoJytjb2RlKycpKCknXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnO1xyXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4J1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi9QbGF5ZXIuanN4J1xyXG5pbXBvcnQge0FyZWF9IGZyb20gJy4vQXJlYS5qc3gnXHJcbmltcG9ydCB7RGVjb3J9IGZyb20gJy4vRGVjb3IuanN4J1xyXG5pbXBvcnQge05QQ30gZnJvbSAnLi9OUEMuanN4J1xyXG5cclxubGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kVHVybkJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZW5naW5lLmVuZENvbWJhdFR1cm4oKTtcclxuICB9O1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFyYWN0ZXJTaGVldEJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZW5naW5lLnNob3dDaGFyYWN0ZXJTaGVldCgpO1xyXG4gIH07XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcmdldE1vZGVCdG4nKS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGVuZ2luZS5lbnRlclRhcmdldGluZ01vZGUoKTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBzdGFydEFyZWFJRCA9ICcyOWM5NDcwOC1jNDRjLTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnO1xyXG4gIGxldCB0ZW1wUGxheWVySUQgPSAnNDM1NTQwMTgtYzQ0Yi0xMWU5LWJjOTctMGU0OWYxZjhlNzdjJztcclxuICBcclxuICBlbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0ZW1wUGxheWVySUQsIGVuZ2luZS5jYW52YXMpO1xyXG4gIFxyXG4gIGVuZ2luZS5wbGF5ZXIuYnVtRGVmYXVsdC5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUExBWUVSX1JFQURZLCBldmVudCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgbGV0IGRiSW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBzdGFydEFyZWFJRCk7XHJcbiAgICBpZiAoZGJJbmZvKSB7XHJcbiAgICAgIGVuZ2luZS5jdXJyZW50QXJlYSA9IG5ldyBBcmVhKHN0YXJ0QXJlYUlELCBlbmdpbmUuY2FudmFzKTtcclxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmFjdG9ycy5wdXNoKGVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICBlbmdpbmUucGxheWVyLmxvY2F0aW9uID0gZW5naW5lLmN1cnJlbnRBcmVhO1xyXG4gICAgICBcclxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmxvYWRlckltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfQVJFQV9SRUFEWSwgZXZlbnQgPSBhc3luYygpID0+IHsgIFxyXG4gICAgICAgIGVuZ2luZS5wbGF5ZXIucmVzYW1wbGUoKTtcclxuICAgICAgICBlbmdpbmUucGxheWVyLnNwcml0ZS5icmluZ1RvRnJvbnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVjb3JJbmZvID0gYXdhaXQgZW5naW5lLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FyZWEvJyArIGVuZ2luZS5jdXJyZW50QXJlYS5pZCArICcvZGVjb3InKTtcclxuICAgICAgICBpZiAoZGVjb3JJbmZvKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVjb3InLCBkZWNvckluZm8pO1xyXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGVjb3JJbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWNvciA9IG5ldyBEZWNvcihkZWNvckluZm9baV0sIGVuZ2luZS5jYW52YXMpO1xyXG4gICAgICAgICAgICBkZWNvci5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcclxuICAgICAgICAgICAgZGVjb3IucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGVuZ2luZS5jdXJyZW50QXJlYS5kZWNvci5wdXNoKGRlY29yKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgbnBjSW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBlbmdpbmUuY3VycmVudEFyZWEuaWQgKyAnL25wY3MnKTtcclxuICAgICAgICAgIGlmIChucGNJbmZvKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG5wY0luZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgbnBjID0gbmV3IE5QQyhucGNJbmZvW2ldLmlkLCBlbmdpbmUuY2FudmFzKTtcclxuICAgICAgICAgICAgICBucGMubmFtZSA9IG5wY0luZm9baV0ubmFtZTtcclxuICAgICAgICAgICAgICBucGMuZGVzY3JpcHRpb24gPSBucGNJbmZvW2ldLmRlc2NyO1xyXG4gICAgICAgICAgICAgIG5wYy50ZWFtID0gbnBjSW5mb1tpXS50ZWFtO1xyXG4gICAgICAgICAgICAgIG5wYy5pbWdYID0gbnBjSW5mb1tpXS54O1xyXG4gICAgICAgICAgICAgIG5wYy5pbWdZID0gbnBjSW5mb1tpXS55O1xyXG4gICAgICAgICAgICAgIG5wYy5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcclxuICAgICAgICAgICAgICBucGMubnBjRGVmYXVsdC5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmFjdG9ycy5wdXNoKG5wYyk7XHJcbiAgICAgICAgICAgICAgICBucGMucmVzYW1wbGUoKTtcclxuICAgICAgICAgICAgICAgIG5wYy5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XHJcbiAgICAgICAgICAgICAgICAvL2VuZ2luZS5jdXJyZW50QXJlYS5lbnRlckNvbWJhdCgpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIG5wYy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZW5naW5lLnBsYXllci5zcHJpdGUuYnJpbmdUb0Zyb250KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLnJlbmRlckJhY2tncm91bmQoKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBlbmdpbmUucHJpbnQoJ1lvdSBlbnRlciA8Yj4nICsgZGJJbmZvLm5hbWUudG9Mb3dlckNhc2UoKSArICc8L2I+LicpO1xyXG4gICAgICBlbmdpbmUucHJpbnQoZGJJbmZvLmRlc2NyaXB0aW9uLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBlbmdpbmUucGxheWVyLnJlbmRlcigpO1xyXG59Il19
