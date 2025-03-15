def secondHighest(s):
    """Given an alphanumeric string s, return the second largest numerical 
    digit that appears in s, or -1 if it does not exist.

    An alphanumeric string is a string consisting of lowercase English letters 
    and digits.

    Args:
        s (str): A string of lowercase English letters and digits.

    Returns:
        int: Returns the second largest numerical digit or -1 if it doesn't 
        exist.
    """
    nums = []
    for char in s:
        if char.isdigit():
            nums.append(char)
    nums.sort(reverse=True)
    if len(nums) > 0:
        highest = nums[0]
        for num in nums:
            if num != highest:
                return int(num)
    return -1
