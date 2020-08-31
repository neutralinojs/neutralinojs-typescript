export class AppLib {
    public showSettings(): void {
        Neutralino.settings.getSettings((data) => {
            alert(JSON.stringify(data));
        }, () => {

        });
    }
}