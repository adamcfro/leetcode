def intersection(nums1, nums2):
    """Given two integer arrays nums1 and nums2, return an array of their 
    intersection. Each element in the result must be unique and you may return 
    the result in any order.

    Args:
        nums1 (list[int]): A list of integers.
        nums2 (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of unique elements that appear in both lists.
    """
    res = []
    seen = set()
    for num in nums1:
        seen.add(num)
    for num in nums2:
        if num in seen and num not in res:
            res.append(num)
    return res
