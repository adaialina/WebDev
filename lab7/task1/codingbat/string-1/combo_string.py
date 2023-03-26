def combo_string(a, b):
    shrt = a
    lng = b

    if len(shrt) > len(lng):
        shrt, lng = lng, shrt

    return shrt + lng + shrt