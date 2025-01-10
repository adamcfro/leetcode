def satisfiesConditions(grid):
    """You are given a 2D matrix grid of size m x n. You need to check if each 
    cell grid[i][j] is:
    • Equal to the cell below it, i.e. grid[i][j] == grid[i + 1][j] (if it 
    exists).
    • Different from the cell to its right, i.e. grid[i][j] != grid[i][j + 1] 
    (if it exists).
    Return true if all the cells satisfy these conditions, otherwise, return 
    false.

    Args:
        grid (list[[int]]): A 2D list of integers.

    Returns:
        Boolean: Returns True if matrix satisfies conditions.
    """
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if i > 0 and grid[i][j] != grid[i - 1][j] or j > 0 and grid[i][j] == grid[i][j - 1]:
                return False
    return True
