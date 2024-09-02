pipeline{
    agent any
    stages{
        stage('Checkout '){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/vikyathshettyy/DevopsProject']])
                sh 'echo checked out from git'
                
            }
            
        }
        stage('Build Docker Image') {
            steps{
                script{
                    sh 'docker build -t vikyath11/vikyath-artifactory:v${BUILD_NUMBER} .'
                }
            }
        }
        stage('Push image to artifactory') {
            steps{
                withCredentials([string(credentialsId: 'dockerhub-passwd', variable: 'dockerhubpasswd')]) {
                    sh 'docker login -u vikyath11 -p ${dockerhubpasswd}'
                    
                    
                    sh 'docker push vikyath11/vikyath-artifactory:v${BUILD_NUMBER}'
                }
            }
        }
        
    }
}
