def smallestEvenMultiple(n):
    """Given a positive integer n, return the smallest positive integer that is 
    a multiple of both 2 and n.

    Args:
        n (int): A positive integer.

    Returns:
        int: Returns the smallest positive integer that is a mult of 2 and n.
    """
    return n if n % 2 == 0 else n * 2
