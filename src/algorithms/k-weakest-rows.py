def kWeakestRows(mat, k):
    """You are given an m x n binary matrix mat of 1's (representing soldiers) 
    and 0's (representing civilians). The soldiers are positioned in front of 
    the civilians. That is, all the 1's will appear to the left of all the 0's 
    in each row. A row i is weaker than a row j if one of the following is true:
    • The number of soldiers in row i is less than the number of soldiers in 
    row j.
    • Both rows have the same number of soldiers and i < j.
    Return the indices of the k weakest rows in the matrix ordered from weakest 
    to strongest.

    Args:
        mat (list[[int]]): A 2D list of integers.
        k (int): A positive integer.

    Returns:
        list[int]: Returns a list of indices.
    """
    res = []
    rows = [0] * len(mat)
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            if mat[i][j] == 0:
                break
            else:
                rows[i] += 1
    curr = 0
    while curr < k:
        minimum = min(rows)
        index = rows.index(minimum)
        res.append(index)
        rows[index] = float('inf')
        curr += 1
    return res
