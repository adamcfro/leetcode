def isBalanced(num):
    """You are given a string num consisting of only digits. A string of digits 
    is called balanced if the sum of the digits at even indices is equal to the 
    sum of digits at odd indices. Return true if num is balanced, otherwise 
    return false.

    Args:
        num (str): A string of digits.

    Returns:
        boolean: Returns true if the sum of digits at odd indices are equal to 
        the sum of digits at even indices.
    """
    even = 0
    odd = 0
    for i in range(len(num)):
        if i % 2 == 0:
            even += int(num[i])
        else:
            odd += int(num[i])
    return even == odd
