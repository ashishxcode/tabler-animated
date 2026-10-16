"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2"}],["path",{"d":"M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[17,15],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,15],[12,9.5]]}];

export const SkateboardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SkateboardOffIcon.displayName = "SkateboardOffIcon";
