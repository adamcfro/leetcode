def is_circular_sentence(sentence):
    """A sentence is a list of words that are separated by a single space with 
    no leading or trailing spaces. For example, "Hello World", "HELLO", "hello 
    world hello world" are all sentences. Words consist of only uppercase and 
    lowercase English letters. Uppercase and lowercase English letters are 
    considered different. A sentence is circular if:
    • The last character of a word is equal to the first character of the next 
    word.
    • The last character of the last word is equal to the first character of 
    the first word.
    For example, "leetcode exercises sound delightful", "eetcode", "leetcode 
    eats soul" are all circular sentences. However, "Leetcode is cool", "happy 
    Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
    Given a string sentence, return true if it is circular. Otherwise, return 
    false.

    Args:
        sentence (str): A string of words consisting of English letters and 
        spaces.

    Returns:
        Boolean: Returns true if sentence is circular.
    """
    words = sentence.split()
    for i in range(len(words) - 1):
        if words[i][-1] != words[i + 1][0]:
            return False
    if sentence[0][0] == sentence[len(sentence) - 1][-1]:
        return True
    return False
