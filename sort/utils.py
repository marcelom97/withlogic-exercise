def chat_to_ascii(arr, i):
    return ord(arr[i]) if i < len(arr) else -1


def quicksort(arr, lo, hi, d):
    if lo >= hi:
        return arr
    lp = lo
    hp = hi
    p = chat_to_ascii(arr[lo], d)
    i = lo + 1

    while i <= hp:
        current = chat_to_ascii(arr[i], d)
        if current < p:
            arr[i], arr[lp] = arr[lp], arr[i]
            lp += 1
            i += 1
        elif current > p:
            arr[i], arr[hp] = arr[hp], arr[i]
            hp -= 1
        else:
            i += 1

    quicksort(arr, lo, lp - 1, d)
    if p >= 0:
        quicksort(arr, lp, hp, d + 1)
        quicksort(arr, hp + 1, hi, d)


def sort(arr):
    quicksort(arr, 0, len(arr) - 1, 0)
    return arr
