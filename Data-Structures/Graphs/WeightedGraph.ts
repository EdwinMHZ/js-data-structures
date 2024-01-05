interface Edge {
    vertex: string;
    weight: number; 
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
}