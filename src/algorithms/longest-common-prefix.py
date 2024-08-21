def longest_common_prefix(strs):
    """Write a function to find the longest common prefix string amongst an 
    array of strings. If there is no common prefix, return an empty string "".

    Args:
        strs (list[str]): A list of strings made up of lowercase English 
        letters.

    Returns:
        str: Returns a string of lowercase English letters.
    """
    if len(strs) == 1:
        return strs[0]
    res = ""
    length = len(strs[0])
    for i in range(length):
        char = strs[0][i]
        for j in range(1, len(strs)):
            if i >= len(strs[j]) or strs[j][i] != char:
                return res
        res += char
    return res
