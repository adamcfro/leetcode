def findTheDistanceValue(arr1, arr2, d):
    """Given two integer arrays arr1 and arr2, and the integer d, return the 
    distance value between the two arrays. The distance value is defined as the 
    number of elements arr1[i] such that there is not any element arr2[j] 
    where |arr1[i]-arr2[j]| <= d.

    Args:
        arr1 (list[int]): A list of integers.
        arr2 (list[int]): A list of integers.
        d (int): A positive integer.

    Returns:
        int: Returns a count of valid elements.
    """
    count = 0
    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if abs(arr1[i] - arr2[j]) <= d:
                break
            elif j == len(arr2) - 1:
                count += 1
    return count
