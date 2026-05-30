urls=(
"https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?auto=format&fit=crop&w=800&q=80"
"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
"https://images.unsplash.com/photo-1517457224213-912f2320ebbb?auto=format&fit=crop&w=800&q=80"
"https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80"
)
for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" == "200" ]; then
    echo "200 $url"
  fi
done
