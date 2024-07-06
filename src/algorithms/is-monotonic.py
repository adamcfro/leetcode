def is_monotonic(nums):
    """An array is monotonic if it is either monotone increasing or monotone
    decreasing. An array nums is monotone increasing if for all i <= j, 
    nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, 
    nums[i] >= nums[j]. Given an integer array nums, return true if the given 
    array is monotonic, or false otherwise.

    Args:
        nums (List[int]): A list of integers.

    Returns:
        Boolean: Returns True if array is monotone increasing, and False 
        otherwise.
    """
    direction = 0
    for i in range(len(nums) - 1):
        if nums[i] > nums[i + 1]:
            if direction == 1:
                return False
            direction = -1
        elif nums[i] < nums[i + 1]:
            if direction == -1:
                return False
            direction = 1
    return True
