def reverse_prefix(word, ch):
    """Given a 0-indexed string word and a character ch, reverse the segment of 
    word that starts at index 0 and ends at the index of the first occurrence 
    of ch (inclusive). If the character ch does not exist in word, do nothing.
    For example, if word = "abcdefd" and ch = "d", then you should reverse the 
    segment that starts at 0 and ends at 3 (inclusive). The resulting string 
    will be "dcbaefd". Return the resulting string.

    Args:
        word (str): A string of lowercase English letters.
        ch (str): A lowercase English letter.

    Returns:
        str: Returns a modified string.
    """
    index = -1
    for i in range(len(word)):
        if word[i] == ch:
            index = i
            break
    if index == -1:
        return word
    return word[index:: -1] + word[index + 1::]
