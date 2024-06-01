def find_special_integer(arr):
    """Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

    Args:
        arr (List[int]): A list of integers

    Returns:
        Integer: Returns the element that appears more than 25% of the time
    """
    goal = len(arr) / 4
    elems = {}
    if len(arr) == 1:
        return arr[0]
    for i in range(len(arr)):
        if arr[i] in elems:
            elems[arr[i]] += 1
            if elems[arr[i]] > goal:
                return arr[i]
        else:
            elems[arr[i]] = 1
    return -1