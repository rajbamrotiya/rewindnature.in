urls=(
"https://images.unsplash.com/photo-1614027164847-1b28ccc126d2?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1543828751543-c0717208cc73?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1550828520-4cb496926bfc?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1584622181563-430f63602d4b?auto=format&fit=crop&w=2000&q=80"
"https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&w=800&q=80"
)

for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" == "200" ]; then
    echo "200 $url"
  else
    echo "BROKEN $url"
  fi
done
