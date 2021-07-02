I have shaken off a lot of rust in this project. I made my first solution and by the end of it completely scraped it.

*things to improve*

-Come up with a better plan before attacking the problem

-Slow down and take some time. It is not a race and the sloppier your work, the longer it will take to debug

-COMMIT MORE OFTEN. Holy moly I just kinda refactored the whole thing in one commit. 

-I do not like how the for loop is implemented. I beleive we will be touching this project again and i would like to take a look into that. Its current behavior is it increments to the next loop if the name validator has been entered incorrectly. Which is behaving the way it should and the forloop is as well, since the function is returning undefined and moving to the next loop. The way that i fixed this, is in result(), if it doesnt like an answer or its a draw, it increments the rounds variable by one. This works, but i dont like that rounds is in the global scope and is being mutated like it is. 

Overall, i am happy that i continued working on this project after my first attempt. it was basically all hard coded and it was a bit beastly. This one, while still a bit much, does all i need it to. It could probably be refactored further, but again, we will look at it in the future.
