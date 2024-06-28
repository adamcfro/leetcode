def maximum_count(nums):
    """Given an array nums sorted in non-decreasing order, return the maximum
    between the number of positive integers and the number of negative integers.
    In other words, if the number of positive integers in nums is pos and the
    number of negative integers is neg, then return the maximum of pos and neg.

    Args:
        nums (List[int]): A list of integers.

    Returns:
        Integer: Returns the maximum number of positive or negative integers.
    """
    pos = 0
    neg = 0
    for num in nums:
        if num > 0:
            pos += 1
        elif num < 0:
            neg += 1
    return max(pos, neg)
