def isPrefixOfWord(sentence, searchWord):
    """Given a sentence that consists of some words separated by a single 
    space, and a searchWord, check if searchWord is a prefix of any word in 
    sentence. Return the index of the word in sentence (1-indexed) where 
    searchWord is a prefix of this word. If searchWord is a prefix of more than 
    one word, return the index of the first word (minimum index). If there is 
    no such word return -1. A prefix of a string s is any leading contiguous 
    substring of s.

    Args:
        sentence (str): A string of lowercase English letters and spaces.
        searchWord (str): A string of lowercase English letters.

    Returns:
        int: Returns the index of the first word in sentence that is a prefix
        of searchWord.
    """
    sentence = sentence.split(" ")
    length = len(searchWord)
    for i in range(len(sentence)):
        if sentence[i][:length] == searchWord:
            return i + 1
    return -1
