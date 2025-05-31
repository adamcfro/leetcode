def smallestIndex(nums):
    """You are given an integer array nums. Return the smallest index i such 
    that the sum of the digits of nums[i] is equal to i. If no such index 
    exists, return -1.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns an index or -1.
    """
    for i in range(len(nums)):
        num = nums[i]
        temp = 0
        while num != 0:
            temp += num % 10
            num = num // 10
        if temp == i:
            return i
    return -1
