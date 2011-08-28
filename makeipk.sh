#!/bin/sh
echo "Copying game logic into webOS package"
mkdir -p ipk-staging/node_modules
cp -r lib/* ipk-staging/node_modules/
cp webos/node_modules/platform.js ipk-staging/node_modules/
cp -r arm-modules/*.js arm-modules/*.node ipk-staging/node_modules/
cp arm-modules/node-arm ipk-staging/main
cp webos/*.json webos/*.js ipk-staging/
cp -r webos/res ipk-staging/

palm-package ipk-staging
palm-install com.creationix.minimason_0.0.0_all.ipk
mkdir -p ipkgs
mv com.creationix.minimason_0.0.0_all.ipk www/ipkgs/
palm-launch com.creationix.minimason
rm -rf ipk-staging
echo "Done.."
