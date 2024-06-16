def sum_of_multiples(n):
    """Returns a sum of integers within a range that are divisible by 3, 5 or 7.

    Given a positive integer n, find the sum of all integers in the range 
    [1, n] inclusive that are divisible by 3, 5, or 7. Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

    Args:
        n (Integer): A positive integer.

    Returns:
        Integer: Returns a sum of integers within a range that are divisible by 3, 5 or 7.
    """
    res = 0
    for i in range(3, n + 1):
        if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
            res += i
    return res
