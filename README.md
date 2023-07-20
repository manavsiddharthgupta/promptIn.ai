# PromptIn.ai

PromptIn.ai is a web application that allows users to create and share prompts for the Chatbot like GPT-3. You will find a variety of prompts that can be used with ChatGPT. You can also create your own prompts and share them with the community.

The [ChatGPT](https://chat.openai.com/) model is a large language model trained by OpenAI that is capable of generating human-like text. By providing it with a prompt, it can generate responses that continue the conversation or expand on the given prompt.

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Uploadthing](https://uploadthing.com/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.io/)

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run PromptIn.ai.

- Node.js
- PostgreSQL

**Setup**

1. Clone the repo

   ```bash
   git clone https://github.com/manavsiddharthgupta/promptIn.ai.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file similar to `.env.example` and fill in the required environment variables.
4. Get the database URL from [Supabase](https://supabase.com/docs/guides/integrations/prisma#step-1-get-the-connection-string-from-supabase-project-settings) and add it to the `.env` file.
5. Get Google OAuth credentials from [Google Cloud Platform](https://console.cloud.google.com/apis/credentials) and add them to the `.env` file.
6. Get Uploadthing credentials from [Uploadthing](https://uploadthing.com/) by creating new Project and add them to the `.env` file.
7. Get Next-auth secret by running in terminal:

   ```bash
   $ openssl rand -base64 32
   ```

8. Run the migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

9. Run the development server:
   ```bash
   npm run dev
   ```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start contributing to the project by creating a new branch and making a pull request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
