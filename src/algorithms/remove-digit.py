def removeDigit(number, digit):
    """You are given a string number representing a positive integer and a 
    character digit. Return the resulting string after removing exactly one 
    occurrence of digit from number such that the value of the resulting string 
    in decimal form is maximized. The test cases are generated such that digit 
    occurs at least once in number.

    Args:
        number (string): A string of digits.
        digit (string): A string digit.

    Returns:
        string: Returns a modified string.
    """
    res = "0"
    for i in range(len(number)):
        if number[i] == digit:
            temp = number[0:i] + number[i + 1:]
            res = str(max(int(res), int(temp)))
    return res
