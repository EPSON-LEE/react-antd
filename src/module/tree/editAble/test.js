var data = [{
  key: '1',
  children: [{
    key: '1-1',
    children: [{
      key: '1-1-1'
    }]
  }]
}, {
  key: '2'
}]

var target = '1-1'

var start = new Date().getTime()
function loopData(data, target) {
  if(Array.isArray(data)) {
    data.forEach(function(item) {
      if (item.key === target) {
        if(!item.children) {
          item.children = []
        }
        item.children.push({
          key: Date.parse(new Date())
        })
      } else {
        loopData(item.children, target)
      }
    })
  }
  return data
}
console.log(loopData(data, target))
var end = new Date().getTime()
console.log('loopData:', end - start)

var start = new Date().getTime()
function loopDataEfficient (data, target) {
  var id
  if(Array.isArray(data)) {
    for(let i = 0; i < data.length; i++) {
      if(data[i].key === target) {
        id = data[i].key
        if(!data[i].children) {
          data[i].children = []
        }
        data[i].children.push({
          key: Date.parse(new Date())
        })
      } else {
        loopDataEfficient (data[i].children, target)
      }
    }
  }
  return data
}
console.log(loopDataEfficient (data, target))
var end = new Date().getTime()
console.log('loopDataEfficient:', end - start)