def number_of_pairs(nums):
    """You are given a 0-indexed integer array nums. In one operation, you may 
    do the following:
    • Choose two integers in nums that are equal.
    • Remove both integers from nums, forming a pair.
    Return a 0-indexed integer array answer of size 2 where answer[0] is the 
    number of pairs that are formed and answer[1] is the number of leftover 
    integers in nums after doing the operation as many times as possible.

    Args:
        nums (list[int]): A list of integers.

    Returns:
        list[int]: Returns a list of length 2 where res[0] is the number of 
        pairs formed and res[1] is the number of leftover integers.
    """
    hashtable = {}
    for num in nums:
        if num not in hashtable:
            hashtable[num] = 1
        else:
            hashtable[num] += 1
    pairs = 0
    leftovers = 0
    for num in hashtable:
        pairs += hashtable[num] // 2
        leftovers += hashtable[num] % 2
    return [pairs, leftovers]
