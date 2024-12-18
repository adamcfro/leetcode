def numberOfPoints(nums):
    """You are given a 0-indexed 2D integer array nums representing the 
    coordinates of the cars parking on a number line. For any index i, nums[i] 
    = [starti, endi] where starti is the starting point of the ith car and endi 
    is the ending point of the ith car. Return the number of integer points on 
    the line that are covered with any part of a car.

    Args:
        nums (list[[int]]): A 2D list of integers representing points.

    Returns:
        int: Returns a count of points that cars occupy.
    """
    points = set()
    for i in range(len(nums)):
        start = nums[i][0]
        end = nums[i][1]
        while start <= end:
            points.add(start)
            start += 1
    return len(points)
