def sortArrayByParity(nums):
    """Given an integer array nums, move all the even integers at the beginning 
    of the array followed by all the odd integers. Return any array that 
    satisfies this condition.

    Args:
        nums (list[int]): A list of numbers.

    Returns:
        list[int]: Returns a sorted list of numbers.
    """
    res = []
    stack = []
    for num in nums:
        if num % 2 == 0:
            res.append(num)
        else:
            stack.append(num)
    for num in stack:
        res.append(num)
    return res
