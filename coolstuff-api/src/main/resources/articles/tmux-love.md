TMUX ❤️

I have been a life long windows user and have recently switched to a Mac and I am loving it.

The best thing on macOS is the integrated zsh terminal. I used to use gitbash on windows, but on mac I had a whole array of offerings for terminals.

Currently I am using wezterm, and discovered a tool tmux, it's been out there for a while.. I used to use terminator shell but after integrating my workflows with tmux there is no going back.🚀

I believe less is more, the less clutter on my desktop better is the productivity. Juggling between multiple terminal windows is a pain, and tmux solves that problem for me.

Top 3 problems tmux solves for me:

1. Terminal Multiplexing
   My works involves developing webapplications, where I need
   -> A terminal for running frontend
   -> A terminal for running backend
   -> A terminal for ssh into servers
   -> A terminal for running git commands
   -> A terminal for running database commands
   -> A terminal for running docker commands
   -> A terminal for cloud commands
   -> A terminal for running tests
   the list goes on and on and on...

You will never find something if you are not looking for it, even if it stares you right in the face. Switching terminals with tmux helps me manage my terminal sessions in a more streamlined fashion. I can switch between terminals with a simple key combination. 2) There are certain commands that block the terminal from entering new commands until the given command completes execution, such as npm install, mvn clean install, or nmap scans on your company network JK😉😂 3) Multiple panes in a single terminal window. A single terminal window can be divided let's say 3 panes horizontally or vertically one for running code, one for git commands, and one for running tests. Switching between three separate terminals in vscode or intellij or eclipse or any other IDE is no fun.

![tmux](./assets/images/tmux-love/main.png)

If your workflow involves any of the above listed problems, try tmux it will change your life, not your life, no promises.. but it makes your day less chaotic.

Commands to get started with tmux:

1. Install tmux
   brew install tmux
2. Create sessions
   tmux new -s "mysession"
3. Run a command in a seperate terminal and forget
   tmux a -t "mysession"
4. Detach from a session
   ctrl+b+d
5. Kill all sessions
   tmux kill-server

Hope this helps you get started with tmux and enhances your terminal experience!

#MacOS #Terminal #Productivity #tmux #WebDevelopment #DevOps #Docker #CloudComputing #Coding #Programming #TechTips #DeveloperTools #SoftwareEngineering #WorkflowOptimization #Unix #Linux #OpenSource
