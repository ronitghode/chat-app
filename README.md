
## Setup 🛠
1. Clone or download the repository  
```bash
cd chat-app-django
```
2. Create and activate virtual environment
```bash
python -m venv venv
```
Windows: `venv\Scripts\activate.bat`  
Linux: `source venv/bin/activate`

3. Install required packages
```bash
python -m pip install -r requirements.txt
```

4. Navigate to chat-app-django and run the server
```bash
python manage.py runserver
```
*Note: make migrations if any error occurs*
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Navigate to http://127.0.0.1:8000 on a browser of your choice.

## Procedure
### Part 1 - Login and Signup Forms
1. Users model
2. **Pages:** Login, Signup, Home, Profile, (part of send message, more in next part)
3. CRUD operations on profile(username, profile picture...)
### Part 2 - Chat application
1. Channels Library 
2. Implementing basic functionality first then redoing it in async
3. TODO: Redis can come during production, channel layer is set to `InMemoryChannelLayer` for development.
4. Converted basic functionality to async
5. Added context processors for sidebar channels
6. Two public channels exist which anyone should be able to use, authentication in the next part.
7. Added messages model for permanent storage
### Part 3(optional) - Authenticating WebSockets

 approach is to use sessions


Distributed under the MIT License. See `LICENSE` for more information.
# chat-app
