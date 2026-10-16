"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12"}],["path",{"d":"M10 16h6"}],["path",{"d":"M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2"}],["path",{"d":"M4 8h3"}],["path",{"d":"M4 12h3"}],["path",{"d":"M4 16h3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[13,16],"a":0.35,"dl":0.2},{"fx":"draw","n":[2,3,4,5],"o":[9.5,12],"dl":0.2},{"fx":"pop","n":[0],"o":[13,12],"a":0.04}];

export const AddressBookOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AddressBookOffIcon.displayName = "AddressBookOffIcon";
