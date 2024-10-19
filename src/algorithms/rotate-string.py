def rotate_string(s, goal):
    """Given two strings s and goal, return true if and only if s can become 
    goal after some number of shifts on s. A shift on s consists of moving the 
    leftmost character of s to the rightmost position. For example, if s = 
    "abcde", then it will be "bcdea" after one shift.

    Args:
        s (str): A string of lowercase English letters.
        goal (str): A string of lowercase English letters.

    Returns:
        boolean: Returns True if s can become goal after some number of shifts
        on s.
    """
    for i in range(len(s)):
        if s[i:] + s[0: i] == goal:
            return True
    return False
