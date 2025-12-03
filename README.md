# 📦 React UI Component Library (Storybook)  
  
This project is a small React component library built with Vite + TypeScript   
and documented using Storybook.  
It contains three fully reusable UI components, each demonstrated in Storybook with multiple   states, props, and visual variations.  
Screenshots of component states are provided below.  
  
## 🛠️ Tech Stack  
- React   
- TypeScript  
- Vite  
- Storybook  
- Styled Components  

## 📁 Project Setup  
1️⃣ Initialize React + Vite project  
npm create vite@latest my-ui-library --template react-ts  
npm install  
2️⃣ Install Storybook  
npx storybook init  
  
## 📁 Components Included
1. 📥 Input Component  
A smart, flexible input field with extended behavior.    
  
  Features:  
- type="password" → shows eye icon to toggle visibility
- clearable={true} → displays an "X" button to clear input  
- Supports text, password, number, and other types  
- Fully controlled internal state  
  
2. 🔔 Toast Component  
A popup notification appearing at the top-right corner.  
  
  Features:  
- Auto-close after a specified duration  
- Smooth fade & slide transition  
- Types: success, error, warning, info  
  
3. 📚 Sidebar Menu Component  
A collapsible side navigation menu with nested items.  
  
  Features:  
- Opens from the right with animation  
- Supports nested submenus (accordion style)  
- Closes on clicking overlay  
- Handles any tree navigation structure  

## 🧩 Storybook Stories  
Each component includes a .stories.tsx file inside the /stories folder.  
  
Stories demonstrate:  
- All major variations  
- All meaningful props  
- Interactive controls (storybook knobs)  
  
## 📸 Screenshots  
  
### Input Component  
  
![Input component](src/assets/screenshots/Input_text.png)
![Input component](src/assets/screenshots/Input_password-1.png)  
![Input component](src/assets/screenshots/Input_password-2.png)  
![Input component](src/assets/screenshots/Input_password-3.png)  
![Input component](src/assets/screenshots/Input_clearable.png)  
![Input component](src/assets/screenshots/Input_number.png)  
  
### Toast Component

![Toast component](src/assets/screenshots/Toast_success.png)  
![Toast component](src/assets/screenshots/Toast_error.png)  
![Toast component](src/assets/screenshots/Toast_info.png)  
![Toast component](src/assets/screenshots/Toast_warning.png)  

### SidebarMenu Component

![SidebarMenu component](src/assets/screenshots/SidebarMenu_closed.png)  
![SidebarMenu component](src/assets/screenshots/SidebarMenu_open.png)
![SidebarMenu component](src/assets/screenshots/SidebarMenu_nested.png)
