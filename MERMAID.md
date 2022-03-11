```mermaid
stateDiagram
  app --> store
  app --> routers
  routers --> features
  store --> features
  state components {
    [*] --> pages
    pages --> templates
    templates --> organisms
    organisms --> molecules
    molecules --> atoms
  }
  features --> components
  features --> core
  state core {
    [*] --> gateways
    gateways
  }
```
