def truncate_sentence(s, k):
    """You are given a sentence s and an integer k. You want to truncate s such 
    that it contains only the first k words. Return s after truncating it.

    A sentence is a list of words that are separated by a single space with no 
    leading or trailing spaces. Each of the words consists of only uppercase 
    and lowercase English letters (no punctuation). For example, "Hello World", 
    "HELLO", and "hello world hello world" are all sentences.

    Args:
        s (str): A string of uppercase and lowercase English letters.
        k (int): A positive integer.

    Returns:
        str: Returns a modified string.
    """
    s = s.split()
    s = " ".join(s[0:k])
    return s
