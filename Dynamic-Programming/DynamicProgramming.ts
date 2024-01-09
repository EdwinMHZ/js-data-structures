/*
    A method for solving complex problem by
    breaking it down into a collection of simpler
    subproblems, solving each of those subproblems
    just once and storing their solution.

    IT ONLY WORKS ON PROBLEMS WITH:
    -OPTIMAL SUBSTRUCTURE: A problem is to have optimal
    substructure if an optimal solution can be constructed
    from optimal solutions of its subproblems.
    -OVERLAPPING SUBPROBLEMS: A problem is said to have
    overlapping subproblems if it can be broken down
    into subproblems which are reused several times.
    Example: Fibonnaci Sequence
*/

// Recursion
// Time complexity O(2^n)
function fibRecursive(n:number) {
    if(n <= 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}


// Recursion + Memoization
// Time complexity 0(n)
function fibMemo(n: number, memo: number[] = []) {
    if(memo[n] !== undefined) {
        return memo[n];
    }
    if(n <= 2) {
        return 1;
    }
    const res: number = fib(n - 1, memo)! + fib(n- 2, memo)!;
    memo[n] = res;
    return res;
}

// Tabulated Approach
// Time complexity 0(n)
function fibTabulated(n:number) {
    if (n <= 2) {
        return 1;
    }
    const fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i -2];
    }

    return fibNums[n];
}
