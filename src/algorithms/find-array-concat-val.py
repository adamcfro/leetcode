def findTheArrayConcVal(nums):
    """You are given a 0-indexed integer array nums. The concatenation of two 
    numbers is the number formed by concatenating their numerals. For example, 
    the concatenation of 15, 49 is 1549. The concatenation value of nums is 
    initially equal to 0. Perform this operation until nums becomes empty:
    • If there exists more than one number in nums, pick the first element and 
    last element in nums respectively and add the value of their concatenation 
    to the concatenation value of nums, then delete the first and last element 
    from nums.
    • If one element exists, add its value to the concatenation value of nums, 
    then delete it.
    Return the concatenation value of nums.

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        int: Returns the concatenation value of nums.
    """
    res = 0
    left = 0
    right = len(nums) - 1
    while left <= right:
        if left == right:
            res += nums[left]
        else:
            res += int(str(nums[left]) + str(nums[right]))
        left += 1
        right -= 1
    return res
