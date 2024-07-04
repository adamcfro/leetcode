def alternate_digit_sum(n):
    """You are given a positive integer n. Each digit of n has a sign according
    to the following rules:
    • The most significant digit is assigned a positive sign.
    • Each other digit has an opposite sign to its adjacent digits.
    Return the sum of all digits with their corresponding sign.

    Args:
        n (int): A positive integer.

    Returns:
        int: Returns the sum of all digits with their corresponding sign.
    """
    digit_sum = 0
    n = str(n)
    for i in range(len(n)):
        if i % 2 == 0:
            digit_sum += int(n[i])
        else:
            digit_sum -= int(n[i])
    return digit_sum
