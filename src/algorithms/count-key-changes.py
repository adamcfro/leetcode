def count_key_changes(s):
    """You are given a 0-indexed string s typed by a user. Changing a key is 
    defined as using a key different from the last used key. For example, s = 
    "ab" has a change of a key while s = "bBBb" does not have any. Return the 
    number of times the user had to change the key.

    Note: Modifiers like shift or caps lock won't be counted in changing the 
    key that is if a user typed the letter 'a' and then the letter 'A' then it 
    will not be considered as a changing of key.

    Args:
        s (str): A string of English letters.

    Returns:
        int: Returns a count of key changes.
    """
    count = 0
    s = s.upper()
    for i in range(1, len(s)):
        if s[i - 1] != s[i]:
            count += 1
    return count
