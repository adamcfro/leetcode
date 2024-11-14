def leftRightDifference(nums):
    """Given a 0-indexed integer array nums, find a 0-indexed integer array 
    answer where answer.length == nums.length and answer[i] = |leftSum[i] - 
    rightSum[i]|.

    • leftSum[i] is the sum of elements to the left of the index i in the array 
    nums. If there is no such element, leftSum[i] = 0.
    • rightSum[i] is the sum of elements to the right of the index i in the 
    array nums. If there is no such element, rightSum[i] = 0.

    Return the array answer.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of integers.
    """
    res = []
    left = 0
    right = sum(nums)
    for i in range(len(nums)):
        left += nums[i]
        res.append(abs(left - right))
        right -= nums[i]
    return res
