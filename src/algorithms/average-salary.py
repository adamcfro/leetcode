def average_salary(salary):
    """You are given an array of unique integers salary where salary[i] is the 
    salary of the ith employee.
    Return the average salary of employees excluding the minimum and maximum 
    salary. Answers within 10-5 of the actual answer will be accepted.

    Args:
        salary (list[int]): A list of integers representing salaries.

    Returns:
        float: Returns the average salary excluding min and max salaries.
    """
    total = 0
    salary = sorted(salary)
    for i in range(1, len(salary) - 1):
        total += salary[i]
    return total / (len(salary) - 2)
