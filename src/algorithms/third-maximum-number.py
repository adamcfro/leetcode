def third_max(nums):
    """Given an integer array nums, return the third distinct maximum number in
    this array. If the third maximum number does not exist, return the maximum
    number.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the third maximum number in the list.
    """
    nums = list(set(nums))
    nums = sorted(nums)
    if len(nums) >= 3:
        return nums[-3]
    else:
        return nums[-1]
