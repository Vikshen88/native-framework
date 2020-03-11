import {bootstrap, _} from "framework";
import {appModule} from "./app/app.module";

_.delay(2000).then(() => {
    bootstrap(appModule);
});
