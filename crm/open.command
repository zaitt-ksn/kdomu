#!/bin/bash
cd "$(dirname "$0")"
PORT=8766
URL="http://127.0.0.1:${PORT}/index.html?nocache=$(date +%s)"

echo "К дому Outreach CRM"
echo "Открываю: $URL"
echo "Остановка: Ctrl+C"
echo ""

if ! lsof -iTCP:${PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  python3 -m http.server "$PORT" --bind 127.0.0.1 &
  SERVER_PID=$!
  sleep 0.6
else
  SERVER_PID=""
  echo "Сервер на порту ${PORT} уже запущен."
fi

open "$URL"

if [ -n "$SERVER_PID" ]; then
  wait "$SERVER_PID"
else
  echo "Нажмите Ctrl+C чтобы закрыть это окно."
  while true; do sleep 3600; done
fi
