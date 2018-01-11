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
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
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
    bfsInfo[i] = {
      distance: null,
      predecessor: null };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  // Traverse the graph
  // As long as the queue is not empty:
  //  Repeatedly dequeue a vertex u from the queue.
  //
  //  For each neighbor v of u that has not been visited:
  //     Set distance to 1 greater than u's distance
  //     Set predecessor to u
  //     Enqueue v

  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    for (v of graph[u]) {
      if (bfsInfo[v].distance === null) {
        bfsInfo[v].predecessor = u;
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        queue.enqueue(v);
      }
    }
  }

  return bfsInfo;
};

var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
  console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
