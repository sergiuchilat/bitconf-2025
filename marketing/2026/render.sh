#!/bin/sh
# Renders banner-1-month.html to PNGs with headless Chrome.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC="file://$PWD/banner-1-month.html"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1080,1080 --screenshot="$PWD/bitconf-2026-1-month-square.png" "$SRC?format=square"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1200,630 --screenshot="$PWD/bitconf-2026-1-month-wide.png" "$SRC?format=wide"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1080,1080 --screenshot="$PWD/bitconf-2026-teaser-square.png" "$SRC?format=square&variant=teaser"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1200,630 --screenshot="$PWD/bitconf-2026-teaser-wide.png" "$SRC?format=wide&variant=teaser"

# Page covers (no countdown — they stay up for the whole campaign)
COVER="file://$PWD/cover.html"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=820,312 --screenshot="$PWD/bitconf-2026-cover-facebook.png" "$COVER?format=fb"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1128,191 --screenshot="$PWD/bitconf-2026-cover-linkedin-page.png" "$COVER?format=li"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 \
  --window-size=1584,396 --screenshot="$PWD/bitconf-2026-cover-linkedin-profile.png" "$COVER?format=li-personal"

# Telegram avatar (circle-cropped by Telegram)
AVATAR="file://$PWD/avatar.html"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 \
  --window-size=640,640 --screenshot="$PWD/bitconf-2026-telegram-avatar-mark.png" "$AVATAR?v=mark"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 \
  --window-size=640,640 --screenshot="$PWD/bitconf-2026-telegram-avatar-full.png" "$AVATAR?v=full"
