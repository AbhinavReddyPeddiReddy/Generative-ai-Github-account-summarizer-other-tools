# AI Tools Platform

## Project Overview

The AI Tools Platform is a web application that provides a suite of intelligent tools powered by the Google Gemini API. Users can access a variety of AI-driven features, including:

1. **Story Generator**: Create engaging stories with the help of AI.
2. **PDF Summarizer**: Extract key insights from PDF documents.
3. **YouTube Summarizer**: Obtain concise summaries of YouTube videos.
4. **GitHub Analyzer**: Analyze GitHub profiles and repositories.

The platform is designed to streamline workflows and enhance productivity by leveraging the power of generative AI technology.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for handling client-side routing in React applications.
- **Sonner**: A toast notification library for React.
- **Lucide**: A set of open-source feather-inspired icons.
- **Google Gemini API**: The AI-powered generative API that provides the core functionality for the platform.

![4f2131b7-17ed-4fd2-8edc-f2d134a37500](https://github.com/user-attachments/assets/c7f2ea7f-f167-4e5c-96aa-01af598041e0)

## Project Structure

The project is organized into the following folders and files:

1. **`package.json`**: The project's dependencies and scripts.
2. **`App.tsx`**: The main entry point of the application, handling routing and layout.
3. **`pages/`**: Contains the individual pages of the application, such as the Home page, Settings page, and the various tool pages.
4. **`components/`**: Reusable React components used throughout the application.
5. **`types.ts`**: Defines the TypeScript types used in the project.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the project's dependencies.
2. **Set up Google Gemini API**: Obtain an API key from the Google Gemini API and add it to the project's settings page.
3. **Start the Development Server**: Run `npm run dev` to start the development server and access the application at `http://localhost:3000`.

## Deployment

To build the project for production, run `npm run build`. This will generate a `dist` folder containing the optimized, static files for your application.

## Future Improvements

- **Implement More Tools**: Expand the platform by adding more AI-powered tools, such as a code generator, image analysis, or language translation.
- **Enhance User Experience**: Improve the user interface and overall user experience based on user feedback.
- **Implement Authentication**: Add user authentication and personalization features to the platform.
- **Improve Error Handling and Logging**: Implement robust error handling and logging mechanisms to better manage issues and monitor the platform's performance.

## Contributions

Contributions to the AI Tools Platform project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
