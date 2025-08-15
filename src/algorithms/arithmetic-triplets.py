def arithmeticTriplets(nums, diff):
    """You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
    • i < j < k,
    • nums[j] - nums[i] == diff, and
    • nums[k] - nums[j] == diff.
    Return the number of unique arithmetic triplets.

    Args:
        nums (list[int]): A list of integers.
        diff (int): A positive integer

    Returns:
        int: Returns the number of unique arithmetic triplets.
    """
    count = 0
    for i in range(len(nums) - 2):
        for j in range(i + 1, len(nums) - 1):
            for k in range(j + 1, len(nums)):
                if nums[j] - nums[i] == diff and nums[k] - nums[j] == diff:
                    count += 1
    return count
