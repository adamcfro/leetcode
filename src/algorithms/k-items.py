def k_items(numOnes, numZeros, numNegOnes, k):
    """There is a bag that consists of items, each item has a number 1, 0, or 
    -1 written on it. You are given four non-negative integers numOnes, 
    numZeros, numNegOnes, and k. The bag initially contains:
    • numOnes items with 1s written on them.
    • numZeroes items with 0s written on them.
    • numNegOnes items with -1s written on them.
    We want to pick exactly k items among the available items. Return the 
    maximum possible sum of numbers written on the items.

    Args:
        numOnes (int): An integer greater than or equal to 0.
        numZeros (int): An integer greater than or equal to 0.
        numNegOnes (int): An integer greater than or equal to 0.
        k (int): An integer greater than or equal to 0.

    Returns:
        int: Returns the max sum of numbers written on the items.
    """
    if numOnes > k:
        return k
    elif numOnes + numZeros >= k:
        return numOnes
    else:
        temp = k - numOnes - numZeros
        return numOnes - temp
