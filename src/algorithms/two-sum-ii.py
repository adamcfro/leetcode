def twoSum(numbers, target):
    """Given a 1-indexed array of integers numbers that is already sorted in 
    non-decreasing order, find two numbers such that they add up to a specific 
    target number. Let these two numbers be numbers[index1] and numbers[index2] 
    where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers, index1 and index2, added by one as 
    an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may 
    not use the same element twice. Your solution must use only constant extra 
    space.

    Args:
        numbers (list[int]): A list of integers.
        target (int): An integer.

    Returns:
        list[int]: Returns a list of integers.
    """
    left = 0
    right = len(numbers) - 1
    while left < right:
        total = numbers[left] + numbers[right]
        if total == target:
            return [left + 1, right + 1]
        elif total > target:
            right -= 1
        else:
            left += 1
    return
