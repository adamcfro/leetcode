def clearDigits(s):
    """You are given a string s. Your task is to remove all digits by deleting 
    the first digit and the closest non-digit character to its left. Return the 
    resulting string after removing all digits.

    Args:
        s (str): A string of lowercase English letters and digits.

    Returns:
        str: Returns a modified string.
    """
    stack = []
    for char in s:
        if not char.isdigit():
            stack.append(char)
        else:
            if stack:
                stack.pop()
        print(stack)
    return "".join(stack)
