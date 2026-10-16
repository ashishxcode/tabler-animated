"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686 -2.332a9 9 0 0 0 -12.093 -12.077"}],["path",{"d":"M10.5 10.5a2.187 2.187 0 0 0 -2.914 .116a1.928 1.928 0 0 0 0 2.768a2.188 2.188 0 0 0 2.914 .116"}],["path",{"d":"M16.5 10.5a2.194 2.194 0 0 0 -2.309 -.302"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.75,12],[15.35,10.25]]}];

export const CreativeCommonsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CreativeCommonsOffIcon.displayName = "CreativeCommonsOffIcon";
