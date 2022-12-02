// breadth first traverse
let graph
const nodes = 5
let visited = new Array(nodes)
const createGraph = (nodes)=>{
  graph = new Array(nodes)
  for(let i=0;i<graph.length;i++){
    graph[i]=new Array(nodes)
    for(let i=0;i<graph.length;i++){
      for(let j=0;j<graph[i].length;i++) {
        graph[i][j]=0
      }
    }
  }
}

const addEdge = (a,b) =>{
  for(let i=0;i<graph.length;i++) {
    for(let j=0;j<graph[i].length;j++) {
      if(i===a && j===b) {
        graph[i][j]=1
        graph[j][i]=1
      }
    }
  }
}

const breadthFirstSearch = (node) => {
  const queue= []
  for(let i=0;i<visited.length;i++) {
    visited[i] = false
    }
    visited[node]=true;
    queue.push(node)

    while(queue.length) {
      let currentNode = queue.shift()
      console.log(`visiting ${currentNode}`)
      for(let j=0;j<graph[currentNode].length;j++) {
        if(graph[currentNode][j]===1 && visited[j]===false){
          visited[j]=true
          queue.push(j)
        }
      }

    }

}