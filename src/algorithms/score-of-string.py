def score_of_string(s):
    """Calculates and returns the score of a string.

    The score of a string is defined as the sum of the absolute difference
    between the ASCII values of adjacent characters. Return the score of s.

    Args:
        s (String): A string of lowercase English letters.

    Returns:
        Integer: Returns the score of a string as an integer.
    """
    score = 0
    for i in range(len(s) - 1):
        score += abs(ord(s[i]) - ord(s[i + 1]))
    return score
