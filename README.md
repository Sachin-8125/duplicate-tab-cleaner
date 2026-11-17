# Duplicate Tab Cleaner

A lightweight Chrome extension (Manifest V3) that finds and closes duplicate tabs in your active browser window.

## Features

- One-click scan of the current window for duplicate tabs
- Automatically keeps the first occurrence and closes the rest
- Shows a status message with the number of tabs closed

## Files

- `manifest.json` — extension configuration and permissions
- `popup.html` / `popup.js` — toolbar popup UI and duplicate-tab logic

## Installation (Developer Mode)

1. Open `chrome://extensions` in Chrome
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked** and select this project folder
4. Pin the extension to the toolbar

## Usage

1. Open several tabs, some with the same URL
2. Click the extension icon and press **Clean Duplicate Tabs**
3. Duplicates are closed; the status shows how many were removed

## Permissions

- `tabs` — required to query and close tabs in the current window

## License

MIT
