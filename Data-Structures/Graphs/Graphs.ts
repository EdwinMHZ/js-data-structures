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