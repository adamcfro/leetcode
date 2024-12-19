def countCharacters(words, chars):
    """You are given an array of strings words and a string chars. A string is 
    good if it can be formed by characters from chars (each character can only 
    be used once). Return the sum of lengths of all good strings in words.

    Args:
        words (str): A string of lowercase English letters.
        chars (str): A string of lowercase English letters.

    Returns:
        int: Returns a length of strings for words that can be formed by chars.
    """
    sumOfLengths = 0
    for word in words:
        for char in word:
            if chars.count(char) < word.count(char):
                break
        else:
            sumOfLengths += len(word)
    return sumOfLengths
