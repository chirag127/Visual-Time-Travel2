@echo off
echo Loading Visual Time Travel extension...
echo.
echo Please make sure Chrome is installed and close all Chrome windows before continuing.
echo.
pause

set CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
set EXTENSION_PATH=%CD%\extension

echo Starting Chrome with the extension loaded...
%CHROME_PATH% --load-extension=%EXTENSION_PATH% --no-first-run --no-default-browser-check

echo.
echo Chrome has been started with the extension loaded.
echo.
echo To test the extension:
echo 1. Click on the extension icon in the toolbar
echo 2. Sign up or log in
echo 3. Navigate to different websites to capture screenshots
echo 4. Click on "View Timeline" to see your browsing history
echo.
pause
