MULTIPLIER = 252533
DIVIDER = 33554393
STARTING_VALUE = 20151125
requested_value = STARTING_VALUE;
COL = 3019
ROW = 3010
INDEX = ((((ROW + COL - 1)**2) + ROW + COL - 1)/2) - (ROW - 1)

for i in 1..INDEX-1
    requested_value*=MULTIPLIER
    requested_value = requested_value - ((requested_value/DIVIDER)*DIVIDER)
end

p requested_value