#!/bin/bash
# chmod +x GithubKerasy.sh
# ./GithubKerasy.sh

INITIAL=`pwd`
BASEDIR="/Users/iwasakishuto/Github/portfolio/Kerasy"
cd "${BASEDIR}/pelican"

# Run pelican.
echo -e "\033[0;32m make html \033[0m"
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
echo -e "\033[0;32m python3 pelican2mkdocs.py >> $YML_FILE_NAME \033[0m"
python3 pelican2mkdocs.py >> $YML_FILE_NAME

# Generate MkDocs articles.
cp "${YML_IMPORTANT}/index.md" "MkDocs/MkDocs-src/index.md"
cd MkDocs
echo -e "\033[0;32m mkdocs build \033[0m"
mkdocs build
cd site
echo -e "\033[0;32m python3 ../DocsArange.py \033[0m"
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
python3 insertheaderfooter.py

cd "${INITIAL}"
