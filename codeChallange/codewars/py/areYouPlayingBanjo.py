# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:
def are_you_playing_banjo(name):
    '''are_you_playing_banjo(name)
       return who plays the banjo
    '''
    
    if(name[0] == 'R' or name[0] == 'r'):
        return name + " plays banjo" 
    else:
        return name + " does not play banjo"
     