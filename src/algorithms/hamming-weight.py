def hammingWeight(n):
    """Given a positive integer n, write a function that returns the number of 
    set bits in its binary representation (also known as the Hamming weight).

    Args:
        n (int): A positive integer.

    Returns:
        int: Returns the hamming weight of n.
    """
    count = 0
    n = bin(n)[2:]
    for i in range(len(n)):
        if n[i] == "1":
            count += 1
    return count
