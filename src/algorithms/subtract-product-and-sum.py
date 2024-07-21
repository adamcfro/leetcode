def subtract_product_and_sum(n):
    """Given an integer number n, return the difference between the product of 
    its digits and the sum of its digits.

    Args:
        n (int): A positive integer.

    Returns:
        int: Returns the difference between the product and sum of n's digits.
    """
    product = 1
    digit_sum = 0
    while n != 0:
        temp = n % 10
        product *= temp
        digit_sum += temp
        n = n // 10
    return product - digit_sum
