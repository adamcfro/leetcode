def mostFrequent(nums, key):
    """You are given a 0-indexed integer array nums. You are also given an 
    integer key, which is present in nums. For every unique integer target in 
    nums, count the number of times target immediately follows an occurrence of 
    key in nums. In other words, count the number of indices i such that:
    • 0 <= i <= nums.length - 2,
    • nums[i] == key and,
    • nums[i + 1] == target.
    Return the target with the maximum count. The test cases will be generated 
    such that the target with maximum count is unique.

    Args:
        nums (list[int]): A list of integers.
        key (int): An integer.

    Returns:
        int: Returns the maximimum occurring target integer.
    """
    res = [float('-inf'), float('-inf')]
    target = {}
    for i in range(len(nums) - 1):
        if nums[i] == key:
            if nums[i + 1] in target:
                target[nums[i + 1]] += 1
            else:
                target[nums[i + 1]] = 1
    for key, val in target.items():
        if val > res[1]:
            res = [key, val]
    return res[0]
