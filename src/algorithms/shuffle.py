def shuffle(nums, n):
    """Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,
    y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].

    Args:
        nums (list[int]): A list of positive integers.
        n (int): A positive integer.

    Returns:
        list[int]: Returns a modified list.
    """
    res = []
    left = 0
    right = len(nums) // 2
    while right < len(nums):
        res.extend([nums[left], nums[right]])
        left += 1
        right += 1
    return res
