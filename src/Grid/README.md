# Grid

A grid container is based on rows with a 12 column layout.

For full documentation read [Bootstrap docs](http://getbootstrap.com/css/#grid)

For Card API [Card](/?selectedKind=Common&selectedStory=Card&full=0&down=0&left=1&panelRight=0)

## wix-style-react additions to bootstrap

#### Container

Use for main content area.

Use ".wix-container" instead of bootstrap's ".container". 

.wix-container adds to main content area: min width of 894px and max width of 1254px.

#### Row

A simple row according to the bootstrap docs.

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| rtl | bool | - | - | Reverses the columns ordering |
| stretchViewsVertically | bool | - | - | Make all the views in that raw the same height |

#### AutoAdjustedRow

A row with as much columns as children with the same width.
Can be used for multiple (not more than 12) equal cards on the same row.
If you want that the children will be the at the same height, 
just add height: 100%; to them (if there isn't already).
if its a card just add the stretchVertically prop.
##### Notice that the span of each element will be 12 % {the number of children}, so in case of result greater than 0, you'll get incomplete line

#### Col

A simple column according to the bootstrap docs

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| span | number | - | + | The columns span of this column |
| rtl | bool | - | - | Causing the column to float right |
