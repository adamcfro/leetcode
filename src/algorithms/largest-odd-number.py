def largest_odd_number(num):
    """You are given a string num, representing a large integer. Return the 
    largest-valued odd integer (as a string) that is a non-empty substring of 
    num, or an empty string "" if no odd integer exists. A substring is a contiguous sequence of characters within a string.

    Args:
        num (str): A string of digits.

    Returns:
        str: Returns the largest-valued odd integer.
    """
    length = len(num)
    while len(num) > 0:
        last_num = int(num[length - 1])
        if last_num % 2 == 1:
            return num
        else:
            length -= 1
            num = num[0: length]
    return ""
