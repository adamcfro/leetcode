def countNegatives(grid):
    """Given a m x n matrix grid which is sorted in non-increasing order both 
    row-wise and column-wise, return the number of negative numbers in grid.

    Args:
        grid (list[[int]]): A 2D list of integers.

    Returns:
        int: Returns a count of negative numbers in the matrix.
    """
    count = 0
    i = 0
    j = len(grid) - 1
    while j >= 0 and i < len(grid[0]):
        if grid[j][i] < 0:
            count += len(grid[0]) - i
            j -= 1
        else:
            i += 1
    return count
