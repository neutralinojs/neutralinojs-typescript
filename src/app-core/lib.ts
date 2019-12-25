export class AppLib {
    public showSettings(): void {
        Neutralino.settings.getSettings((d: any) => {
            alert(JSON.stringify(d));
        }, () => {

        });
    }
}