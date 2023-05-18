export class LoggingService{
    logStatusChange(status:string){
     console.log('A serverstatus changed, new status:' + status);
    }
}