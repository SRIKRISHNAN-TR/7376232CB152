Notification Dashboard Frontend
A responsive notification dashboard application built using React + Vite and Material UI.
Features
Fetch and display notifications
Priority-based sorting
Placement
Result
Event
Filter notifications by type
Read / Unread state handling
Responsive UI using Material UI
Component-based architecture
Tech Stack
React
Vite
Material UI
Axios
Project Structure
notification_app_fe/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx

Mock Data Usage
Mock notification data is currently being used locally for development and UI testing purposes.
The API integration structure has been implemented and can be connected to the backend service by updating the API configuration.
Installation
npm install

Run the Project
npm run dev

Build
npm run build

Notes
node_modules is excluded using .gitignore
Material UI is used for styling and responsiveness
Notifications are sorted using custom priority logic

