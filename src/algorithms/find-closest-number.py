def findClosestNumber(nums):
    """Given an integer array nums of size n, return the number with the value 
    closest to 0 in nums. If there are multiple answers, return the number with 
    the largest value.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the integer closest to zero.
    """
    res = float("inf")
    for num in nums:
        if abs(num) <= abs(res):
            if abs(num) == abs(res):
                if num > res:
                    res = num
            else:
                res = num
    return res
