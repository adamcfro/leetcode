def num_water_bottles(numBottles, numExchange):
    """There are numBottles water bottles that are initially full of water. You 
    can exchange numExchange empty water bottles from the market with one full 
    water bottle. The operation of drinking a full water bottle turns it into 
    an empty bottle. Given the two integers numBottles and numExchange, return 
    the maximum number of water bottles you can drink.

    Args:
        numBottles (int): An integer representing a number of bottles.
        numExchange (int): An integer representing a number of empty bottles.

    Returns:
        int: Returns a count of how many bottles of water can be consumed.
    """
    count = numBottles
    while numBottles >= numExchange:
        leftovers = numBottles % numExchange
        numBottles = numBottles // numExchange
        count += numBottles
        numBottles += leftovers
    return count
