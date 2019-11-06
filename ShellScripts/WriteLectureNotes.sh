#!/bin/bash
# chmod +x WriteMarkdown.sh
# ./WriteMarkdown.sh
# Automatically prepare markdown file for pelican.

#=== <functions> ===
function AddHeaders () {
    LECTURE_NAME=`pwd | tr '/' '\n' | tail -n 1`
    echo -n "Day."
    read K
    echo -n "Term (ex.3A): "
    read TERM
    DATE=`date "+%Y-%m-%d"`
    #=== Write down ===
    echo "Title: ${LECTURE_NAME} 第${K}回" >> $FILE_NAME
    echo "DATE: ${DATE}" >> $FILE_NAME
    echo "Modified: ${DATE}" >> $FILE_NAME
    echo "Slug: ${LECTURE_NAME}-${K}" >> $FILE_NAME
    echo "Tags: ${TERM}, ${LECTURE_NAME}" >> $FILE_NAME
    echo "Authors: Shuto" >> $FILE_NAME
    echo "Summary: " >> $FILE_NAME
    echo "FacebookImage: https://iwasakishuto.github.io/images/FacebookImage/University.png" >> $FILE_NAME
    echo "========================"
    cat $FILE_NAME
    echo "========================"
}

function AddStyleSheet() {
  echo "" >> $FILE_NAME
  echo "<style>" >> $FILE_NAME
  cat /Users/iwasakishuto/Github/portfolio/iwasakishuto.github.io/css/custom.css >> $FILE_NAME
  echo "</style>" >> $FILE_NAME
}

function OpenAtom() {
  echo "Opening Atom..."
  atom ../../
}
#=== </functions> ===

# File name
TIME=`date "+%Y-%m-%d"`
echo -n "File Name: ${TIME}-"
read PERIOD
FILE_NAME="${TIME}-${PERIOD}.md"

if [ -e $FILE_NAME ]; then
  echo "${FILE_NAME} already exists. Continue? [Y/n] "
  read CONTINUE
  case $CONTINUE in
      "" | "Y" | "y" | "yes" | "Yes" | "YES" ) echo "Continue." ;;
      * ) exit ;;
  esac
fi

# header
echo -n "Do you want to add headers? [Y/n] "
read IS_HEADER
case $IS_HEADER in
    "" | "Y" | "y" | "yes" | "Yes" | "YES" ) AddHeaders ;;
    * ) echo "Did not add headers." ;;
esac

# style
echo -n "Do you want to add a stylesheet? [Y/n] "
read IS_STYLE
case $IS_STYLE in
    "" | "Y" | "y" | "yes" | "Yes" | "YES" ) AddStyleSheet ;;
    * ) echo "Did not add a stylesheet." ;;
esac

# Atom
echo -n "Do you want to open editor? [Y/n] "
read IS_EDITOR
case $IS_EDITOR in
    "" | "Y" | "y" | "yes" | "Yes" | "YES" ) OpenAtom ;;
    * ) echo "Done." ;;
esac
