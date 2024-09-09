def max_number_of_balloons(text):
    """Given a string text, you want to use the characters of text to form as 
    many instances of the word "balloon" as possible. You can use each 
    character in text at most once. Return the maximum number of instances that 
    can be formed.

    Args:
        text (str): A string of lowercase English letters.

    Returns:
        int: Returns a count of how many times "balloon" can be formed from the
        characters in text.
    """
    count = 0
    letter_count = {}
    balloon = "balloon"
    for i in range(len(text)):
        if text[i] in letter_count:
            letter_count[text[i]] += 1
        else:
            letter_count[text[i]] = 1
    while True:
        for char in balloon:
            if char not in letter_count or letter_count[char] <= 0:
                return count
            else:
                letter_count[char] -= 1
        count += 1
