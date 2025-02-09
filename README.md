To summarize the process of setting up and configuring TypeScript in your project:

1. **Install TypeScript**:
   - **Globally**: Allows usage across all projects.
     ```bash
     npm install -g typescript
     ```
   - **Locally**: Installs TypeScript as a development dependency for the current project.
     ```bash
     npm install --save-dev typescript
     ```

2. **Initialize the `tsconfig.json` File**:
   - In your project directory, run:
     ```bash
     tsc --init
     ```
     This command generates a `tsconfig.json` file with default configurations. citeturn0search1

3. **Customize the `tsconfig.json` File**:
   - Open `tsconfig.json` in a text editor.
   - Modify the `compilerOptions` to suit your project's needs. Key options include:
     - **`target`**: Specifies the ECMAScript version for the output JavaScript (e.g., `"ES6"`).
     - **`module`**: Defines the module system to use (e.g., `"commonjs"` for Node.js projects).
     - **`outDir`**: Designates the directory for the compiled JavaScript files (e.g., `"./dist"`).
     - **`rootDir`**: Indicates the root directory of your TypeScript source files (e.g., `"./src"`).
     - **`strict`**: Enables strict type-checking options for enhanced code safety.
   - For a comprehensive list of compiler options and their explanations, refer to the official TypeScript documentation. citeturn0search0

4. **Configure Git to Ignore Compiled Files**:
   - Create a `.gitignore` file in your project's root directory (if it doesn't exist).
   - Add the following line to exclude the `dist` folder:
     ```
     /dist
     ```
     This ensures that compiled files are not tracked by Git.

By following these steps, you'll have TypeScript configured in your project with a tailored `tsconfig.json` file, and your version control system will be set up to ignore compiled output files. 