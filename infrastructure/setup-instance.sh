#!/bin/sh
set -e

sudo apt update
sudo apt upgrade -y

# install nodejs repo
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install nodejs jq curl -y

# deploy app
repo="mohammad-husaini/book-api"
download_url=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].browser_download_url')
asset_name=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].name')

curl -O "https://raw.githubusercontent.com/$repo/main/infrastructure/app.service"
sudo mv app.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable app.service

sudo -u app sh -c "mkdir -p /home/ubuntu/app && cd /home/ubuntu/app && curl -LO $download_url && mv $asset_name app.tar.gz && tar xzvf app.tar.gz && npm install --omit=dev"

sudo reboot