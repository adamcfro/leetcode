def max_power(s):
    """A function to determine the power of a string.

    The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given a string s, return the power of s.

    Args:
        s (String): A string consisting of only lowercase English letters.

    Returns:
        Integer: Returns an integer denoting the power of s.
    """
    max_count = 1
    temp_count = 1
    length = len(s)
    if length == 1:
        return length
    for i in range(1, length):
        if s[i] == s[i - 1]:
            temp_count += 1
            max_count = max(temp_count, max_count)
        else:
            max_count = max(temp_count, max_count)
            temp_count = 1
    return max_count
