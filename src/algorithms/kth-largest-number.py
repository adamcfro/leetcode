def kthLargestNumber(nums, k):
    """You are given an array of strings nums and an integer k. Each string in 
    nums represents an integer without leading zeros. Return the string that 
    represents the kth largest integer in nums.

    Note: Duplicate numbers should be counted distinctly. For example, if nums 
    is ["1","2","2"], "2" is the first largest integer, "2" is the 
    second-largest integer, and "1" is the third-largest integer.

    Args:
        nums (list[str]): A list of strings representing integers.
        k (int): An integer representing the kth value.

    Returns:
        str: Returns the kth largest number in nums.
    """
    integer_list = [int(x) for x in nums]
    integer_list.sort(reverse=True)
    return str(integer_list[k - 1])
