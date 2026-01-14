import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // binds to 0.0.0.0
    port: 5173,
    allowedHosts: [
      'alb-frontend-1251250178.us-east-1.elb.amazonaws.com', // ALB DNS
      'localhost',   // optional, for local dev
      '127.0.0.1'
    ]}})
