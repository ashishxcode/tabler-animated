"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-6"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c.164 0 .328 -.002 .49 -.006"}],["path",{"d":"M20 15v-3"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,15.5],"dl":0.2,"st":0.08},{"fx":"wave","n":[0,1,2],"st":0.12,"os":[[12,6],[12,10.5],[8.25,16.5]]}];

export const DatabaseMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseMinusIcon.displayName = "DatabaseMinusIcon";
