def find_poisoned_duration(timeSeries, duration):
    """Our hero Teemo is attacking an enemy Ashe with poison attacks! When 
    Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More 
    formally, an attack at second t will mean Ashe is poisoned during the 
    inclusive time interval [t, t + duration - 1]. If Teemo attacks again 
    before the poison effect ends, the timer for it is reset, and the poison 
    effect will end duration seconds after the new attack. You are given a 
    non-decreasing integer array timeSeries, where timeSeries[i] denotes that 
    Teemo attacks Ashe at second timeSeries[i], and an integer duration. Return 
    the total number of seconds that Ashe is poisoned.

    Args:
        time_series (list[int]): A list of integers representing seconds where
        Teemo attacks.
        duration (int): An integer representing duration of an attack.

    Returns:
        int: Returns the total duration of poison from Teemo's attacks.
    """
    res = 0
    length = len(timeSeries)
    for i in range(length):
        if i + 1 < length and timeSeries[i] + duration <= timeSeries[i + 1]:
            res += duration
        elif i + 1 == length:
            res += duration
        else:
            res += timeSeries[i + 1] - timeSeries[i]
    return res
