def make_fancy_string(s):
    """A fancy string is a string where no three consecutive characters are 
    equal. Given a string s, delete the minimum possible number of characters 
    from s to make it fancy. Return the final string after the deletion. It can 
    be shown that the answer will always be unique.

    Args:
        s (str): A string of lowercase English letters.

    Returns:
        str: Returns a modified string.
    """
    res = s[0]
    previous = s[0]
    count = 1
    for i in range(1, len(s)):
        current = s[i]
        if current == previous:
            count += 1
        else:
            count = 1
            previous = current
        if count < 3:
            res += current
    return res
