pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Checkout the code from the Git repository
                    git 'https://github.com/srinuedupoly/kh1MERN.git'

                    // Build the Docker image
                    def dockerImage = docker.build("edupoly_node1:latest", "-f Dockerfile .")

                    // Push the Docker image to a registry (optional)
                    dockerImage.push()
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker run -p 5000:5000 edupoly_node1:latest
                }
            }
        }
    }
}
