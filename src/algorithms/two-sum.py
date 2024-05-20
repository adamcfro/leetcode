from typing import List

def twoSum(nums: List[int], target: int) -> List[int]:
    """Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
    
    You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

    Args:
        nums (List[int]): a list of numbers
        target (int): a target number

    Returns:
        List[int]: returns a list of indices that add up to target
    """
    for i in range(len(nums)):
        for j in range (i + 1, len(nums)):
            if nums[j] == target - nums[i]:
                return [i, j]