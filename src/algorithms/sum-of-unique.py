def sum_of_unique(nums):
    """You are given an integer array nums. The unique elements of an array are 
    the elements that appear exactly once in the array. Return the sum of all 
    the unique elements of nums.

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        int: Returns the sum of all unique elements of nums.
    """
    res = 0
    seen = {}
    for i in range(len(nums)):
        if nums[i] in seen:
            seen[nums[i]] += 1
        else:
            seen[nums[i]] = 1
    for x, y in seen.items():
        if y == 1:
            res += x
    return res
