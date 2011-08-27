#!/bin/sh
echo "Copying game logic into webOS package"
mv webos/node_modules/platform.js webos/node_modules/platform.js.bak
cp -r lib/* webos/node_modules
mv webos/node_modules/platform.js.bak webos/node_modules/platform.js
echo "Copying game resources into webOS package"
mkdir -p webos/res
cp -r www/game/res/* webos/res/
echo "Starting game"
cd webos
./main.js
echo "Done.."
