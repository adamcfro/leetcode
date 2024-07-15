def construct_2d_array(original, m, n):
    """You are given a 0-indexed 1-dimensional (1D) integer array original, and 
    two integers, m and n. You are tasked with creating a 2-dimensional (2D) 
    array with  m rows and n columns using all the elements from original. The 
    elements from indices 0 to n - 1 (inclusive) of original should form the 
    first row of the constructed 2D array, the elements from indices n to 2 * n 
    - 1 (inclusive) should form the second row of the constructed 2D array, and 
    so on. Return an m x n 2D array constructed according to the above 
    procedure, or an empty 2D array if it is impossible.

    Args:
        original (list[int]): A list of positive integers.
        m (int): A positive integer.
        n (int): A positive integer.

    Returns:
        list[int]: Returns a 2D list of integers.
    """
    res = []
    index = 0
    length = 0
    while index < len(original):
        row = []
        while length < n and index < len(original):
            row.append(original[index])
            length += 1
            index += 1
        res.append(row)
        length = 0
    if len(res[0]) != n or len(res) != m:
        return []
    return res
