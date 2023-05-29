# PodScape
> [Live Demo](https://podscape.devdt.in/)

PodScape is a Django-based web application that provides a platform for users to discover and listen to podcasts. It allows users to explore a vast collection of podcasts, create playlists, and engage with other podcast enthusiasts. This README file provides an overview of the project and instructions for running it using Docker.

## Features

- User registration and authentication
- Browse and search podcasts by genre, title, and host
- Upload podcast
- Listen to podcasts directly within the application
- Add podcast to favourite
- User-friendly interface

## Docker Installation(Recommended)

You can use Docker to run PodScape:

1. Ensure Docker is installed and running on your system.
2. Clone the repository:

   ```bash
   git clone https://github.com/dev-DTECH/podscape.git
   ```

3. Navigate to the project directory:

   ```bash
   cd podscape
   ```

4. Build the Docker image:

   ```bash
   docker build -t podscape:latest .
   ```

5. Run the Docker container:

   ```bash
   docker run -p 8000:8000 podscape:latest
   ```

   The application should now be accessible at `http://localhost:8000/`.

## Installation

Alternativly, to run PodScape locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-DTECH/podscape.git
   ```

2. Navigate to the project directory:

   ```bash
   cd podscape
   ```

3. Create a virtual environment (optional but recommended):

   ```bash
   python3 -m venv venv
   ```

4. Activate the virtual environment:

   ```bash
   # On macOS and Linux
   source venv/bin/activate

   # On Windows
   venv\Scripts\activate
   ```

5. Install the project dependencies:

   ```bash
   pip install -r requirements.txt
   ```

6. Set up the database:

   ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py makemigrations player
    python manage.py migrate player
    python manage.py makemigrations favourite
    python manage.py migrate favourite
   ```

7. Create a superuser (admin account):

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to set a username and password.

8. Collect static files:

   ```bash
   python manage.py collectstatic
   ```

9. Start the development server:

   ```bash
   python manage.py runserver
   ```

   The application should now be running locally at `http://localhost:8000/`.



## Configuration

The default configuration for PodScape should work for local development purposes. However, if needed, you can modify the following settings in the `podscape/settings.py` file:

- `DATABASES`: Configure your database connection settings.
- `SECRET_KEY`: Change the secret key used for cryptographic signing.
- `DEBUG`: Set to `False` in production.

Please note that when deploying PodScape to a production environment, it's essential to follow the appropriate security measures, such as using secure secret keys, enabling HTTPS, and configuring the database for production use.

## Contributing

Contributions to PodScape are welcome! If you find a bug or have suggestions for new features, please submit an issue or create a pull request on the GitHub repository. Make sure to follow the project's coding style and provide clear commit messages for your changes.

## License

PodScape is open source and released under the [MIT License](LICENSE). Feel free to modify and distribute the application as per the license terms.

## Acknowledgments

# Acknowledgments

PodScape is built using the Django web framework, along with several other open-source libraries and tools. We would like to acknowledge and express our gratitude to the following projects:

- [Django](https://www.djangoproject.com/): The high-level Python web framework that makes building web applications a breeze.
- [Django REST Framework](https://www.django-rest-framework.org/): A powerful toolkit for building Web APIs in Django.
- [Docker](https://www.docker.com/): A containerization platform that simplifies the deployment and scaling of applications.

Without the contributions of these projects and their vibrant communities, PodScape would not have been possible.

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out to the PodScape team at [contact@devdt.in](mailto:contact@devdt.in).

Thank you for using PodScape! We hope you enjoy exploring the world of podcasts with our application.
   
