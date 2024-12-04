def mostWordsFound(sentences):
    """A sentence is a list of words that are separated by a single space with 
    no leading or trailing spaces. You are given an array of strings sentences, 
    where each sentences[i] represents a single sentence. Return the maximum 
    number of words that appear in a single sentence.

    Args:
        sentences (str): A string of lowercase English letters and spaces.

    Returns:
        int: Returns the max number of words in a single sentence.
    """
    maxCount = 0
    for sentence in sentences:
        length = len(sentence.split())
        if length > maxCount:
            maxCount = length
    return maxCount
