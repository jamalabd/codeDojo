def sum_array(a):
    '''sum_array(a)
        return sum of each element of array.
        if array is empty return 0.
    '''
    if len(a) == 0:
        return 0
    sum = 0
    for i in a:
        sum += i
    return sum
