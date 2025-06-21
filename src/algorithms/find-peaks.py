def findPeak(mountain):
    """You are given a 0-indexed array mountain. Your task is to find all the 
    peaks in the mountain array. Return an array that consists of indices of 
    peaks in the given array in any order.

    Notes:
    A peak is defined as an element that is strictly greater than its 
    neighboring elements. The first and last elements of the array are not a 
    peak.

    Args:
        mountain (list[int]): A list of integers representing peaks.

    Returns:
        list[int]: Returns a list of indices of peaks in the list.
    """
    peaks = []
    for i in range(1, len(mountain) - 1):
        if mountain[i] > mountain[i - 1] and mountain[i] > mountain[i + 1]:
            peaks.append(i)
    return peaks
