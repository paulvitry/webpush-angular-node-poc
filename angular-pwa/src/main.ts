import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// {"publicKey":"BKUD9F-IUSdDV2gF084vlwPZxptEP7UYlzYTU6Xvwe6DR9RCxO8fpGEp3pdDhI8yv0lQlkpk3yRTmYqMJYM92xU","privateKey":"wFsQLSBcDZg6ObKEYNNHqjq4Y4HkCXkz-2AI9YDhuAI"}