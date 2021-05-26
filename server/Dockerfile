FROM gradle:7-jdk11 AS builder
WORKDIR /project
COPY . .
RUN gradle build

FROM openjdk:11
WORKDIR /jars
COPY --from=builder /project/build .

CMD java -jar /jars/**/*.jar

