def row_and_maximum_ones(mat):
    """Given a m x n binary matrix mat, find the 0-indexed position of the row 
    that contains the maximum count of ones, and the number of ones in that row.
    In case there are multiple rows that have the maximum count of ones, the 
    row with the smallest row number should be selected. Return an array 
    containing the index of the row, and the number of ones in it.

    Args:
        mat (list[list[int]]): A 2D list of integers consisting of 0's and 1's.

    Returns:
        list[int]: Returns a list with an index and count of maximum 1's in a 
        row.
    """
    res = [0, 0]
    count = 0
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            if mat[i][j] == 1:
                count += 1
                if count > res[1]:
                    res[1] = count
                    res[0] = i
        count = 0
    return res
