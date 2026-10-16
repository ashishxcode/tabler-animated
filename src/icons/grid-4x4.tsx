"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6h18"}],["path",{"d":"M3 12h18"}],["path",{"d":"M3 18h18"}],["path",{"d":"M6 3v18"}],["path",{"d":"M12 3v18"}],["path",{"d":"M18 3v18"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const Grid4x4Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Grid4x4Icon.displayName = "Grid4x4Icon";
