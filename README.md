# find_or_describe
Simple browsergame to find the described picture. Made to learn more about Node.js and let people know more about pixabay.

# How it is set up?
The setup is very simple. In the background there is a Node.js express server running on my machine. Also there is a apache Webserver on the same machine.
The server waits for 2 calls. The find and the describe one. If you press describe you get a randome image from pixabay via api and have 10 charakters to describe it.
When you send this you will start one call on serverside. Your text and picturelink will be saved on the server as a JSON file.
The second call is the find call. Here you can ask for a JSON packet wich includes 2 pictures and 1 text.
Thats all about it. Everything else ist just simple HTML and will be explained soon.