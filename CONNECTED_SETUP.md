
# Goldlight – How Everything Is Connected

This file explains how all parts of the Goldlight website work together
once added to GitHub and deployed.

---

## What GitHub Does
GitHub stores the full Goldlight codebase:
- Frontend (website UI)
- Backend (API + AI)
- Legal documents
- Governance files

GitHub itself does NOT run the website. Deployment is required.

---

## Repository Structure (Required)

```
goldlight/
├── frontend/
├── backend/
├── docs/
├── md/
├── README.md
├── CONNECTED_SETUP.md
└── .gitignore
```

If your repository looks like this, everything is correctly connected.

---

## How the Frontend Connects to the Backend

The frontend communicates with the backend using an API URL.

Example:
```js
fetch("https://YOUR-BACKEND-URL/api/ai")
```

This is standard for all modern websites.

---

## How the Backend Connects to AI

The backend connects to OpenAI using an environment variable:

```
OPENAI_API_KEY=your_api_key_here
```

This key must be set on the deployment platform (Render, Railway, etc.).
It should NEVER be committed to GitHub.

---

## Deployment Requirements

To make the website live:

1. Deploy frontend (Vercel or Netlify)
2. Deploy backend (Render, Railway, or Fly.io)
3. Set environment variable:
   OPENAI_API_KEY

Once deployed, all parts work together automatically.

---

## Legal Safety

The AI is restricted to:
- Educational reflection
- Non-diagnostic responses
- No medical, psychological, or legal advice

Legal documents in /docs protect the platform.

---

## Final Confirmation

If:
- Files are uploaded to GitHub
- Frontend is deployed
- Backend is deployed
- API key is set

Then:

✅ Website works  
✅ AI works  
✅ Everything is connected  
✅ Platform is legally safer  

---

This file is safe to commit to GitHub.
