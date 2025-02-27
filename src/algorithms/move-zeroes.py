def moveZeroes(nums):
    """Given an integer array nums, move all 0's to the end of it while 
    maintaining the relative order of the non-zero elements. Note that you must 
    do this in-place without making a copy of the array.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a modified list of integers.
    """
    i = 0
    for j in range(len(nums)):
        if nums[j] != 0:
            nums[j], nums[i] = nums[i], nums[j]
            i += 1
    return nums
