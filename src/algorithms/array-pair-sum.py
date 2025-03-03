def arrayPairSum(nums):
    """Given an integer array nums of 2n integers, groups these integers into
    n pairs, such that the sum of min(a[i], b[i]) for all i is maximized.
    Return the maximized sum.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the maximized sum of pairs.
    """
    total = 0
    sorted_nums = sorted(nums)
    length = len(nums)
    for i in range(0, length, 2):
        total += sorted_nums[i]
    return total
