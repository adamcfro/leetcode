def minimum_moves(s):
    """You are given a string s consisting of n characters which are either 'X' 
    or 'O'. A move is defined as selecting three consecutive characters of s 
    and converting them to 'O'. Note that if a move is applied to the character 
    'O', it will stay the same. Return the minimum number of moves required so 
    that all the characters of s are converted to 'O'.

    Args:
        s (str): A string of characters that are either "X" or "O".

    Returns:
        int: Returns a count of moves required to convert all characters to "0".
    """
    count = 0
    index = 0
    while index < len(s):
        if s[index] == "X":
            count += 1
            index += 3
        else:
            index += 1
    return count
