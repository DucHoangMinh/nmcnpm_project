FROM openjdk:17-oracle

WORKDIR app/api

RUN microdnf install findutils

CMD ["java", "-jar", "build/libs/api-0.0.1-SNAPSHOT.jar"]