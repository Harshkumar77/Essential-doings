./fetch_from_sys.sh

No="$(cat ./backup)"

git add .
git commit -m "backup $No"
git push

No=$No+1

echo $No > backup
