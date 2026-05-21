Coding Challenge: Build a SECURE expense tracker

The expense tracker must have these features.

1. Authentication Features
User Login: A mechanism (e.g., a simple form or button) allowing a user to log in by providing a username.
User Logout: A button available only to authenticated users that ends their current session.
Protected Route/View: The main expense dashboard must be completely hidden from unauthenticated users, displaying only the login screen until they authenticate.

2. Expense Management Features
Add New Expense: Users must be able to create a new expense entry containing at least three pieces of data:
Title/Description (Text)
Amount (Number)

Delete Expense: Every expense item in the list must have a mechanism (like a trash icon or "Delete" button) to permanently remove it from the collection.

3. Dashboard & Data Display FeaturesTotal Balance Calculation: A dynamic display showing the total sum of all expense amounts currently in the system. This must update automatically when expenses are added or removed.

Expense List View: A clean, readable list displaying all added expenses, showing the title, amount, and category for each entry.

Welcome Message: A personalized greeting displaying the logged-in user's name on the dashboard.

4. Technical & Architectural Requirements (Under the Hood)Global Contexts: The application must utilize the React Context API to avoid prop-drilling, specifically separating state and dispatch functions into different contexts to optimize rendering.

Pure Reducers: All state transitions (Add, Remove, Update, Login, Logout) must be handled predictably through useReducer switch statements relying on { type, payload } action structures.
