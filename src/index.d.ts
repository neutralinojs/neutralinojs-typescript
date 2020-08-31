declare var NL_VERSION: string;
declare var NL_NAME: string;
declare var NL_OS: string;
declare var NL_PORT: string;
declare var NL_MODE: string;
declare var NL_CWD: string;

declare namespace Neutralino {

  interface DirectoryData {
    files: [
      {
        name: string;
        type: 'directory' | 'file';
      }
    ]
  }
  
  interface SuccessData {
    success: 'true';
  }
  
  interface StdoutData {
    stdout: string;
  }
  
  interface ValueData {
    value: string;
  }
  
  interface FileData {
    file: string;
  }
  
  interface RamData {
    ram: {
      available: number;
      total: number;
    }
  }
  
  interface StoragePutData {
    key: string;
    content: any;
  }
  
  interface LogSuccessData {
    message: string;
  }

  type LogType =
  'INFO' | 'ERROR' | 'WARN';

  function init(options: any): void;

  namespace settings {
    function getSettings(success?: (data : any) => void, fail?: () => void): void;
  }

  namespace os {
    function runCommand(command: string, success?: (data: StdoutData) => void, fail?: () => void): void;
    function getEnvar(key: string, success?: (data : ValueData) => void, fail?: () => void): void;
    function dialogOpen(title: string, success?: (data : FileData) => void, fail?: () => void): void;
    function dialogSave(title: string, success?: (data : FileData) => void, fail?: () => void): void;
  }

  namespace filesystem {
    function createDirectory(dirName: string, success?: (data : any) => void, fail?: () => void): void;
    function removeDirectory(dirName: string, success?: (data : any) => void, fail?: () => void): void;
    function readDirectory(dirName: string, success?: (data : DirectoryData) => void, fail?: () => void): void;
    function writeFile(filename: string, content: string, success?: (data: SuccessData) => void, fail?: () => void): void;
    function readFile(filename: string, success?: (data : any) => void, fail?: () => void): void;
    function removeFile(filename: string, success?: (data : SuccessData) => void, fail?: () => void): void;
  }

  namespace computer {
    function getRamUsage(success?: (data : RamData) => void, fail?: () => void): void;
  }

  namespace storage {
    function putData(data: StoragePutData, success: () => void, fail?: () => void): void;
    function getData(key: string, success?: (data : any) => void, fail?: () => void): void;
  }

  namespace debug {
    function log(logType: LogType, message: string, success?: (data : LogSuccessData) => void, fail?: () => void): void;
  }

  namespace app {
    function exit(success?: (data : any) => void, fail?: () => void): void;
  }

}