"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10h18"}],["path",{"d":"M3 14h18"}],["path",{"d":"M10 3v18"}],["path",{"d":"M14 3v18"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const GridGoldenratioIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GridGoldenratioIcon.displayName = "GridGoldenratioIcon";
