/* A Queue object for queue-like functionality over JavaScript arrays. */
const Queue = function() {
  this.items = [];
};
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

let adjList = [
  undefined,
  [2, 3],
  [],
  [4],
  []
];

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
let doBFS = function(graph, source) {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    if (graph[i]) bfsInfo[i] = { distance: null, predecessor: null };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    for (let v of graph[u]) {
      if (bfsInfo[v].distance === null) {
        bfsInfo[v].predecessor = u;
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        queue.enqueue(v);
      }
    }
  }

  return bfsInfo;
};

let bfsInfo = doBFS(adjList, 4);

printInfo(bfsInfo);
getTreeLength(bfsInfo);

const lengths = [];
for (let i = 0; i < adjList.length; i++) {

  if (adjList[i]) {
    lengths.push(
        getTreeLength(doBFS(adjList, i))
    )
  }
}
console.log(lengths);
console.log('max length in graph is:', Math.max(...lengths));


function printInfo(info) {
  for (let i = 0; i < info.length; i++) {
    if (info[i]) {
      console.log(
          `vertex ${i}: distance = ${info[i].distance}, predecessor = ${info[i].predecessor}`
      )
    }
  }
}

function getTreeLength(info) {
  let length = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i] && info[i].distance > length) {
      length = info[i].distance;
    }
  }

  length = length + 1;
  console.log(`tree has length: ${length}`);
  return length ;
}
