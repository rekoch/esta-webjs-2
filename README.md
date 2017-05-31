# ESTA WebJS 2
ESTA WebJS 2 is a development stack for web applications based on angular/cli. It adds the integration to our environment:

* Jenkins
* SonarQube including coverage
* Unit & E2E Tests on Selenium Webgrid
* Local Unit Tests are running on a headless browser instead of chrome
* Docker based image to run the application in nginx within a container on OpenShift.

## Credits to
* https://github.com/angular/angular-cli

## How to use
* Clone this repository
* Change the following settings:

| File              | Things to change                                                  | 
|-------------------|-------------------------------------------------------------------| 
| pom.xml           | Enter your own data:                                              | 
|                   | <groupId>ch.sbb.esta.webjs</groupId>                              | 
|                   | <artifactId>esta-webjs-2-starterkit</artifactId>                  | 
|                   | <version>2.0.0-SNAPSHOT</version>                                 | 
|                   |                                                                   |
|                   | <distributionManagement>                                          | 
|                   |     <repository>                                                  | 
|                   |       <id>hosted.esta-webjs.releases</id>                         | 
|                   |       <url>...your url...</url>                                   | 
|                   |     </repository>                                                 | 
|                   |     <snapshotRepository>                                          | 
|                   |       <id>hosted.esta-webjs.snapshots</id>                        | 
|                   |       <url>...your url...</url>                                   | 
|                   |     </snapshotRepository>                                         | 
|                   |   </distributionManagement>                                       | 
| package.json      | Enter your own data:                                              | 
|                   | "name": "webjs-starterkit"                                        | 
|                   | also Version and Authors...                                       | 
| docker/Dockerfile | Change all the names and the point where your artifacts come from | 

