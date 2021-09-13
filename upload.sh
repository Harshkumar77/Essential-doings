pv ~/.config/Code/User/settings.json >  vs-code-stuffs/settings.json
pv ~/.zshrc >  command-line/.zshrc
pv ~/.bashrc >  command-line/.bashrc
pv ~/.vimrc > command-line/.vimrc
pv ~/.ideavimrc > Android-studio/.ideavimrc
pv ~/.gitconfig > command-line/.gitconfig
pv ~/.vscode/* > .vscode

git add .
git commit -m "Nth commit"
git push
