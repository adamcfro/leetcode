def two_out_of_three(nums1, nums2, nums3):
    """Given three integer arrays nums1, nums2, and nums3, return a distinct 
    array containing all the values that are present in at least two out of the 
    three arrays. You may return the values in any order.

    Args:
        nums1 (list[int]): A list of positive integers.
        nums2 (list[int]): A list of positive integers.
        nums3 (list[int]): A list of positive integers.

    Returns:
        list[int]: Returns a list of integers that occur in at least two lists.
    """
    res = []
    s1 = set(nums1)
    s2 = set(nums2)
    s3 = set(nums3)
    for num in s1:
        if num in s2 or num in s3:
            res.append(num)
    for num in s2:
        if num in s3 and num not in res:
            res.append(num)
    return res
