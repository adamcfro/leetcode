def harshadNumber(x):
    """An integer divisible by the sum of its digits is said to be a Harshad 
    number. You are given an integer x. Return the sum of the digits of x if x 
    is a Harshad number, otherwise, return -1.

    Args:
        x (int): A positive integer.

    Returns:
        int: Returns the sum of the digits of x if x is a Harshad number, 
        otherwise, returns -1.
    """
    total = 0
    temp = x
    while temp != 0:
        total += temp % 10
        temp = temp // 10
    if x % total == 0:
        return total
    return -1
