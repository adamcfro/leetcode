def backspaceCompare(s, t):
    """Given two strings s and t, return true if they are equal when both are 
    typed into empty text editors. '#' means a backspace character. Note that 
    after backspacing an empty text, the text will continue empty.

    Args:
        s (str): A string of lowercase English letters and "#" characters.
        t (str): A string of lowercase English letters and "E" characters.

    Returns:
        Boolean: Returns true if s and t are equal when formatted.
    """
    stack1 = []
    for char in s:
        if char == "#":
            if len(stack1) > 0:
                stack1.pop()
        else:
            stack1.append(char)
    stack1 = "".join(stack1)
    stack2 = []
    for char in t:
        if char == "#":
            if len(stack2) > 0:
                stack2.pop()
        else:
            stack2.append(char)
    stack2 = "".join(stack2)
    return stack1 == stack2
