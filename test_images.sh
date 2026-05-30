urls=(
"https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1550482599-2ec82810ce84?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1490885578174-acda8905c2c6?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1596489370607-422329dfd827?auto=format&fit=crop&w=500&q=60"
"https://images.unsplash.com/photo-1447228811802-0c9f1d07c080?auto=format&fit=crop&w=500&q=60"
)

for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" == "200" ]; then
    echo "200 $url"
  fi
done
