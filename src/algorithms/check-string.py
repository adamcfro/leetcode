def check_string(s):
    """Given a string s consisting of only the characters 'a' and 'b', return 
    true if every 'a' appears before every 'b' in the string. Otherwise, return 
    false.

    Args:
        s (str): A string of lowercase "a" and "b" characters.

    Returns:
        _type_: _description_
    """
    b_seen = False
    for char in s:
        if char == "b":
            b_seen = True
        elif b_seen == True:
            return False
    return True
