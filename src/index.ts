import joplin from 'api';
import {ToolbarButtonLocation} from 'api/types';
import * as j2m from 'jira2md';

joplin.plugins.register({
	onStart: async function() {

    async function convertToJiraFormat() {
      const selectedText = (await joplin.commands.execute('selectedText') as string);

      // If no text is selected, export the entire note
      const toExport = (selectedText === "") ? (await joplin.workspace.selectedNote()).body : selectedText;
      const jiraified = j2m.to_jira(toExport);

      await joplin.clipboard.writeText(jiraified);
    }

    await joplin.commands.register({
			name: 'exportToJira',
			label: 'Export to Jira',
			iconName: 'fab fa-atlassian',
			execute: convertToJiraFormat
		});

    await joplin.views.toolbarButtons.create('exportToJiraButton', 'exportToJira', ToolbarButtonLocation.EditorToolbar);
	},
});
