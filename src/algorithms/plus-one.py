def plus_one(digits):
    """You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

    Args:
        digits (List[int]): A list of integers

    Returns:
        List[int]: Returns a modified list of integers
    """
    length = len(digits)
    for i in range(length):
        index = length - 1 - i
        if digits[index] == 9:
            digits[index] = 0
        else:
            digits[index] += 1
            return digits
    digits.insert(0, 1)
    return digits