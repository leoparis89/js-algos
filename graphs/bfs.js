const Queue = require('./utils/Queue');
const {printPath, printInfo} = require('./utils/printInfo');

let adjList = [
  undefined,
  [4, 5],
  [],
  undefined,
  [7],
  [2],
  undefined,
  []
];

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} start - The index of the start vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
let doBFS = function(graph, start, goal) {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    if (graph[i]) bfsInfo[i] = { distance: null, predecessor: null };
  }

  bfsInfo[start].distance = 0;

  let queue = new Queue();
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    let u = queue.dequeue();

    if (u === goal) break;

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

let bfsInfo = doBFS(adjList, 1, 7);

printInfo(bfsInfo);
printPath(bfsInfo, 7);
