def added_integer(nums1, nums2):
    """Returns the special integer x.

    You are given two arrays of equal length, nums1 and nums2. Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x. As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies. Return the integer x.

    Args:
        nums1 (List[int]): A list of integers.
        nums2 (List[int]): A list of integers.

    Returns:
        Integer: Returns the integer added to each element in nums1 so that the list becomes equal to nums2.
    """
    min1 = min(nums1)
    min2 = min(nums2)
    return min2 - min1


print(added_integer([2, 6, 4], [9, 7, 5]))
print(added_integer([10], [5]))
