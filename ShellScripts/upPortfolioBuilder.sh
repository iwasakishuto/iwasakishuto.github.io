#!/bin/bash
# chmod +x upPortfolioBuilder.sh
# ./upPortfolioBuilder.sh
# Automatically perform a series of git update about portfolio builders.

function DeleteDIR () {
  if [ -e $1 ]; then
    echo "Delete ${1}"
    rm -r $1
  fi
}

function DeleteALL() {
  DeleteDIR "University"
  DeleteDIR "blog"
  DeleteDIR "Front-End"
  DeleteDIR "Kerasy"
}

# Memorize the initial positions and move to base directory.
INITIAL=`pwd`
BASEDIR="/Users/iwasakishuto/Github/portfolio/gh-build"
cd "${BASEDIR}"

# Clean the directory. (Not necessary.)
DeleteALL

# Copy the necessary files.
python backup.py > log.txt
# git add
echo -n "git add *"
git add *
# git commit
TIME=`date "+%Y/%m/%d %H:%M"`
MESSAGE="${TIME} updated."
echo "git commit -m ${MESSAGE}"
git commit -m "${MESSAGE}"
# git push
echo -n "Do you want to push? [Y/n] "
read ANSWER
case $ANSWER in
    "" | "Y" | "y" | "yes" | "Yes" | "YES" ) git push;;
    * ) echo "Done.";;
esac

# Clean the directory. (For the HD memory purpose.)
DeleteALL
# Back to the initial positions.
cd "${INITIAL}"
