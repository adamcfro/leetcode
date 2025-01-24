def pivotIndex(nums):
    """Given an array of integers nums, calculate the pivot index of this array.
    The pivot index is the index where the sum of all the numbers strictly to 
    the left of the index is equal to the sum of all the numbers strictly to 
    the index's right. If the index is on the left edge of the array, then the 
    left sum is 0 because there are no elements to the left. This also applies 
    to the right edge of the array. Return the leftmost pivot index. If no such 
    index exists, return -1.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns an index
    """
    left = 0
    right = sum(nums)
    index = 0
    while index < len(nums):
        right -= nums[index]
        if left == right:
            return index
        left += nums[index]
        index += 1
    return -1
