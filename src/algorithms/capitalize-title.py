def capitalize_title(title):
    """You are given a string title consisting of one or more words separated 
    by a single space, where each word consists of English letters. Capitalize 
    the string by changing the capitalization of each word such that:
    • If the length of the word is 1 or 2 letters, change all letters to 
    lowercase.
    • Otherwise, change the first letter to uppercase and the remaining letters 
    to lowercase.
    Return the capitalized title.

    Args:
        title (str): A string of English letters.

    Returns:
        str: Returns a modified string.
    """
    title = title.lower()
    title = title.split()
    for i in range(len(title)):
        if len(title[i]) > 2:
            title[i] = title[i].capitalize()
    return " ".join(title)
