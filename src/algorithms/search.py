def search(nums, target):
    """Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    Args:
        nums (List[int]): A list of integers.
        target (Integer): A target integer.

    Returns:
        Integer: Returns the target index if it exists, else returns -1.
    """
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    return -1
