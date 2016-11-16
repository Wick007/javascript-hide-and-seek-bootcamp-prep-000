function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}

/*function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}*/
