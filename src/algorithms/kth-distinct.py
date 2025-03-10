def kthDistinct(arr, k):
    """A distinct string is a string that is present only once in an array.
    Given an array of strings arr, and an integer k, return the kth distinct 
    string present in arr. If there are fewer than k distinct strings, return 
    an empty string "".

    Note that the strings are considered in the order in which they appear in 
    the array.

    Args:
        arr (list[str]): A list of strings.
        k (int): An integers representing the kth distinct integer.

    Returns:
        _type_: _description_
    """
    hashmap = {}
    for char in arr:
        if char not in hashmap:
            hashmap[char] = 1
        else:
            hashmap[char] += 1
    for key, val in hashmap.items():
        if val == 1:
            k -= 1
        if k == 0:
            return key
    return ""
