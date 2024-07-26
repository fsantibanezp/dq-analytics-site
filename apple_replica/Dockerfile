# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /code

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files to the working directory
COPY . /code/

# Set environment variables for Django settings
ENV DATABASE_NAME=apple_replica
ENV DATABASE_USER=user
ENV DATABASE_PASSWORD=password
ENV DATABASE_HOST=db
ENV DATABASE_PORT=5432
RUN echo ls -la
# RUN file="$(ls -1 /tmp/dir)" && echo $file
RUN echo $(ls -1 /tmp/dir)
# Run the migrations before starting the server
CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000
