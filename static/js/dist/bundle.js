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
              print("You're out of range.");
              return;
            }

            if (!_this2.combatOn) {
              _this2.enterCombat('player');
            }

            _this2.combat.handlePlayerAttack(self.combat.getNPCByID(event.data.npc));

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
      console.log(obj);
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

        console.log('pl', player);
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
      console.log('starting combat', this.player);

      if (this.player) {
        this.combatOn = true;
        this.combat = new _CombatManager.CombatManager(this.player, this, initiated);
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
  function CombatManager(player, area, initiated) {
    (0, _classCallCheck2["default"])(this, CombatManager);
    this.area = area;
    this.player = player;
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
      if (this.area.actors[i].team == 1) {
        this.allies.push(this.area.actors[i]);
      }

      if (this.area.actors[i].team == 3) {
        this.enemies.push(this.area.actors[i]);
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

      console.log('mv', this.player.remainingMoves, this.player.equipped.speed);
      this.player.remainingMoves -= this.player.equipped.speed;
      this.updateMovementPointsDisplay(this.player.remainingMoves);
      /*
      let attackResult = await this.queryBackend('GET', Globals.API_DIR + 'attack/' + this.state.player.id + '/' + enemy.id);
      if (attackResult) {
      }*/
      //89% (attacker's weapon skill) - 5% (defender's Armor Class) = 84%

      var toHit = this.player.skills.shootin;

      if (this.player.equipped.melee) {
        toHit = this.player.skills.scrappin;
      }

      var hitChance = toHit - enemy.stats.ac + Math.ceil(this.player.stats.luck / 2);

      var roll = _Globals.Globals.randomInt(1, 100);

      if (roll <= hitChance) {
        var damArr = this.player.equipped.damage.split('d');
        var damage = 0;

        for (var i = 0; i < damArr[0]; i++) {
          damage += _Globals.Globals.randomInt(1, damArr[1]);
        }

        var crit = _Globals.Globals.randomInt(1, 100);

        if (crit <= this.player.stats.critical) {
          this.area.parent.print('You critically hit ' + _Globals.Globals.ucwords(enemy.name) + ' for ' + damage * _Globals.Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
        } else {
          this.area.parent.print('You hit ' + _Globals.Globals.ucwords(enemy.name) + ' for ' + damage + ' points of damage.');
        }
      } else {
        var critFail = _Globals.Globals.randomInt(1, 100);

        if (critFail <= _Globals.Globals.CRITICAL_FAILURE_CHANCE) {
          var saveRoll = _Globals.Globals.randomInt(1, 100);

          if (saveRoll >= this.player.stats.luck) {
            this.area.parent.print('You critically missed and lost the rest of your turn.');
            this.player.remainingMoves = 0;
            this.updateMovementPointsDisplay(this.player.remainingMoves);
          } else {
            this.area.parent.print('You missed.');
          }
        } else {
          this.area.parent.print('You missed.');
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

      var toHit = npc.skills.shootin;

      if (npc.equipped.melee) {
        toHit = npc.skills.scrappin;
      }

      var hitChance = toHit - target.stats.ac + Math.ceil(npc.stats.luck / 2);

      var roll = _Globals.Globals.randomInt(1, 100);

      if (roll <= hitChance) {
        var damArr = npc.equipped.damage.split('d');
        var damage = 0;

        for (var i = 0; i < damArr[0]; i++) {
          damage += _Globals.Globals.randomInt(1, damArr[1]);
        }

        var crit = _Globals.Globals.randomInt(1, 100);

        if (crit <= npc.stats.critical) {
          this.area.parent.print(_Globals.Globals.ucwords(npc.name) + ' critically hits ' + _Globals.Globals.ucwords(target.name) + ' for ' + damage * _Globals.Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
        } else {
          this.area.parent.print(_Globals.Globals.ucwords(npc.name) + ' hits ' + _Globals.Globals.ucwords(target.name) + ' for ' + damage + ' points of damage.');
        }
      } else {
        var critFail = _Globals.Globals.randomInt(1, 100);

        if (critFail <= _Globals.Globals.CRITICAL_FAILURE_CHANCE) {
          var saveRoll = _Globals.Globals.randomInt(1, 100);

          if (saveRoll >= this.player.stats.luck) {
            this.area.parent.print(_Globals.Globals.ucwords(npc.name) + ' critically missed and lost the rest of his turn.');
            npc.remainingMoves = 0;
          } else {
            this.area.parent.print(_Globals.Globals.ucwords(npc.name) + ' missed.');
          }
        } else {
          this.area.parent.print(_Globals.Globals.ucwords(npc.name) + ' missed.');
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
          let path = this.area.findPath({'x':npc.getX(), 'y':npc.getY()}, {'x':this.allies[i].getX(), 'y':this.allies[i].getY()});
          if (path) {
            path = path.splice(0, path.length-1);
          }
          if (!lastDist || path.length < lastDist) {
            target = this.allies[i];
            lastDist = path.length;
          }
        }
        return target;
      }*/
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
      var self = this;
      self.npcTurnInterval = setInterval(function () {
        self.checkRemainingNPCMoves(npc);
      }, 100);

      if (!npc.targetAcquired) {
        npc.targetAcquired = this.chooseTarget(npc);
      }

      var enemyPos = {
        'x': npc.targetAcquired.getX(),
        'y': npc.targetAcquired.getY()
      };
      var path = self.area.findPath({
        'x': npc.getX(),
        'y': npc.getY()
      }, enemyPos);

      if (path) {
        path = path.splice(0, path.length - 1);
      }

      if (Math.ceil(path.length / 4) > npc.equipped.range) {
        if (path.length / 4 > npc.stats.speed) {
          path = path.splice(0, npc.stats.speed * 4);
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
      this.player.remainingMoves = this.player.stats.speed;
      var self = this;

      if (this.combatSequence >= this.order.length && this.enemies.length) {
        this.combatSequence = 0;
      }

      if (this.order[this.combatSequence]) {
        this.order[this.combatSequence].remainingMoves = this.order[this.combatSequence].stats.speed;

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
        return a.stats.speed > b.stats.speed ? 1 : -1;
      });

      for (var _i = 0; _i < npcCombatants.length; _i++) {
        if (npcCombatants[_i].stats.speed > this.player.stats.speed) {
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

        _this2.sprite.on('mouseover', function () {
          _this2.print('You see: ' + _Globals.Globals.ucwords(_this2.name) + '.');
        });

        _this2.sprite.on('mouseout', function () {});

        _this2.sprite.on('mouseup', function () {});

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

var Engine = /*#__PURE__*/function () {
  function Engine() {
    (0, _classCallCheck2["default"])(this, Engine);
    this.player = null;
    this.currentArea = null;
    this.canvas = new fabric.Canvas('c');
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
                if (Globals.isShowingSheet) {
                  _context.next = 35;
                  break;
                }

                Globals.isShowingSheet = true;
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
                Globals.isShowingSheet = false;
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
        fetch(Globals.TEMPLATE_DIR + url, {
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

},{"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/regenerator":12}],42:[function(require,module,exports){
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
      _this.equip(fist);

      _this.stow(fist);
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

        _this2.sprite.on('mouseover', function () {
          _this2.print('You see: ' + _Globals.Globals.ucwords(_this2.name) + '.');

          if (_this2.location.combatOn || _this2.location.getPlayer().isTargeting) {
            _this2.location.getPlayer().targetAcquired = _this2;
            _this2.hoverCursor = 'crosshair';
          }
        });

        _this2.sprite.on('mouseout', function () {
          _this2.location.getPlayer().targetAcquired = null;
          _this2.hoverCursor = 'arrow';
        });

        _this2.sprite.on('mouseup', function () {
          var enemyPos = {
            'x': _this2.getX(),
            'y': _this2.getY()
          };
          var obj = {};
          obj.command = 'playerCheckRange';
          obj.npc = _this2.id;
          obj.start = {
            'x': _this2.location.getPlayer().getX(),
            'y': _this2.location.getPlayer().getY()
          };
          obj.end = enemyPos;

          _this2.location.findPath(obj);
        });

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

                  _this2.sprite.on('mouseover', function () {
                    _this2.print('You see: ' + _Globals.Globals.ucwords(_this2.name) + '.');
                  });

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

                document.querySelector('.upper-canvas').oncontextmenu = function (event) {
                  event.preventDefault();
                  var objectFound = false;
                  var clickPoint = new fabric.Point(event.offsetX, event.offsetY);
                  var clickedObjects = [];
                  engine.canvas.forEachObject(function (obj) {
                    if (obj.containsPoint(clickPoint)) {
                      clickedObjects.push(obj);
                    }
                  });
                  clickedObjects.sort(function (a, b) {
                    return engine.canvas.getObjects().indexOf(a) < engine.canvas.getObjects().indexOf(b) ? 1 : -1;
                  });
                  engine.renderRightClickOptions(event, clickedObjects[0]);
                };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2pmYWNlL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hlYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaGVhcC9saWIvaGVhcC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvUGF0aEZpbmRpbmcuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2NvcmUvRGlhZ29uYWxNb3ZlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9HcmlkLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL0hldXJpc3RpYy5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvY29yZS9Ob2RlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9jb3JlL1V0aWwuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmVzdEZpcnN0RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0JpQVN0YXJGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCZXN0Rmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvQmlEaWprc3RyYUZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9CcmVhZHRoRmlyc3RGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvRGlqa3N0cmFGaW5kZXIuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSURBU3RhckZpbmRlci5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoZmluZGluZy9zcmMvZmluZGVycy9KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0pQRk5ldmVyTW92ZURpYWdvbmFsbHkuanMiLCJub2RlX21vZHVsZXMvcGF0aGZpbmRpbmcvc3JjL2ZpbmRlcnMvSnVtcFBvaW50RmluZGVyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGhmaW5kaW5nL3NyYy9maW5kZXJzL0p1bXBQb2ludEZpbmRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3RhdGljL2pzL3NyYy9BcmVhLmpzeCIsInN0YXRpYy9qcy9zcmMvQ29tYmF0TWFuYWdlci5qc3giLCJzdGF0aWMvanMvc3JjL0RlY29yLmpzeCIsInN0YXRpYy9qcy9zcmMvRW5naW5lLmpzeCIsInN0YXRpYy9qcy9zcmMvR2xvYmFscy5qc3giLCJzdGF0aWMvanMvc3JjL05QQy5qc3giLCJzdGF0aWMvanMvc3JjL1BhdGhmaW5kV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvUGxheWVyLmpzeCIsInN0YXRpYy9qcy9zcmMvV2VhcG9uLmpzeCIsInN0YXRpYy9qcy9zcmMvV2ViV29ya2VyLmpzeCIsInN0YXRpYy9qcy9zcmMvbWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalhBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFqRztBQUFBLG1CQUFwQjtBQUNBLGtCQUFBLE1BQU0sQ0FBQyx1QkFBUCxDQUErQixLQUEvQixFQUFzQyxjQUFjLENBQUMsQ0FBRCxDQUFwRDtBQUNELGlCQVpEOztBQWFBLGdCQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsa0JBQWtCLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBWixFQUFsQixHQUE4QyxPQUEzRDtBQUNBLGdCQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsTUFBTSxDQUFDLFdBQXBCLEVBQWlDLElBQWpDO0FBQ0Q7O0FBM0QyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTNFO0FBNkRBLEVBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFkO0FBQ0QsQ0F0RUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2hlYXAnKTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS44LjBcbihmdW5jdGlvbigpIHtcbiAgdmFyIEhlYXAsIGRlZmF1bHRDbXAsIGZsb29yLCBoZWFwaWZ5LCBoZWFwcG9wLCBoZWFwcHVzaCwgaGVhcHB1c2hwb3AsIGhlYXByZXBsYWNlLCBpbnNvcnQsIG1pbiwgbmxhcmdlc3QsIG5zbWFsbGVzdCwgdXBkYXRlSXRlbSwgX3NpZnRkb3duLCBfc2lmdHVwO1xuXG4gIGZsb29yID0gTWF0aC5mbG9vciwgbWluID0gTWF0aC5taW47XG5cblxuICAvKlxuICBEZWZhdWx0IGNvbXBhcmlzb24gZnVuY3Rpb24gdG8gYmUgdXNlZFxuICAgKi9cblxuICBkZWZhdWx0Q21wID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIGlmICh4IDwgeSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuXG4gIC8qXG4gIEluc2VydCBpdGVtIHggaW4gbGlzdCBhLCBhbmQga2VlcCBpdCBzb3J0ZWQgYXNzdW1pbmcgYSBpcyBzb3J0ZWQuXG4gIFxuICBJZiB4IGlzIGFscmVhZHkgaW4gYSwgaW5zZXJ0IGl0IHRvIHRoZSByaWdodCBvZiB0aGUgcmlnaHRtb3N0IHguXG4gIFxuICBPcHRpb25hbCBhcmdzIGxvIChkZWZhdWx0IDApIGFuZCBoaSAoZGVmYXVsdCBhLmxlbmd0aCkgYm91bmQgdGhlIHNsaWNlXG4gIG9mIGEgdG8gYmUgc2VhcmNoZWQuXG4gICAqL1xuXG4gIGluc29ydCA9IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSwgY21wKSB7XG4gICAgdmFyIG1pZDtcbiAgICBpZiAobG8gPT0gbnVsbCkge1xuICAgICAgbG8gPSAwO1xuICAgIH1cbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGlmIChsbyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbG8gbXVzdCBiZSBub24tbmVnYXRpdmUnKTtcbiAgICB9XG4gICAgaWYgKGhpID09IG51bGwpIHtcbiAgICAgIGhpID0gYS5sZW5ndGg7XG4gICAgfVxuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICBtaWQgPSBmbG9vcigobG8gKyBoaSkgLyAyKTtcbiAgICAgIGlmIChjbXAoeCwgYVttaWRdKSA8IDApIHtcbiAgICAgICAgaGkgPSBtaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsbyA9IG1pZCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoW10uc3BsaWNlLmFwcGx5KGEsIFtsbywgbG8gLSBsb10uY29uY2F0KHgpKSwgeCk7XG4gIH07XG5cblxuICAvKlxuICBQdXNoIGl0ZW0gb250byBoZWFwLCBtYWludGFpbmluZyB0aGUgaGVhcCBpbnZhcmlhbnQuXG4gICAqL1xuXG4gIGhlYXBwdXNoID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxLCBjbXApO1xuICB9O1xuXG5cbiAgLypcbiAgUG9wIHRoZSBzbWFsbGVzdCBpdGVtIG9mZiB0aGUgaGVhcCwgbWFpbnRhaW5pbmcgdGhlIGhlYXAgaW52YXJpYW50LlxuICAgKi9cblxuICBoZWFwcG9wID0gZnVuY3Rpb24oYXJyYXksIGNtcCkge1xuICAgIHZhciBsYXN0ZWx0LCByZXR1cm5pdGVtO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgbGFzdGVsdCA9IGFycmF5LnBvcCgpO1xuICAgIGlmIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybml0ZW0gPSBhcnJheVswXTtcbiAgICAgIGFycmF5WzBdID0gbGFzdGVsdDtcbiAgICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybml0ZW0gPSBsYXN0ZWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFBvcCBhbmQgcmV0dXJuIHRoZSBjdXJyZW50IHNtYWxsZXN0IHZhbHVlLCBhbmQgYWRkIHRoZSBuZXcgaXRlbS5cbiAgXG4gIFRoaXMgaXMgbW9yZSBlZmZpY2llbnQgdGhhbiBoZWFwcG9wKCkgZm9sbG93ZWQgYnkgaGVhcHB1c2goKSwgYW5kIGNhbiBiZVxuICBtb3JlIGFwcHJvcHJpYXRlIHdoZW4gdXNpbmcgYSBmaXhlZCBzaXplIGhlYXAuIE5vdGUgdGhhdCB0aGUgdmFsdWVcbiAgcmV0dXJuZWQgbWF5IGJlIGxhcmdlciB0aGFuIGl0ZW0hIFRoYXQgY29uc3RyYWlucyByZWFzb25hYmxlIHVzZSBvZlxuICB0aGlzIHJvdXRpbmUgdW5sZXNzIHdyaXR0ZW4gYXMgcGFydCBvZiBhIGNvbmRpdGlvbmFsIHJlcGxhY2VtZW50OlxuICAgICAgaWYgaXRlbSA+IGFycmF5WzBdXG4gICAgICAgIGl0ZW0gPSBoZWFwcmVwbGFjZShhcnJheSwgaXRlbSlcbiAgICovXG5cbiAgaGVhcHJlcGxhY2UgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgdmFyIHJldHVybml0ZW07XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICByZXR1cm5pdGVtID0gYXJyYXlbMF07XG4gICAgYXJyYXlbMF0gPSBpdGVtO1xuICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgcmV0dXJuIHJldHVybml0ZW07XG4gIH07XG5cblxuICAvKlxuICBGYXN0IHZlcnNpb24gb2YgYSBoZWFwcHVzaCBmb2xsb3dlZCBieSBhIGhlYXBwb3AuXG4gICAqL1xuXG4gIGhlYXBwdXNocG9wID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgaWYgKGFycmF5Lmxlbmd0aCAmJiBjbXAoYXJyYXlbMF0sIGl0ZW0pIDwgMCkge1xuICAgICAgX3JlZiA9IFthcnJheVswXSwgaXRlbV0sIGl0ZW0gPSBfcmVmWzBdLCBhcnJheVswXSA9IF9yZWZbMV07XG4gICAgICBfc2lmdHVwKGFycmF5LCAwLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFRyYW5zZm9ybSBsaXN0IGludG8gYSBoZWFwLCBpbi1wbGFjZSwgaW4gTyhhcnJheS5sZW5ndGgpIHRpbWUuXG4gICAqL1xuXG4gIGhlYXBpZnkgPSBmdW5jdGlvbihhcnJheSwgY21wKSB7XG4gICAgdmFyIGksIF9pLCBfaiwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzLCBfcmVzdWx0czE7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBfcmVmMSA9IChmdW5jdGlvbigpIHtcbiAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgZm9yICh2YXIgX2ogPSAwLCBfcmVmID0gZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7IDAgPD0gX3JlZiA/IF9qIDwgX3JlZiA6IF9qID4gX3JlZjsgMCA8PSBfcmVmID8gX2orKyA6IF9qLS0peyBfcmVzdWx0czEucHVzaChfaik7IH1cbiAgICAgIHJldHVybiBfcmVzdWx0czE7XG4gICAgfSkuYXBwbHkodGhpcykucmV2ZXJzZSgpO1xuICAgIF9yZXN1bHRzID0gW107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaSA9IF9yZWYxW19pXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goX3NpZnR1cChhcnJheSwgaSwgY21wKSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuXG4gIC8qXG4gIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGdpdmVuIGl0ZW0gaW4gdGhlIGhlYXAuXG4gIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBpdGVtIGlzIGJlaW5nIG1vZGlmaWVkLlxuICAgKi9cblxuICB1cGRhdGVJdGVtID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBwb3MgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9zaWZ0ZG93bihhcnJheSwgMCwgcG9zLCBjbXApO1xuICAgIHJldHVybiBfc2lmdHVwKGFycmF5LCBwb3MsIGNtcCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIGxhcmdlc3QgZWxlbWVudHMgaW4gYSBkYXRhc2V0LlxuICAgKi9cblxuICBubGFyZ2VzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBjbXApIHtcbiAgICB2YXIgZWxlbSwgcmVzdWx0LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIHJlc3VsdCA9IGFycmF5LnNsaWNlKDAsIG4pO1xuICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGVhcGlmeShyZXN1bHQsIGNtcCk7XG4gICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgZWxlbSA9IF9yZWZbX2ldO1xuICAgICAgaGVhcHB1c2hwb3AocmVzdWx0LCBlbGVtLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LnNvcnQoY21wKS5yZXZlcnNlKCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIHNtYWxsZXN0IGVsZW1lbnRzIGluIGEgZGF0YXNldC5cbiAgICovXG5cbiAgbnNtYWxsZXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGNtcCkge1xuICAgIHZhciBlbGVtLCBpLCBsb3MsIHJlc3VsdCwgX2ksIF9qLCBfbGVuLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBpZiAobiAqIDEwIDw9IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gYXJyYXkuc2xpY2UoMCwgbikuc29ydChjbXApO1xuICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBsb3MgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGVsZW0gPSBfcmVmW19pXTtcbiAgICAgICAgaWYgKGNtcChlbGVtLCBsb3MpIDwgMCkge1xuICAgICAgICAgIGluc29ydChyZXN1bHQsIGVsZW0sIDAsIG51bGwsIGNtcCk7XG4gICAgICAgICAgcmVzdWx0LnBvcCgpO1xuICAgICAgICAgIGxvcyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGhlYXBpZnkoYXJyYXksIGNtcCk7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaiA9IDAsIF9yZWYxID0gbWluKG4sIGFycmF5Lmxlbmd0aCk7IDAgPD0gX3JlZjEgPyBfaiA8IF9yZWYxIDogX2ogPiBfcmVmMTsgaSA9IDAgPD0gX3JlZjEgPyArK19qIDogLS1faikge1xuICAgICAgX3Jlc3VsdHMucHVzaChoZWFwcG9wKGFycmF5LCBjbXApKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG4gIF9zaWZ0ZG93biA9IGZ1bmN0aW9uKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApIHtcbiAgICB2YXIgbmV3aXRlbSwgcGFyZW50LCBwYXJlbnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBuZXdpdGVtID0gYXJyYXlbcG9zXTtcbiAgICB3aGlsZSAocG9zID4gc3RhcnRwb3MpIHtcbiAgICAgIHBhcmVudHBvcyA9IChwb3MgLSAxKSA+PiAxO1xuICAgICAgcGFyZW50ID0gYXJyYXlbcGFyZW50cG9zXTtcbiAgICAgIGlmIChjbXAobmV3aXRlbSwgcGFyZW50KSA8IDApIHtcbiAgICAgICAgYXJyYXlbcG9zXSA9IHBhcmVudDtcbiAgICAgICAgcG9zID0gcGFyZW50cG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlbcG9zXSA9IG5ld2l0ZW07XG4gIH07XG5cbiAgX3NpZnR1cCA9IGZ1bmN0aW9uKGFycmF5LCBwb3MsIGNtcCkge1xuICAgIHZhciBjaGlsZHBvcywgZW5kcG9zLCBuZXdpdGVtLCByaWdodHBvcywgc3RhcnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBlbmRwb3MgPSBhcnJheS5sZW5ndGg7XG4gICAgc3RhcnRwb3MgPSBwb3M7XG4gICAgbmV3aXRlbSA9IGFycmF5W3Bvc107XG4gICAgY2hpbGRwb3MgPSAyICogcG9zICsgMTtcbiAgICB3aGlsZSAoY2hpbGRwb3MgPCBlbmRwb3MpIHtcbiAgICAgIHJpZ2h0cG9zID0gY2hpbGRwb3MgKyAxO1xuICAgICAgaWYgKHJpZ2h0cG9zIDwgZW5kcG9zICYmICEoY21wKGFycmF5W2NoaWxkcG9zXSwgYXJyYXlbcmlnaHRwb3NdKSA8IDApKSB7XG4gICAgICAgIGNoaWxkcG9zID0gcmlnaHRwb3M7XG4gICAgICB9XG4gICAgICBhcnJheVtwb3NdID0gYXJyYXlbY2hpbGRwb3NdO1xuICAgICAgcG9zID0gY2hpbGRwb3M7XG4gICAgICBjaGlsZHBvcyA9IDIgKiBwb3MgKyAxO1xuICAgIH1cbiAgICBhcnJheVtwb3NdID0gbmV3aXRlbTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApO1xuICB9O1xuXG4gIEhlYXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgSGVhcC5wdXNoID0gaGVhcHB1c2g7XG5cbiAgICBIZWFwLnBvcCA9IGhlYXBwb3A7XG5cbiAgICBIZWFwLnJlcGxhY2UgPSBoZWFwcmVwbGFjZTtcblxuICAgIEhlYXAucHVzaHBvcCA9IGhlYXBwdXNocG9wO1xuXG4gICAgSGVhcC5oZWFwaWZ5ID0gaGVhcGlmeTtcblxuICAgIEhlYXAudXBkYXRlSXRlbSA9IHVwZGF0ZUl0ZW07XG5cbiAgICBIZWFwLm5sYXJnZXN0ID0gbmxhcmdlc3Q7XG5cbiAgICBIZWFwLm5zbWFsbGVzdCA9IG5zbWFsbGVzdDtcblxuICAgIGZ1bmN0aW9uIEhlYXAoY21wKSB7XG4gICAgICB0aGlzLmNtcCA9IGNtcCAhPSBudWxsID8gY21wIDogZGVmYXVsdENtcDtcbiAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXBwdXNoKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaGVhcHBvcCh0aGlzLm5vZGVzLCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzWzBdO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmluZGV4T2YoeCkgIT09IC0xO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXByZXBsYWNlKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaHBvcCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBoZWFwcHVzaHBvcCh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBoZWFwaWZ5KHRoaXMubm9kZXMsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB1cGRhdGVJdGVtKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzID0gW107XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFwO1xuICAgICAgaGVhcCA9IG5ldyBIZWFwKCk7XG4gICAgICBoZWFwLm5vZGVzID0gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICAgIHJldHVybiBoZWFwO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuaW5zZXJ0ID0gSGVhcC5wcm90b3R5cGUucHVzaDtcblxuICAgIEhlYXAucHJvdG90eXBlLnRvcCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5mcm9udCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5oYXMgPSBIZWFwLnByb3RvdHlwZS5jb250YWlucztcblxuICAgIEhlYXAucHJvdG90eXBlLmNvcHkgPSBIZWFwLnByb3RvdHlwZS5jbG9uZTtcblxuICAgIHJldHVybiBIZWFwO1xuXG4gIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsID8gbW9kdWxlLmV4cG9ydHMgOiB2b2lkIDApIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEhlYXA7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LkhlYXAgPSBIZWFwO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL1BhdGhGaW5kaW5nJyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgJ0hlYXAnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnaGVhcCcpLFxyXG4gICAgJ05vZGUnICAgICAgICAgICAgICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL05vZGUnKSxcclxuICAgICdHcmlkJyAgICAgICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9HcmlkJyksXHJcbiAgICAnVXRpbCcgICAgICAgICAgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2NvcmUvVXRpbCcpLFxyXG4gICAgJ0RpYWdvbmFsTW92ZW1lbnQnICAgICAgICAgIDogcmVxdWlyZSgnLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKSxcclxuICAgICdIZXVyaXN0aWMnICAgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vY29yZS9IZXVyaXN0aWMnKSxcclxuICAgICdBU3RhckZpbmRlcicgICAgICAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9BU3RhckZpbmRlcicpLFxyXG4gICAgJ0Jlc3RGaXJzdEZpbmRlcicgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0Jlc3RGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0JyZWFkdGhGaXJzdEZpbmRlcicgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JyZWFkdGhGaXJzdEZpbmRlcicpLFxyXG4gICAgJ0RpamtzdHJhRmluZGVyJyAgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0RpamtzdHJhRmluZGVyJyksXHJcbiAgICAnQmlBU3RhckZpbmRlcicgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlBU3RhckZpbmRlcicpLFxyXG4gICAgJ0JpQmVzdEZpcnN0RmluZGVyJyAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0JpQmVzdEZpcnN0RmluZGVyJyksXHJcbiAgICAnQmlCcmVhZHRoRmlyc3RGaW5kZXInICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvQmlCcmVhZHRoRmlyc3RGaW5kZXInKSxcclxuICAgICdCaURpamtzdHJhRmluZGVyJyAgICAgICAgICA6IHJlcXVpcmUoJy4vZmluZGVycy9CaURpamtzdHJhRmluZGVyJyksXHJcbiAgICAnSURBU3RhckZpbmRlcicgICAgICAgICAgICAgOiByZXF1aXJlKCcuL2ZpbmRlcnMvSURBU3RhckZpbmRlcicpLFxyXG4gICAgJ0p1bXBQb2ludEZpbmRlcicgICAgICAgICAgIDogcmVxdWlyZSgnLi9maW5kZXJzL0p1bXBQb2ludEZpbmRlcicpLFxyXG59O1xyXG4iLCJ2YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHtcclxuICAgIEFsd2F5czogMSxcclxuICAgIE5ldmVyOiAyLFxyXG4gICAgSWZBdE1vc3RPbmVPYnN0YWNsZTogMyxcclxuICAgIE9ubHlXaGVuTm9PYnN0YWNsZXM6IDRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlhZ29uYWxNb3ZlbWVudDsiLCJ2YXIgTm9kZSA9IHJlcXVpcmUoJy4vTm9kZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4vRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkIGNsYXNzLCB3aGljaCBzZXJ2ZXMgYXMgdGhlIGVuY2Fwc3VsYXRpb24gb2YgdGhlIGxheW91dCBvZiB0aGUgbm9kZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge251bWJlcnxBcnJheTxBcnJheTwobnVtYmVyfGJvb2xlYW4pPj59IHdpZHRoX29yX21hdHJpeCBOdW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgZ3JpZCwgb3IgbWF0cml4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgTnVtYmVyIG9mIHJvd3Mgb2YgdGhlIGdyaWQuXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KG51bWJlcnxib29sZWFuKT4+fSBbbWF0cml4XSAtIEEgMC0xIG1hdHJpeFxyXG4gKiAgICAgcmVwcmVzZW50aW5nIHRoZSB3YWxrYWJsZSBzdGF0dXMgb2YgdGhlIG5vZGVzKDAgb3IgZmFsc2UgZm9yIHdhbGthYmxlKS5cclxuICogICAgIElmIHRoZSBtYXRyaXggaXMgbm90IHN1cHBsaWVkLCBhbGwgdGhlIG5vZGVzIHdpbGwgYmUgd2Fsa2FibGUuICAqL1xyXG5mdW5jdGlvbiBHcmlkKHdpZHRoX29yX21hdHJpeCwgaGVpZ2h0LCBtYXRyaXgpIHtcclxuICAgIHZhciB3aWR0aDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHdpZHRoX29yX21hdHJpeCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoX29yX21hdHJpeDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGhfb3JfbWF0cml4Lmxlbmd0aDtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoX29yX21hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAgICAgbWF0cml4ID0gd2lkdGhfb3JfbWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiByb3dzIG9mIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSAyRCBhcnJheSBvZiBub2Rlcy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMuX2J1aWxkTm9kZXMod2lkdGgsIGhlaWdodCwgbWF0cml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIG5vZGVzLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcnxib29sZWFuPj59IFttYXRyaXhdIC0gQSAwLTEgbWF0cml4IHJlcHJlc2VudGluZ1xyXG4gKiAgICAgdGhlIHdhbGthYmxlIHN0YXR1cyBvZiB0aGUgbm9kZXMuXHJcbiAqIEBzZWUgR3JpZFxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuX2J1aWxkTm9kZXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBtYXRyaXgpIHtcclxuICAgIHZhciBpLCBqLFxyXG4gICAgICAgIG5vZGVzID0gbmV3IEFycmF5KGhlaWdodCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XHJcbiAgICAgICAgbm9kZXNbaV0gPSBuZXcgQXJyYXkod2lkdGgpO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB3aWR0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIG5vZGVzW2ldW2pdID0gbmV3IE5vZGUoaiwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobWF0cml4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdHJpeC5sZW5ndGggIT09IGhlaWdodCB8fCBtYXRyaXhbMF0ubGVuZ3RoICE9PSB3aWR0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IHNpemUgZG9lcyBub3QgZml0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHdpZHRoOyArK2opIHtcclxuICAgICAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gMCwgZmFsc2UsIG51bGwgd2lsbCBiZSB3YWxrYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGUgb3RoZXJzIHdpbGwgYmUgdW4td2Fsa2FibGVcclxuICAgICAgICAgICAgICAgIG5vZGVzW2ldW2pdLndhbGthYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG59O1xyXG5cclxuXHJcbkdyaWQucHJvdG90eXBlLmdldE5vZGVBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzW3ldW3hdO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgd2Fsa2FibGUuXHJcbiAqIChBbHNvIHJldHVybnMgZmFsc2UgaWYgdGhlIHBvc2l0aW9uIGlzIG91dHNpZGUgdGhlIGdyaWQuKVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgbm9kZS5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBUaGUgd2Fsa2FiaWxpdHkgb2YgdGhlIG5vZGUuXHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5pc1dhbGthYmxlQXQgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luc2lkZSh4LCB5KSAmJiB0aGlzLm5vZGVzW3ldW3hdLndhbGthYmxlO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcG9zaXRpb24gaXMgaW5zaWRlIHRoZSBncmlkLlxyXG4gKiBYWFg6IGBncmlkLmlzSW5zaWRlKHgsIHkpYCBpcyB3aWVyZCB0byByZWFkLlxyXG4gKiBJdCBzaG91bGQgYmUgYCh4LCB5KSBpcyBpbnNpZGUgZ3JpZGAsIGJ1dCBJIGZhaWxlZCB0byBmaW5kIGEgYmV0dGVyXHJcbiAqIG5hbWUgZm9yIHRoaXMgbWV0aG9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuR3JpZC5wcm90b3R5cGUuaXNJbnNpZGUgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCkgJiYgKHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXQgd2hldGhlciB0aGUgbm9kZSBvbiB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgd2Fsa2FibGUuXHJcbiAqIE5PVEU6IHRocm93cyBleGNlcHRpb24gaWYgdGhlIGNvb3JkaW5hdGUgaXMgbm90IGluc2lkZSB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBub2RlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vZGUuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gd2Fsa2FibGUgLSBXaGV0aGVyIHRoZSBwb3NpdGlvbiBpcyB3YWxrYWJsZS5cclxuICovXHJcbkdyaWQucHJvdG90eXBlLnNldFdhbGthYmxlQXQgPSBmdW5jdGlvbih4LCB5LCB3YWxrYWJsZSkge1xyXG4gICAgdGhpcy5ub2Rlc1t5XVt4XS53YWxrYWJsZSA9IHdhbGthYmxlO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIG5laWdoYm9ycyBvZiB0aGUgZ2l2ZW4gbm9kZS5cclxuICpcclxuICogICAgIG9mZnNldHMgICAgICBkaWFnb25hbE9mZnNldHM6XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICogIHwgICB8IDAgfCAgIHwgICAgfCAwIHwgICB8IDEgfFxyXG4gKiAgKy0tLSstLS0rLS0tKyAgICArLS0tKy0tLSstLS0rXHJcbiAqICB8IDMgfCAgIHwgMSB8ICAgIHwgICB8ICAgfCAgIHxcclxuICogICstLS0rLS0tKy0tLSsgICAgKy0tLSstLS0rLS0tK1xyXG4gKiAgfCAgIHwgMiB8ICAgfCAgICB8IDMgfCAgIHwgMiB8XHJcbiAqICArLS0tKy0tLSstLS0rICAgICstLS0rLS0tKy0tLStcclxuICpcclxuICogIFdoZW4gYWxsb3dEaWFnb25hbCBpcyB0cnVlLCBpZiBvZmZzZXRzW2ldIGlzIHZhbGlkLCB0aGVuXHJcbiAqICBkaWFnb25hbE9mZnNldHNbaV0gYW5kXHJcbiAqICBkaWFnb25hbE9mZnNldHNbKGkgKyAxKSAlIDRdIGlzIHZhbGlkLlxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBkaWFnb25hbE1vdmVtZW50XHJcbiAqL1xyXG5HcmlkLnByb3RvdHlwZS5nZXROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlLCBkaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICB2YXIgeCA9IG5vZGUueCxcclxuICAgICAgICB5ID0gbm9kZS55LFxyXG4gICAgICAgIG5laWdoYm9ycyA9IFtdLFxyXG4gICAgICAgIHMwID0gZmFsc2UsIGQwID0gZmFsc2UsXHJcbiAgICAgICAgczEgPSBmYWxzZSwgZDEgPSBmYWxzZSxcclxuICAgICAgICBzMiA9IGZhbHNlLCBkMiA9IGZhbHNlLFxyXG4gICAgICAgIHMzID0gZmFsc2UsIGQzID0gZmFsc2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgIC8vIOKGkVxyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3kgLSAxXVt4XSk7XHJcbiAgICAgICAgczAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8g4oaSXHJcbiAgICBpZiAodGhpcy5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeV1beCArIDFdKTtcclxuICAgICAgICBzMSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyDihpNcclxuICAgIGlmICh0aGlzLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICBuZWlnaGJvcnMucHVzaChub2Rlc1t5ICsgMV1beF0pO1xyXG4gICAgICAgIHMyID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIOKGkFxyXG4gICAgaWYgKHRoaXMuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgIG5laWdoYm9ycy5wdXNoKG5vZGVzW3ldW3ggLSAxXSk7XHJcbiAgICAgICAgczMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzKSB7XHJcbiAgICAgICAgZDAgPSBzMyAmJiBzMDtcclxuICAgICAgICBkMSA9IHMwICYmIHMxO1xyXG4gICAgICAgIGQyID0gczEgJiYgczI7XHJcbiAgICAgICAgZDMgPSBzMiAmJiBzMztcclxuICAgIH0gZWxzZSBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlKSB7XHJcbiAgICAgICAgZDAgPSBzMyB8fCBzMDtcclxuICAgICAgICBkMSA9IHMwIHx8IHMxO1xyXG4gICAgICAgIGQyID0gczEgfHwgczI7XHJcbiAgICAgICAgZDMgPSBzMiB8fCBzMztcclxuICAgIH0gZWxzZSBpZiAoZGlhZ29uYWxNb3ZlbWVudCA9PT0gRGlhZ29uYWxNb3ZlbWVudC5BbHdheXMpIHtcclxuICAgICAgICBkMCA9IHRydWU7XHJcbiAgICAgICAgZDEgPSB0cnVlO1xyXG4gICAgICAgIGQyID0gdHJ1ZTtcclxuICAgICAgICBkMyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IHZhbHVlIG9mIGRpYWdvbmFsTW92ZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDihpZcclxuICAgIGlmIChkMCAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSAtIDFdW3ggLSAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihpdcclxuICAgIGlmIChkMSAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSAtIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSAtIDFdW3ggKyAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihphcclxuICAgIGlmIChkMiAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSArIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSArIDFdW3ggKyAxXSk7XHJcbiAgICB9XHJcbiAgICAvLyDihplcclxuICAgIGlmIChkMyAmJiB0aGlzLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSArIDEpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzLnB1c2gobm9kZXNbeSArIDFdW3ggLSAxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IGEgY2xvbmUgb2YgdGhpcyBncmlkLlxyXG4gKiBAcmV0dXJuIHtHcmlkfSBDbG9uZWQgZ3JpZC5cclxuICovXHJcbkdyaWQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaSwgaixcclxuXHJcbiAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXNOb2RlcyA9IHRoaXMubm9kZXMsXHJcblxyXG4gICAgICAgIG5ld0dyaWQgPSBuZXcgR3JpZCh3aWR0aCwgaGVpZ2h0KSxcclxuICAgICAgICBuZXdOb2RlcyA9IG5ldyBBcnJheShoZWlnaHQpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7ICsraSkge1xyXG4gICAgICAgIG5ld05vZGVzW2ldID0gbmV3IEFycmF5KHdpZHRoKTtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7ICsraikge1xyXG4gICAgICAgICAgICBuZXdOb2Rlc1tpXVtqXSA9IG5ldyBOb2RlKGosIGksIHRoaXNOb2Rlc1tpXVtqXS53YWxrYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld0dyaWQubm9kZXMgPSBuZXdOb2RlcztcclxuXHJcbiAgICByZXR1cm4gbmV3R3JpZDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JpZDtcclxuIiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgUEYuSGV1cmlzdGljXHJcbiAqIEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgaGV1cmlzdGljIGZ1bmN0aW9ucy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAvKipcclxuICAgKiBNYW5oYXR0YW4gZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGR4ICsgZHlcclxuICAgKi9cclxuICBtYW5oYXR0YW46IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICByZXR1cm4gZHggKyBkeTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFdWNsaWRlYW4gZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNxcnQoZHggKiBkeCArIGR5ICogZHkpXHJcbiAgICovXHJcbiAgZXVjbGlkZWFuOiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogT2N0aWxlIGRpc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIERpZmZlcmVuY2UgaW4geC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHkgLSBEaWZmZXJlbmNlIGluIHkuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KSBmb3IgZ3JpZHNcclxuICAgKi9cclxuICBvY3RpbGU6IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICB2YXIgRiA9IE1hdGguU1FSVDIgLSAxO1xyXG4gICAgICByZXR1cm4gKGR4IDwgZHkpID8gRiAqIGR4ICsgZHkgOiBGICogZHkgKyBkeDtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBDaGVieXNoZXYgZGlzdGFuY2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gRGlmZmVyZW5jZSBpbiB4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeSAtIERpZmZlcmVuY2UgaW4geS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IG1heChkeCwgZHkpXHJcbiAgICovXHJcbiAgY2hlYnlzaGV2OiBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KGR4LCBkeSk7XHJcbiAgfVxyXG5cclxufTtcclxuIiwiLyoqXHJcbiAqIEEgbm9kZSBpbiBncmlkLiBcclxuICogVGhpcyBjbGFzcyBob2xkcyBzb21lIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGEgbm9kZSBhbmQgY3VzdG9tIFxyXG4gKiBhdHRyaWJ1dGVzIG1heSBiZSBhZGRlZCwgZGVwZW5kaW5nIG9uIHRoZSBhbGdvcml0aG1zJyBuZWVkcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt3YWxrYWJsZV0gLSBXaGV0aGVyIHRoaXMgbm9kZSBpcyB3YWxrYWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIE5vZGUoeCwgeSwgd2Fsa2FibGUpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbm9kZSBvbiB0aGUgZ3JpZC5cclxuICAgICAqIEB0eXBlIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBub2RlIG9uIHRoZSBncmlkLlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBub2RlIGNhbiBiZSB3YWxrZWQgdGhyb3VnaC5cclxuICAgICAqIEB0eXBlIGJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgdGhpcy53YWxrYWJsZSA9ICh3YWxrYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHdhbGthYmxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb2RlO1xyXG4iLCIvKipcclxuICogQmFja3RyYWNlIGFjY29yZGluZyB0byB0aGUgcGFyZW50IHJlY29yZHMgYW5kIHJldHVybiB0aGUgcGF0aC5cclxuICogKGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZCBlbmQgbm9kZXMpXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBFbmQgbm9kZVxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gdGhlIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIGJhY2t0cmFjZShub2RlKSB7XHJcbiAgICB2YXIgcGF0aCA9IFtbbm9kZS54LCBub2RlLnldXTtcclxuICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICBwYXRoLnB1c2goW25vZGUueCwgbm9kZS55XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XHJcbn1cclxuZXhwb3J0cy5iYWNrdHJhY2UgPSBiYWNrdHJhY2U7XHJcblxyXG4vKipcclxuICogQmFja3RyYWNlIGZyb20gc3RhcnQgYW5kIGVuZCBub2RlLCBhbmQgcmV0dXJuIHRoZSBwYXRoLlxyXG4gKiAoaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kIGVuZCBub2RlcylcclxuICogQHBhcmFtIHtOb2RlfVxyXG4gKiBAcGFyYW0ge05vZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBiaUJhY2t0cmFjZShub2RlQSwgbm9kZUIpIHtcclxuICAgIHZhciBwYXRoQSA9IGJhY2t0cmFjZShub2RlQSksXHJcbiAgICAgICAgcGF0aEIgPSBiYWNrdHJhY2Uobm9kZUIpO1xyXG4gICAgcmV0dXJuIHBhdGhBLmNvbmNhdChwYXRoQi5yZXZlcnNlKCkpO1xyXG59XHJcbmV4cG9ydHMuYmlCYWNrdHJhY2UgPSBiaUJhY2t0cmFjZTtcclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlIHRoZSBsZW5ndGggb2YgdGhlIHBhdGguXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRoZSBwYXRoXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXRoTGVuZ3RoKHBhdGgpIHtcclxuICAgIHZhciBpLCBzdW0gPSAwLCBhLCBiLCBkeCwgZHk7XHJcbiAgICBmb3IgKGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGEgPSBwYXRoW2kgLSAxXTtcclxuICAgICAgICBiID0gcGF0aFtpXTtcclxuICAgICAgICBkeCA9IGFbMF0gLSBiWzBdO1xyXG4gICAgICAgIGR5ID0gYVsxXSAtIGJbMV07XHJcbiAgICAgICAgc3VtICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtO1xyXG59XHJcbmV4cG9ydHMucGF0aExlbmd0aCA9IHBhdGhMZW5ndGg7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIHRoZSBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzLCByZXR1cm4gYWxsIHRoZSBjb29yZGluYXRlcyBseWluZ1xyXG4gKiBvbiB0aGUgbGluZSBmb3JtZWQgYnkgdGhlc2UgY29vcmRpbmF0ZXMsIGJhc2VkIG9uIEJyZXNlbmhhbSdzIGFsZ29yaXRobS5cclxuICogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVzZW5oYW0nc19saW5lX2FsZ29yaXRobSNTaW1wbGlmaWNhdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0geDAgU3RhcnQgeCBjb29yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5MCBTdGFydCB5IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHgxIEVuZCB4IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkxIEVuZCB5IGNvb3JkaW5hdGVcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBjb29yZGluYXRlcyBvbiB0aGUgbGluZVxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgIHZhciBhYnMgPSBNYXRoLmFicyxcclxuICAgICAgICBsaW5lID0gW10sXHJcbiAgICAgICAgc3gsIHN5LCBkeCwgZHksIGVyciwgZTI7XHJcblxyXG4gICAgZHggPSBhYnMoeDEgLSB4MCk7XHJcbiAgICBkeSA9IGFicyh5MSAtIHkwKTtcclxuXHJcbiAgICBzeCA9ICh4MCA8IHgxKSA/IDEgOiAtMTtcclxuICAgIHN5ID0gKHkwIDwgeTEpID8gMSA6IC0xO1xyXG5cclxuICAgIGVyciA9IGR4IC0gZHk7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsaW5lLnB1c2goW3gwLCB5MF0pO1xyXG5cclxuICAgICAgICBpZiAoeDAgPT09IHgxICYmIHkwID09PSB5MSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZTIgPSAyICogZXJyO1xyXG4gICAgICAgIGlmIChlMiA+IC1keSkge1xyXG4gICAgICAgICAgICBlcnIgPSBlcnIgLSBkeTtcclxuICAgICAgICAgICAgeDAgPSB4MCArIHN4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZTIgPCBkeCkge1xyXG4gICAgICAgICAgICBlcnIgPSBlcnIgKyBkeDtcclxuICAgICAgICAgICAgeTAgPSB5MCArIHN5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgY29tcHJlc3NlZCBwYXRoLCByZXR1cm4gYSBuZXcgcGF0aCB0aGF0IGhhcyBhbGwgdGhlIHNlZ21lbnRzXHJcbiAqIGluIGl0IGludGVycG9sYXRlZC5cclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZXhwYW5kZWQgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gZXhwYW5kUGF0aChwYXRoKSB7XHJcbiAgICB2YXIgZXhwYW5kZWQgPSBbXSxcclxuICAgICAgICBsZW4gPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICBjb29yZDAsIGNvb3JkMSxcclxuICAgICAgICBpbnRlcnBvbGF0ZWQsXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkTGVuLFxyXG4gICAgICAgIGksIGo7XHJcblxyXG4gICAgaWYgKGxlbiA8IDIpIHtcclxuICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xyXG4gICAgICAgIGNvb3JkMCA9IHBhdGhbaV07XHJcbiAgICAgICAgY29vcmQxID0gcGF0aFtpICsgMV07XHJcblxyXG4gICAgICAgIGludGVycG9sYXRlZCA9IGludGVycG9sYXRlKGNvb3JkMFswXSwgY29vcmQwWzFdLCBjb29yZDFbMF0sIGNvb3JkMVsxXSk7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVkTGVuID0gaW50ZXJwb2xhdGVkLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaW50ZXJwb2xhdGVkTGVuIC0gMTsgKytqKSB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goaW50ZXJwb2xhdGVkW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBhbmRlZC5wdXNoKHBhdGhbbGVuIC0gMV0pO1xyXG5cclxuICAgIHJldHVybiBleHBhbmRlZDtcclxufVxyXG5leHBvcnRzLmV4cGFuZFBhdGggPSBleHBhbmRQYXRoO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTbW9vdGhlbiB0aGUgZ2l2ZSBwYXRoLlxyXG4gKiBUaGUgb3JpZ2luYWwgcGF0aCB3aWxsIG5vdCBiZSBtb2RpZmllZDsgYSBuZXcgcGF0aCB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBAcGFyYW0ge1BGLkdyaWR9IGdyaWRcclxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gcGF0aCBUaGUgcGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gc21vb3RoZW5QYXRoKGdyaWQsIHBhdGgpIHtcclxuICAgIHZhciBsZW4gPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICB4MCA9IHBhdGhbMF1bMF0sICAgICAgICAvLyBwYXRoIHN0YXJ0IHhcclxuICAgICAgICB5MCA9IHBhdGhbMF1bMV0sICAgICAgICAvLyBwYXRoIHN0YXJ0IHlcclxuICAgICAgICB4MSA9IHBhdGhbbGVuIC0gMV1bMF0sICAvLyBwYXRoIGVuZCB4XHJcbiAgICAgICAgeTEgPSBwYXRoW2xlbiAtIDFdWzFdLCAgLy8gcGF0aCBlbmQgeVxyXG4gICAgICAgIHN4LCBzeSwgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgc3RhcnQgY29vcmRpbmF0ZVxyXG4gICAgICAgIGV4LCBleSwgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgZW5kIGNvb3JkaW5hdGVcclxuICAgICAgICBuZXdQYXRoLFxyXG4gICAgICAgIGksIGosIGNvb3JkLCBsaW5lLCB0ZXN0Q29vcmQsIGJsb2NrZWQ7XHJcblxyXG4gICAgc3ggPSB4MDtcclxuICAgIHN5ID0geTA7XHJcbiAgICBuZXdQYXRoID0gW1tzeCwgc3ldXTtcclxuXHJcbiAgICBmb3IgKGkgPSAyOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBjb29yZCA9IHBhdGhbaV07XHJcbiAgICAgICAgZXggPSBjb29yZFswXTtcclxuICAgICAgICBleSA9IGNvb3JkWzFdO1xyXG4gICAgICAgIGxpbmUgPSBpbnRlcnBvbGF0ZShzeCwgc3ksIGV4LCBleSk7XHJcblxyXG4gICAgICAgIGJsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGogPSAxOyBqIDwgbGluZS5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICB0ZXN0Q29vcmQgPSBsaW5lW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh0ZXN0Q29vcmRbMF0sIHRlc3RDb29yZFsxXSkpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2NrZWQpIHtcclxuICAgICAgICAgICAgbGFzdFZhbGlkQ29vcmQgPSBwYXRoW2kgLSAxXTtcclxuICAgICAgICAgICAgbmV3UGF0aC5wdXNoKGxhc3RWYWxpZENvb3JkKTtcclxuICAgICAgICAgICAgc3ggPSBsYXN0VmFsaWRDb29yZFswXTtcclxuICAgICAgICAgICAgc3kgPSBsYXN0VmFsaWRDb29yZFsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdQYXRoLnB1c2goW3gxLCB5MV0pO1xyXG5cclxuICAgIHJldHVybiBuZXdQYXRoO1xyXG59XHJcbmV4cG9ydHMuc21vb3RoZW5QYXRoID0gc21vb3RoZW5QYXRoO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wcmVzcyBhIHBhdGgsIHJlbW92ZSByZWR1bmRhbnQgbm9kZXMgd2l0aG91dCBhbHRlcmluZyB0aGUgc2hhcGVcclxuICogVGhlIG9yaWdpbmFsIHBhdGggaXMgbm90IG1vZGlmaWVkXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHBhdGggVGhlIHBhdGhcclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBjb21wcmVzc2VkIHBhdGhcclxuICovXHJcbmZ1bmN0aW9uIGNvbXByZXNzUGF0aChwYXRoKSB7XHJcblxyXG4gICAgLy8gbm90aGluZyB0byBjb21wcmVzc1xyXG4gICAgaWYocGF0aC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbXByZXNzZWQgPSBbXSxcclxuICAgICAgICBzeCA9IHBhdGhbMF1bMF0sIC8vIHN0YXJ0IHhcclxuICAgICAgICBzeSA9IHBhdGhbMF1bMV0sIC8vIHN0YXJ0IHlcclxuICAgICAgICBweCA9IHBhdGhbMV1bMF0sIC8vIHNlY29uZCBwb2ludCB4XHJcbiAgICAgICAgcHkgPSBwYXRoWzFdWzFdLCAvLyBzZWNvbmQgcG9pbnQgeVxyXG4gICAgICAgIGR4ID0gcHggLSBzeCwgLy8gZGlyZWN0aW9uIGJldHdlZW4gdGhlIHR3byBwb2ludHNcclxuICAgICAgICBkeSA9IHB5IC0gc3ksIC8vIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXHJcbiAgICAgICAgbHgsIGx5LFxyXG4gICAgICAgIGxkeCwgbGR5LFxyXG4gICAgICAgIHNxLCBpO1xyXG5cclxuICAgIC8vIG5vcm1hbGl6ZSB0aGUgZGlyZWN0aW9uXHJcbiAgICBzcSA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuICAgIGR4IC89IHNxO1xyXG4gICAgZHkgLz0gc3E7XHJcblxyXG4gICAgLy8gc3RhcnQgdGhlIG5ldyBwYXRoXHJcbiAgICBjb21wcmVzc2VkLnB1c2goW3N4LHN5XSk7XHJcblxyXG4gICAgZm9yKGkgPSAyOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBwb2ludFxyXG4gICAgICAgIGx4ID0gcHg7XHJcbiAgICAgICAgbHkgPSBweTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgZGlyZWN0aW9uXHJcbiAgICAgICAgbGR4ID0gZHg7XHJcbiAgICAgICAgbGR5ID0gZHk7XHJcblxyXG4gICAgICAgIC8vIG5leHQgcG9pbnRcclxuICAgICAgICBweCA9IHBhdGhbaV1bMF07XHJcbiAgICAgICAgcHkgPSBwYXRoW2ldWzFdO1xyXG5cclxuICAgICAgICAvLyBuZXh0IGRpcmVjdGlvblxyXG4gICAgICAgIGR4ID0gcHggLSBseDtcclxuICAgICAgICBkeSA9IHB5IC0gbHk7XHJcblxyXG4gICAgICAgIC8vIG5vcm1hbGl6ZVxyXG4gICAgICAgIHNxID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG4gICAgICAgIGR4IC89IHNxO1xyXG4gICAgICAgIGR5IC89IHNxO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZGlyZWN0aW9uIGhhcyBjaGFuZ2VkLCBzdG9yZSB0aGUgcG9pbnRcclxuICAgICAgICBpZiAoIGR4ICE9PSBsZHggfHwgZHkgIT09IGxkeSApIHtcclxuICAgICAgICAgICAgY29tcHJlc3NlZC5wdXNoKFtseCxseV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdG9yZSB0aGUgbGFzdCBwb2ludFxyXG4gICAgY29tcHJlc3NlZC5wdXNoKFtweCxweV0pO1xyXG5cclxuICAgIHJldHVybiBjb21wcmVzc2VkO1xyXG59XHJcbmV4cG9ydHMuY29tcHJlc3NQYXRoID0gY29tcHJlc3NQYXRoO1xyXG4iLCJ2YXIgSGVhcCAgICAgICA9IHJlcXVpcmUoJ2hlYXAnKTtcclxudmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEEqIHBhdGgtZmluZGVyLiBCYXNlZCB1cG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvamF2YXNjcmlwdC1hc3RhclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmcgXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQud2VpZ2h0IFdlaWdodCB0byBhcHBseSB0byB0aGUgaGV1cmlzdGljIHRvIGFsbG93IGZvclxyXG4gKiAgICAgc3Vib3B0aW1hbCBwYXRocywgaW4gb3JkZXIgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaC5cclxuICovXHJcbmZ1bmN0aW9uIEFTdGFyRmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZCB0aGUgbWFuaGF0dGFuIGhldXJpc3RpYyBpcyBub3RcclxuICAgIC8vYWRtaXNzaWJsZS4gSXQgc2hvdWxkIGJlIG9jdGlsZSBpbnN0ZWFkXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMub2N0aWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5BU3RhckZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIG9wZW5MaXN0ID0gbmV3IEhlYXAoZnVuY3Rpb24obm9kZUEsIG5vZGVCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlQS5mIC0gbm9kZUIuZjtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgIGhldXJpc3RpYyA9IHRoaXMuaGV1cmlzdGljLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgd2VpZ2h0ID0gdGhpcy53ZWlnaHQsXHJcbiAgICAgICAgYWJzID0gTWF0aC5hYnMsIFNRUlQyID0gTWF0aC5TUVJUMixcclxuICAgICAgICBub2RlLCBuZWlnaGJvcnMsIG5laWdoYm9yLCBpLCBsLCB4LCB5LCBuZztcclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBzdGFydCBub2RlIHRvIGJlIDBcclxuICAgIHN0YXJ0Tm9kZS5nID0gMDtcclxuICAgIHN0YXJ0Tm9kZS5mID0gMDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBub2RlIGludG8gdGhlIG9wZW4gbGlzdFxyXG4gICAgb3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgLy8gd2hpbGUgdGhlIG9wZW4gbGlzdCBpcyBub3QgZW1wdHlcclxuICAgIHdoaWxlICghb3Blbkxpc3QuZW1wdHkoKSkge1xyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2Ygbm9kZSB3aGljaCBoYXMgdGhlIG1pbmltdW0gYGZgIHZhbHVlLlxyXG4gICAgICAgIG5vZGUgPSBvcGVuTGlzdC5wb3AoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGlmIHJlYWNoZWQgdGhlIGVuZCBwb3NpdGlvbiwgY29uc3RydWN0IHRoZSBwYXRoIGFuZCByZXR1cm4gaXRcclxuICAgICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5iYWNrdHJhY2UoZW5kTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4ID0gbmVpZ2hib3IueDtcclxuICAgICAgICAgICAgeSA9IG5laWdoYm9yLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gY3VycmVudCBub2RlIGFuZCB0aGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgbmV4dCBnIHNjb3JlXHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgKCh4IC0gbm9kZS54ID09PSAwIHx8IHkgLSBub2RlLnkgPT09IDApID8gMSA6IFNRUlQyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZWlnaGJvciBoYXMgbm90IGJlZW4gaW5zcGVjdGVkIHlldCwgb3JcclxuICAgICAgICAgICAgLy8gY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QgZnJvbSB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkIHx8IG5nIDwgbmVpZ2hib3IuZykge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuaCA9IG5laWdoYm9yLmggfHwgd2VpZ2h0ICogaGV1cmlzdGljKGFicyh4IC0gZW5kWCksIGFicyh5IC0gZW5kWSkpO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZiA9IG5laWdoYm9yLmcgKyBuZWlnaGJvci5oO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZWlnaGJvciBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBpdHMgZiB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkLCB3ZSBoYXZlIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGl0cyBwb3NpdGlvbiBpbiB0aGUgb3BlbiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbkxpc3QudXBkYXRlSXRlbShuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIGVuZCBmb3IgZWFjaCBuZWlnaGJvclxyXG4gICAgfSAvLyBlbmQgd2hpbGUgbm90IG9wZW4gbGlzdCBlbXB0eVxyXG5cclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBU3RhckZpbmRlcjtcclxuIiwidmFyIEFTdGFyRmluZGVyID0gcmVxdWlyZSgnLi9BU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIEJlc3QtRmlyc3QtU2VhcmNoIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQVN0YXJGaW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICovXHJcbmZ1bmN0aW9uIEJlc3RGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIEFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuXHJcbiAgICB2YXIgb3JpZyA9IHRoaXMuaGV1cmlzdGljO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gb3JpZyhkeCwgZHkpICogMTAwMDAwMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkJlc3RGaXJzdEZpbmRlci5wcm90b3R5cGUgPSBuZXcgQVN0YXJGaW5kZXIoKTtcclxuQmVzdEZpcnN0RmluZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJlc3RGaXJzdEZpbmRlcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmVzdEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgSGVhcCAgICAgICA9IHJlcXVpcmUoJ2hlYXAnKTtcclxudmFyIFV0aWwgICAgICAgPSByZXF1aXJlKCcuLi9jb3JlL1V0aWwnKTtcclxudmFyIEhldXJpc3RpYyAgPSByZXF1aXJlKCcuLi9jb3JlL0hldXJpc3RpYycpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEEqIHBhdGgtZmluZGVyLlxyXG4gKiBiYXNlZCB1cG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvamF2YXNjcmlwdC1hc3RhclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0LmhldXJpc3RpYyBIZXVyaXN0aWMgZnVuY3Rpb24gdG8gZXN0aW1hdGUgdGhlIGRpc3RhbmNlXHJcbiAqICAgICAoZGVmYXVsdHMgdG8gbWFuaGF0dGFuKS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC53ZWlnaHQgV2VpZ2h0IHRvIGFwcGx5IHRvIHRoZSBoZXVyaXN0aWMgdG8gYWxsb3cgZm9yXHJcbiAqICAgICBzdWJvcHRpbWFsIHBhdGhzLCBpbiBvcmRlciB0byBzcGVlZCB1cCB0aGUgc2VhcmNoLlxyXG4gKi9cclxuZnVuY3Rpb24gQmlBU3RhckZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWdvbmFsTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEaWFnb25hbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbnRDcm9zc0Nvcm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuSWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1doZW4gZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZCB0aGUgbWFuaGF0dGFuIGhldXJpc3RpYyBpcyBub3QgYWRtaXNzaWJsZVxyXG4gICAgLy9JdCBzaG91bGQgYmUgb2N0aWxlIGluc3RlYWRcclxuICAgIGlmICh0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXIpIHtcclxuICAgICAgICB0aGlzLmhldXJpc3RpYyA9IG9wdC5oZXVyaXN0aWMgfHwgSGV1cmlzdGljLm1hbmhhdHRhbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5vY3RpbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHRoZSBwYXRoLlxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHBhdGgsIGluY2x1ZGluZyBib3RoIHN0YXJ0IGFuZFxyXG4gKiAgICAgZW5kIHBvc2l0aW9ucy5cclxuICovXHJcbkJpQVN0YXJGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBjbXAgPSBmdW5jdGlvbihub2RlQSwgbm9kZUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVBLmYgLSBub2RlQi5mO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRPcGVuTGlzdCA9IG5ldyBIZWFwKGNtcCksXHJcbiAgICAgICAgZW5kT3Blbkxpc3QgPSBuZXcgSGVhcChjbXApLFxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgaGV1cmlzdGljID0gdGhpcy5oZXVyaXN0aWMsXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICB3ZWlnaHQgPSB0aGlzLndlaWdodCxcclxuICAgICAgICBhYnMgPSBNYXRoLmFicywgU1FSVDIgPSBNYXRoLlNRUlQyLFxyXG4gICAgICAgIG5vZGUsIG5laWdoYm9ycywgbmVpZ2hib3IsIGksIGwsIHgsIHksIG5nLFxyXG4gICAgICAgIEJZX1NUQVJUID0gMSwgQllfRU5EID0gMjtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGBnYCBhbmQgYGZgIHZhbHVlIG9mIHRoZSBzdGFydCBub2RlIHRvIGJlIDBcclxuICAgIC8vIGFuZCBwdXNoIGl0IGludG8gdGhlIHN0YXJ0IG9wZW4gbGlzdFxyXG4gICAgc3RhcnROb2RlLmcgPSAwO1xyXG4gICAgc3RhcnROb2RlLmYgPSAwO1xyXG4gICAgc3RhcnRPcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gQllfU1RBUlQ7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBgZ2AgYW5kIGBmYCB2YWx1ZSBvZiB0aGUgZW5kIG5vZGUgdG8gYmUgMFxyXG4gICAgLy8gYW5kIHB1c2ggaXQgaW50byB0aGUgb3BlbiBvcGVuIGxpc3RcclxuICAgIGVuZE5vZGUuZyA9IDA7XHJcbiAgICBlbmROb2RlLmYgPSAwO1xyXG4gICAgZW5kT3Blbkxpc3QucHVzaChlbmROb2RlKTtcclxuICAgIGVuZE5vZGUub3BlbmVkID0gQllfRU5EO1xyXG5cclxuICAgIC8vIHdoaWxlIGJvdGggdGhlIG9wZW4gbGlzdHMgYXJlIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKCFzdGFydE9wZW5MaXN0LmVtcHR5KCkgJiYgIWVuZE9wZW5MaXN0LmVtcHR5KCkpIHtcclxuXHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBzdGFydCBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IHN0YXJ0T3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQgPT09IEJZX0VORCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuYmlCYWNrdHJhY2Uobm9kZSwgbmVpZ2hib3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4ID0gbmVpZ2hib3IueDtcclxuICAgICAgICAgICAgeSA9IG5laWdoYm9yLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gY3VycmVudCBub2RlIGFuZCB0aGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgbmV4dCBnIHNjb3JlXHJcbiAgICAgICAgICAgIG5nID0gbm9kZS5nICsgKCh4IC0gbm9kZS54ID09PSAwIHx8IHkgLSBub2RlLnkgPT09IDApID8gMSA6IFNRUlQyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZWlnaGJvciBoYXMgbm90IGJlZW4gaW5zcGVjdGVkIHlldCwgb3JcclxuICAgICAgICAgICAgLy8gY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QgZnJvbSB0aGUgY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkIHx8IG5nIDwgbmVpZ2hib3IuZykge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuZyA9IG5nO1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3IuaCA9IG5laWdoYm9yLmggfHxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQgKiBoZXVyaXN0aWMoYWJzKHggLSBlbmRYKSwgYWJzKHkgLSBlbmRZKSk7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5mID0gbmVpZ2hib3IuZyArIG5laWdoYm9yLmg7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSBCWV9TVEFSVDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5laWdoYm9yIGNhbiBiZSByZWFjaGVkIHdpdGggc21hbGxlciBjb3N0LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIGl0cyBmIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQsIHdlIGhhdmUgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaXRzIHBvc2l0aW9uIGluIHRoZSBvcGVuIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBzdGFydE9wZW5MaXN0LnVwZGF0ZUl0ZW0obmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgZm9yIGVhY2ggbmVpZ2hib3JcclxuXHJcblxyXG4gICAgICAgIC8vIHBvcCB0aGUgcG9zaXRpb24gb2YgZW5kIG5vZGUgd2hpY2ggaGFzIHRoZSBtaW5pbXVtIGBmYCB2YWx1ZS5cclxuICAgICAgICBub2RlID0gZW5kT3Blbkxpc3QucG9wKCk7XHJcbiAgICAgICAgbm9kZS5jbG9zZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBnZXQgbmVpZ2JvdXJzIG9mIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICBuZWlnaGJvcnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBkaWFnb25hbE1vdmVtZW50KTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvci5vcGVuZWQgPT09IEJZX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5iaUJhY2t0cmFjZShuZWlnaGJvciwgbm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHggPSBuZWlnaGJvci54O1xyXG4gICAgICAgICAgICB5ID0gbmVpZ2hib3IueTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBjdXJyZW50IG5vZGUgYW5kIHRoZSBuZWlnaGJvclxyXG4gICAgICAgICAgICAvLyBhbmQgY2FsY3VsYXRlIHRoZSBuZXh0IGcgc2NvcmVcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyAoKHggLSBub2RlLnggPT09IDAgfHwgeSAtIG5vZGUueSA9PT0gMCkgPyAxIDogU1FSVDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG5laWdoYm9yIGhhcyBub3QgYmVlbiBpbnNwZWN0ZWQgeWV0LCBvclxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgcmVhY2hlZCB3aXRoIHNtYWxsZXIgY29zdCBmcm9tIHRoZSBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgaWYgKCFuZWlnaGJvci5vcGVuZWQgfHwgbmcgPCBuZWlnaGJvci5nKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5oID0gbmVpZ2hib3IuaCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCAqIGhldXJpc3RpYyhhYnMoeCAtIHN0YXJ0WCksIGFicyh5IC0gc3RhcnRZKSk7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5mID0gbmVpZ2hib3IuZyArIG5laWdoYm9yLmg7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3Iub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kT3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gQllfRU5EO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmVpZ2hib3IgY2FuIGJlIHJlYWNoZWQgd2l0aCBzbWFsbGVyIGNvc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgaXRzIGYgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCwgd2UgaGF2ZSB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBpdHMgcG9zaXRpb24gaW4gdGhlIG9wZW4gbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZE9wZW5MaXN0LnVwZGF0ZUl0ZW0obmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgZm9yIGVhY2ggbmVpZ2hib3JcclxuICAgIH0gLy8gZW5kIHdoaWxlIG5vdCBvcGVuIGxpc3QgZW1wdHlcclxuXHJcbiAgICAvLyBmYWlsIHRvIGZpbmQgdGhlIHBhdGhcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmlBU3RhckZpbmRlcjtcclxuIiwidmFyIEJpQVN0YXJGaW5kZXIgPSByZXF1aXJlKCcuL0JpQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBCaS1kaXJlY2l0aW9uYWwgQmVzdC1GaXJzdC1TZWFyY2ggcGF0aC1maW5kZXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyBCaUFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqL1xyXG5mdW5jdGlvbiBCaUJlc3RGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIEJpQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG5cclxuICAgIHZhciBvcmlnID0gdGhpcy5oZXVyaXN0aWM7XHJcbiAgICB0aGlzLmhldXJpc3RpYyA9IGZ1bmN0aW9uKGR4LCBkeSkge1xyXG4gICAgICAgIHJldHVybiBvcmlnKGR4LCBkeSkgKiAxMDAwMDAwO1xyXG4gICAgfTtcclxufVxyXG5cclxuQmlCZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlID0gbmV3IEJpQVN0YXJGaW5kZXIoKTtcclxuQmlCZXN0Rmlyc3RGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlCZXN0Rmlyc3RGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpQmVzdEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgVXRpbCA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEJpLWRpcmVjdGlvbmFsIEJyZWFkdGgtRmlyc3QtU2VhcmNoIHBhdGggZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIEJpQnJlYWR0aEZpcnN0RmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5hbGxvd0RpYWdvbmFsID0gb3B0LmFsbG93RGlhZ29uYWw7XHJcbiAgICB0aGlzLmRvbnRDcm9zc0Nvcm5lcnMgPSBvcHQuZG9udENyb3NzQ29ybmVycztcclxuICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IG9wdC5kaWFnb25hbE1vdmVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5CaUJyZWFkdGhGaXJzdEZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIHN0YXJ0Tm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICBlbmROb2RlID0gZ3JpZC5nZXROb2RlQXQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgc3RhcnRPcGVuTGlzdCA9IFtdLCBlbmRPcGVuTGlzdCA9IFtdLFxyXG4gICAgICAgIG5laWdoYm9ycywgbmVpZ2hib3IsIG5vZGUsXHJcbiAgICAgICAgZGlhZ29uYWxNb3ZlbWVudCA9IHRoaXMuZGlhZ29uYWxNb3ZlbWVudCxcclxuICAgICAgICBCWV9TVEFSVCA9IDAsIEJZX0VORCA9IDEsXHJcbiAgICAgICAgaSwgbDtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBzdGFydCBhbmQgZW5kIG5vZGVzIGludG8gdGhlIHF1ZXVlc1xyXG4gICAgc3RhcnRPcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0Tm9kZS5ieSA9IEJZX1NUQVJUO1xyXG5cclxuICAgIGVuZE9wZW5MaXN0LnB1c2goZW5kTm9kZSk7XHJcbiAgICBlbmROb2RlLm9wZW5lZCA9IHRydWU7XHJcbiAgICBlbmROb2RlLmJ5ID0gQllfRU5EO1xyXG5cclxuICAgIC8vIHdoaWxlIGJvdGggdGhlIHF1ZXVlcyBhcmUgbm90IGVtcHR5XHJcbiAgICB3aGlsZSAoc3RhcnRPcGVuTGlzdC5sZW5ndGggJiYgZW5kT3Blbkxpc3QubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIC8vIGV4cGFuZCBzdGFydCBvcGVuIGxpc3RcclxuXHJcbiAgICAgICAgbm9kZSA9IHN0YXJ0T3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBub2RlIGhhcyBiZWVuIGluc3BlY3RlZCBieSB0aGUgcmV2ZXJzZWQgc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBhIHBhdGggaXMgZm91bmQuXHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3IuYnkgPT09IEJZX0VORCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5vZGUsIG5laWdoYm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXJ0T3Blbkxpc3QucHVzaChuZWlnaGJvcik7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLmJ5ID0gQllfU1RBUlQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBleHBhbmQgZW5kIG9wZW4gbGlzdFxyXG5cclxuICAgICAgICBub2RlID0gZW5kT3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLmJ5ID09PSBCWV9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmJpQmFja3RyYWNlKG5laWdoYm9yLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuZE9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5ieSA9IEJZX0VORDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJpQnJlYWR0aEZpcnN0RmluZGVyO1xyXG4iLCJ2YXIgQmlBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQmlBU3RhckZpbmRlcicpO1xyXG5cclxuLyoqXHJcbiAqIEJpLWRpcmVjdGlvbmFsIERpamtzdHJhIHBhdGgtZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgQmlBU3RhckZpbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmFsbG93RGlhZ29uYWwgV2hldGhlciBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkLlxyXG4gKiAgICAgRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuZG9udENyb3NzQ29ybmVycyBEaXNhbGxvdyBkaWFnb25hbCBtb3ZlbWVudCB0b3VjaGluZ1xyXG4gKiAgICAgYmxvY2sgY29ybmVycy4gRGVwcmVjYXRlZCwgdXNlIGRpYWdvbmFsTW92ZW1lbnQgaW5zdGVhZC5cclxuICogQHBhcmFtIHtEaWFnb25hbE1vdmVtZW50fSBvcHQuZGlhZ29uYWxNb3ZlbWVudCBBbGxvd2VkIGRpYWdvbmFsIG1vdmVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gQmlEaWprc3RyYUZpbmRlcihvcHQpIHtcclxuICAgIEJpQVN0YXJGaW5kZXIuY2FsbCh0aGlzLCBvcHQpO1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbn1cclxuXHJcbkJpRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlID0gbmV3IEJpQVN0YXJGaW5kZXIoKTtcclxuQmlEaWprc3RyYUZpbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaURpamtzdHJhRmluZGVyO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCaURpamtzdHJhRmluZGVyO1xyXG4iLCJ2YXIgVXRpbCA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIEJyZWFkdGgtRmlyc3QtU2VhcmNoIHBhdGggZmluZGVyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5hbGxvd0RpYWdvbmFsIFdoZXRoZXIgZGlhZ29uYWwgbW92ZW1lbnQgaXMgYWxsb3dlZC5cclxuICogICAgIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0LmRvbnRDcm9zc0Nvcm5lcnMgRGlzYWxsb3cgZGlhZ29uYWwgbW92ZW1lbnQgdG91Y2hpbmdcclxuICogICAgIGJsb2NrIGNvcm5lcnMuIERlcHJlY2F0ZWQsIHVzZSBkaWFnb25hbE1vdmVtZW50IGluc3RlYWQuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQWxsb3dlZCBkaWFnb25hbCBtb3ZlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIEJyZWFkdGhGaXJzdEZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhZ29uYWxNb3ZlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0RpYWdvbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhZ29uYWxNb3ZlbWVudCA9IERpYWdvbmFsTW92ZW1lbnQuTmV2ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9udENyb3NzQ29ybmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5JZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBwYXRoLCBpbmNsdWRpbmcgYm90aCBzdGFydCBhbmRcclxuICogICAgIGVuZCBwb3NpdGlvbnMuXHJcbiAqL1xyXG5CcmVhZHRoRmlyc3RGaW5kZXIucHJvdG90eXBlLmZpbmRQYXRoID0gZnVuY3Rpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGdyaWQpIHtcclxuICAgIHZhciBvcGVuTGlzdCA9IFtdLFxyXG4gICAgICAgIGRpYWdvbmFsTW92ZW1lbnQgPSB0aGlzLmRpYWdvbmFsTW92ZW1lbnQsXHJcbiAgICAgICAgc3RhcnROb2RlID0gZ3JpZC5nZXROb2RlQXQoc3RhcnRYLCBzdGFydFkpLFxyXG4gICAgICAgIGVuZE5vZGUgPSBncmlkLmdldE5vZGVBdChlbmRYLCBlbmRZKSxcclxuICAgICAgICBuZWlnaGJvcnMsIG5laWdoYm9yLCBub2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IHBvcyBpbnRvIHRoZSBxdWV1ZVxyXG4gICAgb3Blbkxpc3QucHVzaChzdGFydE5vZGUpO1xyXG4gICAgc3RhcnROb2RlLm9wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgLy8gd2hpbGUgdGhlIHF1ZXVlIGlzIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKG9wZW5MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vIHRha2UgdGhlIGZyb250IG5vZGUgZnJvbSB0aGUgcXVldWVcclxuICAgICAgICBub2RlID0gb3Blbkxpc3Quc2hpZnQoKTtcclxuICAgICAgICBub2RlLmNsb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIGVuZCBwb3NpdGlvblxyXG4gICAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmJhY2t0cmFjZShlbmROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5laWdoYm9ycyA9IGdyaWQuZ2V0TmVpZ2hib3JzKG5vZGUsIGRpYWdvbmFsTW92ZW1lbnQpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gc2tpcCB0aGlzIG5laWdoYm9yIGlmIGl0IGhhcyBiZWVuIGluc3BlY3RlZCBiZWZvcmVcclxuICAgICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCB8fCBuZWlnaGJvci5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcGVuTGlzdC5wdXNoKG5laWdoYm9yKTtcclxuICAgICAgICAgICAgbmVpZ2hib3Iub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVpZ2hib3IucGFyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGZhaWwgdG8gZmluZCB0aGUgcGF0aFxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCcmVhZHRoRmlyc3RGaW5kZXI7XHJcbiIsInZhciBBU3RhckZpbmRlciA9IHJlcXVpcmUoJy4vQVN0YXJGaW5kZXInKTtcclxuXHJcbi8qKlxyXG4gKiBEaWprc3RyYSBwYXRoLWZpbmRlci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlbmRzIEFTdGFyRmluZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBEaWprc3RyYUZpbmRlcihvcHQpIHtcclxuICAgIEFTdGFyRmluZGVyLmNhbGwodGhpcywgb3B0KTtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5EaWprc3RyYUZpbmRlci5wcm90b3R5cGUgPSBuZXcgQVN0YXJGaW5kZXIoKTtcclxuRGlqa3N0cmFGaW5kZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGlqa3N0cmFGaW5kZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpamtzdHJhRmluZGVyO1xyXG4iLCJ2YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBOb2RlICAgICAgID0gcmVxdWlyZSgnLi4vY29yZS9Ob2RlJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogSXRlcmF0aXZlIERlZXBpbmcgQSBTdGFyIChJREEqKSBwYXRoLWZpbmRlci5cclxuICpcclxuICogUmVjdXJzaW9uIGJhc2VkIG9uOlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBsLmpodS5lZHUvfmhhbGwvQUktUHJvZ3JhbW1pbmcvSURBLVN0YXIuaHRtbFxyXG4gKlxyXG4gKiBQYXRoIHJldHJhY2luZyBiYXNlZCBvbjpcclxuICogIFYuIE5hZ2VzaHdhcmEgUmFvLCBWaXBpbiBLdW1hciBhbmQgSy4gUmFtZXNoXHJcbiAqICBcIkEgUGFyYWxsZWwgSW1wbGVtZW50YXRpb24gb2YgSXRlcmF0aXZlLURlZXBpbmctQSpcIiwgSmFudWFyeSAxOTg3LlxyXG4gKiAgZnRwOi8vZnRwLmNzLnV0ZXhhcy5lZHUvLnNuYXBzaG90L2hvdXJseS4xL3B1Yi9BSS1MYWIvdGVjaC1yZXBvcnRzL1VULUFJLVRSLTg3LTQ2LnBkZlxyXG4gKlxyXG4gKiBAYXV0aG9yIEdlcmFyZCBNZWllciAod3d3LmdlcmFyZG1laWVyLmNvbSlcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRcclxuICogQHBhcmFtIHtib29sZWFufSBvcHQuYWxsb3dEaWFnb25hbCBXaGV0aGVyIGRpYWdvbmFsIG1vdmVtZW50IGlzIGFsbG93ZWQuXHJcbiAqICAgICBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdC5kb250Q3Jvc3NDb3JuZXJzIERpc2FsbG93IGRpYWdvbmFsIG1vdmVtZW50IHRvdWNoaW5nXHJcbiAqICAgICBibG9jayBjb3JuZXJzLiBEZXByZWNhdGVkLCB1c2UgZGlhZ29uYWxNb3ZlbWVudCBpbnN0ZWFkLlxyXG4gKiBAcGFyYW0ge0RpYWdvbmFsTW92ZW1lbnR9IG9wdC5kaWFnb25hbE1vdmVtZW50IEFsbG93ZWQgZGlhZ29uYWwgbW92ZW1lbnQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHQud2VpZ2h0IFdlaWdodCB0byBhcHBseSB0byB0aGUgaGV1cmlzdGljIHRvIGFsbG93IGZvclxyXG4gKiAgICAgc3Vib3B0aW1hbCBwYXRocywgaW4gb3JkZXIgdG8gc3BlZWQgdXAgdGhlIHNlYXJjaC5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHQudHJhY2tSZWN1cnNpb24gV2hldGhlciB0byB0cmFjayByZWN1cnNpb24gZm9yXHJcbiAqICAgICBzdGF0aXN0aWNhbCBwdXJwb3Nlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdC50aW1lTGltaXQgTWF4aW11bSBleGVjdXRpb24gdGltZS4gVXNlIDw9IDAgZm9yIGluZmluaXRlLlxyXG4gKi9cclxuZnVuY3Rpb24gSURBU3RhckZpbmRlcihvcHQpIHtcclxuICAgIG9wdCA9IG9wdCB8fCB7fTtcclxuICAgIHRoaXMuYWxsb3dEaWFnb25hbCA9IG9wdC5hbGxvd0RpYWdvbmFsO1xyXG4gICAgdGhpcy5kb250Q3Jvc3NDb3JuZXJzID0gb3B0LmRvbnRDcm9zc0Nvcm5lcnM7XHJcbiAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBvcHQuZGlhZ29uYWxNb3ZlbWVudDtcclxuICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMubWFuaGF0dGFuO1xyXG4gICAgdGhpcy53ZWlnaHQgPSBvcHQud2VpZ2h0IHx8IDE7XHJcbiAgICB0aGlzLnRyYWNrUmVjdXJzaW9uID0gb3B0LnRyYWNrUmVjdXJzaW9uIHx8IGZhbHNlO1xyXG4gICAgdGhpcy50aW1lTGltaXQgPSBvcHQudGltZUxpbWl0IHx8IEluZmluaXR5OyAvLyBEZWZhdWx0OiBubyB0aW1lIGxpbWl0LlxyXG5cclxuICAgIGlmICghdGhpcy5kaWFnb25hbE1vdmVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RGlhZ29uYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFnb25hbE1vdmVtZW50ID0gRGlhZ29uYWxNb3ZlbWVudC5OZXZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb250Q3Jvc3NDb3JuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50Lk9ubHlXaGVuTm9PYnN0YWNsZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWdvbmFsTW92ZW1lbnQgPSBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBkaWFnb25hbCBtb3ZlbWVudCBpcyBhbGxvd2VkIHRoZSBtYW5oYXR0YW4gaGV1cmlzdGljIGlzIG5vdFxyXG4gICAgLy8gYWRtaXNzaWJsZSwgaXQgc2hvdWxkIGJlIG9jdGlsZSBpbnN0ZWFkXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGV1cmlzdGljID0gb3B0LmhldXJpc3RpYyB8fCBIZXVyaXN0aWMub2N0aWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhbmQgcmV0dXJuIHRoZSB0aGUgcGF0aC4gV2hlbiBhbiBlbXB0eSBhcnJheSBpcyByZXR1cm5lZCwgZWl0aGVyXHJcbiAqIG5vIHBhdGggaXMgcG9zc2libGUsIG9yIHRoZSBtYXhpbXVtIGV4ZWN1dGlvbiB0aW1lIGlzIHJlYWNoZWQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuSURBU3RhckZpbmRlci5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgLy8gVXNlZCBmb3Igc3RhdGlzdGljczpcclxuICAgIHZhciBub2Rlc1Zpc2l0ZWQgPSAwO1xyXG5cclxuICAgIC8vIEV4ZWN1dGlvbiB0aW1lIGxpbWl0YXRpb246XHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgLy8gSGV1cmlzdGljIGhlbHBlcjpcclxuICAgIHZhciBoID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhldXJpc3RpYyhNYXRoLmFicyhiLnggLSBhLngpLCBNYXRoLmFicyhiLnkgLSBhLnkpKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAvLyBTdGVwIGNvc3QgZnJvbSBhIHRvIGI6XHJcbiAgICB2YXIgY29zdCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gKGEueCA9PT0gYi54IHx8IGEueSA9PT0gYi55KSA/IDEgOiBNYXRoLlNRUlQyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElEQSogc2VhcmNoIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gVGhlIG5vZGUgY3VycmVudGx5IGV4cGFuZGluZyBmcm9tLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IENvc3QgdG8gcmVhY2ggdGhlIGdpdmVuIG5vZGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gTWF4aW11bSBzZWFyY2ggZGVwdGggKGN1dC1vZmYgdmFsdWUpLlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIGZvdW5kIHJvdXRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFJlY3Vyc2lvbiBkZXB0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGVpdGhlciBhIG51bWJlciB3aXRoIHRoZSBuZXcgb3B0aW1hbCBjdXQtb2ZmIGRlcHRoLFxyXG4gICAgICogb3IgYSB2YWxpZCBub2RlIGluc3RhbmNlLCBpbiB3aGljaCBjYXNlIGEgcGF0aCB3YXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbihub2RlLCBnLCBjdXRvZmYsIHJvdXRlLCBkZXB0aCkge1xyXG4gICAgICAgIG5vZGVzVmlzaXRlZCsrO1xyXG5cclxuICAgICAgICAvLyBFbmZvcmNlIHRpbWVsaW1pdDpcclxuICAgICAgICBpZiAodGhpcy50aW1lTGltaXQgPiAwICYmXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID4gdGhpcy50aW1lTGltaXQgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vIEVuZm9yY2VkIGFzIFwicGF0aC1ub3QtZm91bmRcIi5cclxuICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGYgPSBnICsgaChub2RlLCBlbmQpICogdGhpcy53ZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFdlJ3ZlIHNlYXJjaGVkIHRvbyBkZWVwIGZvciB0aGlzIGl0ZXJhdGlvbi5cclxuICAgICAgICBpZiAoZiA+IGN1dG9mZikge1xyXG4gICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlID09IGVuZCkge1xyXG4gICAgICAgICAgICByb3V0ZVtkZXB0aF0gPSBbbm9kZS54LCBub2RlLnldO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW4sIHQsIGssIG5laWdoYm91cjtcclxuXHJcbiAgICAgICAgdmFyIG5laWdoYm91cnMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCB0aGlzLmRpYWdvbmFsTW92ZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZSBuZWlnaGJvdXJzLCBnaXZlcyBuaWNlciBwYXRocy4gQnV0LCB0aGlzIGRldmlhdGVzXHJcbiAgICAgICAgLy8gZnJvbSB0aGUgb3JpZ2luYWwgYWxnb3JpdGhtIC0gc28gSSBsZWZ0IGl0IG91dC5cclxuICAgICAgICAvL25laWdoYm91cnMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAvLyAgICByZXR1cm4gaChhLCBlbmQpIC0gaChiLCBlbmQpO1xyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qanNoaW50IC1XMDg0ICovLy9EaXNhYmxlIHdhcm5pbmc6IEV4cGVjdGVkIGEgY29uZGl0aW9uYWwgZXhwcmVzc2lvbiBhbmQgaW5zdGVhZCBzYXcgYW4gYXNzaWdubWVudFxyXG4gICAgICAgIGZvciAoayA9IDAsIG1pbiA9IEluZmluaXR5OyBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzW2tdOyArK2spIHtcclxuICAgICAgICAvKmpzaGludCArVzA4NCAqLy8vRW5hYmxlIHdhcm5pbmc6IEV4cGVjdGVkIGEgY29uZGl0aW9uYWwgZXhwcmVzc2lvbiBhbmQgaW5zdGVhZCBzYXcgYW4gYXNzaWdubWVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFja1JlY3Vyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0YWluIGEgY29weSBmb3IgdmlzdWFsaXNhdGlvbi4gRHVlIHRvIHJlY3Vyc2lvbiwgdGhpc1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZSBtYXkgYmUgcGFydCBvZiBvdGhlciBwYXRocyB0b28uXHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXIucmV0YWluQ291bnQgPSBuZWlnaGJvdXIucmV0YWluQ291bnQgKyAxIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobmVpZ2hib3VyLnRlc3RlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91ci50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ID0gc2VhcmNoKG5laWdoYm91ciwgZyArIGNvc3Qobm9kZSwgbmVpZ2hib3VyKSwgY3V0b2ZmLCByb3V0ZSwgZGVwdGggKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVbZGVwdGhdID0gW25vZGUueCwgbm9kZS55XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGb3IgYSB0eXBpY2FsIEEqIGxpbmtlZCBsaXN0LCB0aGlzIHdvdWxkIHdvcms6XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEZWNyZW1lbnQgY291bnQsIHRoZW4gZGV0ZXJtaW5lIHdoZXRoZXIgaXQncyBhY3R1YWxseSBjbG9zZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrUmVjdXJzaW9uICYmICgtLW5laWdoYm91ci5yZXRhaW5Db3VudCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91ci50ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHQgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIG1pbiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtaW47XHJcblxyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vIE5vZGUgaW5zdGFuY2UgbG9va3VwczpcclxuICAgIHZhciBzdGFydCA9IGdyaWQuZ2V0Tm9kZUF0KHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgIHZhciBlbmQgICA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpO1xyXG5cclxuICAgIC8vIEluaXRpYWwgc2VhcmNoIGRlcHRoLCBnaXZlbiB0aGUgdHlwaWNhbCBoZXVyaXN0aWMgY29udHJhaW50cyxcclxuICAgIC8vIHRoZXJlIHNob3VsZCBiZSBubyBjaGVhcGVyIHJvdXRlIHBvc3NpYmxlLlxyXG4gICAgdmFyIGN1dE9mZiA9IGgoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgdmFyIGosIHJvdXRlLCB0O1xyXG5cclxuICAgIC8vIFdpdGggYW4gb3ZlcmZsb3cgcHJvdGVjdGlvbi5cclxuICAgIGZvciAoaiA9IDA7IHRydWU7ICsraikge1xyXG5cclxuICAgICAgICByb3V0ZSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTZWFyY2ggdGlsbCBjdXQtb2ZmIGRlcHRoOlxyXG4gICAgICAgIHQgPSBzZWFyY2goc3RhcnQsIDAsIGN1dE9mZiwgcm91dGUsIDApO1xyXG5cclxuICAgICAgICAvLyBSb3V0ZSBub3QgcG9zc2libGUsIG9yIG5vdCBmb3VuZCBpbiB0aW1lIGxpbWl0LlxyXG4gICAgICAgIGlmICh0ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0IGlzIGEgbm9kZSwgaXQncyBhbHNvIHRoZSBlbmQgbm9kZS4gUm91dGUgaXMgbm93XHJcbiAgICAgICAgLy8gcG9wdWxhdGVkIHdpdGggYSB2YWxpZCBwYXRoIHRvIHRoZSBlbmQgbm9kZS5cclxuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJ5IGFnYWluLCB0aGlzIHRpbWUgd2l0aCBhIGRlZXBlciBjdXQtb2ZmLiBUaGUgdCBzY29yZVxyXG4gICAgICAgIC8vIGlzIHRoZSBjbG9zZXN0IHdlIGdvdCB0byB0aGUgZW5kIG5vZGUuXHJcbiAgICAgICAgY3V0T2ZmID0gdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIF9zaG91bGRfIG5ldmVyIHRvIGJlIHJlYWNoZWQuXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IElEQVN0YXJGaW5kZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIHdoaWNoIGFsd2F5cyBtb3Zlc1xyXG4gKiBkaWFnb25hbGx5IGlycmVzcGVjdGl2ZSBvZiB0aGUgbnVtYmVyIG9mIG9ic3RhY2xlcy5cclxuICovXHJcbmZ1bmN0aW9uIEpQRkFsd2F5c01vdmVEaWFnb25hbGx5KG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZSA9IG5ldyBKdW1wUG9pbnRGaW5kZXJCYXNlKCk7XHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRkFsd2F5c01vdmVEaWFnb25hbGx5O1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRkFsd2F5c01vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fanVtcCA9IGZ1bmN0aW9uKHgsIHksIHB4LCBweSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgZHggPSB4IC0gcHgsIGR5ID0geSAtIHB5O1xyXG5cclxuICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGdyaWQuZ2V0Tm9kZUF0KHgsIHkpLnRlc3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyaWQuZ2V0Tm9kZUF0KHgsIHkpID09PSB0aGlzLmVuZE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBmb3JjZWQgbmVpZ2hib3JzXHJcbiAgICAvLyBhbG9uZyB0aGUgZGlhZ29uYWxcclxuICAgIGlmIChkeCAhPT0gMCAmJiBkeSAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5IC0gZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIG1vdmluZyBkaWFnb25hbGx5LCBtdXN0IGNoZWNrIGZvciB2ZXJ0aWNhbC9ob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuX2p1bXAoeCArIGR4LCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHgsIHkgKyBkeSwgeCwgeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYoIGR4ICE9PSAwICkgeyAvLyBtb3ZpbmcgYWxvbmcgeFxyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5ICsgMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZigoZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkgfHxcclxuICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZBbHdheXNNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuX2ZpbmROZWlnaGJvcnMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIHB4LCBweSwgbngsIG55LCBkeCwgZHksXHJcbiAgICAgICAgbmVpZ2hib3JzID0gW10sIG5laWdoYm9yTm9kZXMsIG5laWdoYm9yTm9kZSwgaSwgbDtcclxuXHJcbiAgICAvLyBkaXJlY3RlZCBwcnVuaW5nOiBjYW4gaWdub3JlIG1vc3QgbmVpZ2hib3JzLCB1bmxlc3MgZm9yY2VkLlxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHB4ID0gcGFyZW50Lng7XHJcbiAgICAgICAgcHkgPSBwYXJlbnQueTtcclxuICAgICAgICAvLyBnZXQgdGhlIG5vcm1hbGl6ZWQgZGlyZWN0aW9uIG9mIHRyYXZlbFxyXG4gICAgICAgIGR4ID0gKHggLSBweCkgLyBNYXRoLm1heChNYXRoLmFicyh4IC0gcHgpLCAxKTtcclxuICAgICAgICBkeSA9ICh5IC0gcHkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHB5KSwgMSk7XHJcblxyXG4gICAgICAgIC8vIHNlYXJjaCBkaWFnb25hbGx5XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4IC0gZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VhcmNoIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50LkFsd2F5cyk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGQWx3YXlzTW92ZURpYWdvbmFsbHk7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIHdoaWNoIG1vdmVzXHJcbiAqIGRpYWdvbmFsbHkgb25seSB3aGVuIHRoZXJlIGlzIGF0IG1vc3Qgb25lIG9ic3RhY2xlLlxyXG4gKi9cclxuZnVuY3Rpb24gSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlKG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUgPSBuZXcgSnVtcFBvaW50RmluZGVyQmFzZSgpO1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmQXRNb3N0T25lT2JzdGFjbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlO1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZS5wcm90b3R5cGUuX2p1bXAgPSBmdW5jdGlvbih4LCB5LCBweCwgcHkpIHtcclxuICAgIHZhciBncmlkID0gdGhpcy5ncmlkLFxyXG4gICAgICAgIGR4ID0geCAtIHB4LCBkeSA9IHkgLSBweTtcclxuXHJcbiAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy50cmFja0p1bXBSZWN1cnNpb24gPT09IHRydWUpIHtcclxuICAgICAgICBncmlkLmdldE5vZGVBdCh4LCB5KS50ZXN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmlkLmdldE5vZGVBdCh4LCB5KSA9PT0gdGhpcy5lbmROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBmb3IgZm9yY2VkIG5laWdoYm9yc1xyXG4gICAgLy8gYWxvbmcgdGhlIGRpYWdvbmFsXHJcbiAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICBpZiAoKGdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSAtIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIGR5KSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBjaGVjayBmb3IgdmVydGljYWwvaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyBkeCwgeSwgeCwgeSkgfHwgdGhpcy5fanVtcCh4LCB5ICsgZHksIHgsIHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaG9yaXpvbnRhbGx5L3ZlcnRpY2FsbHlcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKCBkeCAhPT0gMCApIHsgLy8gbW92aW5nIGFsb25nIHhcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5ICsgZHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkpIHx8XHJcbiAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSArIGR5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBtYWtlIHN1cmUgb25lIG9mIHRoZSB2ZXJ0aWNhbC9ob3Jpem9udGFsXHJcbiAgICAvLyBuZWlnaGJvcnMgaXMgb3BlbiB0byBhbGxvdyB0aGUgcGF0aFxyXG4gICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkgfHwgZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlLnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoIGRpYWdvbmFsbHlcclxuICAgICAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpIHx8IGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5KSAmJiBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIGR4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIGR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VhcmNoIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFsbCBuZWlnaGJvcnNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yTm9kZXMgPSBncmlkLmdldE5laWdoYm9ycyhub2RlLCBEaWFnb25hbE1vdmVtZW50LklmQXRNb3N0T25lT2JzdGFjbGUpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBuZWlnaGJvck5vZGVzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuZWlnaGJvck5vZGUgPSBuZWlnaGJvck5vZGVzW2ldO1xyXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbbmVpZ2hib3JOb2RlLngsIG5laWdoYm9yTm9kZS55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgaW1vciAvIGh0dHBzOi8vZ2l0aHViLmNvbS9pbW9yXHJcbiAqL1xyXG52YXIgSnVtcFBvaW50RmluZGVyQmFzZSA9IHJlcXVpcmUoJy4vSnVtcFBvaW50RmluZGVyQmFzZScpO1xyXG52YXIgRGlhZ29uYWxNb3ZlbWVudCA9IHJlcXVpcmUoJy4uL2NvcmUvRGlhZ29uYWxNb3ZlbWVudCcpO1xyXG5cclxuLyoqXHJcbiAqIFBhdGggZmluZGVyIHVzaW5nIHRoZSBKdW1wIFBvaW50IFNlYXJjaCBhbGdvcml0aG0gd2hpY2ggbW92ZXNcclxuICogZGlhZ29uYWxseSBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIG9ic3RhY2xlcy5cclxuICovXHJcbmZ1bmN0aW9uIEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcyhvcHQpIHtcclxuICAgIEp1bXBQb2ludEZpbmRlckJhc2UuY2FsbCh0aGlzLCBvcHQpO1xyXG59XHJcblxyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpQRk1vdmVEaWFnb25hbGx5SWZOb09ic3RhY2xlcztcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggcmVjdXJzaXZlbHkgaW4gdGhlIGRpcmVjdGlvbiAocGFyZW50IC0+IGNoaWxkKSwgc3RvcHBpbmcgb25seSB3aGVuIGFcclxuICoganVtcCBwb2ludCBpcyBmb3VuZC5cclxuICogQHByb3RlY3RlZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gVGhlIHgsIHkgY29vcmRpbmF0ZSBvZiB0aGUganVtcCBwb2ludFxyXG4gKiAgICAgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIGZvcmNlZCBuZWlnaGJvcnNcclxuICAgIC8vIGFsb25nIHRoZSBkaWFnb25hbFxyXG4gICAgaWYgKGR4ICE9PSAwICYmIGR5ICE9PSAwKSB7XHJcbiAgICAgICAgLy8gaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSkpIHx8XHJcbiAgICAgICAgICAgIC8vIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkgLSBkeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHdoZW4gbW92aW5nIGRpYWdvbmFsbHksIG11c3QgY2hlY2sgZm9yIHZlcnRpY2FsL2hvcml6b250YWwganVtcCBwb2ludHNcclxuICAgICAgICBpZiAodGhpcy5fanVtcCh4ICsgZHgsIHksIHgsIHkpIHx8IHRoaXMuX2p1bXAoeCwgeSArIGR5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGhvcml6b250YWxseS92ZXJ0aWNhbGx5XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoZHggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSAtIDEpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyAxKSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCAtIGR4LCB5ICsgMSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIGR5KSkgfHxcclxuICAgICAgICAgICAgICAgIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgMSwgeSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5IC0gZHkpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXaGVuIG1vdmluZyB2ZXJ0aWNhbGx5LCBtdXN0IGNoZWNrIGZvciBob3Jpem9udGFsIGp1bXAgcG9pbnRzXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9qdW1wKHggKyAxLCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHggLSAxLCB5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmcgZGlhZ29uYWxseSwgbXVzdCBtYWtlIHN1cmUgb25lIG9mIHRoZSB2ZXJ0aWNhbC9ob3Jpem9udGFsXHJcbiAgICAvLyBuZWlnaGJvcnMgaXMgb3BlbiB0byBhbGxvdyB0aGUgcGF0aFxyXG4gICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkgJiYgZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIGR5KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgbmVpZ2hib3JzIGZvciB0aGUgZ2l2ZW4gbm9kZS4gSWYgdGhlIG5vZGUgaGFzIGEgcGFyZW50LFxyXG4gKiBwcnVuZSB0aGUgbmVpZ2hib3JzIGJhc2VkIG9uIHRoZSBqdW1wIHBvaW50IHNlYXJjaCBhbGdvcml0aG0sIG90aGVyd2lzZVxyXG4gKiByZXR1cm4gYWxsIGF2YWlsYWJsZSBuZWlnaGJvcnMuXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgbmVpZ2hib3JzIGZvdW5kLlxyXG4gKi9cclxuSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzLnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoIGRpYWdvbmFsbHlcclxuICAgICAgICBpZiAoZHggIT09IDAgJiYgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZC5pc1dhbGthYmxlQXQoeCArIGR4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpICYmIGdyaWQuaXNXYWxrYWJsZUF0KHggKyBkeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlYXJjaCBob3Jpem9udGFsbHkvdmVydGljYWxseVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaXNOZXh0V2Fsa2FibGU7XHJcbiAgICAgICAgICAgIGlmIChkeCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzVG9wV2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNCb3R0b21XYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOZXh0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVG9wV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQm90dG9tV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyBkeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3BXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQm90dG9tV2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0V2Fsa2FibGUgPSBncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgZHkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUmlnaHRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0xlZnRXYWxrYWJsZSA9IGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOZXh0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCwgeSArIGR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmlnaHRXYWxrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIDEsIHkgKyBkeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5ICsgZHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodFdhbGthYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0V2Fsa2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCAtIDEsIHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5Pbmx5V2hlbk5vT2JzdGFjbGVzKTtcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gbmVpZ2hib3JOb2Rlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgbmVpZ2hib3JOb2RlID0gbmVpZ2hib3JOb2Rlc1tpXTtcclxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yTm9kZS54LCBuZWlnaGJvck5vZGUueV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXM7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGltb3IgLyBodHRwczovL2dpdGh1Yi5jb20vaW1vclxyXG4gKi9cclxudmFyIEp1bXBQb2ludEZpbmRlckJhc2UgPSByZXF1aXJlKCcuL0p1bXBQb2ludEZpbmRlckJhc2UnKTtcclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBQYXRoIGZpbmRlciB1c2luZyB0aGUgSnVtcCBQb2ludCBTZWFyY2ggYWxnb3JpdGhtIGFsbG93aW5nIG9ubHkgaG9yaXpvbnRhbFxyXG4gKiBvciB2ZXJ0aWNhbCBtb3ZlbWVudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBKUEZOZXZlck1vdmVEaWFnb25hbGx5KG9wdCkge1xyXG4gICAgSnVtcFBvaW50RmluZGVyQmFzZS5jYWxsKHRoaXMsIG9wdCk7XHJcbn1cclxuXHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlID0gbmV3IEp1bXBQb2ludEZpbmRlckJhc2UoKTtcclxuSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUEZOZXZlck1vdmVEaWFnb25hbGx5O1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCByZWN1cnNpdmVseSBpbiB0aGUgZGlyZWN0aW9uIChwYXJlbnQgLT4gY2hpbGQpLCBzdG9wcGluZyBvbmx5IHdoZW4gYVxyXG4gKiBqdW1wIHBvaW50IGlzIGZvdW5kLlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgeCwgeSBjb29yZGluYXRlIG9mIHRoZSBqdW1wIHBvaW50XHJcbiAqICAgICBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbkpQRk5ldmVyTW92ZURpYWdvbmFsbHkucHJvdG90eXBlLl9qdW1wID0gZnVuY3Rpb24oeCwgeSwgcHgsIHB5KSB7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZCxcclxuICAgICAgICBkeCA9IHggLSBweCwgZHkgPSB5IC0gcHk7XHJcblxyXG4gICAgaWYgKCFncmlkLmlzV2Fsa2FibGVBdCh4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudHJhY2tKdW1wUmVjdXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ3JpZC5nZXROb2RlQXQoeCwgeSkudGVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JpZC5nZXROb2RlQXQoeCwgeSkgPT09IHRoaXMuZW5kTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkgJiYgIWdyaWQuaXNXYWxrYWJsZUF0KHggLSBkeCwgeSAtIDEpKSB8fFxyXG4gICAgICAgICAgICAoZ3JpZC5pc1dhbGthYmxlQXQoeCwgeSArIDEpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gZHgsIHkgKyAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkeSAhPT0gMCkge1xyXG4gICAgICAgIGlmICgoZ3JpZC5pc1dhbGthYmxlQXQoeCAtIDEsIHkpICYmICFncmlkLmlzV2Fsa2FibGVBdCh4IC0gMSwgeSAtIGR5KSkgfHxcclxuICAgICAgICAgICAgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSAmJiAhZ3JpZC5pc1dhbGthYmxlQXQoeCArIDEsIHkgLSBkeSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vV2hlbiBtb3ZpbmcgdmVydGljYWxseSwgbXVzdCBjaGVjayBmb3IgaG9yaXpvbnRhbCBqdW1wIHBvaW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9qdW1wKHggKyAxLCB5LCB4LCB5KSB8fCB0aGlzLl9qdW1wKHggLSAxLCB5LCB4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgbW92ZW1lbnRzIGFyZSBhbGxvd2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9qdW1wKHggKyBkeCwgeSArIGR5LCB4LCB5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBuZWlnaGJvcnMgZm9yIHRoZSBnaXZlbiBub2RlLiBJZiB0aGUgbm9kZSBoYXMgYSBwYXJlbnQsXHJcbiAqIHBydW5lIHRoZSBuZWlnaGJvcnMgYmFzZWQgb24gdGhlIGp1bXAgcG9pbnQgc2VhcmNoIGFsZ29yaXRobSwgb3RoZXJ3aXNlXHJcbiAqIHJldHVybiBhbGwgYXZhaWxhYmxlIG5laWdoYm9ycy5cclxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IFRoZSBuZWlnaGJvcnMgZm91bmQuXHJcbiAqL1xyXG5KUEZOZXZlck1vdmVEaWFnb25hbGx5LnByb3RvdHlwZS5fZmluZE5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudCxcclxuICAgICAgICB4ID0gbm9kZS54LCB5ID0gbm9kZS55LFxyXG4gICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgcHgsIHB5LCBueCwgbnksIGR4LCBkeSxcclxuICAgICAgICBuZWlnaGJvcnMgPSBbXSwgbmVpZ2hib3JOb2RlcywgbmVpZ2hib3JOb2RlLCBpLCBsO1xyXG5cclxuICAgIC8vIGRpcmVjdGVkIHBydW5pbmc6IGNhbiBpZ25vcmUgbW9zdCBuZWlnaGJvcnMsIHVubGVzcyBmb3JjZWQuXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcHggPSBwYXJlbnQueDtcclxuICAgICAgICBweSA9IHBhcmVudC55O1xyXG4gICAgICAgIC8vIGdldCB0aGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gb2YgdHJhdmVsXHJcbiAgICAgICAgZHggPSAoeCAtIHB4KSAvIE1hdGgubWF4KE1hdGguYWJzKHggLSBweCksIDEpO1xyXG4gICAgICAgIGR5ID0gKHkgLSBweSkgLyBNYXRoLm1heChNYXRoLmFicyh5IC0gcHkpLCAxKTtcclxuXHJcbiAgICAgICAgaWYgKGR4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5IC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5IC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4LCB5ICsgMSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkLmlzV2Fsa2FibGVBdCh4ICsgZHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbeCArIGR4LCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZHkgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggLSAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggLSAxLCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHggKyAxLCB5KSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW3ggKyAxLCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdyaWQuaXNXYWxrYWJsZUF0KHgsIHkgKyBkeSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFt4LCB5ICsgZHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbGwgbmVpZ2hib3JzXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZWlnaGJvck5vZGVzID0gZ3JpZC5nZXROZWlnaGJvcnMobm9kZSwgRGlhZ29uYWxNb3ZlbWVudC5OZXZlcik7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IG5laWdoYm9yTm9kZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5laWdoYm9yTm9kZSA9IG5laWdoYm9yTm9kZXNbaV07XHJcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtuZWlnaGJvck5vZGUueCwgbmVpZ2hib3JOb2RlLnldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlBGTmV2ZXJNb3ZlRGlhZ29uYWxseTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYW5pZXJvIC8gaHR0cHM6Ly9naXRodWIuY29tL2FuaWVyb1xyXG4gKi9cclxudmFyIERpYWdvbmFsTW92ZW1lbnQgPSByZXF1aXJlKCcuLi9jb3JlL0RpYWdvbmFsTW92ZW1lbnQnKTtcclxudmFyIEpQRk5ldmVyTW92ZURpYWdvbmFsbHkgPSByZXF1aXJlKCcuL0pQRk5ldmVyTW92ZURpYWdvbmFsbHknKTtcclxudmFyIEpQRkFsd2F5c01vdmVEaWFnb25hbGx5ID0gcmVxdWlyZSgnLi9KUEZBbHdheXNNb3ZlRGlhZ29uYWxseScpO1xyXG52YXIgSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzID0gcmVxdWlyZSgnLi9KUEZNb3ZlRGlhZ29uYWxseUlmTm9PYnN0YWNsZXMnKTtcclxudmFyIEpQRk1vdmVEaWFnb25hbGx5SWZBdE1vc3RPbmVPYnN0YWNsZSA9IHJlcXVpcmUoJy4vSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlJyk7XHJcblxyXG4vKipcclxuICogUGF0aCBmaW5kZXIgdXNpbmcgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqIEBwYXJhbSB7RGlhZ29uYWxNb3ZlbWVudH0gb3B0LmRpYWdvbmFsTW92ZW1lbnQgQ29uZGl0aW9uIHVuZGVyIHdoaWNoIGRpYWdvbmFsXHJcbiAqICAgICAgbW92ZW1lbnQgd2lsbCBiZSBhbGxvd2VkLlxyXG4gKi9cclxuZnVuY3Rpb24gSnVtcFBvaW50RmluZGVyKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgaWYgKG9wdC5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50Lk5ldmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKUEZOZXZlck1vdmVEaWFnb25hbGx5KG9wdCk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdC5kaWFnb25hbE1vdmVtZW50ID09PSBEaWFnb25hbE1vdmVtZW50LkFsd2F5cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGQWx3YXlzTW92ZURpYWdvbmFsbHkob3B0KTtcclxuICAgIH0gZWxzZSBpZiAob3B0LmRpYWdvbmFsTW92ZW1lbnQgPT09IERpYWdvbmFsTW92ZW1lbnQuT25seVdoZW5Ob09ic3RhY2xlcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGTW92ZURpYWdvbmFsbHlJZk5vT2JzdGFjbGVzKG9wdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgSlBGTW92ZURpYWdvbmFsbHlJZkF0TW9zdE9uZU9ic3RhY2xlKG9wdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSnVtcFBvaW50RmluZGVyO1xyXG4iLCIvKipcclxuICogQGF1dGhvciBpbW9yIC8gaHR0cHM6Ly9naXRodWIuY29tL2ltb3JcclxuICovXHJcbnZhciBIZWFwICAgICAgID0gcmVxdWlyZSgnaGVhcCcpO1xyXG52YXIgVXRpbCAgICAgICA9IHJlcXVpcmUoJy4uL2NvcmUvVXRpbCcpO1xyXG52YXIgSGV1cmlzdGljICA9IHJlcXVpcmUoJy4uL2NvcmUvSGV1cmlzdGljJyk7XHJcbnZhciBEaWFnb25hbE1vdmVtZW50ID0gcmVxdWlyZSgnLi4vY29yZS9EaWFnb25hbE1vdmVtZW50Jyk7XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgdGhlIEp1bXAgUG9pbnQgU2VhcmNoIGFsZ29yaXRobVxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdC5oZXVyaXN0aWMgSGV1cmlzdGljIGZ1bmN0aW9uIHRvIGVzdGltYXRlIHRoZSBkaXN0YW5jZVxyXG4gKiAgICAgKGRlZmF1bHRzIHRvIG1hbmhhdHRhbikuXHJcbiAqL1xyXG5mdW5jdGlvbiBKdW1wUG9pbnRGaW5kZXJCYXNlKG9wdCkge1xyXG4gICAgb3B0ID0gb3B0IHx8IHt9O1xyXG4gICAgdGhpcy5oZXVyaXN0aWMgPSBvcHQuaGV1cmlzdGljIHx8IEhldXJpc3RpYy5tYW5oYXR0YW47XHJcbiAgICB0aGlzLnRyYWNrSnVtcFJlY3Vyc2lvbiA9IG9wdC50cmFja0p1bXBSZWN1cnNpb24gfHwgZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGFuZCByZXR1cm4gdGhlIHBhdGguXHJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBUaGUgcGF0aCwgaW5jbHVkaW5nIGJvdGggc3RhcnQgYW5kXHJcbiAqICAgICBlbmQgcG9zaXRpb25zLlxyXG4gKi9cclxuSnVtcFBvaW50RmluZGVyQmFzZS5wcm90b3R5cGUuZmluZFBhdGggPSBmdW5jdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZ3JpZCkge1xyXG4gICAgdmFyIG9wZW5MaXN0ID0gdGhpcy5vcGVuTGlzdCA9IG5ldyBIZWFwKGZ1bmN0aW9uKG5vZGVBLCBub2RlQikge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUEuZiAtIG5vZGVCLmY7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUgPSBncmlkLmdldE5vZGVBdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgZW5kTm9kZSA9IHRoaXMuZW5kTm9kZSA9IGdyaWQuZ2V0Tm9kZUF0KGVuZFgsIGVuZFkpLCBub2RlO1xyXG5cclxuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XHJcblxyXG5cclxuICAgIC8vIHNldCB0aGUgYGdgIGFuZCBgZmAgdmFsdWUgb2YgdGhlIHN0YXJ0IG5vZGUgdG8gYmUgMFxyXG4gICAgc3RhcnROb2RlLmcgPSAwO1xyXG4gICAgc3RhcnROb2RlLmYgPSAwO1xyXG5cclxuICAgIC8vIHB1c2ggdGhlIHN0YXJ0IG5vZGUgaW50byB0aGUgb3BlbiBsaXN0XHJcbiAgICBvcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcbiAgICBzdGFydE5vZGUub3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyB3aGlsZSB0aGUgb3BlbiBsaXN0IGlzIG5vdCBlbXB0eVxyXG4gICAgd2hpbGUgKCFvcGVuTGlzdC5lbXB0eSgpKSB7XHJcbiAgICAgICAgLy8gcG9wIHRoZSBwb3NpdGlvbiBvZiBub2RlIHdoaWNoIGhhcyB0aGUgbWluaW11bSBgZmAgdmFsdWUuXHJcbiAgICAgICAgbm9kZSA9IG9wZW5MaXN0LnBvcCgpO1xyXG4gICAgICAgIG5vZGUuY2xvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXhwYW5kUGF0aChVdGlsLmJhY2t0cmFjZShlbmROb2RlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pZGVudGlmeVN1Y2Nlc3NvcnMobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFpbCB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxyXG4vKipcclxuICogSWRlbnRpZnkgc3VjY2Vzc29ycyBmb3IgdGhlIGdpdmVuIG5vZGUuIFJ1bnMgYSBqdW1wIHBvaW50IHNlYXJjaCBpbiB0aGVcclxuICogZGlyZWN0aW9uIG9mIGVhY2ggYXZhaWxhYmxlIG5laWdoYm9yLCBhZGRpbmcgYW55IHBvaW50cyBmb3VuZCB0byB0aGUgb3BlblxyXG4gKiBsaXN0LlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqL1xyXG5KdW1wUG9pbnRGaW5kZXJCYXNlLnByb3RvdHlwZS5faWRlbnRpZnlTdWNjZXNzb3JzID0gZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQsXHJcbiAgICAgICAgaGV1cmlzdGljID0gdGhpcy5oZXVyaXN0aWMsXHJcbiAgICAgICAgb3Blbkxpc3QgPSB0aGlzLm9wZW5MaXN0LFxyXG4gICAgICAgIGVuZFggPSB0aGlzLmVuZE5vZGUueCxcclxuICAgICAgICBlbmRZID0gdGhpcy5lbmROb2RlLnksXHJcbiAgICAgICAgbmVpZ2hib3JzLCBuZWlnaGJvcixcclxuICAgICAgICBqdW1wUG9pbnQsIGksIGwsXHJcbiAgICAgICAgeCA9IG5vZGUueCwgeSA9IG5vZGUueSxcclxuICAgICAgICBqeCwganksIGR4LCBkeSwgZCwgbmcsIGp1bXBOb2RlLFxyXG4gICAgICAgIGFicyA9IE1hdGguYWJzLCBtYXggPSBNYXRoLm1heDtcclxuXHJcbiAgICBuZWlnaGJvcnMgPSB0aGlzLl9maW5kTmVpZ2hib3JzKG5vZGUpO1xyXG4gICAgZm9yKGkgPSAwLCBsID0gbmVpZ2hib3JzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG4gICAgICAgIGp1bXBQb2ludCA9IHRoaXMuX2p1bXAobmVpZ2hib3JbMF0sIG5laWdoYm9yWzFdLCB4LCB5KTtcclxuICAgICAgICBpZiAoanVtcFBvaW50KSB7XHJcblxyXG4gICAgICAgICAgICBqeCA9IGp1bXBQb2ludFswXTtcclxuICAgICAgICAgICAgankgPSBqdW1wUG9pbnRbMV07XHJcbiAgICAgICAgICAgIGp1bXBOb2RlID0gZ3JpZC5nZXROb2RlQXQoangsIGp5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChqdW1wTm9kZS5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpbmNsdWRlIGRpc3RhbmNlLCBhcyBwYXJlbnQgbWF5IG5vdCBiZSBpbW1lZGlhdGVseSBhZGphY2VudDpcclxuICAgICAgICAgICAgZCA9IEhldXJpc3RpYy5vY3RpbGUoYWJzKGp4IC0geCksIGFicyhqeSAtIHkpKTtcclxuICAgICAgICAgICAgbmcgPSBub2RlLmcgKyBkOyAvLyBuZXh0IGBnYCB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCFqdW1wTm9kZS5vcGVuZWQgfHwgbmcgPCBqdW1wTm9kZS5nKSB7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5nID0gbmc7XHJcbiAgICAgICAgICAgICAgICBqdW1wTm9kZS5oID0ganVtcE5vZGUuaCB8fCBoZXVyaXN0aWMoYWJzKGp4IC0gZW5kWCksIGFicyhqeSAtIGVuZFkpKTtcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLmYgPSBqdW1wTm9kZS5nICsganVtcE5vZGUuaDtcclxuICAgICAgICAgICAgICAgIGp1bXBOb2RlLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFqdW1wTm9kZS5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC5wdXNoKGp1bXBOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBqdW1wTm9kZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTGlzdC51cGRhdGVJdGVtKGp1bXBOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSnVtcFBvaW50RmluZGVyQmFzZTtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcbmltcG9ydCBQRiBmcm9tICdwYXRoZmluZGluZyc7XG5pbXBvcnQge0NvbWJhdE1hbmFnZXJ9IGZyb20gJy4vQ29tYmF0TWFuYWdlci5qc3gnXG5pbXBvcnQgd29ya2VyIGZyb20gJy4vUGF0aGZpbmRXb3JrZXIuanN4JztcbmltcG9ydCBXZWJXb3JrZXIgZnJvbSAnLi9XZWJXb3JrZXIuanN4JztcblxuZXhwb3J0IGNsYXNzIEFyZWEgZXh0ZW5kcyBFbmdpbmUge1xuICBcbiAgY29uc3RydWN0b3IoaWQsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY29tYmF0ID0gbnVsbDtcbiAgICB0aGlzLmxvYWRlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnNvbGUubG9nKCdpbml0IGFyZWEgd2l0aCBpZCcsIHRoaXMuaWQpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIFxuICAgIHRoaXMud2Fsa1BvaW50cyA9IFtdO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjAsIHk6NjczfSk7XG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MzI5LCB5OjY3M30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjQ0MCwgeTozNzN9KTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDo1MDgsIHk6MzczfSk7XG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6NjU4LCB5OjY3M30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjEwMjMsIHk6NjczfSk7XG4gICAgdGhpcy53YWxrUG9pbnRzLnB1c2goe3g6MTAyMywgeTo3Njd9KTtcbiAgICB0aGlzLndhbGtQb2ludHMucHVzaCh7eDowLCB5Ojc2N30pO1xuICAgIHRoaXMud2Fsa1BvaW50cy5wdXNoKHt4OjAsIHk6NjczfSk7XG4gICAgXG4gICAgdGhpcy5hY3RvcnMgPSBbXTtcbiAgICB0aGlzLmRlY29yID0gW107XG4gICAgXG4gICAgLy8zOThweCAvIDMwIGZlZXQgPSAxMy4zXG4gICAgdGhpcy5oZWlnaHQgPSA3Njg7XG4gICAgdGhpcy53aWR0aCA9IDEwMjQ7XG4gICAgdGhpcy52YW5pc2hpbmdQb2ludCA9IDIwMjtcbiAgICBcbiAgICB0aGlzLndhbGtQYXRoO1xuICAgIFxuICAgIHRoaXMuY29tYmF0T24gPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmdyaWQgPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0dXBQYXRoV29ya2VyKCk7XG4gIH1cbiAgXG4gIGdldFBsYXllcigpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYWN0b3JzW2ldLnR5cGUgPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1BMQVlFUikge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RvcnNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBzZXR1cFBhdGhXb3JrZXIoKSB7XG4gICAgdGhpcy5QYXRoV29ya2VyID0gbmV3IFdlYldvcmtlcih3b3JrZXIpO1xuICAgIHRoaXMuUGF0aFdvcmtlci5wb3N0TWVzc2FnZSh7Y29tbWFuZDonZ2VuZXJhdGVXYWxrUGF0aCcsIHBhdGg6dGhpcy53YWxrUG9pbnRzfSk7XG4gICAgdGhpcy5QYXRoV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZ290ICcsIGV2ZW50LmRhdGEuY29tbWFuZCwgJ2JhY2sgZnJvbSB3b3JrZXInKTtcbiAgICAgIHN3aXRjaChldmVudC5kYXRhLmNvbW1hbmQpIHtcbiAgICAgICAgY2FzZSAnY2xpY2tlZEdyb3VuZCc6XG4gICAgICAgIGNhc2UgJ3dhbGtUb09iamVjdCc6XG4gICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5jbGlja2VkR3JvdW5kUGF0aFJlc3VsdHMoZXZlbnQuZGF0YS5wYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tYmF0TW91c2VNb3ZlJzpcbiAgICAgICAgICB0aGlzLmNvbWJhdC5jb21iYXRNb3VzZU1vdmVSZXN1bHRzKGV2ZW50LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbGF5ZXJDaGVja1JhbmdlJzpcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5wYXRoKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhLnBhdGggPSBldmVudC5kYXRhLnBhdGguc3BsaWNlKDAsIGV2ZW50LmRhdGEucGF0aC5sZW5ndGgtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC5kYXRhLnBhdGggJiYgTWF0aC5jZWlsKGV2ZW50LmRhdGEucGF0aC5sZW5ndGgvNCkgPiB0aGlzLmdldFBsYXllcigpLmVxdWlwcGVkLnJhbmdlKSB7XG4gICAgICAgICAgICBwcmludChcIllvdSdyZSBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY29tYmF0T24pIHtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDb21iYXQoJ3BsYXllcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbWJhdC5oYW5kbGVQbGF5ZXJBdHRhY2soc2VsZi5jb21iYXQuZ2V0TlBDQnlJRChldmVudC5kYXRhLm5wYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICByZW5kZXJCYWNrZ3JvdW5kKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9hcmVhcy9hcmVhMDEucG5nJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmluZyB0bycsIHRoaXMpO1xuICAgICAgdGhpcy5kcmF3V2Fsa3BhdGgoKTtcbiAgICAgIHRoaXMuY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBmaW5kUGF0aChvYmopIHtcbiAgICBvYmoud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIG9iai5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBvYmouZ3JpZHdpZHRoID0gR2xvYmFscy5HUklEX1NRVUFSRV9XSURUSDtcbiAgICBvYmouZ3JpZGhlaWdodCA9IEdsb2JhbHMuR1JJRF9TUVVBUkVfSEVJR0hUO1xuICAgIG9iai5wYXRoID0gdGhpcy53YWxrUG9pbnRzO1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgdGhpcy5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKG9iaik7XG4gIH1cbiAgXG4gIGRyYXdXYWxrcGF0aCgpIHtcbiAgICB0aGlzLndhbGtQYXRoID0gdGhpcy5jYW52YXMuY29udGV4dFRvcDtcbiAgICB0aGlzLndhbGtQYXRoLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMud2Fsa1BhdGgubW92ZVRvKHRoaXMud2Fsa1BvaW50c1swXS54LCB0aGlzLndhbGtQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaT0xOyBpIDwgdGhpcy53YWxrUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndhbGtQYXRoLmxpbmVUbyh0aGlzLndhbGtQb2ludHNbaV0ueCwgdGhpcy53YWxrUG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICB0aGlzLndhbGtQYXRoLmNsb3NlUGF0aCgpO1xuICAgIHRoaXMud2Fsa1BhdGguZmlsbFN0eWxlID0gXCIjN2ZmZmQ0XCI7XG4gICAgdGhpcy53YWxrUGF0aC5nbG9iYWxBbHBoYSA9IDA7XG4gICAgdGhpcy53YWxrUGF0aC5maWxsKCk7XG4gICAgdGhpcy53YWxrUGF0aC5zYXZlKCk7XG4gICAgdGhpcy53YWxrUGF0aC5jYW52YXMub25jbGljayA9IChldmVudCA9PiB7XG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKTtcbiAgICAgIGlmIChwbGF5ZXIudGFyZ2V0QWNxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3BsJywgcGxheWVyKTtcbiAgICAgIHBsYXllci5jYW5jZWxBbmltYXRpb25zKCk7XG4gICAgICBsZXQgYm91bmRzID0gdGhpcy53YWxrUGF0aC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgc3RhcnQgPSB7fTtcbiAgICAgIHN0YXJ0LnggPSBwbGF5ZXIuZ2V0WCgpO1xuICAgICAgc3RhcnQueSA9IHBsYXllci5nZXRZKCk7XG4gICAgICBsZXQgZW5kID0ge307XG4gICAgICBlbmQueCA9IE1hdGgucm91bmQoZXZlbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0KTtcbiAgICAgIGVuZC55ID0gTWF0aC5yb3VuZChldmVudC5jbGllbnRZIC0gYm91bmRzLnRvcCk7XG4gICAgICBpZiAodGhpcy53YWxrUGF0aC5pc1BvaW50SW5QYXRoKGVuZC54LCBlbmQueSkpIHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBvYmouY29tbWFuZCA9ICdjbGlja2VkR3JvdW5kJztcbiAgICAgICAgb2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIG9iai5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuZmluZFBhdGgob2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxvYWRlckltZy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX0FSRUFfUkVBRFkpKTtcbiAgfVxuICBcbiAgZW5kQ29tYmF0VHVybigpIHtcbiAgICBpZiAodGhpcy5jb21iYXQpIHtcbiAgICAgIHRoaXMuY29tYmF0LmVuZFBsYXllclR1cm4oKTtcbiAgICB9XG4gIH1cbiAgXG4gIGVudGVyQ29tYmF0KGluaXRpYXRlZCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBjb21iYXQnLCB0aGlzLnBsYXllcik7XG4gICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICB0aGlzLmNvbWJhdE9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29tYmF0ID0gbmV3IENvbWJhdE1hbmFnZXIodGhpcy5wbGF5ZXIsIHRoaXMsIGluaXRpYXRlZCk7XG4gICAgfVxuICB9XG4gIFxuICBleGl0Q29tYmF0KCkge1xuICAgIHRoaXMuY29tYmF0T24gPSBmYWxzZTtcbiAgfVxufSIsImltcG9ydCB7R2xvYmFsc30gZnJvbSAnLi9HbG9iYWxzLmpzeCdcblxuZXhwb3J0IGNsYXNzIENvbWJhdE1hbmFnZXIge1xuICBcbiAgXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgYXJlYSwgaW5pdGlhdGVkKSB7XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmNhbnZhcyA9IGFyZWEuY2FudmFzO1xuICAgIFxuICAgIHRoaXMucGxheWVyVHVybiA9IGZhbHNlO1xuICAgIGlmIChpbml0aWF0ZWQgPT0gJ3BsYXllcicpIHtcbiAgICAgIHRoaXMucGxheWVyVHVybiA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubW92ZUxpbmUgPSBudWxsO1xuICAgIHRoaXMubW92ZVRleHQgPSBudWxsO1xuICAgIFxuICAgIHRoaXMuYWRkTW91c2VBY3Rpb25zKCk7XG4gICAgdGhpcy5jb21iYXRTZXF1ZW5jZSA9IDA7XG4gICAgXG4gICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgdGhpcy5hbGxpZXMgPSBbXTtcbiAgICBcbiAgICB0aGlzLnVwZGF0ZU1vdmVtZW50UG9pbnRzRGlzcGxheSh0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XG4gICAgXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5hcmVhLmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYXJlYS5hY3RvcnNbaV0udGVhbSA9PSAxKSB7XG4gICAgICAgIHRoaXMuYWxsaWVzLnB1c2godGhpcy5hcmVhLmFjdG9yc1tpXSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hcmVhLmFjdG9yc1tpXS50ZWFtID09IDMpIHtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5hcmVhLmFjdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsaWVzLCB0aGlzLmVuZW1pZXMpO1xuICAgIHRoaXMub3JkZXIgPSB0aGlzLmRldGVybWluZUNvbWJhdE9yZGVyKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlcik7XG4gICAgdGhpcy5uZXh0VHVybigpO1xuICB9XG4gIFxuICBoYW5kbGVQbGF5ZXJBdHRhY2soZW5lbXkpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5wbGF5ZXIuZXF1aXBwZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVyLmVxdWlwcGVkLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVyLmdldFgoKSA8PSBlbmVteS5nZXRYKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLnJ1bkF0dGFja0FuaW1hdGlvbigncmlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXIucnVuQXR0YWNrQW5pbWF0aW9uKCdsZWZ0Jyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdtdicsIHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzLCB0aGlzLnBsYXllci5lcXVpcHBlZC5zcGVlZCk7XG4gICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgLT0gdGhpcy5wbGF5ZXIuZXF1aXBwZWQuc3BlZWQ7XG4gICAgdGhpcy51cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMpO1xuICAgIC8qXG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnYXR0YWNrLycgKyB0aGlzLnN0YXRlLnBsYXllci5pZCArICcvJyArIGVuZW15LmlkKTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0KSB7XG4gICAgfSovXG4gICAgLy84OSUgKGF0dGFja2VyJ3Mgd2VhcG9uIHNraWxsKSAtIDUlIChkZWZlbmRlcidzIEFybW9yIENsYXNzKSA9IDg0JVxuICAgIGxldCB0b0hpdCA9IHRoaXMucGxheWVyLnNraWxscy5zaG9vdGluO1xuICAgIGlmICh0aGlzLnBsYXllci5lcXVpcHBlZC5tZWxlZSkge1xuICAgICAgdG9IaXQgPSB0aGlzLnBsYXllci5za2lsbHMuc2NyYXBwaW47XG4gICAgfVxuICAgIGxldCBoaXRDaGFuY2UgPSB0b0hpdCAtIGVuZW15LnN0YXRzLmFjICsgTWF0aC5jZWlsKHRoaXMucGxheWVyLnN0YXRzLmx1Y2svMik7XG4gICAgbGV0IHJvbGwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgIGlmIChyb2xsIDw9IGhpdENoYW5jZSkge1xuICAgICAgbGV0IGRhbUFyciA9IHRoaXMucGxheWVyLmVxdWlwcGVkLmRhbWFnZS5zcGxpdCgnZCcpO1xuICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYW1BcnJbMF07IGkrKykge1xuICAgICAgICBkYW1hZ2UgKz0gR2xvYmFscy5yYW5kb21JbnQoMSwgZGFtQXJyWzFdKTtcbiAgICAgIH1cbiAgICAgIGxldCBjcml0ID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICAgIGlmIChjcml0IDw9IHRoaXMucGxheWVyLnN0YXRzLmNyaXRpY2FsKSB7XG4gICAgICAgIHRoaXMuYXJlYS5wYXJlbnQucHJpbnQoJ1lvdSBjcml0aWNhbGx5IGhpdCAnICsgR2xvYmFscy51Y3dvcmRzKGVuZW15Lm5hbWUpICsgJyBmb3IgJyArIGRhbWFnZSpHbG9iYWxzLkNSSVRJQ0FMX0RBTUFHRV9NT0RJRklFUiArICcgcG9pbnRzIG9mIGRhbWFnZS4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXJlYS5wYXJlbnQucHJpbnQoJ1lvdSBoaXQgJyArIEdsb2JhbHMudWN3b3JkcyhlbmVteS5uYW1lKSArICcgZm9yICcgKyBkYW1hZ2UgKyAnIHBvaW50cyBvZiBkYW1hZ2UuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjcml0RmFpbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XG4gICAgICBpZiAoY3JpdEZhaWwgPD0gR2xvYmFscy5DUklUSUNBTF9GQUlMVVJFX0NIQU5DRSkge1xuICAgICAgICBsZXQgc2F2ZVJvbGwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgICAgICBpZiAoc2F2ZVJvbGwgPj0gdGhpcy5wbGF5ZXIuc3RhdHMubHVjaykge1xuICAgICAgICAgIHRoaXMuYXJlYS5wYXJlbnQucHJpbnQoJ1lvdSBjcml0aWNhbGx5IG1pc3NlZCBhbmQgbG9zdCB0aGUgcmVzdCBvZiB5b3VyIHR1cm4uJyk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIucmVtYWluaW5nTW92ZXMgPSAwO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFyZWEucGFyZW50LnByaW50KCdZb3UgbWlzc2VkLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFyZWEucGFyZW50LnByaW50KCdZb3UgbWlzc2VkLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaGFuZGxlTlBDQXR0YWNrKG5wYywgdGFyZ2V0KSB7XG4gICAgY29uc29sZS5sb2coJ25wYyBhdHRhY2tpbmchJyk7XG4gICAgY29uc29sZS5sb2cobnBjLCB0YXJnZXQpO1xuICAgIGlmICghbnBjLmVxdWlwcGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChucGMuZXF1aXBwZWQudHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1dFQVBPTikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBucGMucmVtYWluaW5nTW92ZXMgLT0gbnBjLmVxdWlwcGVkLnNwZWVkO1xuICAgIC8vODklIChhdHRhY2tlcidzIHdlYXBvbiBza2lsbCkgLSA1JSAoZGVmZW5kZXIncyBBcm1vciBDbGFzcykgPSA4NCVcbiAgICBsZXQgdG9IaXQgPSBucGMuc2tpbGxzLnNob290aW47XG4gICAgaWYgKG5wYy5lcXVpcHBlZC5tZWxlZSkge1xuICAgICAgdG9IaXQgPSBucGMuc2tpbGxzLnNjcmFwcGluO1xuICAgIH1cbiAgICBsZXQgaGl0Q2hhbmNlID0gdG9IaXQgLSB0YXJnZXQuc3RhdHMuYWMgKyBNYXRoLmNlaWwobnBjLnN0YXRzLmx1Y2svMik7XG4gICAgbGV0IHJvbGwgPSBHbG9iYWxzLnJhbmRvbUludCgxLCAxMDApO1xuICAgIGlmIChyb2xsIDw9IGhpdENoYW5jZSkge1xuICAgICAgbGV0IGRhbUFyciA9IG5wYy5lcXVpcHBlZC5kYW1hZ2Uuc3BsaXQoJ2QnKTtcbiAgICAgIGxldCBkYW1hZ2UgPSAwO1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGFtQXJyWzBdOyBpKyspIHtcbiAgICAgICAgZGFtYWdlICs9IEdsb2JhbHMucmFuZG9tSW50KDEsIGRhbUFyclsxXSk7XG4gICAgICB9XG4gICAgICBsZXQgY3JpdCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XG4gICAgICBpZiAoY3JpdCA8PSBucGMuc3RhdHMuY3JpdGljYWwpIHtcbiAgICAgICAgdGhpcy5hcmVhLnBhcmVudC5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBjcml0aWNhbGx5IGhpdHMgJyArIEdsb2JhbHMudWN3b3Jkcyh0YXJnZXQubmFtZSkgKyAnIGZvciAnICsgZGFtYWdlKkdsb2JhbHMuQ1JJVElDQUxfREFNQUdFX01PRElGSUVSICsgJyBwb2ludHMgb2YgZGFtYWdlLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcmVhLnBhcmVudC5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBoaXRzICcgKyBHbG9iYWxzLnVjd29yZHModGFyZ2V0Lm5hbWUpICsgJyBmb3IgJyArIGRhbWFnZSArICcgcG9pbnRzIG9mIGRhbWFnZS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNyaXRGYWlsID0gR2xvYmFscy5yYW5kb21JbnQoMSwgMTAwKTtcbiAgICAgIGlmIChjcml0RmFpbCA8PSBHbG9iYWxzLkNSSVRJQ0FMX0ZBSUxVUkVfQ0hBTkNFKSB7XG4gICAgICAgIGxldCBzYXZlUm9sbCA9IEdsb2JhbHMucmFuZG9tSW50KDEsIDEwMCk7XG4gICAgICAgIGlmIChzYXZlUm9sbCA+PSB0aGlzLnBsYXllci5zdGF0cy5sdWNrKSB7XG4gICAgICAgICAgdGhpcy5hcmVhLnBhcmVudC5wcmludChHbG9iYWxzLnVjd29yZHMobnBjLm5hbWUpICsgJyBjcml0aWNhbGx5IG1pc3NlZCBhbmQgbG9zdCB0aGUgcmVzdCBvZiBoaXMgdHVybi4nKTtcbiAgICAgICAgICBucGMucmVtYWluaW5nTW92ZXMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYXJlYS5wYXJlbnQucHJpbnQoR2xvYmFscy51Y3dvcmRzKG5wYy5uYW1lKSArICcgbWlzc2VkLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFyZWEucGFyZW50LnByaW50KEdsb2JhbHMudWN3b3JkcyhucGMubmFtZSkgKyAnIG1pc3NlZC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrUmVtYWluaW5nTlBDTW92ZXMobnBjKSB7XG4gICAgY29uc29sZS5sb2coJ25wYyBtdnMnLCBucGMucmVtYWluaW5nTW92ZXMpO1xuICAgIGlmIChucGMucmVtYWluaW5nTW92ZXMgPD0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ25wYyB0dXJuIGNvbXBsZXRlJyk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMubnBjVHVybkludGVydmFsKTtcbiAgICAgIHRoaXMuY29tYmF0U2VxdWVuY2UrKztcbiAgICAgIGlmICh0aGlzLmFsbGllcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hvb3NlVGFyZ2V0KG5wYykge1xuICAgIC8qXG4gICAgbGV0IGxhc3REaXN0ID0gbnVsbDtcbiAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcbiAgICBpZiAobnBjLnRlYW0gPT0gMykge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5hbGxpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLmFyZWEuZmluZFBhdGgoeyd4JzpucGMuZ2V0WCgpLCAneSc6bnBjLmdldFkoKX0sIHsneCc6dGhpcy5hbGxpZXNbaV0uZ2V0WCgpLCAneSc6dGhpcy5hbGxpZXNbaV0uZ2V0WSgpfSk7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgcGF0aCA9IHBhdGguc3BsaWNlKDAsIHBhdGgubGVuZ3RoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdERpc3QgfHwgcGF0aC5sZW5ndGggPCBsYXN0RGlzdCkge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXMuYWxsaWVzW2ldO1xuICAgICAgICAgIGxhc3REaXN0ID0gcGF0aC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSovXG4gIH1cbiAgXG4gIGhhbmRsZU5QQ0VuZFR1cm4obnBjKSB7XG4gICAgY29uc29sZS5sb2coJ2VuZGluZyB0dXJuIGZvcicsIG5wYyk7XG4gICAgbnBjLnJlbWFpbmluZ01vdmVzID0gMDtcbiAgfVxuICBcbiAgcnVuTlBDQXR0YWNrcyhucGMpIHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBucGMgYXR0YWNrcycsIG5wYy5yZW1haW5pbmdNb3Zlcyk7XG4gICAgbGV0IHR1cm5zTGVmdCA9IG5wYy5yZW1haW5pbmdNb3ZlcztcbiAgICBpZiAodHVybnNMZWZ0ID49IG5wYy5lcXVpcHBlZC5zcGVlZCkge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdHVybnNMZWZ0OyBpKyspIHtcbiAgICAgICAgdGhpcy5oYW5kbGVOUENBdHRhY2sobnBjLCBucGMudGFyZ2V0QWNxdWlyZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBucGMucmVtYWluaW5nTW92ZXMgPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgZG9OUENUdXJuKG5wYykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLm5wY1R1cm5JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5jaGVja1JlbWFpbmluZ05QQ01vdmVzKG5wYyk7XG4gICAgfSwgMTAwKTtcbiAgICBpZiAoIW5wYy50YXJnZXRBY3F1aXJlZCkge1xuICAgICAgbnBjLnRhcmdldEFjcXVpcmVkID0gdGhpcy5jaG9vc2VUYXJnZXQobnBjKTtcbiAgICB9XG4gICAgbGV0IGVuZW15UG9zID0geyd4JzpucGMudGFyZ2V0QWNxdWlyZWQuZ2V0WCgpLCAneSc6bnBjLnRhcmdldEFjcXVpcmVkLmdldFkoKX07XG4gICAgbGV0IHBhdGggPSBzZWxmLmFyZWEuZmluZFBhdGgoeyd4JzpucGMuZ2V0WCgpLCAneSc6bnBjLmdldFkoKX0sIGVuZW15UG9zKTtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aCA9IHBhdGguc3BsaWNlKDAsIHBhdGgubGVuZ3RoLTEpO1xuICAgIH1cbiAgICBpZiAoTWF0aC5jZWlsKHBhdGgubGVuZ3RoLzQpID4gbnBjLmVxdWlwcGVkLnJhbmdlKSB7XG4gICAgICBpZiAocGF0aC5sZW5ndGgvNCA+IG5wYy5zdGF0cy5zcGVlZCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zcGxpY2UoMCwgbnBjLnN0YXRzLnNwZWVkKjQpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXRoW2ldWzBdICo9IEdsb2JhbHMuR1JJRF9TUVVBUkVfV0lEVEg7XG4gICAgICAgIHBhdGhbaV1bMV0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9IRUlHSFQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChucGMucmVtYWluaW5nTW92ZXMgLSBNYXRoLmNlaWwocGF0aC5sZW5ndGgvNCkgPj0gbnBjLmVxdWlwcGVkLnNwZWVkKSB7XG4gICAgICAgIG5wYy53YWxrUm91dGUocGF0aCwgdGhpcy5ydW5OUENBdHRhY2tzLmJpbmQoc2VsZiwgbnBjKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBucGMud2Fsa1JvdXRlKHBhdGgsIHRoaXMuaGFuZGxlTlBDRW5kVHVybi5iaW5kKHNlbGYsIG5wYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bk5QQ0F0dGFja3MobnBjKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllciByZW1haW5pbmcgbW92ZXMnLCB0aGlzLnBsYXllci5yZW1haW5pbmdNb3Zlcyk7XG4gICAgaWYgKHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzIDw9IDApIHtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVMaW5lKTtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLm1vdmVUZXh0KTtcbiAgICAgIHRoaXMubW92ZUxpbmUgPSBudWxsO1xuICAgICAgdGhpcy5tb3ZlVGV4dCA9IG51bGw7XG4gICAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgdHVybiBjb21wbGV0ZScpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBsYXllclR1cm5JbnRlcnZhbCk7XG4gICAgICB0aGlzLmNvbWJhdFNlcXVlbmNlKys7XG4gICAgICBjb25zb2xlLmxvZygncmVtYWluaW5nIGVuZW1pZXMnLCB0aGlzLmVuZW1pZXMpO1xuICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgbmV4dFR1cm4oc2VxdWVuY2UpIHtcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IHRoaXMucGxheWVyLnN0YXRzLnNwZWVkO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5jb21iYXRTZXF1ZW5jZSA+PSB0aGlzLm9yZGVyLmxlbmd0aCAmJiB0aGlzLmVuZW1pZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbWJhdFNlcXVlbmNlID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pIHtcbiAgICAgIHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0ucmVtYWluaW5nTW92ZXMgPSB0aGlzLm9yZGVyW3RoaXMuY29tYmF0U2VxdWVuY2VdLnN0YXRzLnNwZWVkO1xuICAgICAgaWYgKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0udHlwZSAhPSBHbG9iYWxzLk9CSkVDVF9UWVBFX1BMQVlFUikge1xuICAgICAgICB0aGlzLnBsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ25wYyB0dXJuJyk7XG4gICAgICAgIHRoaXMuZG9OUENUdXJuKHRoaXMub3JkZXJbdGhpcy5jb21iYXRTZXF1ZW5jZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciB0dXJuJyk7XG4gICAgICAgIHRoaXMudXBkYXRlTW92ZW1lbnRQb2ludHNEaXNwbGF5KHRoaXMucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5wbGF5ZXJUdXJuSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNoZWNrUmVtYWluaW5nUGxheWVyTW92ZXMoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGdldE5QQ0J5SUQoaWQpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbWllc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGRldGVybWluZUNvbWJhdE9yZGVyKCkge1xuICAgIGxldCBvcmRlciA9IFtdO1xuICAgIGxldCBwbGF5ZXJBZGRlZCA9IGZhbHNlO1xuICAgIGxldCBucGNDb21iYXRhbnRzID0gW107XG4gICAgaWYgKHRoaXMuaW5pdGlhdGVkID09ICdwbGF5ZXInKSB7XG4gICAgICAvL29yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xuICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xuICAgICAgbnBjQ29tYmF0YW50cyA9IHRoaXMuZW5lbWllcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy9vcmRlci5wdXNoKHRoaXMuZ2V0TlBDQnlJRCh0aGlzLmluaXRpYXRlZCkpO1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbaV0uaWQgIT0gdGhpcy5pbml0aWF0ZWQpIHtcbiAgICAgICAgICBucGNDb21iYXRhbnRzLnB1c2godGhpcy5lbmVtaWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBucGNDb21iYXRhbnRzLnNvcnQoKGEsIGIpID0+IChhLnN0YXRzLnNwZWVkID4gYi5zdGF0cy5zcGVlZCkgPyAxIDogLTEpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IG5wY0NvbWJhdGFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChucGNDb21iYXRhbnRzW2ldLnN0YXRzLnNwZWVkID4gdGhpcy5wbGF5ZXIuc3RhdHMuc3BlZWQpIHtcbiAgICAgICAgb3JkZXIucHVzaChucGNDb21iYXRhbnRzW2ldKTtcbiAgICAgICAgaWYgKGkgPT0gdGhpcy5lbmVtaWVzLmxlbmd0aC0xICYmICFwbGF5ZXJBZGRlZCkge1xuICAgICAgICAgIG9yZGVyLnB1c2godGhpcy5wbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXBsYXllckFkZGVkKSB7XG4gICAgICAgICAgb3JkZXIucHVzaCh0aGlzLnBsYXllcik7XG4gICAgICAgICAgcGxheWVyQWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG9yZGVyLnB1c2gobnBjQ29tYmF0YW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBcbiAgZW5kUGxheWVyVHVybigpIHtcbiAgICB0aGlzLnBsYXllci5yZW1haW5pbmdNb3ZlcyA9IDA7XG4gICAgY29uc29sZS5sb2coJ2VuZCBwbGF5ZXIgdHVybicpO1xuICB9XG4gIFxuICB1cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodmFsdWUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZW1lbnRfcG9pbnRzJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH1cblxuICBjb21iYXRNb3VzZU1vdmVSZXN1bHRzKG9iaikge1xuICAgIGNvbnNvbGUubG9nKCd3dGYnLCBvYmoucGF0aCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChvYmoucGF0aCAmJiBvYmoucGF0aC5sZW5ndGgpIHtcbiAgICAgIGlmICghc2VsZi5tb3ZlTGluZSAmJiAhc2VsZi5wbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IFtvYmouc3RhcnQueCwgb2JqLnN0YXJ0LnksIG9iai5zdGFydC54LCBvYmouc3RhcnQueV07XG4gICAgICAgIHNlbGYubW92ZUxpbmUgPSBuZXcgZmFicmljLkxpbmUoY29vcmRzLCB7XG4gICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuY2FudmFzLmFkZChzZWxmLm1vdmVMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2VsZi5tb3ZlVGV4dCAmJiAhc2VsZi5wbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgc2VsZi5tb3ZlVGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnWCcsIHsgbGVmdDogMTAwLCB0b3A6IDEwMCwgZm9udEZhbWlseTondmVyZGFuYSxnZW5ldmEsc2Fucy1zZXJpZicsIGZvbnRTaXplOjE4LCBmb250V2VpZ2h0Oidib2xkJywgZmlsbDonZ3JlZW4nfSk7XG4gICAgICAgIHNlbGYuY2FudmFzLmFkZChzZWxmLm1vdmVUZXh0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHNlbGYubW92ZUxpbmUpIHtcbiAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoeyd4Mic6b2JqLmVuZC54LCAneTInOm9iai5lbmQueX0pO1xuICAgICAgfVxuICAgICAgbGV0IHRleHRQb3MgPSBPYmplY3QuYXNzaWduKHt9LCBvYmouZW5kKTtcbiAgICAgIC8vdGV4dFBvcy54ICs9IDEwO1xuICAgICAgLy90ZXh0UG9zLnkgLT0gNztcbiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIHRleHQnLCBNYXRoLmNlaWwob2JqLnBhdGgubGVuZ3RoLzQpLnRvU3RyaW5nKCksICdyZW1tb3ZlcycsIHNlbGYucGxheWVyLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgIHNlbGYubW92ZVRleHQuc2V0KHt0ZXh0Ok1hdGguY2VpbChvYmoucGF0aC5sZW5ndGgvNCkudG9TdHJpbmcoKSwgbGVmdDp0ZXh0UG9zLngsIHRvcDp0ZXh0UG9zLnl9KTtcbiAgICAgIGlmIChvYmoucGF0aC5sZW5ndGgvNCA8PSBzZWxmLnBsYXllci5yZW1haW5pbmdNb3Zlcykge1xuICAgICAgICBzZWxmLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidncmVlbid9KTtcbiAgICAgICAgc2VsZi5tb3ZlVGV4dC5zZXQoe2ZpbGw6J2dyZWVuJ30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoe3N0cm9rZToncmVkJ30pO1xuICAgICAgICBzZWxmLm1vdmVUZXh0LnNldCh7ZmlsbDoncmVkJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLm1vdmVMaW5lLnNldCh7c3Ryb2tlOidibGFjayd9KTtcbiAgICAgIHNlbGYubW92ZVRleHQuc2V0KHt0ZXh0OidYJywgbGVmdDp0ZXh0UG9zLngsIHRvcDp0ZXh0UG9zLnksIGZpbGw6J2JsYWNrJ30pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1vdXNlQWN0aW9ucygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5jYW52YXMub24oJ21vdXNlOm91dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZShzZWxmLm1vdmVMaW5lKTtcbiAgICAgIHRoaXMucmVtb3ZlKHNlbGYubW92ZVRleHQpO1xuICAgICAgc2VsZi5tb3ZlTGluZSA9IG51bGw7XG4gICAgICBzZWxmLm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgIHNlbGYuYXJlYS5QYXRoV29ya2VyLnBvc3RNZXNzYWdlKHtjb21tYW5kOidjYW5jZWxUaHJlYWQnfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbnZhcy5vbignbW91c2U6bW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgcGxheWVyID0gc2VsZi5wbGF5ZXI7XG4gICAgICBpZiAoc2VsZi5wbGF5ZXJUdXJuKSB7XG4gICAgICAgIC8vc2VsZi5hcmVhLlBhdGhXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6J2NhbmNlbFRocmVhZCd9KTtcbiAgICAgICAgaWYgKHBsYXllci50YXJnZXRBY3F1aXJlZCkge1xuICAgICAgICAgIGlmIChzZWxmLm1vdmVMaW5lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShzZWxmLm1vdmVMaW5lKTtcbiAgICAgICAgICAgIHNlbGYubW92ZUxpbmUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZi5tb3ZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoc2VsZi5tb3ZlVGV4dCk7XG4gICAgICAgICAgICBzZWxmLm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydCA9IHt9O1xuICAgICAgICBzdGFydC54ID0gcGxheWVyLmdldFgoKTtcbiAgICAgICAgc3RhcnQueSA9IHBsYXllci5nZXRZKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZW5kID0ge307XG4gICAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChldmVudC5wb2ludGVyLngpO1xuICAgICAgICBlbmQueSA9IE1hdGgucm91bmQoZXZlbnQucG9pbnRlci55KTtcbiAgICAgICAgaWYgKCFzZWxmLm1vdmVMaW5lICYmICFwbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgICBsZXQgY29vcmRzID0gW3N0YXJ0LngsIHN0YXJ0LnksIHN0YXJ0LngsIHN0YXJ0LnldO1xuICAgICAgICAgIHNlbGYubW92ZUxpbmUgPSBuZXcgZmFicmljLkxpbmUoY29vcmRzLCB7XG4gICAgICAgICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLmNhbnZhcy5hZGQoc2VsZi5tb3ZlTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLm1vdmVUZXh0ICYmICFwbGF5ZXIuaXNNb3ZpbmcpIHtcbiAgICAgICAgICBzZWxmLm1vdmVUZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCdYJywgeyBsZWZ0OiAxMDAsIHRvcDogMTAwLCBmb250RmFtaWx5Oid2ZXJkYW5hLGdlbmV2YSxzYW5zLXNlcmlmJywgZm9udFNpemU6MTgsIGZvbnRXZWlnaHQ6J2JvbGQnLCBmaWxsOidncmVlbid9KTtcbiAgICAgICAgICBzZWxmLmNhbnZhcy5hZGQoc2VsZi5tb3ZlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzZWxmLm1vdmVMaW5lKSB7XG4gICAgICAgICAgc2VsZi5tb3ZlTGluZS5zZXQoeyd4Mic6ZW5kLngsICd5Mic6ZW5kLnl9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dFBvcyA9IE9iamVjdC5hc3NpZ24oe30sIGVuZCk7XG4gICAgICAgIHRleHRQb3MueCArPSAxMDtcbiAgICAgICAgdGV4dFBvcy55IC09IDc7XG4gICAgICAgIGlmIChzZWxmLm1vdmVUZXh0ICYmIHNlbGYubW92ZUxpbmUpIHtcbiAgICAgICAgICBpZiAoc2VsZi5hcmVhLndhbGtQYXRoLmlzUG9pbnRJblBhdGgoZW5kLngsIGVuZC55KSkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvbW1hbmQgPSAnY29tYmF0TW91c2VNb3ZlJztcbiAgICAgICAgICAgIG9iai5zdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgb2JqLmVuZCA9IGVuZDtcbiAgICAgICAgICAgIHNlbGYuYXJlYS5maW5kUGF0aChvYmopO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm1vdmVUZXh0LnNldCh7dGV4dDonWCcsIGxlZnQ6dGV4dFBvcy54LCB0b3A6dGV4dFBvcy55LCBmaWxsOidyZWQnfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcblxuZXhwb3J0IGNsYXNzIERlY29yIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gR2xvYmFscy5PQkpFQ1RfVFlQRV9ERUNPUjtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3I7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5sb2NhdGlvbjtcbiAgICB0aGlzLmltZ1VSTCA9IGRhdGEuaW1nO1xuICAgIFxuICAgIHRoaXMuY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XG4gICAgdGhpcy5kb29yID0gZGF0YS5kb29yO1xuICAgIHRoaXMub3BlbiA9IGRhdGEub3BlbjtcblxuICAgIHRoaXMub3JnWCA9IGRhdGEueDtcbiAgICB0aGlzLm9yZ1kgPSBkYXRhLnk7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gMDtcbiAgICB0aGlzLm1heFdpZHRoID0gMDtcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuaW1nLndpZHRoO1xuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQ7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltZy53aWR0aDtcbiAgICAgIGlmICghdGhpcy5zcHJpdGUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMuaW1nLCB7XG4gICAgICAgICAgbGVmdDogdGhpcy5vcmdYLFxuICAgICAgICAgIHRvcDogdGhpcy5vcmdZLFxuICAgICAgICAgIHNlbGVjdGFibGU6ZmFsc2UsXG4gICAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMueCA9IHRoaXMub3JnWCArIHRoaXMud2lkdGgvMjtcbiAgICAgIHRoaXMueSA9IHRoaXMub3JnWSArIHRoaXMuaGVpZ2h0O1xuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB7fTtcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0gdGhpcztcbiAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLnNwcml0ZSk7XG4gICAgICB0aGlzLnNwcml0ZS5vbignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnByaW50KCdZb3Ugc2VlOiAnICArIEdsb2JhbHMudWN3b3Jkcyh0aGlzLm5hbWUpICsgJy4nKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zcHJpdGUub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zcHJpdGUub24oJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgdGhpcy5pbWcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSkpO1xuICAgIH07XG4gICAgdGhpcy5pbWcuc3JjID0gJ2ltZy9vYmplY3RzLycgKyB0aGlzLmltZ1VSTDtcbiAgfVxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IG51bGw7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2MnKTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldCA9IHt9O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cyA9IHt9O1xyXG4gICAgLypGLkEuQy5JLkEuTC5TXHJcbiAgICBGb3J0aXR1ZGVcclxuICAgIEFnaWxpdHlcclxuICAgIENoYXJpc21hXHJcbiAgICBJbnRlbGxpZ2VuY2VcclxuICAgIEF0dGVudGlvblxyXG4gICAgTHVja1xyXG4gICAgU3RyZW5ndGgqL1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hZ2lsaXR5ID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuY2hhcmlzbWEgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2UgPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24gPSA1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5sdWNrID0gNTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3RyZW5ndGggPSA1O1xyXG4gICAgXHJcbiAgICAvL2Rlcml2ZWQgc3RhdHNcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQgPSAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hZ2lsaXR5LzIpICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uLzIpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy50b2xlcmFuY2UgPSB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZSo1O1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5zbWVsbCA9IE1hdGgucm91bmQodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jaGFyaXNtYS8yKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuaHAgPSA1MCArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hYyA9IDUgKyBNYXRoLnJvdW5kKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYWdpbGl0eS8yICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5mb3J0aXR1ZGUvMik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmNyaXRpY2FsID0gdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5sdWNrO1xyXG5cclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQudHJhaXRzID0ge307XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnRyYWl0cy5hdXRpc20gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMgPSB7fTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLmJlZ2dpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jaGFyaXNtYSArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNob290aW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNjcmFwcGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLnN0cmVuZ3RoICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24pO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMud3JhcHBpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5hdHRlbnRpb24gKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5maXhpbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2UgKyB0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmFnaWxpdHkpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMubGVhcm5pbiA9IDUgKyAodGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5pbnRlbGxpZ2VuY2UpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJTaGVldC5za2lsbHMucmFudGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmludGVsbGlnZW5jZSArIHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuYXR0ZW50aW9uKTtcclxuICAgIHRoaXMuY2hhcmFjdGVyU2hlZXQuc2tpbGxzLnNoaXR0aW4gPSA1ICsgKHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuZm9ydGl0dWRlICsgdGhpcy5jaGFyYWN0ZXJTaGVldC5zdGF0cy5jaGFyaXNtYSk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclNoZWV0LnNraWxscy5zbGVlcGluID0gNSArICh0aGlzLmNoYXJhY3RlclNoZWV0LnN0YXRzLmZvcnRpdHVkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZUFsbENvbnRleHRNZW51cygpIHtcclxuICAgIGxldCBtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZXh0TWVudScpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbWVudXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbWVudXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZW51c1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIHNob3dDaGFyYWN0ZXJTaGVldCgpIHtcclxuICAgIGlmICghR2xvYmFscy5pc1Nob3dpbmdTaGVldCkge1xyXG4gICAgICBHbG9iYWxzLmlzU2hvd2luZ1NoZWV0ID0gdHJ1ZTtcclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hlZXRfaG9sZGVyJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRUZW1wbGF0ZSgnc2hlZXQuaHRtbCcsIGRpdik7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgY2xvc2V4ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBhJyk7XHJcbiAgICAgIGNsb3NleC5vbmNsaWNrID0gdGhpcy5zaG93Q2hhcmFjdGVyU2hlZXQ7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgc3RhdHMgPSBkaXYucXVlcnlTZWxlY3RvckFsbCgnLmJhc2Vfc3RhdHMgLmJveCcpO1xyXG4gICAgICBzdGF0c1swXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy5mb3J0aXR1ZGU7XHJcbiAgICAgIHN0YXRzWzFdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnN0YXRzLmF0dGVudGlvbjtcclxuICAgICAgc3RhdHNbMl0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuY2hhcmlzbWE7XHJcbiAgICAgIHN0YXRzWzNdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnN0YXRzLmludGVsbGlnZW5jZTtcclxuICAgICAgc3RhdHNbNF0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuYWdpbGl0eTtcclxuICAgICAgc3RhdHNbNV0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMubHVjaztcclxuICAgICAgc3RhdHNbNl0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuc3RyZW5ndGg7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgc2tpbGxzID0gZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHMgLnZhbHVlJyk7XHJcbiAgICAgIHNraWxsc1swXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMuYmVnZ2luICsgJyUnO1xyXG4gICAgICBza2lsbHNbMV0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLnNob290aW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1syXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMuc2NyYXBwaW4gKyAnJSc7XHJcbiAgICAgIHNraWxsc1szXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5za2lsbHMud3JhcHBpbiArICclJztcclxuICAgICAgc2tpbGxzWzRdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy5maXhpbiArICclJztcclxuICAgICAgc2tpbGxzWzVdLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy5sZWFybmluICsgJyUnO1xyXG4gICAgICBza2lsbHNbNl0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLnJhbnRpbiArICclJztcclxuICAgICAgc2tpbGxzWzddLmlubmVySFRNTCA9IHRoaXMuc3RhdGUucGxheWVyLnNraWxscy5zaGl0dGluICsgJyUnO1xyXG4gICAgICBza2lsbHNbOF0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc2tpbGxzLnNsZWVwaW4gKyAnJSc7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgZGVyaXZlZCA9IGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHNfaW5mbyAudmFsdWUnKTtcclxuICAgICAgZGVyaXZlZFswXS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLnBsYXllci5zdGF0cy50b2xlcmFuY2UgKyAnJSc7XHJcbiAgICAgIGRlcml2ZWRbMV0uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5wbGF5ZXIuc3RhdHMuc3BlZWQ7XHJcbiAgICAgIGxldCBzbWVsbERhdGEgPSB0aGlzLnN0YXRlLnBsYXllci5nZXRTbWVsbExhYmVsKHRoaXMuc3RhdGUucGxheWVyLnN0YXRzLnNtZWxsKTtcclxuICAgICAgZGVyaXZlZFsyXS5zdHlsZS5jb2xvciA9IHNtZWxsRGF0YVsxXTtcclxuICAgICAgZGVyaXZlZFsyXS5pbm5lckhUTUwgPSBzbWVsbERhdGFbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBHbG9iYWxzLmlzU2hvd2luZ1NoZWV0ID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2hlZXRfaG9sZGVyJykpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBlbnRlclRhcmdldGluZ01vZGUoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhLmdldFBsYXllcigpLmlzVGFyZ2V0aW5nID0gIXRoaXMuY3VycmVudEFyZWEuZ2V0UGxheWVyKCkuaXNUYXJnZXRpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIGVuZENvbWJhdFR1cm4oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBcmVhLmVuZENvbWJhdFR1cm4oKTtcclxuICB9XHJcbiAgXHJcbiAgcHJpbnQodGV4dCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zb2xlJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MICs9ICc8cD4nICsgdGV4dCArICc8L3A+JztcclxuICAgIGRpdi5pbm5lckhUTUwgKz0gJzxwPjwvcD4nO1xyXG4gICAgZGl2LnNjcm9sbFRvcCA9IGRpdi5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIHF1ZXJ5QmFja2VuZCh0eXBlLCB1cmwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeWluZyAnICsgdXJsKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDp0eXBlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmVqZWN0KHsnY29kZSc6cmVzcG9uc2Uuc3RhdHVzLCAnbWVzc2FnZSc6cmVzcG9uc2Uuc3RhdHVzVGV4dH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShqc29uKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+cmVqZWN0KEpTT04ucGFyc2UoZXJyb3IpKSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yPT5yZWplY3QoSlNPTi5wYXJzZShlcnJvcikpKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRlbXBsYXRlKHVybCwgZGl2KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGZldGNoKEdsb2JhbHMuVEVNUExBVEVfRElSICsgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgIEhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7ZGl2LmlubmVySFRNTCA9IHJlc3BvbnNlOyByZXNvbHZlKCk7fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn0iLCJcbmV4cG9ydCBjbGFzcyBHbG9iYWxzIHtcbiAgc3RhdGljIFJPT1RfRUxFTUVOVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIHN0YXRpYyBBUkVBU19ESVIgPSAnL2ltZy9hcmVhcy8nO1xuICBzdGF0aWMgVEVNUExBVEVfRElSID0gJy90ZW1wbGF0ZXMvJztcbiAgc3RhdGljIEFQSV9ESVIgPSAnL2FwaS8nO1xuICBzdGF0aWMgQU5JTUFUSU9OU19ESVIgPSAnL2ltZy9hbmltYXRpb25zLyc7XG4gIFxuICBzdGF0aWMgR1JJRF9TUVVBUkVfV0lEVEggPSAyNTtcbiAgc3RhdGljIEdSSURfU1FVQVJFX0hFSUdIVCA9IDI1O1xuICBcbiAgc3RhdGljIEVWRU5UX1BMQVlFUl9SRUFEWSA9ICdwbGF5ZXJSZWFkeSc7XG4gIHN0YXRpYyBFVkVOVF9BUkVBX1JFQURZID0gJ2FyZWFSZWFkeSc7XG4gIHN0YXRpYyBFVkVOVF9OUENfUkVBRFkgPSAnbnBjUmVhZHknO1xuICBzdGF0aWMgRVZFTlRfV0VBUE9OX1JFQURZID0gJ3dlYXBvblJlYWR5JztcbiAgc3RhdGljIEVWRU5UX0RFQ09SX1JFQURZID0gJ2RlY29yUmVhZHknO1xuICBzdGF0aWMgRVZFTlRfUEFUSF9XQUxLRUQgPSAncGF0aFdhbGtlZCc7XG4gIHN0YXRpYyBFVkVOVF9QQVRIX05PREVfV0FMS0VEID0gJ3BhdGhOb2RlV2Fsa2VkJztcbiAgXG4gIHN0YXRpYyBPQkpFQ1RfVFlQRV9QTEFZRVIgPSAxO1xuICBzdGF0aWMgT0JKRUNUX1RZUEVfTlBDID0gMjtcbiAgc3RhdGljIE9CSkVDVF9UWVBFX1dFQVBPTiA9IDM7XG4gIHN0YXRpYyBPQkpFQ1RfVFlQRV9ERUNPUiA9IDQ7XG4gIFxuICBzdGF0aWMgQ1JJVElDQUxfRkFJTFVSRV9DSEFOQ0UgPSAxMDtcbiAgc3RhdGljIENSSVRJQ0FMX0RBTUFHRV9NT0RJRklFUiA9IDEwO1xuICBcbiAgYXBpS2V5ID0gbnVsbDtcbiAgaXNTaG93aW5nU2hlZXQgPSBmYWxzZTtcbiAgXG4gIHN0YXRpYyBoYW5kbGVBY2Nlc3NEZW5pZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdQT1NUJywgR2xvYmFscy5BUElfVVJMICsgJ3Rva2VuJywgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiKTtcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgR2xvYmFscy5hcGlLZXkgPSBqc29uLnRva2VuO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhoci5zZW5kKCdlbWFpbD0nICsgR2xvYmFscy5hcGlFbWFpbCArICcmcGFzcz0nICsgR2xvYmFscy5hcGlQYXNzKTtcbiAgICB9KTtcbiAgfTtcbiAgXG4gIHN0YXRpYyByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxuICBcbiAgc3RhdGljIHVwcGVyRmlyc3RDaGFyKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH1cbiAgXG4gIHN0YXRpYyB1Y3dvcmRzKHN0cikge1xuICAgIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL14oLil8XFxzKyguKS9nLCBmdW5jdGlvbiAoJDEpIHtcbiAgICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBkaXN0YW5jZUJldHdlZW4ocG9pbnQxLCBwb2ludDIsIGFyZWEpIHtcbiAgICBsZXQgcGF0aCA9IGFyZWEuZmluZFBhdGgocG9pbnQxLCBwb2ludDIpO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXRoID0gcGF0aC5zcGxpY2UoMCwgcGF0aC5sZW5ndGgtMSk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmNlaWwocGF0aC5sZW5ndGgvNCk7XG4gIH1cbiAgXG4gIHN0YXRpYyBpc0ludGVyc2VjdGluZyhvYmoxLCBvYmoyKSB7XG4gICAgcmV0dXJuIG9iajEuaW50ZXJzZWN0c1dpdGhPYmplY3Qob2JqMikgfHxcbiAgICAgICAgICAgb2JqMS5pc0NvbnRhaW5lZFdpdGhpbk9iamVjdChvYmoyKSB8fFxuICAgICAgICAgICBvYmoyLmlzQ29udGFpbmVkV2l0aGluT2JqZWN0KG9iajEpO1xuICB9XG59IiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xuaW1wb3J0IHtFbmdpbmV9IGZyb20gJy4vRW5naW5lLmpzeCc7XG5pbXBvcnQge1dlYXBvbn0gZnJvbSAnLi9XZWFwb24uanN4J1xuXG5leHBvcnQgY2xhc3MgTlBDIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfTlBDO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSAnc29tZSBhc3Nob2xlJztcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJ3NvbWVvbmUgd2hvIGRlZmllcyBkZXNjcmlwdGlvbic7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5pbWdYID0gOTAwO1xuICAgIHRoaXMuaW1nWSA9IDQwMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgIHRoaXMubWF4V2lkdGggPSAwO1xuICAgIHRoaXMuYW5pbWF0aW5nQ291bnQgPSAwO1xuICAgIHRoaXMubnBjRGVmYXVsdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuc2hlZXQgPSB7Li4udGhpcy5jaGFyYWN0ZXJTaGVldH07XG4gICAgdGhpcy50ZWFtID0gMztcbiAgICB0aGlzLnRhcmdldEFjcXVpcmVkID0gbnVsbDtcbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgdGhpcy51c2luZ01lbGVlID0gdHJ1ZTtcbiAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIFxuICAgIGxldCBmaXN0ID0gbmV3IFdlYXBvbignYjFhZTUxYjEtYzliOS0xMWU5LWJjOTctMGU0OWYxZjhlNzdjJyk7XG4gICAgZmlzdC5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSwgZXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVxdWlwKGZpc3QpO1xuICAgICAgdGhpcy5zdG93KGZpc3QpO1xuICAgIH0pO1xuICAgIGZpc3QubG9hZCgpO1xuICB9XG4gIFxuICBzdG93KGl0ZW0pIHtcbiAgICB0aGlzLmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICB9XG4gIFxuICBkcm9wKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52ZW50b3J5LnNwbGljZSh0aGlzLmludmVudG9yeS5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgfVxuICBcbiAgZXF1aXAoaXRlbSkge1xuICAgIGlmIChpdGVtLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVxdWlwcGVkID0gaXRlbTtcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5lcXVpcHBlZCcpLnNyYyA9IHRoaXMuZXF1aXBwZWQuaW1nLnNyYztcbiAgfVxuICBcbiAgZ2V0RXF1aXBwZWRXZWFwb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXF1aXBwZWQ7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLm5wY0RlZmF1bHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMubnBjRGVmYXVsdC53aWR0aDtcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5ucGNEZWZhdWx0LmhlaWdodDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ucGNEZWZhdWx0LmhlaWdodDtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLm5wY0RlZmF1bHQud2lkdGg7XG5cbiAgICAgIHRoaXMuc3ByaXRlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm5wY0RlZmF1bHQsIHtcbiAgICAgICAgbGVmdDogdGhpcy5pbWdYLFxuICAgICAgICB0b3A6IHRoaXMuaW1nWSxcbiAgICAgICAgc2VsZWN0YWJsZTpmYWxzZSxcbiAgICAgICAgaG92ZXJDdXJzb3I6J2Fycm93J1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNwcml0ZS5tZXRhZGF0YSA9IHt9O1xuICAgICAgdGhpcy5zcHJpdGUubWV0YWRhdGEgPSB0aGlzO1xuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuc3ByaXRlKTtcbiAgICAgIHRoaXMuc3ByaXRlLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpbnQoJ1lvdSBzZWU6ICcgKyBHbG9iYWxzLnVjd29yZHModGhpcy5uYW1lKSArICcuJyk7XG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmNvbWJhdE9uIHx8IHRoaXMubG9jYXRpb24uZ2V0UGxheWVyKCkuaXNUYXJnZXRpbmcpIHtcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLmdldFBsYXllcigpLnRhcmdldEFjcXVpcmVkID0gdGhpcztcbiAgICAgICAgICB0aGlzLmhvdmVyQ3Vyc29yPSdjcm9zc2hhaXInO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ByaXRlLm9uKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS50YXJnZXRBY3F1aXJlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG92ZXJDdXJzb3I9J2Fycm93JztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zcHJpdGUub24oJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbmVteVBvcyA9IHsneCc6dGhpcy5nZXRYKCksICd5Jzp0aGlzLmdldFkoKX07XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAncGxheWVyQ2hlY2tSYW5nZSc7XG4gICAgICAgIG9iai5ucGMgPSB0aGlzLmlkO1xuICAgICAgICBvYmouc3RhcnQgPSB7J3gnOnRoaXMubG9jYXRpb24uZ2V0UGxheWVyKCkuZ2V0WCgpLCAneSc6dGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5nZXRZKCl9O1xuICAgICAgICBvYmouZW5kID0gZW5lbXlQb3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24uZmluZFBhdGgob2JqKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5ucGNEZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfTlBDX1JFQURZKSk7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLm5wY0RlZmF1bHQuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteS5wbmcnO1xuICAgIFxuICAgIHRoaXMubnBjTGVmdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubnBjTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X2xlZnQucG5nJztcbiAgICBcbiAgICB0aGlzLm5wY1JpZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ucGNSaWdodC5zcmMgPSAnaW1nL3Blb3BsZS9nZW5lcmljX2VuZW15X3JpZ2h0LnBuZyc7XG4gICAgXG4gICAgdGhpcy5ucGNVcCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubnBjVXAuc3JjID0gJ2ltZy9wZW9wbGUvZ2VuZXJpY19lbmVteV9iYWNrd2FyZHMucG5nJztcbiAgfVxuICBcbiAgcmVzYW1wbGUoKSB7XG4gICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHRoaXMuaW1nWSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgIFxuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuc3ByaXRlLnNldCgndG9wJywgdGhpcy5pbWdZKTtcbiAgICB0aGlzLnNwcml0ZS5zZXQoJ2xlZnQnLCB0aGlzLmltZ1gpO1xuICAgIHRoaXMueCA9IHRoaXMuaW1nWCArIHRoaXMud2lkdGgvMjtcbiAgICB0aGlzLnkgPSB0aGlzLmltZ1kgKyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwcml0ZS5zZXRDb29yZHMoKTtcbiAgfVxuICBcbiAgY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpIHtcbiAgICBsZXQgcGVyYyA9ICh5LXRoaXMubG9jYXRpb24udmFuaXNoaW5nUG9pbnQpLyh0aGlzLmxvY2F0aW9uLmhlaWdodCAtIHRoaXMubG9jYXRpb24udmFuaXNoaW5nUG9pbnQpO1xuICAgIGxldCBuZXdIID0gKHRoaXMubWF4SGVpZ2h0ICogcGVyYyk7XG4gICAgbGV0IG5ld1cgPSAodGhpcy5tYXhXaWR0aC90aGlzLm1heEhlaWdodCkgKiBuZXdIO1xuICAgIHJldHVybiB7dzpuZXdXLCBoOm5ld0h9O1xuICB9XG4gIFxuICBzY2FsZVNwcml0ZUJ5WUNvb3JkKHkpIHtcbiAgICBsZXQgb2xkSCA9IHRoaXMuaGVpZ2h0O1xuICAgIGxldCBvbGRXID0gdGhpcy53aWR0aDtcbiAgICBpZiAoIW9sZEgpIHtcbiAgICAgIG9sZEggPSB0aGlzLm1heEhlaWdodDtcbiAgICB9XG4gICAgaWYgKCFvbGRXKSB7XG4gICAgICBvbGRXID0gdGhpcy5tYXhXaWR0aDtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemVGcm9tWVBvcyh5KTtcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvSGVpZ2h0KHNpemUuaCk7XG4gICAgdGhpcy5zcHJpdGUuc2NhbGVUb1dpZHRoKHNpemUudyk7XG4gICAgdGhpcy5oZWlnaHQgPSBzaXplLmg7XG4gICAgdGhpcy53aWR0aCA9IHNpemUudztcbiAgICBcbiAgfVxuXG4gIFxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxuICBcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5kZWNvci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkgJiYgZGVjb3JaID49IG15Wikge1xuICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGRlY29yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxvY2F0aW9uLmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldID09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBhY3RvclogPj0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5zcHJpdGUpKSB7XG4gICAgICBsZXQgcGxheWVyWiA9IHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMubG9jYXRpb24uZ2V0UGxheWVyKCkuc3ByaXRlKTtcbiAgICAgIGlmICh0aGlzLmxvY2F0aW9uLmdldFBsYXllcigpLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBwbGF5ZXJaID49IG15Wikge1xuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWisxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5nZXRQbGF5ZXIoKS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBwbGF5ZXJaIDw9IG15Wikge1xuICAgICAgICB0aGlzLnNwcml0ZS5tb3ZlVG8ocGxheWVyWi0xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nQ291bnQgPCBwYXRoLmxlbmd0aCkge1xuICAgICAgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPCB0aGlzLmdldFgoKSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjTGVmdCk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gPiB0aGlzLmdldFgoKSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIDwgdGhpcy5nZXRZKCkpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY1VwKTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aFt0aGlzLmFuaW1hdGluZ0NvdW50XVswXSA+IHRoaXMuZ2V0WSgpKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQodGhpcy5ucGNEZWZhdWx0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy9jb25zb2xlLmxvZygnbXYnLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzBdIC0gdGhpcy53aWR0aC8yLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIC0gdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMV0pO1xuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgnbGVmdCcsIHBhdGhbdGhpcy5hbmltYXRpbmdDb3VudF1bMF0gLSB0aGlzLndpZHRoLzIsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykgfSk7XG4gICAgICB0aGlzLnNwcml0ZS5hbmltYXRlKCd0b3AnLCBwYXRoW3RoaXMuYW5pbWF0aW5nQ291bnRdWzFdIC0gdGhpcy5oZWlnaHQsIHtkdXJhdGlvbjoxMDAsIG9uQ2hhbmdlOiB0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcyksIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmdDb3VudCU0ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW0nLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKTtcbiAgICAgIH19KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgXG4gICAgICBpZiAocGF0aFtwYXRoLmxlbmd0aC0xXVswXSA8IHBhdGhbcGF0aC5sZW5ndGgtMl1bMF0pIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudCh0aGlzLm5wY0xlZnQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzBdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVswXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjUmlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdIDwgcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjVXApO1xuICAgICAgfSBlbHNlIGlmIChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdID4gcGF0aFtwYXRoLmxlbmd0aC0yXVsxXSkge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KHRoaXMubnBjRGVmYXVsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLnggPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdO1xuICAgICAgdGhpcy55ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcbiAgICAgIHRoaXMuc2NhbGVTcHJpdGVCeVlDb29yZChwYXRoW3BhdGgubGVuZ3RoLTFdWzFdKTtcbiAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ2xlZnQnLCBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdIC0gdGhpcy53aWR0aC8yLCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpIH0pO1xuICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0ZSgndG9wJywgcGF0aFtwYXRoLmxlbmd0aC0xXVsxXSAtIHRoaXMuaGVpZ2h0LCB7ZHVyYXRpb246MTAwLCBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpfSk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGp1c3RaUG9zaXRpb24oKTtcbiAgfVxuICBcbiAgd2Fsa1JvdXRlKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coJ3dhbGtyb3V0ZSBjYWxsYmFjaycsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGluZ0NvdW50ID0gMDtcbiAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGgsIGNhbGxiYWNrKTtcbiAgfVxuICBcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBzZWxmLmltcG9ydFNjcmlwdHMoc2VsZi5sb2NhdGlvbi5vcmlnaW4gKyAnL2pzL3RoaXJkLXBhcnR5L3BhdGhmaW5kaW5nLWJyb3dzZXIubWluLmpzJyk7XG4gIFxuICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEwMjQsIDc2OCk7XG4gIHNlbGYud2Fsa1BhdGggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgXG4gIHNlbGYuY2FuY2VsID0gZmFsc2U7XG4gIFxuICBcbiAgXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XG4gICAgXG4gICAgc3dpdGNoKGV2ZW50LmRhdGEuY29tbWFuZCkge1xuICAgICAgY2FzZSAnZ2VuZXJhdGVXYWxrUGF0aCc6XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHdhbGtwYXRoJyk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGguYmVnaW5QYXRoKCk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGgubW92ZVRvKGV2ZW50LmRhdGEucGF0aFswXS54LCBldmVudC5kYXRhLnBhdGhbMF0ueSk7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IGV2ZW50LmRhdGEucGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNlbGYud2Fsa1BhdGgubGluZVRvKGV2ZW50LmRhdGEucGF0aFtpXS54LCBldmVudC5kYXRhLnBhdGhbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi53YWxrUGF0aC5jbG9zZVBhdGgoKTtcbiAgICAgICAgc2VsZi53YWxrUGF0aC5maWxsKCk7XG4gICAgICAgIHNlbGYud2Fsa1BhdGguc2F2ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbmNlbFRocmVhZCc6XG4gICAgICAgIHNlbGYuY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIXNlbGYuY2FuY2VsKSB7XG4gICAgICAgICAgbGV0IHNjYWxlVyA9IE1hdGguY2VpbChldmVudC5kYXRhLndpZHRoL2V2ZW50LmRhdGEuZ3JpZHdpZHRoKjQpO1xuICAgICAgICAgIGxldCBzY2FsZUggPSBNYXRoLmNlaWwoZXZlbnQuZGF0YS5oZWlnaHQvZXZlbnQuZGF0YS5ncmlkaGVpZ2h0KTtcbiAgICAgICAgICBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKHNjYWxlVywgc2NhbGVIKTtcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBzY2FsZVc7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcz0wOyBzIDwgc2NhbGVIOyBzKyspIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYud2Fsa1BhdGguaXNQb2ludEluUGF0aChpKmV2ZW50LmRhdGEuZ3JpZHdpZHRoLCBzKmV2ZW50LmRhdGEuZ3JpZGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0cnVlJywgaSwgcyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5zZXRXYWxrYWJsZUF0KGksIHMsIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ZhbHNlJywgaSwgcyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5zZXRXYWxrYWJsZUF0KGksIHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGF0aGZpbmRlciA9IG5ldyBQRi5EaWprc3RyYUZpbmRlcih7XG4gICAgICAgICAgICBhbGxvd0RpYWdvbmFsOiB0cnVlLFxuICAgICAgICAgICAgZG9udENyb3NzQ29ybmVyczpmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCBvYmogPSBldmVudC5kYXRhO1xuICAgICAgICAgIG9iai5wYXRoID0gcGF0aGZpbmRlci5maW5kUGF0aChNYXRoLnJvdW5kKG9iai5zdGFydC54L29iai5ncmlkd2lkdGgpLCBNYXRoLnJvdW5kKG9iai5zdGFydC55L29iai5ncmlkaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChvYmouZW5kLngvb2JqLmdyaWR3aWR0aCksIE1hdGgucm91bmQob2JqLmVuZC55L29iai5ncmlkaGVpZ2h0KSwgZ3JpZCk7XG4gICAgICAgICAgcG9zdE1lc3NhZ2Uob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNhbmNlbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuIiwiaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4J1xuaW1wb3J0IHtFbmdpbmV9IGZyb20gJy4vRW5naW5lLmpzeCc7XG5pbXBvcnQge1dlYXBvbn0gZnJvbSAnLi9XZWFwb24uanN4J1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRW5naW5lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGlkLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfUExBWUVSO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmxvY2F0aW9uO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMubmFtZSA9ICd5b3UnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcInlvdSd2ZSBzZWVuIGJldHRlciBkYXlzLCBmb3Igc3VyZVwiO1xuXG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuaW1nWCA9IDQwO1xuICAgIHRoaXMuaW1nWSA9IDQwMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgIHRoaXMubWF4V2lkdGggPSAwO1xuICAgIHRoaXMuYW5pbWF0aW5nQ291bnQgPSAwO1xuICAgIHRoaXMuYnVtRGVmYXVsdCA9IG5ldyBJbWFnZSgpO1xuICAgIFxuICAgIHRoaXMuYW5pbUludGVydmFsO1xuICAgIFxuICAgIHRoaXMuc2hlZXQgPSB7Li4udGhpcy5jaGFyYWN0ZXJTaGVldH07XG4gICAgXG4gICAgdGhpcy5yZW1haW5pbmdNb3ZlcyA9IHRoaXMuY2hhcmFjdGVyU2hlZXQuc3RhdHMuc3BlZWQ7XG5cbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1RhcmdldGluZyA9IGZhbHNlO1xuICAgIHRoaXMudGFyZ2V0QWNxdWlyZWQgPSBudWxsO1xuICAgIFxuICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgdGhpcy50ZWFtID0gMTtcblxuICAgIGxldCBmaXN0ID0gbmV3IFdlYXBvbignYjFhZTUxYjEtYzliOS0xMWU5LWJjOTctMGU0OWYxZjhlNzdjJyk7XG4gICAgZmlzdC5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSwgZXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0b3coZmlzdCk7XG4gICAgICB0aGlzLmVxdWlwKGZpc3QpO1xuICAgIH0pO1xuICAgIGZpc3QubG9hZCgpO1xuICB9XG4gIFxuICBzdG93KGl0ZW0pIHtcbiAgICB0aGlzLmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICB9XG4gIFxuICBkcm9wKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52ZW50b3J5LnNwbGljZSh0aGlzLmludmVudG9yeS5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgfVxuICBcbiAgZXF1aXAoaXRlbSkge1xuICAgIGlmIChpdGVtLnR5cGUgIT0gR2xvYmFscy5PQkpFQ1RfVFlQRV9XRUFQT04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVxdWlwcGVkID0gaXRlbTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZXF1aXBwZWQnKS5zcmMgPSB0aGlzLmVxdWlwcGVkLmltZy5zcmM7XG4gIH1cbiAgXG4gIGdldEVxdWlwcGVkV2VhcG9uKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWlwcGVkO1xuICB9XG4gIFxuICBnZXRTbWVsbExhYmVsKHNtZWxsKSB7XG4gICAgbGV0IHNtZWxscyA9IFsnTk9YSU9VUycsICdESVNHVVNUSU5HJywgJ0ZPVUwnLCAnTk9UIEdSRUFUJywgJ01JTEQnXTtcbiAgICBsZXQgY29sb3JzID0gWycjZjU1NDQyJywgJyNmNWMyNDInLCAnI2VmZjU0MicsICcjYjlmNTQyJywgJyM0MmY1N2InXTtcbiAgICByZXR1cm4gW3NtZWxsc1tzbWVsbF0sIGNvbG9yc1tzbWVsbF1dO1xuICB9XG4gIFxuICBcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIHRoaXMuYnVtRGVmYXVsdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy5idW1EZWZhdWx0LndpZHRoO1xuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJ1bURlZmF1bHQuaGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuYnVtRGVmYXVsdC53aWR0aDtcblxuICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZmFicmljLkltYWdlKHRoaXMuYnVtRGVmYXVsdCwge1xuICAgICAgICBsZWZ0OiB0aGlzLmltZ1gsXG4gICAgICAgIHRvcDogdGhpcy5pbWdZLFxuICAgICAgICBzZWxlY3RhYmxlOmZhbHNlLFxuICAgICAgICBob3ZlckN1cnNvcjonYXJyb3cnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ByaXRlLm1ldGFkYXRhID0ge307XG4gICAgICB0aGlzLnNwcml0ZS5tZXRhZGF0YSA9IHRoaXM7XG4gICAgICB0aGlzLnNwcml0ZS5vbignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnByaW50KCdZb3Ugc2VlOiAnICsgR2xvYmFscy51Y3dvcmRzKHRoaXMubmFtZSkgKyAnLicpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5zcHJpdGUpO1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBwbGF5ZXIgc3ByaXRlJyk7XG4gICAgICB0aGlzLmJ1bURlZmF1bHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoR2xvYmFscy5FVkVOVF9QTEFZRVJfUkVBRFkpKTtcbiAgICB9O1xuICAgIHRoaXMuYnVtRGVmYXVsdC5zcmMgPSAnaW1nL3Blb3BsZS9idW1fZGVmYXVsdC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtTGVmdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuYnVtTGVmdC5zcmMgPSAnaW1nL3Blb3BsZS9idW1fbGVmdC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJ1bVJpZ2h0LnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9yaWdodC5wbmcnO1xuICAgIFxuICAgIHRoaXMuYnVtVXAgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJ1bVVwLnNyYyA9ICdpbWcvcGVvcGxlL2J1bV9iYWNrd2FyZHMucG5nJztcbiAgICBcbiAgICB0aGlzLndhbGtSaWdodEZyYW1lcyA9IFtdO1xuICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMgPSBbXTtcbiAgICB0aGlzLndhbGtVcEZyYW1lcyA9IFtdO1xuICAgIHRoaXMud2Fsa0Rvd25GcmFtZXMgPSBbXTtcbiAgICB0aGlzLnRhbGtGcmFtZXMgPSBbXTtcbiAgICB0aGlzLnB1bmNoTGVmdEZyYW1lcyA9IFtdO1xuICAgIHRoaXMucHVuY2hSaWdodEZyYW1lcyA9IFtdO1xuICAgIFxuICAgIGxldCBkYkluZm8gPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ2FuaW1hdGlvbnMvJyArIHRoaXMuaWQpO1xuICAgIGlmIChkYkluZm8pIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRiSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBHbG9iYWxzLkFOSU1BVElPTlNfRElSICsgZGJJbmZvW2ldLnVybDtcbiAgICAgICAgc3dpdGNoKGRiSW5mb1tpXS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnd2Fsa19sZWZ0JzpcbiAgICAgICAgICAgIHRoaXMud2Fsa0xlZnRGcmFtZXMucHVzaChpbWcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnd2Fsa19yaWdodCc6XG4gICAgICAgICAgICB0aGlzLndhbGtSaWdodEZyYW1lcy5wdXNoKGltZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd3YWxrX3VwJzpcbiAgICAgICAgICAgIHRoaXMud2Fsa1VwRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dhbGtfZG93bic6XG4gICAgICAgICAgICB0aGlzLndhbGtEb3duRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhbGsnOlxuICAgICAgICAgICAgdGhpcy50YWxrRnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3B1bmNoX2xlZnQnOlxuICAgICAgICAgICAgdGhpcy5wdW5jaExlZnRGcmFtZXMucHVzaChpbWcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHVuY2hfcmlnaHQnOlxuICAgICAgICAgICAgdGhpcy5wdW5jaFJpZ2h0RnJhbWVzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzYW1wbGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXNhbXBsZVwiLCB0aGlzKTtcbiAgICB0aGlzLnNjYWxlU3ByaXRlQnlZQ29vcmQodGhpcy5pbWdZICsgdGhpcy5oZWlnaHQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud2lkdGgpO1xuICAgIHRoaXMuaW1nWCA9IHRoaXMuaW1nWCArIE1hdGguYWJzKHRoaXMubWF4V2lkdGggLSB0aGlzLndpZHRoKTtcbiAgICB0aGlzLmltZ1kgPSB0aGlzLmltZ1kgKyBNYXRoLmFicyh0aGlzLm1heEhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICB0aGlzLnNwcml0ZS5zZXQoJ3RvcCcsIHRoaXMuaW1nWSk7XG4gICAgdGhpcy5zcHJpdGUuc2V0KCdsZWZ0JywgdGhpcy5pbWdYKTtcbiAgICB0aGlzLnggPSB0aGlzLmltZ1ggKyB0aGlzLndpZHRoLzI7XG4gICAgdGhpcy55ID0gdGhpcy5pbWdZICsgdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcHJpdGUuc2V0Q29vcmRzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy54LCB0aGlzLnkpO1xuICAgIFxuICB9XG4gIFxuICBjYWxjdWxhdGVTaXplRnJvbVlQb3MoeSkge1xuICAgIGxldCBwZXJjID0gKHktdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCkvKHRoaXMubG9jYXRpb24uaGVpZ2h0IC0gdGhpcy5sb2NhdGlvbi52YW5pc2hpbmdQb2ludCk7XG4gICAgbGV0IG5ld0ggPSAodGhpcy5tYXhIZWlnaHQgKiBwZXJjKTtcbiAgICBsZXQgbmV3VyA9ICh0aGlzLm1heFdpZHRoL3RoaXMubWF4SGVpZ2h0KSAqIG5ld0g7XG4gICAgcmV0dXJuIHt3Om5ld1csIGg6bmV3SH07XG4gIH1cbiAgXG4gIHNjYWxlU3ByaXRlQnlZQ29vcmQoeSkge1xuICAgIGxldCBvbGRIID0gdGhpcy5oZWlnaHQ7XG4gICAgbGV0IG9sZFcgPSB0aGlzLndpZHRoO1xuICAgIGlmICghb2xkSCkge1xuICAgICAgb2xkSCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoIW9sZFcpIHtcbiAgICAgIG9sZFcgPSB0aGlzLm1heFdpZHRoO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY3VsYXRlU2l6ZUZyb21ZUG9zKHkpO1xuICAgIHRoaXMuc3ByaXRlLnNjYWxlVG9IZWlnaHQoc2l6ZS5oKTtcbiAgICB0aGlzLnNwcml0ZS5zY2FsZVRvV2lkdGgoc2l6ZS53KTtcbiAgICB0aGlzLmhlaWdodCA9IHNpemUuaDtcbiAgICB0aGlzLndpZHRoID0gc2l6ZS53O1xuICB9XG4gIFxuICBtb3ZlVG9Gcm9udCgpIHtcbiAgICBcbiAgfVxuICBcbiAgYWRqdXN0WlBvc2l0aW9uKCkge1xuICAgIGxldCBteVogPSB0aGlzLmNhbnZhcy5nZXRPYmplY3RzKCkuaW5kZXhPZih0aGlzLnNwcml0ZSk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sb2NhdGlvbi5kZWNvci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEdsb2JhbHMuaXNJbnRlcnNlY3RpbmcodGhpcy5zcHJpdGUsIHRoaXMubG9jYXRpb24uZGVjb3JbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgZGVjb3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5zcHJpdGUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubG9jYXRpb24uZGVjb3JbaV0uZ2V0WSgpLCAndnMnLCB0aGlzLmdldFkoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGVjb3JaLCAndnMnLCBteVopO1xuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPD0gdGhpcy5nZXRZKCkpIHtcbiAgICAgICAgICB0aGlzLnNwcml0ZS5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICAvL3RoaXMuc3ByaXRlLm1vdmVUbyhkZWNvclorMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhdGlvbi5kZWNvcltpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBkZWNvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGRlY29yWi0xKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdhZnRlcicsIHRoaXMuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKHRoaXMuc3ByaXRlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubG9jYXRpb24uYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoR2xvYmFscy5pc0ludGVyc2VjdGluZyh0aGlzLnNwcml0ZSwgdGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKSkge1xuICAgICAgICBsZXQgYWN0b3JaID0gdGhpcy5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YodGhpcy5sb2NhdGlvbi5hY3RvcnNbaV0uc3ByaXRlKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24uYWN0b3JzW2ldLmdldFkoKSA8PSB0aGlzLmdldFkoKSAmJiBhY3RvclogPj0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWisxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2F0aW9uLmFjdG9yc1tpXS5nZXRZKCkgPiB0aGlzLmdldFkoKSAmJiBhY3RvclogPD0gbXlaKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGUubW92ZVRvKGFjdG9yWi0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFxuICBnZXRYKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCk7XG4gIH1cbiAgXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55KTtcbiAgfVxuXG4gIHVwZGF0ZU1vdmVtZW50UG9pbnRzRGlzcGxheSh2YWx1ZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlbWVudF9wb2ludHMnKS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfVxuICBcbiAgYXN5bmMgcnVuQXR0YWNrQW5pbWF0aW9uKGRpcikge1xuICAgIGxldCBmcmFtZXM7XG4gICAgc3dpdGNoKGRpcikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBmcmFtZXMgPSB0aGlzLnB1bmNoUmlnaHRGcmFtZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGZyYW1lcyA9IHRoaXMucHVuY2hMZWZ0RnJhbWVzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgICBcbiAgICB0aGlzLmFuaW1JbmRleCA9IDE7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1JbnRlcnZhbCk7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGZpZ2h0IGFuaW1hdGlvbicpO1xuICAgIHRoaXMuYW5pbUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYW5pbUluZGV4ID49IGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hbmltSW5kZXggPSAxO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYW5pbUludGVydmFsKTtcbiAgICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCkpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2ZpZ2h0aW5nIGZyYW1lJywgZnJhbWVzW3NlbGYuYW5pbUluZGV4XSk7XG4gICAgICB0aGlzLnNwcml0ZS5zZXRFbGVtZW50KGZyYW1lc1t0aGlzLmFuaW1JbmRleF0pO1xuICAgICAgdGhpcy5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB0aGlzLmFuaW1JbmRleCsrO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIFxuICBjYW5jZWxBbmltYXRpb25zKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltSW50ZXJ2YWwpO1xuICAgIHRoaXMuY3VycmVudFBhdGggPSBudWxsO1xuICAgIHRoaXMuYnVtRGVmYXVsdC5yZW1vdmVFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9OT0RFX1dBTEtFRCwgdGhpcy53YWxrQ2FsbGJhY2spO1xuICAgIHRoaXMucnVubmluZ1dhbGtMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa1VwID0gZmFsc2U7XG4gICAgdGhpcy5ydW5uaW5nV2Fsa0Rvd24gPSBmYWxzZTtcbiAgICB0aGlzLnJ1bm5pbmdUYWxrID0gZmFsc2U7XG4gICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICB9XG4gIFxuICBhbmltYXRlV2Fsayh4LCB5KSB7XG4gICAgdGhpcy5zY2FsZVNwcml0ZUJ5WUNvb3JkKHkpO1xuICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC54ICsgdGhpcy53aWR0aC8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zcHJpdGUuYUNvb3Jkcy5ibC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNNb3Zpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIHRoaXMuc3ByaXRlLmFuaW1hdGUoJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB5IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2FudmFzLnJlbmRlckFsbC5iaW5kKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueCArIHRoaXMud2lkdGgvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc3ByaXRlLmFDb29yZHMuYmwueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzTW92aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvdW50JTQgPT09IDAgJiYgdGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlbWVudFBvaW50c0Rpc3BsYXkodGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfTk9ERV9XQUxLRUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLmFkanVzdFpQb3NpdGlvbigpO1xuICB9XG4gIFxuICBjeWNsZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvdW50Kys7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbkNvdW50LCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCk7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ291bnQgPCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy5hbmltYXRlV2Fsayh0aGlzLmN1cnJlbnRQYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzBdLCB0aGlzLmN1cnJlbnRQYXRoW3RoaXMuYW5pbWF0aW9uQ291bnRdWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2VudGlyZSBwYXRoIHdhbGtlZCcpO1xuICAgICAgdGhpcy5idW1EZWZhdWx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KEdsb2JhbHMuRVZFTlRfUEFUSF9XQUxLRUQpKTtcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9ucygpO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgb3BlbkNvbnRhaW5lcihkYXRhKSB7XG4gICAgbGV0IGRlY29yUmVhZHkgPSB0aGlzLmFkanVzdFpQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIGRhdGEuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9ERUNPUl9SRUFEWSwgZGVjb3JSZWFkeSk7XG4gICAgdGhpcy5idW1EZWZhdWx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gbnVsbDtcbiAgICBsZXQgY29udGFpbmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcnlCYWNrZW5kKCdQVVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9vcGVuJykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfb3BlbjtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXQgaW1nIHRvJywgZGF0YS5pbWdVUkwpO1xuICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdkaW1nJywgZGF0YS5pbWcpO1xuICAgICAgZGF0YS5pbWcuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX0RFQ09SX1JFQURZLCBkZWNvclJlYWR5KTtcbiAgICAgIGRhdGEucmVuZGVyKCk7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBjbG9zZUNvbnRhaW5lcihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICB0aGlzLmJ1bURlZmF1bHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VELCB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ1BVVCcsIEdsb2JhbHMuQVBJX0RJUiArICdjb250YWluZXIvJyArIGRhdGEuaWQgKyAnL2Nsb3NlJykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5wcmludChlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRhaW5lckluZm8pIHtcbiAgICAgIGRhdGEuaW1nVVJMID0gY29udGFpbmVySW5mby5pbWdfY2xvc2VkO1xuICAgICAgY29uc29sZS5sb2coJ3NldCBpbWcgdG8nLCBkYXRhLmltZ1VSTCk7XG4gICAgICBkYXRhLm9wZW4gPSBmYWxzZTtcbiAgICAgIGRhdGEucmVuZGVyKCk7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBzZWFyY2hDb250YWluZXIoZGF0YSkge1xuICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5wYXJlbnQucXVlcnlCYWNrZW5kKCdHRVQnLCBHbG9iYWxzLkFQSV9ESVIgKyAnY29udGFpbmVyLycgKyBkYXRhLmlkICsgJy9jb250ZW50cycpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMucHJpbnQoZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGlmIChjb250YWluZXJJbmZvKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29udCcsIGNvbnRhaW5lckluZm8pO1xuICAgIH1cbiAgfVxuICBcbiAgdHJ5VG9PcGVuKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMubG9jYXRpb24uY29tYmF0T24pIHtcbiAgICAgIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrID0gdGhpcy5vcGVuQ29udGFpbmVyLmJpbmQodGhpcywgZGF0YSlcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfUEFUSF9XQUxLRUQsIHRoaXMud2Fsa0FjdGlvbkNhbGxiYWNrKTtcbiAgICAgIHRoaXMud2Fsa1RvT2JqZWN0KGRhdGEpO1xuICAgIH1cbiAgfVxuICBcbiAgdHJ5VG9DbG9zZShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IHRoaXMuY2xvc2VDb250YWluZXIuYmluZCh0aGlzLCBkYXRhKVxuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgICAgdGhpcy53YWxrVG9PYmplY3QoZGF0YSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnlUb1NlYXJjaChkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICB0aGlzLndhbGtBY3Rpb25DYWxsYmFjayA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIGxldCBjb250YWluZXJJbmZvID0gYXdhaXQgdGhpcy5xdWVyeUJhY2tlbmQoJ1BVVCcsIEdsb2JhbHMuQVBJX0RJUiArICdjb250YWluZXIvJyArIGRhdGEuaWQgKyAnL29wZW4nKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoY29udGFpbmVySW5mbykge1xuICAgICAgICAgICAgbGV0IGRlY29yUmVhZHkgPSB0aGlzLmFkanVzdFpQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgZGF0YS5pbWdVUkwgPSBjb250YWluZXJJbmZvLmltZ19vcGVuO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBpbWcgdG8nLCBkYXRhLmltZ1VSTCk7XG4gICAgICAgICAgICBkYXRhLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpbWcnLCBkYXRhLmltZyk7XG4gICAgICAgICAgICBkYXRhLmltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfREVDT1JfUkVBRFksIGRlY29yUmVhZHkpO1xuICAgICAgICAgICAgZGF0YS5yZW5kZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hDb250YWluZXIoZGF0YSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX1dBTEtFRCwgdGhpcy53YWxrQWN0aW9uQ2FsbGJhY2spO1xuICAgICAgdGhpcy53YWxrVG9PYmplY3QoZGF0YSk7XG4gICAgfVxuICB9XG4gIFxuICBjbGlja2VkR3JvdW5kUGF0aFJlc3VsdHMocGF0aCkge1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5sb2NhdGlvbi5jb21iYXRPbikge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmNhbnZhcy5yZW1vdmUodGhpcy5sb2NhdGlvbi5jb21iYXQubW92ZUxpbmUpO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlTGluZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24uY2FudmFzLnJlbW92ZSh0aGlzLmxvY2F0aW9uLmNvbWJhdC5tb3ZlVGV4dCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24uY29tYmF0Lm1vdmVUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc01vdmluZyB8fCBNYXRoLmNlaWwocGF0aC5sZW5ndGgvNCkgPiB0aGlzLnJlbWFpbmluZ01vdmVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhdGhbaV1bMF0gKj0gR2xvYmFscy5HUklEX1NRVUFSRV9XSURUSDtcbiAgICAgICAgcGF0aFtpXVsxXSAqPSBHbG9iYWxzLkdSSURfU1FVQVJFX0hFSUdIVDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdnb3QgcGF0aCcsIHBhdGgpO1xuICAgICAgdGhpcy53YWxrUm91dGUocGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVtRGVmYXVsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1BBVEhfV0FMS0VEKSk7XG4gICAgfVxuICB9XG4gIFxuICB3YWxrVG9PYmplY3QodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uLmNvbWJhdE9uKSB7XG4gICAgICBsZXQgc3RhcnQgPSB7fTtcbiAgICAgIHN0YXJ0LnggPSB0aGlzLmdldFgoKTtcbiAgICAgIHN0YXJ0LnkgPSB0aGlzLmdldFkoKTtcbiAgICAgIGxldCBlbmQgPSB7fTtcbiAgICAgIGVuZC54ID0gdGFyZ2V0LmdldFgoKTtcbiAgICAgIGVuZC55ID0gdGFyZ2V0LmdldFkoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQnLCBlbmQueCwgZW5kLnkpO1xuICAgICAgaWYgKHRoaXMubG9jYXRpb24ud2Fsa1BhdGguaXNQb2ludEluUGF0aChlbmQueCwgZW5kLnkpKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvbW1hbmQgPSAnd2Fsa1RvT2JqZWN0JztcbiAgICAgICAgb2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIG9iai5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24uZmluZFBhdGgob2JqKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBydW5XYWxrQW5pbWF0aW9uKGRpcikge1xuICAgIGxldCBmcmFtZXM7XG4gICAgc3dpdGNoKGRpcikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLnJ1bm5pbmdSaWdodFdhbGsgPSB0cnVlO1xuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtSaWdodEZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5ydW5uaW5nTGVmdFdhbGsgPSB0cnVlO1xuICAgICAgICBmcmFtZXMgPSB0aGlzLndhbGtMZWZ0RnJhbWVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgdGhpcy5ydW5uaW5nVXBXYWxrID0gdHJ1ZTtcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrVXBGcmFtZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgIHRoaXMucnVubmluZ0Rvd25XYWxrID0gdHJ1ZTtcbiAgICAgICAgZnJhbWVzID0gdGhpcy53YWxrRG93bkZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0YWxrJzpcbiAgICAgICAgdGhpcy5ydW5uaW5nVGFsayA9IHRydWU7XG4gICAgICAgIGZyYW1lcyA9IHRoaXMudGFsa0ZyYW1lcztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYW5pbUludGVydmFsKTtcbiAgICB0aGlzLmFuaW1JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmFuaW1JbmRleCA+PSBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYW5pbUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ByaXRlLnNldEVsZW1lbnQoZnJhbWVzW3RoaXMuYW5pbUluZGV4XSk7XG4gICAgICB0aGlzLmFuaW1JbmRleCsrO1xuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgdGhpcy5zcHJpdGUuc2V0RWxlbWVudChmcmFtZXNbdGhpcy5hbmltSW5kZXhdKTtcbiAgICB0aGlzLmFuaW1JbmRleCsrO1xuICB9XG4gIFxuICB3YWxrUm91dGUocGF0aCkge1xuICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0aW9uQ291bnQgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhdGggPSBwYXRoO1xuICAgIHRoaXMud2Fsa0NhbGxiYWNrID0gdGhpcy5jeWNsZUFuaW1hdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QQVRIX05PREVfV0FMS0VELCB0aGlzLndhbGtDYWxsYmFjayk7XG4gICAgXG4gICAgbGV0IHggPSBwYXRoW3BhdGgubGVuZ3RoLTFdWzBdO1xuICAgIGxldCB5ID0gcGF0aFtwYXRoLmxlbmd0aC0xXVsxXTtcbiAgICBcbiAgICBpZiAoeCA8IHRoaXMuZ2V0WCgpKSB7XG4gICAgICB0aGlzLnJ1bldhbGtBbmltYXRpb24oJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHggPiB0aGlzLmdldFgoKSkge1xuICAgICAgdGhpcy5ydW5XYWxrQW5pbWF0aW9uKCdyaWdodCcpO1xuICAgIH0gZWxzZSBpZiAoeSA8IHRoaXMuZ2V0WSgpKSB7XG4gICAgICB0aGlzLnJ1bldhbGtBbmltYXRpb24oJ3VwJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gdGhpcy5nZXRZKCkpIHtcbiAgICAgIHRoaXMucnVuV2Fsa0FuaW1hdGlvbignZG93bicpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGVXYWxrKHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMF0sIHBhdGhbdGhpcy5hbmltYXRpb25Db3VudF1bMV0pO1xuICB9XG5cbn0iLCJpbXBvcnQge0dsb2JhbHN9IGZyb20gJy4vR2xvYmFscy5qc3gnXG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9FbmdpbmUuanN4JztcblxuZXhwb3J0IGNsYXNzIFdlYXBvbiBleHRlbmRzIEVuZ2luZSB7XG4gIFxuICBcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IEdsb2JhbHMuT0JKRUNUX1RZUEVfV0VBUE9OO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgdGhpcy5pY29uX3VybCA9ICcnO1xuICAgIHRoaXMubWVsZWUgPSB0cnVlO1xuICAgIHRoaXMubmFtZSA9ICd3ZWFwb24nO1xuICAgIHRoaXMuc3BlZWQgPSAxO1xuICAgIHRoaXMucmFuZ2UgPSAxO1xuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgbGV0IHdlYXBvbkluZm8gPSBhd2FpdCB0aGlzLnF1ZXJ5QmFja2VuZCgnR0VUJywgR2xvYmFscy5BUElfRElSICsgJ3dlYXBvbi8nICsgdGhpcy5pZCk7XG4gICAgaWYgKHdlYXBvbkluZm8pIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWFwJywgd2VhcG9uSW5mbyk7XG4gICAgICB0aGlzLmRhbWFnZSA9IHdlYXBvbkluZm8uZGFtYWdlO1xuICAgICAgdGhpcy5pY29uX3VybCA9IHdlYXBvbkluZm8uaWNvbl91cmw7XG4gICAgICB0aGlzLm1lbGVlID0gd2VhcG9uSW5mby5tZWxlZTtcbiAgICAgIHRoaXMubmFtZSA9IHdlYXBvbkluZm8ubmFtZTtcbiAgICAgIHRoaXMuc3BlZWQgPSB3ZWFwb25JbmZvLnNwZWVkO1xuICAgICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmltZy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChHbG9iYWxzLkVWRU5UX1dFQVBPTl9SRUFEWSkpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuaWNvbl91cmw7XG4gICAgfVxuICB9XG4gIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYldvcmtlciB7XG4gICAgY29uc3RydWN0b3Iod29ya2VyKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB3b3JrZXIudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFsnKCcrY29kZSsnKSgpJ10pO1xuICAgICAgICByZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICB9XG59XG5cbiIsIlxuaW1wb3J0IHtHbG9iYWxzfSBmcm9tICcuL0dsb2JhbHMuanN4JztcbmltcG9ydCB7RW5naW5lfSBmcm9tICcuL0VuZ2luZS5qc3gnXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi9QbGF5ZXIuanN4J1xuaW1wb3J0IHtBcmVhfSBmcm9tICcuL0FyZWEuanN4J1xuaW1wb3J0IHtEZWNvcn0gZnJvbSAnLi9EZWNvci5qc3gnXG5pbXBvcnQge05QQ30gZnJvbSAnLi9OUEMuanN4J1xuXG5sZXQgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xuXG5mdW5jdGlvbiBjYWxsQ2hhcmFjdGVyU2hlZXQoKSB7XG4gIGVuZ2luZS5zaG93Q2hhcmFjdGVyU2hlZXQoKTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXJFbmRUdXJuKCkge1xuICBlbmdpbmUuZW5kQ29tYmF0VHVybigpO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIC8vbmV3IEdsb2JhbHMoKTtcbiAgXG4gIGxldCBzdGFydEFyZWFJRCA9ICcyOWM5NDcwOC1jNDRjLTExZTktYmM5Ny0wZTQ5ZjFmOGU3N2MnO1xuICBsZXQgdGVtcFBsYXllcklEID0gJzQzNTU0MDE4LWM0NGItMTFlOS1iYzk3LTBlNDlmMWY4ZTc3Yyc7XG4gIFxuICBlbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0ZW1wUGxheWVySUQsIGVuZ2luZS5jYW52YXMpO1xuICBcbiAgZW5naW5lLnBsYXllci5idW1EZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoR2xvYmFscy5FVkVOVF9QTEFZRVJfUkVBRFksIGV2ZW50ID0gYXN5bmMoKSA9PiB7XG4gICAgbGV0IGRiSW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBzdGFydEFyZWFJRCk7XG4gICAgaWYgKGRiSW5mbykge1xuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhID0gbmV3IEFyZWEoc3RhcnRBcmVhSUQsIGVuZ2luZS5jYW52YXMpO1xuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmFjdG9ycy5wdXNoKGVuZ2luZS5wbGF5ZXIpO1xuICAgICAgZW5naW5lLnBsYXllci5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcbiAgICAgIFxuICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmxvYWRlckltZy5hZGRFdmVudExpc3RlbmVyKEdsb2JhbHMuRVZFTlRfQVJFQV9SRUFEWSwgZXZlbnQgPSBhc3luYygpID0+IHsgIFxuICAgICAgICBlbmdpbmUucGxheWVyLnJlc2FtcGxlKCk7XG4gICAgICAgIGVuZ2luZS5wbGF5ZXIuc3ByaXRlLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlY29ySW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBlbmdpbmUuY3VycmVudEFyZWEuaWQgKyAnL2RlY29yJyk7XG4gICAgICAgIGlmIChkZWNvckluZm8pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVjb3InLCBkZWNvckluZm8pO1xuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRlY29ySW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY29yID0gbmV3IERlY29yKGRlY29ySW5mb1tpXSwgZW5naW5lLmNhbnZhcyk7XG4gICAgICAgICAgICBkZWNvci5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcbiAgICAgICAgICAgIGRlY29yLnJlbmRlcigpO1xuICAgICAgICAgICAgZW5naW5lLmN1cnJlbnRBcmVhLmRlY29yLnB1c2goZGVjb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbnBjSW5mbyA9IGF3YWl0IGVuZ2luZS5xdWVyeUJhY2tlbmQoJ0dFVCcsIEdsb2JhbHMuQVBJX0RJUiArICdhcmVhLycgKyBlbmdpbmUuY3VycmVudEFyZWEuaWQgKyAnL25wY3MnKTtcbiAgICAgICAgICBpZiAobnBjSW5mbykge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbnBjSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgbnBjID0gbmV3IE5QQyhucGNJbmZvW2ldLmlkLCBlbmdpbmUuY2FudmFzKTtcbiAgICAgICAgICAgICAgbnBjLm5hbWUgPSBucGNJbmZvW2ldLm5hbWU7XG4gICAgICAgICAgICAgIG5wYy5kZXNjcmlwdGlvbiA9IG5wY0luZm9baV0uZGVzY3I7XG4gICAgICAgICAgICAgIG5wYy50ZWFtID0gbnBjSW5mb1tpXS50ZWFtO1xuICAgICAgICAgICAgICBucGMuaW1nWCA9IG5wY0luZm9baV0ueDtcbiAgICAgICAgICAgICAgbnBjLmltZ1kgPSBucGNJbmZvW2ldLnk7XG4gICAgICAgICAgICAgIG5wYy5sb2NhdGlvbiA9IGVuZ2luZS5jdXJyZW50QXJlYTtcbiAgICAgICAgICAgICAgbnBjLm5wY0RlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihHbG9iYWxzLkVWRU5UX05QQ19SRUFEWSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3VycmVudEFyZWEuYWN0b3JzLnB1c2gobnBjKTtcbiAgICAgICAgICAgICAgICBucGMucmVzYW1wbGUoKTtcbiAgICAgICAgICAgICAgICBucGMuc3ByaXRlLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICAgICAgICAgIC8vZW5naW5lLmN1cnJlbnRBcmVhLmVudGVyQ29tYmF0KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBucGMucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuZ2luZS5wbGF5ZXIuc3ByaXRlLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVuZ2luZS5jdXJyZW50QXJlYS5yZW5kZXJCYWNrZ3JvdW5kKCk7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1jYW52YXMnKS5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG9iamVjdEZvdW5kID0gZmFsc2U7XG4gICAgICAgIGxldCBjbGlja1BvaW50ID0gbmV3IGZhYnJpYy5Qb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgbGV0IGNsaWNrZWRPYmplY3RzID0gW107XG4gICAgICAgIGVuZ2luZS5jYW52YXMuZm9yRWFjaE9iamVjdChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgaWYgKG9iai5jb250YWluc1BvaW50KGNsaWNrUG9pbnQpKSB7XG4gICAgICAgICAgICBjbGlja2VkT2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2xpY2tlZE9iamVjdHMuc29ydCgoYSwgYikgPT4gKGVuZ2luZS5jYW52YXMuZ2V0T2JqZWN0cygpLmluZGV4T2YoYSkgPCBlbmdpbmUuY2FudmFzLmdldE9iamVjdHMoKS5pbmRleE9mKGIpKSA/IDEgOiAtMSlcbiAgICAgICAgZW5naW5lLnJlbmRlclJpZ2h0Q2xpY2tPcHRpb25zKGV2ZW50LCBjbGlja2VkT2JqZWN0c1swXSk7XG4gICAgICB9XG4gICAgICBlbmdpbmUucHJpbnQoJ1lvdSBlbnRlciA8Yj4nICsgZGJJbmZvLm5hbWUudG9Mb3dlckNhc2UoKSArICc8L2I+LicpO1xuICAgICAgZW5naW5lLnByaW50KGRiSW5mby5kZXNjcmlwdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbiAgZW5naW5lLnBsYXllci5yZW5kZXIoKTtcbn0iXX0=
