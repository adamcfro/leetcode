def maximum_69_number(num):
    """You are given a positive integer num consisting only of digits 6 and 9.
    Return the maximum number you can get by changing at most one digit (6 
    becomes 9, and 9 becomes 6).

    Args:
        num (int): A positive integer consisting of only 6 and 9 digits.

    Returns:
        int: Returns a modified integer.
    """
    num = [char for char in str(num)]
    print(num)
    for i in range(len(num)):
        if num[i] != "9":
            num[i] = "9"
            break
    return int("".join(num))
