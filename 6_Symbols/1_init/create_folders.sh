#!/bin/bash
# create the file
# move the file to symbols
# chmod +x create_folders.sh
# ./create_folders.sh

# Define folder names
folders=("1_Journey" "2_Real" "3_Environment" "4_UI" "5_Formula" "6_Symbols" "7_Semblance")

# Create folders and add README.md to each
for folder in "${folders[@]}"; do
  mkdir -p "$folder"           # Create the folder
  echo "Iterate inside" > "$folder/README.md"  # Create README.md with content
done

echo "Folder structure created with README.md files."