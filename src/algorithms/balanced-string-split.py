def balanced_string_split(s):
    """Balanced strings are those that have an equal quantity of 'L' and 'R' 
    characters. Given a balanced string s, split it into some number of 
    substrings such that each substring is balanced. Return the maximum number 
    of balanced strings you can obtain.

    Args:
        s (str): A string of uppercase "R" and "L" characters.

    Returns:
        int: Returns a count of balanced substrings.
    """
    count = 0
    l = 0
    r = 0
    for char in s:
        if char == "L":
            l += 1
        elif char == "R":
            r += 1
        if l == r:
            count += 1
    return count
