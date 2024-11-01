def findMaxConsecutiveOnes(nums):
    """Given a binary array nums, return the maximum number of consecutive 1's 
    in the array.

    Args:
        nums (list[int]): A list of 0's and 1's.

    Returns:
        int: Returns the max number of consecutive 1's in the array.
    """
    count = 0
    temp = 0
    for i in range(len(nums)):
        if nums[i] == 1:
            temp += 1
            if temp > count:
                count = temp
        else:
            temp = 0
    return count
