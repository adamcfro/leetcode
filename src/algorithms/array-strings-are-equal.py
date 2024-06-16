def array_strings_are_equal(word1, word2):
    """Tests if two lists are equivalent after concatenation.

    A string is represented by an array if the array elements concatenated in order forms the string. Given two string arrays word1 and word2, returns true if the two arrays represent the same string, and false otherwise.

    Args:
        word1 (List[str]): A list of lowercase English strings.
        word2 (List[str]): A list of lowercase English strings.

    Returns:
        Boolean: Returns true if two lists are equivalent after concatenation.
    """
    return "".join(word1) == "".join(word2)
