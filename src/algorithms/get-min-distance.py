def getMinDistance(nums, target, start):
    """Given an integer array nums (0-indexed) and two integers target and 
    start, find an index i such that nums[i] == target and abs(i - start) is 
    minimized. Note that abs(x) is the absolute value of x. Return abs(i - start). It is guaranteed that target exists in nums.

    Args:
        nums (list[int]): A list of integers.
        target (int): A target integer.
        start (int): A starting index.

    Returns:
        int: Returns the absolute distance between target number and start.
    """
    res = len(nums)
    for i in range(len(nums)):
        if nums[i] == target:
            res = min(abs(i - start), res)
    return res
