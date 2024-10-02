def count_elements(nums):
    """Given an integer array nums, return the number of elements that have 
    both a strictly smaller and a strictly greater element appear in nums.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns a count of elements that have both a strictly smaller and
        a strictly greater element appear in nums.
    """
    count = 0
    nums = sorted(nums)
    min_num = nums[0]
    max_num = nums[len(nums) - 1]
    for i in range(1, len(nums) - 1):
        if min_num < nums[i] and max_num > nums[i]:
            count += 1
    return count
