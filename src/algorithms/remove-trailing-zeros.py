def removeTrailingZeros(num):
    """Given a positive integer num represented as a string, return the integer 
    num without trailing zeros as a string.

    Args:
        num (str): A string of digits.

    Returns:
        str: Returns a modified string.
    """
    index = len(num) - 1
    while num[index] == "0":
        index -= 1
    return num[:index + 1]
