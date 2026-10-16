"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"}],["path",{"d":"M10 16h6"}],["path",{"d":"M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 8h3"}],["path",{"d":"M4 12h3"}],["path",{"d":"M4 16h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2,3,4,5],"o":[10,12],"dl":0.2},{"fx":"pop","n":[0],"o":[13,12],"a":0.04}];

export const AddressBookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AddressBookIcon.displayName = "AddressBookIcon";
