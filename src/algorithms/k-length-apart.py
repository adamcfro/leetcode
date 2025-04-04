def kLengthApart(nums, k):
    """Given an binary array nums and an integer k, return true if all 1's are 
    at least k places away from each other, otherwise return false.

    Args:
        nums (list[int]): A list of integers.
        k (int): A positive integer.

    Returns:
        Boolean: Returns True if all 1's are at least k places away.
    """
    lastSeen = None
    index = 0
    while index < len(nums):
        if nums[index] == 1:
            if lastSeen != None and index - lastSeen <= k:
                return False
            lastSeen = index
        index += 1
    return True
