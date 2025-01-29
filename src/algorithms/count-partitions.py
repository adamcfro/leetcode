def countPartitions(nums):
    """You are given an integer array nums of length n. A partition is defined 
    as an index i where 0 <= i < n - 1, splitting the array into two non-empty 
    subarrays such that:
    • Left subarray contains indices [0, i].
    • Right subarray contains indices [i + 1, n - 1].
    Return the number of partitions where the difference between the sum of the 
    left and right subarrays is even.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns a count of partitions that meet criteria.
    """
    count = 0
    left = 0
    right = 0
    for num in nums:
        right += num
    for i in range(len(nums) - 1):
        left += nums[i]
        right -= nums[i]
        if abs(left - right) % 2 == 0:
            count += 1
    return count
