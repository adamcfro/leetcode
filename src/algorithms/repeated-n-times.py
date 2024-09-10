def repeated_n_times(nums):
    """You are given an integer array nums with the following properties:
    • nums.length == 2 * n.
    • nums contains n + 1 unique elements.
    • Exactly one element of nums is repeated n times.
    Return the element that is repeated n times.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the element that is repeated n times.
    """
    nums_set = set()
    for i in range(len(nums)):
        if nums[i] in nums_set:
            return nums[i]
        else:
            nums_set.add(nums[i])
