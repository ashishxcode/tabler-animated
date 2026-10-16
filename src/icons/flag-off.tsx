"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5v16"}],["path",{"d":"M19 5v9"}],["path",{"d":"M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0"}],["path",{"d":"M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"swing","n":[0,1,2,3],"o":[12,4.57],"a":7}];

export const FlagOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FlagOffIcon.displayName = "FlagOffIcon";
