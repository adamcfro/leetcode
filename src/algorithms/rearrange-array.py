def rearrangeArray(nums):
    """You are given a 0-indexed integer array nums of even length consisting 
    of an equal number of positive and negative integers. You should return the 
    array of nums such that the the array follows the given conditions:
    • Every consecutive pair of integers have opposite signs.
    • For all integers with the same sign, the order in which they were present 
    in nums is preserved.
    • The rearranged array begins with a positive integer.
    Return the modified array after rearranging the elements to satisfy the 
    aforementioned conditions.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a modified list of integers.
    """
    pos = []
    neg = []
    res = []
    for num in nums:
        if num > 0:
            pos.append(num)
        else:
            neg.append(num)
    for i in range(len(pos)):
        res.extend([pos[i], neg[i]])
    return res
