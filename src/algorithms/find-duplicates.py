def findDuplicates(nums):
    """Given an integer array nums of length n where all the integers of nums 
    are in the range [1, n] and each integer appears at most twice, return an 
    array of all the integers that appears twice.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of integers that appear twice in nums
    """
    res = []
    seen = set()
    for num in nums:
        if num in seen:
            res.append(num)
        else:
            seen.add(num)
    return res
