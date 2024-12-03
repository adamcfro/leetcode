def addSpaces(s, spaces):
    """You are given a 0-indexed string s and a 0-indexed integer array spaces 
    that describes the indices in the original string where spaces will be 
    added. Each space should be inserted before the character at the given 
    index. For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we 
    place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. 
    Thus, we obtain "Enjoy Your Coffee". Return the modified string after the 
    spaces have been added.

    Args:
        s (str): A string of English letters.
        spaces (list[int]): A list of integers representing indices.

    Returns:
        str: Returns a modified string.
    """
    lenSpaces = len(spaces)
    lenS = len(s)
    res = [" "] * (lenSpaces + lenS)
    j = 0
    for i in range(len(s)):
        if j < lenSpaces and i == spaces[j]:
            j += 1
        res[i + j] = s[i]
    return "".join(res)
