def find_final_value(nums, original):
    """You are given an array of integers nums. You are also given an integer 
    original which is the first number that needs to be searched for in nums.
    You then do the following steps:
    • If original is found in nums, multiply it by two.
    • Otherwise, stop the process.
    • Repeat this process with the new number as long as you keep finding the 
    number.
    Return the final value of original.

    Args:
        nums (list[int]): A list of integers.
        original (int): A positive integer.

    Returns:
        int: Returns the final value of original.
    """
    while original in nums:
        original *= 2
    return original
