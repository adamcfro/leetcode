def findDelayedArrivalTime(arrivalTime, delayedTime):
    """You are given a positive integer arrivalTime denoting the arrival time 
    of a train in hours, and another positive integer delayedTime denoting the 
    amount of delay in hours. Return the time when the train will arrive at the 
    station. Note that the time in this problem is in 24-hours format.

    Args:
        arrivalTime (int): An integer representing a specific hour.
        delayedTime (int): An integer representing a number of hours.

    Returns:
        int: Returns an integer representing a specific hour.
    """
    return (arrivalTime + delayedTime) % 24
