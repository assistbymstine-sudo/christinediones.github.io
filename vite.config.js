import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Set base to '/<your-repo-name>/' for a project page, or '/' for username.github.io
export default defineConfig({ plugins: [react()], base: './' })
