let mapleader = " "


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


"search
set incsearch

"Move lines
noremap <leader>j Vxp
noremap <leader>k VxkP

"power of i - inside
noremap vw viw
noremap yw yiw
noremap dw diw
noremap v( vi(
noremap y( yi(
noremap d( di(
noremap v{ vi{
noremap y{ yi{
noremap d{ di{

"fix slow del
noremap dd Vd
            
" Plugin 
call plug#begin('~/.vim/plugged')
Plug 'gruvbox-community/gruvbox'
let g:airline_theme='gruvbox'


call plug#end()


"Theme
colorscheme gruvbox
set bg=dark
