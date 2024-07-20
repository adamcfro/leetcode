def difference_of_sums(n, m):
    """You are given positive integers n and m. Define two integers, num1 and 
    num2, as follows:
    • num1: The sum of all integers in the range [1, n] that are not divisible 
    by m.
    • num2: The sum of all integers in the range [1, n] that are divisible by m.
    Return the integer num1 - num2.

    Args:
        n (int): A positive integer.
        m (int): A positive integer.

    Returns:
        int: Returns the the integer num1 - num2.
    """
    num1 = 0
    num2 = 0
    for i in range(1, n + 1):
        if i % m != 0:
            num1 += i
        else:
            num2 += i
    return num1 - num2
