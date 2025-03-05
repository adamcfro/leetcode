def maxProduct(nums):
    """Given the array of integers nums, you will choose two different indices 
    i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the max product of two elements in the array.
    """
    num1 = 0
    num2 = 0
    for i in range(len(nums)):
        if nums[i] > num1:
            num1, num2 = nums[i], num1
        else:
            num2 = max(nums[i], num2)
    return (num1 - 1) * (num2 - 1)
