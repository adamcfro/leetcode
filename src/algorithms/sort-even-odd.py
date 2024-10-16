def sort_even_odd(nums):
    """You are given a 0-indexed integer array nums. Rearrange the values of 
    nums according to the following rules:
    • Sort the values at odd indices of nums in non-increasing order. For 
    example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. 
    The values at odd indices 1 and 3 are sorted in non-increasing order.
    • Sort the values at even indices of nums in non-decreasing order. For 
    example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. 
    The values at even indices 0 and 2 are sorted in non-decreasing order.
    Return the array formed after rearranging the values of nums.

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        list[int]: Returns a list after rearranging the values of nums.
    """
    res = []
    evens = []
    odds = []
    for i in range(len(nums)):
        if i % 2 == 0:
            evens.append(nums[i])
        else:
            odds.append(nums[i])
    evens = sorted(evens)
    odds = sorted(odds, reverse=True)
    for i in range(max(len(evens), len(odds))):
        if len(evens) > i:
            res.append(evens[i])
        if len(odds) > i:
            res.append(odds[i])
    return res
