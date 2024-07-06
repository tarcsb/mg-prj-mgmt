#!/bin/bash

# Function to install Yarn
install_yarn() {
    echo "Installing Yarn..."
    if command -v yarn >/dev/null 2>&1; then
        echo "Yarn is already installed"
    else
        if [ "$(uname)" == "Darwin" ]; then
            brew install yarn
        elif [ -f /etc/debian_version ]; then
            curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            sudo apt update && sudo apt install yarn
        elif [ -f /etc/redhat-release ]; then
            curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
            sudo yum install yarn
        else
            echo "Please install Yarn manually from https://classic.yarnpkg.com/en/docs/install"
            exit 1
        fi
    fi
}

# Function to install backend dependencies
install_backend() {
    echo "Installing backend dependencies..."
    cd backend || exit
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ..
}

# Function to install frontend dependencies
install_frontend() {
    echo "Installing frontend dependencies..."
    cd frontend || exit
    yarn install
    cd ..
}

# Function to setup the database
setup_database() {
    echo "Setting up the database..."
    cd backend || exit
    source venv/bin/activate
    flask db init
    flask db migrate
    flask db upgrade
    cd ..
}

# Function to run the development servers
run_development() {
    echo "Running development servers..."
    cd backend || exit
    source venv/bin/activate
    flask run &
    BACKEND_PID=$!
    cd ../frontend || exit
    yarn dev &
    FRONTEND_PID=$!
    wait $BACKEND_PID $FRONTEND_PID
}

# Main script execution
main() {
    install_yarn
    install_backend
    install_frontend
    setup_database
    run_development
}

main
