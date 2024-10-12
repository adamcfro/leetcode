def trim_mean(arr):
    """Given an integer array arr, return the mean of the remaining integers 
    after removing the smallest 5% and the largest 5% of the elements. Answers 
    within 10-5 of the actual answer will be considered accepted.

    Args:
        arr (list[int]): A list of integers.

    Returns:
        float: Returns the mean of the remaining integers after removing the
        smallest and largest 5% of the elements.
    """
    length = int(len(arr) * .05)
    arr = sorted(arr)
    total = 0
    for i in range(length, len(arr) - length):
        total += arr[i]
    return total / (len(arr) - (length * 2))
