# Pull official base image
FROM python:3.8.7

# Set work directory
WORKDIR /src

# Set environment variables
ENV FLASK_APP=api.py
ENV FLASK_RUN_HOST=0.0.0.0

COPY ./src/requirements.txt /src/requirements.txt

# Install dependencies
RUN pip install -r requirements.txt

# Copy project
COPY ./src /src

CMD ["flask", "run"]
