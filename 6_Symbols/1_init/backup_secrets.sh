#!/bin/bash

# List of files to backup
# File in gitignore gets backedup to a password vault
files_to_backup=(
  "6_Symbols/3_helm/_secure_install_withtoken.md"
  "6_Symbols/3_helm/_secure_cluster_password_to_connect.md"
  "6_Symbols/3_helm/_secure_connect_db_command_line.md"
  "6_Symbols/2_setupDocker/_secure_secret_create.md"
)

# Output backup file
backup_file="backup_output.md"

# Create or clear the backup file
> "$backup_file"

# Iterate through each file and append its content to the backup file
for file in "${files_to_backup[@]}"; do
  if [ -f "$file" ]; then
    echo "### Backup from file: $file" >> "$backup_file"
    echo "" >> "$backup_file"
    cat "$file" >> "$backup_file"
    echo -e "\n\n" >> "$backup_file"
  else
    echo "Warning: $file not found." >&2
  fi
done

echo "Backup completed. Output saved to $backup_file."