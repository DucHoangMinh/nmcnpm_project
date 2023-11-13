FROM openjdk:17-oracle

# Set the working directory to /app/api
WORKDIR /app/api

# Copy the contents of the local 'backend' directory to the container
COPY ../backend /app/api
# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
CMD ["./gradlew", "bootRun"]

