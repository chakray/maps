# Setup

```
  npm i @chakray/maps --save
```

## leaflet

Follow leaflet npm installation tutorial to setup.

```
+ import { CmMapsMod, CmMapsConfig } from '@chakray/maps';

@NgModules({
  ...
  imports: [
    CmMapsMod,
    ...
  ],
  providers: [
    { provide: CmMapsConfig, useClass: CustomConfig }
    ...
  ]
})

// in html
<cm-maps vendor='Leaflet' [origin]='[24.4675334,121.0967624,10.78]'></cm-maps>
```

## gmaps

Follow gmaps installation guide to setup.

```
+ import { CmMapsMod, CmMapsConfig } from '@chakray/maps';

@NgModules({
  ...
  imports: [
    CmMapsMod,
    ...
  ],
  providers: [
    { provide: CmMapsConfig, useClass: CustomConfig }
    ...
  ]
})

// in html
<cm-maps vendor='Gmaps' [origin]='[24.4675334,121.0967624,10.78]'></cm-maps>
```
