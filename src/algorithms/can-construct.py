def can_construct(ransomNote, magazine):
    """Given two strings ransomNote and magazine, return true if ransomNote can 
    be constructed by using the letters from magazine and false otherwise. Each 
    letter in magazine can only be used once in ransomNote.

    Args:
        ransomNote (str): A string of lowercase English letters.
        magazine (str): A string of lowercase English letters.

    Returns:
        Boolean: Returns True if ransomNote can be constructed from the letters
        in magazine and False otherwise.
    """
    mag_letters = {}
    for char in magazine:
        if char in mag_letters:
            mag_letters[char] += 1
        else:
            mag_letters[char] = 1
    for char in ransomNote:
        if char in mag_letters:
            mag_letters[char] -= 1
            if mag_letters[char] < 0:
                return False
        else:
            return False
    return True
