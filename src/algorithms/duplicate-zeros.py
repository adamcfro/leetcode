def duplicateZeros(arr):
    """Given a fixed-length integer array arr, duplicate each occurrence of 
    zero, shifting the remaining elements to the right. Note that elements 
    beyond the length of the original array are not written. Do the above 
    modifications to the input array in place and do not return anything.

    Args:
        arr (_type_): _description_

    Returns:
        _type_: _description_
    """
    i = 0
    while i < len(arr) - 1:
        if arr[i] == 0:
            arr.insert(i + 1, 0)
            arr.pop()
            i += 2
        else:
            i += 1
