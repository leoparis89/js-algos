module.exports.printInfo = function printInfo(info) {
  for (let i = 0; i < info.length; i++) {
    if (info[i]) {
      console.log(
          `vertex ${i}: distance = ${info[i].distance}, predecessor = ${info[i].predecessor}`
      )
    }
  }
};

module.exports.getTreeLength = function getTreeLength(info) {
  let length = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i] && info[i].distance > length) {
      length = info[i].distance;
    }
  }

  length = length + 1;
  console.log(`tree has length: ${length}`);
  return length ;
};

module.exports.printPath = function printPath(bfsInfo, goal) {
  let tmp = goal;
  const path = [];

  while (tmp) {
    path.push(tmp);
    tmp = bfsInfo[tmp].predecessor;
  }

  path.reverse();
  console.log(path);

};
