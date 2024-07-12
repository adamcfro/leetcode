def missing_number(nums):
    """Given an array nums containing n distinct numbers in the range [0, n], 
    return the only number in the range that is missing from the array.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the integer missing from the range.
    """
    nums = sorted(nums)
    size = len(nums)
    if nums[0] != 0:
        return 0
    if nums[size - 1] != size:
        return size
    for i in range(size):
        if nums[i] != i:
            return i
    return 0
