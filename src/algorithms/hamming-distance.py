def hammingDistance(x, y):
    """The Hamming distance between two integers is the number of positions at 
    which the corresponding bits are different. Given two integers x and y, 
    return the Hamming distance between them.

    Args:
        x (int): An integer equal to or greater than zero.
        y (int): An integer equal to or greater than zero.

    Returns:
        int: Returns a count of positions where bits are different.
    """
    count = 0
    x = bin(x)[2:]
    y = bin(y)[2:]
    diff = abs(len(x) - len(y))
    if len(x) < len(y):
        x = "0" * diff + x
    else:
        y = "0" * diff + y
    for i in range(len(x)):
        if x[i] != y[i]:
            count += 1
    return count
