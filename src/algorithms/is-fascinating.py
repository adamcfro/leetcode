def isFascinating(n):
    """You are given an integer n that consists of exactly 3 digits. We call 
    the number n fascinating if, after the following modification, the 
    resulting number contains all the digits from 1 to 9 exactly once and does 
    not contain any 0's:
    • Concatenate n with the numbers 2 * n and 3 * n.

    Return true if n is fascinating, or false otherwise.

    Args:
        n (int): A positive integer.

    Returns:
        Boolean: Returns True if the resulting concatenation is fascinating.
    """
    res = f"{n}"
    res += str(n * 2) + str(n * 3)
    number_list = [int(digit) for digit in str(res)]
    number_set = set()
    for num in number_list:
        if (num == 0 or num in number_set):
            return False
        number_set.add(num)
    return len(number_set) == 9
