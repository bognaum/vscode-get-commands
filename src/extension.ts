import * as vsc from 'vscode';
export function activate(context: vsc.ExtensionContext) {
	const commands = [
		vsc.commands.registerCommand('get-commands.getCommands', () => {
			vsc.commands.getCommands(true)
			.then((arr) => vsc.workspace.openTextDocument({content: arr.sort().join("\n")}))
			.then ((doc) =>  vsc.window.showTextDocument(doc));
		}),
	];

	context.subscriptions.push(...commands);
}

export function deactivate() {}
