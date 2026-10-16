"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8l-4 4l4 4"}],["path",{"d":"M17 8l4 4l-2.5 2.5"}],["path",{"d":"M14 4l-1.201 4.805m-.802 3.207l-2 7.988"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"nudge","n":[0],"o":[5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2],"o":[15.5,12],"d":[1.8,0]}];

export const CodeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeOffIcon.displayName = "CodeOffIcon";
