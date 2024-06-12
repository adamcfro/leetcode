def convert_temperature(celsius):
    """Converts a given Celsius temperature to Kelvin and Fahrenheit.

    You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius. You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit]. Return the array ans.

    Args:
        celsius (Float): A positive float number.

    Returns:
        List[float]: Returns a list with a Celsius temperature converted to Kelvin and Fahrenheit.
    """
    kelvin = celsius + 273.15
    fahrenheit = celsius * 1.8 + 32
    return [kelvin, fahrenheit]
