def find_is_containing(words, x):
    """You are given a 0-indexed array of strings words and a character x
    Return an array of indices representing the words that contain the
    character x. Note that the returned array may be in any order.

    Args:
        words (List[str]): A list of strings.
        x (String): A lowercase English letter.

    Returns:
        List[int]: Returns a list of indices.
    """
    res = []
    index = 0
    for word in words:
        for char in word:
            if char == x:
                res.append(index)
                break
        index += 1
    return res
