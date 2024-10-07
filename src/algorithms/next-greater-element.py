def next_greater_element(nums1, nums2):
    """The next greater element of some element x in an array is the first 
    greater element that is to the right of x in the same array. You are given 
    two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a 
    subset of nums2. For each 0 <= i < nums1.length, find the index j such that 
    nums1[i] == nums2[j] and determine the next greater element of nums2[j] in 
    nums2. If there is no next greater element, then the answer for this query 
    is -1. Return an array ans of length nums1.length such that ans[i] is the 
    next greater element as described above.

    Args:
        nums1 (list[int]): A list of integers.
        nums2 (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of integers representing the next greater 
        element.
    """
    res = []
    for i in range(len(nums1)):
        index = nums2.index(nums1[i])
        elem = -1
        for j in range(index, len(nums2) - 1):
            if nums2[j + 1] > nums2[index]:
                elem = nums2[j + 1]
                break
        res.append(elem)
    return res
