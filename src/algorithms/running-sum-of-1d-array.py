def runningSum(nums):
    """Given an array nums. We define a running sum of an array as
    runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns the running sum of nums.
    """
    res = []
    total = 0
    for num in nums:
        total += num
        res.append(total)
    return res
