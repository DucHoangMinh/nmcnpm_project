FROM openjdk:17-jdk

WORKDIR /app/api

COPY ./backend /app/api

EXPOSE 8080

# Command to run the application
CMD ["./gradlew", "bootRun"]