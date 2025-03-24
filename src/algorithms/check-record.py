def checkRecord(s):
    """You are given a string s representing an attendance record for a student 
    where each character signifies whether the student was absent, late, or 
    present on that day. The record only contains the following three 
    characters:
    • 'A': Absent.
    • 'L': Late.
    • 'P': Present.
    The student is eligible for an attendance award if they meet both of the 
    following criteria:
    • The student was absent ('A') for strictly fewer than 2 days total.
    • The student was never late ('L') for 3 or more consecutive days.
    Return true if the student is eligible for an attendance award, or false 
    otherwise.

    Args:
        s (str): A string of "A", "L", and "P" characters.

    Returns:
        Boolean: Returns true if a student is eligible for an attendance award.
    """
    absences = 0
    late = 0
    for char in s:
        if char == "A":
            absences += 1
            late = 0
        elif char == "L":
            late += 1
        else:
            late = 0
        if absences > 1 or late > 2:
            return False
    return True
