#Introduction //3
Linux has a graphical user interface and it works pretty much like the GUI's on other systems that you are familiar with such as **Windows and OSX**. This tutorial *won't focus on* these as I reckon you can probably figure that part out by yourself. This tutorial will focus instead on the command line (also known as a terminal) **running Bash**.

!>-1-png-A Simple Terminal GUI

The command line is an *interesting* beast, and if you've not used one before, can be a bit daunting. Don't worry, with a bit of practice you'll soon come to see it as your friend. Don't think of it as leaving the GUI behind so much as adding to it. While you can leave the GUI alltogether, most people open up a command line interface just as another window on their desktop (in fact you can have as many open as you like).

This is also to our advantage as we can have several command lines open and doing different tasks in each at the same time. We can also easily jump back to the GUI when it suits us. Experiment until you find the setup that suits you best. As an example I will typically have 3 terminals open: 1 in which I do my working, another to bring up ancilliary data and a final one for viewing Manual pages (more on these later).

#What Is A Command Line (Terminal) //9
A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

The command line typically presents you with a prompt. As you type, it will be displayed after the prompt. Most of the time you will be issuing commands.

Here is an example:

`user@bash > ls -l /home/user`
`total 3`
`drwxr-xr-x  2 user users 4096 Mar 23 13:34 bin`
`drwxr-xr-x 18 user users 4096 Feb 17 09:12 Documents`
`drwxr-xr-x  2 user users 4096 May 05 17:25 public_html`

**Let's break it down:**

Line 1 presents us with a prompt ( user@bash ). After that we entered a command ( ls ). Typically a command is always the first thing you type. After that we have what are referred to as command line arguments ( -l /home/ryan ). Important to note, these are separated by spaces (there must be a space between the command and the first command line argument also). The first command line argument ( -l ) is also referred to as an option. Options are typically used to modify the behaviour of the command. Options are usually listed before other arguments and typically start with a dash ( - ).

Lines 2 - 5 are output from running the command. Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.

Line 6 presents us with a prompt again. After the commannd has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running (you will learn later how to deal with this).
Your terminal probably won't have line numbers on it. I have just included them here to make it easier to refer to different parts of the material.

&&Opening a Terminal&&
Opening a terminal is fairly easy. I can't tell you exactly how to do it as every system is different but here are a few places to start looking.

If you're on a Mac then you'll find the program Terminal under Applications -> Utilities. An easy way to get to it is the key combination 'command + space' which will bring up Spotlight, then start typing Terminal and it will soon show up.

If on Linux then you will probably find it in Applications -> System or Applications -> Utilities. Alternatively you may be able to 'right-click' on the desktop and there may be an option 'Open in terminal'.
If you are on Windows and intend to remotely log into another machine then you will need an SSH client. A rather good one is Putty (free).

#Simple Shortcuts //5

The terminal may seem daunting but don't fret. Linux is full of shortcuts to help make your life easier. You'll be introduced to several of them throughout this tutorial. Take note of them as not only do they make your life easier, they often also save you from making silly mistakes such as typos.

!>-1-png

Here's your *first shortcut*. When you enter commands, they are actually stored in a history. You can traverse this history using the up and down arrow keys. So don't bother **re-typing out** commands you have previously entered, you can usually just hit the up arrow a few times. You can also edit these commands using the left and right arrow keys to move the cursor where you want.

`[Tab]`
(In a text terminal) Autocomplete the command  if there is only one option, or else show all the available options.
THIS SHORTCUT IS GREAT! It even works at LILO prompt!

`[ArrowUp]`
Scroll and edit the command history. Press [Enter] to execute.

`[Shift][PgUp]`
Scroll terminal output up. Work also at the login prompt, so you can scroll through your bootup messages.

`[Ctrl][Alt][-]`
(in X-windows) Change to the previous X-server resolution.

`[Ctrl][Alt][BkSpc] `
(in X-windows) Kill the current X-windows server. Use if the X-windows server crushes and cannot be exited normally.

`[Ctrl][Alt][Del] `
Shut down the system and reboot. This is the normal shutdown command for a user at the text-mode console. Don't just press the "reset" button for shutdown!

`[Ctrl]c `
Kill the current process (mostly in the text mode for small applications).

`[Ctrl]d`
Log out from the current terminal.  See also the next command.

`[Ctrl]d `
Send [End-of-File] to the current process. Don't press it twice else you also log out (see the previous command).

`[Ctrl]s `
Stop the transfer to the terminal.

`[Ctrl]q `
Resume the transfer to the terminal. Try if your terminal mysteriously stops responding.

`[Ctrl]z `
Send the current process to the background.

#Basic Navigations //12

Many tasks rely on being able to get to, or reference the correct location in the system. As such, this stuff really forms the foundation of being able to work effectively in Linux. Make sure you understand it well.

&&Current Directory&&
The first command we are going to learn is pwd which stands for Print Working Directory. (You'll find that a lof of commands in linux are named as an abbreviation of a word or words describing them. This makes it easier to remember them.) The command does just that. It tells you what your current or present working directory is. Give it a try now.

`> pwd`
`/home/user`
`> `

&&Content of The Current Directory&&
It's one thing to know where we are. Next we'll want to know what is there. The command for this task is ls. It's short for list. Let's give it a go.

`> ls`
`directory1 Documents file.txt`
`> ls [options] [location] `

Whereas pwd is just run by itself with no arguments, ls is a little more powerful. We have run it here with no arguments in which case it will just do a plain listing of our current location. We can do more with ls however.

In the above example, the square brackets ( [ ] ) mean that those items are optional, we may run the command with or without them. In the terminal below I have run ls in a few different ways to demonstrate.

`> ls`
`bin Documents public_html`
`> ls -l`
`total 3`
`drwxr-xr-x  2 ryan users 4096 Mar 23 13:34 bin`
`drwxr-xr-x 18 ryan users 4096 Feb 17 09:12 Documents`
`drwxr-xr-x  2 ryan users 4096 May 05 17:25 public_html`
`> ls /etc`
`a2ps.cfg aliases alsa.d cups fonts my.conf systemd`
`...`
`> ls -l /etc`
`total 3`
`-rwxr-xr-x  2 root root 123 Mar 23 13:34 a2ps.cfg`
`-rwxr-xr-x 18 root root 78 Feb 17 09:12 aliases`
`drwxr-xr-x  2 ryan users 4096 May 05 17:25 alsa.d`
`...`

&&Paths In Bash&&
There are 2 types of paths we can use, absolute and relative. Whenever we refer to a file or directory we are using one of these paths. Whenever we refer to a file or directory, we can, in fact, use either type of path (either way, the system will still be directed to the same location).

To begin with, we have to understand that the file system under linux is a heirarchical structure. At the very top of the structure is what's called the root directory. It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

Absolute paths specify a location (file or directory) **in relation to the root directory**. You can identify them easily as they always begin with a /

Relative paths specify a location (file or directory) **in relation to where we currently are** in the system. They will not begin with a slash.

&&Changing The Current Directory&&
In order to move around in the system we use a command called cd which stands for change directory. It works as follows:

`> cd [location]`

If you run the command cd without any arguments then it will always take you back to your home directory.

The command cd may be run without a location as we saw in the shortcut above but usually will be run with a single command line argument which is the location we would like to change into. The location is specified as a path and as such may be specified as either an absolute or relative path and using any of the path building blocks mentioned above.

`> ls`
`file1.txt file2.txt file3.txt`
`...`
`> cd /`
`> pwd`
`/`
`> ls`
`bin boot dev etc home lib var`
`...`
`> cd ~/Documents`
`> pwd`
`/home/user/Documents`
`> cd ../../`
`> pwd`
`/home`
`> cd`
`> pwd`
`/home/user`

Typing out these paths can become tedious. If you're like me, you're also prone to making typos. The command line has a nice little mechanism to help us in this respect. It's called Tab Completion.

It's kinda hard to demonstrate here so it's probably best if you try it yourself. If you start typing **cd /hTab/<beginning of your username>** Tab you'll get a feel for how it works.

#Manual Pages in Bash //8

The Linux command line offers a wealth of power and opportunity. If your memory is like mine then you find it hard to remember a large number of details. Fortunately for us there is an easy to use resource that can inform us about all the great things we can do on the command line. That's what we're going to learn about in this section. I know you're keen and eager to get stuck into doing stuff, and we'll get started on that in the next section, I promise, first we need to learn how to use Manual pages however.

The manual pages are a set of pages that explain every command available on your system including what they do, the specifics of how you run them and what command line arguments they accept. Some of them are a little hard to get your head around but they are fairly consistent in their structure so once you get the hang of it it's not too bad. You invoke the manual pages with the following command:

`man <command to look up>`
`> man ls`
`Will show information about ls command`

!>-1-png-Output of man ls command

To exit the man pages press 'q' for quit.

&&Searching&&
It is possible to do a keyword search on the Manual pages. This can be helpful if you're not quite sure of what command you may want to use but you know what you want to achieve. To be effective with this approach, you may need a few goes. It is not uncommon to find that a particular word exists in many manual pages.

`man -k <search term>`

If you want to search within a manual page this is also possible. To do this, whilst you are in the particular manual page you would like to search press forward slash '/' followed by the term you would like to search for and hit 'enter' If the term appears multiple times you may cycle through them by pressing the 'n' button for next.

&&More on the Running of Commands&&
A lot of being proficient at Linux is knowing which command line options we should use to modify the behaviour of our commands to suit our needs. A lot of these have both a long hand and short hand version. eg. Above you will notice that to list all directory entries (including hidden files) we can use the option -a or --all (remember from last section what files and directories beginning with a . are?).

`> pwd`
`/home/user`
`> ls -a`
`> ls --all`
`> ls -alh`

Look up the man page for ls to find out what that last command is doing.

#File Manipulation in Command Line //13

We've got some basic foundation stuff out of the way. Now we can start to play around. To begin with we'll learn to make some files and directories and move them around. Future sections will deal with putting content in them and more interesting manipulation.

&&Creating Directory&&
Creating a directory is pretty easy. The command we are after is mkdir which is short for Make Directory.

`mkdir [options] <Directory>`

There are a few useful options available for mkdir. Can you remember where we may go to find out the command line options a particular command supports?

The first one is -p which tells mkdir to make parent directories as needed (demonstration of what that actually means below). The second one is -v which makes mkdir tell us what it is doing (as you saw in the example above, it normally does not).

`> mkdir -p linuxtutorialwork/foo/bar`
`> cd linuxtutorialwork/foo/bar`
`> pwd`
`/home/user/linuxtutorialwork/foo/bar`

&&Removing Directory&&
Creating a directory is pretty easy. Removing or deleting a directory is easy too. One thing to note, however, is that there is no undo when it comes to the command line on Linux (Linux GUI desktop environments typically do provide an undo feature but the command line does not). Just be careful with what you do. The command to remove a directory is rmdir, short for remove directory.

`rmdir [options] <Directory>`

&&Creating a Blank File&&
A lot of commands that involve manipulating data within a file have the nice feature that they will create a file automatically if we refer to it and it does not exist. In fact we can make use of this very characteristic to create blank files using the command touch.

`touch [options] <filename>`

touch is actually a command we may use to modify the access and modification times on a file (normally not needed but sometimes when you're testing a system that relies on file access or modification times it can be useful).

`>pwd`
`/home/ryan/linuxtutorialwork`
`>ls`
`foo`
`>touch example1`
`>ls`
`example1 foo`

&&Copying a File or Directory&&

There are many reasons why we may want to make a duplicate of a file or directory. Often before changing something, we may wish to create a duplicate so that if something goes wrong we can easily revert back to the original. The command we use for this is cp which stands for copy.

`cp [options] <source> <destination>`

&&Moving a File or Directory&&
To move a file we use the command mv which is short for move. It operates in a similar way to cp. One slight advantage is that we can move directories without having to provide the -r option.

`mv [options] <source> <destination>`

Remember to experiment with both absolute and relative paths in the commands as sometimes they give subtle but useful differences in output. (The output of the command may be slightly different but the action of the command will always be the same.) (I will illustrate an example of this in the section on Wildcards)

#File And Usage Permisions //5

In this section we'll learn about how to set Linux permissions on files and directories. Permissions specify what a particular person may or may not do with respect to a file or directory. As such, permissions are important in creating a secure environment. For instance you don't want other people to be changing your files and you also want system files to be safe from damage (either accidental or deliberate). Luckily, permissions in a Linux system are quite easy to work with.

Linux permissions dictate 3 things you may do with a file, read, write and execute. They are referred to in Linux by a single letter each.

- r read - you may view the contents of the file.
- w write - you may change the contents of the file.
- x execute - you may execute or run the file if it is a program or script.

For every file we define 3 sets of people for whom we may specify permissions.

- owner - a single person who owns the file. (typically the person who created the file but ownership may be granted to some one else by certain users)
- group - every file belongs to a single group.
- others - everyone else who is not in the group or the owner.

Three persmissions and three groups of people. That's about all there is to permissions really. Now let's see how we can view and change them.

&&View Permissions&&
To view permissions for a file we use the long listing option for the command ls.

`ls -l [path]`

&&Change Permissions&&
To change permissions on a file or directory we use a command called chmod It stands for change file mode bits which is a bit of a mouthfull but think of the mode bits as the permission indicators.

`chmod [permissions] [path]`

It may seem odd that as the owner of a file we can remove our ability to read, write and execute that file but there are valid reasons we may wish to do this. Maybe we have a file with data in it we wish not to accidentally change for instance. While we may remove these permissions, we may not remove our ability to set those permissions and as such we always have control over every file under our ownership.

&&The Root User&&
On a Linux system there are only 2 people usually who may change the permissions of a file or directory. The owner of the file or directory and the root user. The root user is a superuser who is allowed to do anything and everything on the system. Typically the administrators of a system would be the only ones who have access to the root account and would use it to maintain the system.

Typically normal users would mostly only have access to files and directories in their home directory and maybe a few others for the purposes of sharing and collaborating on work and this helps to maintain the security and stability of the system.

#Filter Commands //

Get Premium app for more courses.

#Grep and Regular Expressions //

Get Premium app for more courses.

#Piping and Redirection //

Get Premium app for more courses.

#Process Management //

Get Premium app for more courses.

#Scripting in Bash //

Get Premium app for more courses.ü

#Cheat Sheet //

Get Premium app for more courses.
