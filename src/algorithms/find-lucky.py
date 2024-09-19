def find_lucky(arr):
    """Given an array of integers arr, a lucky integer is an integer that has a 
    frequency in the array equal to its value. Return the largest lucky integer 
    in the array. If there is no lucky integer return -1.

    Args:
        arr (list[int]): A list of integers.

    Returns:
        int: Returns the largest lucky integer.
    """
    obj = {}
    lucky_int = -1
    for num in arr:
        if num not in obj:
            obj[num] = 1
        else:
            obj[num] += 1
    for key, val in obj.items():
        if key == val and key > lucky_int:
            lucky_int = key
    return lucky_int
