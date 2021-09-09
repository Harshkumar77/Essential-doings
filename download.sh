cp  vs-code-stuffs/settings.json ~/.config/Code/User/settings.json
cp  command-line/.zshrc ~/.zshrc
cp command-line/.bashrc ~/.bashrc 
cp command-line/.vimrc ~/.vimrc 
cp Android-studio/.ideavimrc ~/.ideavimrc 
cp  command-line/.gitconfig ~/.gitconfig
cp .vscode ~/ -r

git add .
git commit -m "Nth commit"
git push
