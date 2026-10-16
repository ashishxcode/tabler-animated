"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.536 5.546l-2.536 8.454"}],["path",{"d":"M16 4h2l3 10"}],["path",{"d":"M10 16h4"}],["path",{"d":"M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463"}],["path",{"d":"M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17.5,17],"a":0.35,"dl":0.2},{"fx":"blink","n":[0,1,2,4],"o":[12,12]}];

export const EyeglassOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeglassOffIcon.displayName = "EyeglassOffIcon";
