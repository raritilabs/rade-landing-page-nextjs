# sed -i 's/old-text/new-text/g' input.txt
sed -i'bak.html' -e 's/\/_next\//.\/_next\//g' out/index.html
echo "success replaced "/_next" with "./_next" and "