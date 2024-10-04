def single_number(nums):
    """Given a non-empty array of integers nums, every element appears twice 
    except for one. Find that single one. You must implement a solution with a 
    linear runtime complexity and use only constant extra space.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        int: Returns the element that appears only once in nums.
    """
    seen = {}
    for num in nums:
        if num in seen:
            seen[num] += 1
        else:
            seen[num] = 1
    for key, val in seen.items():
        if val == 1:
            return key
