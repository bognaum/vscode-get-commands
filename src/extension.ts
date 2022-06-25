import * as vsc from 'vscode';
export function activate(context: vsc.ExtensionContext) {
	const commands = [
		// vsc.commands.registerCommand('command', () => {}),
		vsc.commands.registerTextEditorCommand('get-commands.getCommands', (tEditor: vsc.TextEditor, edit: vsc.TextEditorEdit, ...args: any[]) => {
			vsc.commands.getCommands(true).then(
				(arr) => {
					vsc.workspace.openTextDocument({
						content: arr.sort().join("\n")
					}).then ((doc) => {
						vsc.window.showTextDocument(doc);
					});
				}
			);
		}),
	];

	context.subscriptions.push(...commands);
}

export function deactivate() {}
