def split_words_by_separator(words, separator):
    """Given an array of strings words and a character separator, split each 
    string in words by separator. Return an array of strings containing the new 
    strings formed after the splits, excluding empty strings.

    The separator is used to determine where the split should occur, but it is 
    not included as part of the resulting strings. A split may result in more 
    than two strings. The resulting strings must maintain the same order as 
    they were initially given.

    Args:
        words (list[str]): A list of strings.
        separator (str): A character from the string ".,|$#@".

    Returns:
        list[str]: Returns a list of strings.
    """
    res = []
    for i in range(len(words)):
        curr = words[i].split(separator)
        for word in curr:
            if len(word) > 0:
                res.append(word)
    return res
