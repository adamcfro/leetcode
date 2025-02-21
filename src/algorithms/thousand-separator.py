def thousandSeparator(n):
    """Given an integer n, add a dot (".") as the thousands separator and 
    return it in string format.

    Args:
        n (int): An integer.

    Returns:
        str: Returns a string representing a floating point number.
    """
    n = str(n)
    if len(n) < 4:
        return n
    return n[:-3] + "." + n[-3:]
