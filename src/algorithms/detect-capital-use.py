def detect_capital_use(word):
    """We define the usage of capitals in a word to be right when one of the 
    following cases holds:
    • All letters in this word are capitals, like "USA".
    • All letters in this word are not capitals, like "leetcode".
    • Only the first letter in this word is capital, like "Google".
    Given a string word, return true if the usage of capitals in it is right.

    Args:
        word (str): A string of English letters.

    Returns:
        Boolean: Returns True if the usage of capitals in word is right.
    """
    return (word == word.upper() or
            word == word.lower() or
            word == word[0].upper() + word[1:].lower())
