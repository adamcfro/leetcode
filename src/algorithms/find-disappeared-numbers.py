def findDisappearedNumbers(nums):
    """Given an array nums of n integers where nums[i] is in the range [1, n], 
    return an array of all the integers in the range [1, n] that do not appear 
    in nums.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of missing integers.
    """
    res = []
    new_set = set(nums)
    for i in range(1, len(nums) + 1):
        if i not in new_set:
            res.append(i)
    return res
