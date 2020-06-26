#!/bin/bash
# chmod +x GithubKerasy.sh
# ./GithubKerasy.sh

function logging() {
  echo -e "\033[0;32m$1\033[0m"
}

INITIAL=`pwd`
BASEDIR="/Users/iwasakishuto/Github/portfolio/Kerasy"
cd "${BASEDIR}/pelican"

# Run pelican.
logging "make html"
make html
cd .. # Now @BASEDIR

# Prepare mkdocs.yml
YML_FILE_NAME="MkDocs/mkdocs.yml"
YML_IMPORTANT="MkDocs/MkDocs-important"
YML_TEMPLATES="${YML_IMPORTANT}/yml-templates.yml"
YML_SITE="MkDocs/site"
# 1. paste program from templates.
if [ -e $YML_FILE_NAME ]; then
  rm $YML_FILE_NAME
fi
cat $YML_TEMPLATES > $YML_FILE_NAME
# 2. paste nav information.
logging "python3 pelican2mkdocs.py >> $YML_FILE_NAME"
python3 pelican2mkdocs.py >> $YML_FILE_NAME

# Generate MkDocs articles.
cp "${YML_IMPORTANT}/index.md" "MkDocs/MkDocs-src/index.md"
cd MkDocs
logging "mkdocs build"
mkdocs build
cd site
logging "python3 ../DocsArange.py"
python3 ../DocsArange.py
cd ../.. # Now @BASEDIR

# Prepare some important files.
rm -r "${YML_SITE}/css"
rm -r "${YML_SITE}/js"
rm -r "${YML_SITE}/img"
cp -r "${YML_IMPORTANT}/theme" "${YML_SITE}"
cp -r "${YML_IMPORTANT}/img" "${YML_SITE}/theme/"

rm -r "doc"
mv "${YML_SITE}" "doc"

# Insert fooder and headers.
logging "python3 insertheaderfooter.py"
python3 insertheaderfooter.py
logging "python3 code_prettify.py"
python3 code_prettify.py

cd "${INITIAL}"
