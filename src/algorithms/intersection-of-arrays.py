def intersection(nums):
    """Given a 2D integer array nums where nums[i] is a non-empty array of 
    distinct positive integers, return the list of integers that are present in 
    each array of nums sorted in ascending order.

    Args:
        nums (list[[int]]): A 2D array of integers.

    Returns:
        list[int]: Returns a list of all numbers that appear in all lists.
    """
    n = set(nums[0])
    for i in range(1, len(nums)):
        n &= set(nums[i])
    n = list(n)
    n.sort()
    return n
