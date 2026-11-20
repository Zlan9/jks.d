
pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
                sh 'node --check app.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Starting application...'
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}
