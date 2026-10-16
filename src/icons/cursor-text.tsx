"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 12h4"}],["path",{"d":"M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3"}],["path",{"d":"M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const CursorTextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CursorTextIcon.displayName = "CursorTextIcon";
