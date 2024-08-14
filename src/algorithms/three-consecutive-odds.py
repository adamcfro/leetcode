def three_consecutive_odds(arr):
    """Given an integer array arr, return true if there are three consecutive 
    odd numbers in the array. Otherwise, return false.

    Args:
        arr (list[int]): A list of positive integers.

    Returns:
        int: Returns true if there are three consecutive odd numbers in array.
    """
    count = 0
    for num in arr:
        if num % 2 == 1:
            count += 1
            if count == 3:
                return True
        else:
            count = 0
    return False
