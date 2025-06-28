# GitHub Profile Portfolio

A React-based portfolio that displays your GitHub projects organized by programming language.

## Features

- **Project Categorization**: Projects are organized by programming language
- **Modern UI**: Clean, responsive design using Material Tailwind components
- **Project Details**: Each project shows name, description, stars, language, and topics
- **Statistics**: Overview of project counts by language
- **Easy Customization**: Simple data file to update with your actual projects

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Customize Your Projects**:
   Edit `src/data/projects.ts` to include your actual GitHub projects. The file structure is:

   ```typescript
   export const projectsByLanguage: ProjectsByLanguage = {
     "JavaScript/TypeScript": [
       {
         name: "Your Project Name",
         description: "Project description",
         url: "https://github.com/yourusername/project-name",
         stars: 10,
         language: "TypeScript",
         topics: ["react", "typescript", "portfolio"],
       },
     ],
     // Add more language categories...
   };
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

## How to Add Your Projects

1. **Navigate to `src/data/projects.ts`**
2. **Replace the sample data** with your actual GitHub projects
3. **Organize by language category** - you can create custom categories like:
   - "Frontend Development"
   - "Backend Development"
   - "Machine Learning"
   - "Mobile Development"
   - "DevOps & Tools"

## Project Structure

```
src/
├── pages/
│   ├── home.tsx              # Home page with navigation
│   └── github-profile.tsx    # GitHub projects page
├── components/
│   └── navbar.tsx            # Navigation component
├── data/
│   └── projects.ts           # Project data (customize this!)
└── App.tsx                   # Main app with routing
```

## Customization Options

### Adding New Languages

Add new language colors in `src/data/projects.ts`:

```typescript
export const languageColors: { [key: string]: string } = {
  "Your Language": "bg-color-500",
  // ... existing colors
};
```

### Styling

The app uses Material Tailwind CSS. You can customize:

- Colors in the `languageColors` object
- Layout in the component files
- Typography and spacing using Tailwind classes

### Navigation

Update the navbar links in `src/components/navbar.tsx` to match your needs.

## Technologies Used

- **React 18** with TypeScript
- **Material Tailwind** for UI components
- **React Router** for navigation
- **Tailwind CSS** for styling

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Contributing

Feel free to customize this template for your own portfolio! The modular structure makes it easy to:

- Add new project categories
- Modify the design
- Add new features like project filtering or search
- Integrate with GitHub API for real-time data
