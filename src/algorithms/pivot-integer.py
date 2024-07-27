def pivot_integer(n):
    """Given a positive integer n, find the pivot integer x such that:
    • The sum of all elements between 1 and x inclusively equals the sum of all 
    elements between x and n inclusively.

    Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

    Args:
        n (int): A positive integer.

    Returns:
        int: Returns the pivot integer or -1 if that integer doesn't exist.
    """
    sum1 = 0
    sum2 = 0
    for i in range(1, n + 1):
        sum1 += i
    pivot = n
    while pivot >= 0:
        sum2 += pivot
        if sum1 == sum2:
            return pivot
        sum1 -= pivot
        pivot -= 1
    return -1
