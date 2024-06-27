import * as core from '@actions/core'
import * as glob from '@actions/glob'


/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const rootPath: string = core.getInput('root')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Starting recursively searching the Kubernetes manifests from ${rootPath} ...`)

    const files = await searchManifestFiles(rootPath);

    // Log the list of Kubernetes manifest files
    files.forEach(file => core.debug(`Found manifest: ${file}`));

    // Use the `files` array here to process the manifests
    core.setOutput('count', files.length.toString());
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

export async function searchManifestFiles(rootPath: string): Promise<string[]> {
  const patterns = [`${rootPath}/**/*.yaml`, `${rootPath}/**/*.yml`];
  const globber = await glob.create(patterns.join('\n'));
  const files: string[] = await globber.glob();

  return files;
}
