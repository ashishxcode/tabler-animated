"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941"}],["path",{"d":"M19 19v2h-1v-3"}],["path",{"d":"M8 8v13"}],["path",{"d":"M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0,2,3],"o":[12,21],"a":-16}];

export const ToolsKitchen2OffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsKitchen2OffIcon.displayName = "ToolsKitchen2OffIcon";
