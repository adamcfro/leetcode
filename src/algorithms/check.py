def check(nums):
    """Given an array nums, return true if the array was originally sorted in 
    non-decreasing order, then rotated some number of positions (including 
    zero). Otherwise, return false. There may be duplicates in the original 
    array.

    Note: An array A rotated by x positions results in an array B of the same 
    length such that A[i] == B[(i+x) % A.length], where % is the modulo 
    operation.

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        Boolean: Returns true if nums was originally sorted in non-decreasing
        order then rotated some number of positions.
    """
    length = len(nums)
    count = 0
    for i in range(1, length):
        if nums[i - 1] > nums[i]:
            count += 1
    if nums[length - 1] > nums[0]:
        count += 1
    return count <= 1
