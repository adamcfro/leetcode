def isSameAfterReversals(num):
    """Reversing an integer means to reverse all its digits. For example, 
    reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros 
    are not retained. Given an integer num, reverse num to get reversed1, then 
    reverse reversed1 to get reversed2. Return true if reversed2 equals num. 
    Otherwise return false.

    Args:
        num (int): A positive integer.

    Returns:
        Boolean: Returns True if num equals num reversed.
    """
    reverse = int("".join(reversed(str(num))))
    reverse = int("".join(reversed(str(reverse))))
    return num == reverse
