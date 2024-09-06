# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:


def guess_number(n, pick):
    """We are playing the Guess Game. The game is as follows: I pick a number 
    from 1 to n. You have to guess which number I picked. Every time you guess 
    wrong, I will tell you whether the number I picked is higher or lower than 
    your guess. You call a pre-defined API int guess(int num), which returns 
    three possible results:
    • -1: Your guess is higher than the number I picked (i.e. num > pick).
    • 1: Your guess is lower than the number I picked (i.e. num < pick).
    • 0: your guess is equal to the number I picked (i.e. num == pick).
    Return the number that I picked.

    Args:
        n (int): A positive integer.
        pick (int): A positive integer representing a chosen number.

    Returns:
        int: Returns the chosen number.
    """
    left = 1
    right = n
    while left <= right:
        mid = (left + right) // 2
        res = guess(mid)
        if res == 0:
            return mid
        elif res > 0:
            left = mid + 1
        else:
            right = mid - 1
    return -1
