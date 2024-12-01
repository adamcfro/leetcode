def getSneakyNumbers(nums):
    """In the town of Digitville, there was a list of numbers called nums 
    containing integers from 0 to n - 1. Each number was supposed to appear 
    exactly once in the list, however, two mischievous numbers sneaked in an 
    additional time, making the list longer than usual. As the town detective, 
    your task is to find these two sneaky numbers. Return an array of size two 
    containing the two numbers (in any order), so peace can return to 
    Digitville.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of integers.
    """
    res = []
    seen = set()
    for num in nums:
        if num in seen:
            res.append(num)
        else:
            seen.add(num)
            if len(res) == 2:
                break
    return res
