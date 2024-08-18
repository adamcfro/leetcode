def array_sign(nums):
    """You are given an integer array nums where you must find the product x of all values in the array nums. Return 1 if x is positive, -1 if x 
    is negative, and 0 if x is equal to 0.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns 1 if the product is positive, -1 if it is negative, or 0
        if it is equal to 0.
    """
    sign = 1
    for num in nums:
        if num == 0:
            return 0
        elif num < 0:
            sign += 1
    if sign % 2 == 0:
        return -1
    else:
        return 1
