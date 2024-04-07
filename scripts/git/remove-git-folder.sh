#!/bin/bash

# Function to recursively delete .git folders
function delete_git_folders {
    # Loop through each directory in the given path
    for dir in "$1"/*; do
        if [ -d "$dir" ]; then
            # If the directory is a git repository, delete the .git folder
            if [ -d "$dir/.git" ]; then
                echo "Deleting .git folder in $dir"
                rm -rf "$dir/.git"
            fi
            # Recursively call delete_git_folders for subdirectories
            delete_git_folders "$dir"
        fi
    done
}

# Start from the services folder (change this path if needed)
delete_git_folders "../../apps/services"
