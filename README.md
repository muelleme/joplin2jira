# Joplin2Jira

This is a plugin for [Joplin](https://joplinapp.org/) that adds a button to the toolbar to copy the selected text (or the entire note if nothing is selected) in Jira's markup format to the clipboard.
Allow to quickly add notes or parts of notes as comments or descriptions to Jira issues.

All markdown to Jira syntax functionality is provided by the great [jira2md](https://github.com/kylefarris/J2M) module.

## Building the plugin

The plugin is built using Webpack, which creates the compiled code in `/dist`. A JPL archive will also be created at the root, which can use to distribute the plugin.

To build the plugin, simply run `npm run dist`.
