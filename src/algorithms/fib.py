def fib(n):
    """Given n, calculate F(n).

    The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
    Fibonacci sequence, such that each number is the sum of the two preceding
    ones, starting from 0 and 1. That is:

    • F(0) = 0, F(1) = 1
    • F(n) = F(n - 1) + F(n - 2), for n > 1.

    Args:
        n (integer): An integer representing the nth Fibonacci number.

    Returns:
        integer: Returns the nth Fibonacci number.
    """
    f1 = 0
    f2 = 1
    curr = 0
    if (n <= 1):
        return n
    for i in range(2, n + 1):
        curr = f1 + f2
        f1 = f2
        f2 = curr
    return curr
