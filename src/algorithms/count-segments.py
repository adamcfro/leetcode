def count_segments(s):
    """Given a string s, return the number of segments in the string. A segment 
    is defined to be a contiguous sequence of non-space characters.

    Args:
        s (str): A string of English letters, digits, or special characters.

    Returns:
        int: Returns the number of segments in the string.
    """
    s = s.split()
    return len(s)
