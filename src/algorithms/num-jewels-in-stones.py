def numJewelsInStones(jewels, stones):
    """You're given strings jewels representing the types of stones that are 
    jewels, and stones representing the stones you have. Each character in 
    stones is a type of stone you have. You want to know how many of the stones 
    you have are also jewels. Letters are case sensitive, so "a" is considered 
    a different type of stone from "A".

    Args:
        jewels (str): A string of English letters.
        stones (str): A string of English letters.

    Returns:
        int: Returns a count of stones that are jewels.
    """
    count = 0
    for char in stones:
        if char in jewels:
            count += 1
    return count
