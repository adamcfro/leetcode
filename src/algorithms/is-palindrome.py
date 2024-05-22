def is_palindrome(x):
    """Given an integer x, returns true if x is a palindrome.

    Args:
        x (int): an integer

    Returns:
        Boolean: returns true if x is a palindrome
    """
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    reverse = 0
    while x > reverse:
        digit = x % 10
        reverse = reverse * 10 + digit
        x //= 10
    return x == reverse or x == reverse // 10
