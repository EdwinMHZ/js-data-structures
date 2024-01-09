
interface Edge {
    vertex: string;
    weight: number; 
}

interface QueueElement {
    value: string;
    priority: number;
}

// Time complexity O(n*log(n))
// This is not the best implementation of the priority queue
// It's better to use the Priority Queue built in the Priority Queue folder
class PriorityQueue {
    values: Array<QueueElement>
    constructor() {
        this.values = [];
    }
    enqueue(value: string, priority: number) {
        this.values.push({value, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    adjacencyList: Map<string, Array<Edge>>;
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1: string, vertex2: string, weight: number) {
        this.adjacencyList.get(vertex1)!.push({ vertex: vertex2, weight });
        this.adjacencyList.get(vertex2)!.push({ vertex: vertex1, weight });
    }
    shortestPath(startingVertex: string, endingVertex: string) {
        const queue = new PriorityQueue();
        const previous = new Map();
        const distances = new Map();
        this.adjacencyList.forEach((_, vertex) => {
            if(vertex === startingVertex) {
                distances.set(vertex, 0);
                queue.enqueue(vertex, 0);
            } else {
                distances.set(vertex, Infinity);
                queue.enqueue(vertex, Infinity);
            }
            previous.set(vertex, null);
        });
        const path: string[] = [];
        while(queue.values.length > 0) {
            const currentVertex = queue.dequeue();
            if(currentVertex?.value === endingVertex) {
                let vertex = currentVertex.value;
                while(previous.get(vertex)) {
                    path.push(vertex);
                    vertex = previous.get(vertex);
                } 
                break;
            } else {
                this.adjacencyList.get(currentVertex?.value!)?.forEach((edge) => {
                    const distance = currentVertex?.priority! + edge.weight;
                    if(distance < distances.get(edge.vertex)) {
                        distances.set(edge.vertex, distance);
                        previous.set(edge.vertex, currentVertex?.value );
                        queue.enqueue(edge.vertex, distance);
                    }
                })
            }
        }
        return path.concat(startingVertex).reverse();

    }
}

const g = new WeightedGraph()
g.addVertex("a")
g.addVertex("b")
g.addVertex("c")
g.addVertex("d")
g.addVertex("e")
g.addVertex("f")

g.addEdge("a", "b", 4)
g.addEdge("a", "c", 2)
g.addEdge("b", "e", 3)
g.addEdge("c", "d", 2)
g.addEdge("c", "f", 4)
g.addEdge("d", "f", 1)
g.addEdge("d", "e", 3)
g.addEdge("f", "e", 1)

console.log(g.adjacencyList)
console.log(g.shortestPath("a", "e"))