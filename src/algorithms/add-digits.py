def addDigits(num):
    """Given an integer num, repeatedly add all its digits until the result has 
    only one digit, and return it.

    Args:
        num (int): An integer greater than or equal to 0.

    Returns:
        int: Returns the sum of num's digits until the result has only one 
        digit.
    """
    if num == 0:
        return 0
    if num % 9 == 0:
        return 9
    else:
        return num % 9
