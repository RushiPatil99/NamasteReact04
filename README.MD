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

<button
className="login-btn"
onClick={() => {
setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
}}

as soon as we call this setbtnNameReact by clicking the button it will update the setbtnNameReact
value/reference and render the header component once again ND IT WILL find the div in older veriosn and newer version and it will see only button is getting changed
this is called as dif algorithm or reconciliation process everybody talking about
this is why react is fast
that's why we need state variables
