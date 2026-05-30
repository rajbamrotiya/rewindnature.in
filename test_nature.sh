urls=(
"https://images.unsplash.com/photo-1447228811802-0c9f1d07c080?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=2000&q=80"
)
for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" == "200" ]; then
    echo "200 $url"
  fi
done
