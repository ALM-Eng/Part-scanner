# ALM Scan

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
3. Open ALM Scan from the home screen and allow the camera when asked.

## Using it

- **Scan parts** opens the camera. Hold each code inside the window. New serials are added with the next label and a beep. Codes already in the list are ignored and shown in orange.
- The **photo** button reads codes from a picture. Use it for tiny or awkward codes, since a full photo has more detail than the live feed.
- The **keyboard** button lets you type in a serial that won't scan.
- **Email list** on the main page is one tap: Mail opens with your default recipients, the subject and the list in the body.
- **Email CSV** in the ⋯ menu attaches the CSV as well as putting the list in the body. iPhone can't fill in To when a file is attached, so your recipients are copied: tap To and choose Paste.
- Tap the list name (or **Lists**) at the top to see your saved lists, open, rename or delete one, or start a new list. Every list saves itself as you scan.
- Tap **Reorder** above the list, then drag the ≡ handle to move parts. **Renumber** relabels them P1, P2… in the new order. Exports and emails follow the list order.
- Tap any part to change its label or serial, or to delete it.
- The **⋯** menu has the list name, Email CSV, Share CSV, Download CSV, Copy for Excel, Renumber, Saved lists, Settings and Clear.
- **Settings** holds your default email recipients, the label prefix, the beep and whether the newest part shows at the top.

Your lists are saved on the phone only. They never go to GitHub. Export them before you clear the list or delete the app.

## Updating it later

Upload the changed files to the same repository. In `sw.js`, change the version number at the end of `part-scanner-v10` (to `v11`, `v12`, and so on) so phones pick up the new version.

Data Matrix decoding uses zxing-wasm / zxing-cpp (MIT and Apache-2.0 licences; see ZXING-LICENSE.txt).
