def isUgly(n):
    """An ugly number is a positive integer which does not have a prime factor 
    other than 2, 3, and 5. Given an integer n, return true if n is an ugly 
    number.

    Args:
        n (int): An integer. 

    Returns:
        Boolean: Returns True if n is an ugly number.
    """
    if n < 1:
        return False
    primes = [2, 3, 5]
    for prime in primes:
        while n % prime == 0:
            n /= prime
    return n == 1
