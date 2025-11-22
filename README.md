
npm

Installation

Clone the repo or open the project folder.

Install dependencies:

npm install


If you hit peer-dependency issues:

npm install --legacy-peer-deps

Run Locally
npm run dev


Then open http://localhost:3000
 in your browser.

Build for Production
npm run build
npm start

🛠 How the Project Is Designed
Why This Stack

React.js 14 (App Router) gives us fast routing, better server-side rendering, and a more modern developer experience.

CSS v4 makes styling quick and consistent, with improved performance in the latest version.

Recharts simplifies building responsive, interactive visualizations—perfect for dashboards.

React Simple Maps powers the “Revenue by Location” section, making it fully interactive instead of using static images.

State Management

To avoid messy prop drilling (especially for the sidebar toggle), a SidebarProvider was created using React Context.
This way, both the TopBar and the Sidebar can access the same open/close state cleanly.

Theme (Dark/Light Mode)

We used next-themes for theme handling and relied heavily on CSS variables.
This allows components to automatically update based on the current theme—no conditional classNames needed.

💡 Challenges We Faced & How We Fixed Them
1. Keeping Dark Mode Consistent

Problem: Only the header changed theme at first. Other components were stuck with hardcoded colors.
Fix:

Switched everything to semantic CSS variables like --background and --foreground.

Updated Tailwind's dark-mode selector to :root.dark to fix a specificity conflict.

2. Sidebar Toggle Logic

Problem: The sidebar toggle lives in the TopBar, but the sidebar is a sibling component. Sharing state was messy.
Fix:

Introduced a global SidebarProvider to manage the sidebar’s open/close state cleanly across components.

3. Making the Map Interactive

Problem: The design originally used a static placeholder.
Fix:

Integrated react-simple-maps.

Added dynamic city markers (NY, SF, Sydney, Singapore).

Styled the map to automatically follow the current theme

Here is the Deployed version of this project: - https://juspay-ui-two.vercel.app/
