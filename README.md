# Part Scanner

A phone web app that scans part Data Matrix codes with the live camera and keeps the serial numbers in a list, each tagged P1, P2, P3… It works offline and installs to the home screen.

## Put it online with GitHub Pages (about 5 minutes, free)

1. Sign in at github.com (or create a free account).
2. Click **+** (top right), then **New repository**. Name it `part-scanner`, leave it **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder**, including the `icons` folder, then click **Commit changes**.
4. Go to **Settings**, then **Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and **/ (root)**, then click **Save**.
5. After a minute or two the page shows your link: `https://YOUR-USERNAME.github.io/part-scanner/`

## Put it on your iPhone

1. Open the link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open Part Scanner from the home screen and allow the camera when asked.

## Using it

- **Scan parts** opens the camera. Hold each code inside the window. New serials are added with the next label and a beep. Codes already in the list are ignored and shown in orange.
- The **photo** button reads codes from a picture. Use it for tiny or awkward codes, since a full photo has more detail than the live feed.
- The **keyboard** button lets you type in a serial that won't scan.
- Tap any part to change its label or serial, or to delete it.
- The **⋯** menu has the list name, the label prefix, beep on or off, Share CSV, Download CSV, Copy for Excel, Renumber and Clear.

Your scans are saved on the phone only. They never go to GitHub. Export them before you clear the list or delete the app.

## Updating it later

Upload the changed files to the same repository. In `sw.js`, change `part-scanner-v1` to `v2` (then `v3`, and so on) so phones pick up the new version.

Data Matrix decoding uses zxing-wasm / zxing-cpp (MIT and Apache-2.0 licences; see ZXING-LICENSE.txt).
