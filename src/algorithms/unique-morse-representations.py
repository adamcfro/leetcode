def uniqueMorseRepresentations(words):
    """International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes. Given an array of strings words 
    where each word can be written as a concatenation of the Morse code of each 
    letter. For example, "cab" can be written as "-.-..--...", which is the 
    concatenation of "-.-.", ".-", and "-...". We will call such a 
    concatenation the transformation of a word. Return the number of different 
    transformations among all words we have.

    Args:
        words (list[str]): A list of strings made of lowercase English letters.

    Returns:
        int: Returns the number of different transformations among all words.
    """
    transformations = set()
    morse = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
    ]
    for word in words:
        morseTranslation = ""
        for i in range(len(word)):
            morseTranslation += morse[ord(word[i]) - 97]
        transformations.add(morseTranslation)
    return len(transformations)
