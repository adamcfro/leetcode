def divide_array(nums):
    """You are given an integer array nums consisting of 2 * n integers. You
    need to divide nums into n pairs such that:
    • Each element belongs to exactly one pair.
    • The elements present in a pair are equal.
    Return true if nums can be divided into n pairs, otherwise return false.

    Args:
        nums (List[int]): A list of integers.

    Returns:
        Boolean: Returns true if nums can be divided into n pairs.
    """
    if len(nums) % 2 != 0:
        return False
    elems = {}
    for num in nums:
        if num in elems:
            elems[num] += 1
        else:
            elems[num] = 1
    for key, value in elems.items():
        if value % 2 != 0:
            return False
    return True
