def is_three(n):
    """Given an integer n, return true if n has exactly three positive
    divisors. Otherwise, return false. An integer m is a divisor of n if there 
    exists an integer k such that n = k * m.

    Args:
        n (int): A positive integer.

    Returns:
        Boolean: Returns True if n has exactly 3 positive divisors.
    """
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    if count == 3:
        return True
    return False
