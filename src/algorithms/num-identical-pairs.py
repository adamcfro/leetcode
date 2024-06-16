def num_identical_pairs(nums):
    """Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.

    Args:
        nums (List[int]): A list of integers.

    Returns:
        Integer: Returns a count of good pairs.
    """
    count = 0
    elems = {}
    for num in nums:
        if num in elems:
            count += elems[num]
            elems[num] += 1
        else:
            elems[num] = 1
    return count
