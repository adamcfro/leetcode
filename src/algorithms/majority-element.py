def majorityElement(nums):
    """Given an array nums of size n, return the majority element. The majority 
    element is the element that appears more than ⌊n / 2⌋ times. You may assume 
    that the majority element always exists in the array.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the majority element.
    """
    count = {}
    half = len(nums) // 2
    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1
    for x, y in count.items():
        if y > half:
            return x
