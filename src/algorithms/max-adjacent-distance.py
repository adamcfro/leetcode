def maxAdjacentDistance(nums):
    """Given a circular array nums, find the maximum absolute difference 
    between adjacent elements.

    Note: In a circular array, the first and last elements are adjacent.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the max absolute difference between adjacent elements.
    """
    maxDiff = 0
    for i in range(len(nums) - 1):
        maxDiff = max(maxDiff, abs(nums[i] - nums[i + 1]))
    maxDiff = max(maxDiff, abs(nums[0] - nums[-1]))
    return maxDiff
