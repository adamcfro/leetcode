def minimumAverage(nums):
    """You have an array of floating point numbers averages which is initially 
    empty. You are given an array nums of n integers where n is even. You 
    repeat the following procedure n / 2 times:
    • Remove the smallest element, minElement, and the largest element 
    maxElement, from nums.
    • Add (minElement + maxElement) / 2 to averages.
    Return the minimum element in averages.

    Args:
        nums (list[int]): A list of positive integers.

    Returns:
        float: Returns a floating point number.
    """
    res = []
    left = 0
    right = len(nums) - 1
    nums.sort()
    while left < right:
        res.append((nums[left] + nums[right]) / 2)
        left += 1
        right -= 1
    return min(res)
