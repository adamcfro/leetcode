def generate_the_string(n):
    """Given an integer n, return a string with n characters such that each 
    character in such string occurs an odd number of times. The returned string 
    must contain only lowercase English letters. If there are multiples valid 
    strings, return any of them.  

    Args:
        n (int): A positive integer.

    Returns:
        str: Returns a string of lowercase English letters.
    """
    res = ""
    if n % 2 != 0:
        res += "p" * n
    else:
        res += "p" * (n - 1) + "y"
    return res
