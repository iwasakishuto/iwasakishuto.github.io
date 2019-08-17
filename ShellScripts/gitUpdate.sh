#!/bin/bash
# chmod +x gitUpdate.sh
# ./gitUpdate.sh
# Automatically perform a series of git update.

# git add
echo -n "git add "
read ADD_FILE
git add $ADD_FILE

# git commit 
echo -n "git commit -m "
read MESSAGE
if [ -z "$MESSAGE" ]; then
TIME=`date "+%Y/%m/%d %H:%M"`
MESSAGE="${TIME} updated."
fi
echo "git commit -m ${MESSAGE}"
git commit -m "${MESSAGE}"

# git push
echo -n "Do you want to push? [Y/n] "
read ANSWER
case $ANSWER in
    "" | "Y" | "y" | "yes" | "Yes" | "YES" ) git push;;
    * ) echo "Done.";;
esac
