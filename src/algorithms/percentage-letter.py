def percentage_letter(s, letter):
    """Given a string s and a character letter, return the percentage of
    characters in s that equal letter rounded down to the nearest whole percent.

    Args:
        s (String): A string of lowercase English letters.
        letter (String): A lowercase English letter.

    Returns:
        Integer: Returns the percentage that letter appears in s.
    """
    count = 0
    for char in s:
        if char == letter:
            count += 1
    if count == 0:
        return 0
    return count * 100 // len(s)
