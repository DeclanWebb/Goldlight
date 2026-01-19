# Goldlight – Code Overview

This document explains how the Goldlight codebase works at a technical level.

## Backend Logic
- Express server
- /chat endpoint
- Crisis detection runs BEFORE any AI logic
- No therapy, diagnosis, or treatment logic exists

## Frontend Logic
- React + Vite
- Stateless UI rendering
- Backend URL injected via environment variable
- Static build compatible with GitHub Pages

## Safety Guarantees
- Crisis language triggers a hard stop
- AI never improvises crisis responses
- Disclaimers are enforced in UI

This file exists to help contributors understand the code safely.