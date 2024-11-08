def mySqrt(x):
    """ * Given a non-negative integer x, return the square root of x rounded 
    down to the nearest integer. The returned integer should be non-negative as 
    well. You must not use any built-in exponent function or operator.

    Args:
        x (int): A positive integer.

    Returns:
        int: Returns the square root of x.
    """
    left = 0
    right = x
    while left <= right:
        mid = (left + right) // 2
        square = mid ** 2
        if square <= x:
            left = mid + 1
        else:
            right = mid - 1
    return right
