def contains_duplicate(nums):
    """Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Args:
        nums (List[int]): A list of integers

    Returns:
        Boolean: Returns true any value in nums appears at least twice
    """
    seen = set()
    for i in range(len(nums)):
        if nums[i] in seen:
            return True
        else:
            seen.add(nums[i])
    return False