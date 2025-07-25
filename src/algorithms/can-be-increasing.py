def canBeIncreasing(nums):
    """Given a 0-indexed integer array nums, return true if it can be made 
    strictly increasing after removing exactly one element, or false otherwise. 
    If the array is already strictly increasing, return true. The array nums is 
    strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.
    length).

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        Boolean: Returns True if array can be made strictly increasing.
    """
    count = 0
    for i in range(1, len(nums)):
        if nums[i - 1] >= nums[i]:
            count += 1
            if i > 1 and nums[i - 2] >= nums[i]:
                nums[i] = nums[i - 1]
        if count >= 2:
            break
    return count < 2
