def passThePillow(n, time):
    """There are n people standing in a line labeled from 1 to n. The first 
    person in the line is holding a pillow initially. Every second, the person 
    holding the pillow passes it to the next person standing in the line. Once 
    the pillow reaches the end of the line, the direction changes, and people 
    continue passing the pillow in the opposite direction.

    For example, once the pillow reaches the nth person they pass it to the n - 
    1th person, then to the n - 2th person and so on.

    Given the two positive integers n and time, return the index of the person 
    holding the pillow after time seconds.

    Args:
        n (int): An integer representing people.
        time (int): An integer representing time.

    Returns:
        int: Returns an integer representing a person in a line.
    """
    person = 1
    forward = True
    while time > 0:
        if forward:
            person += 1
            if person == n:
                forward = False
        else:
            person -= 1
            if person == 1:
                forward = True
        time -= 1
    return person
