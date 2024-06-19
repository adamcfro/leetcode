def repeated_character(s):
    """Given a string s consisting of lowercase English letters, return the
    first letter to appear twice.

    Args:
        s (String): A string of lowercase English letters.

    Returns:
        String: Returns the first character to appear twice in s.
    """
    seen = set()
    for i in range(len(s)):
        if s[i] in seen:
            return s[i]
        seen.add(s[i])
