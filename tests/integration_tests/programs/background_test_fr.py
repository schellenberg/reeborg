# We do not test separately RUR.is_background_tile
# as it is tested throughout

#----RUR.fill_background------------
# fill_ works with known tiles and colors
assert not RUR.is_background_tile("gazon", 2, 2)
RUR.fill_background("gazon")
assert RUR.is_background_tile("gazon", 2, 2)
assert not RUR.is_background_tile("red", 2, 2)
RUR.fill_background("red")
assert RUR.is_background_tile("red", 2, 2)


#----RUR.add_background_tile------------
# add_ only works with known tiles
RUR.add_background_tile("gazon", 2, 2)
assert RUR.is_background_tile("gazon", 2, 2)
# testing unknown
error = False
try:
    RUR.add_background_tile("red", 2, 2)
except ReeborgError:
    error = True
assert error
# testing wrong location
error = False
try:
    RUR.add_background_tile("eau", 0, 2)
except ReeborgError:
    error = True
assert error

#----RUR.add_colored_tile------------
# add_colored_ does not work with named tiles
error = False
try:
    RUR.add_colored_tile("boue", 2, 2)
except ReeborgError:
    error = True
assert error

# testing unknown
error = False
try:
    RUR.add_colored_tile("blue", 2, 2)
except ReeborgError:
    error = True
assert not error
# testing wrong location
error = False
try:
    RUR.add_colored_tile("eau", 2, 0)
except ReeborgError:
    error = True
assert error

#----RUR.remove_background_tile------------
# remove works with any type
RUR.add_background_tile("eau", 3, 3)
RUR.remove_background_tile("eau", 3, 3)
RUR.add_colored_tile("black", 4, 4)
RUR.remove_background_tile("black", 4, 4)

error = False
try:
    RUR.remove_background_tile("black", 4, 4)
except ReeborgError:
    error = True
assert error

RUR.add_background_tile("eau", 4, 4)
error = False
try:
    RUR.remove_background_tile("gazon", 4, 4)
except ReeborgError:
    error = True
assert error

RUR.add_background_tile("gravier", 4, 4)
error = False
try: # invalid location
    RUR.remove_background_tile("gravier", 40, 4)
except ReeborgError:
    error = True
assert error

#----RUR.get_background_tile------------
RUR.add_background_tile("gravier", 1, 1)
assert "gravier" == RUR.get_background_tile(1, 1)
RUR.remove_background_tile("gravier", 1, 1)
assert RUR.get_background_tile(1, 1) is None
