def the_maximum_achievable_x(num, t):
    """Given two integers, num and t. A number is achievable if it can become 
    equal to num after applying the following operation:
    • Increase or decrease the number by 1, and simultaneously increase or 
    decrease num by 1.
    Return the maximum achievable number after applying the operation at most t 
    times.

    Args:
        num (int): A positive integer.
        t (int): A positive integer.

    Returns:
        int: Returns the maximum achievable number.
    """
    return t * 2 + num
