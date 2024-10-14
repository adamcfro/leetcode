def last_visited_integers(nums):
    """Given an integer array nums where nums[i] is either a positive integer 
    or -1. We need to find for each -1 the respective positive integer, which 
    we call the last visited integer. To achieve this goal, let's define two 
    empty arrays: seen and ans. Start iterating from the beginning of the array 
    nums.
    • If a positive integer is encountered, prepend it to the front of seen.
    • If -1 is encountered, let k be the number of consecutive -1s seen so far 
    (including the current -1):
    - If k is less than or equal to the length of seen, append the k-th element 
    of seen to ans.
    - If k is strictly greater than the length of seen, append -1 to ans.
    Return the array ans.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns the resulting array.
    """
    seen = []
    ans = []
    consecutive = 0
    for i in range(len(nums)):
        num = nums[i]
        if num > 0:
            seen.insert(0, num)
            consecutive = 0
        else:
            if len(seen) <= consecutive:
                ans.append(-1)
            else:
                ans.append(seen[consecutive])
            consecutive += 1
    return ans
