def maxIceCream(costs, coins):
    """It is a sweltering summer day, and a boy wants to buy some ice cream 
    bars. At the store, there are n ice cream bars. You are given an array 
    costs of length n, where costs[i] is the price of the ith ice cream bar in 
    coins. The boy initially has coins coins to spend, and he wants to buy as 
    many ice cream bars as possible. 

    Note: The boy can buy the ice cream bars in any order.

    Return the maximum number of ice cream bars the boy can buy with coins 
    coins. You must solve the problem by counting sort.

    Args:
        costs (list[int]): A list of integers.
        coins (int): A positive integer.

    Returns:
        int: Returns a count of ice cream bars that can be purchased.
    """
    count = 0
    costs.sort()
    for i in range(len(costs)):
        coins -= costs[i]
        if coins >= 0:
            count += 1
        else:
            break
    return count
