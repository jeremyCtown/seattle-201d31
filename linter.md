# Code 201 Linter Setup Instructions with VSCode

### Install Node

*Note*: If you get an error while installing these packages such as "try again as root/administrator", you may need to use the `sudo` command to get administrator access. For example `sudo apt-get install nodejs`. Note: the `sudo` command is a dangerous and powerful command, and generally should not be used unless you understand why you need to use it in a given situation. In this case, however, the `sudo` commands have been carefully reviewed.

#### Linux instructions

  To install Node, open your Terminal and copy and paste the following line, then hit Enter:

  `sudo apt-get install nodejs`

  Afterwards, you'll want to install Node Package Manager (NPM).

  `sudo apt-get install npm`

  If you run into issues trying to install Node from these steps, please contact your instructor.

#### Mac instructions

  If you took Code 201, you should already have Homebrew installed. If you have not, follow the guide on [this page](https://github.com/codefellows/code-201-prework/blob/master/prework/mac/2_homebrew.md#install-homebrew).

  To install Node, open your Terminal, and enter:

  `brew update && brew install node`

#### Windows instructions

  To install Node, go [here](https://nodejs.org/en/download/), and then download and run the Windows Installer. Make sure you do not deselect any of the Node components such as NPM during the installation.

#### Verify the Node installation
Now let's verify that it is installed. Enter the following into your terminal:

`node -e 'console.log("works")'`

You should get a response that says "works". If not, try reinstalling Node again. If you are still having issues, please contact your instructor.

### Install ESLint

Now that you have Node installed, you can install Node packages using its package manager, **NPM**. Open your Terminal (Git Bash on Windows) and enter:

`npm -g i eslint git-open`

You should see a lot of feedback as it installs.

### Verify the Node packages installation
Now let's verify that it is installed. Enter the following into your terminal:

`npm list -g --depth=0`

### What is this linter thing?

Linting is the process of running a program that will analyze code for potential errors. It is an important part of the quality assurance process.

> `lint` was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language.

That means the linter is your friend! It will help you write syntactically correct code, so you can catch errors in your text editor, rather than having to hop over the browser, refresh your page, and search for errors. Faster feedback makes for happier developers (that's you!).

### Integrate ESLint with VS Code
Install the ESLint extension for VS Code [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). In VS Code, click the gear icon in the lower left corner and select Command Palette. Search for an option named `ESLint: Enable ESlint` and click on it to enable linting within your editor. VS Code will now display errors and warnings in your scripts.