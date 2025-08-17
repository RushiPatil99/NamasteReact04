# not using keys(not acceptable) <<<<< index as key is not recommended <<<< unique id(best practice )

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- -search
- -restaurant container
-     -restaurant card
-     -img
-     -name of res, res rating, res cuisine, res delivery time
- Footer
- -Copyright
- -Links
- -Address
- -Contact
  \*/

# Two types of import/export

export Default Component;
import component from "path";

# Named export/Import

export const Component;
import {component} from "path";

# React Hooks

- it's a normal JS utility function by FB
- There are multilple Hooks

-useState() - powerful state variable in react

- import {useState} from "React"; ---named import
  -useEfffect()
- whenever state variable changes/updates , react re -renders the component
-
- React uses reconciliation algorithm also known as react fiber
  -React creates virtual dom whicg is representation of actual dom
  -it's like nested object(Virtual dom)
