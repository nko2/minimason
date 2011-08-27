#!/bin/sh
echo "Copying game logic into webOS package"
mv webos/node_modules/engine.js webos/node_modules/engine.js.bak
cp -r lib/* webos/node_modules
mv webos/node_modules/engine.js.bak webos/node_modules/engine.js
echo "Copying game resources into webOS package"
mkdir webos/res
cp -r www/game/res/* webos/res/
echo "Packaging webOS application"
palm-package webos
echo "Installing to device"
palm-install com.creationix.minimason_0.0.0_all.ipk
echo "Running App"
palm-launch com.creationix.minimason
echo "Done.."
