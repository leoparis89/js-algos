const Queue = require('./utils/Queue'); // TODO use priority queue
const {printPath, printInfo} = require('./utils/printInfo');

let adjList = [
  undefined,
  [{id: 4, cost: 3}, {id: 5, cost: 8}, {id: 7, cost: 1}],
  [],
  undefined,
  [{id: 7, cost: 2}],
  [{id: 2, cost: 1}],
  undefined,
  []
];

let doDijkstra = function(graph, start, goal) {
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
      const {cost, id} = v;
      const dist = bfsInfo[u].distance + cost;

      if (bfsInfo[id].distance === null || dist < bfsInfo[id].distance) {
        bfsInfo[id].predecessor = u;
        bfsInfo[id].distance = dist;
        queue.enqueue(id);
      }
    }
  }

  return bfsInfo;
};

let bfsInfo = doDijkstra(adjList, 1, 7);

printInfo(bfsInfo);
printPath(bfsInfo, 7);
