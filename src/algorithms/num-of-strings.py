def numOfStrings(patterns, word):
    """Given an array of strings patterns and a string word, return the number 
    of strings in patterns that exist as a substring in word. A substring is a 
    contiguous sequence of characters within a string.

    Args:
        patterns (str): A string of lowercase English letters.
        word (str): A string of lowercase English letters.

    Returns:
        int: Returns a count of strings in patterns that appear in word.
    """
    count = 0
    for pattern in patterns:
        if pattern in word:
            count += 1
    return count
