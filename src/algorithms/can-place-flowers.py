def can_place_flowers(flowerbed, n):
    """You have a long flowerbed in which some of the plots are planted, and 
    some are not. However, flowers cannot be planted in adjacent plots. Given 
    an integer array flowerbed containing 0's and 1's, where 0 means empty and 
    1 means not empty, and an integer n, return true if n new flowers can be 
    planted in the flowerbed without violating the no-adjacent-flowers rule and 
    false otherwise.

    Args:
        flowerbed (list[int]): A list of 0's and 1's.
        n (int): An integer representing the number of flowers to be planted.

    Returns:
        Boolean: Returns true if n flowers can be planted, False otherwise.
    """
    i = 0
    while i < len(flowerbed) and n > 0:
        if flowerbed[i] == 1:
            i += 2
        elif i == len(flowerbed) - 1 or flowerbed[i + 1] == 0:
            n -= 1
            i += 2
        else:
            i += 3
    return n <= 0
