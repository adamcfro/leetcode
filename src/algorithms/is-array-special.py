def is_array_special(nums):
    """Returns true if nums is a special array.

    An array is considered special if every pair of its adjacent elements
    contains two numbers with different parity. You are given an array of
    integers nums. Return true if nums is a special array, otherwise, return
    false.

    Args:
        nums (List[int]): A list of positive integers

    Returns:
        Boolean: Returns true if all adjacent elements in nums have different
        parity.
    """
    if len(nums) == 1:
        return True
    for i in range(len(nums) - 1):
        if (nums[i] % 2 == 0 and nums[i + 1] % 2 == 0) or (
            nums[i] % 2 == 1 and nums[i + 1] % 2 == 1
        ):
            return False
    return True
