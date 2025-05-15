<img src="https://github.com/user-attachments/assets/a8db1b47-d3dd-4127-880d-4933e708166e" width="150" height="150" alt="Bailanysta Logo" />

# Bailanysta  
**A modern Twitter-like social network**  

(Next.js Social Media App for nFactorial Incubator 2025)

Bailanysta is a minimalist social platform where users can share thoughts, interact with posts, and personalize their experience.

link to the video -> https://www.dropbox.com/scl/fi/x6z3bmkxe3ewhjdn7ttfd/clideo_editor_ae9c14493250473690e7f7fd67cd36fa.mp4?rlkey=6kgf08483mtl8vvudo9hkhlco&st=o0ie49a3&dl=0

## ✨ Key Features
- **OAuth Integration**  
  Secure login via Google Auth
- **Personalization**  
  - Light/dark theme toggle  
  - Multi-language support (English/Russian/Kazakh)
- **Core Interactions**  
  - Post creation (text-only)  
  - Like functionality  
- **Responsive Design**  
  Mobile-friendly Twitter-like UI
- **Self-Contained System**  
  Custom backend API with PostgreSQL

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL database
- Google OAuth credentials

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Qonus/bailanysta.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (refer to [.example-env](https://github.com/Qonus/bailanysta/blob/master/.example-env)):
   ```env
   DATABASE_URL=your_neon_db_url
   GOOGLE_CLIENT_ID=your_google_id
   GOOGLE_CLIENT_SECRET=your_google_secret
   NEXTAUTH_SECRET=your_auth_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development Process

### Design Philosophy
- **Mobile-first approach** with clean, Twitter-inspired UI
- **Component-based architecture** for maintainability
- **Progressive enhancement** - core features first, extras later

### Technical Decisions
| Choice | Reasoning |
|--------|-----------|
| Next.js | Fast fullstack development |
| Drizzle+Neon | Type-safe SQL with serverless DB |
| Auth.js | Simplified auth flows |

### Pending Improvements
- [ ] Image upload functionality
- [ ] Post editing/deletion
- [ ] Comment and repost features
- [ ] Notification system
- [ ] User profile interactions: follow/unfollow

## 🧰 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **Tailwind CSS** + CSS Modules
- **next-intl** for i18n

### Backend
- **Drizzle ORM** with TypeScript
- **NeonDB** (Serverless PostgreSQL)
- **Auth.js** v5 authentication

### Infrastructure
- Vercel for zero-config deployment
- GitHub Actions for CI/CD

## 🤔 Why This Stack?
1. **Next.js** - Ideal for rapid prototyping with built-in routing and API routes
2. **Drizzle** - Type-safe database interactions match our TS focus
3. **NeonDB** - Free tier perfect for early-stage projects
4. **Vercel** - Seamless integration with Next.js, Github projects

## ⚠️ Known Issues/Compromises 
2. **Content Management**  
   - Posts are permanent (no edit/delete)
4. **Notifications**
   - Interaction alerts not implemented
