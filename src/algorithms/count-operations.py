def count_operations(num1, num2):
    """You are given two non-negative integers num1 and num2. In one operation, 
    if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 
    from num2. For example, if num1 = 5 and num2 = 4, subtract num2 from num1, 
    thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, 
    after one operation, num1 = 4 and num2 = 1. Return the number of operations 
    required to make either num1 = 0 or num2 = 0.

    Args:
        num1 (int): An integer greater than or equal to 0.
        num2 (int): An integer greater than or equal to 0.

    Returns:
        int: Returns the number of operations to make num1 or num2 == 0.
    """
    count = 0
    while num1 != 0 and num2 != 0:
        if num1 >= num2:
            num1 -= num2
        else:
            num2 -= num1
        count += 1
    return count
