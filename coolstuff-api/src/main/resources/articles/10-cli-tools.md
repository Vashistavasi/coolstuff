💻 10 Command-Line Utilities/Extensions I Love — You Will Too If You Try!

Terminal is where I find peace.

In a world full of cluttered GUIs and overwhelming information, the terminal stands out as an oasis of simplicity and control. If you know what you’re doing, you can accomplish exactly what you need—faster, more efficiently, and without ever touching the mouse. No more clicking endless icons—just you, your keyboard, and the screen.

Here are the 10 Tools I find useful in my day to day work as a software engineer.

zsh-autosuggestions
zsh-syntaxhighlight
zoxide
eza
fzf
code .
jq
rsync
open
find

1.  zsh-autosuggestions
    Faded suggestions for input commands from history.
    Possible IDE-like suggestions for the next option.
    ![zsh-autosuggestions](./assets/images/10-cli-tools/1753546601411.png)

2.  zsh-syntaxhighlight
    Commands turn red if a wrong command is typed in the terminal. Instant feedback before hitting enter.
    ![zsh-syntaxhighlight](./assets/images/10-cli-tools/1753546648324.png)

3.  zoxide
    Fuzzy directory jumping.
    Usual cd: /Users/vasi/projects/coding/bootstrap-styles
    With Zoxide: z coding styles
    ![zoxide](./assets/images/10-cli-tools/1753546729545.png)

4.  eza
    Modern ls replacement with colors, tree view, icons, git integration, and human-readable sizes. Makes your ls commands vibrant and aesthetic.
    ![eza](./assets/images/10-cli-tools/1753546795157.png)

5.  fzf
    Fuzzy Finder - Search, Navigate, files, dirs, command history.
    find . -type f | fzf --multi --preview '\''bat --style=numbers --color=always {}'\'' | xargs -n 1 code
    Let’s you preview files from terminal and open them in vs-code on enter.
    Note: Needed packages - bat ( syntax high-lighted version of cat ) , code (vscode)
    ![fzf](./assets/images/10-cli-tools/1753546877321.png)

6.  code
    By having code command set in path, we can launch vs-code from terminal.
    Have diff comparisons or create a new VS Code window.
    ![code](./assets/images/10-cli-tools/1753546923782.png)

7.  jq
    Lightweight command-line tool for highlighting, processing, filtering json data from terminal.
    ![jq](./assets/images/10-cli-tools/1753546991945.png)

8.  rsync
    Copy doesn’t show progress in macOS; with rsync, you can see the file copy progress. Also, rsync is a powerful alternative for fast, incremental file/directory synchronization.
    ![rsync](./assets/images/10-cli-tools/1753547021274.png)

9.  Open
    Powerful macOS utility that lets us open any file or folder or application straight from the terminal.
    ![Open](./assets/images/10-cli-tools/1753547075848.png)

10. Find
    You have SSHed into a server and forgot the path where a file resides. find comes to your rescue.
    ![Find](./assets/images/10-cli-tools/1753547384496.png)

Tip:
Most of these are installable via Homebrew! Want usage tips or install commands for each?
Scroll up or just ask.

What are your favorite CLI tools? Add them below!

#commandline #cli #productivity #devtools #macOS #linux #terminal
