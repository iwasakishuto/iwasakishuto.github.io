#!/bin/bash
# chmod +x WriteMarkdown.sh
# ./WriteMarkdown.sh
# Automatically prepare markdown file for pelican.

#=== <functions> ===
function AddHeaders () {
    echo -n "Lecture Name: "
    read LECTURE_NAME
    echo -n "Day."
    read K
    echo -n "Term (ex.3S): "
    read TERM
    DATE=`date "+%Y-%m-%d"`
    #=== Write down ===
    echo "Title: ${LECTURE_NAME} 第${K}回" >> $FILE_NAME
    echo "DATE: ${DATE}" >> $FILE_NAME
    echo "Modified: ${DATE}" >> $FILE_NAME
    echo "Slug: ${LECTURE_NAME}-${K}" >> $FILE_NAME
    echo "Tags: ${TERM}, ${LECTURE_NAME}" >> $FILE_NAME
    echo "Category: ${LECTURE_NAME}" >> $FILE_NAME
    echo "Authors: Shuto" >> $FILE_NAME
    echo "Summary: " >> $FILE_NAME
    echo "FacebookImage: https://iwasakishuto.github.io/study/notes/theme/img/default_image.png" >> $FILE_NAME
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
  atom .
}
#=== </functions> ===

# file name
echo -n "File Name: "
read FILE_NAME
if [ -z "$FILE_NAME" ]; then
TIME=`date "+%Y-%m-%d-%H-%M"`
FILE_NAME="${TIME}.md"
fi

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
