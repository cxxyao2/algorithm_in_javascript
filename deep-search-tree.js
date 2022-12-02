// deepth first traverse
function traverse(p_element, p_callback) {
  p_callback(p_element)
  var list = p_element.children
  for (var i = 0; i < list.length; i++) {
    traverse(list[i], p_callback)
  }
}



function exeTraverse(id) {
  const div1 = document.getElementById(id)
  div1.nextSibling

  traverse(div1, (arg) => console.log(arg.id))
}
