def maximize_sum(nums, k):
    """You are given a 0-indexed integer array nums and an integer k. Your task 
    is to perform the following operation exactly k times in order to maximize 
    your score:
    • Select an element m from nums.
    • Remove the selected element m from the array.
    • Add a new element with a value of m + 1 to the array.
    • Increase your score by m.
    Return the maximum score you can achieve after performing the operation 
    exactly k times.

    Args:
        nums (List[int]): A list of integers.
        k (int): Returns the maximums score after performing k operations.

    Returns:
        _type_: _description_
    """
    res = 0
    count = 0
    max_num = max(nums)
    while count < k:
        res += max_num
        max_num += 1
        count += 1
    return res
