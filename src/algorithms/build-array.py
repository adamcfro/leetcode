def buildArray(nums):
    """Given a zero-based permutation nums (0-indexed), build an array ans of 
    the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length 
    and return it.

    A zero-based permutation nums is an array of distinct integers from 0 to 
    nums.length - 1 (inclusive).

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a modified list.
    """
    res = [-1] * len(nums)
    for i in range(len(nums)):
        res[i] = nums[nums[i]]
    return res
