def find_kth_positive(arr, k):
    """Given an array arr of positive integers sorted in a strictly increasing 
    order, and an integer k. Return the kth positive integer that is missing 
    from this array.

    Args:
        arr (list[int]): A list of positive integers.
        k (int): A positive integer.

    Returns:
        int: Returns the kth missing integer.
    """
    count = 0
    arr_set = set(arr)
    for i in range(1, 2001):
        if i not in arr_set:
            count += 1
        if count == k:
            return i
