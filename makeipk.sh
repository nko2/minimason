#!/bin/sh
echo "Copying game logic into webOS package"
mv webos/node_modules/platform.js webos/node_modules/platform.js.bak
cp -r lib/* webos/node_modules
mv webos/node_modules/platform.js.bak webos/node_modules/platform.js
echo "Copying game resources into webOS package"
mkdir -p webos/res
cp -r www/game/res/* webos/res/
palm-package webos
palm-install com.creationix.minimason_0.0.0_all.ipk
mkdir -p ipkgs
mv com.creationix.minimason_0.0.0_all.ipk www/ipkgs/
palm-launch com.creationix.minimason
echo "Done.."
