FROM maven:3.8.6-amazoncorretto-17 as build
WORKDIR /app
COPY . .
RUN mvn clean package -X -DskipTests

FROM openjdk:17-ea-10-jdk-slim
WORKDIR /app

COPY --from=build ./app/target/*.jar ./fit-core-0.0.1-SNAPSHOT.jar
ENTRYPOINT java -jar fit-core-0.0.1-SNAPSHOT.jar