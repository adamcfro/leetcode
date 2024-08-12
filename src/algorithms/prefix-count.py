def prefix_count(words, pref):
    """You are given an array of strings words and a string pref. Return the 
    number of strings in words that contain pref as a prefix. A prefix of a 
    string s is any leading contiguous substring of s.

    Args:
        words (list[str]): A list of strings made of lowercase English letters.
        pref (str): A string of lowercase English letters.

    Returns:
        int: Returns a count of words that contain pref as a prefix.
    """
    count = 0
    length = len(pref)
    for word in words:
        if word[0: length] == pref:
            count += 1
    return count
