def find_middle_index(nums):
    """Given a 0-indexed integer array nums, find the leftmost middleIndex 
    (i.e., the smallest amongst all the possible ones). A middleIndex is an 
    index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums
    [middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]. If 
    middleIndex == 0, the left side sum is considered to be 0. Similarly, if 
    middleIndex == nums.length - 1, the right side sum is considered to be 0.
    Return the leftmost middleIndex that satisfies the condition, or -1 if 
    there is no such index.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the middle index of the array.
    """
    total = 0
    curr = 0
    for num in nums:
        total += num
    for i in range(len(nums)):
        total -= nums[i]
        if total == curr:
            return i
        curr += nums[i]
    return -1
