def maximumDifference(nums):
    """Given a 0-indexed integer array nums of size n, find the maximum 
    difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 
    0 <= i < j < n and nums[i] < nums[j].

    Return the maximum difference. If no such i and j exists, return -1.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the maximum difference between increasing elements or -1.
    """
    res = -1
    for i in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            temp = nums[j] - nums[i]
            if temp > res and temp != 0:
                res = temp
    return res
