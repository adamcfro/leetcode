def findMaxK(nums):
    """Given an integer array nums that does not contain any zeros, find the 
    largest positive integer k such that -k also exists in the array. Return 
    the positive integer k. If there is no such integer, return -1.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns an integer.
    """
    res = -1
    seen = set()
    for num in nums:
        temp = abs(num)
        if temp > res and -num in seen:
            res = temp
        seen.add(num)
    return res
