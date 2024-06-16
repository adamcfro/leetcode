def number_of_pairs(nums1, nums2, k):
    """You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k. A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

    Return the total number of good pairs.

    Args:
        nums1 (List[int]): A list of integers.
        nums2 (List[int]): A list of integers.
        k (int): A positive integer.

    Returns:
        integer: Returns the total number of good pairs.
    """
    count = 0
    for i in range(len(nums1)):
        for j in range(len(nums2)):
            if nums1[i] % (nums2[j] * k) == 0:
                count += 1
    return count
