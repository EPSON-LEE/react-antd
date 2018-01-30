var data = [
  {
    "groupId": 2,
    "name": "未分组",
    "parentId": 8
  },
  {
    "groupId": 6,
    "name": "未分组",
    "parentId": 8
  },
  {
    "groupId": 7,
    "name": "未分组",
    "parentId": null
  },
  {
    "groupId": 8,
    "name": "DFSFSDAF",
    "parentId": 7
  },
  {
    "groupId": "9",
    "name": "未分组",
    "parentId": 8
  }
]

var tree = function(data, root) {
  var r, o = {};
  debugger
  data.forEach(function (a) {
      a.children = o[a.groupId] && o[a.groupId].children;
      o[a.groupId] = a;
      if (a.parentId === root) {
          r = a;
      } else {
          o[a.parentId] = o[a.parentId] || {};
          o[a.parentId].children = o[a.parentId].children || [];
          o[a.parentId].children.push(a);
      }
  });
  return r;
}

console.log(tree(data, null))