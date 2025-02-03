def countSubarrays(nums):
    """Given an integer array nums, return the number of subarrays of length 3 
    such that the sum of the first and third numbers equals exactly half of the 
    second number.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns a count of subarrays that meet condition.
    """
    count = 0
    for i in range(len(nums) - 2):
        subarraySum = nums[i] + nums[i + 2]
        if nums[i + 1] / 2 == subarraySum:
            count += 1
    return count
