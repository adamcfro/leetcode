def min_operations(nums, k):
    """You are given a 0-indexed integer array nums, and an integer k. In one 
    operation, you can remove one occurrence of the smallest element of nums.
    Return the minimum number of operations needed so that all elements of the 
    array are greater than or equal to k.

    Args:
        nums (list[int]): A list of positive integers.
        k (int): A positive integer.

    Returns:
        int: Returns a count of operations needed so all elements are >= k.
    """
    count = 0
    for i in range(len(nums)):
        if nums[i] < k:
            count += 1
    return count
