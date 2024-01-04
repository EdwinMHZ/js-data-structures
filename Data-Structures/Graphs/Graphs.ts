/*
    A graph data structure consists of
    a finite (and possibly mutable) set
    of vertices or nodes or points,
    together with a set of unordered pairs
    of these vertices for an undirected 
    graph or a set of ordered pairs for a
    directed graph.
    Basically we have NODES + CONNECTIONS.

    Essential graph terms:
    - Vertex: a node
    - Edge: connection between nodes
    - Weighted / Unweighted: values assigned to distances between vertices
    - Directed / Undirected: directions assigned to distanced between vertices
    
    We can store graphs using ADJACENCY MATRIX or ADJACENCY LIST
    TIME COMPLEXITY
    |V| - Number of vertices
    |E| - Number of edges

    | OPERATION |   | ADJACENCY LIST |  | ADJACENCY MATRIX |
      Add vertex        O(1)                O(|V^2|)
      Add edge          O(1)                O(1)
      Remove vertex     O(|V| + |E|)        O(|V^2|)
      Remove edge       O(|E|)              O(1)
      Query             O(|V| + |E|)        O(1)
      Storage           O(|V| + |E|)        O(|V^2|)
*/

class Graph {
    adjacencyList: Map<string, Array<string>>;
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1: string, vertex2: string) {
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1);
    }
    removeEdge(vertex1: string, vertex2: string) {
        let res: string[] = this.adjacencyList.get(vertex1)!.filter(v => v != vertex2);
        this.adjacencyList.set(vertex1, res);
        res = this.adjacencyList.get(vertex2)!.filter(v => v != vertex1);
        this.adjacencyList.set(vertex2, res);
    }
    removeVertex(vertex: string) {
        while(this.adjacencyList.get(vertex)!.length) {
            const adjacentVertex = this.adjacencyList.get(vertex)!.pop();
            this.removeEdge(adjacentVertex!, vertex);
        }
        this.adjacencyList.delete(vertex);
    }
    depthFirstRecursive(vertex: string) {
        const result: string[] = [];
        const visited = new Map<string, boolean>();
        const dfs = (v: string) => {
            if(!v) {
                return;
            }
            visited.set(v, true);
            result.push(v);
            this.adjacencyList.get(v)?.forEach(neighbour => {
                if(!visited.has(neighbour)) {
                    return dfs(neighbour);
                }
            })
        }
        dfs(vertex);
        
        return result;
    }
    depthFirstIterative(vertex: string) {
        const result: string[] = [];
        const visited = new Map<string, boolean>();
        const stack = [];
        stack.push(vertex);
        while(stack.length > 0) {
            const v = stack.pop();
            if(!visited.has(v!)) {
                visited.set(v!, true);
                result.push(v!);
                stack.push(...this.adjacencyList.get(v!)!)
            }
        }
        return result;
    }
    breadthFirst(vertex: string) {
        const result: string[] = [];
        const visited = new Map<string, boolean>();
        const queue = [];
        queue.push(vertex);
        while(queue.length > 0) {
            const v = queue.shift();
            if(!visited.has(v!)) {
                visited.set(v!, true);
                result.push(v!);
                queue.push(...this.adjacencyList.get(v!)!)
            }
        }
        return result;
    }
}