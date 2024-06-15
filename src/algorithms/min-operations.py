def min_operations(nums):
    """Returns the minimum number of operations to make nums strictly increasing.

    You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1. For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].Return the minimum number of operations needed to make nums strictly increasing. An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

    Args:
        nums (List[int]): A list of positive integers.

    Returns:
        Integer: Returns a count of operations to make nums strictly increasing.
    """
    count = 0
    for i in range(1, len(nums)):
        if nums[i] <= nums[i - 1]:
            increment = nums[i - 1] - nums[i] + 1
            nums[i] += increment
            count += increment
    return count
