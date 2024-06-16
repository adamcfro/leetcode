def unique_occurrences(arr):
    """Given an array of integers arr, returns true if the number of occurrences of each value in the array is unique or false otherwise.

    Args:
        arr (List[int]): A list of integers.

    Returns:
        Boolean: Returns true if the number of occurrences of each value in the array is unique or false otherwise.
    """
    elems = {}
    seen_vals = set()
    for num in arr:
        elems[num] = elems.get(num, 0) + 1
    for val in elems.values():
        if val in seen_vals:
            return False
        seen_vals.add(val)
    return True
