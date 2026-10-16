"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24"}],["path",{"d":"M3 12h9"}],["path",{"d":"M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282"}],["path",{"d":"M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.52,14.14],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,1,3],"o":[9.52,12],"d":[2.4,0],"st":0.1}];

export const WindOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindOffIcon.displayName = "WindOffIcon";
