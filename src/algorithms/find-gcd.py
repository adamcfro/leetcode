def findGDC(nums):
    """Given an integer array nums, return the greatest common divisor of the 
    smallest number and largest number in nums.

    The greatest common divisor of two numbers is the largest positive integer 
    that evenly divides both numbers.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns an integer representing the greatest common divisor.
    """
    nums.sort()
    low = nums[0]
    high = nums[-1]
    res = low
    while low % res != 0 or high % res != 0:
        res -= 1
    return res
