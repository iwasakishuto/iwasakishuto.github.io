#!/bin/bash
# chmod +x scpDownUpload.sh
# ./scpDownUpload.sh
# Using scp command to Upload and Download files (Interactively).

# Key path
echo "#=== Using scp command to Upload and Download files (Interactively). ==="
echo -n "PATH to scp keys(.pem): "
read KeyPATH

if [ -e $KeyPATH ]; then
  echo "${KeyPATH} found."
else
  echo "${KeyPATH} NOT found. Please check the PATH."
  exit
fi

# IP Address, Domain name
echo "'IP Address' or 'Domain name' (ex: username@aws.example.com)"
echo -n "NAME: "
read SURVERNAME

# Download or Upload.
echo -n "Do you want to Download? or Upload?  [D/U] "
while :
do
  read ANSWER
  case $ANSWER in
    "D" | "Down" | "Download" | "Downloads" | "d" | "down" | "download" | "downloads" )
      ANSWER="Download"
      break;;
    "U" | "Up"   | "Upload"   | "Uploads"   | "u" | "up"   | "upload"   | "uploads" )
      ANSWER="Upload"
      break ;;
    * )
      echo -e "Pleas input 'D' or 'U' :";;
esac
done

# File (or Directory) PATH info.
echo -n "Surver PATH: "
read SURVER_PATH
echo -n "Local PATH: "
read LOCAL_PATH
echo -n "Directory? [Y/n] "
read IS_DIRE
case $IS_DIRE in
  "" | "Y" | "y" | "yes" | "Yes" | "YES" )
    IS_DIRE="-r";;
  * ) echo "Done."
    IS_DIRE="";;
esac

if [ $ANSWER = "Upload" ]; then
  scp ${IS_DIRE} -i ${KeyPATH} ${LOCAL_PATH} ${SURVERNAME}:${SURVER_PATH}
else
  scp ${IS_DIRE} -i ${KeyPATH} ${SURVERNAME}:${SURVER_PATH} ${LOCAL_PATH}
fi
