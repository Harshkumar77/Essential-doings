let mapleader = " "

"Select all
nnoremap <leader>a ggVG

set nu
imap kj <Esc>

set noswapfile

"+ and - for increment and decrementing a number
nnoremap - <C-x>
nnoremap + <C-a>

" Disable annoying beeping
set noerrorbells

set vb t_vb=
set clipboard=unnamedplus

"Good tabs
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent

"relative 
set relativenumber

"auto semicolon
noremap <leader>; A;<Esc>o

"auto curly {} for function
noremap <leader>{ A {}<Esc>i<CR>

"search
set incsearch

"Move lines
noremap <leader>j Vxp
noremap <leader>k VxkP

nnoremap <leader>e" ea"<Esc>bi"<Esc> 

"Snippets
source ~/.vim/js.vim
source ~/.vim/c.vim

" Plugin 
call plug#begin('~/.vim/plugged')
Plug 'gruvbox-community/gruvbox'
let g:airline_theme='gruvbox'


call plug#end()


"Theme
colorscheme gruvbox
set bg=dark
