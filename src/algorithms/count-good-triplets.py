def count_good_triplets(arr, a, b, c):
    """Given an array of integers arr, and three integers a, b and c, returns 
    the number of good triplets. A triplet (arr[i], arr[j], arr[k]) is good if 
    the following conditions are true ( |x| denotes the absolute value of x ):
    • 0 <= i < j < k < arr.length
    • |arr[i] - arr[j]| <= a
    • |arr[j] - arr[k]| <= b
    • |arr[i] - arr[k]| <= c

    Args:
        arr (list[int]): A list of integers.
        a (int): An integer greater than or equal to 0.
        b (int): An integer greater than or equal to 0.
        c (int): An integer greater than or equal to 0.

    Returns:
        int: Returns a count of good triplets.
    """
    count = 0
    for i in range(len(arr) - 2):
        for j in range(i + 1, len(arr) - 1):
            for k in range(j + 1, len(arr)):
                if abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                    count += 1
    return count
