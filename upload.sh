cp ~/.config/VSCodium/User/settings.json  vs-code-stuffs/settings.json
cp ~/.zshrc  command-line/.zshrc
cp ~/.bashrc  command-line/.bashrc
cp ~/.vimrc command-line/.vimrc
cp ~/.ideavimrc  Android-studio/.ideavimrc
cp ~/.gitconfig command-line/.gitconfig
cp ~/.vim . -r
git add .
git commit -m "Nth commit"
git push
