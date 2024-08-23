def is_valid(s):
    """Given a string s containing just the characters '(', ')', '{', '}', '[' 
    and ']', determine if the input string is valid. An input string is valid 
    if open brackets are closed by the same type of brackets, open brackets are 
    closed in the correct order, and every close bracket has a corresponding 
    open bracket of the same type.

    Args:
        s (str): A string consisting of the characters "()[]{}".

    Returns:
        Boolean: Returns true if the string contains valid parentheses.
    """
    stack = []
    brackets = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in brackets.values():
            stack.append(char)
        elif char in brackets.keys():
            if len(stack) == 0 or brackets[char] != stack.pop():
                return False
    return len(stack) == 0
