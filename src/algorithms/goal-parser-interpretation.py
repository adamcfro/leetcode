def interpret(command):
    """You own a Goal Parser that can interpret a string command. The command 
    consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal 
    Parser will interpret "G" as the string "G", "()" as the string "o", and "
    (al)" as the string "al". The interpreted strings are then concatenated in 
    the original order. Given the string command, return the Goal Parser's 
    interpretation of command.

    Args:
        command (str): A string consisting of the characters "(al)", "()", and
        "G".

    Returns:
        str: Returns a string after interpreting command.
    """
    res = ""
    pointer = 0
    while pointer < len(command):
        if command[pointer] == "G":
            res += "G"
            pointer += 1
        elif command[pointer] == "(" and command[pointer + 1] == ")":
            res += "o"
            pointer += 2
        else:
            res += "al"
            pointer += 4
    return res
