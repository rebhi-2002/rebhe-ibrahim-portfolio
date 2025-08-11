@echo off
echo Adding all changes to staging area...
git add .

echo.
set /p commit_message="Enter your commit message: "

echo.
echo Committing changes...
git commit -m "%commit_message%"

echo.
echo Pushing changes to GitHub...
git push origin main

echo.
echo =================================
echo  Done! All changes have been pushed successfully.
echo =================================
echo.
pause